/* Page « Me tester » : entraînements rapides (sans Claude), frise des lois, défi du jour,
   et le moteur de jeux partagé (QCM, vrai/faux, trous, réciter, trier, relier, Claude m'interroge…)
   branché sur le contenu du site. Les notes de « Mon contenu personnalisé » ne sont pas utilisées ici. */
(function () {
  "use strict";

  var cap = { sample: null, db: null };
  var BUDGET = 14000;
  var defi = { etat: null, chargee: false };
  var KEY_DEFI = "cyberpenal.defi.v1";
  var KEY_SCORES = "cyberpenal.scores.v1";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function actif() { return !!document.getElementById("jeuBloc"); }
  function sansBalises(h) {
    var t = String(h || "")
      .replace(/<\s*(br|\/p|\/li|\/h[1-4]|\/tr|\/div)[^>]*>/gi, "\n")
      .replace(/<\s*li[^>]*>/gi, "- ").replace(/<\s*(td|th)[^>]*>/gi, " | ").replace(/<[^>]+>/g, "");
    var d = document.createElement("textarea"); d.innerHTML = t;
    return d.value.replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
  }
  function artLabel(f) { return f.code === "Code pénal" ? "art. " + f.art : f.art; }

  /* ---------- Scores des entraînements rapides ---------- */
  function lireScores() { try { return JSON.parse(localStorage.getItem(KEY_SCORES) || "{}") || {}; } catch (e) { return {}; } }
  function noterScore(k, s) { var o = lireScores(); if (o[k] == null || s > o[k]) { o[k] = s; try { localStorage.setItem(KEY_SCORES, JSON.stringify(o)); } catch (e) {} } }

  /* ---------- Les textes du site ---------- */
  function texteLecon(c) {
    return "### " + c.titre + "\n" + (c.resume || "") + "\n\n" + sansBalises(c.contenu) +
      (c.retenir && c.retenir.length ? "\n\nÀ retenir :\n- " + c.retenir.join("\n- ") : "");
  }
  function texteInfraction(f) {
    return "— " + f.code + ", " + f.art + " : " + f.titre +
      (window.CITATIONS[f.id] ? "\nTexte : " + window.CITATIONS[f.id] : "") +
      "\nÉlément matériel : " + f.materiel + "\nÉlément moral : " + f.moral +
      "\nPeines : " + f.peines.map(function (p) { return p[0] + " : " + p[1]; }).join(" ; ") +
      (f.notes ? "\nÀ savoir : " + f.notes : "");
  }
  function texteActe(a) {
    return "— " + a.art + " : " + a.titre + "\nQui : " + a.qui + "\nConditions : " + a.conditions +
      "\nDurée : " + a.duree + "\nÀ savoir : " + a.plus;
  }
  function texteJuris(j) {
    return "— " + j.juridiction + ", " + j.date + ", " + j.num + " (" + j.court + ")\nFaits : " + j.faits +
      "\nQuestion : " + j.question + "\nSolution : " + j.solution + "\nPortée : " + j.portee;
  }
  function texteEurope(e) { return "— " + e.nom + " (" + e.ref + ") : " + e.quoi + "\nEn France : " + e.france + "\nStatut : " + e.statut; }
  function texteVictime(v) { return "— " + v.titre + "\n- " + v.etapes.join("\n- "); }
  function texteCas(c) { return "— Cas « " + c.titre + " » : " + c.faits + "\nCorrection : " + c.correction; }

  var RUB = null;
  function rub() {
    if (RUB) return RUB;
    var r = {};
    PARTIES.forEach(function (p) {
      r["partie:" + p.id] = { label: "Cours — " + p.titre + " : " + p.sous, bouts: COURS.filter(function (c) { return c.partie === p.id; }).map(texteLecon) };
    });
    COURS.forEach(function (c) { r["lecon:" + c.id] = { label: c.titre, bouts: [texteLecon(c)] }; });
    THEMES.forEach(function (t) {
      r["theme:" + t.id] = { label: "Fiches — " + t.nom, bouts: INFRACTIONS.filter(function (f) { return f.theme === t.id; }).map(texteInfraction) };
    });
    r.infractions = { label: "Toutes les fiches infractions", bouts: INFRACTIONS.map(texteInfraction) };
    r.procedure = { label: "Les actes d'enquête (CPP)", bouts: ACTES.map(texteActe) };
    r.juris = { label: "La jurisprudence", bouts: JURIS.map(texteJuris) };
    r.europe = { label: "Le droit européen et international", bouts: EUROPE.map(texteEurope) };
    r.victimes = { label: "Le guide des victimes", bouts: VICTIMES.map(texteVictime) };
    r.cas = { label: "Les cas pratiques", bouts: CAS.map(texteCas) };
    r.lexique = { label: "Le lexique", bouts: ["### Lexique\n\n" + LEXIQUE.map(function (l) { return "- " + l[0] + " : " + l[1]; }).join("\n")] };
    if (window.OFAC_PAGE) r.ofac = { label: "L'OFAC", bouts: ["### L'Office anti-cybercriminalité (OFAC)\n\n" + sansBalises(window.OFAC_PAGE.html())] };
    if (window.RESSOURCES_PAGE) r.ressources = { label: "Les dispositifs publics", bouts: ["### Les dispositifs publics gratuits\n\n" + sansBalises(window.RESSOURCES_PAGE.html())] };
    RUB = r;
    return r;
  }

  /* ---------- Les textes à apprendre mot à mot : la lettre des articles ---------- */
  var TXT = null;
  function textesExacts() {
    if (TXT) return TXT;
    TXT = INFRACTIONS.filter(function (f) { return window.CITATIONS[f.id]; }).map(function (f) {
      var t = THEMES.filter(function (x) { return x.id === f.theme; })[0];
      return { id: f.id, titre: artLabel(f) + " — " + f.titre, texte: window.CITATIONS[f.id].replace(/\s*\[…\]\s*/g, " "), groupe: t ? t.nom : "Autres" };
    });
    return TXT;
  }

  function options(mode) {
    if (mode === "trous" || mode === "reciter") {
      var t = textesExacts(), groupes = [];
      t.forEach(function (x) { if (groupes.indexOf(x.groupe) < 0) groupes.push(x.groupe); });
      var o = '<option value="">Au hasard (3 articles)</option>';
      groupes.forEach(function (g) {
        o += '<optgroup label="' + esc(g) + '"><option value="g:' + esc(g) + '">Tout ce thème, au hasard</option>' +
          t.filter(function (x) { return x.groupe === g; }).map(function (x) {
            return '<option value="t:' + esc(x.id) + '">' + esc(x.titre) + "</option>";
          }).join("") + "</optgroup>";
      });
      return o;
    }
    var r = rub();
    var o2 = '<option value="">Tout le site (au hasard)</option><option value="cours">Tous les cours</option>';
    o2 += '<optgroup label="Les cours, par partie">' + PARTIES.map(function (p) { return '<option value="partie:' + p.id + '">' + esc(r["partie:" + p.id].label) + "</option>"; }).join("") + "</optgroup>";
    o2 += '<optgroup label="Les fiches infractions">' + '<option value="infractions">' + esc(r.infractions.label) + "</option>" +
      THEMES.map(function (t) { return '<option value="theme:' + t.id + '">' + esc(r["theme:" + t.id].label) + "</option>"; }).join("") + "</optgroup>";
    o2 += '<optgroup label="Les autres pages">' + ["procedure", "juris", "europe", "victimes", "ofac", "ressources", "cas", "lexique"].filter(function (k) { return r[k]; }).map(function (k) {
      return '<option value="' + k + '">' + esc(r[k].label) + "</option>";
    }).join("") + "</optgroup>";
    o2 += '<optgroup label="Une leçon en particulier">' + COURS.map(function (c) { return '<option value="lecon:' + c.id + '">' + esc(c.titre) + "</option>"; }).join("") + "</optgroup>";
    return o2;
  }

  function textes(choix) {
    var t = textesExacts();
    if (!choix) return JEUX.melanger(t).slice(0, 3);
    if (choix.indexOf("g:") === 0) { var g = choix.slice(2); return JEUX.melanger(t.filter(function (x) { return x.groupe === g; })).slice(0, 3); }
    if (choix.indexOf("t:") === 0) { var id = choix.slice(2); return t.filter(function (x) { return x.id === id; }); }
    return JEUX.melanger(t).slice(0, 3);
  }

  function tousLesBouts() {
    var r = rub(), tout = [];
    ["infractions", "procedure", "juris", "europe", "victimes", "ofac", "ressources", "cas", "lexique"].forEach(function (k) { if (r[k]) tout = tout.concat(r[k].bouts); });
    COURS.forEach(function (c) { tout.push(texteLecon(c)); });
    return tout;
  }
  function assembler(bouts) {
    var out = [], total = 0;
    for (var i = 0; i < bouts.length; i++) {
      var t = bouts[i];
      if (t.length > 6000) t = t.slice(0, 6000) + "…";
      if (total + t.length > BUDGET) { if (out.length) break; t = t.slice(0, BUDGET); }
      out.push(t); total += t.length;
    }
    return out.join("\n\n");
  }
  function matiere(choix) {
    var r = rub();
    if (!choix) return assembler(JEUX.melanger(tousLesBouts()));
    if (choix === "cours") return assembler(JEUX.melanger(COURS.map(texteLecon)));
    return r[choix] ? assembler(JEUX.melanger(r[choix].bouts)) : assembler(JEUX.melanger(COURS.map(texteLecon)));
  }

  /* ---------- Entraînements rapides (sans Claude) ---------- */
  function qPeines() {
    var pool = INFRACTIONS.filter(function (f) { return /^\d/.test(f.peines[0][1]); });
    var toutes = pool.map(function (f) { return f.peines[0][1]; }).filter(function (v, i, a) { return a.indexOf(v) === i; });
    return JEUX.melanger(pool).slice(0, 10).map(function (f) {
      var bonne = f.peines[0][1];
      var c = JEUX.melanger(JEUX.melanger(toutes.filter(function (x) { return x !== bonne; })).slice(0, 3).concat([bonne]));
      return { q: "Peine encourue (" + f.peines[0][0].toLowerCase() + ") pour : " + f.titre + " (" + artLabel(f) + ") ?", c: c, r: c.indexOf(bonne),
        e: f.peines.map(function (p) { return p[0] + " : " + p[1]; }).join(" · "), ref: "fiche:" + f.id };
    });
  }
  function qArticles() {
    return JEUX.melanger(INFRACTIONS).slice(0, 10).map(function (f) {
      var autres = JEUX.melanger(INFRACTIONS.filter(function (x) { return x !== f && x.theme === f.theme; })).slice(0, 3);
      if (autres.length < 3) autres = autres.concat(JEUX.melanger(INFRACTIONS.filter(function (x) { return x !== f && autres.indexOf(x) < 0; })).slice(0, 3 - autres.length));
      var c = JEUX.melanger(autres.concat([f]).map(artLabel));
      return { q: "Quel texte réprime : « " + f.titre + " » ?", c: c, r: c.indexOf(artLabel(f)), e: f.materiel, ref: "art:" + f.id };
    });
  }
  function qActes() {
    return JEUX.melanger(ACTES).slice(0, 8).map(function (a) {
      var c = JEUX.melanger(JEUX.melanger(ACTES.filter(function (x) { return x !== a; })).slice(0, 3).map(function (x) { return x.art; }).concat([a.art]));
      return { q: "Quel article du CPP prévoit : « " + a.titre + " » ?", c: c, r: c.indexOf(a.art), e: a.conditions, ref: "acte:" + a.id };
    });
  }
  function qVF() {
    return JEUX.melanger(VRAIFAUX).slice(0, 10).map(function (v) { return { q: v.q, c: ["Vrai", "Faux"], r: v.r ? 0 : 1, e: v.e, binaire: true, ref: "vf:" + VRAIFAUX.indexOf(v) }; });
  }
  var RAPIDES = {
    peines: ["Les peines", "Retrouve la peine de base de chaque infraction.", qPeines],
    articles: ["Les articles", "Associe chaque comportement au bon texte.", qArticles],
    actes: ["Les actes d'enquête", "Retrouve l'article du CPP qui fonde chaque acte.", qActes],
    vf: ["Vrai ou faux", "Les idées reçues et les points pièges.", qVF]
  };
  function lancerRapide(k) {
    var R = RAPIDES[k];
    JEUX.demarrerQcm(R[2](), { ordre: false, surFin: function (res) { noterScore(k, res.score); rendreRapides(); } });
    var b = $("#jeuBloc"); if (b) b.scrollIntoView({ block: "start", behavior: "smooth" });
  }
  function rendreRapides() {
    var z = $("#rapides"); if (!z) return;
    var sc = lireScores();
    z.innerHTML = Object.keys(RAPIDES).map(function (k) {
      return '<button class="tile tile-btn" data-r="' + k + '"><span class="k">' + (sc[k] != null ? "Meilleur score : " + sc[k] : "Pas encore fait") + "</span><h3>" + RAPIDES[k][0] + "</h3><p>" + RAPIDES[k][1] + "</p></button>";
    }).join("") + '<button class="tile tile-btn" data-r="frise"><span class="k">' + (sc.frise != null ? "Meilleur score : " + sc.frise + " %" : "Pas encore fait") + "</span><h3>La frise des lois</h3><p>Remets les grandes lois dans l'ordre chronologique.</p></button>" +
      '<a class="tile" href="#/cas"><span class="k">Qualification</span><h3>Cas pratiques</h3><p>Qualifier des faits complexes, avec correction.</p></a>';
    $$("[data-r]", z).forEach(function (b) { b.addEventListener("click", function () { b.dataset.r === "frise" ? ouvrirFrise() : lancerRapide(b.dataset.r); }); });
  }

  /* ---------- Frise des lois (sans Claude) ---------- */
  var LOIS = [
    [1978, "Loi Informatique et libertés"], [1988, "Loi Godfrain : premières infractions contre les systèmes"],
    [2001, "Convention de Budapest"], [2004, "LCEN : statut des hébergeurs, cryptologie"],
    [2014, "Loi du 13 novembre 2014 : extraction de données réprimée"], [2016, "Loi pour une République numérique : revenge porn"],
    [2021, "Loi du 21 avril 2021 : protection des mineurs en ligne"], [2022, "Loi du 2 mars 2022 : harcèlement scolaire, données de connexion"],
    [2023, "LOPMI : peines des STAD relevées, plateformes illicites"], [2024, "Loi SREN : deepfakes, sextorsion aggravée"],
    [2025, "Loi narcotrafic : 323-3-2 durci ; ordonnance de recodification du CPP"], [2026, "Règlement e-evidence applicable"]
  ];
  var frise = null;
  function ouvrirFrise() {
    var lot = JEUX.melanger(LOIS).slice(0, 6).sort(function (a, b) { return a[0] - b[0]; });
    frise = { bonne: lot, place: [], restant: JEUX.melanger(lot) };
    var z = $("#friseBloc"); z.hidden = false;
    rendreFrise();
    z.scrollIntoView({ block: "start", behavior: "smooth" });
  }
  function rendreFrise(corrige) {
    var z = $("#friseBloc");
    z.innerHTML = "<h3>La frise des lois</h3><p class=\"petit\">Clique les textes du plus ancien au plus récent.</p>" +
      '<ol class="ordre-reponse">' + frise.place.map(function (l, i) {
        var cls = corrige ? (l === frise.bonne[i] ? " juste" : " faux") : "";
        return '<li><button class="ordre-item' + cls + '" data-p="' + i + '"' + (corrige ? " disabled" : "") + ">" + esc(l[1]) + (corrige ? " — " + l[0] : "") + "</button></li>";
      }).join("") + "</ol>" +
      '<div class="ordre-pool">' + frise.restant.map(function (l, i) { return '<button class="ordre-item libre" data-r="' + i + '">' + esc(l[1]) + "</button>"; }).join("") + "</div>" +
      '<div class="row" style="margin-top:14px">' + (corrige ? '<button class="btn" id="friseAgain">Une autre frise</button>' :
        '<button class="btn" id="friseVerif"' + (frise.restant.length ? " disabled" : "") + ">Vérifier</button><button class=\"btn ghost\" id=\"friseRaz\">Recommencer</button>") + "</div>" +
      (corrige ? '<p class="jeu-retour ' + (corrige === 100 ? "ok" : "ko") + '">' + corrige + " % des textes à la bonne place.</p>" : "");
    $$("[data-r]", z).forEach(function (b) { b.addEventListener("click", function () { frise.place.push(frise.restant.splice(+b.dataset.r, 1)[0]); rendreFrise(); }); });
    $$("[data-p]", z).forEach(function (b) { b.addEventListener("click", function () { frise.restant.push(frise.place.splice(+b.dataset.p, 1)[0]); rendreFrise(); }); });
    var v = $("#friseVerif"); if (v) v.addEventListener("click", function () {
      var ok = frise.place.filter(function (l, i) { return l === frise.bonne[i]; }).length;
      var pc = Math.round(100 * ok / frise.bonne.length); noterScore("frise", pc); rendreFrise(pc); rendreRapides();
    });
    var r = $("#friseRaz"); if (r) r.addEventListener("click", function () { frise.restant = JEUX.melanger(frise.bonne); frise.place = []; rendreFrise(); });
    var a = $("#friseAgain"); if (a) a.addEventListener("click", ouvrirFrise);
  }

  /* ---------- Défi du jour ---------- */
  function cleJour(d) { d = d || new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function cleHier() { var d = new Date(); d.setDate(d.getDate() - 1); return cleJour(d); }
  function grainDuJour() { var s = cleJour(), h = 0; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h); }
  function matiereDefi() { var b = tousLesBouts(); var d = grainDuJour() % b.length; return assembler(b.slice(d).concat(b.slice(0, d))); }
  function lireDefiLocal() { try { return JSON.parse(localStorage.getItem(KEY_DEFI) || "null"); } catch (e) { return null; } }
  function lireDefi() {
    if (cap.db) return cap.db.doc("defi/etat").get().then(function (s) { return s.exists ? s.data() : null; }).catch(function () { return lireDefiLocal(); });
    return Promise.resolve(lireDefiLocal());
  }
  function ecrireDefi(e) {
    try { localStorage.setItem(KEY_DEFI, JSON.stringify(e)); } catch (x) {}
    if (cap.db) return cap.db.doc("defi/etat").set(e).catch(function () {});
    return Promise.resolve();
  }
  function rendreDefi() {
    var z = $("#defiCarte"); if (!z) return;
    if (!cap.sample) { z.hidden = true; return; }
    z.hidden = false;
    var e = defi.etat || {}, fait = e.dernier === cleJour(), serie = e.serie || 0;
    z.innerHTML = '<div class="defi-tete"><span class="eyebrow">Défi du jour</span>' +
      (serie > 0 ? '<span class="defi-serie">' + serie + " jour" + (serie > 1 ? "s" : "") + " d'affilée</span>" : "") + "</div>" +
      (fait ? "<h3>Défi relevé</h3><p>Tu as fait <strong>" + e.score + " / " + e.total + "</strong> aujourd'hui. Reviens demain pour le prochain.</p>" +
          '<div class="row"><button class="btn ghost" id="defiRefaire">Le refaire pour m\'entraîner</button></div>'
        : "<h3>Trois questions, tirées de tout le site</h3><p>Un défi différent chaque jour. Relève-le pour garder ta série.</p>" +
          '<div class="row"><button class="btn" id="defiLancer">Relever le défi</button></div>') +
      '<p class="jeu-msg" id="defiMsg" hidden></p>';
    var b = $("#defiLancer") || $("#defiRefaire");
    if (b) b.addEventListener("click", function () { lancerDefi(b); });
  }
  function lancerDefi(bouton) {
    var msg = $("#defiMsg"), avant = bouton.textContent;
    bouton.disabled = true; bouton.textContent = "Préparation…";
    msg.textContent = "Claude prépare le défi du jour."; msg.hidden = false;
    var consigne = "Voici le contenu d'un site de révision en droit pénal de la cybercriminalité (cours, fiches infractions issues de Légifrance, " +
      "actes d'enquête, jurisprudence, droit européen, cas pratiques), pour une personne qui prépare un stage.\n\n" +
      "Nous sommes le " + cleJour() + ". Crée le défi du jour : exactement 3 questions à choix multiples, variées, qui portent sur des points importants et différents.\n\n" +
      "Règles :\n- Les questions portent UNIQUEMENT sur ce contenu. N'invente rien, aucun article ni aucune peine.\n" +
      "- Exactement 4 propositions par question, une seule correcte, les autres plausibles mais fausses.\n" +
      "- L'explication rappelle en une phrase ce que dit le contenu, avec l'article.\n- Écris en français, tutoie la personne.\n\n" +
      "Réponds UNIQUEMENT avec un tableau JSON de cet exact format :\n" + '[{"q":"La question ?","c":["A","B","C","D"],"r":0,"e":"L\'explication."}]\n\n' +
      "CONTENU :\n\n" + matiereDefi();
    cap.sample.json(consigne, { modelTier: "default", cache: { gcTime: 86400000 } }).then(function (data) {
      bouton.disabled = false; bouton.textContent = avant;
      var qs = (Array.isArray(data) ? data : []).filter(function (o) { return o && typeof o.q === "string" && Array.isArray(o.c) && o.c.length >= 2; })
        .slice(0, 3).map(function (o) {
          var choix = o.c.filter(function (c) { return typeof c === "string" && c.trim(); });
          var r = typeof o.r === "number" ? o.r : parseInt(o.r, 10);
          if (!(r >= 0 && r < choix.length)) return null;
          var bonne = choix[r], mel = JEUX.melanger(choix);
          return { q: o.q.trim(), c: mel, r: mel.indexOf(bonne), e: typeof o.e === "string" ? o.e : "" };
        }).filter(Boolean);
      if (!qs.length) { msg.textContent = "Le défi n'a pas pu être créé. Réessaie."; return; }
      msg.hidden = true;
      JEUX.demarrerQcm(qs, { libelle: "Question", ordre: false, surFin: noterDefi });
      var zone = $("#jeuBloc"); if (zone && zone.scrollIntoView) zone.scrollIntoView({ behavior: "smooth", block: "start" });
    }).catch(function (e) {
      bouton.disabled = false; bouton.textContent = avant;
      msg.textContent = (e && e.code === "not_granted") ? "Tu n'as pas autorisé ce site à utiliser Claude. Recharge la page pour qu'il te le redemande."
        : "Le défi n'a pas pu être créé. Réessaie un peu plus tard.";
      msg.hidden = false;
    });
  }
  function noterDefi(res) {
    var e = defi.etat || {}, j = cleJour();
    if (e.dernier !== j) {
      var serie = e.dernier === cleHier() ? (e.serie || 0) + 1 : 1;
      defi.etat = { dernier: j, serie: serie, score: res.score, total: res.total, meilleur: Math.max(e.meilleur || 0, serie) };
      ecrireDefi(defi.etat);
    }
    rendreDefi();
  }

  /* ---------- La page ---------- */
  function html() {
    return '<p class="eyebrow">Réviser</p><h1>Me tester</h1>' +
      '<p class="lead">Des entraînements rapides qui marchent partout, un défi quotidien, et des jeux créés par Claude à partir du contenu du site.</p>' +
      '<section class="defi card" id="defiCarte" hidden></section>' +
      '<h2>Entraînements rapides</h2><div class="grid" id="rapides"></div>' +
      '<section class="card jeu" id="friseBloc" hidden></section>' +
      "<h2>Tous les jeux</h2>" + JEUX.html() + '<p class="perso-etat" id="testerEtat"></p>';
  }
  function after() {
    rendreRapides();
    JEUX.monter({
      sample: cap.sample, options: options, matiere: matiere, textes: textes, toujours: true,
      titre: "Sur quoi veux-tu te tester ?",
      intro: "Les questions sont créées à partir du contenu du site et changent à chaque fois. Le texte à trous et « Réciter » portent sur la lettre exacte des articles.",
      corpus: "le contenu d'un site de révision en droit pénal de la cybercriminalité (cours, fiches infractions, procédure, jurisprudence)",
      corpusCourt: "le contenu d'un site de révision en droit pénal de la cybercriminalité",
      ceContenu: "ce qui est écrit dans ce contenu",
      tropCourt: "Cette sélection est trop courte. Choisis un ensemble plus large.",
      pasDeSuite: "Cette partie ne comporte pas de suite d'étapes repérable. Essaie « Les cours » ou « Le guide des victimes », ou la frise des lois.",
      pasDeTexte: "Aucun article dans cette sélection."
    });
    var e = $("#testerEtat");
    if (e) {
      e.textContent = cap.sample ? "" : "Sans Claude, les entraînements rapides, la frise, le texte à trous et « Réciter » fonctionnent. Les autres jeux et le défi du jour ont besoin de Claude : ouvre la version Claude du site (sur claude.ai).";
      e.className = "perso-etat" + (cap.sample ? "" : " attention");
    }
    rendreDefi();
    if (!defi.chargee && cap.db !== null) { defi.chargee = true; lireDefi().then(function (s) { defi.etat = s; rendreDefi(); }); }
  }
  function init() {
    if (!window.claude || typeof window.claude.use !== "function") { defi.etat = lireDefiLocal(); return; }
    Promise.all([
      window.claude.use("sample").catch(function () { return null; }),
      window.claude.use("db").catch(function () { return null; })
    ]).then(function (r) {
      cap.sample = r[0]; cap.db = r[1];
      return lireDefi();
    }).then(function (s) { defi.etat = s; defi.chargee = true; rerendre(); }, rerendre);
  }
  function rerendre() {
    /* la page est redessinée entièrement, pour ne pas brancher deux fois les mêmes boutons */
    if (actif() && window.CP_RERENDER) window.CP_RERENDER();
  }

  window.TESTER = { html: html, after: after };
  init();
})();
