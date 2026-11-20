/* Cyberpénal — application (routage, progression, pages). */
(function () {
  "use strict";

  /* ============ Stockage local (progression, jamais écrasée) ============ */
  var KEY = "cyberpenal.v1";
  var DEFAULTS = { lecons: {}, cas: {}, quiz: {}, vues: {}, notes: "", theme: "auto", skin: "neon", taille: 0, lisible: false };
  var state = load();
  function load() {
    var s = {};
    try { s = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { s = {}; }
    var out = {};
    Object.keys(DEFAULTS).forEach(function (k) {
      out[k] = s[k] !== undefined ? s[k] : (typeof DEFAULTS[k] === "object" ? {} : DEFAULTS[k]);
    });
    /* on garde aussi toute clé inconnue, pour ne rien perdre */
    Object.keys(s).forEach(function (k) { if (out[k] === undefined) out[k] = s[k]; });
    return out;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

  /* ============ Utilitaires ============ */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function norm(s) { return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  var INF = window.INFRACTIONS, COURS = window.COURS, PARTIES = window.PARTIES, THEMES = window.THEMES, CAS = window.CAS;
  var CIT = window.CITATIONS || {};
  function trouve(liste, id) { for (var i = 0; i < liste.length; i++) if (liste[i].id === id) return liste[i]; return null; }
  function inf(id) { return trouve(INF, id); }
  function theme(id) { return trouve(THEMES, id) || THEMES[0]; }
  function artLabel(f) { return f.code === "Code pénal" ? "art. " + f.art : f.art; }
  function chip(id) { var f = inf(id); return f ? '<a class="chip" href="#/infraction/' + f.id + '">' + esc(artLabel(f)) + "</a>" : ""; }
  var main = $("#main");
  function page(html) { main.innerHTML = html; }

  /* ============ Habillages ============ */
  /* « Deux ambiances » : accueil et entraînement en sombre, pages de lecture en clair. */
  var SKINS = ["neon", "cyber", "nuit", "duo", "biseau"];
  var DUO_SOMBRE = { accueil: 1, tester: 1 };
  var pageCourante = "accueil";
  function applyTheme() {
    if (SKINS.indexOf(state.skin) < 0) state.skin = "neon";
    var r = document.documentElement;
    r.removeAttribute("data-theme");
    r.setAttribute("data-skin", state.skin);
    r.setAttribute("data-look", state.skin === "duo" ? (DUO_SOMBRE[pageCourante] ? "cyberviolet" : "magclair") : state.skin);
    $$("#skinMenu [data-skin]").forEach(function (b) { b.setAttribute("aria-checked", b.dataset.skin === state.skin ? "true" : "false"); });
    var tl = Math.max(-1, Math.min(3, +state.taille || 0));
    r.setAttribute("data-taille", String(tl));
    if (window.CP_FONTS) window.CP_FONTS(state.skin, state.lisible);
    if (state.lisible) r.setAttribute("data-lisible", ""); else r.removeAttribute("data-lisible");
    var lb = $("#lisibleBtn"); if (lb) lb.setAttribute("aria-checked", state.lisible ? "true" : "false");
    var tv = $("#tailleVal"); if (tv) tv.textContent = ["90 %", "100 %", "112 %", "125 %", "140 %"][tl + 1];
  }
  applyTheme();
  var skinBtn = $("#themeBtn"), skinMenu = $("#skinMenu");
  function skinOpen(open) { skinMenu.hidden = !open; skinBtn.setAttribute("aria-expanded", open ? "true" : "false"); }
  skinBtn.addEventListener("click", function (e) { e.stopPropagation(); skinOpen(skinMenu.hidden); });
  $$("#skinMenu [data-skin]").forEach(function (b) {
    b.addEventListener("click", function () { state.skin = b.dataset.skin; save(); applyTheme(); skinOpen(false); });
  });
  document.addEventListener("click", function (e) { if (!skinMenu.hidden && !skinMenu.contains(e.target)) skinOpen(false); });
  $("#tailleMoins").addEventListener("click", function (e) { e.stopPropagation(); state.taille = Math.max(-1, (+state.taille || 0) - 1); save(); applyTheme(); });
  $("#taillePlus").addEventListener("click", function (e) { e.stopPropagation(); state.taille = Math.min(3, (+state.taille || 0) + 1); save(); applyTheme(); });
  $("#lisibleBtn").addEventListener("click", function (e) { e.stopPropagation(); state.lisible = !state.lisible; save(); applyTheme(); });
  applyTheme();
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !skinMenu.hidden) { skinOpen(false); skinBtn.focus(); } });

  /* ============ Menu mobile ============ */
  var sidebar = $("#sidebar"), scrim = $("#scrim"), menuBtn = $("#menuBtn");
  function menu(open) { sidebar.classList.toggle("open", open); scrim.classList.toggle("open", open); menuBtn.setAttribute("aria-expanded", open ? "true" : "false"); }
  menuBtn.addEventListener("click", function () { menu(!sidebar.classList.contains("open")); });
  scrim.addEventListener("click", function () { menu(false); });

  /* ============ PDF ============ */
  function boutonPdf(id, label) { return '<button class="btn ghost small" data-pdf="' + esc(id) + '">' + esc(label) + "</button>"; }
  function brancherPdf(actions) {
    $$("[data-pdf]").forEach(function (b) {
      b.addEventListener("click", function () {
        var f = actions[b.dataset.pdf]; if (!f) return;
        var avant = b.textContent; b.disabled = true; b.textContent = "Préparation du PDF…";
        var p;
        try { p = window.PDF ? PDF.charger().then(function () { return f(); }) : Promise.reject(new Error("pdf")); } catch (e) { p = Promise.reject(e); }
        p.then(function (r) { b.textContent = r === "refus" ? "Téléchargement annulé" : "PDF prêt ✓"; },
          function () { b.textContent = "Le PDF n'a pas pu être créé"; })
          .then(function () { setTimeout(function () { b.disabled = false; b.textContent = avant; }, 2500); });
      });
    });
  }

  /* ============ Accueil ============ */
  function vAccueil() {
    var nbL = COURS.filter(function (c) { return state.lecons[c.id]; }).length;
    var nbC = Object.keys(state.cas).length;
    var nbV = Object.keys(state.vues).filter(function (k) { return inf(k); }).length;
    var next = COURS.filter(function (c) { return !state.lecons[c.id]; })[0];
    function pct(a, b) { return Math.round(100 * a / b); }
    page(
      '<section class="hero"><p class="eyebrow">Préparer mon stage</p>' +
      "<h1>La cybercriminalité, texte par texte</h1>" +
      "<p>Arriver en stage en sachant qualifier un piratage, une sextorsion ou un rançongiciel, et comprendre les actes d'enquête : cours, " + INF.length + " fiches infractions citées d'après Légifrance, procédure, jurisprudence, droit européen et cas pratiques.</p>" +
      '<div class="btns">' + (next ? '<a class="btn" href="#/cours/' + next.id + '">' + (nbL ? "Continuer : " + esc(next.titre) : "Commencer le premier cours") + "</a>" : '<a class="btn" href="#/tester">Me tester</a>') +
      '<a class="btn ghost" href="#/infractions">Chercher une infraction</a></div>' +
      '<div class="terminal">$ grep -r "frauduleusement" code-penal/livre-3/titre-2/chapitre-3\n323-1 : accéder ou se maintenir, frauduleusement…</div></section>' +
      (window.CP_REVOIR && window.CP_REVOIR.aRevoir() ? '<a class="rev-bandeau" href="#/revisions"><b>' + window.CP_REVOIR.aRevoir() + "</b> question" + (window.CP_REVOIR.aRevoir() > 1 ? "s" : "") + " à revoir aujourd'hui dans Mes révisions →</a>" : "") +
      '<div class="stats">' +
      '<div class="stat"><b>' + nbL + "/" + COURS.length + '</b><span>cours terminés</span><div class="bar"><i style="width:' + pct(nbL, COURS.length) + '%"></i></div></div>' +
      '<div class="stat"><b>' + nbV + "/" + INF.length + '</b><span>fiches consultées</span><div class="bar"><i style="width:' + pct(nbV, INF.length) + '%"></i></div></div>' +
      '<div class="stat"><b>' + nbC + "/" + CAS.length + '</b><span>cas pratiques faits</span><div class="bar"><i style="width:' + pct(nbC, CAS.length) + '%"></i></div></div>' +
      "</div>" +
      "<h2>Apprendre</h2><div class=\"grid\">" +
      tuiles([["cours", "Les cours", COURS.length + " leçons, de la loi Godfrain à la coopération européenne."],
        ["infractions", "Les fiches infractions", "La lettre du texte, puis l'explication, les peines et les aggravations."],
        ["procedure", "Les actes d'enquête", "Réquisitions, perquisition informatique, géolocalisation, pseudonyme…"],
        ["jurisprudence", "La jurisprudence", JURIS.length + " décisions à connaître, de Bluetouff au code du téléphone."],
        ["europe", "Europe et international", "Budapest, DSA, e-evidence, NIS 2 : ce qui change en France."],
        ["victimes", "Victimes : que faire ?", "Les bons réflexes, situation par situation."],
        ["enquetes", "L'enquête pas à pas", "Quatre affaires types, de la plainte au jugement, étape par étape."],
        ["nouveautes", "Ce qui a changé", "Les réformes récentes, datées, avec les fiches concernées."],
        ["arbre", "Quelle infraction ?", "Réponds à quelques questions, l'arbre te mène aux bonnes fiches."],
        ["comparer", "Comparer deux infractions", "Côte à côte : texte, éléments, peines, et la différence clé."]]) +
      "</div><h2>S'entraîner</h2><div class=\"grid\">" +
      tuiles([["cas", "Les cas pratiques", "Qualifier des faits, avec correction."],
        ["revisions", "Mes révisions", "Tes erreurs reviennent au bon moment, et ton bilan par thème."],
        ["atelier", "L'atelier", "Qualifier un fait réel, rédiger une réquisition ou un PV, corrigés par Claude."],
        ["audition", "Simuler une audition", "Claude joue une victime, un témoin ou un suspect ; tu poses les questions."],
        ["tester", "Me tester", "Défi du jour, QCM, texte à trous sur les articles, frise des lois…"],
        ["questions", "Mes questions", "Poser une question de droit à Claude et garder les réponses."],
        ["perso", "Mon contenu", "Tes notes de cours et de stage, importées depuis une photo ou un PDF."]]) +
      "</div>"
    );
  }
  function tuiles(t) { return t.map(function (x) { return '<a class="tile" href="#/' + x[0] + '"><h3>' + x[1] + "</h3><p>" + x[2] + "</p></a>"; }).join(""); }

  /* ============ Cours ============ */
  function vCours() {
    var n = 0;
    page('<p class="eyebrow">Apprendre</p><h1>Les cours</h1><p class="lead">Coche chaque leçon une fois lue. Les références d\'articles ouvrent la fiche correspondante.</p>' +
      PARTIES.map(function (p) {
        var ls = COURS.filter(function (c) { return c.partie === p.id; });
        return '<div class="partie"><b>' + p.num + "</b><h2>" + esc(p.titre) + "</h2><em>" + esc(p.sous) + "</em></div>" +
          '<ul class="lessons">' + ls.map(function (c) {
            n++;
            var ok = !!state.lecons[c.id];
            return '<li><a href="#/cours/' + c.id + '"><span class="n">' + n + '</span><span class="t"><strong>' + esc(c.titre) + "</strong><span>" + esc(c.resume) + '</span></span><span class="check' + (ok ? " on" : "") + '" aria-label="' + (ok ? "terminée" : "à faire") + '">' + (ok ? "✓" : "") + "</span></a></li>";
          }).join("") + "</ul>";
      }).join(""));
  }
  function vLecon(id) {
    var i = -1; COURS.forEach(function (c, k) { if (c.id === id) i = k; });
    if (i < 0) return page('<h1>Leçon introuvable</h1><p><a href="#/cours">Retour aux cours</a></p>');
    var c = COURS[i], prev = COURS[i - 1], next = COURS[i + 1];
    var p = trouve(PARTIES, c.partie);
    var ok = !!state.lecons[c.id];
    page('<article class="lecon"><p class="eyebrow"><a href="#/cours">Cours</a> · Partie ' + p.num + " — " + esc(p.titre) + " · Leçon " + (i + 1) + "</p>" +
      "<h1>" + esc(c.titre) + '</h1><p class="lead">' + esc(c.resume) + "</p>" +
      '<div class="chips">' + (c.arts || []).map(chip).join("") + "</div>" +
      c.contenu +
      '<div class="retenir"><h3>À retenir</h3><ul>' + c.retenir.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="btns"><button class="btn' + (ok ? " ghost" : "") + '" id="doneBtn">' + (ok ? "✓ Leçon terminée (annuler)" : "Marquer comme terminée") + "</button>" +
      boutonPdf("cours", "Télécharger en PDF") + "</div>" +
      '<div class="pager">' + (prev ? '<a class="btn ghost" href="#/cours/' + prev.id + '">← ' + esc(prev.titre) + "</a>" : "<span></span>") +
      (next ? '<a class="btn ghost" href="#/cours/' + next.id + '">' + esc(next.titre) + " →</a>" : '<a class="btn ghost" href="#/cas">Cas pratiques →</a>') + "</div></article>");
    $("#doneBtn").addEventListener("click", function () { state.lecons[c.id] = !state.lecons[c.id]; save(); route(true); });
    brancherPdf({ cours: function () { return PDF.cours(c); } });
  }

  /* ============ Fiches infractions ============ */
  var filtre = { theme: "", q: "" };
  function vInfractions() {
    page('<p class="eyebrow">Apprendre</p><h1>Les infractions</h1>' +
      '<p class="lead">' + INF.length + " fiches : la lettre du texte d'après Légifrance (version en vigueur au " + window.LF.consult + "), puis l'explication.</p>" +
      '<input class="search" id="q" type="search" placeholder="Rechercher : phishing, deepfake, 323-1, mineur, rançongiciel…" value="' + esc(filtre.q) + '" aria-label="Rechercher une infraction">' +
      '<div class="filtres"><button class="pill' + (filtre.theme ? "" : " on") + '" data-t="">Toutes</button>' +
      THEMES.map(function (t) { return '<button class="pill' + (filtre.theme === t.id ? " on" : "") + '" data-t="' + t.id + '">' + esc(t.court) + "</button>"; }).join("") +
      '</div><div id="liste"></div>');
    function draw() {
      var q = norm(filtre.q.trim());
      var res = INF.filter(function (f) {
        if (filtre.theme && f.theme !== filtre.theme) return false;
        if (!q) return true;
        return norm([f.art, f.titre, f.materiel, f.motscles || "", f.notes, CIT[f.id] || ""].join(" ")).indexOf(q) >= 0;
      });
      $("#liste").innerHTML = res.length ? res.map(function (f) {
        var t = theme(f.theme);
        return '<a class="fiche-item ' + t.couleur + '" href="#/infraction/' + f.id + '"><span class="num">' + esc(artLabel(f)) + '</span><span><span class="theme-tag">' + esc(t.court) + "</span><br>" + esc(f.titre) + '</span><span class="peine">' + esc(f.peines[0][1]) + "</span></a>";
      }).join("") : '<p class="petit">Aucune fiche ne correspond. Essaie un autre mot.</p>';
    }
    draw();
    $("#q").addEventListener("input", function (e) { filtre.q = e.target.value; draw(); });
    $$(".pill").forEach(function (b) { b.addEventListener("click", function () { filtre.theme = b.dataset.t; $$(".pill").forEach(function (x) { x.classList.toggle("on", x === b); }); draw(); }); });
  }
  function vInfraction(id) {
    var f = inf(id);
    if (!f) return page('<h1>Fiche introuvable</h1><p><a href="#/infractions">Retour aux fiches</a></p>');
    state.vues[f.id] = 1; save();
    var t = theme(f.theme);
    var lies = COURS.filter(function (c) { return (c.arts || []).indexOf(f.id) >= 0; });
    var cas = CAS.filter(function (c) { return c.bonnes.indexOf(f.id) >= 0; });
    var arrets = JURIS.filter(function (j) { return j.arts.indexOf(f.id) >= 0; });
    var i = INF.indexOf(f), prev = INF[i - 1], next = INF[i + 1];
    page('<article class="fiche ' + t.couleur + '"><p class="eyebrow"><a href="#/infractions">Fiches</a> · ' + esc(t.nom) + "</p>" +
      '<p class="ref">' + esc(f.code) + " — " + esc(artLabel(f)) + "</p><h1>" + esc(f.titre) + "</h1>" +
      '<p class="badges">' + (f.verifie ? '<span class="badge">Relu sur Légifrance</span>' : '<span class="badge warn">À vérifier</span>') +
      '<span class="badge">Version : ' + esc(f.version) + "</span>" + (f.plainte ? '<span class="badge warn">Plainte préalable</span>' : "") + "</p>" +
      (CIT[f.id] ? '<section class="lettre"><p class="lettre-k">La lettre du texte</p><blockquote>« ' + esc(CIT[f.id]) + ' »</blockquote></section>' : "") +
      '<div class="dl">' +
      '<div class="k">Élément matériel</div><div>' + esc(f.materiel) + "</div>" +
      '<div class="k">Élément moral</div><div>' + esc(f.moral) + "</div>" +
      '<div class="k">Peines</div><div><ul class="peines">' + f.peines.map(function (p) { return "<li><small>" + esc(p[0]) + "</small><b>" + esc(p[1]) + "</b></li>"; }).join("") + "</ul></div>" +
      '<div class="k">Tentative</div><div>' + (f.tentative ? "Punissable" : "Non prévue par le texte (ou sans objet)") + "</div>" +
      (f.notes ? '<div class="k">À savoir</div><div>' + esc(f.notes) + "</div>" : "") +
      "</div>" +
      '<div class="btns"><a class="btn ghost small" href="' + esc(f.url) + '" target="_blank" rel="noopener">Texte officiel sur Légifrance ↗</a>' + boutonPdf("fiche", "Télécharger la fiche en PDF") + "</div>" +
      (lies.length ? "<h3>Dans les cours</h3><div class=\"chips\">" + lies.map(function (c) { return '<a class="chip" href="#/cours/' + c.id + '">' + esc(c.titre) + "</a>"; }).join("") + "</div>" : "") +
      (arrets.length ? "<h3>Jurisprudence</h3><div class=\"chips\">" + arrets.map(function (j) { return '<a class="chip" href="#/arret/' + j.id + '">' + esc(j.juridiction + ", " + j.date) + "</a>"; }).join("") + "</div>" : "") +
      (cas.length ? "<h3>Dans les cas pratiques</h3><div class=\"chips\">" + cas.map(function (c) { return '<a class="chip" href="#/cas/' + c.id + '">' + esc(c.titre) + "</a>"; }).join("") + "</div>" : "") +
      '<div class="pager">' + (prev ? '<a class="btn ghost" href="#/infraction/' + prev.id + '">← ' + esc(artLabel(prev)) + "</a>" : "<span></span>") +
      (next ? '<a class="btn ghost" href="#/infraction/' + next.id + '">' + esc(artLabel(next)) + " →</a>" : "") + "</div>" +
      blocCorrection(f) + "</article>");
    brancherPdf({ fiche: function () { return PDF.fiche(f); } });
    brancherCorrection(f);
  }

  /* ============ Corriger une fiche ============ */
  var CORR = window.CORRECTIONS;
  function dateCourte(iso) { try { return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }); } catch (e) { return ""; } }
  function blocCorrection(f) {
    if (!CORR) return "";
    var c = CORR.info(f.id);
    return '<p class="corr-pied">' +
      (c ? '<span class="corr-marque">Fiche corrigée par toi' + (c.modifie ? " le " + esc(dateCourte(c.modifie)) : "") + "</span> · " +
        '<button class="corr-lien" data-corr="origine">revenir au texte d\'origine</button> · ' : "") +
      '<button class="corr-lien" data-corr="editer">✎ corriger cette fiche</button></p>';
  }
  function brancherCorrection(f) {
    $$("[data-corr]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (b.dataset.corr === "editer") return vCorriger(f);
        if (b.dataset.armed) { CORR.annuler(f.id); return; }
        b.dataset.armed = "1"; b.textContent = "clique encore pour confirmer";
        setTimeout(function () { if (b.isConnected) { delete b.dataset.armed; b.textContent = "revenir au texte d'origine"; } }, 3000);
      });
    });
  }
  function vCorriger(f) {
    var a = CORR.actuel(f.id), o = CORR.origine(f.id);
    var champs = [
      ["titre", "Titre", 1, ""],
      ["citation", "La lettre du texte", 6, "Le texte exact de l'article, sans les guillemets."],
      ["materiel", "Élément matériel", 4, ""],
      ["moral", "Élément moral", 3, ""],
      ["peines", "Peines", 4, "Une ligne par peine, sous la forme « situation : peine »."],
      ["notes", "À savoir", 3, ""]
    ];
    window.CP_EDITION = true;
    page('<article class="fiche corr-form"><p class="eyebrow"><a href="#/infraction/' + esc(f.id) + '">' + esc(artLabel(f)) + "</a> · correction</p>" +
      "<h1>Corriger la fiche</h1><p class=\"lead\">Change ce qui est faux. Ta version remplacera la mienne partout sur le site, PDF compris. Le texte d'origine reste gardé : tu pourras y revenir.</p>" +
      champs.map(function (c) {
        var id = "corr-" + c[0], diff = a[c[0]] !== o[c[0]];
        return '<div class="corr-champ"><label for="' + id + '">' + c[1] + (diff ? ' <span class="corr-marque">corrigé</span>' : "") + "</label>" +
          (c[3] ? '<p class="petit">' + esc(c[3]) + "</p>" : "") +
          (c[2] === 1 ? '<input type="text" id="' + id + '" value="' + esc(a[c[0]]) + '">' : '<textarea id="' + id + '" rows="' + c[2] + '">' + esc(a[c[0]]) + "</textarea>") + "</div>";
      }).join("") +
      '<div class="btns"><button class="btn" id="corrOk">Enregistrer</button><a class="btn ghost" href="#/infraction/' + esc(f.id) + '" id="corrNon">Annuler</a></div>' +
      '<p class="petit" id="corrMsg">' + (CORR.mode() === "sync" ? "La correction est enregistrée avec le site : je pourrai la relire pour corriger aussi ma source." : "La correction est enregistrée dans ce navigateur.") + "</p></article>");
    $("#corrNon").addEventListener("click", function () { window.CP_EDITION = false; });
    $("#corrOk").addEventListener("click", function () {
      var v = {};
      champs.forEach(function (c) { v[c[0]] = $("#corr-" + c[0]).value; });
      if (!v.titre.trim()) { $("#corrMsg").textContent = "Le titre ne peut pas être vide."; return; }
      var b = $("#corrOk"); b.disabled = true; b.textContent = "Enregistrement…";
      window.CP_EDITION = false;
      Promise.resolve(CORR.enregistrer(f.id, v)).then(function () {
        if (location.hash === "#/infraction/" + f.id) route(true); else location.hash = "#/infraction/" + f.id;
      }, function () {
        var p = $(".corr-pied");
        if (p) p.insertAdjacentHTML("beforeend", '<br><span class="corr-marque">Gardée dans ce navigateur seulement : l\'enregistrement avec le site a échoué.</span>');
      });
    });
  }

  /* ============ Tableau des peines ============ */
  function vPeines() {
    var acts = { tout: function () { return PDF.peines(); }, fiches: function () { return PDF.theme(""); } };
    page('<p class="eyebrow">Réviser</p><h1>Toutes les peines</h1><p class="lead">Les maxima encourus par une personne physique. Les personnes morales encourent en principe le quintuple de l\'amende.</p>' +
      '<div class="btns">' + boutonPdf("tout", "Tableau des peines en PDF") + boutonPdf("fiches", "Toutes les fiches en PDF") + "</div>" +
      THEMES.map(function (t) {
        var fs = INF.filter(function (f) { return f.theme === t.id; });
        if (!fs.length) return "";
        acts["t-" + t.id] = function () { return PDF.theme(t.id); };
        return '<div class="theme-titre ' + t.couleur + '"><h2><span class="theme-tag">' + esc(t.court) + "</span><br>" + esc(t.nom) + "</h2>" + boutonPdf("t-" + t.id, "Ces fiches en PDF") + "</div>" +
          '<div class="table-wrap"><table class="tab"><tr><th>Article</th><th>Infraction</th><th>Peines</th></tr>' +
          fs.map(function (f) {
            return '<tr><td><a class="chip" href="#/infraction/' + f.id + '">' + esc(f.art) + "</a></td><td>" + esc(f.titre) + "</td><td>" +
              f.peines.map(function (p) { return "<div><b class=\"mono\">" + esc(p[1]) + "</b>" + (f.peines.length > 1 ? ' <span class="petit">— ' + esc(p[0]) + "</span>" : "") + "</div>"; }).join("") + "</td></tr>";
          }).join("") + "</table></div>";
      }).join(""));
    brancherPdf(acts);
  }

  /* ============ Actes d'enquête ============ */
  function vProcedure() {
    var familles = [];
    ACTES.forEach(function (a) { if (familles.indexOf(a.famille) < 0) familles.push(a.famille); });
    page('<p class="eyebrow">Apprendre</p><h1>Les actes d\'enquête</h1>' +
      '<p class="lead">La boîte à outils de l\'enquêteur cyber dans le Code de procédure pénale : qui peut faire quoi, à quelles conditions, pour combien de temps.</p>' +
      '<div class="encadre attention"><strong>Recodification.</strong> L\'ordonnance n° 2025-1091 du 19 novembre 2025 renumérote le CPP à compter du 1er janvier 2029. Jusque-là, les numéros ci-dessous s\'appliquent.</div>' +
      familles.map(function (fam) {
        return "<h2>" + esc(fam) + '</h2><div class="grid">' + ACTES.filter(function (a) { return a.famille === fam; }).map(function (a) {
          return '<a class="tile" href="#/acte/' + a.id + '"><span class="k">' + esc(a.art) + "</span><h3>" + esc(a.titre) + "</h3><p>" + esc(a.qui) + "</p></a>";
        }).join("") + "</div>";
      }).join(""));
  }
  function vActe(id) {
    var a = trouve(ACTES, id);
    if (!a) return page('<h1>Fiche introuvable</h1><p><a href="#/procedure">Retour</a></p>');
    var i = ACTES.indexOf(a), prev = ACTES[i - 1], next = ACTES[i + 1];
    page('<article class="fiche t7"><p class="eyebrow"><a href="#/procedure">Actes d\'enquête</a> · ' + esc(a.famille) + "</p>" +
      '<p class="ref">Code de procédure pénale — ' + esc(a.art.replace("CPP ", "art. ")) + "</p><h1>" + esc(a.titre) + "</h1>" +
      '<p class="badges"><span class="badge">Relu sur Légifrance</span><span class="badge">Version : ' + esc(a.version) + "</span></p>" +
      (a.citation ? '<section class="lettre"><p class="lettre-k">La lettre du texte</p><blockquote>« ' + esc(a.citation) + ' »</blockquote></section>' : "") +
      '<div class="dl"><div class="k">Qui</div><div>' + esc(a.qui) + '</div><div class="k">Conditions</div><div>' + esc(a.conditions) + "</div>" +
      '<div class="k">Durée</div><div>' + esc(a.duree) + '</div><div class="k">À savoir</div><div>' + esc(a.plus) + "</div></div>" +
      '<p><a class="btn ghost small" href="' + esc(a.url) + '" target="_blank" rel="noopener">Texte officiel sur Légifrance ↗</a></p>' +
      '<div class="pager">' + (prev ? '<a class="btn ghost" href="#/acte/' + prev.id + '">← ' + esc(prev.art) + "</a>" : "<span></span>") +
      (next ? '<a class="btn ghost" href="#/acte/' + next.id + '">' + esc(next.art) + " →</a>" : "") + "</div></article>");
  }

  /* ============ Jurisprudence ============ */
  function vJuris() {
    page('<p class="eyebrow">Apprendre</p><h1>La jurisprudence</h1><p class="lead">Les décisions qui ont fixé le sens des textes. Chaque fiche suit le plan classique : faits, question, solution, portée.</p>' +
      '<div class="encadre attention">Ces résumés ne viennent pas de Légifrance : vérifie les références (numéro, date) sur Légifrance ou Judilibre avant de les citer.</div>' +
      '<div class="grid">' + JURIS.map(function (j) {
        return '<a class="tile" href="#/arret/' + j.id + '"><span class="k">' + esc(j.theme) + " · " + esc(j.juridiction) + "</span><h3>" + esc(j.court) + "</h3><p>" + esc(j.date) + " — " + esc(j.num) + "</p></a>";
      }).join("") + "</div>");
  }
  function vArret(id) {
    var j = trouve(JURIS, id);
    if (!j) return page('<h1>Décision introuvable</h1><p><a href="#/jurisprudence">Retour</a></p>');
    var i = JURIS.indexOf(j), prev = JURIS[i - 1], next = JURIS[i + 1];
    page('<article class="fiche t5"><p class="eyebrow"><a href="#/jurisprudence">Jurisprudence</a> · ' + esc(j.theme) + "</p>" +
      '<p class="ref">' + esc(j.juridiction + ", " + j.date + ", " + j.num) + "</p><h1>" + esc(j.court) + "</h1>" +
      '<div class="dl"><div class="k">Faits</div><div>' + esc(j.faits) + '</div><div class="k">Question</div><div>' + esc(j.question) + "</div>" +
      '<div class="k">Solution</div><div>' + esc(j.solution) + '</div><div class="k">Portée</div><div>' + esc(j.portee) + "</div></div>" +
      (j.arts.length ? '<h3>Textes concernés</h3><div class="chips">' + j.arts.map(chip).join("") + "</div>" : "") +
      '<div class="pager">' + (prev ? '<a class="btn ghost" href="#/arret/' + prev.id + '">← ' + esc(prev.court) + "</a>" : "<span></span>") +
      (next ? '<a class="btn ghost" href="#/arret/' + next.id + '">' + esc(next.court) + " →</a>" : "") + "</div></article>");
  }

  /* ============ Europe ============ */
  function vEurope() {
    page('<p class="eyebrow">Apprendre</p><h1>Europe et international</h1><p class="lead">Les textes européens et internationaux qui s\'appliquent en France ou qui ont façonné le droit français.</p>' +
      EUROPE.map(function (e) {
        return '<section class="card eu"><div class="eu-tete"><span class="badge">' + esc(e.type) + '</span><span class="badge ' + (/cours|pas encore|retard/i.test(e.statut) ? "warn" : "") + '">' + esc(e.statut) + "</span></div>" +
          "<h2>" + esc(e.nom) + '</h2><p class="petit mono">' + esc(e.ref) + "</p><p>" + esc(e.quoi) + '</p><p class="eu-fr"><strong>En France :</strong> ' + esc(e.france) + "</p></section>";
      }).join("") +
      '<p class="petit">Sources : EUR-Lex, Légifrance et collection des traités des Nations unies. L\'état de la transposition de NIS 2 change vite : vérifie-le avant ton stage.</p>');
  }

  /* ============ Victimes ============ */
  function vVictimes() {
    page('<p class="eyebrow">Pratique</p><h1>Victimes : que faire ?</h1><p class="lead">Les réflexes à donner à une victime, situation par situation. En stage, c\'est souvent la première question au téléphone ou à l\'accueil.</p>' +
      VICTIMES.map(function (v, i) {
        return '<section class="card victime"><h2>' + esc(v.titre) + '</h2><ol class="etapes">' + v.etapes.map(function (e) { return "<li>" + esc(e) + "</li>"; }).join("") + "</ol>" +
          (v.arts ? '<div class="chips">' + v.arts.map(chip).join("") + "</div>" : "") + "</section>";
      }).join("") +
      '<div class="encadre"><strong>Contacts utiles.</strong> 17Cyber et cybermalveillance.gouv.fr (diagnostic et assistance) ; PHAROS sur internet-signalement.gouv.fr (contenus illicites) ; 33700 (SMS et appels frauduleux) ; 3018 (cyberharcèlement des jeunes) ; 119 (enfance en danger) ; 17 ou 112 en cas d\'urgence.</div>' +
      '<p class="petit">Ces conseils sont généraux. Les services et numéros évoluent : vérifie-les sur les sites officiels.</p>');
  }

  /* ============ Cas pratiques ============ */
  function vCas() {
    function tuile(c) {
      var i = CAS.indexOf(c), s = state.cas[c.id];
      return '<a class="tile" href="#/cas/' + c.id + '"><span class="k">Cas ' + (i + 1) + (s != null ? " · " + s + " %" : "") + "</span><h3>" + esc(c.titre) + "</h3><p>" + esc(c.faits.slice(0, 110)) + "…</p></a>";
    }
    var droit = CAS.filter(function (c) { return !c.partie; }), tech = CAS.filter(function (c) { return c.partie === "technique"; }), coop = CAS.filter(function (c) { return c.partie === "cooperation"; });
    page('<p class="eyebrow">S\'entraîner</p><h1>Cas pratiques</h1><p class="lead">Lis les faits, coche toutes les réponses qui te semblent justes, puis compare avec la correction.</p>' +
      "<h2>Qualifier les faits</h2><p class=\"petit\">Retrouver les infractions.</p><div class=\"grid\">" + droit.map(tuile).join("") + "</div>" +
      (tech.length ? "<h2>Partie technique</h2><p class=\"petit\">Reconnaître la technique d'attaque, choisir les bons réflexes d'enquête, et qualifier.</p><div class=\"grid\">" + tech.map(tuile).join("") + "</div>" : "") +
      (coop.length ? "<h2>Coopération internationale</h2><p class=\"petit\">Trouver la règle qui rend la France compétente et choisir les bons outils de coopération.</p><div class=\"grid\">" + coop.map(tuile).join("") + "</div>" : ""));
  }
  function casLibelle(id) {
    var f = inf(id);
    if (f) return '<span class="mono">' + esc(artLabel(f)) + "</span> — " + esc(f.titre);
    return esc((window.CAS_LIBELLES || {})[id] || id);
  }
  function casChip(id) {
    if (inf(id)) return chip(id);
    return '<span class="chip">' + esc((window.CAS_LIBELLES || {})[id] || id) + "</span>";
  }
  function vUnCas(id) {
    var i = -1; CAS.forEach(function (c, k) { if (c.id === id) i = k; });
    if (i < 0) return page('<h1>Cas introuvable</h1><p><a href="#/cas">Retour</a></p>');
    var c = CAS[i], next = CAS[i + 1];
    var tech = c.partie === "technique";
    var opts = shuffle(c.bonnes.concat(c.pieges)).filter(function (id) { return inf(id) || (window.CAS_LIBELLES || {})[id]; });
    page('<article class="quiz"><p class="eyebrow"><a href="#/cas">Cas pratiques</a> · ' + (tech ? "Partie technique · " : (c.partie === "cooperation" ? "Coopération internationale · " : "")) + "Cas " + (i + 1) + "/" + CAS.length + "</p><h1>" + esc(c.titre) + "</h1>" +
      '<div class="cas-faits">' + esc(c.faits) + "</div>" +
      "<h3>" + (tech ? "Quelle technique, quels réflexes, quelles qualifications ?" : (c.partie === "cooperation" ? "Quelle compétence, quels outils, quelles qualifications ?" : "Quelles qualifications retiens-tu ?")) + "</h3>" +
      '<div class="cas-opts">' + opts.map(function (id) {
        return '<label data-id="' + esc(id) + '"><input type="checkbox" value="' + esc(id) + '"><span>' + casLibelle(id) + "</span></label>";
      }).join("") + "</div>" +
      '<div class="btns"><button class="btn" id="corriger">Corriger</button></div><p class="jeu-msg" id="casMsg" hidden></p><div id="corr"></div>' +
      '<div class="pager"><a class="btn ghost" href="#/cas">← Tous les cas</a>' + (next ? '<a class="btn ghost" href="#/cas/' + next.id + '">Cas suivant →</a>' : "") + "</div></article>");
    $("#corriger").addEventListener("click", function () {
      var choix = $$(".cas-opts input").filter(function (x) { return x.checked; }).map(function (x) { return x.value; });
      if (!choix.length) { var m = $("#casMsg"); m.textContent = "Coche au moins une réponse avant de corriger."; m.hidden = false; return; }
      var bons = 0, faux = 0;
      $$(".cas-opts label").forEach(function (l) {
        var lid = l.dataset.id, att = c.bonnes.indexOf(lid) >= 0, coche = choix.indexOf(lid) >= 0;
        if (att && coche) { l.classList.add("good"); bons++; }
        else if (!att && coche) { l.classList.add("bad"); faux++; }
        else if (att && !coche) l.classList.add("miss");
        l.querySelector("input").disabled = true;
      });
      var score = Math.max(0, Math.round(100 * (bons - faux) / c.bonnes.length));
      state.cas[c.id] = score; save();
      if (window.CP_REVOIR) window.CP_REVOIR.noterCas(c, score);
      $("#corriger").disabled = true; $("#casMsg").hidden = true;
      $("#corr").innerHTML = '<div class="feedback"><p class="score-big">' + score + ' %</p><p class="legend">Bordure verte : bonne réponse cochée · rouge : réponse à écarter · orange pointillé : réponse oubliée.</p><p>' + esc(c.correction) + '</p><div class="chips">' + c.bonnes.map(casChip).join("") + "</div></div>";
    });
    $$(".cas-opts input").forEach(function (x) { x.addEventListener("change", function () { $("#casMsg").hidden = true; }); });
  }

  /* ============ Lexique, carnet, sources ============ */
  function vLexique() {
    var L = window.LEXIQUE.slice().sort(function (a, b) { return a[0].localeCompare(b[0], "fr"); });
    page('<p class="eyebrow">Apprendre</p><h1>Lexique</h1><input class="search" id="lq" type="search" placeholder="Filtrer le lexique…" aria-label="Filtrer le lexique"><dl class="lex" id="lex"></dl>');
    function draw(q) {
      q = norm(q || "");
      $("#lex").innerHTML = L.filter(function (t) { return !q || norm(t[0] + " " + t[1]).indexOf(q) >= 0; })
        .map(function (t) { return "<dt>" + esc(t[0]) + "</dt><dd>" + esc(t[1]) + "</dd>"; }).join("");
    }
    draw(); $("#lq").addEventListener("input", function (e) { draw(e.target.value); });
  }
  function vCarnet() {
    page('<p class="eyebrow">Réviser</p><h1>Mon carnet</h1><p class="lead">Un brouillon rapide : moyens mnémotechniques, questions à vérifier. Enregistré dans ce navigateur. Pour des notes complètes, synchronisées entre tes appareils, utilise <a href="#/perso">Mon contenu</a>.</p>' +
      '<textarea class="carnet" id="notes" placeholder="Ex. : 323-1 = 3 ans / 100 000 € depuis la LOPMI…">' + esc(state.notes) + '</textarea><p class="saved" id="saved"></p>');
    var t;
    $("#notes").addEventListener("input", function (e) {
      state.notes = e.target.value; clearTimeout(t);
      t = setTimeout(function () { save(); $("#saved").textContent = "Enregistré à " + new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }); }, 400);
    });
  }
  function vSources() {
    var lf = window.LF.cp, cpp = window.LF.cpp;
    var L = [
      ["Code pénal — Atteintes aux STAD (art. 323-1 à 323-8)", lf + "LEGISCTA000006149839/"],
      ["Code pénal — Atteinte à la vie privée (226-1 à 226-7)", lf + "LEGISCTA000006165309/"],
      ["Code pénal — Atteinte à la représentation de la personne (226-8, 226-8-1)", lf + "LEGISCTA000006165310/"],
      ["Code pénal — Secret des correspondances (226-15)", lf + "LEGISCTA000006181757/"],
      ["Code pénal — Fichiers et traitements informatiques (226-16 à 226-24)", lf + "LEGISCTA000006165313/"],
      ["Code pénal — Harcèlement moral (222-33-2 s.)", lf + "LEGISCTA000006165282/"],
      ["Code pénal — Risques causés à autrui (223-1-1)", lf + "LEGISCTA000006165287/"],
      ["Code pénal — Infractions sexuelles contre les mineurs (227-21-1 s.)", lf + "LEGISCTA000043405084/"],
      ["Code pénal — Extorsion (312-1 s.)", lf + "LEGISCTA000006165327/"],
      ["Code pénal — Chantage (312-10 s.)", lf + "LEGISCTA000006165328/"],
      ["Code pénal — Escroquerie (313-1 s.)", lf + "LEGISCTA000006165331/"],
      ["Code pénal — Actes de terrorisme (421-1 s.)", lf + "LEGISCTA000006149845/"],
      ["Code pénal — Entraves à la justice (434-15-2)", lf + "LEGISCTA000006165379/"],
      ["Code pénal — Circonstances aggravantes (132-79)", lf + "LEGISCTA000006165269/"],
      ["Code pénal — Trahison et espionnage (411-1 à 411-12)", lf + "LEGISCTA000006149841/"],
      ["Code pénal — Violences, dont messages malveillants (222-16)", lf + "LEGISCTA000006181751/"],
      ["Code pénal — Menaces (222-17 à 222-18-3)", lf + "LEGISCTA000006181752/"],
      ["Code pénal — Menaces contre les personnes exerçant une fonction publique (433-3)", lf + "LEGISCTA000006165398/"],
      ["Code pénal — Recel (321-1 s.)", lf + "LEGISCTA000006165338/"],
      ["Code pénal — Provocation au suicide (223-13 s.)", lf + "LEGISCTA000006165292/"],
      ["Code pénal — Des faux (441-1 s.)", lf + "LEGISCTA000006149854/"],
      ["Code pénal — Trafic de stupéfiants (222-34 s.)", lf + "LEGISCTA000006165284/"],
      ["Code pénal — Trafic d'armes (222-52 s.)", lf + "LEGISCTA000032632507/"],
      ["Code pénal — Proxénétisme (225-5 s.)", lf + "LEGISCTA000006165301/"],
      ["Code pénal — Recours à la prostitution (225-12-1 s.)", lf + "LEGISCTA000006165396/"],
      ["Code pénal — Contenu de certaines peines, dont confiscation et suspension des comptes (131-21, 131-35-1)", lf + "LEGISCTA000006181731/"],
      ["CPP — Saisies spéciales (706-141 s.)", cpp + "LEGISCTA000022456757/"],
      ["Code pénal — Blanchiment (324-1 s.)", lf + "LEGISCTA000006165345/"],
      ["Code monétaire et financier — Infractions relatives aux instruments de paiement (L163-1 s.)", "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072026/LEGISCTA000006154001/"],
      ["Code de la propriété intellectuelle — Dispositions pénales, droit d'auteur (L335-1 s.)", "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069414/LEGISCTA000006161658/"],
      ["Code de la propriété intellectuelle — Actions pénales, marques (L716-8-9 s.)", "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069414/LEGISCTA000039377645/"],
      ["Code pénal — Infractions commises sur le territoire de la République (113-2, 113-2-1)", lf + "LEGISCTA000006165262/"],
      ["Code pénal — Infractions commises hors du territoire (113-6 à 113-14)", lf + "LEGISCTA000006165263/"],
      ["CPP — Administration de la preuve (427 s.)", cpp + "LEGISCTA000006182908/"],
      ["CPP — Décision d'enquête européenne (694-15 s.)", cpp + "LEGISCTA000006167502/"],
      ["CPP — Mandat d'arrêt européen (695-11 s.)", cpp + "LEGISCTA000006167507/"],
      ["CPP — Crimes et délits flagrants (56, 57-1, 60-1, 60-1-2, 60-2)", cpp + "LEGISCTA000006151876/"],
      ["CPP — Enquête préliminaire (76-3, 77-1-1, 77-1-2)", cpp + "LEGISCTA000006151877/"],
      ["CPP — Mise au clair des données chiffrées (230-1 s.)", cpp + "LEGISCTA000006151887/"],
      ["CPP — Géolocalisation (230-32 s.)", cpp + "LEGISCTA000028793411/"],
      ["CPP — Enquête sous pseudonyme (230-46)", cpp + "LEGISCTA000038269232/"],
      ["CPP — Atteintes aux STAD (706-72 s.)", cpp + "LEGISCTA000006138137/"],
      ["CPP — Criminalité organisée (706-73 s., 706-95, 706-102-1)", cpp + "LEGISCTA000006138138/"],
      ["Loi n° 2004-575 du 21 juin 2004 (LCEN), version consolidée", window.LF.lcen]
    ];
    page('<p class="eyebrow">Références</p><h1>Sources</h1><p class="lead">Les citations des fiches sont recopiées de Légifrance, version consolidée en vigueur au ' + window.LF.consult + ". Les explications sont des résumés : en cas de doute, le texte officiel fait foi.</p>" +
      "<h2>Légifrance</h2><ul class=\"sources\">" + L.map(function (s) { return '<li><a href="' + s[1] + '" target="_blank" rel="noopener">' + esc(s[0]) + " ↗</a></li>"; }).join("") + "</ul>" +
      "<h2>Non relu sur Légifrance</h2><ul class=\"sources\">" +
      "<li>Code des assurances, art. L. 12-10-1 (plainte sous 72 h).</li>" +
      "<li>Les décisions de la page Jurisprudence (Cour de cassation, Conseil constitutionnel, CJUE).</li>" +
      "<li>Les textes européens et internationaux (EUR-Lex, Conseil de l'Europe, Nations unies), et l'état de la transposition de NIS 2.</li>" +
      "<li>Les services et numéros de la page Victimes.</li>" +
      "</ul><h2>Autres sources</h2><ul class=\"sources\">" +
      "<li>Partie V « Comprendre la technique » : plan inspiré d'un cours de cybercriminalité et d'investigation numérique (2024/2025) consulté sur Scribd ; contenu rédigé à nouveau et rattaché au droit français.</li>" +
      "<li>Leçon « Réprimer sans museler » : d'après Media Defence, « Module 7 : Cybercriminalité » (décembre 2020, licence Creative Commons BY-NC-SA 4.0), contenu reformulé et complété.</li>" +
      "<li>Leçons « Pourquoi l'enquête cyber est difficile », « Qui est responsable ? » et « Le vol d'identité en trois temps » : idées tirées de UIT, « Comprendre la cybercriminalité : guide pour les pays en développement » (M. Gercke, 2009), rédigées à nouveau et mises à jour avec le droit en vigueur (DSA, CJUE, CPP).</li>" +
      "<li>Leçons « Compétence et coopération internationale » et « La preuve numérique devant le juge » : thèmes tirés de l'ONUDC, « Étude détaillée sur la cybercriminalité » (ébauche, février 2013), rédigés à partir des textes français.</li>" +
      "<li>Leçons « La contrefaçon en ligne », « La cybercriminalité organisée » et « Hacktivisme, cyberterrorisme, espionnage et désinformation » : thèmes des modules 11, 13 et 14 de la série universitaire E4J de l'ONUDC sur la cybercriminalité, rédigés à partir des textes français.</li>" +
      "<li>Page « Dispositifs publics » : d'après economie.gouv.fr (4 novembre 2026) et les sites officiels de 17Cyber, du CERT-FR, de MesServicesCyber et de Cybermalveillance.gouv.fr.</li>" +
      "<li>Fiche INTERPOL (page Europe et international) : d'après la brochure INTERPOL « Cybercriminalité — Des projets de police tournés vers l'avenir » (2017), résumée.</li>" +
      "</ul><div class=\"encadre attention\"><strong>À surveiller.</strong> L'ordonnance n° 2025-1091 du 19 novembre 2025 recodifie le Code de procédure pénale à compter du 1er janvier 2029 : les numéros d'articles du CPP changeront à cette date.</div>");
  }

  /* ============ Pages branchées sur des modules ============ */
  function module(nom, titre) {
    var M = window[nom];
    if (!M) return page("<h1>" + titre + "</h1><p>Page indisponible.</p>");
    page(M.html()); M.after();
  }

  /* ============ Routeur ============ */
  var NAV = { infraction: "infractions", acte: "procedure", arret: "jurisprudence" };
  function route(keepScroll) {
    var h = (location.hash || "#/accueil").replace(/^#\/?/, "").split("/");
    var name = h[0] || "accueil", arg = h[1] ? decodeURIComponent(h[1]) : "";
    var navName = NAV[name] || name;
    $$(".nav a").forEach(function (a) { a.classList.toggle("active", a.dataset.route === navName); });
    menu(false);
    pageCourante = name; document.documentElement.setAttribute("data-page", name); applyTheme();
    window.CP_EDITION = false;
    var VUES = window.CP_VIEWS || {};
    if (VUES[name]) { VUES[name](h.slice(1).map(function (x) { try { return decodeURIComponent(x); } catch (e) { return x; } })); if (!keepScroll) window.scrollTo(0, 0); return; }
    switch (name) {
      case "cours": arg ? vLecon(arg) : vCours(); break;
      case "infractions": vInfractions(); break;
      case "infraction": vInfraction(arg); break;
      case "peines": vPeines(); break;
      case "procedure": vProcedure(); break;
      case "acte": vActe(arg); break;
      case "jurisprudence": vJuris(); break;
      case "arret": vArret(arg); break;
      case "europe": vEurope(); break;
      case "victimes": vVictimes(); break;
      case "cas": arg ? vUnCas(arg) : vCas(); break;
      case "ofac": module("OFAC_PAGE", "L'OFAC"); break;
      case "ressources": module("RESSOURCES_PAGE", "Dispositifs publics"); break;
      case "tester": module("TESTER", "Me tester"); break;
      case "questions": module("QUESTIONS", "Mes questions"); break;
      case "perso": module("PERSO", "Mon contenu"); break;
      case "lexique": vLexique(); break;
      case "carnet": vCarnet(); break;
      case "sources": vSources(); break;
      default: vAccueil();
    }
    if (window.CP_LEX && arg && /^(cours|infraction|acte|arret|cas)$/.test(name)) {
      var cible = $(".lecon") || $(".dl") || $(".cas-faits") || main;
      try { window.CP_LEX.annoter(cible); } catch (e) {}
    }
    if (!keepScroll) window.scrollTo(0, 0);
  }
  window.CP_API = { state: state, save: save, page: page, route: route,
    /* appelé par la synchronisation quand un autre appareil a avancé */
    recharger: function (rerendre) {
      var s = load(); Object.keys(s).forEach(function (k) { state[k] = s[k]; });
      applyTheme(); if (rerendre !== false && !window.CP_EDITION) route(true);
    } };
  window.CP_RERENDER = function () { route(true); };
  window.addEventListener("hashchange", function () { route(); });
  route();
})();
