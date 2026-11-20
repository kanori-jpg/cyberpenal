/* Cybercriminalité et libertés fondamentales ; la Convention de Budapest lue avec le droit français.
   Idées tirées notamment du Module 7 « Cybercriminalité » de Media Defence (décembre 2020,
   licence CC BY-NC-SA 4.0), rédigées à nouveau et rattachées au droit français et européen. */
(function () {
  var nouvelles = [
  {
    id: "libertes", partie: "bases",
    titre: "Réprimer sans museler : cybercriminalité et libertés",
    resume: "Pourquoi une loi pénale du numérique doit être précise, nécessaire et proportionnée.",
    arts: ["421-2-5", "222-33-2-2", "226-2-1"],
    contenu: `
<p>Les lois contre la cybercriminalité protègent les personnes et les systèmes. Mais rédigées trop largement, elles peuvent servir à punir des opinions, à surveiller sans contrôle ou à faire taire des journalistes. Pour un enquêteur, c'est une question très concrète : une procédure fondée sur un texte trop flou, ou un acte d'enquête disproportionné, risque l'annulation.</p>

<h3>Le constat international</h3>
<p>Dès 2011, le Rapporteur spécial des Nations unies sur la liberté d'expression s'inquiétait de lois pénales appliquées à l'expression en ligne, ou créées pour elle, souvent justifiées par la réputation, la sécurité nationale ou le terrorisme, mais utilisées pour censurer. Il estimait que le droit international ne permet d'interdire qu'un nombre limité de formes d'expression : la pédopornographie, l'incitation directe et publique au génocide, l'appel à la haine, l'atteinte à la réputation (diffamation), et l'incitation à la discrimination, à l'hostilité ou à la violence. Même dans ces cas, la loi doit être précise et contrôlée par un juge indépendant.</p>

<h3>Le test en trois étapes</h3>
<p>Une restriction à la liberté d'expression ou à la vie privée n'est admise que si elle est :</p>
<ul>
  <li><strong>prévue par une loi claire et précise</strong> (légalité) : chacun doit pouvoir savoir ce qui est interdit ;</li>
  <li><strong>poursuivant un but légitime</strong> (sécurité, protection des personnes, prévention des infractions) ;</li>
  <li><strong>nécessaire et proportionnée</strong> : il n'existe pas de moyen moins attentatoire pour atteindre ce but.</li>
</ul>
<p>C'est la grille de la Convention européenne des droits de l'homme (articles 8 et 10, paragraphes 2) et, en France, celle du Conseil constitutionnel, qui vérifie que les atteintes aux libertés sont « adaptées, nécessaires et proportionnées ».</p>

<h3>En France : le Conseil constitutionnel veille</h3>
<ul>
  <li><strong>2017</strong> : censure, deux fois, du délit de consultation habituelle de sites terroristes (voir <a href="#/arret/qpc-consultation">la fiche</a>).</li>
  <li><strong>2020</strong> : censure de l'essentiel de la loi « Avia » contre la haine en ligne, qui imposait aux plateformes de retirer en 24 heures, sous peine de sanction pénale, des contenus dont l'illicéité n'était pas toujours évidente (<a href="#/arret/avia">la fiche</a>).</li>
  <li><strong>2024</strong> : censure du délit d'« outrage en ligne » créé par la loi SREN, jugé trop dépendant du ressenti de la victime (<a href="#/arret/outrage-en-ligne">la fiche</a>).</li>
</ul>
<p>Le droit français garde en revanche des textes précis et contrôlés : apologie du terrorisme (<a class="art" href="#/infraction/421-2-5">421-2-5</a>), cyberharcèlement (<a class="art" href="#/infraction/222-33-2-2">222-33-2-2</a>), diffusion non consentie d'images intimes (<a class="art" href="#/infraction/226-2-1">226-2-1</a>).</p>

<div class="encadre"><strong>Ce qu'il faut retenir pour l'enquête.</strong> Les limites posées au nom des libertés expliquent beaucoup de règles de procédure : seuils de peine pour les données de connexion (60-1-2), contrôle d'un juge pour les techniques intrusives, interdiction de provoquer l'infraction sous pseudonyme. Les respecter, c'est protéger la procédure.</div>
`,
    retenir: [
      "Une loi pénale du numérique doit être précise, nécessaire et proportionnée.",
      "Le Conseil constitutionnel a censuré la consultation de sites terroristes (2017), la loi Avia (2020) et l'outrage en ligne (2024).",
      "Les garanties de procédure découlent de ces exigences."
    ]
  },
  {
    id: "budapest-france", partie: "bases",
    titre: "La Convention de Budapest, article par article",
    resume: "Les infractions et les pouvoirs d'enquête du traité, et leur équivalent français.",
    arts: ["323-1", "226-15", "323-3", "323-2", "323-3-1", "313-1", "227-23"],
    contenu: `
<p>La Convention du Conseil de l'Europe sur la cybercriminalité (Budapest, 2001) reste le seul traité international contraignant en vigueur sur le sujet. Elle a servi de modèle à une très large majorité des législations nationales, bien au-delà de l'Europe. Ses catégories, datées de 2001, couvrent encore l'essentiel des faits d'aujourd'hui.</p>

<h3>Les infractions</h3>
<table class="tab">
<tr><th>Convention de Budapest</th><th>Droit français</th></tr>
<tr><td>Art. 2 — Accès illégal</td><td><a class="art" href="#/infraction/323-1">323-1</a> accès ou maintien frauduleux</td></tr>
<tr><td>Art. 3 — Interception illégale</td><td><a class="art" href="#/infraction/226-15">226-15</a> secret des correspondances</td></tr>
<tr><td>Art. 4 — Atteinte à l'intégrité des données</td><td><a class="art" href="#/infraction/323-3">323-3</a></td></tr>
<tr><td>Art. 5 — Atteinte à l'intégrité du système</td><td><a class="art" href="#/infraction/323-2">323-2</a> entrave</td></tr>
<tr><td>Art. 6 — Abus de dispositifs</td><td><a class="art" href="#/infraction/323-3-1">323-3-1</a> outils sans motif légitime</td></tr>
<tr><td>Art. 7 — Falsification informatique</td><td>Faux (art. 441-1 du Code pénal, qui vise tout support d'expression de la pensée)</td></tr>
<tr><td>Art. 8 — Fraude informatique</td><td><a class="art" href="#/infraction/313-1">313-1</a> escroquerie, et 323-3 si des données sont manipulées</td></tr>
<tr><td>Art. 9 — Pornographie enfantine</td><td><a class="art" href="#/infraction/227-23">227-23</a></td></tr>
<tr><td>Art. 10 — Atteintes à la propriété intellectuelle</td><td>Contrefaçon (Code de la propriété intellectuelle)</td></tr>
<tr><td>Art. 11 — Tentative et complicité</td><td>323-7 (tentative) ; complicité de droit commun</td></tr>
</table>

<h3>Les pouvoirs d'enquête</h3>
<table class="tab">
<tr><th>Convention de Budapest</th><th>Équivalent français</th></tr>
<tr><td>Art. 16 — Conservation rapide des données</td><td>Préservation des contenus, CPP <a href="#/acte/60-2">60-2</a> (alinéa 2)</td></tr>
<tr><td>Art. 18 — Injonction de produire</td><td>Réquisitions, CPP <a href="#/acte/60-1">60-1</a> et 77-1-1</td></tr>
<tr><td>Art. 19 — Perquisition et saisie de données</td><td>CPP 56 et <a href="#/acte/57-1">57-1</a></td></tr>
<tr><td>Art. 20 — Collecte en temps réel des données de trafic</td><td>Données de connexion (<a href="#/acte/60-1-2">60-1-2</a>), géolocalisation (<a href="#/acte/230-32">230-32</a>)</td></tr>
<tr><td>Art. 21 — Interception du contenu</td><td>Interceptions (CPP 100 et suivants ; <a href="#/acte/706-95">706-95</a> en enquête)</td></tr>
<tr><td>Art. 32 — Accès transfrontière à des données publiques ou avec consentement</td><td>Limite posée par 57-1 : données stockées à l'étranger seulement selon les engagements internationaux</td></tr>
<tr><td>Art. 35 — Réseau de points de contact 24/7</td><td>Coopération policière d'urgence, en complément d'Europol et d'Eurojust</td></tr>
</table>
<p class="petit">Le rattachement de chaque article de la Convention à un texte français est une lecture pédagogique : les articles 441-1 et la contrefaçon n'ont pas de fiche sur ce site.</p>

<p>Au niveau mondial, une <a href="#/europe">convention des Nations unies</a> a été signée par la France en 2025 ; elle n'est pas encore en vigueur.</p>
`,
    retenir: [
      "Budapest : 9 infractions (art. 2 à 10) et des pouvoirs d'enquête (art. 16 à 21).",
      "Art. 2 ↔ 323-1 ; art. 4 ↔ 323-3 ; art. 5 ↔ 323-2 ; art. 6 ↔ 323-3-1.",
      "Conservation rapide (art. 16) ↔ préservation (CPP 60-2)."
    ]
  }
  ];

  /* Insérées après la leçon « Les textes internationaux et les acteurs » */
  var pos = 0;
  window.COURS.forEach(function (c, i) { if (c.id === "acteurs") pos = i + 1; });
  Array.prototype.splice.apply(window.COURS, [pos, 0].concat(nouvelles));

  /* Jurisprudence */
  window.JURIS.push(
    {
      id: "avia", court: "Loi Avia (haine en ligne)", juridiction: "Cons. const.", date: "18 juin 2020", num: "n° 2020-801 DC",
      theme: "Contenus",
      faits: "La loi visant à lutter contre les contenus haineux sur internet obligeait les grandes plateformes à retirer en 24 heures les contenus manifestement haineux signalés, et les hébergeurs à retirer en une heure, sur demande de l'administration, les contenus terroristes ou pédopornographiques, sous peine de sanctions pénales.",
      question: "Ces obligations de retrait, sanctionnées pénalement, portent-elles une atteinte excessive à la liberté d'expression ?",
      solution: "Oui. Délais très brefs, appréciation laissée aux opérateurs sans juge, lourdes sanctions : les plateformes seraient incitées à retirer des contenus licites. Les dispositions principales sont censurées.",
      portee: "La lutte contre les contenus illicites passe désormais surtout par le droit européen (DSA, règlement sur les contenus terroristes), avec des garanties différentes.",
      arts: []
    },
    {
      id: "outrage-en-ligne", court: "Délit d'outrage en ligne (loi SREN)", juridiction: "Cons. const.", date: "17 mai 2024", num: "n° 2024-866 DC",
      theme: "Contenus",
      faits: "La loi SREN créait un délit d'« outrage en ligne », réprimant certains contenus portant atteinte à la dignité ou présentant un caractère injurieux, dégradant, humiliant, ou créant une situation intimidante, hostile ou offensante.",
      question: "Ce délit est-il compatible avec la liberté d'expression ?",
      solution: "Non. Sa caractérisation dépend largement du ressenti de la victime, et il recoupe des infractions qui existent déjà : l'atteinte à la liberté d'expression n'est ni nécessaire, ni adaptée, ni proportionnée. Le délit est censuré ; le reste de la loi, dont les hypertrucages (226-8, 226-8-1), est promulgué le 21 mai 2024.",
      portee: "Illustration récente de l'exigence d'un texte précis en matière d'expression en ligne.",
      arts: ["226-8", "226-8-1"]
    }
  );

  /* Lexique */
  window.LEXIQUE.push(
    ["Diffusion non consentie d'images intimes", "Nom préféré à « revenge porn » : il ne suggère pas que la victime aurait mérité une « vengeance » et ne confond pas avec de la pornographie consentie. En France : 226-2-1."],
    ["Cyberintimidation", "Messages répétés destinés à effrayer, humilier ou mettre en colère, fréquents chez les jeunes ; en France, souvent qualifiés de harcèlement (222-33-2-2) ou de harcèlement scolaire (222-33-2-3)."],
    ["Test de proportionnalité", "Une atteinte à une liberté doit être prévue par une loi précise, viser un but légitime, et être nécessaire et proportionnée."]
  );

  /* Vrai ou faux */
  window.VRAIFAUX.push(
    { q: "Le délit d'« outrage en ligne » prévu par la loi SREN est en vigueur.", r: false, e: "Censuré par le Conseil constitutionnel le 17 mai 2024 (décision n° 2024-866 DC)." },
    { q: "La Convention de Budapest est le seul traité international contraignant en vigueur sur la cybercriminalité.", r: true, e: "La convention des Nations unies, signée en 2025, n'est pas encore en vigueur." },
    { q: "L'article 6 de la Convention de Budapest (abus de dispositifs) correspond en France à l'article 323-3-1.", r: true, e: "Détention ou diffusion d'outils conçus pour commettre les atteintes aux STAD, sans motif légitime." },
    { q: "La loi Avia sur la haine en ligne a été intégralement validée.", r: false, e: "Ses dispositions principales ont été censurées le 18 juin 2020 (n° 2020-801 DC)." },
    { q: "Une restriction à la liberté d'expression doit être nécessaire et proportionnée au but poursuivi.", r: true, e: "Test commun à la CEDH (art. 10 § 2) et au Conseil constitutionnel." }
  );

  /* Victimes : conseils complémentaires */
  window.VICTIMES.forEach(function (v) {
    if (v.id === "harcelement") {
      v.etapes.splice(1, 0, "Signaler à la plateforme en citant la règle de ses conditions d'utilisation qui est violée ; joindre si possible le récépissé de plainte.");
      v.etapes.push("Le harcèlement commencé en ligne peut se poursuivre hors ligne : ne pas communiquer son adresse ni ses habitudes à un interlocuteur inconnu, même bienveillant.");
    }
  });
})();
