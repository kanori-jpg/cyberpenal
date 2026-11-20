/* Mes questions — un endroit pour poser ses questions de droit pénal du numérique et garder les réponses.
   En ligne : conversations enregistrées dans la base de l'artifact (donc retrouvées sur tous
   tes appareils) et réponses de Claude. En local : enregistrement dans le navigateur, sans réponses. */
(function () {
  "use strict";

  var KEY = "cyberpenal.questions.v1";
  var COLL = "questions";
  var MAX_TOURS = 24;      // on garde les derniers échanges d'un fil

  var cap = { sample: null, db: null };
  var fils = [];           // conversations, la plus récente d'abord
  var courant = null;      // fil ouvert
  var ctrl = null, enCours = false, etat = "", filtre = false;
  var fileEcriture = Promise.resolve();

  var SUGGESTIONS = [
    "Quelle différence entre accès et maintien frauduleux ?",
    "Comment qualifier une attaque par rançongiciel ?",
    "Un enquêteur peut-il se faire passer pour un mineur en ligne ?",
    "Quand peut-on obtenir une adresse IP auprès d'un opérateur ?",
    "Qu'est-ce qui change avec le règlement e-evidence ?",
    "Que fait concrètement un enquêteur cyber pendant une perquisition ?"
  ];

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function uid() { return "q" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function maintenant() { return new Date().toISOString(); }
  function jour(iso) {
    try { return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }); }
    catch (e) { return ""; }
  }
  function actif() { return !!document.getElementById("qPage"); }

  /* ---------- Ce que le site contient, en résumé, pour situer les réponses ---------- */
  var RESUME = null;
  function resumeDuSite() {
    if (RESUME) return RESUME;
    var l = ["Ce que cette personne a déjà à sa disposition sur son site de révision :"];
    l.push("\nLes leçons et leurs points clés :");
    COURS.forEach(function (c) {
      l.push("— " + c.titre + " : " + (c.retenir || []).slice(0, 3).join(" ; "));
    });
    l.push("\nLes infractions résumées sur le site (version Légifrance du 19 novembre 2026), avec leur peine de base :");
    INFRACTIONS.forEach(function (f) { l.push("- " + f.art + " : " + f.titre + " — " + f.peines[0][1]); });
    l.push("\nElle dispose aussi de fiches sur les actes d'enquête (CPP), de résumés de jurisprudence, d'une page sur le droit européen, d'un guide pour les victimes, de cas pratiques et d'un lexique.");
    RESUME = l.join("\n");
    return RESUME;
  }

  function consigne() {
    return "Tu réponds aux questions d'une personne qui prépare un stage dans un service qui lutte contre la " +
      "cybercriminalité, en France. Tu es un juriste pédagogue, spécialiste du droit pénal du numérique et de la " +
      "procédure pénale : précis, clair, qui prend ses questions au sérieux.\n\n" +
      "Comment tu réponds :\n" +
      "- En français, en la tutoyant, simplement, sans jargon. Si tu emploies un mot technique, tu l'expliques.\n" +
      "- Court : 5 à 12 lignes. Pas de longue dissertation, pas de titres. Des paragraphes courts.\n" +
      "- Tu distingues clairement ce que dit le texte, ce qu'en dit la jurisprudence, et ce qui reste discuté.\n" +
      "- Tu cites les articles (Code pénal, CPP, LCEN, textes européens) quand c'est utile, mais si tu n'es pas " +
      "sûr d'un numéro, d'une peine ou d'une date, tu le dis plutôt que d'inventer. Le droit change souvent : " +
      "invite à vérifier sur Légifrance pour tout point précis. Le Code de procédure pénale sera renuméroté au 1er janvier 2029.\n" +
      "- Tu ne fais pas semblant de tout savoir : devant une question difficile ou discutée, tu le reconnais.\n" +
      "- Tu ne donnes jamais de mode d'emploi pour commettre une infraction ou contourner une enquête ; tu restes " +
      "sur le droit, la procédure et le fonctionnement général des menaces.\n" +
      "- Si elle décrit une situation où elle est elle-même victime, tu l'orientes vers le dépôt de plainte, " +
      "PHAROS ou cybermalveillance.gouv.fr, et tu lui conseilles un professionnel du droit pour un avis personnel.\n" +
      "- Tu termines parfois, quand c'est naturel, par une question ou une piste pour aller plus loin. " +
      "Jamais systématiquement.\n\n" +
      resumeDuSite() + "\n\n" +
      "Tu peux faire le lien avec ce qu'elle a déjà vu (« tu as vu ça dans la leçon sur… »), mais tu n'es " +
      "pas limité à ce contenu : réponds à sa vraie question.";
  }

  /* ---------- Stockage ---------- */
  function lireLocal() {
    try { return JSON.parse(localStorage.getItem(KEY) || "[]") || []; } catch (e) { return []; }
  }
  function ecrireLocal() {
    try { localStorage.setItem(KEY, JSON.stringify(fils)); } catch (e) {}
  }

  function trier() {
    fils.sort(function (a, b) { return (b.modifie || b.cree || "").localeCompare(a.modifie || a.cree || ""); });
  }

  function enregistrerFil(fil) {
    fil.modifie = maintenant();
    trier();
    if (!cap.db) { ecrireLocal(); return Promise.resolve(); }
    var corps = {};
    Object.keys(fil).forEach(function (k) { if (k !== "id") corps[k] = fil[k]; });
    fileEcriture = fileEcriture.then(function () {
      return cap.db.collection(COLL).doc(fil.id).set(corps);
    }).catch(function () {
      etat = "erreur";
      if (actif()) majEtat();
    });
    return fileEcriture;
  }

  function supprimerFil(fil) {
    fils = fils.filter(function (f) { return f.id !== fil.id; });
    if (courant && courant.id === fil.id) courant = null;
    if (!cap.db) { ecrireLocal(); rendre(); return; }
    fileEcriture = fileEcriture.then(function () {
      return cap.db.collection(COLL).doc(fil.id).delete();
    }).catch(function () {});
    rendre();
  }

  function charger() {
    if (!cap.db) { fils = lireLocal(); trier(); etat = ""; return Promise.resolve(); }
    etat = "chargement";
    return cap.db.collection(COLL).limit(300).get().then(function (snap) {
      fils = snap.docs.map(function (d) {
        var o = d.data() || {};
        var f = {};
        /* on recopie tout ce qui est stocké, pour ne rien perdre */
        Object.keys(o).forEach(function (k) { f[k] = o[k]; });
        f.id = d.id;
        if (!Array.isArray(f.messages)) f.messages = [];
        return f;
      });
      trier();
      etat = "";
    }).catch(function () {
      etat = "erreur"; fils = lireLocal(); trier();
    });
  }

  /* ---------- Capacités ---------- */
  function init() {
    if (!window.claude || typeof window.claude.use !== "function") { fils = lireLocal(); trier(); return; }
    etat = "chargement";
    Promise.all([
      window.claude.use("sample").catch(function () { return null; }),
      window.claude.use("db").catch(function () { return null; })
    ]).then(function (r) {
      cap.sample = r[0]; cap.db = r[1];
      return charger();
    }).then(function () {
      if (actif()) rendre();
    }, function () { if (actif()) rendre(); });
  }

  /* ---------- Page ---------- */
  function html() {
    return '<p class="eyebrow"><a href="#/accueil">Accueil</a> · Mes questions</p>' +
      "<h1>Mes questions</h1>" +
      '<p class="lead">Pose ici tes questions de droit et de procédure, même celles qui te semblent simples. Chaque échange est gardé pour que tu puisses le relire, et tu peux marquer celles que tu veux poser à ton maître de stage.</p>' +
      '<div id="qPage"></div>';
  }

  function majEtat() {
    var e = $("#qEtat"); if (!e) return;
    var t = "";
    if (etat === "chargement") t = "Chargement de tes questions…";
    else if (etat === "erreur") t = "L'espace en ligne n'a pas répondu : tes questions sont enregistrées sur cet appareil uniquement.";
    else if (!cap.sample) t = "Les réponses ont besoin de Claude : ouvre la version Claude du site (sur claude.ai). Tu peux déjà écrire tes questions ici, elles seront gardées.";
    else if (cap.db) t = "✓ Enregistré en ligne : tu retrouves ces échanges sur ton téléphone et sur ton ordinateur.";
    else t = "Enregistré dans ce navigateur, sur cet appareil.";
    e.textContent = t;
    e.className = "perso-etat" + (etat === "erreur" || !cap.sample ? " attention" : (cap.db && !etat ? " ok" : ""));
  }

  function rendre() {
    var z = $("#qPage"); if (!z) return;
    z.innerHTML = courant ? vueFil() : vueListe();
    majEtat();
    courant ? brancherFil() : brancherListe();
  }

  /* --- Liste des conversations --- */
  function vueListe() {
    var marquees = fils.filter(function (f) { return f.aDemander; }).length;
    var vus = filtre ? fils.filter(function (f) { return f.aDemander; }) : fils;

    return '<section class="q-poser card">' +
      "<h3>Quelle est ta question ?</h3>" +
      '<textarea id="qNouvelle" rows="3" placeholder="Écris ta question, même si elle te semble naïve ou compliquée…"></textarea>' +
      '<div class="row" style="margin-top:12px"><button class="btn" id="qEnvoyer">Poser la question</button></div>' +
      '<p class="petit" style="margin-top:14px">Ou pars d\'une de celles-ci :</p>' +
      '<div class="q-suggestions">' + SUGGESTIONS.map(function (s) {
        return '<button class="q-suggestion" data-s="' + esc(s) + '">' + esc(s) + "</button>";
      }).join("") + "</div>" +
      '<p class="jeu-msg" id="qMsg" hidden></p>' +
      "</section>" +
      '<p class="perso-etat" id="qEtat"></p>' +

      (fils.length
        ? '<div class="q-entete"><h2>Mes échanges</h2>' +
          (marquees ? '<button class="btn ghost small" id="qFiltre">' +
            (filtre ? "Tout afficher" : "À demander (" + marquees + ")") + "</button>" : "") + "</div>" +
          '<div class="q-liste">' + vus.map(function (f) {
            var dernier = f.messages && f.messages.length ? f.messages[f.messages.length - 1] : null;
            return '<article class="q-fil card" data-id="' + esc(f.id) + '">' +
              '<div class="q-fil-tete"><h3>' + esc(f.titre || "Question") + "</h3>" +
              (f.aDemander ? '<span class="pill essentiel">À demander</span>' : "") + "</div>" +
              '<p class="petit">' + esc(jour(f.cree)) + " · " +
              Math.ceil((f.messages || []).length / 2) + " question" + (Math.ceil((f.messages || []).length / 2) > 1 ? "s" : "") + "</p>" +
              (dernier ? '<p class="q-apercu">' + esc(dernier.t.slice(0, 160)) + (dernier.t.length > 160 ? "…" : "") + "</p>" : "") +
              '<div class="row"><button class="btn ghost small" data-act="ouvrir">Relire et continuer</button>' +
              '<button class="btn ghost small" data-act="marquer">' + (f.aDemander ? "Ne plus marquer" : "À demander en stage") + "</button>" +
              '<button class="btn ghost small" data-act="supprimer">Supprimer</button></div>' +
              "</article>";
          }).join("") + "</div>"
        : '<p class="petit">Tes échanges apparaîtront ici, du plus récent au plus ancien.</p>');
  }

  function brancherListe() {
    var champ = $("#qNouvelle");
    $("#qEnvoyer").addEventListener("click", function () { demarrer(champ.value); });
    champ.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); demarrer(champ.value); }
    });
    $$(".q-suggestion").forEach(function (b) {
      b.addEventListener("click", function () { demarrer(b.dataset.s); });
    });
    var f = $("#qFiltre");
    if (f) f.addEventListener("click", function () { filtre = !filtre; rendre(); });

    $$(".q-fil").forEach(function (el) {
      var fil = fils.filter(function (x) { return x.id === el.dataset.id; })[0];
      if (!fil) return;
      $$("[data-act]", el).forEach(function (b) {
        b.addEventListener("click", function () {
          if (b.dataset.act === "ouvrir") { courant = fil; rendre(); }
          else if (b.dataset.act === "marquer") { fil.aDemander = !fil.aDemander; enregistrerFil(fil); rendre(); }
          else if (b.dataset.sur) supprimerFil(fil);
          else { b.dataset.sur = "1"; b.textContent = "Confirmer la suppression"; }
        });
      });
    });
  }

  /* --- Un fil ouvert --- */
  function vueFil() {
    return '<section class="q-fil-ouvert card">' +
      '<div class="jeu-tete"><button class="btn ghost small" id="qRetour">← Toutes mes questions</button>' +
      '<span class="jeu-score"></span>' +
      '<button class="btn ghost small" id="qMarquer">' + (courant.aDemander ? "✓ À demander" : "À demander en stage") + "</button></div>" +
      '<h3 class="q-titre">' + esc(courant.titre || "Question") + "</h3>" +
      '<div class="chat-fil q-fil-messages" id="qMessages"></div>' +
      '<div class="chat-saisie">' +
      '<textarea id="qSuite" rows="3" placeholder="Poser une autre question, ou demander une précision…"></textarea>' +
      '<div class="row" style="margin-top:10px"><button class="btn" id="qSuiteEnvoyer">Envoyer</button>' +
      '<button class="btn ghost" id="qStop" hidden>Arrêter</button></div>' +
      "</div></section>" +
      '<p class="perso-etat" id="qEtat"></p>';
  }

  function brancherFil() {
    rendreMessages();
    $("#qRetour").addEventListener("click", function () {
      if (ctrl) { ctrl.abort(); ctrl = null; }
      enCours = false; courant = null; rendre();
    });
    $("#qMarquer").addEventListener("click", function () {
      courant.aDemander = !courant.aDemander;
      enregistrerFil(courant);
      $("#qMarquer").textContent = courant.aDemander ? "✓ À demander" : "À demander en stage";
    });
    $("#qSuiteEnvoyer").addEventListener("click", function () { envoyer($("#qSuite").value); });
    $("#qStop").addEventListener("click", function () { if (ctrl) ctrl.abort(); });
    $("#qSuite").addEventListener("keydown", function (e) {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); envoyer($("#qSuite").value); }
    });
  }

  function rendreMessages() {
    var z = $("#qMessages"); if (!z) return;
    z.innerHTML = (courant.messages || []).map(function (m) {
      return '<div class="chat-msg ' + (m.r === "moi" ? "moi" : "claude") + '">' + esc(m.t) + "</div>";
    }).join("");
    z.scrollTop = z.scrollHeight;
  }

  /* ---------- Poser une question ---------- */
  function demarrer(texte) {
    texte = (texte || "").trim();
    var msg = $("#qMsg");
    if (!texte) { msg.textContent = "Écris d'abord ta question."; msg.hidden = false; $("#qNouvelle").focus(); return; }
    courant = {
      id: uid(),
      titre: texte.length > 80 ? texte.slice(0, 80) + "…" : texte,
      messages: [{ r: "moi", t: texte }],
      aDemander: false,
      cree: maintenant(), modifie: maintenant()
    };
    fils.unshift(courant);
    rendre();
    repondre();
  }

  function envoyer(texte) {
    if (enCours) return;
    texte = (texte || "").trim();
    if (!texte) { $("#qSuite").focus(); return; }
    courant.messages.push({ r: "moi", t: texte });
    $("#qSuite").value = "";
    rendreMessages();
    repondre();
  }

  function repondre() {
    if (!cap.sample) {
      enregistrerFil(courant);
      var z = $("#qMessages");
      if (z) {
        var d = document.createElement("div");
        d.className = "chat-msg info";
        d.textContent = "Ta question est gardée. Ouvre la version Claude du site (sur claude.ai) pour avoir la réponse de Claude.";
        z.appendChild(d);
        z.scrollTop = z.scrollHeight;
      }
      return;
    }
    enCours = true;
    $("#qSuiteEnvoyer").disabled = true;
    $("#qStop").hidden = false;

    var z = $("#qMessages");
    var bulle = document.createElement("div");
    bulle.className = "chat-msg claude";
    bulle.textContent = "…";
    z.appendChild(bulle);
    z.scrollTop = z.scrollHeight;

    var tours = [{ role: "user", content: consigne() }];
    var recents = courant.messages.slice(-MAX_TOURS);
    recents.forEach(function (m) {
      tours.push({ role: m.r === "moi" ? "user" : "assistant", content: m.t });
    });

    ctrl = new AbortController();
    cap.sample(tours, {
      modelTier: "default",
      cache: false,
      signal: ctrl.signal,
      onText: function (u) { bulle.textContent = u.text; z.scrollTop = z.scrollHeight; }
    }).then(function (res) {
      bulle.textContent = res.text;
      courant.messages.push({ r: "claude", t: res.text });
      finTour();
      enregistrerFil(courant);
      var s = $("#qSuite"); if (s) s.focus();
    }).catch(function (e) {
      var code = e && e.code;
      if (e && e.text) {
        bulle.textContent = e.text;
        courant.messages.push({ r: "claude", t: e.text });
      } else {
        bulle.remove();
      }
      var m = {
        cancelled: "Réponse arrêtée. Tu peux reposer ta question.",
        not_granted: "Tu n'as pas autorisé ce site à utiliser Claude. Recharge la page pour qu'il te le redemande.",
        sampling_disabled: "Claude n'est pas disponible sur ce compte.",
        rate_limited: "Trop de demandes d'un coup, ou ta limite d'usage est atteinte. Réessaie un peu plus tard.",
        session_expired: "Ta session a expiré : reconnecte-toi puis réessaie.",
        refused: "Claude n'a pas pu répondre à cette question.",
        prompt_too_large: "Cet échange est devenu très long. Repars sur une nouvelle question."
      };
      var info = document.createElement("div");
      info.className = "chat-msg info";
      info.textContent = m[code] || "La réponse n'est pas arrivée. Ta question est gardée : réessaie.";
      z.appendChild(info);
      z.scrollTop = z.scrollHeight;
      finTour();
      enregistrerFil(courant);
    });
  }

  function finTour() {
    enCours = false; ctrl = null;
    var b = $("#qSuiteEnvoyer"), s = $("#qStop");
    if (b) b.disabled = false;
    if (s) s.hidden = true;
  }

  function after() { rendre(); }

  window.QUESTIONS = { html: html, after: after };
  init();
})();
