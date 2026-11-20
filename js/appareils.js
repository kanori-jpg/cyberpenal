/* Cyberpénal — « Sur mes appareils » : l'appli sur le téléphone, la synchronisation, la sauvegarde.
   Deux versions du site existent :
   - la version Claude (claude.ai) : outils de Claude, progression synchronisée par la base de l'artifact ;
   - la version GitHub (kanori-jpg.github.io/cyberpenal) : installable, utilisable sans réseau,
     progression synchronisée par un gist secret du compte GitHub (comme Ivrit !).
   Les deux ne partagent pas leur progression : on passe de l'une à l'autre par un fichier de sauvegarde. */
(function () {
  "use strict";
  var GITHUB_URL = "https://kanori-jpg.github.io/cyberpenal/";
  var CLAUDE_URL = "https://claude.ai/artifact/8eELpQk9FcnKjsDcmD38Kf";
  var V = window.CP_VIEWS = window.CP_VIEWS || {};
  function $(s, r) { return (r || document).querySelector(s); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function api() { return window.CP_API; }
  function S() { return window.CP_SYNC; }
  var LOCAL = /^(localhost|127\.0\.0\.1)$/.test(location.hostname) || location.protocol === "file:";
  var GITHUB = /\.github\.io$/.test(location.hostname);
  var CLAUDE = !!(window.claude && typeof window.claude.use === "function");

  /* ---------- L'appli : service worker (version GitHub seulement) ---------- */
  var swOk = GITHUB && "serviceWorker" in navigator && "caches" in window;
  if (swOk) navigator.serviceWorker.register("sw.js").catch(function () {});
  var invite = null;
  window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); invite = e; majPage(); });
  window.addEventListener("appinstalled", function () { invite = null; majPage(); });
  function installee() { return matchMedia("(display-mode: standalone)").matches || navigator.standalone === true; }
  var iPhone = /iPhone|iPad|iPod/.test(navigator.userAgent);

  /* ---------- Synchronisation par gist (version GitHub) ---------- */
  var KEY_GIST = "cyberpenal.gist", API = "https://api.github.com", FICHIER = "cyberpenal-progression.json";
  function lireConf() { try { return JSON.parse(localStorage.getItem(KEY_GIST) || "{}") || {}; } catch (e) { return {}; } }
  var conf = lireConf();
  function ecrireConf() { try { localStorage.setItem(KEY_GIST, JSON.stringify(conf)); } catch (e) {} }
  function actif() { return !!(conf.token && conf.gistId) && !CLAUDE; }
  function nomAppareil() { return /iPhone|Android.+Mobile/.test(navigator.userAgent) ? "téléphone" : /iPad|Android/.test(navigator.userAgent) ? "tablette" : "ordinateur"; }
  function gh(chemin, options) {
    options = options || {};
    var h = { Authorization: "Bearer " + conf.token, Accept: "application/vnd.github+json" };
    if (options.body) h["Content-Type"] = "application/json";
    return fetch(API + chemin, { method: options.method || "GET", body: options.body, cache: "no-store", headers: h }).then(function (r) {
      if (r.status === 401) { var e = new Error("Le code d'accès n'est plus valable (expiré ou supprimé)."); e.jeton = true; throw e; }
      if (r.status === 404 && chemin.indexOf("/gists/") === 0) throw new Error("Le fichier de synchronisation est introuvable sur GitHub.");
      if (!r.ok) throw new Error("GitHub a répondu " + r.status + ".");
      return r.status === 204 ? null : r.json();
    });
  }
  function contenu() { var i = S().instantane(); return JSON.stringify({ application: "cyberpenal", version: 1, savedAt: Date.now(), appareil: nomAppareil(), data: i.data, t: i.t }); }
  function lireDistant() {
    return gh("/gists/" + conf.gistId).then(function (g) {
      var f = g.files && g.files[FICHIER]; if (!f) return null;
      var p = f.truncated ? fetch(f.raw_url, { cache: "no-store" }).then(function (r) { return r.text(); }) : Promise.resolve(f.content);
      return p.then(function (t) { try { return JSON.parse(t); } catch (e) { return null; } });
    });
  }
  var enCours = null;
  function synchroniser() {
    if (!actif()) return Promise.resolve();
    if (enCours) return enCours;
    enCours = lireDistant().then(function (d) {
      if (d && d.data) S().fusionnerDans(d.data, d.t);
      var c = contenu();
      if (d && d.data && JSON.stringify(d.data) === JSON.stringify(JSON.parse(c).data)) return null;
      var files = {}; files[FICHIER] = { content: c };
      return gh("/gists/" + conf.gistId, { method: "PATCH", body: JSON.stringify({ files: files }) });
    }).then(function () { conf.dernier = Date.now(); conf.erreur = null; conf.jetonInvalide = false; },
      function (e) { conf.erreur = e.message || "La synchronisation n'a pas marché."; if (e.jeton) conf.jetonInvalide = true; })
      .then(function () { ecrireConf(); enCours = null; etatMenu(); majPage(); });
    return enCours;
  }
  /* changements locaux : envoi quelques secondes plus tard */
  var vu = {}, minuteur = null;
  function cles() { return (S() && S().CLES) || []; }
  function surveiller() {
    cles().forEach(function (k) { vu[k] = localStorage.getItem(k); });
    setInterval(function () {
      if (!actif()) return;
      var change = false, temps = {};
      try { temps = JSON.parse(localStorage.getItem(S().KEY_T) || "{}") || {}; } catch (e) {}
      cles().forEach(function (k) { var s = localStorage.getItem(k); if (s !== vu[k]) { vu[k] = s; temps[k] = Date.now(); change = true; } });
      if (change) { try { localStorage.setItem(S().KEY_T, JSON.stringify(temps)); } catch (e) {} clearTimeout(minuteur); minuteur = setTimeout(synchroniser, 4000); }
    }, 3000);
  }
  var cacheeDepuis = 0;
  document.addEventListener("visibilitychange", function () {
    if (!actif()) return;
    if (document.visibilityState === "hidden") { cacheeDepuis = Date.now(); if (minuteur) { clearTimeout(minuteur); minuteur = null; synchroniser(); } }
    else if (Date.now() - cacheeDepuis > 30000) synchroniser();
  });
  function connecter(jeton) {
    conf = { token: jeton.trim() };
    return fetch(API + "/user", { headers: { Authorization: "Bearer " + conf.token, Accept: "application/vnd.github+json" }, cache: "no-store" }).then(function (r) {
      if (!r.ok) { conf = {}; throw new Error("GitHub n'accepte pas ce code : vérifie que tu l'as copié en entier."); }
      var portees = r.headers.get("x-oauth-scopes");
      if (portees !== null && portees.split(",").map(function (s) { return s.trim(); }).indexOf("gist") < 0) { conf = {}; throw new Error("Ce code n'a pas la permission « gist » : coche la case « gist » en le créant."); }
      return r.json();
    }).then(function (u) {
      conf.login = u.login;
      var id = null, page = 1;
      function chercher() {
        if (id || page > 5) return Promise.resolve();
        return gh("/gists?per_page=100&page=" + page).then(function (l) {
          if (!l.length) { page = 99; return; }
          var g = l.filter(function (x) { return x.files && x.files[FICHIER]; })[0]; if (g) id = g.id; page++; return chercher();
        });
      }
      return chercher().then(function () {
        if (id) return id;
        var files = {}; files[FICHIER] = { content: contenu() };
        return gh("/gists", { method: "POST", body: JSON.stringify({ description: "Cyberpénal — ma progression (synchronisation entre appareils)", public: false, files: files }) }).then(function (g) { return g.id; });
      });
    }).then(function (id) { conf.gistId = id; ecrireConf(); return synchroniser(); });
  }
  function deconnecter() { conf = {}; ecrireConf(); etatMenu(); majPage(); }
  function ilYa(t) { var m = Math.round((Date.now() - t) / 60000); return m < 1 ? "à l'instant" : m < 60 ? "il y a " + m + " min" : m < 1440 ? "il y a " + Math.round(m / 60) + " h" : "il y a " + Math.round(m / 1440) + " j"; }
  function etatMenu() {
    if (CLAUDE) return;
    var z = $("#syncEtat"); if (!z) return;
    z.textContent = actif() ? (conf.erreur ? "Synchronisation impossible pour l'instant" : conf.dernier ? "✓ Synchronisé entre tes appareils" : "Synchronisation…") : "";
  }

  /* ---------- Sauvegarde dans un fichier (les deux versions) ---------- */
  function exporter(bouton) {
    var texte = contenu(), nom = "cyberpenal-progression-" + new Date().toISOString().slice(0, 10) + ".json";
    var fin = function (ok) { bouton.textContent = ok ? "Fichier enregistré ✓" : "Le fichier n'a pas pu être enregistré"; setTimeout(function () { bouton.textContent = "Enregistrer ma progression dans un fichier"; }, 3000); };
    if (CLAUDE) {
      window.claude.use("downloads").then(function (d) {
        if (!d) return fin(false);
        return d.save({ filename: nom, data: new Blob([texte], { type: "application/json" }) }).then(function () { fin(true); }, function () { fin(false); });
      }).catch(function () { fin(false); });
      return;
    }
    var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([texte], { type: "application/json" })); a.download = nom;
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000); fin(true);
  }
  function importer(fichier, msg) {
    var r = new FileReader();
    r.onload = function () {
      var d = null; try { d = JSON.parse(r.result); } catch (e) {}
      if (!d || d.application !== "cyberpenal" || !d.data) { msg.textContent = "Ce fichier n'est pas une sauvegarde de Cyberpénal."; return; }
      var change = S().fusionnerDans(d.data, d.t);
      msg.textContent = change ? "Progression fusionnée : ce que tu avais ici est gardé, ce qui venait du fichier est ajouté." : "Rien de nouveau dans ce fichier : tu avais déjà tout ici.";
      if (actif()) synchroniser();
    };
    r.readAsText(fichier);
  }

  /* ---------- La page ---------- */
  function blocAppli() {
    if (!GITHUB) return '<div class="card"><h3>L\'appli sur ton téléphone</h3><p>Cyberpénal existe aussi en version installable, qui marche même sans réseau : <a href="' + GITHUB_URL + '" target="_blank" rel="noopener">kanori-jpg.github.io/cyberpenal</a>. Ouvre-la sur ton téléphone, puis ajoute-la à l\'écran d\'accueil.</p>' +
      '<p class="petit">Les outils qui passent par Claude (défi du jour, jeux créés, Mes questions, atelier, audition, import de documents) ne marchent que dans la version Claude. Les deux versions ont chacune leur progression : passe de l\'une à l\'autre avec la sauvegarde dans un fichier, plus bas.</p></div>';
    if (!swOk) return '<div class="card"><h3>L\'appli sur ton téléphone</h3><p>Ce navigateur ne permet pas d\'installer le site. Essaie avec Chrome, Edge ou Safari.</p></div>';
    return '<div class="card"><h3>L\'appli sur ton téléphone</h3>' +
      (installee() ? "<p><b>✓ Cyberpénal est installée comme une appli sur cet appareil.</b></p>"
        : invite ? '<p>Ajoute Cyberpénal à ton écran d\'accueil : elle s\'ouvrira en plein écran, comme une appli.</p><p><button class="btn" id="appInstaller">Installer l\'appli</button></p>'
        : iPhone ? "<p>Pour l'installer : touche <b>Partager</b> (le carré avec une flèche), puis <b>Sur l'écran d'accueil</b>.</p>"
        : "<p>Pour l'installer : ouvre le menu du navigateur <b>⋮</b>, puis <b>Ajouter à l'écran d'accueil</b> (ou <b>Installer l'application</b>).</p>") +
      '<p class="petit">Les pages marchent sans réseau dès la deuxième ouverture. Les outils qui passent par Claude restent dans la <a href="' + CLAUDE_URL + '" target="_blank" rel="noopener">version Claude</a>.</p></div>';
  }
  function blocSync() {
    if (CLAUDE) return '<div class="card"><h3>Synchronisation</h3><p>' + (S() && S().claude() ? "✓ Dans la version Claude, ta progression se synchronise toute seule entre tes appareils." : "Dans la version Claude, ta progression se synchronise toute seule entre tes appareils dès que tu es connectée.") + "</p></div>";
    if (LOCAL) return '<div class="card"><h3>Synchronisation</h3><p class="petit">Cette copie, lancée depuis ton ordinateur, garde sa propre progression. La synchronisation se règle dans la <a href="' + GITHUB_URL + '" target="_blank" rel="noopener">version GitHub</a>.</p></div>';
    if (!actif()) return '<div class="card"><h3>Synchronisation entre mes appareils</h3><p>Ta progression passe toute seule d\'un appareil à l\'autre grâce à ton compte GitHub, comme pour Ivrit. À faire une fois sur chaque appareil :</p>' +
      '<ol><li>Ouvre <a href="https://github.com/settings/tokens/new?scopes=gist&description=Cyberp%C3%A9nal%20synchronisation" target="_blank" rel="noopener">cette page GitHub</a> (connecte-toi si besoin).</li>' +
      "<li>« Expiration » : choisis <b>No expiration</b> (ou 1 an). Ne coche rien d'autre que <b>gist</b>, déjà cochée.</li>" +
      "<li>Tout en bas, clique <b>Generate token</b>, puis copie le code qui commence par <b>ghp_</b>.</li><li>Colle-le ici :</li></ol>" +
      '<div class="row"><input type="password" id="ghJeton" placeholder="ghp_…" autocomplete="off" spellcheck="false" aria-label="Code d\'accès GitHub"><button class="btn" id="ghGo">Connecter cet appareil</button></div>' +
      '<p class="petit" id="ghMsg">Ce code reste dans ce navigateur : il n\'est ni dans ta progression, ni dans les fichiers de sauvegarde. Il ne sert qu\'à lire et écrire tes gists. Si tu as déjà un code pour Ivrit, tu peux réutiliser le même.</p></div>';
    var etat = conf.erreur ? "⚠ " + esc(conf.erreur) + (conf.jetonInvalide ? " Déconnecte cet appareil, puis reconnecte-le avec un nouveau code." : " Nouvel essai à la prochaine modification.")
      : conf.dernier ? "✓ Synchronisée " + ilYa(conf.dernier) + "." : "Première synchronisation…";
    return '<div class="card"><h3>Synchronisation entre mes appareils</h3><p><b>' + etat + '</b></p><p class="petit">Cet appareil (' + nomAppareil() + ") est relié au compte GitHub <b>" + esc(conf.login || "") + "</b>. Ta progression s'envoie quelques secondes après chaque changement, et se met à jour quand tu ouvres le site.</p>" +
      '<div class="row"><button class="btn" id="ghNow">Synchroniser maintenant</button><button class="btn ghost" id="ghOff">Déconnecter cet appareil</button></div></div>';
  }
  function blocFichier() {
    return '<div class="card"><h3>Sauvegarde dans un fichier</h3><p>Pour garder une copie de ta progression, ou la passer de la version Claude à la version GitHub (et inversement). À l\'import, rien n\'est écrasé : les deux progressions sont fusionnées.</p>' +
      '<div class="row"><button class="btn" id="fExport">Enregistrer ma progression dans un fichier</button><label class="btn ghost" for="fImport">Importer un fichier</label><input type="file" id="fImport" accept=".json,application/json" hidden></div><p class="petit" id="fMsg"></p></div>';
  }
  function majPage() {
    if (!$("#appareilsPage")) return;
    $("#appareilsPage").innerHTML = blocAppli() + blocSync() + blocFichier();
    var b = $("#appInstaller"); if (b) b.addEventListener("click", function () { var e = invite; invite = null; if (e) { e.prompt(); e.userChoice.then(majPage, majPage); } });
    var go = $("#ghGo"); if (go) go.addEventListener("click", function () {
      var j = $("#ghJeton").value.trim(); if (!j) return;
      go.disabled = true; $("#ghMsg").textContent = "Connexion à GitHub…";
      connecter(j).then(majPage, function (e) { $("#ghMsg").textContent = "⚠ " + e.message; go.disabled = false; });
    });
    var now = $("#ghNow"); if (now) now.addEventListener("click", function () { now.disabled = true; synchroniser(); });
    var off = $("#ghOff"); if (off) off.addEventListener("click", deconnecter);
    $("#fExport").addEventListener("click", function (e) { exporter(e.currentTarget); });
    $("#fImport").addEventListener("change", function (e) { var f = e.target.files[0]; if (f) importer(f, $("#fMsg")); e.target.value = ""; });
  }
  V.appareils = function () {
    api().page('<p class="eyebrow">Mes outils</p><h1>Sur mes appareils</h1><p class="lead">Installer Cyberpénal sur ton téléphone, retrouver ta progression partout, et en garder une copie.</p><div id="appareilsPage"></div>');
    majPage();
  };

  /* au démarrage (après le chargement des autres modules) */
  window.addEventListener("load", function () {
    if (CLAUDE || !S()) return;
    surveiller(); etatMenu();
    if (actif()) synchroniser();
  });
})();
