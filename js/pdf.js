/* Fiches de révision en PDF (jsPDF), style « carte mémo » : gros numéro d'article, blocs de couleur,
   échelle des peines dessinée. Version Claude : enregistrement via la capacité « downloads »
   (le visiteur confirme). Ailleurs : téléchargement direct par le navigateur. */
window.PDF = (function () {
  "use strict";
  var dl = null;
  if (window.claude && typeof window.claude.use === "function") {
    window.claude.use("downloads").then(function (d) { dl = d; }).catch(function () { dl = null; });
  }

  /* ---------- Palette (celle du site, version imprimable) ---------- */
  var C = {
    encre: [26, 29, 46], gris: [110, 112, 128], filet: [222, 222, 230],
    rose: [255, 45, 122], roseClair: [255, 156, 196], roseFond: [255, 228, 236], roseTexte: [163, 18, 74],
    nuit: [20, 26, 46], lilas: [239, 232, 255], lilasTexte: [76, 29, 149],
    jaune: [255, 243, 196], jauneTexte: [122, 90, 0], grisFond: [244, 244, 247], blanc: [255, 255, 255],
    barres: [[255, 194, 214], [255, 122, 168], [255, 45, 122]]
  };
  var M = 16, W = 178, BAS = 280, HAUT = 20;

  /* Les polices standard de jsPDF ne couvrent que le jeu Windows-1252 : on remplace le reste. */
  function propre(s) {
    return String(s == null ? "" : s)
      .replace(/≤/g, "<=").replace(/≥/g, ">=").replace(/→/g, "->").replace(/←/g, "<-")
      .replace(/[✓✔]/g, "v").replace(/[✳✦◆]/g, "*").replace(/[  ]/g, " ").replace(/[‐-‒]/g, "-");
  }
  function pt(s) { return s * 0.3528; }
  function lh(s) { return pt(s) * 1.38; }

  function doc(rubrique) {
    var J = window.jspdf && window.jspdf.jsPDF;
    if (!J) throw new Error("jsPDF indisponible");
    var st = { d: new J({ unit: "mm", format: "a4" }), y: HAUT, rubrique: rubrique };
    bandeau(st);
    return st;
  }
  function police(st, o) {
    var d = st.d;
    d.setFont(o.serif ? "times" : "helvetica", o.gras && o.ital ? "bolditalic" : o.gras ? "bold" : o.ital ? "italic" : "normal");
    d.setFontSize(o.taille || 9.5);
    d.setTextColor.apply(d, o.couleur || C.encre);
  }
  function couper(st, t, largeur, o) { police(st, o); return st.d.splitTextToSize(propre(t), largeur); }
  /* petit en-tête en haut de chaque page */
  function bandeau(st) {
    var d = st.d;
    police(st, { taille: 6.5, gras: true, couleur: C.gris });
    d.setCharSpace(0.6);
    d.text("CYBERPÉNAL", M, 12);
    var r = propre(st.rubrique.toUpperCase());
    d.text(r, M + W - d.getTextWidth(r) - 0.6 * r.length * 1, 12);
    d.setCharSpace(0);
    st.y = HAUT;
  }
  function nouvellePage(st) { st.d.addPage(); bandeau(st); }
  function saut(st, h) { if (st.y + h > BAS) nouvellePage(st); }
  function fond(st, x, y, w, h, couleur, bord) {
    var d = st.d;
    if (couleur) { d.setFillColor.apply(d, couleur); }
    if (bord) { d.setDrawColor.apply(d, bord); d.setLineWidth(0.35); }
    d.roundedRect(x, y, w, h, 3, 3, couleur && bord ? "FD" : couleur ? "F" : "S");
  }
  /* écrit des lignes déjà coupées ; renvoie la hauteur utilisée */
  function lignes(st, ls, x, y, o) {
    police(st, o);
    ls.forEach(function (l, i) { st.d.text(l, x, y + pt(o.taille || 9.5) * 0.82 + i * lh(o.taille || 9.5)); });
    return ls.length * lh(o.taille || 9.5);
  }
  function etiquette(st, t, x, y, couleur) {
    police(st, { taille: 6.5, gras: true, couleur: couleur });
    st.d.setCharSpace(0.5); st.d.text(propre(t.toUpperCase()), x, y + 2.2); st.d.setCharSpace(0);
    return 4.2;
  }
  /* Un bloc de couleur : une étiquette + un texte. prep() mesure, dessin(y, h) dessine. */
  function bloc(st, largeur, couleur, label, couleurLabel, texte, o) {
    var P = 4, ls = couper(st, texte, largeur - 2 * P, o);
    var h = P + 4.2 + ls.length * lh(o.taille || 9.5) + P - 1;
    return { h: h, dessin: function (x, y, hh) {
      fond(st, x, y, largeur, hh, couleur);
      etiquette(st, label, x + P, y + P, couleurLabel);
      lignes(st, ls, x + P, y + P + 4.2, o);
    } };
  }
  /* Plusieurs blocs côte à côte, de même hauteur */
  function rangee(st, blocs, ecart) {
    var h = Math.max.apply(null, blocs.map(function (b) { return b.h; }));
    saut(st, h);
    var x = M;
    blocs.forEach(function (b) { b.dessin(x, st.y, h); x += b.largeur + ecart; });
    st.y += h + ecart;
  }
  function avecLargeur(b, l) { b.largeur = l; return b; }
  /* Texte courant, coupé d'une page à l'autre ligne par ligne */
  function para(st, t, o) {
    o = o || {};
    var x = M + (o.retrait || 0), ls = couper(st, t, W - (o.retrait || 0), o), h = lh(o.taille || 9.5);
    ls.forEach(function (l, i) {
      saut(st, h);
      if (i === 0 && o.puce) { st.d.setFillColor.apply(st.d, C.rose); st.d.circle(x - 3, st.y + h * 0.42, 0.75, "F"); }
      lignes(st, [l], x, st.y, o); st.y += h;
    });
    st.y += o.apres == null ? 2 : o.apres;
  }
  /* Pied de page : source et numéro, sur toutes les pages */
  function pieds(st) {
    var d = st.d, n = d.getNumberOfPages();
    for (var i = 1; i <= n; i++) {
      d.setPage(i);
      d.setDrawColor.apply(d, C.filet); d.setLineWidth(0.2); d.line(M, 286, M + W, 286);
      police(st, { taille: 6.5, couleur: C.gris });
      d.text(propre("Cyberpénal · textes relus sur Légifrance le " + window.LF.consult), M, 290);
      d.text(i + " / " + n, M + W, 290, { align: "right" });
    }
  }

  /* ---------- Une fiche ---------- */
  /* durée d'une vraie peine (« 5 ans d'emprisonnement… », « 5 ans et 150 000 € ») ; 0 pour une règle de calcul */
  function ans(t) { var m = /^(\d+)\s*ans(?:\s+(?:d'emprisonnement|de détention|de réclusion|et)|\s*$)/.exec(t || ""); return m ? +m[1] : (/^réclusion criminelle à perpétuité/.test(t || "") ? 40 : 0); }
  function decouperPeine(t) {
    var a = /^(\d+\s*ans)\s+(?:d'emprisonnement|de détention|de réclusion)/.exec(t || ""), am = a && /([\d  .]+)\s*€/.exec(t);
    return { gros: a ? a[1].replace(/\s+/, " ") : "", amende: am ? am[1].trim() + " €" : "" };
  }
  function nomTheme(id) { var t = (window.THEMES || []).filter(function (x) { return x.id === id; })[0]; return t ? t.nom : ""; }

  function ecrireFiche(st, f) {
    var d = st.d, cit = (window.CITATIONS || {})[f.id];
    /* gros numéro */
    var num = f.art, taille = num.length <= 8 ? 44 : num.length <= 13 ? 32 : 24;
    var lsNum = couper(st, num, W, { taille: taille, gras: true });
    saut(st, lsNum.length * lh(taille) + 20);
    st.y += lignes(st, lsNum, M - 0.8, st.y - 2, { taille: taille, gras: true, couleur: C.rose }) - 1;
    /* titre */
    var lsT = couper(st, f.titre.toUpperCase(), W, { taille: 13, gras: true });
    st.y += lignes(st, lsT, M, st.y, { taille: 13, gras: true, couleur: C.encre }) + 0.8;
    st.y += lignes(st, [propre(f.code + " · " + nomTheme(f.theme) + " · version du " + f.version)], M, st.y, { taille: 7.5, couleur: C.gris }) + 4;

    /* citation + peine de base */
    var p0 = f.peines[0] || ["", ""], dp = decouperPeine(p0[1]), lN = 58, lC = W - lN - 5;
    var bCit = avecLargeur(bloc(st, cit ? lC : W - lN - 5, C.lilas, "La lettre du texte", C.lilasTexte, cit ? "« " + cit + " »" : f.titre, { serif: true, ital: true, taille: 9.5 }), cit ? lC : W - lN - 5);
    var lsP = dp.gros ? [] : couper(st, p0[1], lN - 8, { taille: 8.5, gras: true });
    var hP = 4 + 4.2 + (dp.gros ? 9 + (dp.amende ? 5 : 0) : lsP.length * lh(8.5)) + 7 + 3;
    var bP = { largeur: lN, h: hP, dessin: function (x, y, hh) {
      fond(st, x, y, lN, hh, C.nuit);
      etiquette(st, p0[0] && p0[0] !== "Base" ? "Peine" : "Peine de base", x + 4, y + 4, C.roseClair);
      var yy = y + 8.2;
      if (dp.gros) {
        police(st, { taille: 22, gras: true, couleur: C.rose }); d.text(propre(dp.gros), x + 4, yy + 7.2); yy += 9;
        if (dp.amende) { police(st, { taille: 10, gras: true, couleur: C.blanc }); d.text(propre(dp.amende), x + 4, yy + 3.5); yy += 5; }
      } else yy += lignes(st, lsP, x + 4, yy, { taille: 8.5, gras: true, couleur: C.blanc });
      police(st, { taille: 7.5, couleur: C.roseClair });
      d.text(f.tentative ? "Tentative punie" : "Tentative non prévue", x + 4, y + hh - 4);
    } };
    rangee(st, [bCit, bP], 5);

    /* éléments matériel et moral */
    var lM = (W - 5) / 2;
    rangee(st, [avecLargeur(bloc(st, lM, C.roseFond, "Élément matériel", C.roseTexte, f.materiel, { taille: 9 }), lM),
      avecLargeur(bloc(st, lM, C.jaune, "Élément moral", C.jauneTexte, f.moral, { taille: 9 }), lM)], 5);

    /* échelle des peines */
    var max = Math.max.apply(null, f.peines.map(function (p) { return ans(p[1]); }).concat([1]));
    var rangs = f.peines.map(function (p) { return ans(p[1]); }).filter(function (v, i, a) { return v && a.indexOf(v) === i; }).sort(function (a, b) { return a - b; });
    var lLab = 66, lBar = W - 8 - lLab - 4;
    var lignesP = f.peines.map(function (p) {
      var a = ans(p[1]);
      return { lab: couper(st, p[0], lLab, { taille: 8 }), val: couper(st, p[1], a ? lBar - 4 : lBar, { taille: 8, gras: true }), a: a };
    });
    var hE = 4 + 4.2 + lignesP.reduce(function (s, l) { return s + Math.max(l.lab.length * lh(8), (l.a ? 4.5 : 0) + l.val.length * lh(8)) + 2.5; }, 0) + 2;
    saut(st, hE);
    var y0 = st.y;
    fond(st, M, y0, W, hE, null, C.nuit);
    etiquette(st, "Échelle des peines", M + 4, y0 + 4, C.encre);
    var yy = y0 + 8.2;
    lignesP.forEach(function (l) {
      lignes(st, l.lab, M + 4, yy, { taille: 8, couleur: C.encre });
      var xb = M + 4 + lLab + 4, h = 0;
      if (l.a) {
        var r = rangs.indexOf(l.a), col = C.barres[Math.min(2, Math.round(r * 2 / Math.max(1, rangs.length - 1)))];
        if (rangs.length === 1) col = C.barres[2];
        d.setFillColor.apply(d, col); d.roundedRect(xb, yy + 0.4, Math.max(6, lBar * l.a / max), 2.6, 1.3, 1.3, "F"); h = 4.5;
      }
      lignes(st, l.val, xb, yy + h, { taille: 8, gras: true, couleur: C.encre });
      yy += Math.max(l.lab.length * lh(8), h + l.val.length * lh(8)) + 2.5;
    });
    st.y = y0 + hE + 5;

    /* à retenir */
    if (f.notes) rangee(st, [avecLargeur(bloc(st, W, C.grisFond, "À retenir", C.encre, f.notes, { taille: 9 }), W)], 5);
  }

  /* ---------- Enregistrer ---------- */
  function enregistrer(st, nom) {
    pieds(st);
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
    var st = doc("Fiche infraction · " + nomTheme(f.theme)); ecrireFiche(st, f);
    return enregistrer(st, "fiche-" + f.id + ".pdf");
  }
  function theme(id) {
    var T = window.THEMES.filter(function (t) { return t.id === id; })[0];
    var fs = window.INFRACTIONS.filter(function (f) { return !id || f.theme === id; });
    var st = doc(T ? "Fiches · " + T.nom : "Toutes les fiches infractions");
    fs.forEach(function (f, i) { if (i) { nouvellePage(st); } if (!id) st.rubrique = "Fiches · " + nomTheme(f.theme); ecrireFiche(st, f); });
    return enregistrer(st, "fiches-" + (id || "toutes") + ".pdf");
  }

  /* ---------- Un cours ---------- */
  function grandTitre(st, sur, titre, sous) {
    if (sur) st.y += lignes(st, [propre(sur.toUpperCase())], M, st.y, { taille: 7.5, gras: true, couleur: C.rose }) + 1;
    var ls = couper(st, titre.toUpperCase(), W, { taille: 20, gras: true });
    st.y += lignes(st, ls, M, st.y, { taille: 20, gras: true, couleur: C.encre }) + 2;
    st.d.setFillColor.apply(st.d, C.rose); st.d.rect(M, st.y, 22, 1.2, "F"); st.y += 6;
    if (sous) rangee(st, [avecLargeur(bloc(st, W, C.lilas, "En bref", C.lilasTexte, sous, { serif: true, ital: true, taille: 10 }), W)], 6);
  }
  function intertitre(st, t) {
    st.y += 2;
    var ls = couper(st, t, W - 6, { taille: 12, gras: true });
    saut(st, ls.length * lh(12) + 10);
    st.d.setFillColor.apply(st.d, C.rose); st.d.roundedRect(M, st.y + 1, 3, 3, 0.8, 0.8, "F");
    st.y += lignes(st, ls, M + 6, st.y, { taille: 12, gras: true, couleur: C.nuit }) + 2;
  }
  function tableau(st, el) {
    var rows = Array.prototype.slice.call(el.rows), n = Math.max.apply(null, rows.map(function (r) { return r.cells.length; }));
    var lc = W / n, P = 2.5;
    rows.forEach(function (tr, i) {
      var tete = i === 0 && (tr.cells[0].tagName === "TH" || el.tHead), o = { taille: 8.5, gras: !!tete };
      var cells = Array.prototype.map.call(tr.cells, function (td) { return couper(st, td.textContent.replace(/\s+/g, " ").trim(), lc - 2 * P, o); });
      var h = Math.max.apply(null, cells.map(function (c) { return c.length; })) * lh(8.5) + 2 * P;
      saut(st, h);
      st.d.setFillColor.apply(st.d, tete ? C.nuit : i % 2 ? C.grisFond : C.blanc);
      st.d.rect(M, st.y, W, h, "F");
      cells.forEach(function (c, k) { lignes(st, c, M + k * lc + P, st.y + P, { taille: 8.5, gras: !!tete, couleur: tete ? C.blanc : C.encre }); });
      st.y += h;
    });
    st.y += 4;
  }
  function cours(c) {
    var st = doc("Cours");
    var p = (window.PARTIES || []).filter(function (x) { return x.id === c.partie; })[0];
    grandTitre(st, p ? "Partie " + p.num + " · " + p.titre : "", c.titre, c.resume);
    var tmp = document.createElement("div"); tmp.innerHTML = c.contenu;
    Array.prototype.forEach.call(tmp.children, function (el) {
      var tag = el.tagName, txt = el.textContent.replace(/\s+/g, " ").trim();
      if (!txt && tag !== "TABLE") return;
      if (/^H[2-4]$/.test(tag)) intertitre(st, txt);
      else if (tag === "UL" || tag === "OL") { Array.prototype.forEach.call(el.children, function (li) { para(st, li.textContent.replace(/\s+/g, " ").trim(), { retrait: 6, puce: true, apres: 1.2 }); }); st.y += 1.5; }
      else if (tag === "TABLE") tableau(st, el);
      else if (tag === "DIV" && el.querySelector("table")) tableau(st, el.querySelector("table"));
      else if (/encadre/.test(el.className)) rangee(st, [avecLargeur(bloc(st, W, /attention/.test(el.className) ? C.jaune : C.roseFond, /attention/.test(el.className) ? "Attention" : "À noter", /attention/.test(el.className) ? C.jauneTexte : C.roseTexte, txt, { taille: 9 }), W)], 5);
      else para(st, txt);
    });
    /* à retenir : bloc bleu nuit */
    var items = (c.retenir || []).map(function (r) { return couper(st, r, W - 14, { taille: 9.5 }); });
    var h = 5 + 4.2 + items.reduce(function (s, l) { return s + l.length * lh(9.5) + 1.8; }, 0) + 3;
    saut(st, h); st.y += 2;
    fond(st, M, st.y, W, h, C.nuit);
    etiquette(st, "À retenir", M + 5, st.y + 5, C.roseClair);
    var yy = st.y + 9.2;
    items.forEach(function (ls) {
      st.d.setFillColor.apply(st.d, C.rose); st.d.circle(M + 6.5, yy + lh(9.5) * 0.42, 0.8, "F");
      yy += lignes(st, ls, M + 10, yy, { taille: 9.5, couleur: C.blanc }) + 1.8;
    });
    st.y += h + 4;
    return enregistrer(st, "cours-" + c.id + ".pdf");
  }

  /* ---------- Le tableau des peines ---------- */
  function peines() {
    var st = doc("Tableau des peines");
    grandTitre(st, "", "Tableau des peines", "Peines maximales encourues par une personne physique. Les personnes morales encourent en principe le quintuple de l'amende.");
    var lArt = 30, lSit = 74, lVal = W - lArt - lSit - 8;
    window.THEMES.forEach(function (t) {
      var fs = window.INFRACTIONS.filter(function (f) { return f.theme === t.id; });
      if (!fs.length) return;
      saut(st, 22); st.y += 2;
      fond(st, M, st.y, W, 8, C.nuit);
      police(st, { taille: 9.5, gras: true, couleur: C.blanc }); st.d.text(propre(t.nom), M + 4, st.y + 5.4);
      st.y += 10;
      fs.forEach(function (f, i) {
        var art = couper(st, f.art, lArt - 3, { taille: 8.5, gras: true });
        var tit = couper(st, f.titre, lSit + lVal, { taille: 8.5, gras: true });
        var ps = f.peines.map(function (p) { return { s: couper(st, p[0], lSit - 2, { taille: 8 }), v: couper(st, p[1], lVal, { taille: 8, gras: true }) }; });
        var h = 2 + Math.max(art.length * lh(8.5), tit.length * lh(8.5) + ps.reduce(function (s, p) { return s + Math.max(p.s.length, p.v.length) * lh(8) + 0.8; }, 0)) + 2;
        saut(st, h);
        if (i % 2) { st.d.setFillColor.apply(st.d, C.grisFond); st.d.rect(M, st.y, W, h, "F"); }
        lignes(st, art, M + 2, st.y + 2, { taille: 8.5, gras: true, couleur: C.rose });
        var yy = st.y + 2 + lignes(st, tit, M + lArt, st.y + 2, { taille: 8.5, gras: true, couleur: C.encre });
        ps.forEach(function (p) {
          lignes(st, p.s, M + lArt, yy, { taille: 8, couleur: C.gris });
          lignes(st, p.v, M + lArt + lSit + 8 - 6, yy, { taille: 8, gras: true, couleur: C.encre });
          yy += Math.max(p.s.length, p.v.length) * lh(8) + 0.8;
        });
        st.y += h;
      });
      st.y += 3;
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
