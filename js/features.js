/* Cyberpénal — outils ajoutés le 20/11/2026 :
   recherche dans tout le site, mes révisions (points faibles + révision espacée),
   atelier (qualifier un fait réel, rédiger un acte), comparateur, arbre « quelle infraction ? »,
   lexique au survol.
   Les vues s'enregistrent dans window.CP_VIEWS ; app.js les appelle depuis son routeur
   et expose ses outils dans window.CP_API. */
(function () {
  "use strict";
  var V = window.CP_VIEWS = window.CP_VIEWS || {};
  function api() { return window.CP_API; }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function norm(s) { return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function sansBalises(h) { var d = document.createElement("div"); d.innerHTML = h || ""; return (d.textContent || "").replace(/\s+/g, " ").trim(); }
  function INF() { return window.INFRACTIONS; }
  function inf(id) { var l = INF(); for (var i = 0; i < l.length; i++) if (l[i].id === id) return l[i]; return null; }
  function acte(id) { var l = window.ACTES || []; for (var i = 0; i < l.length; i++) if (l[i].id === id) return l[i]; return null; }
  function artLabel(f) { return f.code === "Code pénal" ? "art. " + f.art : f.art; }
  function themeNom(id) { var t = (window.THEMES || []).filter(function (x) { return x.id === id; })[0]; return t ? t.court : ""; }
  function themeCouleur(id) { var t = (window.THEMES || []).filter(function (x) { return x.id === id; })[0]; return t ? t.couleur : ""; }
  function aujourdhui() { var d = new Date(); return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate(); }
  function dansJours(n) { var d = new Date(); d.setDate(d.getDate() + n); return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate(); }
  function lire(k, def) { try { var v = JSON.parse(localStorage.getItem(k) || "null"); return v == null ? def : v; } catch (e) { return def; } }
  function ecrire(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function arme(b, texte, action) {
    b.addEventListener("click", function () {
      if (b.dataset.armed) { action(); return; }
      var avant = b.textContent; b.dataset.armed = "1"; b.textContent = texte;
      setTimeout(function () { if (b.isConnected) { delete b.dataset.armed; b.textContent = avant; } }, 3000);
    });
  }

  /* ---------- Claude (capacité « sample » du site publié) ---------- */
  var claudeP = null;
  function claude() {
    if (!claudeP) {
      claudeP = (window.claude && typeof window.claude.use === "function")
        ? window.claude.use("sample").catch(function () { return null; }) : Promise.resolve(null);
    }
    return claudeP;
  }
  function msgErreur(e) {
    if (e && e.code === "not_granted") return "Tu n'as pas autorisé ce site à utiliser Claude. Recharge la page pour qu'il te le redemande.";
    if (e && e.code === "rate_limited") return "Trop de demandes d'un coup. Attends une minute et réessaie.";
    return "Claude n'a pas pu répondre. Réessaie un peu plus tard.";
  }
  var HORS_LIGNE = "Cet outil a besoin de Claude : il ne marche que dans la version Claude du site, sur claude.ai.";

  /* ======================================================================
     1. RECHERCHE DANS TOUT LE SITE
     ====================================================================== */
  var index = null;
  function construireIndex() {
    var L = [];
    function add(type, titre, url, texte, sous) { L.push({ type: type, titre: titre, url: url, sous: sous || "", texte: texte, n: norm(titre + " " + (sous || "") + " " + texte), nt: norm(titre + " " + (sous || "")) }); }
    INF().forEach(function (f) {
      add("Fiches", f.titre, "#/infraction/" + f.id, [(window.CITATIONS || {})[f.id], f.materiel, f.moral, f.peines.map(function (p) { return p[0] + " " + p[1]; }).join(" "), f.notes, f.motscles].join(" "), f.code + " " + artLabel(f));
    });
    (window.COURS || []).forEach(function (c) { add("Cours", c.titre, "#/cours/" + c.id, c.resume + " " + sansBalises(c.contenu) + " " + (c.retenir || []).join(" ")); });
    (window.ACTES || []).forEach(function (a) { add("Actes d'enquête", a.titre, "#/acte/" + a.id, [a.citation, a.qui, a.conditions, a.duree, a.plus].join(" "), a.art); });
    (window.JURIS || []).forEach(function (j) { add("Jurisprudence", j.court, "#/arret/" + j.id, [j.faits, j.question, j.solution, j.portee].join(" "), j.juridiction + ", " + j.date + " " + j.num); });
    (window.CAS || []).forEach(function (c) { add("Cas pratiques", c.titre, "#/cas/" + c.id, c.faits + " " + c.correction); });
    (window.EUROPE || []).forEach(function (e) { add("Europe et international", e.nom, "#/europe", [e.quoi, e.france, e.statut].join(" "), e.ref); });
    (window.VICTIMES || []).forEach(function (v) { add("Victimes", v.titre, "#/victimes", (v.etapes || []).join(" ")); });
    (window.LEXIQUE || []).forEach(function (l) { add("Lexique", l[0], "#/lexique", l[1]); });
    if (window.OFAC_PAGE) add("Pages", "L'OFAC, l'Office anti-cybercriminalité", "#/ofac", sansBalises(window.OFAC_PAGE.html()));
    if (window.RESSOURCES_PAGE) add("Pages", "Les dispositifs publics gratuits", "#/ressources", sansBalises(window.RESSOURCES_PAGE.html()));
    return L;
  }
  function chercher(q) {
    var termes = norm(q).split(/[\s,;]+/).filter(function (t) { return t.length > 1 || /\d/.test(t); });
    if (!termes.length) return [];
    if (!index) index = construireIndex();
    var res = [];
    index.forEach(function (e) {
      for (var i = 0; i < termes.length; i++) if (e.n.indexOf(termes[i]) < 0) return;
      var score = 0;
      termes.forEach(function (t) { if (e.nt.indexOf(t) >= 0) score += 10; var k = 0, p = -1; while ((p = e.n.indexOf(t, p + 1)) >= 0 && k < 20) k++; score += k; });
      res.push({ e: e, score: score, termes: termes });
    });
    return res.sort(function (a, b) { return b.score - a.score; });
  }
  function extrait(texte, termes) {
    var n = norm(texte), pos = -1;
    termes.forEach(function (t) { var p = n.indexOf(t); if (p >= 0 && (pos < 0 || p < pos)) pos = p; });
    var debut = Math.max(0, pos - 70), fin = Math.min(texte.length, debut + 220);
    var s = texte.slice(debut, fin), nS = norm(s);
    var marques = [];
    termes.forEach(function (t) { var p = -1; while ((p = nS.indexOf(t, p + 1)) >= 0) marques.push([p, p + t.length]); });
    marques.sort(function (a, b) { return a[0] - b[0]; });
    var out = "", i = 0;
    marques.forEach(function (m) { if (m[0] < i) return; out += esc(s.slice(i, m[0])) + "<mark>" + esc(s.slice(m[0], m[1])) + "</mark>"; i = m[1]; });
    out += esc(s.slice(i));
    return (debut > 0 ? "… " : "") + out + (fin < texte.length ? " …" : "");
  }
  var ORDRE_TYPES = ["Fiches", "Cours", "Actes d'enquête", "Jurisprudence", "Cas pratiques", "Europe et international", "Victimes", "Pages", "Lexique"];
  V.recherche = function (args) {
    var q = args[0] || "";
    api().page('<p class="eyebrow">Outils</p><h1>Rechercher</h1>' +
      '<p class="lead">Dans tout le site : fiches, cours, actes d\'enquête, jurisprudence, cas pratiques, Europe, victimes, lexique.</p>' +
      '<input type="search" class="search" id="rechQ" placeholder="Ex. : logs, VPN, 60-1, sextorsion, hébergeur…" autocomplete="off" value="' + esc(q) + '">' +
      '<div id="rechRes" class="rech-res" aria-live="polite"></div>');
    var input = $("#rechQ"), t;
    function rendre() {
      var v = input.value.trim(), z = $("#rechRes");
      try { history.replaceState(null, "", "#/recherche" + (v ? "/" + encodeURIComponent(v) : "")); } catch (e) {}
      if (!v) { z.innerHTML = '<p class="petit">Tape un mot, un numéro d\'article ou une expression. Plusieurs mots : seuls les résultats qui les contiennent tous s\'affichent.</p>'; return; }
      var r = chercher(v);
      if (!r.length) { z.innerHTML = "<p>Aucun résultat pour « " + esc(v) + " ». Essaie un mot plus court ou sans accent.</p>"; return; }
      var groupes = {};
      r.forEach(function (x) { (groupes[x.e.type] = groupes[x.e.type] || []).push(x); });
      z.innerHTML = '<p class="petit">' + r.length + " résultat" + (r.length > 1 ? "s" : "") + "</p>" +
        ORDRE_TYPES.filter(function (k) { return groupes[k]; }).map(function (k) {
          return "<h2>" + esc(k) + ' <span class="petit">' + groupes[k].length + "</span></h2>" + groupes[k].slice(0, 25).map(function (x) {
            return '<a class="rech-item" href="' + x.e.url + '"><b>' + esc(x.e.titre) + "</b>" + (x.e.sous ? ' <span class="rech-sous">' + esc(x.e.sous) + "</span>" : "") +
              "<span>" + extrait(x.e.texte, x.termes) + "</span></a>";
          }).join("");
        }).join("");
    }
    input.addEventListener("input", function () { clearTimeout(t); t = setTimeout(rendre, 120); });
    rendre(); input.focus();
  };

  /* ======================================================================
     2. MES RÉVISIONS : points faibles + révision espacée
     ====================================================================== */
  var KEY_REV = "cyberpenal.revoir";
  var PAS = [1, 2, 4, 8, 16, 32]; /* jours avant la prochaine révision, selon la boîte */
  function hash(s) { var h = 0; s = String(s); for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return "q" + Math.abs(h).toString(36); }
  function lireRev() { return lire(KEY_REV, {}); }
  function ecrireRev(r) { ecrire(KEY_REV, r); }
  function themeDeRef(ref) {
    var m = /^(fiche|art):(.+)$/.exec(ref || ""); if (m) { var f = inf(m[2]); return f ? f.theme : ""; }
    m = /^acte:/.exec(ref || ""); if (m) return "procedure";
    m = /^cas:(.+)$/.exec(ref || ""); if (m) { var c = (window.CAS || []).filter(function (x) { return x.id === m[1]; })[0]; var f2 = c && inf(c.bonnes[0]); return f2 ? f2.theme : ""; }
    return "";
  }
  function lienDeRef(ref) {
    var m = /^(fiche|art):(.+)$/.exec(ref || ""); if (m && inf(m[2])) return ["#/infraction/" + m[2], artLabel(inf(m[2]))];
    m = /^acte:(.+)$/.exec(ref || ""); if (m && acte(m[1])) return ["#/acte/" + m[1], acte(m[1]).art];
    m = /^cas:(.+)$/.exec(ref || ""); if (m) return ["#/cas/" + m[1], "le cas"];
    return null;
  }
  var REVOIR = window.CP_REVOIR = {
    /* appelé par le moteur de jeux après chaque réponse */
    noter: function (q, juste) {
      if (!q || !q.q) return;
      var r = lireRev(), k = q.ref || hash(q.q), it = r[k], j = aujourdhui();
      if (juste) {
        if (!it) return;
        it.reussies = (it.reussies || 0) + 1;
        if (it.due <= j) { it.boite = Math.min(PAS.length - 1, (it.boite || 0) + 1); it.due = dansJours(PAS[it.boite]); }
      } else {
        it = r[k] = it || { q: q.q, c: q.c, r: q.r, e: q.e || "", ref: q.ref || "", binaire: !!q.binaire, ratees: 0, reussies: 0 };
        it.q = q.q; it.c = q.c; it.r = q.r; it.e = q.e || it.e;
        it.ratees = (it.ratees || 0) + 1; it.boite = 0; it.due = dansJours(1); it.vu = j;
      }
      it.theme = it.theme || themeDeRef(it.ref);
      r[k] = it; ecrireRev(r);
    },
    noterCas: function (c, score) {
      var bonnes = c.bonnes.map(function (id) { var f = inf(id); return f ? artLabel(f) + " (" + f.titre + ")" : id; }).join(" ; ");
      this.noter({ q: c.titre + " — " + c.faits, c: null, r: bonnes, e: c.correction, ref: "cas:" + c.id }, score >= 100);
    },
    aRevoir: function () { var r = lireRev(), j = aujourdhui(); return Object.keys(r).filter(function (k) { return r[k].due <= j; }).length; }
  };

  var session = null;
  V.revisions = function () {
    var r = lireRev(), cles = Object.keys(r), j = aujourdhui();
    var dues = cles.filter(function (k) { return r[k].due <= j; });
    var maitrisees = cles.filter(function (k) { return r[k].boite >= 3; }).length;
    var parTheme = {};
    cles.forEach(function (k) { var t = r[k].theme || "autres"; parTheme[t] = (parTheme[t] || 0) + (r[k].ratees || 0); });
    var themes = Object.keys(parTheme).sort(function (a, b) { return parTheme[b] - parTheme[a]; });
    var maxT = themes.length ? parTheme[themes[0]] : 1;
    var pires = cles.slice().sort(function (a, b) { return (r[b].ratees - r[b].reussies * .5) - (r[a].ratees - r[a].reussies * .5); }).slice(0, 8);
    api().page('<p class="eyebrow">S\'entraîner</p><h1>Mes révisions</h1>' +
      '<p class="lead">Chaque question ratée dans un quiz, le défi du jour, un jeu ou un cas pratique arrive ici. Le site te la repose le lendemain, puis de plus en plus tard à mesure que tu la réussis.</p>' +
      '<div class="stats"><div class="stat"><b>' + dues.length + '</b><span>à revoir aujourd\'hui</span></div><div class="stat"><b>' + (cles.length - maitrisees) + '</b><span>en cours d\'apprentissage</span></div><div class="stat"><b>' + maitrisees + "</b><span>bien retenues</span></div></div>" +
      (cles.length ? "" : '<div class="card"><p>Rien à revoir pour l\'instant. Fais un entraînement dans <a href="#/tester">Me tester</a> ou un <a href="#/cas">cas pratique</a> : tes erreurs viendront ici.</p></div>') +
      (dues.length ? '<div class="btns"><button class="btn" id="revGo">Réviser les ' + dues.length + " question" + (dues.length > 1 ? "s" : "") + " du jour</button></div>" :
        (cles.length ? '<p class="petit">Rien d\'autre à revoir aujourd\'hui. Reviens demain.</p>' : "")) +
      '<section class="card jeu" id="revZone" hidden></section>' +
      (themes.length ? "<h2>Tes points faibles</h2><p class=\"petit\">Nombre d'erreurs par thème, toutes révisions confondues.</p><div class=\"rev-themes\">" + themes.map(function (t) {
        return '<div class="rev-theme ' + themeCouleur(t) + '"><span>' + esc(themeNom(t) || "Autres questions") + '</span><span class="rev-barre"><i style="width:' + Math.round(100 * parTheme[t] / maxT) + '%"></i></span><b>' + parTheme[t] + "</b></div>";
      }).join("") + "</div>" : "") +
      (pires.length ? "<h2>Les questions qui te résistent</h2><ul class=\"rev-liste\">" + pires.map(function (k) {
        var it = r[k], l = lienDeRef(it.ref);
        return "<li><span>" + esc(it.q.length > 160 ? it.q.slice(0, 160) + "…" : it.q) + '</span><span class="petit">ratée ' + it.ratees + " fois" + (l ? ' · <a href="' + l[0] + '">revoir ' + esc(l[1]) + "</a>" : "") + "</span></li>";
      }).join("") + "</ul>" : "") +
      (cles.length ? '<p class="corr-pied"><button class="corr-lien" id="revRaz">tout effacer et repartir de zéro</button></p>' : ""));
    var go = $("#revGo"); if (go) go.addEventListener("click", function () { demarrerSession(dues); });
    var raz = $("#revRaz"); if (raz) arme(raz, "clique encore pour tout effacer", function () { ecrireRev({}); V.revisions(); });
  };
  function demarrerSession(cles) {
    session = { cles: cles.slice().sort(function () { return Math.random() - .5; }), i: 0, ok: 0 };
    var z = $("#revZone"); z.hidden = false; poser(); z.scrollIntoView({ block: "start", behavior: "smooth" });
  }
  function poser() {
    var z = $("#revZone"), r = lireRev();
    if (session.i >= session.cles.length) {
      z.innerHTML = "<h3>Révision terminée</h3><p>" + session.ok + " / " + session.cles.length + " réussies. Les questions ratées reviendront demain.</p>" +
        '<div class="row"><button class="btn" id="revFin">Voir mon bilan</button></div>';
      $("#revFin").addEventListener("click", function () { V.revisions(); });
      return;
    }
    var k = session.cles[session.i], it = r[k], l = lienDeRef(it.ref);
    var entete = '<p class="q-progress">Question ' + (session.i + 1) + " / " + session.cles.length + "</p>";
    if (Array.isArray(it.c) && it.c.length) {
      var ordre = it.c.map(function (c, i) { return i; }).sort(function () { return Math.random() - .5; });
      if (it.binaire) ordre = [0, 1];
      z.innerHTML = entete + '<p class="jeu-question">' + esc(it.q) + '</p><div class="options">' +
        ordre.map(function (i) { return '<button class="opt" data-i="' + i + '">' + esc(it.c[i]) + "</button>"; }).join("") + '</div><div id="revRetour"></div>';
      $$(".opt", z).forEach(function (b) {
        b.addEventListener("click", function () {
          var juste = +b.dataset.i === it.r;
          $$(".opt", z).forEach(function (x) { x.disabled = true; if (+x.dataset.i === it.r) x.classList.add("good"); else if (x === b) x.classList.add("bad"); });
          conclure(k, it, juste, l);
        });
      });
    } else {
      z.innerHTML = entete + '<p class="jeu-question">' + esc(it.q) + '</p><p class="petit">Réfléchis à ta réponse, puis regarde la correction.</p>' +
        '<div class="row"><button class="btn" id="revVoir">Voir la correction</button></div><div id="revRetour"></div>';
      $("#revVoir").addEventListener("click", function () {
        $("#revVoir").remove();
        $("#revRetour").innerHTML = '<div class="feedback"><p><strong>Réponse : </strong>' + esc(it.r) + "</p><p>" + esc(it.e) + "</p></div>" +
          '<div class="row"><button class="btn" id="revSu">Je l\'avais</button><button class="btn ghost" id="revPas">Je ne l\'avais pas</button></div>';
        $("#revSu").addEventListener("click", function () { suite(k, true); });
        $("#revPas").addEventListener("click", function () { suite(k, false); });
      });
    }
  }
  function conclure(k, it, juste, l) {
    $("#revRetour").innerHTML = '<div class="feedback"><strong>' + (juste ? "C'est juste !" : "Ce n'était pas ça.") + "</strong>" + (it.e ? "<br>" + esc(it.e) : "") +
      (l ? '<br><a href="' + l[0] + '" target="_blank" rel="noopener">Revoir ' + esc(l[1]) + "</a>" : "") + '</div><div class="row"><button class="btn" id="revNext">Suivante</button></div>';
    $("#revNext").addEventListener("click", function () { suite(k, juste); });
    $("#revNext").focus();
  }
  function suite(k, juste) {
    var r = lireRev(), it = r[k];
    if (it) {
      if (juste) { it.boite = Math.min(PAS.length - 1, (it.boite || 0) + 1); it.reussies = (it.reussies || 0) + 1; it.due = dansJours(PAS[it.boite]); session.ok++; }
      else { it.boite = 0; it.ratees = (it.ratees || 0) + 1; it.due = dansJours(1); }
      ecrireRev(r);
    }
    session.i++; poser();
  }

  /* ======================================================================
     3 et 4. ATELIER : qualifier un fait réel, rédiger un acte
     ====================================================================== */
  var KEY_AT = "cyberpenal.atelier";
  function catalogueFiches() {
    return INF().map(function (f) { return "- " + f.id + " | " + f.titre + " | " + f.materiel + " | base : " + f.peines[0][1]; }).join("\n");
  }
  function catalogueActes() {
    return (window.ACTES || []).map(function (a) { return "- " + a.id + " | " + a.art + " | " + a.titre + " | " + (a.qui || ""); }).join("\n");
  }
  function lienFiche(id) { var f = inf(id); return f ? '<a class="chip" href="#/infraction/' + f.id + '">' + esc(artLabel(f)) + "</a> " : ""; }
  function lienActe(id) { var a = acte(id); return a ? '<a class="chip" href="#/acte/' + a.id + '">' + esc(a.art) + "</a> " : ""; }
  function ajouterAuCarnet(texte) {
    var A = api(); A.state.notes = (A.state.notes ? A.state.notes.replace(/\s+$/, "") + "\n\n" : "") + texte; A.save();
  }

  var REDAC = {
    requisition: {
      nom: "Réquisition à un opérateur ou une plateforme",
      attendu: ["L'autorité qui requiert (OPJ, sur instruction ou autorisation du procureur selon le cadre) et le cadre d'enquête (flagrance ou préliminaire)",
        "Le fondement : art. 60-1 CPP en flagrance, 77-1-1 en préliminaire, et 60-1-2 pour les données de connexion (seuils de peine)",
        "Le destinataire précis (opérateur, plateforme, banque…) et le service compétent",
        "L'objet : quelles données exactement (identité de l'abonné, adresses IP, journaux de connexion…), pour quel compte ou quel identifiant",
        "La période visée, avec dates et heures, et le fuseau horaire",
        "Le délai de réponse et le mode de transmission",
        "La date, la signature et la mention de l'obligation de répondre et de son éventuelle sanction"],
      actes: ["60-1", "60-1-2", "60-2"]
    },
    constat: {
      nom: "Procès-verbal de constatation en ligne",
      attendu: ["Qui constate (qualité de l'enquêteur), la date et les heures de début et de fin",
        "Le matériel et la connexion utilisés (poste dédié, navigateur, éventuel compte d'enquête)",
        "L'adresse exacte (URL) de chaque page consultée, et le chemin suivi pour y arriver",
        "La description objective de ce qui est vu : textes, images, pseudonymes, dates de publication",
        "Les captures d'écran annexées, numérotées, et leur lien avec le texte du PV",
        "Aucune interprétation ni qualification juridique dans la constatation elle-même",
        "La clôture : signature, et rappel que le PV vaut jusqu'à preuve contraire (art. 429 et 430 CPP)"],
      actes: ["429"]
    }
  };

  V.atelier = function (args) {
    var onglet = args[0] === "rediger" ? "rediger" : "qualifier";
    var hist = lire(KEY_AT, []);
    api().page('<p class="eyebrow">S\'entraîner</p><h1>Atelier</h1>' +
      '<p class="lead">Deux exercices corrigés par Claude, au plus près de ce que tu feras en stage.</p>' +
      '<div class="filtres"><a class="pill' + (onglet === "qualifier" ? " on" : "") + '" href="#/atelier">Qualifier un fait réel</a><a class="pill' + (onglet === "rediger" ? " on" : "") + '" href="#/atelier/rediger">Rédiger un acte</a></div>' +
      '<div id="atZone"></div>');
    onglet === "rediger" ? rediger() : qualifier(hist);
  };

  function qualifier(hist) {
    var z = $("#atZone");
    z.innerHTML = '<div class="card"><h3>Qualifier un fait réel</h3><p class="petit">Colle un article de presse ou décris une situation vue en stage (sans nom réel). Claude propose les qualifications, ce qu\'il faut prouver et les actes d\'enquête utiles, en s\'appuyant sur les fiches du site.</p>' +
      '<label for="atFaits" class="lettre-k">Les faits</label><textarea id="atFaits" rows="7" placeholder="Ex. : Une étudiante reçoit un message d\'un faux conseiller de sa banque…"></textarea>' +
      '<div class="btns"><button class="btn" id="atGo">Qualifier</button></div><p class="jeu-msg" id="atMsg" hidden></p></div><div id="atRes"></div>' +
      (hist.length ? "<h2>Mes analyses précédentes</h2>" + hist.slice(0, 10).map(function (h, i) {
        return '<details class="card at-hist"><summary>' + esc(h.date) + " — " + esc(h.faits.slice(0, 90)) + (h.faits.length > 90 ? "…" : "") + '</summary><div data-h="' + i + '"></div></details>';
      }).join("") : "");
    $$("[data-h]", z).forEach(function (d) { d.innerHTML = rendreQualif(hist[+d.dataset.h].res); });
    $("#atGo").addEventListener("click", function () {
      var faits = $("#atFaits").value.trim(), msg = $("#atMsg"), b = $("#atGo");
      if (faits.length < 30) { msg.textContent = "Décris les faits en quelques phrases au moins."; msg.hidden = false; return; }
      claude().then(function (s) {
        if (!s) { msg.textContent = HORS_LIGNE; msg.hidden = false; return; }
        b.disabled = true; b.textContent = "Claude analyse…"; msg.textContent = "Analyse en cours, cela prend une vingtaine de secondes."; msg.hidden = false;
        var consigne = "Tu aides une personne qui prépare un stage en enquête sur la cybercriminalité, en droit pénal français. Voici des faits, puis le catalogue des infractions et des actes d'enquête de son site de révision.\n\n" +
          "Propose les qualifications pénales possibles. Règles :\n" +
          "- Utilise UNIQUEMENT les identifiants du catalogue ci-dessous. Si une qualification utile n'y figure pas, signale-la dans « a_verifier » sans inventer de numéro.\n" +
          "- Pour chaque qualification : pourquoi elle colle aux faits, et la liste des éléments à prouver (matériel et intentionnel), concrètement.\n" +
          "- Indique les qualifications voisines à écarter et pourquoi, les circonstances aggravantes possibles, et 2 à 5 actes d'enquête utiles du catalogue avec leur intérêt ici.\n" +
          "- Si les faits sont flous, dis quelles informations manquent. Écris en français, tutoie la personne, phrases courtes.\n\n" +
          'Réponds UNIQUEMENT avec un objet JSON de ce format exact :\n{"resume":"une phrase","qualifications":[{"id":"323-1","pourquoi":"...","a_prouver":["...","..."]}],"a_ecarter":[{"id":"...","pourquoi":"..."}],"aggravations":"...","actes":[{"id":"60-1","pourquoi":"..."}],"a_verifier":"..."}\n\n' +
          "FAITS :\n" + faits + "\n\nCATALOGUE DES INFRACTIONS (id | titre | élément matériel | peine de base) :\n" + catalogueFiches() +
          "\n\nCATALOGUE DES ACTES D'ENQUÊTE (id | article | titre | qui) :\n" + catalogueActes();
        s.json(consigne, { modelTier: "complex" }).then(function (res) {
          b.disabled = false; b.textContent = "Qualifier";
          if (!res || !Array.isArray(res.qualifications)) { msg.textContent = "La réponse de Claude était incomplète. Réessaie."; return; }
          msg.hidden = true;
          var entree = { date: new Date().toLocaleDateString("fr-FR"), faits: faits, res: res };
          hist.unshift(entree); ecrire(KEY_AT, hist.slice(0, 20));
          $("#atRes").innerHTML = '<div class="card at-res">' + rendreQualif(res) + '<div class="btns"><button class="btn ghost small" id="atCarnet">Ajouter à mon carnet</button></div></div>';
          $("#atCarnet").addEventListener("click", function () {
            ajouterAuCarnet("— Qualification (" + entree.date + ") —\nFaits : " + faits + "\n" + texteQualif(res));
            $("#atCarnet").textContent = "Ajouté au carnet ✓"; $("#atCarnet").disabled = true;
          });
          $("#atRes").scrollIntoView({ block: "start", behavior: "smooth" });
        }, function (e) { b.disabled = false; b.textContent = "Qualifier"; msg.textContent = msgErreur(e); msg.hidden = false; });
      });
    });
  }
  function filtreIds(l, f) { return (Array.isArray(l) ? l : []).filter(function (x) { return x && f(x.id); }); }
  function rendreQualif(res) {
    var q = filtreIds(res.qualifications, inf), e = filtreIds(res.a_ecarter, inf), a = filtreIds(res.actes, acte);
    return (res.resume ? '<p class="lead">' + esc(res.resume) + "</p>" : "") +
      "<h3>Qualifications retenues</h3>" + (q.length ? q.map(function (x) {
        var f = inf(x.id);
        return '<div class="at-q"><p>' + lienFiche(x.id) + "<b>" + esc(f.titre) + '</b> <span class="petit">' + esc(f.peines[0][1]) + "</span></p><p>" + esc(x.pourquoi) + "</p>" +
          (Array.isArray(x.a_prouver) && x.a_prouver.length ? '<p class="lettre-k">À prouver</p><ul>' + x.a_prouver.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" : "") + "</div>";
      }).join("") : "<p>Aucune qualification du site ne colle clairement.</p>") +
      (e.length ? "<h3>À écarter</h3><ul>" + e.map(function (x) { return "<li>" + lienFiche(x.id) + esc(x.pourquoi) + "</li>"; }).join("") + "</ul>" : "") +
      (res.aggravations ? "<h3>Circonstances aggravantes possibles</h3><p>" + esc(res.aggravations) + "</p>" : "") +
      (a.length ? "<h3>Actes d'enquête utiles</h3><ul>" + a.map(function (x) { return "<li>" + lienActe(x.id) + esc(x.pourquoi) + "</li>"; }).join("") + "</ul>" : "") +
      (res.a_verifier ? "<h3>À vérifier</h3><p>" + esc(res.a_verifier) + "</p>" : "") +
      '<p class="petit">Proposition de Claude à partir des fiches du site : vérifie toujours le texte de l\'article avant de t\'en servir.</p>';
  }
  function texteQualif(res) {
    return filtreIds(res.qualifications, inf).map(function (x) { var f = inf(x.id); return "• " + artLabel(f) + " — " + f.titre + " : " + x.pourquoi + (x.a_prouver ? "\n  À prouver : " + x.a_prouver.join(" ; ") : ""); }).join("\n") +
      (res.a_verifier ? "\nÀ vérifier : " + res.a_verifier : "");
  }

  function rediger() {
    var z = $("#atZone"), cas = window.CAS || [];
    z.innerHTML = '<div class="card"><h3>Rédiger un acte</h3><p class="petit">Choisis un type d\'acte et une situation, rédige l\'acte, puis Claude te corrige sur le fond et la forme. C\'est un exercice : le modèle proposé n\'est pas un formulaire officiel.</p>' +
      '<div class="row"><label class="lettre-k" for="rdType">Acte</label><select id="rdType">' + Object.keys(REDAC).map(function (k) { return '<option value="' + k + '">' + esc(REDAC[k].nom) + "</option>"; }).join("") + "</select></div>" +
      '<div class="row" style="margin-top:8px"><label class="lettre-k" for="rdCas">Situation</label><select id="rdCas"><option value="">Au hasard</option>' +
      cas.map(function (c) { return '<option value="' + esc(c.id) + '">' + esc(c.titre) + "</option>"; }).join("") + "</select></div>" +
      '<div class="cas-faits" id="rdFaits" style="margin-top:12px"></div>' +
      '<details class="rd-attendu"><summary>Ce qu\'on attend dans cet acte</summary><ul id="rdAttendu"></ul></details>' +
      '<label for="rdTexte" class="lettre-k">Ton acte</label><textarea id="rdTexte" rows="14" placeholder="Rédige ici ton acte, comme si tu le préparais pour l\'enquêteur."></textarea>' +
      '<div class="btns"><button class="btn" id="rdGo">Faire corriger</button></div><p class="jeu-msg" id="rdMsg" hidden></p></div><div id="rdRes"></div>';
    var choisi = null;
    function maj() {
      var id = $("#rdCas").value;
      choisi = id ? cas.filter(function (c) { return c.id === id; })[0] : cas[Math.floor(Math.random() * cas.length)];
      $("#rdFaits").innerHTML = "<b>" + esc(choisi.titre) + "</b><br>" + esc(choisi.faits);
      $("#rdAttendu").innerHTML = REDAC[$("#rdType").value].attendu.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("");
    }
    $("#rdCas").addEventListener("change", maj);
    $("#rdType").addEventListener("change", function () { $("#rdAttendu").innerHTML = REDAC[$("#rdType").value].attendu.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join(""); });
    maj();
    $("#rdGo").addEventListener("click", function () {
      var texte = $("#rdTexte").value.trim(), msg = $("#rdMsg"), b = $("#rdGo"), T = REDAC[$("#rdType").value];
      if (texte.length < 80) { msg.textContent = "Rédige ton acte avant de le faire corriger (quelques lignes au moins)."; msg.hidden = false; return; }
      claude().then(function (s) {
        if (!s) { msg.textContent = HORS_LIGNE; msg.hidden = false; return; }
        b.disabled = true; b.textContent = "Correction…"; msg.textContent = "Claude relit ton acte."; msg.hidden = false;
        var ref = T.actes.map(acte).filter(Boolean).map(function (a) { return a.art + " — " + a.titre + "\nTexte : " + a.citation + "\nConditions : " + (a.conditions || "") + (a.plus ? "\nÀ savoir : " + a.plus : ""); }).join("\n\n");
        var lecon = (window.COURS || []).filter(function (c) { return c.id === (T === REDAC.constat ? "constat-internet" : "donnees-connexion"); })[0];
        var consigne = "Tu corriges un exercice de rédaction d'une personne qui prépare un stage en enquête sur la cybercriminalité (droit français). Elle a rédigé : « " + T.nom + " ».\n\n" +
          "Corrige avec bienveillance mais exigence, sur le fond (fondement juridique, cadre d'enquête, précision des données demandées ou constatées, période, proportionnalité) et sur la forme (structure, mentions, style neutre).\n" +
          "Règles : appuie-toi sur les textes de référence fournis ; n'invente aucun article ; si tu cites un article qui n'est pas dans les références (par exemple 77-1-1 ou 430 CPP), reste général. Les faits sont fictifs. Écris en français, tutoie la personne.\n\n" +
          'Réponds UNIQUEMENT avec un objet JSON de ce format exact :\n{"appreciation":"2 ou 3 phrases","points_forts":["..."],"a_corriger":[{"point":"...","conseil":"..."}],"modele":"une version corrigée complète de l\'acte, avec des retours à la ligne"}\n\n' +
          "CE QU'ON ATTEND DANS CET ACTE :\n- " + T.attendu.join("\n- ") + "\n\nSITUATION :\n" + choisi.titre + " — " + choisi.faits +
          "\n\nTEXTES DE RÉFÉRENCE :\n" + ref + (lecon ? "\n\nEXTRAIT DU COURS « " + lecon.titre + " » :\n" + sansBalises(lecon.contenu).slice(0, 6000) : "") +
          "\n\nACTE RÉDIGÉ PAR LA PERSONNE :\n" + texte;
        s.json(consigne, { modelTier: "complex" }).then(function (res) {
          b.disabled = false; b.textContent = "Faire corriger";
          if (!res || !res.appreciation) { msg.textContent = "La correction est incomplète. Réessaie."; return; }
          msg.hidden = true;
          $("#rdRes").innerHTML = '<div class="card at-res"><h3>Correction</h3><p>' + esc(res.appreciation) + "</p>" +
            (Array.isArray(res.points_forts) && res.points_forts.length ? '<p class="lettre-k">Ce qui va bien</p><ul>' + res.points_forts.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" : "") +
            (Array.isArray(res.a_corriger) && res.a_corriger.length ? '<p class="lettre-k">À corriger</p><ul>' + res.a_corriger.map(function (p) { return "<li><b>" + esc(p.point) + "</b> — " + esc(p.conseil) + "</li>"; }).join("") + "</ul>" : "") +
            (res.modele ? '<details open><summary class="lettre-k">Une version corrigée</summary><pre class="rd-modele">' + esc(res.modele) + "</pre></details>" : "") +
            '<div class="btns"><button class="btn ghost small" id="rdCarnet">Ajouter la version corrigée à mon carnet</button></div></div>';
          $("#rdCarnet").addEventListener("click", function () {
            ajouterAuCarnet("— " + T.nom + " (" + choisi.titre + ") —\n" + (res.modele || "")); $("#rdCarnet").textContent = "Ajouté au carnet ✓"; $("#rdCarnet").disabled = true;
          });
          $("#rdRes").scrollIntoView({ block: "start", behavior: "smooth" });
        }, function (e) { b.disabled = false; b.textContent = "Faire corriger"; msg.textContent = msgErreur(e); msg.hidden = false; });
      });
    });
  }

  /* ======================================================================
     5. COMPARER DEUX INFRACTIONS
     ====================================================================== */
  var PAIRES = [["323-1", "323-3"], ["323-1", "323-2"], ["313-1", "312-1"], ["312-1", "312-10"], ["222-33-2-2", "222-16"],
    ["226-1", "226-2-1"], ["226-4-1", "313-1"], ["227-22-1", "227-23-1"], ["324-1", "321-1"], ["222-17", "433-3"], ["226-8", "226-8-1"]];
  var explications = {};
  function optionsFiches(sel) {
    return (window.THEMES || []).map(function (t) {
      var fs = INF().filter(function (f) { return f.theme === t.id; });
      return fs.length ? '<optgroup label="' + esc(t.nom) + '">' + fs.map(function (f) { return '<option value="' + esc(f.id) + '"' + (f.id === sel ? " selected" : "") + ">" + esc(artLabel(f) + " — " + f.titre) + "</option>"; }).join("") + "</optgroup>" : "";
    }).join("");
  }
  V.comparer = function (args) {
    var a = inf(args[0]) || inf("323-1"), b = inf(args[1]) || inf("323-3");
    var CIT = window.CITATIONS || {};
    function ligne(k, fa, fb) { return '<tr><th scope="row">' + k + "</th><td>" + fa + "</td><td>" + fb + "</td></tr>"; }
    function peines(f) { return '<ul class="peines">' + f.peines.map(function (p) { return "<li><small>" + esc(p[0]) + "</small><b>" + esc(p[1]) + "</b></li>"; }).join("") + "</ul>"; }
    var cle = a.id + "|" + b.id;
    api().page('<p class="eyebrow">Apprendre</p><h1>Comparer deux infractions</h1>' +
      '<p class="lead">Côte à côte, pour bien voir ce qui les distingue.</p>' +
      '<div class="cmp-choix"><select id="cmpA" aria-label="Première infraction">' + optionsFiches(a.id) + '</select><span aria-hidden="true">et</span><select id="cmpB" aria-label="Deuxième infraction">' + optionsFiches(b.id) + "</select></div>" +
      '<p class="petit">Comparaisons classiques : ' + PAIRES.filter(function (p) { return inf(p[0]) && inf(p[1]); }).map(function (p) { return '<a href="#/comparer/' + p[0] + "/" + p[1] + '">' + esc(inf(p[0]).art + " / " + inf(p[1]).art) + "</a>"; }).join(" · ") + "</p>" +
      '<div class="cmp-wrap"><table class="cmp"><thead><tr><th></th><th><a href="#/infraction/' + a.id + '">' + esc(artLabel(a)) + "</a><br><span>" + esc(a.titre) + '</span></th><th><a href="#/infraction/' + b.id + '">' + esc(artLabel(b)) + "</a><br><span>" + esc(b.titre) + "</span></th></tr></thead><tbody>" +
      ligne("Thème", esc(themeNom(a.theme)), esc(themeNom(b.theme))) +
      ligne("La lettre du texte", CIT[a.id] ? "« " + esc(CIT[a.id]) + " »" : "—", CIT[b.id] ? "« " + esc(CIT[b.id]) + " »" : "—") +
      ligne("Élément matériel", esc(a.materiel), esc(b.materiel)) +
      ligne("Élément moral", esc(a.moral), esc(b.moral)) +
      ligne("Peines", peines(a), peines(b)) +
      ligne("Tentative", a.tentative ? "Punissable" : "Non prévue", b.tentative ? "Punissable" : "Non prévue") +
      ligne("À savoir", esc(a.notes || "—"), esc(b.notes || "—")) +
      "</tbody></table></div>" +
      '<div class="card"><h3>La différence clé</h3><div id="cmpCle">' + (explications[cle] ? "<p>" + esc(explications[cle]) + "</p>" : '<p class="petit">Claude peut résumer en quelques phrases ce qui sépare ces deux infractions, avec un exemple.</p><button class="btn ghost small" id="cmpGo">Expliquer la différence</button>') + '</div><p class="jeu-msg" id="cmpMsg" hidden></p></div>');
    function aller() { location.hash = "#/comparer/" + $("#cmpA").value + "/" + $("#cmpB").value; }
    $("#cmpA").addEventListener("change", aller); $("#cmpB").addEventListener("change", aller);
    var go = $("#cmpGo"); if (go) go.addEventListener("click", function () {
      var msg = $("#cmpMsg");
      claude().then(function (s) {
        if (!s) { msg.textContent = HORS_LIGNE; msg.hidden = false; return; }
        go.disabled = true; go.textContent = "Claude réfléchit…";
        function bloc(f) { return artLabel(f) + " — " + f.titre + "\nTexte : " + (CIT[f.id] || "") + "\nÉlément matériel : " + f.materiel + "\nÉlément moral : " + f.moral + "\nPeines : " + f.peines.map(function (p) { return p[0] + " : " + p[1]; }).join(" ; ") + "\nÀ savoir : " + (f.notes || ""); }
        s("Explique à une personne qui prépare un stage en cybercriminalité la différence clé entre ces deux infractions du droit français, en 4 à 6 phrases simples, avec un exemple concret pour chacune et le critère qui permet de trancher. Appuie-toi uniquement sur ces fiches, tutoie la personne, pas de titre ni de liste.\n\n" + bloc(a) + "\n\n" + bloc(b), { modelTier: "default" })
          .then(function (r) { explications[cle] = (r && r.text || "").trim(); $("#cmpCle").innerHTML = "<p>" + esc(explications[cle]).replace(/\n+/g, "</p><p>") + "</p>"; },
            function (e) { go.disabled = false; go.textContent = "Expliquer la différence"; msg.textContent = msgErreur(e); msg.hidden = false; });
      });
    });
  };

  /* ======================================================================
     6. ARBRE « QUELLE INFRACTION ? »
     ====================================================================== */
  var AUSSI = "Vérifie aussi les aggravations : bande organisée, usage de la cryptologie (132-79), lien avec une entreprise terroriste (421-1) ou avec une puissance étrangère (411-12).";
  var ARBRE = {
    depart: { q: "Qu'est-ce que le comportement vise d'abord ?", r: [
      ["Un ordinateur, un serveur, un réseau ou les données qu'il contient", "stad"],
      ["Une personne : sa tranquillité, son intimité, son image, son identité", "pers"],
      ["De l'argent ou un bien", "biens"],
      ["Un mineur", "min"],
      ["Un contenu mis en ligne, ou le rôle d'une plateforme", "cont"],
      ["La vente de choses interdites : drogue, armes, faux papiers, prostitution", "traf"],
      ["Les intérêts de l'État : espionnage, sabotage, terrorisme", { f: ["411-6", "411-9", "421-1", "411-12"], n: "Ces textes s'ajoutent souvent aux atteintes aux STAD : regarde aussi 323-1 à 323-3." }]] },
    stad: { q: "Que s'est-il passé dans le système ?", r: [
      ["Quelqu'un y est entré, ou y est resté, sans en avoir le droit", { f: ["323-1"], n: "Si des données ont été supprimées ou modifiées, ou si le fonctionnement a été altéré, la peine est aggravée (323-1 alinéa 2). " + AUSSI }],
      ["Le système a été bloqué, ralenti ou faussé (déni de service, sabotage)", { f: ["323-2"], n: "Si la vie de personnes a été mise en danger (hôpital, par exemple) : 323-4-2. " + AUSSI }],
      ["Des données ont été introduites, copiées, modifiées ou supprimées", { f: ["323-3"], n: "Souvent cumulé avec l'accès frauduleux (323-1). " + AUSSI }],
      ["Une rançon est réclamée pour rendre les données ou débloquer le système", { f: ["312-1", "323-2", "323-3", "323-1"], n: "Le rançongiciel cumule souvent extorsion et atteintes aux STAD. Si la vie est mise en danger : 323-4-2. " + AUSSI }],
      ["Quelqu'un détient, vend ou diffuse un outil de piratage", { f: ["323-3-1"], n: "Le motif légitime (recherche, sécurité informatique) exclut l'infraction." }],
      ["Plusieurs personnes ont préparé ou mené l'attaque ensemble", { f: ["323-4", "323-4-1"], n: "323-4 réprime la préparation en groupe ; 323-4-1 aggrave les atteintes commises en bande organisée." }],
      ["Un suspect refuse de donner le code de son téléphone chiffré aux enquêteurs", { f: ["434-15-2"], n: "Voir aussi l'acte de mise au clair des données (230-1 CPP)." }]] },
    pers: { q: "Que subit la personne ?", r: [
      ["Des messages ou propos répétés qui dégradent sa vie", "harc"],
      ["Une menace (de mort, de violence…)", "menace"],
      ["Des images ou informations intimes captées, diffusées ou truquées", "intime"],
      ["Quelqu'un se fait passer pour elle", { f: ["226-4-1", "313-1"], n: "Si l'usurpation sert à obtenir de l'argent, l'escroquerie (313-1) s'ajoute." }],
      ["Ses messages, son téléphone ou son ordinateur sont espionnés", { f: ["226-15", "226-3", "323-1"], n: "Le logiciel espion caché sur le téléphone d'un conjoint est un cas classique." }],
      ["Ses informations personnelles sont publiées pour l'exposer à un danger", { f: ["223-1-1"], n: "C'est le « doxing »." }],
      ["On la pousse au suicide", { f: ["223-13"], n: "" }]] },
    harc: { q: "Dans quel cadre ?", r: [
      ["L'auteur est son conjoint, son partenaire ou son ex", { f: ["222-33-2-1"], n: "" }],
      ["La victime est un élève, harcelé dans le cadre scolaire", { f: ["222-33-2-3"], n: "" }],
      ["Autre cadre (réseaux sociaux, travail, inconnus, « raid » en meute)", { f: ["222-33-2-2"], n: "Le harcèlement en meute est réprimé même si chacun n'a agi qu'une fois." }],
      ["Des appels ou messages malveillants répétés, sans dégradation des conditions de vie établie", { f: ["222-16"], n: "" }]] },
    menace: { q: "Qui est visé ?", r: [
      ["Un élu, un policier, un enseignant ou un autre agent public", { f: ["433-3"], n: "" }],
      ["Une autre personne", { f: ["222-17"], n: "La menace de mort est plus lourdement punie ; les mobiles racistes, sexistes ou homophobes aggravent aussi (132-76, 132-77)." }]] },
    intime: { q: "Qu'a-t-on fait de ces images ou informations ?", r: [
      ["On les a diffusées sans son accord", { f: ["226-2-1"], n: "" }],
      ["On les a captées ou enregistrées à son insu", { f: ["226-1"], n: "" }],
      ["On a fabriqué un montage ou un « deepfake »", { f: ["226-8-1", "226-8"], n: "226-8-1 si le contenu est à caractère sexuel, 226-8 sinon." }],
      ["On menace de les diffuser pour obtenir quelque chose (sextorsion)", { f: ["312-10"], n: "" }]] },
    biens: { q: "Comment le bien ou l'argent a-t-il été obtenu ?", r: [
      ["La victime a été trompée et a payé, ou donné ses codes", { f: ["313-1", "226-4-1"], n: "Faux conseiller bancaire, hameçonnage, fausse annonce… Si l'auteur se fait passer pour un tiers, l'usurpation d'identité peut s'ajouter." }],
      ["Par une menace ou une contrainte", "contrainte"],
      ["Sa carte bancaire a été copiée ou utilisée frauduleusement", { f: ["L163-3", "L163-4"], n: "L163-4 vise les outils (skimmers, logiciels de carding)." }],
      ["L'argent d'une infraction est reçu, caché ou converti (mules, crypto-actifs)", "argent"],
      ["Des documents ont été falsifiés (attestations, papiers, factures)", { f: ["441-1", "441-2", "441-7"], n: "441-2 pour les documents administratifs (papiers d'identité, permis), 441-7 pour les attestations." }],
      ["Des copies de logiciels ou de faux produits de marque sont vendus", { f: ["L335-3", "L716-10"], n: "" }]] },
    contrainte: { q: "Sur quoi porte la menace ?", r: [
      ["Révéler quelque chose de gênant ou d'intime", { f: ["312-10"], n: "C'est le chantage, dont la sextorsion." }],
      ["Une violence, ou le blocage de ses données ou de son système", { f: ["312-1"], n: "C'est l'extorsion, dont le rançongiciel." }]] },
    argent: { q: "Qu'a fait la personne de cet argent ?", r: [
      ["Elle l'a caché, transféré ou converti pour en masquer l'origine", { f: ["324-1"], n: "Le blanchiment suppose de savoir que les fonds viennent d'une infraction." }],
      ["Elle l'a simplement reçu ou gardé en sachant d'où il venait", { f: ["321-1"], n: "" }]] },
    min: { q: "Que s'est-il passé ?", r: [
      ["Un adulte fait des propositions sexuelles en ligne à un mineur de moins de 15 ans", { f: ["227-22-1"], n: "" }],
      ["Il lui demande des images à caractère sexuel", { f: ["227-23-1"], n: "" }],
      ["Il l'incite à commettre des actes sexuels", { f: ["227-22-2", "227-22"], n: "" }],
      ["Des images pédopornographiques sont détenues, consultées ou diffusées", { f: ["227-23"], n: "" }],
      ["Un contenu violent ou pornographique lui est accessible", { f: ["227-24"], n: "" }],
      ["Il est harcelé à l'école ou en ligne", { f: ["222-33-2-3", "222-33-2-2"], n: "" }],
      ["On le prostitue ou on recourt à sa prostitution", { f: ["225-12-1", "225-5"], n: "" }]] },
    cont: { q: "De quoi s'agit-il ?", r: [
      ["Apologie du terrorisme ou provocation à des actes terroristes", { f: ["421-2-5"], n: "" }],
      ["Empêcher le retrait ou le blocage d'un contenu terroriste", { f: ["421-2-5-1"], n: "" }],
      ["Signaler faussement un contenu pour le faire retirer", { f: ["lcen-6-vii"], n: "" }],
      ["Un hébergeur ou un fournisseur d'accès ne conserve pas les données d'identification", { f: ["lcen-6-v"], n: "" }],
      ["Une plateforme facilite la vente de produits illicites", { f: ["323-3-2"], n: "" }],
      ["Des données personnelles sont collectées, mal protégées ou divulguées", { f: ["226-18", "226-17", "226-22"], n: "" }]] },
    traf: { q: "Qu'est-ce qui est vendu ou proposé ?", r: [
      ["De la drogue, par messagerie ou réseau social", { f: ["222-37"], n: "Si une plateforme sert d'intermédiaire : 323-3-2." }],
      ["Des armes", { f: ["222-52"], n: "" }],
      ["De faux papiers", { f: ["441-2"], n: "" }],
      ["Des services sexuels (proxénétisme)", { f: ["225-5"], n: "Si la personne est mineure : 225-12-1." }]] }
  };
  V.arbre = function (args) {
    var chemin = (args[0] || "").split(".").filter(Boolean);
    var noeud = ARBRE.depart, etapes = [], feuille = null;
    for (var i = 0; i < chemin.length; i++) {
      var rep = noeud.r[+chemin[i]]; if (!rep) break;
      etapes.push({ q: noeud.q, r: rep[0], lien: chemin.slice(0, i).join(".") });
      if (typeof rep[1] === "string") noeud = ARBRE[rep[1]]; else { feuille = rep[1]; break; }
    }
    var base = chemin.slice(0, etapes.length).join(".");
    api().page('<p class="eyebrow">Apprendre</p><h1>Quelle infraction ?</h1>' +
      '<p class="lead">Réponds aux questions : l\'arbre te mène aux fiches qui correspondent. C\'est une première piste, à confirmer en lisant les fiches.</p>' +
      (etapes.length ? '<ol class="arbre-fil">' + etapes.map(function (e) { return '<li><a href="#/arbre/' + e.lien + '">' + esc(e.q) + "</a> <b>" + esc(e.r) + "</b></li>"; }).join("") + "</ol>" : "") +
      (feuille ? '<h2>Les pistes</h2><div class="grid">' + feuille.f.filter(inf).map(function (id) {
        var f = inf(id); return '<a class="tile" href="#/infraction/' + f.id + '"><span class="k">' + esc(artLabel(f)) + "</span><h3>" + esc(f.titre) + "</h3><p>" + esc(f.peines[0][1]) + "</p></a>";
      }).join("") + "</div>" + (feuille.n ? '<p class="eu-fr">' + esc(feuille.n) + "</p>" : "") +
        '<div class="btns"><a class="btn" href="#/arbre">Recommencer</a>' + (feuille.f.length > 1 && inf(feuille.f[0]) && inf(feuille.f[1]) ? '<a class="btn ghost" href="#/comparer/' + feuille.f[0] + "/" + feuille.f[1] + '">Comparer les deux premières</a>' : "") + "</div>"
        : '<div class="card"><h3>' + esc(noeud.q) + '</h3><div class="options">' + noeud.r.map(function (r, k) { return '<a class="opt" href="#/arbre/' + (base ? base + "." : "") + k + '">' + esc(r[0]) + "</a>"; }).join("") + "</div>" +
          (etapes.length ? '<p class="petit" style="margin-top:12px"><a href="#/arbre/' + etapes[etapes.length - 1].lien + '">← Question précédente</a></p>' : "") + "</div>"));
  };

  /* ======================================================================
     7. LEXIQUE AU SURVOL
     ====================================================================== */
  var lexRegex = null, lexDefs = {};
  function preparerLexique() {
    var L = (window.LEXIQUE || []).filter(function (l) { return l[0] && l[0].length > 2; });
    L.forEach(function (l) { lexDefs[l[0].toLowerCase()] = l[1]; });
    var termes = L.map(function (l) { return l[0]; }).sort(function (a, b) { return b.length - a.length; })
      .map(function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); });
    try { lexRegex = new RegExp("(?<![\\p{L}\\p{N}])(" + termes.join("|") + ")(?![\\p{L}\\p{N}])", "giu"); } catch (e) { lexRegex = null; }
  }
  /* bulle de définition : un seul élément fixé à l'écran, placé près du mot */
  var bulle = null;
  function montrerBulle(span) {
    var d = span.querySelector(".lex-def"); if (!d) return;
    if (!bulle) { bulle = document.createElement("div"); bulle.id = "lexBulle"; bulle.setAttribute("role", "tooltip"); document.body.appendChild(bulle); }
    bulle.textContent = d.textContent; bulle.hidden = false;
    var r = span.getBoundingClientRect(), b = bulle.getBoundingClientRect(), W = document.documentElement.clientWidth;
    var x = Math.min(Math.max(12, r.left + r.width / 2 - b.width / 2), W - b.width - 12);
    var y = r.top - b.height - 8; if (y < 60) y = r.bottom + 8;
    bulle.style.left = x + "px"; bulle.style.top = y + "px";
  }
  function cacherBulle() { if (bulle) bulle.hidden = true; }
  document.addEventListener("mouseover", function (e) { var s = e.target.closest && e.target.closest(".lex"); if (s) montrerBulle(s); });
  document.addEventListener("mouseout", function (e) { var s = e.target.closest && e.target.closest(".lex"); if (s && !s.contains(e.relatedTarget)) cacherBulle(); });
  document.addEventListener("focusin", function (e) { if (e.target.classList && e.target.classList.contains("lex")) montrerBulle(e.target); });
  document.addEventListener("focusout", function (e) { if (e.target.classList && e.target.classList.contains("lex")) cacherBulle(); });
  window.addEventListener("scroll", cacherBulle, { passive: true });
  window.addEventListener("hashchange", cacherBulle);

  window.CP_LEX = {
    annoter: function (racine) {
      if (!racine) return;
      if (!lexRegex) preparerLexique(); if (!lexRegex) return;
      var vus = {}, noeuds = [];
      var w = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT, {
        acceptNode: function (n) {
          var p = n.parentElement;
          if (!p || p.closest("a, button, h1, h2, h3, h4, .chips, .eyebrow, .lex, textarea, select, .corr-pied, .badges")) return NodeFilter.FILTER_REJECT;
          return n.nodeValue.trim().length > 2 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      });
      while (w.nextNode()) noeuds.push(w.currentNode);
      noeuds.forEach(function (n) {
        var txt = n.nodeValue, out = [], i = 0, m;
        lexRegex.lastIndex = 0;
        while ((m = lexRegex.exec(txt))) {
          var cle = m[1].toLowerCase();
          if (vus[cle] || !lexDefs[cle]) continue;
          vus[cle] = 1;
          out.push(document.createTextNode(txt.slice(i, m.index)));
          var s = document.createElement("span");
          s.className = "lex"; s.tabIndex = 0; s.textContent = m[1];
          var d = document.createElement("span"); d.className = "lex-def"; d.setAttribute("role", "tooltip"); d.textContent = lexDefs[cle];
          s.appendChild(d); out.push(s);
          i = m.index + m[1].length;
        }
        if (!out.length) return;
        out.push(document.createTextNode(txt.slice(i)));
        var f = document.createDocumentFragment(); out.forEach(function (x) { f.appendChild(x); });
        n.parentNode.replaceChild(f, n);
      });
    }
  };
})();
