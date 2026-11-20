/* Moteur de révision partagé : QCM, Vrai ou faux, Texte à trous, Associations,
   « Claude m'interroge » et « Remettre dans l'ordre ».
   Utilisé par « Me tester » (contenu du site) et « Mon contenu personnalisé » (tes notes).
   La source branchée décide de ce qui est proposé et du texte envoyé à Claude.
   Le texte à trous se passe de Claude : les mots sont masqués ici, le texte n'est jamais réécrit. */
window.JEUX = (function () {
  "use strict";

  var S = null;
  var ctrl = null;
  var qcm = { questions: [], i: 0, score: 0, reponses: [], libelle: "Question", surFin: null };
  var chat = { tours: [], enCours: false };
  var ordre = { suites: [], i: 0, score: 0, place: [], restant: [] };
  var trous = { items: [], i: 0, score: 0, total: 0, jetons: [], banque: [], places: [] };
  var relier = { paires: [], gauche: [], droite: [], choisi: null, trouvees: 0, erreurs: 0 };
  var tri = { cats: [], elements: [], choisi: null };
  var recit = { items: [], i: 0, score: 0, total: 0 };
  var qui = { items: [], i: 0, score: 0, indice: 0 };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function melanger(t) {
    t = t.slice();
    for (var i = t.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), x = t[i]; t[i] = t[j]; t[j] = x;
    }
    return t;
  }

  var MODES = [
    { v: "qcm", l: "QCM à choix multiples", ia: true, a: "Des questions à quatre propositions. Tu vois tout de suite si c'est juste." },
    { v: "vraifaux", l: "Vrai ou faux", ia: true, a: "Des affirmations à juger d'un coup : vrai, ou faux ? Rapide et efficace." },
    { v: "trous", l: "Texte à trous", ia: false, a: "Des mots masqués à remettre à leur place. Idéal pour apprendre un article par cœur. Fonctionne sans Claude." },
    { v: "quisuisje", l: "Qui suis-je ?", ia: true, a: "Trois indices de plus en plus précis pour deviner. Plus tu trouves tôt, plus tu marques." },
    { v: "reciter", l: "Réciter de mémoire", ia: false, a: "Tu écris le texte de mémoire, puis tu vois mot à mot ce qui manque. Fonctionne sans Claude." },
    { v: "trier", l: "Trier en catégories", ia: true, a: "Range chaque élément dans la bonne case." },
    { v: "associer", l: "Associations à relier", ia: true, a: "Relie chaque terme à sa définition." },
    { v: "chat", l: "Claude m'interroge", ia: true, a: "Claude te pose des questions ouvertes et réagit à tes réponses, comme lors d'une rencontre." },
    { v: "ordre", l: "Remettre dans l'ordre", ia: true, a: "Des étapes mélangées à remettre dans le bon ordre." }
  ];

  /* ---------- Gabarit ---------- */
  function html() {
    return '<section class="jeu card" id="jeuBloc" hidden>' +
      '<div class="jeu-reglages" id="jeuReglages">' +
      '<h3 id="jeuTitre">Me tester</h3>' +
      '<p class="petit" id="jeuIntro"></p>' +
      '<div class="jeu-champs">' +
      '<div class="jeu-champ"><label class="perso-label" for="jeuMode">Comment ?</label>' +
      '<select id="jeuMode"></select></div>' +
      '<div class="jeu-champ"><label class="perso-label" for="jeuSource">Sur quoi ?</label>' +
      '<select id="jeuSource"></select></div>' +
      '<div class="jeu-champ" id="jeuChampNb"><label class="perso-label" for="jeuNb">Combien de questions ?</label>' +
      '<select id="jeuNb"><option value="5">5 questions</option><option value="8" selected>8 questions</option><option value="12">12 questions</option></select></div>' +
      "</div>" +
      '<p class="petit jeu-apercu" id="jeuApercu"></p>' +
      '<div class="row" style="margin-top:16px"><button class="btn mint" id="jeuLancer">C\'est parti</button>' +
      '<button class="btn ghost" id="jeuFermer">Fermer</button></div>' +
      '<p class="jeu-msg" id="jeuMsg" hidden></p>' +
      "</div>" +

      /* QCM et Vrai ou faux */
      '<div class="jeu-partie" id="jeuPartie" hidden>' +
      '<div class="jeu-tete"><span class="jeu-compteur" id="jeuPos"></span>' +
      '<span class="jeu-score" id="jeuScore"></span>' +
      '<button class="btn ghost small" id="jeuQuitter">Quitter</button></div>' +
      '<div class="jeu-jauge"><span id="jeuJauge"></span></div>' +
      '<p class="jeu-question" id="jeuQ"></p>' +
      '<div class="jeu-choix" id="jeuChoix"></div>' +
      '<div class="jeu-retour" id="jeuRetour" hidden></div>' +
      '<div class="row" style="margin-top:16px"><button class="btn" id="jeuSuivant" hidden>Question suivante</button></div>' +
      "</div>" +

      /* Texte à trous */
      '<div class="trous" id="jeuTrous" hidden>' +
      '<div class="jeu-tete"><span class="jeu-compteur" id="jeuTrousPos"></span>' +
      '<span class="jeu-score" id="jeuTrousScore"></span>' +
      '<button class="btn ghost small" id="jeuTrousFin">Quitter</button></div>' +
      '<p class="jeu-question" id="jeuTrousTitre"></p>' +
      '<p class="petit">Appuie sur un mot pour le placer dans le premier trou libre. Appuie sur un mot placé pour le retirer.</p>' +
      '<p class="trous-texte" id="jeuTrousTexte"></p>' +
      '<div class="trous-banque" id="jeuTrousBanque"></div>' +
      '<div class="jeu-retour" id="jeuTrousRetour" hidden></div>' +
      '<div class="row" style="margin-top:16px"><button class="btn" id="jeuTrousVerifier">Vérifier</button>' +
      '<button class="btn ghost" id="jeuTrousRaz">Tout retirer</button>' +
      '<button class="btn" id="jeuTrousSuivant" hidden>Suivant</button></div>' +
      "</div>" +

      /* Associations */
      '<div class="relier" id="jeuRelier" hidden>' +
      '<div class="jeu-tete"><span class="jeu-compteur" id="jeuRelierPos"></span>' +
      '<span class="jeu-score" id="jeuRelierScore"></span>' +
      '<button class="btn ghost small" id="jeuRelierFin">Quitter</button></div>' +
      '<p class="petit">Appuie sur un terme, puis sur ce qui lui correspond.</p>' +
      '<div class="relier-grille"><div id="jeuRelierG"></div><div id="jeuRelierD"></div></div>' +
      '<div class="jeu-retour" id="jeuRelierRetour" hidden></div>' +
      '<div class="row" style="margin-top:16px"><button class="btn" id="jeuRelierSuivant" hidden>Voir mon résultat</button></div>' +
      "</div>" +

      /* Trier en catégories */
      '<div class="tri" id="jeuTri" hidden>' +
      '<div class="jeu-tete"><span class="jeu-compteur" id="jeuTriPos"></span>' +
      '<span class="jeu-score" id="jeuTriScore"></span>' +
      '<button class="btn ghost small" id="jeuTriFin">Quitter</button></div>' +
      '<p class="petit">Appuie sur un élément, puis sur la case où il va. Appuie sur un élément placé pour le reprendre.</p>' +
      '<div class="tri-pool" id="jeuTriPool"></div>' +
      '<div class="tri-cases" id="jeuTriCases"></div>' +
      '<div class="jeu-retour" id="jeuTriRetour" hidden></div>' +
      '<div class="row" style="margin-top:16px"><button class="btn" id="jeuTriVerifier">Vérifier</button>' +
      '<button class="btn ghost" id="jeuTriRaz">Tout retirer</button>' +
      '<button class="btn" id="jeuTriSuivant" hidden>Voir mon résultat</button></div>' +
      "</div>" +

      /* Réciter de mémoire */
      '<div class="recit" id="jeuRecit" hidden>' +
      '<div class="jeu-tete"><span class="jeu-compteur" id="jeuRecitPos"></span>' +
      '<span class="jeu-score" id="jeuRecitScore"></span>' +
      '<button class="btn ghost small" id="jeuRecitFin">Quitter</button></div>' +
      '<p class="jeu-question" id="jeuRecitTitre"></p>' +
      '<p class="petit">Écris le texte de mémoire, aussi fidèlement que tu peux. Les accents et la ponctuation ne comptent pas.</p>' +
      '<textarea id="jeuRecitTexte" rows="8" placeholder="Commence à écrire…"></textarea>' +
      '<div class="recit-resultat" id="jeuRecitResultat" hidden></div>' +
      '<div class="jeu-retour" id="jeuRecitRetour" hidden></div>' +
      '<div class="row" style="margin-top:16px"><button class="btn" id="jeuRecitVerifier">Vérifier</button>' +
      '<button class="btn ghost" id="jeuRecitAide">Je ne sais plus</button>' +
      '<button class="btn" id="jeuRecitSuivant" hidden>Suivant</button></div>' +
      "</div>" +

      /* Qui suis-je ? */
      '<div class="qui" id="jeuQui" hidden>' +
      '<div class="jeu-tete"><span class="jeu-compteur" id="jeuQuiPos"></span>' +
      '<span class="jeu-score" id="jeuQuiScore"></span>' +
      '<button class="btn ghost small" id="jeuQuiFin">Quitter</button></div>' +
      '<p class="petit">Trouve de quoi il s\'agit. 3 points au premier indice, 2 au deuxième, 1 au troisième.</p>' +
      '<ol class="qui-indices" id="jeuQuiIndices"></ol>' +
      '<input type="text" id="jeuQuiReponse" placeholder="Ta réponse…" autocomplete="off">' +
      '<div class="jeu-retour" id="jeuQuiRetour" hidden></div>' +
      '<div class="row" style="margin-top:16px"><button class="btn" id="jeuQuiValider">Valider</button>' +
      '<button class="btn ghost" id="jeuQuiIndice">Indice suivant</button>' +
      '<button class="btn ghost" id="jeuQuiDonne">Je donne ma langue au chat</button>' +
      '<button class="btn" id="jeuQuiSuivant" hidden>Suivant</button></div>' +
      "</div>" +

      /* Fin de partie */
      '<div class="jeu-fin" id="jeuFin" hidden>' +
      '<p class="jeu-note" id="jeuFinNote"></p>' +
      '<h3 id="jeuFinTitre"></h3><p id="jeuFinTexte"></p>' +
      '<div class="jeu-revue" id="jeuFinRevue"></div>' +
      '<div class="row" style="margin-top:18px"><button class="btn mint" id="jeuRejouer">Recommencer</button>' +
      '<button class="btn ghost" id="jeuFinFermer">Fermer</button></div>' +
      "</div>" +

      /* Claude m'interroge */
      '<div class="chat" id="jeuChat" hidden>' +
      '<div class="jeu-tete"><span class="jeu-compteur">Claude t\'interroge</span>' +
      '<span class="jeu-score" id="jeuChatInfo"></span>' +
      '<button class="btn ghost small" id="jeuChatFin">Terminer</button></div>' +
      '<div class="chat-fil" id="jeuChatFil"></div>' +
      '<div class="chat-saisie">' +
      '<textarea id="jeuChatTexte" rows="3" placeholder="Réponds avec tes mots…"></textarea>' +
      '<div class="row" style="margin-top:10px"><button class="btn" id="jeuChatEnvoyer">Répondre</button>' +
      '<button class="btn ghost" id="jeuChatSauter">Je ne sais pas</button>' +
      '<button class="btn ghost" id="jeuChatStop" hidden>Arrêter</button></div>' +
      "</div></div>" +

      /* Remettre dans l'ordre */
      '<div class="ordre" id="jeuOrdre" hidden>' +
      '<div class="jeu-tete"><span class="jeu-compteur" id="jeuOrdrePos"></span>' +
      '<span class="jeu-score" id="jeuOrdreScore"></span>' +
      '<button class="btn ghost small" id="jeuOrdreFin">Quitter</button></div>' +
      '<p class="jeu-question" id="jeuOrdreTitre"></p>' +
      '<p class="petit">Appuie sur les étapes dans le bon ordre. Appuie sur une étape déjà placée pour la retirer.</p>' +
      '<ol class="ordre-reponse" id="jeuOrdreReponse"></ol>' +
      '<div class="ordre-pool" id="jeuOrdrePool"></div>' +
      '<div class="jeu-retour" id="jeuOrdreRetour" hidden></div>' +
      '<div class="row" style="margin-top:16px"><button class="btn" id="jeuOrdreVerifier">Vérifier</button>' +
      '<button class="btn ghost" id="jeuOrdreRaz">Tout retirer</button>' +
      '<button class="btn" id="jeuOrdreSuivant" hidden>Suivant</button></div>' +
      "</div>" +
      "</section>";
  }

  /* ---------- Branchement ---------- */
  function monter(source) {
    S = source;
    if (!$("#jeuBloc")) return;
    $("#jeuTitre").textContent = S.titre || "Me tester";
    $("#jeuIntro").textContent = S.intro || "";
    $("#jeuFermer").hidden = !!S.toujours;

    $("#jeuMode").innerHTML = MODES.filter(function (m) {
      if (m.ia && !S.sample) return false;
      if ((m.v === "trous" || m.v === "reciter") && !S.textes) return false;
      return true;
    }).map(function (m) { return '<option value="' + m.v + '">' + esc(m.l) + "</option>"; }).join("");

    $("#jeuLancer").addEventListener("click", lancer);
    $("#jeuMode").addEventListener("change", majMode);
    $("#jeuFermer").addEventListener("click", fermer);
    $("#jeuQuitter").addEventListener("click", fermer);
    $("#jeuFinFermer").addEventListener("click", fermer);
    $("#jeuSuivant").addEventListener("click", questionSuivante);
    $("#jeuRejouer").addEventListener("click", ouvrir);
    $("#jeuChatFin").addEventListener("click", fermer);
    $("#jeuChatEnvoyer").addEventListener("click", function () { envoyerChat(); });
    $("#jeuChatSauter").addEventListener("click", function () { envoyerChat("Je ne sais pas."); });
    $("#jeuChatStop").addEventListener("click", function () { if (ctrl) ctrl.abort(); });
    $("#jeuChatTexte").addEventListener("keydown", function (e) {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); envoyerChat(); }
    });
    $("#jeuOrdreFin").addEventListener("click", fermer);
    $("#jeuOrdreVerifier").addEventListener("click", verifierOrdre);
    $("#jeuOrdreRaz").addEventListener("click", razOrdre);
    $("#jeuOrdreSuivant").addEventListener("click", suiteSuivante);
    $("#jeuTrousFin").addEventListener("click", fermer);
    $("#jeuTrousVerifier").addEventListener("click", verifierTrous);
    $("#jeuTrousRaz").addEventListener("click", razTrous);
    $("#jeuTrousSuivant").addEventListener("click", trouSuivant);
    $("#jeuRelierFin").addEventListener("click", fermer);
    $("#jeuTriFin").addEventListener("click", fermer);
    $("#jeuTriVerifier").addEventListener("click", verifierTri);
    $("#jeuTriRaz").addEventListener("click", razTri);
    $("#jeuTriSuivant").addEventListener("click", finTri);
    $("#jeuRecitFin").addEventListener("click", fermer);
    $("#jeuRecitVerifier").addEventListener("click", function () { verifierRecit(false); });
    $("#jeuRecitAide").addEventListener("click", function () { verifierRecit(true); });
    $("#jeuRecitSuivant").addEventListener("click", recitSuivant);
    $("#jeuQuiFin").addEventListener("click", fermer);
    $("#jeuQuiValider").addEventListener("click", validerQui);
    $("#jeuQuiIndice").addEventListener("click", indiceSuivant);
    $("#jeuQuiDonne").addEventListener("click", donnerQui);
    $("#jeuQuiSuivant").addEventListener("click", quiSuivant);
    $("#jeuQuiReponse").addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); validerQui(); }
    });
    $("#jeuRelierSuivant").addEventListener("click", finRelier);
    majMode();
    if (S.toujours) ouvrir();
  }

  function ouvrir() {
    if (!$("#jeuBloc")) return;
    $("#jeuMsg").hidden = true;
    cacherTout();
    $("#jeuReglages").hidden = false;
    $("#jeuBloc").hidden = false;
    majMode();
    if (!S.toujours) $("#jeuBloc").scrollIntoView({ block: "start", behavior: "smooth" });
  }

  function cacherTout() {
    ["jeuReglages", "jeuPartie", "jeuFin", "jeuChat", "jeuOrdre", "jeuTrous", "jeuRelier",
      "jeuTri", "jeuRecit", "jeuQui"].forEach(function (id) {
      if ($("#" + id)) $("#" + id).hidden = true;
    });
  }

  function montrer(id) { cacherTout(); $("#" + id).hidden = false; }

  function fermer() {
    if (ctrl) { ctrl.abort(); ctrl = null; }
    chat.enCours = false;
    if (S && S.toujours) { ouvrir(); return; }
    $("#jeuBloc").hidden = true;
  }

  function majMode() {
    var m = $("#jeuMode") ? $("#jeuMode").value : "qcm";
    if ($("#jeuChampNb")) $("#jeuChampNb").hidden = ["qcm", "vraifaux", "quisuisje"].indexOf(m) < 0;
    var d = MODES.filter(function (x) { return x.v === m; })[0];
    if ($("#jeuApercu")) $("#jeuApercu").textContent = d ? d.a : "";
    if ($("#jeuSource")) $("#jeuSource").innerHTML = S.options(m);
  }

  function lancer() {
    var m = $("#jeuMode").value;
    if (m === "chat") return demarrerChat();
    if (m === "ordre") return creerOrdre();
    if (m === "trous") return creerTrous();
    if (m === "associer") return creerRelier();
    if (m === "trier") return creerTri();
    if (m === "reciter") return creerRecit();
    if (m === "quisuisje") return creerQui();
    if (m === "vraifaux") return creerVraiFaux();
    return creerQcm();
  }

  function occupe(oui, texte) {
    var b = $("#jeuLancer");
    b.disabled = oui;
    b.textContent = oui ? (texte || "Préparation…") : "C'est parti";
  }

  function erreurSample(e, defaut) {
    var m = {
      cancelled: "Annulé.",
      not_granted: "Tu n'as pas autorisé ce site à utiliser Claude. Recharge la page pour qu'il te le redemande.",
      sampling_disabled: "Claude n'est pas disponible sur ce compte.",
      rate_limited: "Trop de demandes d'un coup, ou ta limite d'usage est atteinte. Réessaie un peu plus tard.",
      invalid_json: "La réponse est revenue mal formée. Réessaie.",
      prompt_too_large: "La sélection est trop longue : choisis une partie plus précise.",
      session_expired: "Ta session a expiré : reconnecte-toi puis réessaie.",
      empty_completion: "Aucune réponse n'est revenue. Réessaie."
    };
    return m[e && e.code] || defaut;
  }

  function dire(texte) { var m = $("#jeuMsg"); m.textContent = texte; m.hidden = false; }

  function matiereOuMessage() {
    var texte = S.matiere($("#jeuSource").value);
    if (texte.replace(/\s/g, "").length < 200) {
      dire(S.tropCourt || "Cette sélection est trop courte. Choisis un ensemble plus large.");
      return null;
    }
    return texte;
  }

  /* ---------- QCM ---------- */
  function creerQcm() {
    var texte = matiereOuMessage(); if (!texte) return;
    var nb = parseInt($("#jeuNb").value, 10) || 8;
    occupe(true, "Création du QCM…");
    dire("Claude prépare les questions. Cela prend de quelques secondes à une minute.");
    ctrl = new AbortController();

    var consigne =
      "Voici " + S.corpus + ".\n\n" +
      "Crée " + nb + " questions à choix multiples pour aider cette personne à retenir ce contenu.\n\n" +
      "Règles :\n" +
      "- Les questions portent UNIQUEMENT sur " + S.ceContenu + ". N'invente rien et n'ajoute aucune connaissance extérieure.\n" +
      "- Couvre des passages variés ; varie la forme des questions.\n" +
      "- Exactement 4 propositions par question, une seule correcte. Les trois autres doivent être plausibles mais fausses.\n" +
      "- L'explication rappelle en une phrase ce que dit le contenu.\n" +
      "- Écris en français, tutoie la personne, reste simple et bienveillant.\n" +
      "- Si le contenu est trop court pour " + nb + " questions, fais-en moins.\n\n" +
      "Réponds UNIQUEMENT avec un tableau JSON de cet exact format :\n" +
      '[{"q":"La question ?","c":["proposition A","proposition B","proposition C","proposition D"],"r":0,"e":"L\'explication."}]\n' +
      '"r" est l\'index (0, 1, 2 ou 3) de la bonne réponse dans "c".\n\n' +
      "CONTENU :\n\n" + texte;

    S.sample.json(consigne, { modelTier: "default", cache: false, signal: ctrl.signal })
      .then(function (data) {
        ctrl = null; occupe(false);
        var qs = (Array.isArray(data) ? data : []).map(validerQuestion).filter(Boolean);
        if (!qs.length) { dire("Le QCM n'a pas pu être créé cette fois. Réessaie."); return; }
        demarrerQcm(qs, { libelle: "Question" });
      })
      .catch(function (e) {
        ctrl = null; occupe(false);
        dire(erreurSample(e, "La création du QCM a échoué. Réessaie."));
      });
  }

  /* ---------- Vrai ou faux ---------- */
  function creerVraiFaux() {
    var texte = matiereOuMessage(); if (!texte) return;
    var nb = parseInt($("#jeuNb").value, 10) || 8;
    occupe(true, "Préparation des affirmations…");
    dire("Claude prépare les affirmations.");
    ctrl = new AbortController();

    var consigne =
      "Voici " + S.corpus + ".\n\n" +
      "Écris " + nb + " affirmations à juger vraies ou fausses, pour aider cette personne à vérifier ce qu'elle a retenu.\n\n" +
      "Règles :\n" +
      "- Les affirmations portent UNIQUEMENT sur " + S.ceContenu + ". N'invente rien.\n" +
      "- Environ la moitié sont vraies, l'autre moitié fausses, mélangées.\n" +
      "- Une affirmation fausse est une déformation plausible du contenu (un mot changé, un nombre faux, une confusion courante), jamais une absurdité.\n" +
      "- Une seule idée par affirmation, une phrase courte.\n" +
      "- L'explication dit en une phrase ce que dit réellement le contenu.\n" +
      "- Écris en français, tutoie la personne.\n\n" +
      "Réponds UNIQUEMENT avec un tableau JSON de cet exact format :\n" +
      '[{"a":"L\'affirmation.","v":true,"e":"L\'explication."}]\n' +
      '"v" vaut true si l\'affirmation est vraie, false si elle est fausse.\n\n' +
      "CONTENU :\n\n" + texte;

    S.sample.json(consigne, { modelTier: "default", cache: false, signal: ctrl.signal })
      .then(function (data) {
        ctrl = null; occupe(false);
        var qs = (Array.isArray(data) ? data : []).map(function (o) {
          if (!o || typeof o.a !== "string" || !o.a.trim() || typeof o.v !== "boolean") return null;
          return { q: o.a.trim(), c: ["Vrai", "Faux"], r: o.v ? 0 : 1, e: typeof o.e === "string" ? o.e.trim() : "", binaire: true };
        }).filter(Boolean);
        if (!qs.length) { dire("Les affirmations n'ont pas pu être créées. Réessaie."); return; }
        demarrerQcm(melanger(qs), { libelle: "Affirmation" });
      })
      .catch(function (e) {
        ctrl = null; occupe(false);
        dire(erreurSample(e, "La création a échoué. Réessaie."));
      });
  }

  function validerQuestion(o) {
    if (!o || typeof o.q !== "string" || !o.q.trim() || !Array.isArray(o.c)) return null;
    var choix = o.c.filter(function (c) { return typeof c === "string" && c.trim(); });
    if (choix.length < 2) return null;
    var r = typeof o.r === "number" ? o.r : parseInt(o.r, 10);
    if (!(r >= 0 && r < choix.length)) return null;
    var bonne = choix[r];
    var mel = melanger(choix);
    return { q: o.q.trim(), c: mel, r: mel.indexOf(bonne), e: typeof o.e === "string" ? o.e.trim() : "" };
  }

  /* Démarre une partie avec des questions déjà prêtes (sert aussi au défi du jour). */
  function demarrerQcm(questions, opts) {
    opts = opts || {};
    qcm = {
      questions: opts.ordre === false ? questions : melanger(questions),
      i: 0, score: 0, reponses: [],
      libelle: opts.libelle || "Question",
      surFin: opts.surFin || null
    };
    $("#jeuMsg").hidden = true;
    montrer("jeuPartie");
    $("#jeuBloc").hidden = false;
    poserQuestion();
  }

  function libScore(n) { return n + " bonne" + (n > 1 ? "s" : "") + " réponse" + (n > 1 ? "s" : ""); }

  function poserQuestion() {
    var q = qcm.questions[qcm.i];
    $("#jeuPos").textContent = qcm.libelle + " " + (qcm.i + 1) + " sur " + qcm.questions.length;
    $("#jeuScore").textContent = libScore(qcm.score);
    $("#jeuJauge").style.width = Math.round(qcm.i / qcm.questions.length * 100) + "%";
    $("#jeuQ").textContent = q.q;
    $("#jeuRetour").hidden = true;
    $("#jeuSuivant").hidden = true;
    $("#jeuSuivant").textContent = qcm.i + 1 < qcm.questions.length
      ? (qcm.libelle === "Affirmation" ? "Affirmation suivante" : "Question suivante")
      : "Voir mon résultat";

    var box = $("#jeuChoix");
    box.className = "jeu-choix" + (q.binaire ? " binaire" : "");
    box.innerHTML = q.c.map(function (c, i) {
      return '<button class="jeu-bouton" data-i="' + i + '">' +
        (q.binaire ? "" : '<span class="jeu-lettre">' + "ABCD".charAt(i) + "</span>") +
        "<span>" + esc(c) + "</span></button>";
    }).join("");
    $$(".jeu-bouton", box).forEach(function (b) {
      b.addEventListener("click", function () { repondre(parseInt(b.dataset.i, 10)); });
    });
  }

  function repondre(choisi) {
    var q = qcm.questions[qcm.i];
    var juste = choisi === q.r;
    if (juste) qcm.score++;
    qcm.reponses.push({ q: q, choisi: choisi, juste: juste });
    try { if (window.CP_REVOIR) window.CP_REVOIR.noter(q, juste); } catch (e) {}

    $$(".jeu-bouton").forEach(function (b) {
      var i = parseInt(b.dataset.i, 10);
      b.disabled = true;
      if (i === q.r) b.classList.add("juste");
      else if (i === choisi) b.classList.add("faux");
    });

    var r = $("#jeuRetour");
    r.className = "jeu-retour " + (juste ? "ok" : "ko");
    r.innerHTML = "<strong>" + (juste ? "C'est juste !" : "Ce n'était pas ça.") + "</strong>" + (q.e ? "<br>" + esc(q.e) : "");
    r.hidden = false;
    $("#jeuScore").textContent = libScore(qcm.score);
    $("#jeuSuivant").hidden = false;
    $("#jeuSuivant").focus();
  }

  function questionSuivante() {
    if (qcm.i + 1 < qcm.questions.length) { qcm.i++; poserQuestion(); return; }
    var total = qcm.questions.length, pc = Math.round(qcm.score / total * 100);
    var titre, texte;
    if (pc === 100) { titre = "Sans faute !"; texte = "Tu maîtrises cette partie. Tu peux passer à une autre."; }
    else if (pc >= 75) { titre = "Très bien"; texte = "L'essentiel est acquis. Relis les points ci-dessous et refais un tour."; }
    else if (pc >= 50) { titre = "C'est en train de rentrer"; texte = "Reprends les points manqués, puis refais un tour."; }
    else { titre = "À revoir tranquillement"; texte = "Relis d'abord cette partie, puis reviens : ça ira mieux."; }

    var ratees = qcm.reponses.filter(function (x) { return !x.juste; });
    terminer(qcm.score + " / " + total, titre, texte, ratees.length
      ? "<h4>À revoir</h4>" + ratees.map(function (x) {
        return '<div class="jeu-revue-item"><p class="jeu-revue-q">' + esc(x.q.q) + "</p>" +
          '<p class="jeu-revue-r">Réponse : <strong>' + esc(x.q.c[x.q.r]) + "</strong></p>" +
          (x.q.e ? '<p class="petit">' + esc(x.q.e) + "</p>" : "") + "</div>";
      }).join("")
      : "");
    if (qcm.surFin) qcm.surFin({ score: qcm.score, total: total });
  }

  function terminer(note, titre, texte, revue) {
    montrer("jeuFin");
    $("#jeuFinNote").textContent = note;
    $("#jeuFinTitre").textContent = titre;
    $("#jeuFinTexte").textContent = texte;
    $("#jeuFinRevue").innerHTML = revue || "";
  }

  /* ---------- Texte à trous (sans Claude) ---------- */
  var VIDES = {
    "dans": 1, "pour": 1, "avec": 1, "sans": 1, "sous": 1, "plus": 1, "tout": 1, "tous": 1, "cette": 1,
    "votre": 1, "notre": 1, "leurs": 1, "elle": 1, "nous": 1, "vous": 1, "mais": 1, "donc": 1, "chez": 1,
    "ainsi": 1, "aussi": 1, "quand": 1, "comme": 1, "entre": 1, "selon": 1, "celui": 1, "celle": 1
  };

  function motNu(t) { return t.replace(/^[^A-Za-zÀ-ÖØ-öø-ÿ]+|[^A-Za-zÀ-ÖØ-öø-ÿ]+$/g, ""); }

  function fabriquerTrous(texte) {
    var jetons = texte.split(/(\s+)/).map(function (t) { return { t: t, trou: false }; });
    var cands = [];
    jetons.forEach(function (j, k) {
      if (/^\s+$/.test(j.t)) return;
      var m = motNu(j.t);
      if (m.length >= 4 && !VIDES[m.toLowerCase()]) cands.push(k);
    });
    if (!cands.length) return null;
    var combien = Math.max(3, Math.min(12, Math.round(cands.length / 4)));
    var pas = cands.length / combien, pris = [], dernier = -9;
    for (var i = 0; i < combien; i++) {
      var k = cands[Math.min(cands.length - 1, Math.round(i * pas + pas / 2))];
      if (k - dernier < 4) continue;      // jamais deux trous collés
      pris.push(k); dernier = k;
    }
    if (pris.length < 2) return null;
    pris.forEach(function (k) { jetons[k].trou = true; jetons[k].mot = motNu(jetons[k].t); });
    return jetons;
  }

  function creerTrous() {
    var liste = S.textes ? S.textes($("#jeuSource").value) : [];
    liste = (liste || []).filter(function (x) { return x && x.texte && x.texte.replace(/\s/g, "").length > 60; });
    if (!liste.length) { dire(S.pasDeTexte || "Aucun texte à trous n'est disponible pour cette sélection."); return; }
    trous = { items: liste, i: 0, score: 0, total: 0 };
    $("#jeuMsg").hidden = true;
    montrer("jeuTrous");
    poserTrou();
  }

  function poserTrou() {
    var it = trous.items[trous.i];
    var jetons = fabriquerTrous(it.texte);
    if (!jetons) {
      if (trous.i + 1 < trous.items.length) { trous.i++; return poserTrou(); }
      dire("Ce texte est trop court pour un texte à trous.");
      montrer("jeuReglages");
      return;
    }
    trous.jetons = jetons;
    trous.places = jetons.map(function (j) { return j.trou ? null : undefined; });
    trous.banque = melanger(jetons.filter(function (j) { return j.trou; }).map(function (j) { return j.mot; }));
    $("#jeuTrousPos").textContent = trous.items.length > 1
      ? "Texte " + (trous.i + 1) + " sur " + trous.items.length : "Texte à trous";
    $("#jeuTrousScore").textContent = trous.score ? trous.score + " mot" + (trous.score > 1 ? "s" : "") + " juste" + (trous.score > 1 ? "s" : "") : "";
    $("#jeuTrousTitre").textContent = it.titre || "";
    $("#jeuTrousRetour").hidden = true;
    $("#jeuTrousSuivant").hidden = true;
    $("#jeuTrousVerifier").hidden = false;
    $("#jeuTrousRaz").hidden = false;
    rendreTrous();
  }

  function rendreTrous() {
    var zone = $("#jeuTrousTexte");
    zone.innerHTML = trous.jetons.map(function (j, k) {
      if (/^\s+$/.test(j.t)) return j.t.indexOf("\n") >= 0 ? "<br>" : " ";
      if (!j.trou) return esc(j.t);
      var place = trous.places[k];
      var large = Math.max(4, j.mot.length);
      return '<button class="trou' + (place ? " rempli" : "") + '" data-k="' + k + '" style="min-width:' + (large * 0.62 + 1.2) + 'em">' +
        (place ? esc(place) : "&nbsp;") + "</button>";
    }).join("");
    var banque = $("#jeuTrousBanque");
    banque.innerHTML = trous.banque.map(function (m, k) {
      return '<button class="trou-mot" data-m="' + k + '">' + esc(m) + "</button>";
    }).join("");

    $$("[data-m]", banque).forEach(function (b) {
      b.addEventListener("click", function () {
        var libre = -1;
        for (var k = 0; k < trous.jetons.length; k++) {
          if (trous.jetons[k].trou && !trous.places[k]) { libre = k; break; }
        }
        if (libre < 0) return;
        trous.places[libre] = trous.banque.splice(parseInt(b.dataset.m, 10), 1)[0];
        rendreTrous();
      });
    });
    $$("[data-k]", zone).forEach(function (b) {
      b.addEventListener("click", function () {
        var k = parseInt(b.dataset.k, 10);
        if (!trous.places[k]) return;
        trous.banque.push(trous.places[k]);
        trous.places[k] = null;
        rendreTrous();
      });
    });
    $("#jeuTrousVerifier").disabled = trous.banque.length > 0;
  }

  function verifierTrous() {
    var bons = 0, total = 0;
    trous.jetons.forEach(function (j, k) {
      if (!j.trou) return;
      total++;
      var b = $('[data-k="' + k + '"]');
      var ok = (trous.places[k] || "").toLowerCase() === j.mot.toLowerCase();
      if (ok) bons++;
      if (b) { b.disabled = true; b.classList.add(ok ? "juste" : "faux"); if (!ok) b.textContent = j.mot; }
    });
    trous.score += bons; trous.total += total;
    var r = $("#jeuTrousRetour");
    r.className = "jeu-retour " + (bons === total ? "ok" : "ko");
    r.innerHTML = bons === total
      ? "<strong>Tout est à sa place !</strong>"
      : "<strong>" + bons + " mot" + (bons > 1 ? "s" : "") + " sur " + total + " à la bonne place.</strong><br>Les mots en rouge ont été remis pour toi.";
    r.hidden = false;
    $("#jeuTrousScore").textContent = trous.score + " / " + trous.total;
    $("#jeuTrousVerifier").hidden = true;
    $("#jeuTrousRaz").hidden = true;
    $("#jeuTrousSuivant").hidden = false;
    $("#jeuTrousSuivant").textContent = trous.i + 1 < trous.items.length ? "Texte suivant" : "Voir mon résultat";
  }

  function trouSuivant() {
    if (trous.i + 1 < trous.items.length) { trous.i++; poserTrou(); return; }
    var pc = trous.total ? Math.round(trous.score / trous.total * 100) : 0;
    terminer(trous.score + " / " + trous.total,
      pc === 100 ? "Tu le sais par cœur !" : (pc >= 70 ? "Presque" : "À reprendre"),
      pc === 100 ? "Pas un mot à côté." : "Relis le texte en entier, puis refais un tour : c'est comme ça que ça rentre.", "");
  }

  function razTrous() {
    trous.jetons.forEach(function (j, k) {
      if (j.trou && trous.places[k]) { trous.banque.push(trous.places[k]); trous.places[k] = null; }
    });
    rendreTrous();
  }

  /* ---------- Associations à relier ---------- */
  function creerRelier() {
    var texte = matiereOuMessage(); if (!texte) return;
    occupe(true, "Préparation des paires…");
    dire("Claude prépare les associations.");
    ctrl = new AbortController();

    var consigne =
      "Voici " + S.corpus + ".\n\n" +
      "Crée 6 paires à relier, pour aider cette personne à réviser.\n\n" +
      "Règles :\n" +
      "- À gauche : un terme, un mot, une date ou un nom tiré du contenu (3 mots maximum).\n" +
      "- À droite : ce qui lui correspond — sa définition, sa signification ou sa date (10 mots maximum).\n" +
      "- Les paires portent UNIQUEMENT sur " + S.ceContenu + ". N'invente rien.\n" +
      "- Les six éléments de droite doivent être clairement distincts les uns des autres.\n" +
      "- Écris en français.\n\n" +
      "Réponds UNIQUEMENT avec un tableau JSON de ce format :\n" +
      '[{"g":"le terme","d":"ce qui lui correspond"}]\n\n' +
      "CONTENU :\n\n" + texte;

    S.sample.json(consigne, { modelTier: "default", cache: false, signal: ctrl.signal })
      .then(function (data) {
        ctrl = null; occupe(false);
        var paires = (Array.isArray(data) ? data : []).map(function (o) {
          if (!o || typeof o.g !== "string" || typeof o.d !== "string") return null;
          if (!o.g.trim() || !o.d.trim()) return null;
          return { g: o.g.trim(), d: o.d.trim() };
        }).filter(Boolean).slice(0, 8);
        if (paires.length < 3) { dire("Les associations n'ont pas pu être créées. Réessaie."); return; }
        relier = {
          paires: paires,
          gauche: melanger(paires.map(function (p, i) { return { t: p.g, i: i, pris: false }; })),
          droite: melanger(paires.map(function (p, i) { return { t: p.d, i: i, pris: false }; })),
          choisi: null, trouvees: 0, erreurs: 0
        };
        $("#jeuMsg").hidden = true;
        montrer("jeuRelier");
        rendreRelier();
      })
      .catch(function (e) {
        ctrl = null; occupe(false);
        dire(erreurSample(e, "La création a échoué. Réessaie."));
      });
  }

  function rendreRelier() {
    $("#jeuRelierPos").textContent = relier.trouvees + " sur " + relier.paires.length + " reliées";
    $("#jeuRelierScore").textContent = relier.erreurs ? relier.erreurs + " erreur" + (relier.erreurs > 1 ? "s" : "") : "";
    function col(liste, cote) {
      return liste.map(function (e, k) {
        return '<button class="relier-item' + (e.pris ? " juste" : "") +
          (relier.choisi && relier.choisi.cote === cote && relier.choisi.k === k ? " choisi" : "") +
          '" data-cote="' + cote + '" data-k="' + k + '"' + (e.pris ? " disabled" : "") + ">" + esc(e.t) + "</button>";
      }).join("");
    }
    $("#jeuRelierG").innerHTML = col(relier.gauche, "g");
    $("#jeuRelierD").innerHTML = col(relier.droite, "d");
    $$("[data-cote]").forEach(function (b) {
      b.addEventListener("click", function () { cliquerRelier(b.dataset.cote, parseInt(b.dataset.k, 10)); });
    });
  }

  function cliquerRelier(cote, k) {
    var liste = cote === "g" ? relier.gauche : relier.droite;
    if (liste[k].pris) return;
    if (!relier.choisi) { relier.choisi = { cote: cote, k: k }; rendreRelier(); return; }
    if (relier.choisi.cote === cote) { relier.choisi = { cote: cote, k: k }; rendreRelier(); return; }

    var g = cote === "g" ? relier.gauche[k] : relier.gauche[relier.choisi.k];
    var d = cote === "d" ? relier.droite[k] : relier.droite[relier.choisi.k];
    if (g.i === d.i) {
      g.pris = true; d.pris = true; relier.trouvees++;
      relier.choisi = null;
      rendreRelier();
      if (relier.trouvees === relier.paires.length) {
        var r = $("#jeuRelierRetour");
        r.className = "jeu-retour " + (relier.erreurs ? "ko" : "ok");
        r.innerHTML = relier.erreurs
          ? "<strong>Tout est relié.</strong><br>" + relier.erreurs + " erreur" + (relier.erreurs > 1 ? "s" : "") + " en chemin."
          : "<strong>Tout relié, sans une seule erreur !</strong>";
        r.hidden = false;
        $("#jeuRelierSuivant").hidden = false;
      }
      return;
    }
    relier.erreurs++;
    relier.choisi = null;
    rendreRelier();
    var bg = $('[data-cote="g"][data-k="' + (cote === "g" ? k : relier.gauche.indexOf(g)) + '"]');
    var bd = $('[data-cote="d"][data-k="' + (cote === "d" ? k : relier.droite.indexOf(d)) + '"]');
    [bg, bd].forEach(function (b) {
      if (!b) return;
      b.classList.add("faux");
      setTimeout(function () { b.classList.remove("faux"); }, 700);
    });
  }

  function finRelier() {
    var n = relier.paires.length;
    terminer(n + " / " + n,
      relier.erreurs === 0 ? "Sans une erreur !" : (relier.erreurs <= 2 ? "Bien joué" : "À revoir tranquillement"),
      relier.erreurs === 0 ? "Tu as relié chaque terme du premier coup."
        : "Tu as fait " + relier.erreurs + " erreur" + (relier.erreurs > 1 ? "s" : "") + " en chemin. Refais un tour pour les fixer.", "");
  }

  /* ---------- Claude m'interroge ---------- */
  function bulle(qui, texte) {
    var fil = $("#jeuChatFil");
    var d = document.createElement("div");
    d.className = "chat-msg " + qui;
    d.textContent = texte;
    fil.appendChild(d);
    fil.scrollTop = fil.scrollHeight;
    return d;
  }

  function demarrerChat() {
    var texte = matiereOuMessage(); if (!texte) return;
    var consigne =
      "Tu es un formateur en droit pénal du numérique, bienveillant et exigeant. Tu interroges à l'oral une personne " +
      "qui prépare un stage en lutte contre la cybercriminalité, à partir du contenu reproduit plus bas (" + S.corpusCourt + ").\n\n" +
      "Comment tu procèdes :\n" +
      "- Tu poses UNE seule question ouverte à la fois, courte, sur ce contenu.\n" +
      "- Quand elle répond, tu dis d'abord ce qui est juste, puis ce qui manque ou ce qui est inexact, en une ou deux phrases.\n" +
      "- Puis tu enchaînes avec une question sur un autre point.\n" +
      "- Si elle dit qu'elle ne sait pas, tu donnes la réponse simplement, sans la juger, et tu continues.\n" +
      "- Tu t'appuies UNIQUEMENT sur ce contenu : tu n'ajoutes aucune connaissance extérieure.\n" +
      "- Tu la tutoies. Tu parles comme à l'oral : pas de titres, pas de listes à puces.\n" +
      "- Tu restes court : six lignes maximum par message.\n\n" +
      "CONTENU :\n\n" + texte + "\n\n" +
      "Commence maintenant par ta première question, sans préambule et sans me saluer.";

    chat = { tours: [{ role: "user", content: consigne }], enCours: false };
    $("#jeuChatFil").innerHTML = "";
    $("#jeuChatTexte").value = "";
    $("#jeuChatInfo").textContent = "";
    $("#jeuMsg").hidden = true;
    montrer("jeuChat");
    repondreClaude();
  }

  function repondreClaude() {
    if (chat.enCours) return;
    chat.enCours = true;
    $("#jeuChatStop").hidden = false;
    $("#jeuChatEnvoyer").disabled = true;
    $("#jeuChatSauter").disabled = true;
    var b = bulle("claude", "…");
    ctrl = new AbortController();

    S.sample(chat.tours, {
      modelTier: "default",
      cache: false,
      signal: ctrl.signal,
      onText: function (u) { b.textContent = u.text; $("#jeuChatFil").scrollTop = $("#jeuChatFil").scrollHeight; }
    }).then(function (res) {
      b.textContent = res.text;
      chat.tours.push({ role: "assistant", content: res.text });
      if (chat.tours.length > 15) chat.tours = [chat.tours[0]].concat(chat.tours.slice(-12));
      finTourChat();
      $("#jeuChatTexte").focus();
    }).catch(function (e) {
      if (e && e.text) b.textContent = e.text; else b.remove();
      if (!(e && e.code === "cancelled")) bulle("info", erreurSample(e, "La réponse n'est pas arrivée. Réessaie."));
      else bulle("info", "Conversation mise en pause. Tu peux répondre pour reprendre.");
      finTourChat();
    });
  }

  function finTourChat() {
    chat.enCours = false;
    ctrl = null;
    $("#jeuChatStop").hidden = true;
    $("#jeuChatEnvoyer").disabled = false;
    $("#jeuChatSauter").disabled = false;
    var n = chat.tours.filter(function (t) { return t.role === "assistant"; }).length;
    $("#jeuChatInfo").textContent = n + " question" + (n > 1 ? "s" : "");
  }

  function envoyerChat(texte) {
    if (chat.enCours) return;
    var t = (texte !== undefined ? texte : $("#jeuChatTexte").value).trim();
    if (!t) { $("#jeuChatTexte").focus(); return; }
    bulle("moi", t);
    chat.tours.push({ role: "user", content: t });
    $("#jeuChatTexte").value = "";
    repondreClaude();
  }

  /* ---------- Remettre dans l'ordre ---------- */
  function creerOrdre() {
    var texte = matiereOuMessage(); if (!texte) return;
    occupe(true, "Recherche des étapes…");
    dire("Claude cherche les déroulements et les suites d'étapes.");
    ctrl = new AbortController();

    var consigne =
      "Voici " + S.corpus + ".\n\n" +
      "Repère dans ce contenu les SUITES ORDONNÉES qui s'y trouvent : un déroulement, des étapes, une chronologie, " +
      "l'enchaînement d'une procédure, les étapes d'une attaque ou d'une réponse à incident, la succession des lois.\n\n" +
      "Règles :\n" +
      "- N'invente aucune étape : chacune doit figurer dans le contenu.\n" +
      "- Donne entre 1 et 4 suites, chacune avec 3 à 7 étapes, dans le BON ordre.\n" +
      "- Chaque étape est formulée en quelques mots (10 mots maximum).\n" +
      "- Le titre dit de quoi il s'agit, par exemple « Les grandes lois de la cybercriminalité ».\n" +
      "- Si le contenu ne comporte aucune suite ordonnée claire, réponds exactement [].\n" +
      "- Écris en français.\n\n" +
      "Réponds UNIQUEMENT avec un tableau JSON de ce format :\n" +
      '[{"titre":"Le titre de la suite","etapes":["première étape","deuxième étape","troisième étape"]}]\n\n' +
      "CONTENU :\n\n" + texte;

    S.sample.json(consigne, { modelTier: "default", cache: false, signal: ctrl.signal })
      .then(function (data) {
        ctrl = null; occupe(false);
        var suites = (Array.isArray(data) ? data : []).map(validerSuite).filter(Boolean);
        if (!suites.length) {
          dire(S.pasDeSuite || "Ce contenu ne comporte pas de suite d'étapes repérable. Essaie le QCM.");
          return;
        }
        ordre = { suites: melanger(suites), i: 0, score: 0, place: [], restant: [] };
        $("#jeuMsg").hidden = true;
        montrer("jeuOrdre");
        poserSuite();
      })
      .catch(function (e) {
        ctrl = null; occupe(false);
        dire(erreurSample(e, "La recherche a échoué. Réessaie."));
      });
  }

  function validerSuite(o) {
    if (!o || typeof o.titre !== "string" || !Array.isArray(o.etapes)) return null;
    var e = o.etapes.filter(function (x) { return typeof x === "string" && x.trim(); })
      .map(function (x) { return x.trim(); });
    if (e.length < 3 || e.length > 8) return null;
    return { titre: o.titre.trim() || "Remets dans l'ordre", etapes: e };
  }

  function poserSuite() {
    var su = ordre.suites[ordre.i];
    ordre.place = [];
    ordre.restant = melanger(su.etapes.map(function (t, i) { return { t: t, i: i }; }));
    $("#jeuOrdrePos").textContent = "Suite " + (ordre.i + 1) + " sur " + ordre.suites.length;
    $("#jeuOrdreScore").textContent = ordre.score + " réussie" + (ordre.score > 1 ? "s" : "");
    $("#jeuOrdreTitre").textContent = su.titre;
    $("#jeuOrdreRetour").hidden = true;
    $("#jeuOrdreSuivant").hidden = true;
    $("#jeuOrdreVerifier").hidden = false;
    $("#jeuOrdreRaz").hidden = false;
    rendreOrdre();
  }

  function rendreOrdre() {
    var rep = $("#jeuOrdreReponse"), pool = $("#jeuOrdrePool");
    rep.innerHTML = ordre.place.map(function (e, k) {
      return '<li><button class="ordre-item" data-pos="' + k + '">' + esc(e.t) + "</button></li>";
    }).join("");
    pool.innerHTML = ordre.restant.map(function (e, k) {
      return '<button class="ordre-item libre" data-libre="' + k + '">' + esc(e.t) + "</button>";
    }).join("");
    $$("[data-libre]", pool).forEach(function (b) {
      b.addEventListener("click", function () {
        ordre.place.push(ordre.restant.splice(parseInt(b.dataset.libre, 10), 1)[0]);
        rendreOrdre();
      });
    });
    $$("[data-pos]", rep).forEach(function (b) {
      b.addEventListener("click", function () {
        ordre.restant.push(ordre.place.splice(parseInt(b.dataset.pos, 10), 1)[0]);
        rendreOrdre();
      });
    });
    $("#jeuOrdreVerifier").disabled = ordre.restant.length > 0;
  }

  function verifierOrdre() {
    var su = ordre.suites[ordre.i];
    var juste = ordre.place.every(function (e, k) { return e.i === k; });
    if (juste) ordre.score++;

    var rep = $("#jeuOrdreReponse");
    $$(".ordre-item", rep).forEach(function (b, k) {
      b.disabled = true;
      b.classList.add(ordre.place[k].i === k ? "juste" : "faux");
    });
    $$(".ordre-item", $("#jeuOrdrePool")).forEach(function (b) { b.disabled = true; });

    var r = $("#jeuOrdreRetour");
    r.className = "jeu-retour " + (juste ? "ok" : "ko");
    r.innerHTML = juste
      ? "<strong>C'est le bon ordre !</strong>"
      : "<strong>Ce n'est pas tout à fait le bon ordre.</strong><br>Le bon ordre : " +
        su.etapes.map(function (t, k) { return (k + 1) + ". " + esc(t); }).join(" &nbsp;· ");
    r.hidden = false;
    $("#jeuOrdreScore").textContent = ordre.score + " réussie" + (ordre.score > 1 ? "s" : "");
    $("#jeuOrdreVerifier").hidden = true;
    $("#jeuOrdreRaz").hidden = true;
    $("#jeuOrdreSuivant").hidden = false;
    $("#jeuOrdreSuivant").textContent = ordre.i + 1 < ordre.suites.length ? "Suite suivante" : "Voir mon résultat";
  }

  function suiteSuivante() {
    if (ordre.i + 1 < ordre.suites.length) { ordre.i++; poserSuite(); return; }
    var total = ordre.suites.length;
    terminer(ordre.score + " / " + total,
      ordre.score === total ? "Tout dans l'ordre !" : (ordre.score >= total / 2 ? "Bien joué" : "À revoir tranquillement"),
      ordre.score === total ? "Tu as retrouvé chaque déroulement sans erreur." : "Relis ces déroulements, puis refais un tour.", "");
  }

  function razOrdre() {
    ordre.restant = ordre.restant.concat(ordre.place);
    ordre.place = [];
    rendreOrdre();
  }

  /* ---------- Comparaison de mots (sert à réciter et à deviner) ---------- */
  function normaliser(m) {
    return String(m || "").toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "");
  }

  /* ---------- Trier en catégories ---------- */
  function creerTri() {
    var texte = matiereOuMessage(); if (!texte) return;
    occupe(true, "Préparation du tri…");
    dire("Claude prépare les catégories.");
    ctrl = new AbortController();

    var consigne =
      "Voici " + S.corpus + ".\n\n" +
      "Prépare un exercice de tri : 2 à 4 catégories, et 8 à 12 éléments à ranger dans la bonne catégorie.\n\n" +
      "Règles :\n" +
      "- Les catégories et les éléments viennent UNIQUEMENT de " + S.ceContenu + ". N'invente rien.\n" +
      "- Un élément appartient à une seule catégorie, sans ambiguïté.\n" +
      "- Le nom d'une catégorie tient en 4 mots, un élément en 6 mots.\n" +
      "- Répartis les éléments entre les catégories, sans en laisser une vide.\n" +
      "- Écris en français.\n\n" +
      "Réponds UNIQUEMENT avec un objet JSON de ce format :\n" +
      '{"categories":["Première catégorie","Deuxième catégorie"],"elements":[{"t":"un élément","c":0},{"t":"un autre","c":1}]}\n' +
      '"c" est l\'index de la catégorie dans "categories".\n\n' +
      "CONTENU :\n\n" + texte;

    S.sample.json(consigne, { modelTier: "default", cache: false, signal: ctrl.signal })
      .then(function (data) {
        ctrl = null; occupe(false);
        var cats = data && Array.isArray(data.categories)
          ? data.categories.filter(function (c) { return typeof c === "string" && c.trim(); }).map(function (c) { return c.trim(); })
          : [];
        var els = data && Array.isArray(data.elements) ? data.elements.map(function (o) {
          if (!o || typeof o.t !== "string" || !o.t.trim()) return null;
          var c = typeof o.c === "number" ? o.c : parseInt(o.c, 10);
          if (!(c >= 0 && c < cats.length)) return null;
          return { t: o.t.trim(), c: c, place: null };
        }).filter(Boolean) : [];
        if (cats.length < 2 || els.length < 4) { dire("Le tri n'a pas pu être créé. Réessaie."); return; }
        tri = { cats: cats, elements: melanger(els), choisi: null };
        $("#jeuMsg").hidden = true;
        montrer("jeuTri");
        $("#jeuTriRetour").hidden = true;
        $("#jeuTriSuivant").hidden = true;
        $("#jeuTriVerifier").hidden = false;
        $("#jeuTriRaz").hidden = false;
        rendreTri();
      })
      .catch(function (e) {
        ctrl = null; occupe(false);
        dire(erreurSample(e, "La création a échoué. Réessaie."));
      });
  }

  function rendreTri() {
    var restants = tri.elements.filter(function (e) { return e.place === null; }).length;
    $("#jeuTriPos").textContent = restants ? restants + " élément" + (restants > 1 ? "s" : "") + " à placer" : "Tout est placé";
    $("#jeuTriScore").textContent = "";
    $("#jeuTriPool").innerHTML = tri.elements.map(function (e, k) {
      return e.place === null
        ? '<button class="tri-chip' + (tri.choisi === k ? " choisi" : "") + '" data-e="' + k + '">' + esc(e.t) + "</button>"
        : "";
    }).join("");
    $("#jeuTriCases").innerHTML = tri.cats.map(function (c, ci) {
      return '<div class="tri-case" data-c="' + ci + '"><strong>' + esc(c) + "</strong>" +
        tri.elements.map(function (e, k) {
          return e.place === ci ? '<button class="tri-chip place" data-e="' + k + '">' + esc(e.t) + "</button>" : "";
        }).join("") + "</div>";
    }).join("");

    $$("#jeuTriPool [data-e]").forEach(function (b) {
      b.addEventListener("click", function () {
        var k = parseInt(b.dataset.e, 10);
        tri.choisi = (tri.choisi === k) ? null : k;
        rendreTri();
      });
    });
    $$("#jeuTriCases [data-e]").forEach(function (b) {
      b.addEventListener("click", function () {
        tri.elements[parseInt(b.dataset.e, 10)].place = null;
        rendreTri();
      });
    });
    $$("#jeuTriCases [data-c]").forEach(function (box) {
      box.addEventListener("click", function (ev) {
        if (ev.target.closest("[data-e]")) return;
        if (tri.choisi === null) return;
        tri.elements[tri.choisi].place = parseInt(box.dataset.c, 10);
        tri.choisi = null;
        rendreTri();
      });
    });
    $("#jeuTriVerifier").disabled = restants > 0;
  }

  function verifierTri() {
    var bons = 0;
    tri.elements.forEach(function (e, k) {
      var ok = e.place === e.c;
      if (ok) bons++;
      var b = $('#jeuTriCases [data-e="' + k + '"]');
      if (b) {
        b.disabled = true;
        b.classList.add(ok ? "juste" : "faux");
        if (!ok) b.textContent = e.t + " → " + tri.cats[e.c];
      }
    });
    $$("#jeuTriCases [data-c]").forEach(function (box) { box.classList.add("fige"); });
    var total = tri.elements.length;
    var r = $("#jeuTriRetour");
    r.className = "jeu-retour " + (bons === total ? "ok" : "ko");
    r.innerHTML = bons === total
      ? "<strong>Tout est bien rangé !</strong>"
      : "<strong>" + bons + " sur " + total + " à la bonne place.</strong><br>Les éléments en rouge indiquent leur vraie catégorie.";
    r.hidden = false;
    tri.bons = bons;
    $("#jeuTriVerifier").hidden = true;
    $("#jeuTriRaz").hidden = true;
    $("#jeuTriSuivant").hidden = false;
  }

  function finTri() {
    var total = tri.elements.length, bons = tri.bons || 0;
    var pc = Math.round(bons / total * 100);
    terminer(bons + " / " + total,
      pc === 100 ? "Tout bien rangé !" : (pc >= 70 ? "Bien joué" : "À revoir tranquillement"),
      pc === 100 ? "Tu ne t'es trompée nulle part." : "Reprends les éléments mal rangés, puis refais un tour.", "");
  }

  function razTri() {
    tri.elements.forEach(function (e) { e.place = null; });
    tri.choisi = null;
    rendreTri();
  }

  /* ---------- Réciter de mémoire (sans Claude) ---------- */
  function creerRecit() {
    var liste = S.textes ? S.textes($("#jeuSource").value) : [];
    liste = (liste || []).filter(function (x) { return x && x.texte && x.texte.replace(/\s/g, "").length > 40; });
    if (!liste.length) { dire(S.pasDeTexte || "Aucun texte à réciter dans cette sélection."); return; }
    recit = { items: liste, i: 0, score: 0, total: 0 };
    $("#jeuMsg").hidden = true;
    montrer("jeuRecit");
    poserRecit();
  }

  function poserRecit() {
    var it = recit.items[recit.i];
    $("#jeuRecitPos").textContent = recit.items.length > 1
      ? "Texte " + (recit.i + 1) + " sur " + recit.items.length : "De mémoire";
    $("#jeuRecitScore").textContent = recit.total ? recit.score + " / " + recit.total : "";
    $("#jeuRecitTitre").textContent = it.titre || "";
    $("#jeuRecitTexte").value = "";
    $("#jeuRecitTexte").disabled = false;
    $("#jeuRecitResultat").hidden = true;
    $("#jeuRecitRetour").hidden = true;
    $("#jeuRecitSuivant").hidden = true;
    $("#jeuRecitVerifier").hidden = false;
    $("#jeuRecitAide").hidden = false;
    $("#jeuRecitTexte").focus();
  }

  /* Plus longue sous-suite commune, pour savoir quels mots de référence ont été retrouvés. */
  function alignement(ref, sai) {
    var n = ref.length, m = sai.length;
    var d = [];
    for (var i = 0; i <= n; i++) { d.push(new Array(m + 1).fill(0)); }
    for (i = 1; i <= n; i++) {
      for (var j = 1; j <= m; j++) {
        d[i][j] = ref[i - 1] === sai[j - 1] ? d[i - 1][j - 1] + 1 : Math.max(d[i - 1][j], d[i][j - 1]);
      }
    }
    var trouves = new Array(n).fill(false);
    i = n; j = m;
    while (i > 0 && j > 0) {
      if (ref[i - 1] === sai[j - 1]) { trouves[i - 1] = true; i--; j--; }
      else if (d[i - 1][j] >= d[i][j - 1]) i--;
      else j--;
    }
    return trouves;
  }

  function verifierRecit(abandon) {
    var it = recit.items[recit.i];
    var brut = it.texte.split(/(\s+)/);
    var refMots = [], refIdx = [];
    brut.forEach(function (t, k) {
      if (/^\s+$/.test(t)) return;
      var n = normaliser(t);
      if (n) { refMots.push(n); refIdx.push(k); }
    });
    var saisi = abandon ? [] : $("#jeuRecitTexte").value.split(/\s+/).map(normaliser).filter(Boolean);
    var trouves = abandon ? new Array(refMots.length).fill(false) : alignement(refMots, saisi);
    var bons = trouves.filter(Boolean).length;

    var html = brut.map(function (t, k) {
      if (/^\s+$/.test(t)) return t.indexOf("\n") >= 0 ? "<br>" : " ";
      var pos = refIdx.indexOf(k);
      if (pos < 0) return esc(t);
      return '<span class="' + (trouves[pos] ? "mot-ok" : "mot-manque") + '">' + esc(t) + "</span>";
    }).join("");
    $("#jeuRecitResultat").innerHTML = html;
    $("#jeuRecitResultat").hidden = false;
    $("#jeuRecitTexte").disabled = true;

    recit.score += bons; recit.total += refMots.length;
    var pc = Math.round(bons / refMots.length * 100);
    var r = $("#jeuRecitRetour");
    r.className = "jeu-retour " + (pc === 100 ? "ok" : "ko");
    r.innerHTML = abandon
      ? "<strong>Voici le texte.</strong><br>Relis-le, puis réessaie : c'est comme ça qu'il rentre."
      : "<strong>" + bons + " mot" + (bons > 1 ? "s" : "") + " sur " + refMots.length + " retrouvé" + (bons > 1 ? "s" : "") +
        " (" + pc + " %).</strong><br>Les mots en rouge manquaient. Les accents et la ponctuation n'ont pas compté.";
    r.hidden = false;
    $("#jeuRecitScore").textContent = recit.score + " / " + recit.total;
    $("#jeuRecitVerifier").hidden = true;
    $("#jeuRecitAide").hidden = true;
    $("#jeuRecitSuivant").hidden = false;
    $("#jeuRecitSuivant").textContent = recit.i + 1 < recit.items.length ? "Texte suivant" : "Voir mon résultat";
  }

  function recitSuivant() {
    if (recit.i + 1 < recit.items.length) { recit.i++; poserRecit(); return; }
    var pc = recit.total ? Math.round(recit.score / recit.total * 100) : 0;
    terminer(pc + " %",
      pc === 100 ? "Mot pour mot !" : (pc >= 80 ? "Tu y es presque" : (pc >= 50 ? "C'est en train de rentrer" : "À reprendre doucement")),
      pc === 100 ? "Tu connais ce texte par cœur."
        : "Relis le texte en entier, essaie le texte à trous, puis reviens le réciter.", "");
  }

  /* ---------- Qui suis-je ? ---------- */
  function creerQui() {
    var texte = matiereOuMessage(); if (!texte) return;
    var nb = Math.min(8, parseInt($("#jeuNb").value, 10) || 8);
    occupe(true, "Préparation des énigmes…");
    dire("Claude prépare les énigmes.");
    ctrl = new AbortController();

    var consigne =
      "Voici " + S.corpus + ".\n\n" +
      "Prépare " + nb + " énigmes « Qui suis-je ? » pour réviser ce contenu.\n\n" +
      "Règles :\n" +
      "- La réponse est un mot ou une expression courte (3 mots maximum) tirée de " + S.ceContenu + ".\n" +
      "- Donne exactement 3 indices, du plus vague au plus précis. Le troisième doit permettre de trouver presque à coup sûr.\n" +
      "- Un indice ne contient JAMAIS la réponse elle-même.\n" +
      "- Les indices sont écrits à la première personne (« Je suis… », « On me trouve… »).\n" +
      '- Donne aussi "accepte" : les autres formulations acceptables de la réponse (sans accent obligatoire).\n' +
      "- N'invente rien. Écris en français.\n\n" +
      "Réponds UNIQUEMENT avec un tableau JSON de ce format :\n" +
      '[{"r":"la réponse","accepte":["variante"],"indices":["indice vague","indice moyen","indice précis"],"e":"une phrase d\'explication"}]\n\n' +
      "CONTENU :\n\n" + texte;

    S.sample.json(consigne, { modelTier: "default", cache: false, signal: ctrl.signal })
      .then(function (data) {
        ctrl = null; occupe(false);
        var items = (Array.isArray(data) ? data : []).map(function (o) {
          if (!o || typeof o.r !== "string" || !o.r.trim() || !Array.isArray(o.indices)) return null;
          var ind = o.indices.filter(function (x) { return typeof x === "string" && x.trim(); }).map(function (x) { return x.trim(); });
          if (ind.length < 2) return null;
          var acc = Array.isArray(o.accepte) ? o.accepte.filter(function (x) { return typeof x === "string"; }) : [];
          return { r: o.r.trim(), accepte: acc, indices: ind.slice(0, 3), e: typeof o.e === "string" ? o.e.trim() : "" };
        }).filter(Boolean);
        if (!items.length) { dire("Les énigmes n'ont pas pu être créées. Réessaie."); return; }
        qui = { items: melanger(items), i: 0, score: 0, indice: 0 };
        $("#jeuMsg").hidden = true;
        montrer("jeuQui");
        poserQui();
      })
      .catch(function (e) {
        ctrl = null; occupe(false);
        dire(erreurSample(e, "La création a échoué. Réessaie."));
      });
  }

  function poserQui() {
    qui.indice = 0;
    var it = qui.items[qui.i];
    $("#jeuQuiPos").textContent = "Énigme " + (qui.i + 1) + " sur " + qui.items.length;
    $("#jeuQuiScore").textContent = qui.score + " point" + (qui.score > 1 ? "s" : "");
    $("#jeuQuiReponse").value = "";
    $("#jeuQuiReponse").disabled = false;
    $("#jeuQuiRetour").hidden = true;
    $("#jeuQuiSuivant").hidden = true;
    $("#jeuQuiValider").hidden = false;
    $("#jeuQuiIndice").hidden = false;
    $("#jeuQuiDonne").hidden = false;
    rendreQui();
    $("#jeuQuiReponse").focus();
  }

  function rendreQui() {
    var it = qui.items[qui.i];
    $("#jeuQuiIndices").innerHTML = it.indices.slice(0, qui.indice + 1).map(function (x) {
      return "<li>" + esc(x) + "</li>";
    }).join("");
    $("#jeuQuiIndice").hidden = qui.indice + 1 >= it.indices.length;
    $("#jeuQuiIndice").textContent = "Indice suivant (" + (3 - qui.indice - 1) + " point" + (3 - qui.indice - 1 > 1 ? "s" : "") + ")";
  }

  function indiceSuivant() {
    var it = qui.items[qui.i];
    if (qui.indice + 1 < it.indices.length) { qui.indice++; rendreQui(); $("#jeuQuiReponse").focus(); }
  }

  function bonneReponseQui(saisie, it) {
    var n = normaliser(saisie);
    if (!n) return false;
    var cibles = [it.r].concat(it.accepte || []).map(normaliser).filter(Boolean);
    for (var i = 0; i < cibles.length; i++) {
      var c = cibles[i];
      if (n === c) return true;
      if (c.length >= 5 && (n.indexOf(c) >= 0 || c.indexOf(n) >= 0) && n.length >= 5) return true;
    }
    return false;
  }

  function validerQui() {
    var it = qui.items[qui.i];
    if ($("#jeuQuiReponse").disabled) return;
    if (!bonneReponseQui($("#jeuQuiReponse").value, it)) {
      if (qui.indice + 1 < it.indices.length) {
        qui.indice++; rendreQui();
        var r0 = $("#jeuQuiRetour");
        r0.className = "jeu-retour ko";
        r0.innerHTML = "<strong>Ce n'est pas ça.</strong><br>Voici un indice de plus.";
        r0.hidden = false;
        $("#jeuQuiReponse").select();
        return;
      }
      return finirQui(false);
    }
    qui.score += Math.max(1, 3 - qui.indice);
    finirQui(true);
  }

  function donnerQui() { finirQui(false); }

  function finirQui(gagne) {
    var it = qui.items[qui.i];
    $("#jeuQuiReponse").disabled = true;
    $("#jeuQuiIndices").innerHTML = it.indices.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
    var r = $("#jeuQuiRetour");
    r.className = "jeu-retour " + (gagne ? "ok" : "ko");
    r.innerHTML = "<strong>" + (gagne ? "Trouvé : " : "C'était : ") + esc(it.r) + "</strong>" + (it.e ? "<br>" + esc(it.e) : "");
    r.hidden = false;
    $("#jeuQuiScore").textContent = qui.score + " point" + (qui.score > 1 ? "s" : "");
    $("#jeuQuiValider").hidden = true;
    $("#jeuQuiIndice").hidden = true;
    $("#jeuQuiDonne").hidden = true;
    $("#jeuQuiSuivant").hidden = false;
    $("#jeuQuiSuivant").textContent = qui.i + 1 < qui.items.length ? "Énigme suivante" : "Voir mon résultat";
  }

  function quiSuivant() {
    if (qui.i + 1 < qui.items.length) { qui.i++; poserQui(); return; }
    var max = qui.items.length * 3;
    var pc = Math.round(qui.score / max * 100);
    terminer(qui.score + " / " + max,
      pc >= 90 ? "Impressionnant !" : (pc >= 60 ? "Très bien" : (pc >= 35 ? "Pas mal" : "À revoir tranquillement")),
      pc >= 60 ? "Tu trouves souvent dès les premiers indices."
        : "Relis cette partie, puis refais un tour : tu trouveras plus vite.", "");
  }

  return {
    html: html, monter: monter, ouvrir: ouvrir, fermer: fermer,
    melanger: melanger, demarrerQcm: demarrerQcm
  };
})();
