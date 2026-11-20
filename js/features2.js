/* Cyberpénal — second lot d'outils (20/11/2026) :
   synchronisation entre appareils, simulation d'audition, l'enquête pas à pas,
   ce qui a changé (réformes + rappel de relecture). */
(function () {
  "use strict";
  var V = window.CP_VIEWS = window.CP_VIEWS || {};
  function api() { return window.CP_API; }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function inf(id) { var l = window.INFRACTIONS; for (var i = 0; i < l.length; i++) if (l[i].id === id) return l[i]; return null; }
  function acte(id) { var l = window.ACTES || []; for (var i = 0; i < l.length; i++) if (l[i].id === id) return l[i]; return null; }
  function artLabel(f) { return f.code === "Code pénal" ? "art. " + f.art : f.art; }
  function chipF(id) { var f = inf(id); return f ? '<a class="chip" href="#/infraction/' + f.id + '">' + esc(artLabel(f)) + "</a>" : ""; }
  function chipA(id) { var a = acte(id); return a ? '<a class="chip" href="#/acte/' + a.id + '">' + esc(a.art) + "</a>" : ""; }
  function lire(k, def) { try { var v = JSON.parse(localStorage.getItem(k) || "null"); return v == null ? def : v; } catch (e) { return def; } }
  function ecrire(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  var claudeP = null;
  function claude() {
    if (!claudeP) claudeP = (window.claude && typeof window.claude.use === "function") ? window.claude.use("sample").catch(function () { return null; }) : Promise.resolve(null);
    return claudeP;
  }
  function msgErreur(e) {
    if (e && e.code === "not_granted") return "Tu n'as pas autorisé ce site à utiliser Claude. Recharge la page pour qu'il te le redemande.";
    if (e && e.code === "rate_limited") return "Trop de demandes d'un coup. Attends une minute et réessaie.";
    return "Claude n'a pas pu répondre. Réessaie un peu plus tard.";
  }
  var HORS_LIGNE = "Cet outil a besoin de Claude : il ne marche que dans la version Claude du site, sur claude.ai.";

  /* ======================================================================
     1. SYNCHRONISATION ENTRE APPAREILS
     Fusion, jamais d'écrasement : une leçon finie, un score, une révision
     ou une analyse présente d'un côté est gardée.
     ====================================================================== */
  var CLES = ["cyberpenal.v1", "cyberpenal.revoir", "cyberpenal.atelier", "cyberpenal.scores.v1", "cyberpenal.auditions"];
  var KEY_T = "cyberpenal.sync.t";
  var sync = { db: null, ref: null, distant: null, instantane: {}, etat: "local", timer: null };
  function brut(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function parse(s, def) { try { var v = JSON.parse(s); return v == null ? def : v; } catch (e) { return def; } }
  function maxObj(a, b) { var o = {}; Object.keys(a || {}).concat(Object.keys(b || {})).forEach(function (k) { var x = (a || {})[k], y = (b || {})[k]; o[k] = (typeof x === "number" && typeof y === "number") ? Math.max(x, y) : (x != null ? x : y); }); return o; }
  function unionVrai(a, b) { var o = {}; [a, b].forEach(function (s) { Object.keys(s || {}).forEach(function (k) { if (s[k]) o[k] = s[k]; }); }); return o; }
  function fusion(cle, loc, dist, locPlusRecent) {
    if (loc == null) return dist; if (dist == null) return loc;
    var recent = locPlusRecent ? loc : dist;
    if (cle === "cyberpenal.v1") {
      var o = {}; Object.keys(dist).concat(Object.keys(loc)).forEach(function (k) { o[k] = recent[k] != null ? recent[k] : (loc[k] != null ? loc[k] : dist[k]); });
      o.lecons = unionVrai(loc.lecons, dist.lecons); o.vues = unionVrai(loc.vues, dist.vues);
      o.cas = maxObj(loc.cas, dist.cas); o.quiz = maxObj(loc.quiz, dist.quiz);
      return o;
    }
    if (cle === "cyberpenal.scores.v1") return maxObj(loc, dist);
    if (cle === "cyberpenal.revoir") {
      var r = {}; Object.keys(dist).concat(Object.keys(loc)).forEach(function (k) {
        var a = loc[k], b = dist[k]; if (!a || !b) { r[k] = a || b; return; }
        var na = (a.ratees || 0) + (a.reussies || 0), nb = (b.ratees || 0) + (b.reussies || 0);
        r[k] = na !== nb ? (na > nb ? a : b) : (a.due >= b.due ? a : b);
      });
      return r;
    }
    /* listes datées (atelier, auditions) : union, la plus récente d'abord */
    var vus = {}, l = [];
    (locPlusRecent ? loc.concat(dist) : dist.concat(loc)).forEach(function (x) { var k = JSON.stringify([x.date, x.faits || x.id, x.titre || ""]); if (!vus[k]) { vus[k] = 1; l.push(x); } });
    return l.slice(0, 20);
  }
  function etatSync(t) {
    sync.etat = t;
    var z = $("#syncEtat"); if (!z) return;
    z.textContent = t === "ok" ? "✓ Synchronisé entre tes appareils" : t === "envoi" ? "Synchronisation…" : t === "erreur" ? "Synchronisation impossible pour l'instant" : "";
  }
  function appliquerDistant(d) {
    if (!d || !d.data) return;
    sync.distant = d;
    var temps = lire(KEY_T, {}), aPousser = false, appChange = false;
    CLES.forEach(function (k) {
      var locS = brut(k), distS = d.data[k];
      if (distS == null) { if (locS != null) aPousser = true; return; }
      if (locS === distS) return;
      var m = fusion(k, parse(locS, null), parse(distS, null), (temps[k] || 0) >= ((d.t || {})[k] || 0));
      var mS = JSON.stringify(m);
      if (mS !== locS) { try { localStorage.setItem(k, mS); } catch (e) {} if (k === "cyberpenal.v1") appChange = true; }
      if (mS !== distS) aPousser = true;
      sync.instantane[k] = mS;
    });
    if (appChange && api() && api().recharger) {
      var tape = document.activeElement && /textarea|input/i.test(document.activeElement.tagName);
      api().recharger(!tape);
    }
    if (aPousser) pousser(); else etatSync("ok");
  }
  function pousser() {
    if (!sync.ref) return;
    clearTimeout(sync.envoi);
    sync.envoi = setTimeout(function () {
      var temps = lire(KEY_T, {}), data = {};
      CLES.forEach(function (k) { var s = brut(k); if (s != null) { data[k] = s; sync.instantane[k] = s; } });
      etatSync("envoi");
      sync.ref.set({ data: data, t: temps, modifie: new Date().toISOString() }).then(function () { etatSync("ok"); }, function () { etatSync("erreur"); });
    }, 800);
  }
  function surveiller() {
    /* repère les changements locaux (quiz, carnet, révisions…) sans toucher au code qui les écrit */
    CLES.forEach(function (k) { sync.instantane[k] = brut(k); });
    sync.timer = setInterval(function () {
      var change = false, temps = lire(KEY_T, {});
      CLES.forEach(function (k) { var s = brut(k); if (s !== sync.instantane[k]) { sync.instantane[k] = s; temps[k] = Date.now(); change = true; } });
      if (change) { ecrire(KEY_T, temps); pousser(); }
    }, 3000);
  }
  if (window.claude && typeof window.claude.use === "function") {
    Promise.all([window.claude.use("db").catch(function () { return null; }), window.claude.use("user").catch(function () { return null; })]).then(function (r) {
      var db = r[0], user = r[1];
      if (!db || !user || typeof user.id !== "function") return;
      return Promise.resolve(user.id()).then(function (id) {
        if (!id) return;
        sync.db = db; sync.ref = db.doc("data/users/" + id + "/progression");
        surveiller(); etatSync("envoi");
        sync.ref.onSnapshot(function (snap) {
          if (snap.exists) appliquerDistant(snap.data()); else pousser();
        }, function () { etatSync("erreur"); });
      });
    }).catch(function () {});
  }
  /* Fusionne une progression venue d'ailleurs (gist GitHub, fichier de sauvegarde) dans ce navigateur.
     data : { clé: texte JSON }, t : { clé: date de modification }. Renvoie true si quelque chose a changé ici. */
  function fusionnerDans(data, t) {
    var temps = lire(KEY_T, {}), change = false, appChange = false;
    CLES.forEach(function (k) {
      var locS = brut(k), distS = data && data[k];
      if (distS == null || locS === distS) return;
      var m = fusion(k, parse(locS, null), parse(distS, null), (temps[k] || 0) >= ((t || {})[k] || 0));
      var mS = JSON.stringify(m);
      if (mS !== locS) { try { localStorage.setItem(k, mS); } catch (e) {} change = true; if (k === "cyberpenal.v1") appChange = true; }
      sync.instantane[k] = mS;
    });
    if (appChange && api() && api().recharger) {
      var tape = document.activeElement && /textarea|input/i.test(document.activeElement.tagName);
      api().recharger(!tape);
    }
    if (change) pousser();
    return change;
  }
  function instantane() { var data = {}; CLES.forEach(function (k) { var s = brut(k); if (s != null) data[k] = s; }); return { data: data, t: lire(KEY_T, {}) }; }
  window.CP_SYNC = { etat: function () { return sync.etat; }, maj: function () { etatSync(sync.etat); },
    claude: function () { return !!sync.ref; }, CLES: CLES, KEY_T: KEY_T, fusionnerDans: fusionnerDans, instantane: instantane };

  /* ======================================================================
     2. SIMULER UNE AUDITION
     ====================================================================== */
  var KEY_AUD = "cyberpenal.auditions";
  var SCENARIOS = [
    { id: "sextorsion", titre: "Thomas, victime de sextorsion", role: "victime", intro: "Thomas, 24 ans, se présente au commissariat, très gêné. Il dit qu'on le fait chanter avec une vidéo.",
      perso: "Tu es Thomas, 24 ans, comptable, timide et honteux. Tu parles peu, tu minimises, tu as peur que ta famille et ton employeur voient la vidéo.",
      faits: ["Le 12 novembre, un profil Instagram « lea_92_off » (photo d'une jeune femme) l'a abordé ; la conversation a continué sur Instagram, puis Snapchat",
        "Le 13 novembre vers 23 h 10, appel vidéo sur Snapchat : il s'est déshabillé à la demande de la jeune femme ; il a compris ensuite que c'était enregistré",
        "Le soir même, on lui a envoyé l'extrait vidéo et la liste de ses contacts LinkedIn et Instagram, avec la menace de tout leur envoyer s'il ne payait pas 500 €",
        "Il a payé 150 € le 14 novembre en achetant un coupon prépayé dans un bureau de tabac et en envoyant le code par message ; il a gardé le ticket",
        "On lui réclame maintenant 350 € de plus par virement, sur un IBAN qu'on lui a envoyé (il l'a encore dans Instagram)",
        "Il a supprimé la conversation Snapchat par honte, mais les messages Instagram sont toujours sur son téléphone",
        "Rien n'a été diffusé à ce jour ; il n'a parlé à personne ; il n'a pas encore porté plainte ni fait de signalement"],
      quals: ["312-10", "226-1", "226-2-1"] },
    { id: "faux-conseiller", titre: "Mme Martin, victime d'un faux conseiller bancaire", role: "victime", intro: "Mme Martin, 67 ans, retraitée, vient porter plainte : sa banque refuse de la rembourser.",
      perso: "Tu es Mme Martin, 67 ans, ancienne institutrice, polie mais bouleversée et un peu confuse sur l'ordre des événements. Tu as honte de t'être fait avoir.",
      faits: ["Le 3 novembre vers 10 h, elle a reçu un SMS annonçant une « opération suspecte » sur sa carte, avec un numéro à rappeler",
        "Quelques minutes plus tard, appel d'un « M. Bernard, service fraude » : le numéro affiché était celui de son agence bancaire",
        "Il connaissait son nom, son adresse et les quatre derniers chiffres de sa carte, ce qui l'a mise en confiance",
        "Il lui a fait valider dans l'application de la banque deux virements « vers un compte sécurisé » : 2 400 € puis 1 900 €",
        "Elle lui a communiqué un code reçu par SMS ; le bénéficiaire affiché était « Kevin D. » ; elle a fait une capture d'écran de l'application",
        "Elle a noté sur un papier l'heure des appels et le numéro qui s'affichait",
        "Elle a fait opposition le soir même ; la banque refuse le remboursement en parlant de « négligence grave »"],
      quals: ["313-1", "226-4-1", "324-1", "321-1"] },
    { id: "meute", titre: "Sarah, témoin d'un harcèlement en meute", role: "témoin", intro: "Sarah, 22 ans, accompagne sa colocataire Camille, streameuse, qui ne veut plus sortir de chez elle. Sarah a tout suivi.",
      perso: "Tu es Sarah, 22 ans, étudiante, colocataire et amie de Camille. Tu es en colère et tu parles vite. Tu as fait beaucoup de captures.",
      faits: ["Le 2 novembre, un extrait d'un live de Camille a été sorti de son contexte et a circulé sur X",
        "Le compte « @vengeur_x » a appelé, sur un serveur Discord dont Sarah a gardé le lien, à « s'occuper » de Camille",
        "En trois jours, Camille a reçu plus de 200 messages insultants, sur X et sur Twitch, de dizaines de comptes différents",
        "Trois comptes ont envoyé des menaces de mort ; Sarah a les captures avec les dates et les pseudos",
        "L'adresse de la colocation a été publiée sur le serveur Discord, avec la phrase « on sait où elle dort »",
        "Depuis, Camille ne sort plus, ne dort plus et est en arrêt de travail ; elle a fermé sa chaîne",
        "Sarah a gardé les captures sur son téléphone ; Camille a signalé quelques messages sur les plateformes, sans réponse"],
      quals: ["222-33-2-2", "222-17", "223-1-1"] },
    { id: "ancien-admin", titre: "Julien, ancien administrateur réseau, suspect", role: "suspect", intro: "Julien, 34 ans, est entendu sur une connexion au serveur de son ancien employeur, une semaine après son licenciement.",
      perso: "Tu es Julien, 34 ans, administrateur réseau licencié, sur la défensive. Tu minimises tout, tu te présentes comme de bonne foi. Tu ne reconnais un fait que si l'enquêteur te le présente précisément ; tu ne mens pas sur un fait qu'on te prouve.",
      faits: ["Licencié le 1er octobre, il avait encore ses identifiants VPN, qui fonctionnaient",
        "Il reconnaît s'être connecté le 8 octobre vers 22 h depuis chez lui, « pour récupérer des fichiers personnels »",
        "S'il est interrogé précisément : il a copié tout un dossier contenant le fichier clients de l'entreprise",
        "S'il est confronté aux journaux : il a supprimé la sauvegarde de la nuit sur le NAS « par erreur »",
        "Il a gardé la copie sur une clé USB, chez lui",
        "Il savait que son accès aurait dû être coupé (« ils n'ont jamais rien sécurisé »)",
        "Il a été contacté par un concurrent pour un poste deux semaines plus tôt"],
      quals: ["323-1", "323-3"] },
    { id: "rancongiciel", titre: "Mme Roux, gérante d'un cabinet touché par un rançongiciel", role: "victime", intro: "Mme Roux dirige un cabinet comptable de 12 salariés. Ce matin, tout est bloqué et une rançon est réclamée.",
      perso: "Tu es Mme Roux, 52 ans, gérante d'un cabinet comptable, stressée et pressée : tes clients attendent. Tu envisages de payer. Tu connais mal l'informatique et tu renvoies souvent vers ton prestataire.",
      faits: ["Lundi 17 novembre vers 9 h, tous les postes affichaient un message du groupe « NoirCrypt » : fichiers chiffrés",
        "La rançon demandée est de 2 bitcoins sous 72 heures, sinon les données seront publiées sur un site",
        "Le serveur de fichiers et la sauvegarde sur le NAS sont chiffrés ; il existe une sauvegarde hors ligne datant de trois semaines",
        "Le prestataire informatique a éteint puis redémarré le serveur le matin même, avant d'appeler qui que ce soit",
        "Vendredi, une comptable a ouvert une pièce jointe « facture » reçue par courriel",
        "Les dossiers fiscaux de clients ont peut-être été copiés : le message des pirates montre des noms de fichiers",
        "Elle n'a encore prévenu ni la police, ni la CNIL, ni ses clients ; le prestataire a gardé les journaux du pare-feu"],
      quals: ["323-1", "323-2", "323-3", "312-1"] }
  ];
  var aud = null;
  function scen(id) { return SCENARIOS.filter(function (s) { return s.id === id; })[0]; }
  V.audition = function (args) {
    var s = scen(args[0]);
    if (!s) return listeAuditions();
    aud = { s: s, msgs: [], fini: false };
    var A = api();
    A.page('<p class="eyebrow"><a href="#/audition">Simuler une audition</a></p><h1>' + esc(s.titre) + "</h1>" +
      '<div class="cas-faits">' + esc(s.intro) + "</div>" +
      '<p class="petit">Tu mènes l\'audition : pose tes questions une par une. Claude joue ' + (s.role === "suspect" ? "le suspect, qui ne livre que ce qu'on lui demande précisément" : s.role === "témoin" ? "le témoin" : "la victime") + ". Quand tu as fini, demande le débriefing.</p>" +
      '<div class="aud-fil" id="audFil" aria-live="polite"></div>' +
      '<div class="aud-saisie"><label for="audQ" class="lettre-k">Ta question</label><textarea id="audQ" rows="3" placeholder="Ex. : Pouvez-vous me raconter depuis le début ?"></textarea>' +
      '<div class="btns"><button class="btn" id="audEnv">Poser la question</button><button class="btn ghost" id="audFin">Terminer et débriefer</button></div><p class="jeu-msg" id="audMsg" hidden></p></div><div id="audDeb"></div>');
    $("#audEnv").addEventListener("click", poserAud);
    $("#audQ").addEventListener("keydown", function (e) { if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) poserAud(); });
    $("#audFin").addEventListener("click", debriefer);
    claude().then(function (c) { if (!c) { $("#audMsg").textContent = HORS_LIGNE; $("#audMsg").hidden = false; $("#audEnv").disabled = true; $("#audFin").disabled = true; } });
  };
  function listeAuditions() {
    var hist = lire(KEY_AUD, []);
    api().page('<p class="eyebrow">S\'entraîner</p><h1>Simuler une audition</h1>' +
      '<p class="lead">Claude joue une victime, un témoin ou un suspect. C\'est toi qui poses les questions. À la fin, un débriefing te dit ce que tu as obtenu, ce que tu as oublié et quelles qualifications se dessinent.</p>' +
      '<div class="grid">' + SCENARIOS.map(function (s) { return '<a class="tile" href="#/audition/' + s.id + '"><span class="k">' + esc(s.role) + "</span><h3>" + esc(s.titre) + "</h3><p>" + esc(s.intro) + "</p></a>"; }).join("") + "</div>" +
      (hist.length ? "<h2>Mes auditions précédentes</h2>" + hist.map(function (h, i) {
        return '<details class="card at-hist"><summary>' + esc(h.date) + " — " + esc(h.titre) + '</summary><div data-a="' + i + '"></div></details>';
      }).join("") : ""));
    $$("[data-a]").forEach(function (d) { var h = hist[+d.dataset.a]; d.innerHTML = rendreDebrief(h.deb) + '<details><summary class="petit">Relire l\'audition</summary>' + rendreFil(h.msgs) + "</details>"; });
  }
  function rendreFil(msgs) {
    return msgs.map(function (m) { return '<div class="aud-msg ' + (m.role === "user" ? "moi" : "lui") + '"><span class="lettre-k">' + (m.role === "user" ? "Toi" : "Réponse") + "</span>" + esc(m.content) + "</div>"; }).join("");
  }
  function consigneRole(s) {
    return "Tu joues un rôle dans un exercice de formation à l'audition, pour une personne qui prépare un stage en enquête sur la cybercriminalité. Tous les faits sont fictifs.\n\n" +
      "TON PERSONNAGE : " + s.perso + "\n\nCE QUE TU SAIS (ne le récite pas d'un bloc) :\n- " + s.faits.join("\n- ") + "\n\n" +
      "RÈGLES : réponds uniquement en tant que ce personnage, à l'oral, en 1 à 4 phrases. Ne donne une information que si la question y conduit ; à une question vague, réponds vaguement. " +
      "Reste cohérent avec ce que tu sais ; pour un détail secondaire non prévu, invente quelque chose de plausible et garde-le ensuite. Ne sors jamais du rôle, ne donne aucun conseil juridique, n'annonce aucune qualification. " +
      "Réponds seulement par la réplique du personnage, sans guillemets ni didascalies.";
  }
  function poserAud() {
    var q = $("#audQ").value.trim(), msg = $("#audMsg"), b = $("#audEnv");
    if (!q || aud.fini) return;
    claude().then(function (c) {
      if (!c) return;
      aud.msgs.push({ role: "user", content: q });
      $("#audQ").value = ""; $("#audFil").innerHTML = rendreFil(aud.msgs) + '<div class="aud-msg lui attente">…</div>';
      b.disabled = true; msg.hidden = true;
      var conv = aud.msgs.map(function (m, i) { return { role: m.role, content: i === 0 ? consigneRole(aud.s) + "\n\nPREMIÈRE QUESTION DE L'ENQUÊTEUR :\n" + m.content : m.content }; });
      c(conv, { modelTier: "default", cache: false }).then(function (r) {
        aud.msgs.push({ role: "assistant", content: (r && r.text || "…").trim() });
        $("#audFil").innerHTML = rendreFil(aud.msgs); b.disabled = false;
        var der = $("#audFil").lastElementChild; if (der) der.scrollIntoView({ block: "start", behavior: "smooth" });
      }, function (e) {
        aud.msgs.pop(); $("#audFil").innerHTML = rendreFil(aud.msgs); b.disabled = false; $("#audQ").value = q;
        msg.textContent = msgErreur(e); msg.hidden = false;
      });
    });
  }
  function debriefer() {
    var msg = $("#audMsg"), b = $("#audFin");
    if (aud.msgs.length < 4) { msg.textContent = "Pose au moins deux questions avant de demander le débriefing."; msg.hidden = false; return; }
    claude().then(function (c) {
      if (!c) return;
      b.disabled = true; b.textContent = "Débriefing…"; $("#audEnv").disabled = true;
      var transcript = aud.msgs.map(function (m) { return (m.role === "user" ? "ENQUÊTEUR : " : "PERSONNE ENTENDUE : ") + m.content; }).join("\n");
      var catalogue = window.INFRACTIONS.map(function (f) { return "- " + f.id + " | " + f.titre; }).join("\n");
      var consigne = "Tu es formateur en techniques d'audition pour des enquêteurs spécialisés en cybercriminalité (droit français). Débriefe l'audition ci-dessous, menée par une personne qui prépare son stage.\n\n" +
        "Les informations que la personne entendue détenait (la grille de correction) :\n- " + aud.s.faits.join("\n- ") + "\n\n" +
        "Règles : compare la grille et ce que l'enquêteur a réellement obtenu dans la transcription. Les qualifications doivent venir du catalogue (identifiants exacts). Sois concret et bienveillant, tutoie la personne, phrases courtes.\n\n" +
        'Réponds UNIQUEMENT avec un objet JSON de ce format exact :\n{"obtenus":["information obtenue"],"manques":["information non obtenue, et la question qui l\'aurait fait sortir"],"bien":["ce qui était bien mené"],"ameliorer":["conseil de technique d\'audition"],"qualifications":[{"id":"312-10","pourquoi":"..."}],"suite":["acte d\'enquête ou réflexe à prévoir ensuite"]}\n\n' +
        "TRANSCRIPTION :\n" + transcript + "\n\nCATALOGUE DES INFRACTIONS :\n" + catalogue;
      c.json(consigne, { modelTier: "complex" }).then(function (deb) {
        aud.fini = true; b.textContent = "Débriefing reçu";
        $("#audDeb").innerHTML = '<div class="card at-res"><h2>Débriefing</h2>' + rendreDebrief(deb) + '<div class="btns"><a class="btn" href="#/audition">Choisir une autre audition</a><a class="btn ghost" href="#/audition/' + aud.s.id + '">Recommencer celle-ci</a></div></div>';
        var hist = lire(KEY_AUD, []); hist.unshift({ id: aud.s.id, titre: aud.s.titre, date: new Date().toLocaleDateString("fr-FR"), msgs: aud.msgs, deb: deb }); ecrire(KEY_AUD, hist.slice(0, 10));
        $("#audDeb").scrollIntoView({ block: "start", behavior: "smooth" });
      }, function (e) { b.disabled = false; b.textContent = "Terminer et débriefer"; $("#audEnv").disabled = false; msg.textContent = msgErreur(e); msg.hidden = false; });
    });
  }
  function liste(t, l) { return Array.isArray(l) && l.length ? '<p class="lettre-k">' + t + "</p><ul>" + l.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : ""; }
  function rendreDebrief(d) {
    d = d || {};
    var q = (Array.isArray(d.qualifications) ? d.qualifications : []).filter(function (x) { return x && inf(x.id); });
    return liste("Ce que tu as obtenu", d.obtenus) + liste("Ce qui t'a échappé", d.manques) + liste("Ce qui était bien mené", d.bien) + liste("Pour progresser", d.ameliorer) +
      (q.length ? '<p class="lettre-k">Qualifications qui se dessinent</p><ul>' + q.map(function (x) { return "<li>" + chipF(x.id) + " " + esc(x.pourquoi) + "</li>"; }).join("") + "</ul>" : "") +
      liste("Et ensuite", d.suite);
  }

  /* ======================================================================
     4. L'ENQUÊTE PAS À PAS
     Chaque étape : ce qu'on fait, le texte, le délai ou le point clé, le piège.
     ====================================================================== */
  var ENQUETES = [
    { id: "rancongiciel", titre: "Rançongiciel dans une PME", resume: "Une entreprise découvre ses fichiers chiffrés et une demande de rançon en bitcoins.",
      quals: ["323-1", "323-2", "323-3", "312-1", "323-4-1"],
      etapes: [
        { t: "Les premiers réflexes de la victime", f: "Isoler les postes du réseau sans les éteindre, garder les journaux et le message de rançon, ne pas payer, contacter 17Cyber et un prestataire qualifié. Si des données personnelles ont pu fuiter, notifier la CNIL dans les 72 heures (RGPD).", a: [], i: [], p: "Éteindre ou réinstaller les machines efface des traces précieuses en mémoire et dans les journaux." },
        { t: "La plainte et le choix du parquet", f: "Plainte de l'entreprise. Le parquet de Paris a une compétence concurrente pour les atteintes aux STAD ; l'enquête peut être confiée à l'OFAC ou à un service spécialisé de la gendarmerie.", a: ["706-72-1", "113-2-1"], i: [], p: "La compétence de Paris n'est pas exclusive : le parquet local peut garder l'affaire." },
        { t: "Les constatations techniques", f: "Copie des disques et des journaux, analyse du vecteur d'entrée (ici un courriel piégé), constatations sur le site de publication des pirates.", a: ["57-1", "429"], i: [], p: "Travailler sur une copie, jamais sur l'original, et tout consigner pour la chaîne de preuve." },
        { t: "Les réquisitions", f: "Réquisitions aux hébergeurs, à la messagerie et aux fournisseurs d'accès pour les adresses IP et les journaux de connexion ; demande de préservation des contenus.", a: ["60-1", "60-1-2", "60-2"], i: [], p: "En préliminaire, c'est 77-1-1 avec l'autorisation du procureur. Les données de connexion supposent un délit puni d'au moins 3 ans : c'est le cas ici." },
        { t: "Suivre l'argent", f: "Si une rançon a été payée : analyse de la blockchain, réquisitions aux plateformes d'échange de crypto-actifs, saisie des avoirs identifiés.", a: ["706-154"], i: [], p: "Le juge des libertés statue sur le maintien de la saisie dans les 10 jours." },
        { t: "Les auteurs à l'étranger", f: "La loi française s'applique (victime en France). Pour les preuves dans l'Union : décision d'enquête européenne ou injonction e-evidence ; hors Union : entraide, Convention de Budapest ; coordination par Europol et Eurojust.", a: ["694-15", "113-2-1"], i: [], p: "Un groupe organisé : pense à la bande organisée (323-4-1) et à l'association de malfaiteurs (323-4)." },
        { t: "Les poursuites et les peines", f: "Qualifications cumulées : accès frauduleux, entrave, atteinte aux données, extorsion. Mandat d'arrêt européen si un auteur est localisé dans l'Union ; confiscation des outils et des avoirs.", a: ["695-11", "131-21"], i: ["323-1", "323-2", "323-3", "312-1"], p: "Si un hôpital ou un service vital est touché, la mise en danger de la vie d'autrui aggrave (323-4-2)." }] },
    { id: "sextorsion", titre: "Sextorsion d'un jeune adulte", resume: "Un homme est filmé lors d'un appel vidéo intime, puis menacé de diffusion contre de l'argent.",
      quals: ["312-10", "226-1", "226-2-1"],
      etapes: [
        { t: "Les premiers réflexes de la victime", f: "Ne pas payer (ou cesser de payer), ne rien supprimer, faire des captures des profils, messages et demandes de paiement, garder les reçus, signaler les comptes et contenus (plateformes, PHAROS).", a: [], i: [], p: "Supprimer la conversation par honte fait perdre l'identifiant du compte et les horaires." },
        { t: "La plainte et la constatation", f: "Plainte ; procès-verbal de constatation en ligne des profils et messages encore accessibles.", a: ["429"], i: [], p: "Noter les URL et identifiants exacts des comptes, pas seulement les pseudos affichés, qui changent." },
        { t: "La qualification", f: "Chantage, avec l'aggravation prévue pour la sextorsion ; captation de l'image intime sans consentement ; diffusion si la menace a été mise à exécution.", a: [], i: ["312-10", "226-1", "226-2-1"], p: "Si la victime est mineure, ce sont aussi les infractions sexuelles contre les mineurs (227-22 et suivants)." },
        { t: "Identifier le compte", f: "Réquisitions aux réseaux sociaux pour les données d'inscription et les adresses IP de connexion ; préservation des contenus.", a: ["60-1", "60-1-2", "60-2"], i: [], p: "Le chantage est puni de 5 ans : les données de connexion peuvent être requises." },
        { t: "Suivre les paiements", f: "Réquisitions à l'émetteur des coupons prépayés ou à la banque du compte bénéficiaire ; saisie des sommes sur le compte.", a: ["706-154"], i: [], p: "Le titulaire du compte est souvent une « mule » : pense au blanchiment (324-1) ou au recel (321-1)." },
        { t: "À l'étranger", f: "Les réseaux de sextorsion opèrent souvent depuis l'étranger : la loi française s'applique, l'entraide pénale internationale est nécessaire pour les preuves et les auteurs.", a: ["113-2-1", "694-15"], i: [], p: "Préserver les données tout de suite : les délais de l'entraide sont longs." },
        { t: "Le jugement", f: "Outre l'emprisonnement et l'amende, la peine complémentaire de suspension des comptes en ligne peut être prononcée pour les délits qui la prévoient.", a: ["131-35-1"], i: [], p: "Vérifie que l'infraction retenue figure dans la liste de 131-35-1." }] },
    { id: "faux-conseiller", titre: "Le faux conseiller bancaire", resume: "Une retraitée valide des virements à la demande d'un faux « service fraude » qui usurpe le numéro de sa banque.",
      quals: ["313-1", "226-4-1", "324-1", "321-1"],
      etapes: [
        { t: "Les premiers réflexes de la victime", f: "Faire opposition, contester les opérations auprès de la banque, garder le SMS, l'historique d'appels, les captures de l'application.", a: [], i: [], p: "Un vrai conseiller ne fait jamais valider d'opération par téléphone pour « sécuriser » un compte." },
        { t: "La plainte et la qualification", f: "Escroquerie (manœuvres frauduleuses : faux SMS, faux numéro affiché, fausse qualité) ; usurpation d'identité de l'agence ou du conseiller.", a: [], i: ["313-1", "226-4-1"], p: "La victime âgée ou vulnérable peut aggraver l'escroquerie (313-2)." },
        { t: "Remonter les appels", f: "Réquisitions aux opérateurs téléphoniques pour l'origine réelle des appels et du SMS, malgré l'usurpation du numéro affiché.", a: ["60-1", "60-1-2"], i: [], p: "L'escroquerie étant punie de 5 ans, les données de trafic peuvent être requises." },
        { t: "Suivre les virements", f: "Réquisitions à la banque bénéficiaire : identité du titulaire, opérations suivantes ; saisie rapide des sommes restantes.", a: ["60-1", "706-154"], i: [], p: "Chaque heure compte : l'argent est vite retiré ou reversé ailleurs." },
        { t: "Les mules", f: "Le titulaire du compte bénéficiaire est souvent une mule. Selon ce qu'elle savait et ce qu'elle a fait des fonds : blanchiment ou recel.", a: [], i: ["324-1", "321-1"], p: "La présomption de 324-1-1 aide quand l'opération n'a d'autre justification que de masquer l'origine des fonds." },
        { t: "Remonter le réseau", f: "D'où venaient les données personnelles de la victime ? Fuite de données, hameçonnage préalable : autre volet d'enquête possible.", a: [], i: ["226-18", "323-3"], p: "Les fichiers de victimes se vendent : pense aux plateformes illicites (323-3-2)." }] },
    { id: "meute", titre: "Le harcèlement en meute", resume: "Une streameuse reçoit des centaines de messages haineux, des menaces de mort, et son adresse est publiée.",
      quals: ["222-33-2-2", "222-17", "223-1-1"],
      etapes: [
        { t: "Les premiers réflexes de la victime", f: "Captures datées de chaque message avec le pseudo et l'URL du compte, signalement aux plateformes et à PHAROS, mise en sécurité si l'adresse a été publiée.", a: [], i: [], p: "Les comptes peuvent disparaître vite : capturer l'URL du profil, pas seulement le pseudo affiché." },
        { t: "La constatation et la plainte", f: "Procès-verbal de constatation en ligne, ou constat par un commissaire de justice ; plainte de la victime ; audition des témoins.", a: ["429"], i: [], p: "Trier les messages : insultes, menaces, appel au raid, publication de l'adresse." },
        { t: "La qualification", f: "Harcèlement en meute : chacun est punissable même s'il n'a agi qu'une fois, s'il savait que d'autres agissaient. Menaces de mort ; publication de l'adresse pour exposer à un danger (doxing).", a: [], i: ["222-33-2-2", "222-17", "223-1-1"], p: "Les mobiles sexistes ou haineux aggravent (132-76, 132-77)." },
        { t: "Identifier les auteurs", f: "Réquisitions aux plateformes (X, Twitch, Discord) pour les données d'inscription et les adresses IP, puis aux fournisseurs d'accès.", a: ["60-1", "60-1-2", "60-2"], i: [], p: "Un délit puni d'au moins 1 an commis en ligne suffit pour requérir les données qui identifient l'auteur." },
        { t: "L'organisateur", f: "Le compte qui a lancé l'appel au raid est au cœur de l'enquête : constater le serveur Discord, identifier son administrateur.", a: ["230-46"], i: [], p: "L'enquête sous pseudonyme est encadrée : aucune provocation à l'infraction." },
        { t: "Le jugement", f: "Peines d'emprisonnement et d'amende ; suspension des comptes des auteurs, le harcèlement figurant parmi les délits qui la permettent.", a: ["131-35-1"], i: [], p: "La suspension dure 6 mois au plus (1 an en récidive)." }] }
  ];
  V.enquetes = function (args) {
    var e = ENQUETES.filter(function (x) { return x.id === args[0]; })[0];
    if (!e) {
      return api().page('<p class="eyebrow">Apprendre</p><h1>L\'enquête pas à pas</h1>' +
        '<p class="lead">Quatre affaires types, de la plainte au jugement. Pour chaque étape : ce qu\'on fait, le texte qui le permet, et le piège à éviter.</p>' +
        '<div class="grid">' + ENQUETES.map(function (x) { return '<a class="tile" href="#/enquetes/' + x.id + '"><span class="k">' + x.etapes.length + " étapes</span><h3>" + esc(x.titre) + "</h3><p>" + esc(x.resume) + "</p></a>"; }).join("") + "</div>" +
        '<p class="petit">Ces parcours résument les grandes étapes : chaque enquête a ses particularités, et le cadre (flagrance, préliminaire, instruction) change qui décide.</p>');
    }
    api().page('<article class="enquete"><p class="eyebrow"><a href="#/enquetes">L\'enquête pas à pas</a></p><h1>' + esc(e.titre) + '</h1><p class="lead">' + esc(e.resume) + "</p>" +
      '<div class="chips">' + e.quals.map(chipF).join("") + "</div>" +
      '<ol class="frise-enq">' + e.etapes.map(function (s, i) {
        return '<li><span class="frise-num">' + (i + 1) + "</span><div><h3>" + esc(s.t) + "</h3><p>" + esc(s.f) + "</p>" +
          ((s.a.length || s.i.length) ? '<div class="chips">' + s.a.map(chipA).join("") + s.i.map(chipF).join("") + "</div>" : "") +
          (s.p ? '<p class="frise-piege"><b>Attention :</b> ' + esc(s.p) + "</p>" : "") + "</div></li>";
      }).join("") + "</ol>" +
      '<div class="btns"><a class="btn" href="#/audition">M\'entraîner à l\'audition</a><a class="btn ghost" href="#/atelier/rediger">Rédiger une réquisition</a></div></article>');
    if (window.CP_LEX) try { window.CP_LEX.annoter($(".frise-enq")); } catch (x) {}
  };

  /* ======================================================================
     7. CE QUI A CHANGÉ
     ====================================================================== */
  var RELU = "2026-11-20"; /* dernière relecture des textes sur Légifrance */
  var REFORMES = [
    ["2026-08-26", "Loi du 24 août 2026", "Nouvelle version de la peine de suspension des comptes en ligne, en vigueur depuis le 26 août 2026.", [], ["131-35-1"]],
    ["2026-08-18", "Règlement européen « e-evidence »", "Applicable depuis le 18 août 2026 : un juge ou un procureur peut demander directement des données à un fournisseur établi dans un autre État membre.", [], ["694-15"]],
    ["2026-06-25", "Loi n° 2026-534 du 25 juin 2026", "Modifie l'article 313-2 (escroqueries aggravées).", ["313-1"], []],
    ["2025-06-13", "Loi « narcotrafic » n° 2025-532 du 13 juin 2025", "Durcit 323-3-2 (plateformes illicites), étend la présomption de blanchiment aux crypto-actifs anonymes et aux mixeurs (324-1-1), modifie l'enquête sous pseudonyme.", ["323-3-2", "324-1"], ["230-46"]],
    ["2024-10-15", "Ordonnance du 15 octobre 2024", "La saisie sur compte vise expressément les comptes de crypto-actifs.", [], ["706-154"]],
    ["2024-07-25", "Loi du 25 juillet 2024 sur les ingérences étrangères", "Crée une aggravation pour les infractions commises pour le compte d'une puissance étrangère, cyberattaques comprises.", ["411-12"], []],
    ["2024-05-21", "Loi SREN n° 2024-449 du 21 mai 2024", "Hypertrucages (226-8 modifié, 226-8-1 créé), aggravation de sextorsion (312-10), peine de suspension des comptes (131-35-1), sanctions de la LCEN relevées.", ["226-8", "226-8-1", "312-10", "lcen-6-v"], ["131-35-1"]],
    ["2023-01-24", "LOPMI n° 2023-22 du 24 janvier 2023", "Peines des atteintes aux STAD relevées ; création de 323-3-2 (plateformes illicites) et 323-4-2 (mise en danger de la vie d'autrui).", ["323-1", "323-3-2", "323-4-2"], []],
    ["2022-03-02", "Loi n° 2022-299 du 2 mars 2022", "Crée le délit de harcèlement scolaire et l'article 60-1-2 sur l'accès aux données de connexion.", ["222-33-2-3"], ["60-1-2"]],
    ["2021-04-21", "Loi n° 2021-478 du 21 avril 2021", "Protège les mineurs en ligne : incitation d'un mineur à des actes sexuels par voie électronique.", ["227-22-2"], []],
    ["2016-10-07", "Loi pour une République numérique", "Réprime la diffusion non consentie d'images intimes.", ["226-2-1"], []],
    ["2016-06-03", "Loi du 3 juin 2016", "Réputée commise en France toute infraction en ligne au préjudice d'une personne résidant en France (113-2-1).", [], ["113-2-1"]]
  ];
  var A_SUIVRE = [["Recodification du Code de procédure pénale", "Ordonnance n° 2025-1091 du 19 novembre 2025 : nouvelle numérotation du CPP à compter du 1er janvier 2029. Jusque-là, les numéros actuels (60-1, 77-1-1…) s'appliquent."], ["Convention des Nations unies contre la cybercriminalité", "Signée, pas encore en vigueur."], ["Directive NIS 2", "Transposition en cours en droit français."]];
  function joursDepuis(iso) { return Math.floor((Date.now() - new Date(iso + "T12:00:00").getTime()) / 86400000); }
  function dateFr(iso) { try { return new Date(iso + "T12:00:00").toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }); } catch (e) { return iso; } }
  window.CP_RELU = { jours: function () { return joursDepuis(RELU); }, date: dateFr(RELU) };
  V.nouveautes = function () {
    var j = joursDepuis(RELU);
    api().page('<p class="eyebrow">Apprendre</p><h1>Ce qui a changé</h1>' +
      '<p class="lead">Les réformes récentes du droit de la cybercriminalité, de la plus récente à la plus ancienne, avec les fiches concernées.</p>' +
      (j > 90 ? '<div class="rev-bandeau alerte">Les textes n\'ont pas été relus sur Légifrance depuis ' + j + " jours (dernière relecture le " + esc(dateFr(RELU)) + "). Demande à Claude de les relire avant de t'en servir en stage.</div>"
        : '<p class="petit">Textes relus sur Légifrance le ' + esc(dateFr(RELU)) + (j < 1 ? " (aujourd'hui)" : " (il y a " + j + " jour" + (j > 1 ? "s" : "") + ")") + ". Un rappel s'affichera ici au-delà de trois mois.</p>") +
      '<ol class="reformes">' + REFORMES.map(function (r) {
        return '<li><span class="ref-date">' + esc(dateFr(r[0])) + "</span><div><h3>" + esc(r[1]) + "</h3><p>" + esc(r[2]) + '</p><div class="chips">' + r[3].map(chipF).join("") + r[4].map(chipA).join("") + "</div></div></li>";
      }).join("") + "</ol>" +
      "<h2>À suivre</h2><ul>" + A_SUIVRE.map(function (x) { return "<li><b>" + esc(x[0]) + "</b> — " + esc(x[1]) + "</li>"; }).join("") + '</ul><p><a href="#/europe">Voir la page Europe et international</a></p>');
  };
})();
