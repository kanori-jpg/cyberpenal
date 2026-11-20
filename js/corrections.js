/* Cyberpénal — corrections faites directement sur les fiches.
   Chaque correction remplace le texte d'origine partout (fiche, listes, PDF, jeux).
   Site publié : base partagée de l'artifact (collection « corrections »), lisible par Claude.
   Ailleurs : stockage du navigateur. Une copie locale sert aussi de cache au démarrage. */
(function () {
  "use strict";
  var KEY = "cyberpenal.corrections", COLL = "corrections";
  var INF = window.INFRACTIONS, CIT = window.CITATIONS || (window.CITATIONS = {});
  var CHAMPS = ["titre", "citation", "materiel", "moral", "peines", "notes"];
  var orig = {}, corr = {}, db = null, mode = "local";

  function trouve(id) { for (var i = 0; i < INF.length; i++) if (INF[i].id === id) return INF[i]; return null; }
  function peinesTexte(p) { return (p || []).map(function (x) { return x[0] + " : " + x[1]; }).join("\n"); }
  function peinesListe(t) {
    return String(t || "").split("\n").map(function (l) { return l.trim(); }).filter(Boolean).map(function (l) {
      var i = l.indexOf(" : ");
      return i < 0 ? ["", l] : [l.slice(0, i).trim(), l.slice(i + 3).trim()];
    });
  }
  /* texte d'origine d'une fiche, sous forme éditable */
  function origine(f) {
    if (!orig[f.id]) orig[f.id] = { titre: f.titre, citation: CIT[f.id] || "", materiel: f.materiel, moral: f.moral, peines: peinesTexte(f.peines), notes: f.notes || "" };
    return orig[f.id];
  }
  INF.forEach(origine);

  function appliquer() {
    INF.forEach(function (f) {
      var o = orig[f.id], c = corr[f.id] || {};
      function v(k) { return c[k] != null ? c[k] : o[k]; }
      f.titre = v("titre"); f.materiel = v("materiel"); f.moral = v("moral"); f.notes = v("notes");
      f.peines = c.peines != null ? peinesListe(c.peines) : peinesListe(o.peines);
      var cit = v("citation"); if (cit) CIT[f.id] = cit; else delete CIT[f.id];
    });
  }
  function lireLocal() { try { return JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { return {}; } }
  function ecrireLocal() { try { localStorage.setItem(KEY, JSON.stringify(corr)); } catch (e) {} }
  function rafraichir() { appliquer(); if (window.CP_RERENDER && !window.CP_EDITION) window.CP_RERENDER(); }

  corr = lireLocal(); appliquer();

  /* ne garde que les champs vraiment changés */
  function nettoyer(id, valeurs) {
    var o = orig[id], c = {};
    CHAMPS.forEach(function (k) {
      if (valeurs[k] == null) return;
      var nv = k === "peines" ? peinesTexte(peinesListe(valeurs[k])) : String(valeurs[k]).trim();
      if (nv !== String(o[k] || "").trim()) c[k] = nv;
    });
    return c;
  }

  window.CORRECTIONS = {
    origine: function (id) { var f = trouve(id); return f ? origine(f) : null; },
    actuel: function (id) {
      var f = trouve(id); if (!f) return null;
      return { titre: f.titre, citation: CIT[id] || "", materiel: f.materiel, moral: f.moral, peines: peinesTexte(f.peines), notes: f.notes || "" };
    },
    info: function (id) { return corr[id] || null; },
    mode: function () { return mode; },
    enregistrer: function (id, valeurs) {
      var c = nettoyer(id, valeurs);
      if (!Object.keys(c).length) return this.annuler(id);
      c.modifie = new Date().toISOString();
      corr[id] = c; ecrireLocal(); rafraichir();
      if (db) return db.collection(COLL).doc(id).set(c);
      return Promise.resolve();
    },
    annuler: function (id) {
      delete corr[id]; ecrireLocal(); rafraichir();
      if (db) return db.collection(COLL).doc(id).delete();
      return Promise.resolve();
    }
  };

  /* base partagée de l'artifact, si le site est publié */
  if (window.claude && typeof window.claude.use === "function") {
    window.claude.use("db").then(function (d) {
      if (!d) return;
      db = d; mode = "sync";
      db.collection(COLL).onSnapshot(function (snap) {
        var n = {};
        snap.docs.forEach(function (doc) { n[doc.id] = doc.data() || {}; });
        if (snap.metadata && snap.metadata.fromCache && !snap.docs.length) return;
        corr = n; ecrireLocal(); rafraichir();
      }, function () { mode = "local"; });
    }).catch(function () {});
  }
})();
