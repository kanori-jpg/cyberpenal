/* Mon contenu personnalisé — notes écrites à la main ou extraites d'une image / d'un PDF.
   En ligne (site publié) : enregistrement dans la base de l'artifact, donc synchronisé entre
   les appareils, et extraction du texte par Claude. En local (fichier ouvert depuis l'ordinateur) :
   enregistrement dans le navigateur, sans extraction. */
(function () {
  "use strict";

  var KEY = "cyberpenal.perso.v1";
  var COLL = "notes";
  var PLAFOND_PDF = 40;   // garde-fou : au-delà, la lecture prendrait très longtemps
  var PDFJS = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/";

  var cap = { db: null, assets: null, sample: null, images: null, user: null, peutEcrire: true };
  var notes = [];
  var unsub = null, loadTimer = null, ctrl = null;
  var mode = "local";            // "local" | "sync"
  var etat = "";                 // message d'état affiché
  var edition = null;            // note en cours de rédaction
  var fichierEnCours = null;     // { blob, type, apercu }

  var THEMES = ["Cours / manuel", "Stage", "Jurisprudence", "Article de presse",
    "Procédure", "Question à poser", "Fiche de révision", "Autre"];

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function uid() { return "n" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function maintenant() { return new Date().toISOString(); }
  function jour(iso) {
    try {
      return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
    } catch (e) { return ""; }
  }
  function actif() { return !!document.getElementById("persoListe"); }

  /* ---------- Stockage local (secours) ---------- */
  function lireLocal() {
    try { return JSON.parse(localStorage.getItem(KEY) || "[]") || []; } catch (e) { return []; }
  }
  function ecrireLocal() {
    try { localStorage.setItem(KEY, JSON.stringify(notes)); } catch (e) {}
  }

  /* ---------- Capacités (site publié) ---------- */
  function initCapacites() {
    if (!window.claude || typeof window.claude.use !== "function") { finirInit(); return; }
    etat = "chargement";
    var attendus = [
      window.claude.use("db").catch(function () { return null; }),
      window.claude.use("assets").catch(function () { return null; }),
      window.claude.use("sample").catch(function () { return null; }),
      window.claude.use("user").catch(function () { return null; })
    ];
    Promise.all(attendus).then(function (r) {
      cap.db = r[0]; cap.assets = r[1]; cap.sample = r[2]; cap.user = r[3];
      var suite = [];
      if (cap.sample) {
        suite.push(cap.sample.limits().then(function (l) { cap.images = l && l.images ? l.images : null; })
          .catch(function () { cap.images = null; }));
      }
      if (cap.user && typeof cap.user.can === "function") {
        suite.push(Promise.resolve(cap.user.can("data.write")).then(function (v) {
          if (v === false) cap.peutEcrire = false;
        }).catch(function () {}));
      }
      return Promise.all(suite);
    }).then(finirInit, finirInit);
  }

  function finirInit() {
    if (cap.db) { mode = "sync"; ecouterDb(); }
    else { etat = ""; mode = "local"; notes = lireLocal(); }
    if (actif()) { majEntete(); rendre(); }
  }

  function ecouterDb() {
    if (unsub) { unsub(); unsub = null; }
    etat = "chargement";
    clearTimeout(loadTimer);
    loadTimer = setTimeout(function () {
      if (etat === "chargement") { etat = "lent"; if (actif()) majEntete(); }
    }, 10000);
    try {
      unsub = cap.db.collection(COLL).orderBy("cree", "desc").limit(500).onSnapshot(
        function (snap) {
          notes = snap.docs.map(function (d) {
            var o = d.data() || {}; return {
              id: d.id, titre: o.titre || "", texte: o.texte || "", theme: o.theme || "",
              source: o.source || "ecrit", fichier: o.fichier || null, cree: o.cree || "", modifie: o.modifie || ""
            };
          });
          if (!snap.metadata.fromCache) { etat = ""; clearTimeout(loadTimer); }
          if (actif()) { majEntete(); rendre(); }
        },
        function () {
          clearTimeout(loadTimer);
          etat = "erreur"; mode = "local"; notes = lireLocal();
          if (actif()) { majEntete(); rendre(); }
        }
      );
    } catch (e) {
      clearTimeout(loadTimer); etat = "erreur"; mode = "local"; notes = lireLocal();
    }
  }

  /* ---------- Écriture ---------- */
  function enregistrer(note) {
    note.modifie = maintenant();
    if (!note.cree) note.cree = note.modifie;
    if (mode === "sync" && cap.db) {
      var corps = {
        titre: note.titre, texte: note.texte, theme: note.theme,
        source: note.source, fichier: note.fichier || null, cree: note.cree, modifie: note.modifie
      };
      return cap.db.collection(COLL).doc(note.id).set(corps).catch(function (e) {
        alerter(e && e.code === "invalid_argument"
          ? "Enregistrement refusé : ton compte n'a pas le droit d'écrire ici."
          : "L'enregistrement en ligne a échoué. Réessaie dans un instant.");
        throw e;
      });
    }
    var i = notes.findIndex(function (n) { return n.id === note.id; });
    if (i >= 0) notes[i] = note; else notes.unshift(note);
    notes.sort(function (a, b) { return (b.cree || "").localeCompare(a.cree || ""); });
    ecrireLocal(); rendre();
    return Promise.resolve();
  }

  function supprimer(note) {
    var p = Promise.resolve();
    if (note.fichier && cap.assets) p = cap.assets.delete(note.fichier).catch(function () {});
    return p.then(function () {
      if (mode === "sync" && cap.db) return cap.db.collection(COLL).doc(note.id).delete();
      notes = notes.filter(function (n) { return n.id !== note.id; });
      ecrireLocal(); rendre();
    }).catch(function () { alerter("La suppression a échoué."); });
  }

  function alerter(msg) {
    var z = $("#persoAlerte"); if (!z) return;
    z.textContent = msg; z.hidden = false;
    clearTimeout(z._t); z._t = setTimeout(function () { z.hidden = true; }, 7000);
  }

  /* ---------- Gabarit de la page ---------- */
  function html() {
    return '<p class="eyebrow"><a href="#/accueil">Accueil</a> · Mes notes</p>' +
      "<h1>Mon contenu personnalisé</h1>" +
      '<p class="lead">Tout ce que tu apprends de ton côté : cours, lectures, notes de stage, arrêts, articles de presse. Écris directement, ou importe une photo ou un PDF : le texte en sera extrait pour toi.</p>' +

      '<div class="perso-barre">' +
      '<button class="btn" id="persoNouveau">Écrire une note</button>' +
      '<button class="btn ghost" id="persoImage" hidden>Importer une image</button>' +
      '<button class="btn ghost" id="persoPdf" hidden>Importer un PDF</button>' +
      '<button class="btn mint" id="persoJouer" hidden>Me tester sur mes notes</button>' +
      '<input type="file" id="persoFichierImg" accept="image/*" hidden>' +
      '<input type="file" id="persoFichierPdf" accept="application/pdf,.pdf" hidden>' +
      "</div>" +
      '<p class="perso-etat" id="persoEtat"></p>' +
      '<p class="perso-alerte" id="persoAlerte" role="status" hidden></p>' +

      /* Éditeur */
      '<section class="perso-editeur card" id="persoEditeur" hidden>' +
      '<div class="perso-extrait" id="persoExtrait" hidden>' +
      '<div class="perso-extrait-img"><img id="persoApercu" alt="Document importé"></div>' +
      '<div class="perso-extrait-txt"><strong id="persoExtraitTitre">Lecture du document…</strong>' +
      '<p class="petit" id="persoExtraitInfo">L\'IA transcrit le texte. Tu pourras tout corriger ensuite.</p>' +
      '<button class="btn ghost small" id="persoStop" hidden>Arrêter</button></div></div>' +
      '<label class="perso-label" for="persoTitre">Titre</label>' +
      '<input type="text" id="persoTitre" placeholder="Par exemple : Cours du 12 mars, rançongiciels">' +
      '<label class="perso-label" for="persoTheme">Thème</label>' +
      '<input type="text" id="persoTheme" list="persoThemes" placeholder="Facultatif">' +
      '<datalist id="persoThemes">' + THEMES.map(function (t) { return '<option value="' + esc(t) + '">'; }).join("") + "</datalist>" +
      '<label class="perso-label" for="persoTexte">Contenu</label>' +
      '<textarea id="persoTexte" placeholder="Écris ici ce que tu as appris, retenu, compris…"></textarea>' +
      '<div class="row" style="margin-top:14px"><button class="btn" id="persoEnregistrer">Enregistrer</button>' +
      '<button class="btn ghost" id="persoAnnuler">Annuler</button></div>' +
      "</section>" +

      JEUX.html() +

      '<div class="perso-outils"><input type="search" id="persoRecherche" placeholder="Rechercher dans mes notes…" aria-label="Rechercher dans mes notes"></div>' +
      '<div id="persoListe"></div>';
  }

  /* ---------- En-tête d'état ---------- */
  function majEntete() {
    var e = $("#persoEtat"); if (!e) return;
    var t = "";
    if (etat === "chargement") t = "Chargement de tes notes…";
    else if (etat === "lent") t = "Tes notes mettent du temps à arriver. Ce qui s'affiche peut ne pas être à jour.";
    else if (etat === "erreur") t = "Connexion à l'espace en ligne impossible : tes notes sont enregistrées sur cet appareil uniquement.";
    else if (mode === "sync") t = "✓ Enregistré en ligne : tu retrouves ces notes sur ton téléphone et sur ton ordinateur.";
    else t = "Enregistré dans ce navigateur, sur cet appareil. Pour synchroniser entre le téléphone et l'ordinateur et importer des documents, ouvre la version Claude du site (sur claude.ai).";
    e.textContent = t;
    e.className = "perso-etat" + (etat === "erreur" || etat === "lent" ? " attention" : (mode === "sync" && !etat ? " ok" : ""));

    var bi = $("#persoImage"), bp = $("#persoPdf");
    var peut = !!(cap.sample && cap.images);
    if (bi) bi.hidden = !peut;
    if (bp) bp.hidden = !peut;
    majBoutonJeu();
  }

  /* ---------- Liste ---------- */
  function rendre() {
    var box = $("#persoListe"); if (!box) return;
    majBoutonJeu();
    var q = ($("#persoRecherche") && $("#persoRecherche").value || "").trim().toLowerCase();
    var vue = notes.filter(function (n) {
      if (!q) return true;
      return (n.titre + " " + n.texte + " " + n.theme).toLowerCase().indexOf(q) >= 0;
    });

    if (!notes.length && etat === "chargement") { box.innerHTML = '<p class="petit">Chargement…</p>'; return; }
    if (!notes.length) {
      box.innerHTML = '<div class="perso-vide card"><h3>Ton carnet est encore vide</h3>' +
        "<p>Commence par une note : ce que tu as retenu de ta dernière rencontre, une phrase d'homélie, une question qui te travaille." +
        (cap.sample && cap.images ? " Ou importe la photo d'une feuille reçue : le texte en sera extrait." : "") + "</p></div>";
      return;
    }
    if (!vue.length) { box.innerHTML = '<p class="petit">Aucune note ne correspond à « ' + esc(q) + " ».</p>"; return; }

    box.innerHTML = vue.map(function (n) {
      var src = n.fichier ? "/_blob/" + n.fichier : "";
      return '<article class="perso-note card" data-id="' + esc(n.id) + '">' +
        (src ? '<a class="perso-vignette" href="' + esc(src) + '" target="_blank" rel="noopener" title="Voir le document d\'origine"><img src="' + esc(src) + '" alt="Document d\'origine" loading="lazy"></a>' : "") +
        '<div class="perso-note-corps">' +
        '<div class="perso-note-tete"><h3>' + (esc(n.titre) || "Sans titre") + "</h3>" +
        (n.theme ? '<span class="pill">' + esc(n.theme) + "</span>" : "") +
        (n.source !== "ecrit" ? '<span class="pill perso-src">' + (n.source === "pdf" ? "PDF" : "Image") + "</span>" : "") +
        "</div>" +
        '<p class="petit perso-date">' + esc(jour(n.cree)) + (n.modifie && n.modifie.slice(0, 10) !== (n.cree || "").slice(0, 10) ? " · modifiée le " + esc(jour(n.modifie)) : "") + "</p>" +
        '<div class="perso-texte">' + esc(n.texte).replace(/\n/g, "<br>") + "</div>" +
        '<div class="row perso-actions"><button class="btn ghost small" data-act="modifier">Modifier</button>' +
        '<button class="btn ghost small" data-act="supprimer">Supprimer</button></div>' +
        "</div></article>";
    }).join("");

    $$(".perso-note", box).forEach(function (el) {
      var n = notes.filter(function (x) { return x.id === el.dataset.id; })[0];
      if (!n) return;
      var txt = $(".perso-texte", el);
      if (txt.scrollHeight > 260) {
        txt.classList.add("replie");
        var b = document.createElement("button");
        b.className = "btn ghost small perso-plus"; b.textContent = "Lire la suite";
        b.addEventListener("click", function () {
          txt.classList.toggle("replie");
          b.textContent = txt.classList.contains("replie") ? "Lire la suite" : "Réduire";
        });
        txt.after(b);
      }
      $$("[data-act]", el).forEach(function (b) {
        b.addEventListener("click", function () {
          if (b.dataset.act === "modifier") ouvrirEditeur(n);
          else if (b.dataset.sur) supprimer(n);
          else { b.dataset.sur = "1"; b.textContent = "Confirmer la suppression"; }
        });
      });
    });
  }

  /* ---------- Éditeur ---------- */
  function ouvrirEditeur(note, extrait) {
    edition = note || { id: uid(), titre: "", texte: "", theme: "", source: "ecrit", fichier: null, cree: "", modifie: "" };
    $("#persoTitre").value = edition.titre || "";
    $("#persoTheme").value = edition.theme || "";
    $("#persoTexte").value = edition.texte || "";
    $("#persoEditeur").hidden = false;
    $("#persoExtrait").hidden = !extrait;
    if (!extrait) { fichierEnCours = null; $("#persoApercu").removeAttribute("src"); }
    $("#persoEditeur").scrollIntoView({ block: "start", behavior: "smooth" });
    if (!extrait) $("#persoTitre").focus();
  }
  function fermerEditeur() {
    if (ctrl) { ctrl.abort(); ctrl = null; }
    $("#persoEditeur").hidden = true;
    $("#persoExtrait").hidden = true;
    $("#persoStop").hidden = true;
    edition = null; fichierEnCours = null;
  }

  function validerEditeur() {
    if (!edition) return;
    var titre = $("#persoTitre").value.trim();
    var texte = $("#persoTexte").value.trim();
    if (!titre && !texte) { alerter("Écris au moins un titre ou un peu de contenu."); return; }
    if (!titre) titre = texte.split("\n")[0].slice(0, 70);
    edition.titre = titre;
    edition.texte = texte;
    edition.theme = $("#persoTheme").value.trim();

    var btn = $("#persoEnregistrer");
    btn.disabled = true; btn.textContent = "Enregistrement…";
    var avant = fichierEnCours && cap.assets
      ? cap.assets.upload(fichierEnCours.blob, fichierEnCours.type ? { type: fichierEnCours.type } : undefined)
        .then(function (r) { edition.fichier = r.id; })
        .catch(function () { alerter("Le document d'origine n'a pas pu être conservé, mais le texte est bien enregistré."); })
      : Promise.resolve();

    avant.then(function () { return enregistrer(edition); })
      .then(function () { fermerEditeur(); })
      .catch(function () {})
      .then(function () { btn.disabled = false; btn.textContent = "Enregistrer"; });
  }

  /* ---------- Import et extraction ---------- */
  var CONSIGNE =
    "Tu transcris un document photographié ou scanné, apporté par une personne qui prépare un stage en lutte contre la cybercriminalité " +
    "(page de manuel de droit, notes de cours, arrêt, article de presse, fiche de procédure, notes manuscrites).\n\n" +
    "Transcris fidèlement et intégralement le texte en français, dans l'ordre où il apparaît. " +
    "Garde la structure : titres sur leur propre ligne, listes avec un tiret, paragraphes séparés par une ligne vide. " +
    "Si l'écriture est manuscrite, fais de ton mieux et note [?] après un mot incertain. " +
    "Ignore les éléments purement décoratifs, les numéros de page et les en-têtes répétés.\n\n" +
    "Réponds UNIQUEMENT avec le texte transcrit : pas d'introduction, pas de commentaire, pas de conclusion.";

  var MESSAGES = {
    cancelled: "Lecture arrêtée. Ce qui a déjà été lu est conservé ci-dessous.",
    not_granted: "Tu n'as pas autorisé ce site à utiliser Claude. Recharge la page pour qu'il te le redemande.",
    sampling_disabled: "Claude n'est pas disponible sur ce compte.",
    rate_limited: "Trop de demandes d'un coup, ou ta limite d'usage est atteinte. Réessaie un peu plus tard.",
    image_rejected: "Ce fichier n'a pas pu être lu. Essaie une photo plus nette, au format JPEG ou PNG.",
    images_unavailable: "L'envoi d'images n'est pas disponible ici.",
    refused: "Claude n'a pas pu transcrire ce document.",
    session_expired: "Ta session a expiré : reconnecte-toi puis réessaie.",
    empty_completion: "Aucun texte n'a été trouvé sur cette page."
  };

  function etatExtrait(titre, info) {
    var t = $("#persoExtraitTitre"), i = $("#persoExtraitInfo");
    if (t) t.textContent = titre;
    if (i) i.textContent = info;
  }

  function proposerTitre(texte) {
    var champ = $("#persoTitre");
    if (!champ || champ.value.trim()) return;
    var l = (texte || "").split("\n").filter(function (x) { return x.trim(); })[0] || "";
    champ.value = l.replace(/^[-#\u2022*\s]+/, "").slice(0, 70);
  }

  /* Un appel à Claude pour un lot d'images. `acquis` = texte déjà transcrit, gardé devant. */
  function lireLot(images, acquis, suffixe) {
    var ta = $("#persoTexte");
    return cap.sample(CONSIGNE + (suffixe || ""), {
      images: images,
      modelTier: "default",
      signal: ctrl.signal,
      onText: function (u) { ta.value = acquis + u.text; }
    }).then(function (res) {
      ta.value = acquis + res.text;
      return { texte: res.text, tronque: res.truncated };
    });
  }

  function lireImage(file) {
    if (!cap.images) return;
    if (cap.images.maxInputBytes && file.size > cap.images.maxInputBytes) {
      alerter("Cette image est trop lourde. Prends une photo de moins de " + Math.floor(cap.images.maxInputBytes / 1048576) + " Mo.");
      return;
    }
    fichierEnCours = { blob: file, type: null };
    ouvrirEditeur({ id: uid(), titre: "", texte: "", theme: "", source: "image", fichier: null, cree: "", modifie: "" }, true);
    $("#persoApercu").src = URL.createObjectURL(file);
    $("#persoTexte").value = "";
    $("#persoStop").hidden = false;
    etatExtrait("L'IA lit ton document\u2026", "Cela prend quelques secondes. Tu pourras tout corriger ensuite.");
    ctrl = new AbortController();

    lireLot([file], "").then(function (r) {
      $("#persoStop").hidden = true; ctrl = null;
      etatExtrait("Texte extrait", r.tronque
        ? "Le document était long : la fin manque peut-être. Complète à la main si besoin."
        : "Relis et corrige si besoin, puis enregistre.");
      proposerTitre(r.texte);
      $("#persoTitre").focus();
    }).catch(function (e) {
      $("#persoStop").hidden = true; ctrl = null;
      if (e && e.text) $("#persoTexte").value = e.text;
      etatExtrait(e && e.code === "cancelled" ? "Lecture arrêtée" : "Extraction interrompue",
        (MESSAGES[e && e.code]) || "La lecture a échoué. Réessaie, ou écris la note à la main.");
    });
  }

  function chargerPdfJs() {
    if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
    return new Promise(function (ok, ko) {
      var s = document.createElement("script");
      s.src = PDFJS + "pdf.min.js";
      s.onload = function () {
        if (!window.pdfjsLib) return ko(new Error("pdfjs"));
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS + "pdf.worker.min.js";
        ok(window.pdfjsLib);
      };
      s.onerror = function () { ko(new Error("pdfjs")); };
      document.head.appendChild(s);
    });
  }

  /* Rend les pages `de`..`a` (incluses) en images JPEG. */
  function rendrePages(pdf, de, a, apercu) {
    var suite = Promise.resolve([]);
    var faire = function (p) {
      suite = suite.then(function (acc) {
        return pdf.getPage(p).then(function (page) {
          var vp = page.getViewport({ scale: 1.6 });
          var largeur = Math.min(vp.width, 1500);
          var vp2 = page.getViewport({ scale: 1.6 * (largeur / vp.width) });
          var c = document.createElement("canvas");
          c.width = Math.round(vp2.width); c.height = Math.round(vp2.height);
          return page.render({ canvasContext: c.getContext("2d"), viewport: vp2 }).promise.then(function () {
            if (apercu && p === de && $("#persoApercu")) $("#persoApercu").src = c.toDataURL("image/jpeg", 0.6);
            return new Promise(function (ok) {
              c.toBlob(function (b) { acc.push(b); c.width = c.height = 0; ok(acc); }, "image/jpeg", 0.82);
            });
          });
        });
      });
    };
    for (var p = de; p <= a; p++) faire(p);
    return suite;
  }

  function lirePdf(file) {
    if (!cap.images) return;
    fichierEnCours = { blob: file, type: "application/pdf" };
    ouvrirEditeur({ id: uid(), titre: "", texte: "", theme: "", source: "pdf", fichier: null, cree: "", modifie: "" }, true);
    $("#persoApercu").removeAttribute("src");
    $("#persoTexte").value = "";
    $("#persoStop").hidden = false;
    etatExtrait("Préparation du PDF\u2026", "Ouverture du document.");
    ctrl = new AbortController();

    chargerPdfJs()
      .then(function (lib) { return file.arrayBuffer().then(function (buf) { return lib.getDocument({ data: buf }).promise; }); })
      .then(function (pdf) {
        var total = pdf.numPages;
        var limite = Math.min(total, PLAFOND_PDF);
        var parLot = Math.max(1, Math.min(4, (cap.images && cap.images.maxCount) || 4));
        var acquis = "", tronque = false, premierLot = true;

        function lot(debut) {
          if (debut > limite || (ctrl && ctrl.signal.aborted)) return Promise.resolve();
          var fin = Math.min(debut + parLot - 1, limite);
          etatExtrait(
            limite > 1 ? "Lecture des pages " + debut + (fin > debut ? " à " + fin : "") + " sur " + limite + "\u2026"
                       : "L'IA lit ton document\u2026",
            "Le texte s'ajoute au fur et à mesure. Tu peux arrêter à tout moment : ce qui est déjà lu est gardé."
          );
          var montrer = premierLot;
          return rendrePages(pdf, debut, fin, montrer).then(function (images) {
            var suffixe = limite > parLot
              ? "\n\nIl s'agit des pages " + debut + " à " + fin + " d'un document de " + limite +
                " pages, transcrites à la suite des précédentes : enchaîne directement, sans rappeler le numéro des pages."
              : "";
            return lireLot(images, acquis, suffixe).then(function (r) {
              if (r.tronque) tronque = true;
              if (premierLot) { premierLot = false; proposerTitre(r.texte); }
              acquis = acquis + r.texte + "\n\n";
              return lot(fin + 1);
            });
          });
        }

        return lot(1).then(function () {
          $("#persoStop").hidden = true;
          var arrete = !!(ctrl && ctrl.signal.aborted);
          ctrl = null;
          $("#persoTexte").value = acquis.trim();
          if (arrete) { etatExtrait("Lecture arrêtée", "Ce qui a été lu est conservé ci-dessous."); return; }
          etatExtrait("Texte extrait",
            (total > limite
              ? "Ce PDF a " + total + " pages : les " + limite + " premières ont été lues. "
              : (limite > 1 ? limite + " pages lues. " : "")) +
            (tronque ? "Une page était très longue : vérifie la fin. " : "") +
            "Relis et corrige si besoin, puis enregistre.");
          $("#persoTitre").focus();
        });
      })
      .catch(function (e) {
        $("#persoStop").hidden = true; ctrl = null;
        var ta = $("#persoTexte");
        if (e && e.text && !ta.value) ta.value = e.text;
        if (e && e.code) {
          etatExtrait(e.code === "cancelled" ? "Lecture arrêtée" : "Extraction interrompue",
            (MESSAGES[e.code] || "La lecture a échoué.") + (ta.value ? " Ce qui a déjà été lu est conservé." : ""));
        } else {
          etatExtrait("PDF illisible", "Ce PDF n'a pas pu être ouvert. Tu peux écrire la note à la main, ou en faire une photo.");
        }
      });
  }

  /* ---------- Branchements ---------- */
  function after() {
    majEntete();
    rendre();

    $("#persoNouveau").addEventListener("click", function () { ouvrirEditeur(null); });
    $("#persoEnregistrer").addEventListener("click", validerEditeur);
    $("#persoAnnuler").addEventListener("click", fermerEditeur);
    $("#persoStop").addEventListener("click", function () { if (ctrl) ctrl.abort(); });

    brancherJeux();
    $("#persoJouer").addEventListener("click", JEUX.ouvrir);

    $("#persoImage").addEventListener("click", function () { $("#persoFichierImg").click(); });
    $("#persoPdf").addEventListener("click", function () { $("#persoFichierPdf").click(); });
    $("#persoFichierImg").addEventListener("change", function (e) {
      var f = e.target.files && e.target.files[0]; e.target.value = "";
      if (f) lireImage(f);
    });
    $("#persoFichierPdf").addEventListener("change", function (e) {
      var f = e.target.files && e.target.files[0]; e.target.value = "";
      if (f) lirePdf(f);
    });

    var rech = $("#persoRecherche"), t;
    rech.addEventListener("input", function () { clearTimeout(t); t = setTimeout(rendre, 150); });

    if (cap.images && cap.images.mediaTypes && cap.images.mediaTypes.length) {
      $("#persoFichierImg").accept = cap.images.mediaTypes.join(",");
    }
  }

  /* ---------- Révision de mes notes : source branchée sur le moteur partagé ---------- */
  function majBoutonJeu() {
    var b = $("#persoJouer"); if (!b) return;
    b.hidden = !(cap.sample && notes.length);
  }

  function melanger(t) { return JEUX.melanger(t); }

  function themesExistants() {
    var vus = {}, out = [];
    notes.forEach(function (n) { if (n.theme && !vus[n.theme]) { vus[n.theme] = 1; out.push(n.theme); } });
    return out.sort();
  }

  function optionsNotes(mode) {
    if (mode === "trous" || mode === "reciter") {
      if (!notes.length) return '<option value="">Aucune note</option>';
      return '<option value="">Au hasard (3 notes)</option>' + notes.map(function (n) {
        return '<option value="n:' + esc(n.id) + '">' + esc(n.titre || "Sans titre") + "</option>";
      }).join("");
    }
    var opts = '<option value="">Toutes mes notes (' + notes.length + ")</option>";
    if (notes.length > 5) opts += '<option value="recentes">Mes 5 notes les plus récentes</option>';
    var th = themesExistants();
    if (th.length) {
      opts += '<optgroup label="Par thème">' + th.map(function (t) {
        var n = notes.filter(function (x) { return x.theme === t; }).length;
        return '<option value="t:' + esc(t) + '">' + esc(t) + " (" + n + ")</option>";
      }).join("") + "</optgroup>";
    }
    if (notes.length > 1) {
      opts += '<optgroup label="Une note en particulier">' + notes.map(function (n) {
        return '<option value="n:' + esc(n.id) + '">' + esc(n.titre || "Sans titre") + "</option>";
      }).join("") + "</optgroup>";
    }
    return opts;
  }

  function choisirNotes(choix) {
    if (!choix) return notes.slice();
    if (choix === "recentes") return notes.slice(0, 5);
    if (choix.indexOf("t:") === 0) {
      var t = choix.slice(2);
      return notes.filter(function (n) { return n.theme === t; });
    }
    if (choix.indexOf("n:") === 0) {
      var id = choix.slice(2);
      return notes.filter(function (n) { return n.id === id; });
    }
    return notes.slice();
  }

  function matiere(choix) {
    var choisies = melanger(choisirNotes(choix));
    var budget = 14000, bouts = [], total = 0;
    for (var i = 0; i < choisies.length; i++) {
      var n = choisies[i];
      var t = (n.titre ? n.titre + "\n" : "") + (n.texte || "");
      if (t.length > 3000) t = t.slice(0, 3000) + "…";
      if (total + t.length > budget) { if (bouts.length) break; t = t.slice(0, budget); }
      bouts.push("--- " + (n.titre || "Note") + (n.theme ? " (" + n.theme + ")" : "") + " ---\n" + (n.texte || ""));
      total += t.length;
    }
    return bouts.join("\n\n");
  }

  function textesNotes(choix) {
    var liste = choisirNotes(choix).map(function (n) { return { titre: n.titre || "Ma note", texte: n.texte || "" }; });
    return choix && choix.indexOf("n:") === 0 ? liste : melanger(liste).slice(0, 3);
  }

  function brancherJeux() {
    JEUX.monter({
      sample: cap.sample,
      options: optionsNotes,
      matiere: matiere,
      textes: textesNotes,
      titre: "Me tester sur mes notes",
      intro: "Les questions sont créées à partir de ce que tu as écrit, et changent à chaque fois.",
      corpus: "les notes personnelles d'une personne qui prépare un stage sur la cybercriminalité",
      corpusCourt: "ses propres notes",
      ceContenu: "ce qui est écrit dans ces notes",
      tropCourt: "Cette sélection est trop courte. Choisis « Toutes mes notes », ou écris d'abord quelques notes.",
      pasDeSuite: "Tes notes ne contiennent pas encore de suite d'étapes repérable. Essaie le QCM, ou ajoute une note qui décrit un déroulement.",
      pasDeTexte: "Écris d'abord une note assez longue pour en faire un texte à trous."
    });
  }

  window.PERSO = { html: html, after: after };
  initCapacites();
})();
