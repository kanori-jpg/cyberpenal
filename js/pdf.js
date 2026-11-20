/* Fiches de révision en PDF (jsPDF). En ligne : enregistrement via la capacité « downloads »
   (le visiteur confirme). En local : téléchargement direct par le navigateur. */
window.PDF = (function () {
  "use strict";
  var dl = null;
  if (window.claude && typeof window.claude.use === "function") {
    window.claude.use("downloads").then(function (d) { dl = d; }).catch(function () { dl = null; });
  }

  /* Les polices standard de jsPDF ne couvrent que le jeu Windows-1252 : on remplace le reste. */
  function propre(s) {
    return String(s == null ? "" : s)
      .replace(/≤/g, "<=").replace(/≥/g, ">=").replace(/→/g, "->").replace(/←/g, "<-")
      .replace(/[✓✔]/g, "v").replace(/ | /g, " ").replace(/[‐-‒]/g, "-");
  }

  function doc() {
    var J = window.jspdf && window.jspdf.jsPDF;
    if (!J) throw new Error("jsPDF indisponible");
    var d = new J({ unit: "mm", format: "a4" });
    var st = { d: d, y: 18, m: 16, w: 210 - 32 };
    return st;
  }
  function saut(st, h) { if (st.y + h > 280) { st.d.addPage(); st.y = 18; } }
  function texte(st, t, o) {
    o = o || {};
    var d = st.d;
    d.setFont(o.mono ? "courier" : (o.serif ? "times" : "helvetica"), o.gras ? "bold" : (o.ital ? "italic" : "normal"));
    d.setFontSize(o.taille || 10.5);
    d.setTextColor.apply(d, o.couleur || [20, 26, 36]);
    var lignes = d.splitTextToSize(propre(t), st.w - (o.retrait || 0));
    var h = (o.taille || 10.5) * 0.42;
    lignes.forEach(function (l) { saut(st, h + 1); d.text(l, st.m + (o.retrait || 0), st.y); st.y += h + 0.9; });
    st.y += o.apres == null ? 1.5 : o.apres;
  }
  function filet(st) { saut(st, 6); st.d.setDrawColor(200, 196, 186); st.d.line(st.m, st.y, st.m + st.w, st.y); st.y += 5; }
  function etiquette(st, t) { texte(st, t.toUpperCase(), { taille: 8, gras: true, couleur: [15, 122, 92], apres: 0.5 }); }

  function ecrireFiche(st, f) {
    var cit = (window.CITATIONS || {})[f.id];
    texte(st, f.code + " — " + (f.code === "Code pénal" ? "art. " : "") + f.art, { mono: true, taille: 10, couleur: [15, 122, 92], apres: 0.5 });
    texte(st, f.titre, { serif: true, gras: true, taille: 15, apres: 2.5 });
    if (cit) { etiquette(st, "La lettre du texte"); texte(st, "« " + cit + " »", { serif: true, ital: true, taille: 10.5, retrait: 3, apres: 3 }); }
    etiquette(st, "Élément matériel"); texte(st, f.materiel);
    etiquette(st, "Élément moral"); texte(st, f.moral);
    etiquette(st, "Peines");
    f.peines.forEach(function (p) { texte(st, "• " + p[0] + " : " + p[1], { retrait: 2, apres: 0.6 }); });
    st.y += 1.5;
    etiquette(st, "Tentative"); texte(st, f.tentative ? "Punissable" : "Non prévue par le texte (ou sans objet)");
    if (f.notes) { etiquette(st, "À savoir"); texte(st, f.notes); }
    texte(st, "Version en vigueur : " + f.version + " · Source : Légifrance, relu le " + window.LF.consult + ".", { taille: 8, couleur: [91, 99, 114] });
  }

  function entete(st, titre, sous) {
    texte(st, "Cyberpénal", { mono: true, taille: 9, couleur: [91, 99, 114], apres: 0.5 });
    texte(st, titre, { serif: true, gras: true, taille: 20, apres: 1 });
    if (sous) texte(st, sous, { taille: 10, couleur: [91, 99, 114], apres: 3 });
    filet(st);
  }

  function enregistrer(st, nom) {
    var blob = st.d.output("blob");
    if (dl) return dl.save({ filename: nom, data: blob }).then(function () { return "ok"; }, function (e) {
      if (e && e.code === "declined") return "refus";
      throw e;
    });
    var url = URL.createObjectURL(blob), a = document.createElement("a");
    a.href = url; a.download = nom; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
    return Promise.resolve("ok");
  }

  function fiche(f) {
    var st = doc(); entete(st, "Fiche infraction", ""); ecrireFiche(st, f);
    return enregistrer(st, "fiche-" + f.id + ".pdf");
  }
  function theme(id) {
    var T = window.THEMES.filter(function (t) { return t.id === id; })[0];
    var fs = window.INFRACTIONS.filter(function (f) { return !id || f.theme === id; });
    var st = doc();
    entete(st, T ? T.nom : "Toutes les fiches infractions", fs.length + " fiches · textes relus sur Légifrance le " + window.LF.consult);
    fs.forEach(function (f, i) { if (i) filet(st); ecrireFiche(st, f); });
    return enregistrer(st, "fiches-" + (id || "toutes") + ".pdf");
  }
  function cours(c) {
    var st = doc(); entete(st, c.titre, c.resume);
    var tmp = document.createElement("div"); tmp.innerHTML = c.contenu;
    Array.prototype.forEach.call(tmp.children, function (el) {
      var tag = el.tagName;
      if (tag === "H3") { st.y += 2; texte(st, el.textContent, { serif: true, gras: true, taille: 12.5 }); }
      else if (tag === "UL" || tag === "OL") Array.prototype.forEach.call(el.children, function (li) { texte(st, "• " + li.textContent.replace(/\s+/g, " ").trim(), { retrait: 2, apres: 0.6 }); });
      else if (tag === "TABLE") Array.prototype.forEach.call(el.rows, function (tr, i) {
        texte(st, Array.prototype.map.call(tr.cells, function (td) { return td.textContent.trim(); }).join("  |  "), { gras: i === 0, taille: 9.5, apres: 0.8 });
      });
      else texte(st, el.textContent.replace(/\s+/g, " ").trim());
    });
    filet(st); etiquette(st, "À retenir");
    c.retenir.forEach(function (r) { texte(st, "• " + r, { retrait: 2, apres: 0.6 }); });
    return enregistrer(st, "cours-" + c.id + ".pdf");
  }
  function peines() {
    var st = doc(); entete(st, "Tableau des peines", "Peines maximales encourues par une personne physique · Légifrance, " + window.LF.consult);
    window.THEMES.forEach(function (t) {
      var fs = window.INFRACTIONS.filter(function (f) { return f.theme === t.id; });
      if (!fs.length) return;
      st.y += 2; texte(st, t.nom, { serif: true, gras: true, taille: 12.5 });
      fs.forEach(function (f) {
        texte(st, f.art + " — " + f.titre, { gras: true, taille: 9.5, apres: 0.3 });
        f.peines.forEach(function (p) { texte(st, p[0] + " : " + p[1], { taille: 9, retrait: 4, apres: 0.2 }); });
        st.y += 1.2;
      });
    });
    return enregistrer(st, "tableau-des-peines.pdf");
  }

  var chargement = null;
  function charger() {
    if (window.jspdf && window.jspdf.jsPDF) return Promise.resolve();
    if (!chargement) chargement = new Promise(function (ok, ko) {
      var s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
      s.onload = function () { ok(); }; s.onerror = function () { chargement = null; ko(new Error("jsPDF")); };
      document.head.appendChild(s);
    });
    return chargement;
  }
  /* préchargement discret, une fois la page affichée */
  window.addEventListener("load", function () { setTimeout(function () { charger().catch(function () {}); }, 4000); });

  return { fiche: fiche, theme: theme, cours: cours, peines: peines, charger: charger, pret: function () { return !!(window.jspdf && window.jspdf.jsPDF); } };
})();
