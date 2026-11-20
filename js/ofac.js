/* Page « L'OFAC » — d'après les sources officielles consultées le 20 novembre 2026 :
   décret n° 2023-1083 du 23 novembre 2023 et arrêté du même jour (version modifiée par l'arrêté du 7 août 2026)
   sur Légifrance ; pages de la police nationale (DNPJ ; « À la découverte du métier d'enquêteur à l'OFAC », 29/12/2025) ;
   ministère de l'Intérieur (stratégie ministérielle, 30/05/2025 ; rapport annuel sur la cybercriminalité, 01/07/2025). */
(function () {
  "use strict";
  var DECRET = "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000048458223";
  var ARRETE = "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000048458382";
  var DNPJ = "https://www.police-nationale.interieur.gouv.fr/nous-decouvrir/notre-organisation/organisation/direction-nationale-de-police-judiciaire-dnpj";
  var METIER = "https://www.police-nationale.interieur.gouv.fr/actualite/a-decouverte-du-metier-denqueteur-a-loffice-anti-cybercriminalite";
  var STRAT = "https://www.interieur.gouv.fr/actualites/actualites-du-ministere/strategie-nationale-pour-lutter-contre-cybercriminalite";
  var RAPPORT = "https://www.interieur.gouv.fr/actualites/communiques-de-presse/publication-du-rapport-annuel-relatif-a-cybercriminalite";
  var GPX = "https://www.police-nationale.interieur.gouv.fr/nous-rejoindre/nos-voies-dacces/devenir-policier/gpx/ext";

  /* Antennes et détachements : annexe de l'arrêté du 23 novembre 2023, version issue de l'arrêté du 7 août 2026 */
  var ANTENNES = [
    ["Lille", ["Creil"]],
    ["Strasbourg", ["Dijon", "Metz", "Reims", "Nancy", "Mulhouse", "Besançon"]],
    ["Lyon", ["Clermont-Ferrand", "Annecy", "Grenoble", "Saint-Étienne", "Valence"]],
    ["Marseille", ["Montpellier", "Ajaccio", "Toulouse", "Nice", "Nîmes", "Perpignan", "Toulon", "Bastia", "Avignon"]],
    ["Bordeaux", ["Limoges", "Poitiers", "Bayonne"]],
    ["Rennes", ["Orléans", "Nantes", "Rouen", "Caen", "Brest", "Angers"]],
    ["Versailles", ["Cergy-Pontoise", "Évry", "Melun"]],
    ["Cayenne", []],
    ["Nouméa", []],
    ["Pointe-à-Pitre", ["Fort-de-France"]],
    ["Saint-Denis de La Réunion", []]
  ];

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function lien(u, t) { return '<a href="' + u + '" target="_blank" rel="noopener">' + t + " ↗</a>"; }

  function html() {
    return '<p class="eyebrow">Les acteurs</p><h1>L\'Office anti-cybercriminalité (OFAC)</h1>' +
      '<p class="lead">Le service de la police nationale spécialisé dans la cybercriminalité : ce que disent les textes qui l\'ont créé, son organisation, ses outils, et le métier d\'enquêteur.</p>' +

      '<div class="ofac-cles">' +
      '<div class="stat"><b>1er déc. 2023</b><span>entrée en vigueur du décret de création</span></div>' +
      '<div class="stat"><b>DNPJ</b><span>rattachement : direction nationale de la police judiciaire</span></div>' +
      '<div class="stat"><b>11 antennes</b><span>et 34 détachements en métropole et outre-mer</span></div>' +
      '<div class="stat"><b>PHAROS · THESEE</b><span>plateformes rattachées à l\'office</span></div>' +
      "</div>" +

      "<h2>1. Création et rattachement</h2>" +
      '<p>L\'OFAC a été créé par le ' + lien(DECRET, "décret n° 2023-1083 du 23 novembre 2023") + ", entré en vigueur le 1er décembre 2023. Il remplace l'<strong>office central de lutte contre la criminalité liée aux technologies de l'information et de la communication (OCLCTIC)</strong>, créé en 2000, et la <strong>sous-direction de la lutte contre la cybercriminalité (SDLC)</strong> ; il a repris les procédures dont ils étaient saisis.</p>" +
      '<section class="lettre"><p class="lettre-k">Décret n° 2023-1083, article 1er</p><blockquote>« Il est créé un office anti-cybercriminalité (OFAC) rattaché à la direction générale de la police nationale (direction nationale de la police judiciaire) relevant du ministère de l\'intérieur. »</blockquote></section>' +
      "<p>Le même article associe à ses activités la gendarmerie nationale, la DGSI, les douanes (DGDDI), la DGCCRF et le ministère de la Justice. Son chef, commissaire de police (corps de conception et de direction), est nommé par arrêté du ministre de l'Intérieur (art. 9).</p>" +

      "<h2>2. Compétence</h2>" +
      "<p>L'office contribue, avec les autres administrations, à la répression des formes <strong>spécialisées, organisées ou transnationales</strong> de la cybercriminalité et à sa prévention, sans empiéter sur les missions de l'ANSSI (art. 2). Son domaine :</p>" +
      "<ul><li>les infractions <strong>spécifiques</strong> aux technologies de l'information et de la communication (atteintes aux systèmes, données, outils de piratage…) ;</li>" +
      "<li>et, dans les conditions de l'article 3, les infractions <strong>facilitées par ou liées à</strong> ces technologies (escroqueries en ligne, par exemple).</li></ul>" +
      '<p>Selon la ' + lien(DNPJ, "page de la DNPJ") + ", il traite sur l'ensemble du territoire les attaques contre les systèmes informatiques et les activités illicites sur le darkweb, et pilote le plan national cyber associant police et gendarmerie. La pédopornographie en ligne relève, elle, d'un autre office de la DNPJ : l'<strong>office mineurs (OFMIN)</strong>.</p>" +

      "<h2>3. Missions (décret, article 3)</h2>" +
      '<table class="tab"><tr><th>N°</th><th>Mission</th></tr>' +
      "<tr><td>1°</td><td>Animer et coordonner, au niveau national et opérationnel, la lutte contre les auteurs et complices d'infractions spécifiques aux TIC.</td></tr>" +
      "<tr><td>2°</td><td>Mener des enquêtes judiciaires en cybercriminalité, sous l'autorité du procureur ou du juge d'instruction.</td></tr>" +
      "<tr><td>3°</td><td>À la demande de l'autorité judiciaire, réaliser des actes d'enquête et des travaux techniques d'investigation numérique en appui des autres services, pour les infractions facilitées par le numérique.</td></tr>" +
      "<tr><td>4°</td><td>Assister, à leur demande, la police, la gendarmerie, les douanes, la DGCCRF et tout autre service, sans les dessaisir.</td></tr>" +
      "<tr><td>5°</td><td>Intervenir d'initiative, avec l'accord de l'autorité judiciaire, pour s'informer sur place des investigations en cours.</td></tr>" +
      "<tr><td>6°</td><td>Participer à des actions de formation.</td></tr>" +
      "<tr><td>7°</td><td>Recueillir et analyser le renseignement criminel et contribuer aux états de la menace.</td></tr></table>" +
      "<p>Pour cela, il <strong>centralise, analyse et communique</strong> les informations opérationnelles aux autres services et entretient des liaisons avec le secteur privé (art. 4). Les autres services doivent lui transmettre les informations qu'ils détiennent sur ces infractions (art. 5).</p>" +
      '<section class="lettre"><p class="lettre-k">Décret n° 2023-1083, article 7 (extrait)</p><blockquote>« Pour les infractions relevant de sa compétence définie au deuxième alinéa de l\'article 2, l\'office constitue, pour la France, le point de contact central dans les échanges opérationnels internationaux. »</blockquote></section>' +
      "<p>C'est donc l'interlocuteur français d'Europol, d'Interpol et des services étrangers spécialisés pour les infractions spécifiques au numérique.</p>" +

      "<h2>4. Implantation : antennes et détachements</h2>" +
      '<p>L\'office dispose d\'antennes placées auprès des services territoriaux de police (décret, art. 8), dont la liste est fixée par l\'' + lien(ARRETE, "arrêté du 23 novembre 2023") + ", modifié en dernier lieu le 7 août 2026 :</p>" +
      '<div class="table-wrap"><table class="tab"><tr><th>Antenne</th><th>Détachements</th></tr>' +
      ANTENNES.map(function (a) { return "<tr><td><strong>" + esc(a[0]) + "</strong></td><td>" + (a[1].length ? esc(a[1].join(", ")) : "—") + "</td></tr>"; }).join("") +
      "</table></div>" +
      "<p class=\"petit\">Le même arrêté fixe à 89 le nombre de postes d'officier de police judiciaire du corps d'encadrement et d'application ouverts à l'office (contre 48 pour l'ancienne SDLC). Ce chiffre ne correspond pas à l'effectif total.</p>" +

      "<h2>5. Les plateformes et outils rattachés</h2>" +
      "<ul>" +
      "<li><strong>PHAROS</strong> : plateforme de signalement des contenus illicites en ligne (internet-signalement.gouv.fr), créée par arrêté du 16 juin 2009. Le décret créant l'OFAC a aussi modifié les décrets de 2015 et de 2023 sur le blocage et le déréférencement administratifs des sites terroristes, pédopornographiques et des « sites miroirs ».</li>" +
      "<li><strong>THESEE</strong> (« traitement harmonisé des enquêtes et des signalements pour les e-escroqueries ») : plainte et signalement en ligne pour certaines escroqueries sur internet.</li>" +
      "<li><strong>MISP-PJ</strong> : traitement de données relatif aux atteintes aux systèmes de traitement automatisé de données (arrêté du 22 décembre 2021), mis à jour pour l'office.</li>" +
      "<li><strong>Enquête sous pseudonyme</strong> : l'arrêté de 2023 a mis à jour la liste des services dont les enquêteurs peuvent être habilités (CPP <a href=\"#/acte/230-46\">230-46</a>).</li>" +
      "</ul>" +

      "<h2>6. Dans le paysage français</h2>" +
      '<table class="tab"><tr><th>Acteur</th><th>Rôle</th></tr>' +
      "<tr><td><strong>COMCYBER-MI</strong> (Commandement du ministère de l'Intérieur dans le cyberespace, 2023)</td><td>Coordonne les unités spécialisées de police et de gendarmerie ; a établi la stratégie ministérielle de lutte contre la cybercriminalité (4 piliers, 12 axes, 84 actions) ; son centre CECyber rédige le rapport annuel ; il abrite le centre national de formation cyber (CNFCYBER-MI).</td></tr>" +
      "<tr><td><strong>UNCyber</strong> (gendarmerie)</td><td>Unité nationale cyber de la gendarmerie nationale.</td></tr>" +
      "<tr><td><strong>BL2C</strong> (préfecture de police)</td><td>Brigade de lutte contre la cybercriminalité, à Paris.</td></tr>" +
      "<tr><td><strong>Section J3</strong> du parquet de Paris</td><td>Section de lutte contre la cybercriminalité ; compétence concurrente nationale pour les atteintes aux STAD (CPP <a href=\"#/acte/706-72-1\">706-72-1</a>).</td></tr>" +
      "<tr><td><strong>OFMIN</strong> (DNPJ)</td><td>Violences faites aux mineurs, dont la pédopornographie en ligne.</td></tr>" +
      "<tr><td><strong>ANSSI</strong></td><td>Défense et sécurité des systèmes d'information (pas d'enquête judiciaire).</td></tr>" +
      "<tr><td><strong>Europol, Eurojust</strong></td><td>Coordination européenne des enquêtes et des poursuites.</td></tr></table>" +

      "<h2>7. Quelques repères chiffrés</h2>" +
      '<p>D\'après le ' + lien(RAPPORT, "rapport annuel du ministère sur la cybercriminalité (juillet 2025)") + " :</p>" +
      "<ul><li><strong>348 000</strong> atteintes numériques enregistrées en 2024, soit <strong>+74 %</strong> en cinq ans ; 65 % visent les biens, 29,7 % les personnes ;</li>" +
      "<li>plus de <strong>15 000</strong> policiers et gendarmes spécialisés ;</li>" +
      "<li>une « industrialisation » de la cybercriminalité : certains développent les outils, d'autres vendent des accès initiaux ou des bases de données, et tous se sous-traitent des tâches.</li></ul>" +
      '<div class="encadre"><strong>Exemple : l\'opération ENDGAME (mai 2024).</strong> Démantèlement de plusieurs botnets servant à diffuser des logiciels malveillants et des rançongiciels, y compris contre des établissements de santé. Coordination européenne par Europol et Eurojust, coordination française par l\'OFAC ; co-saisine de la section J3, de l\'OFAC, de la BL2C et de l\'UNCyber. Bilan annoncé : plus de 100 serveurs neutralisés, 99 portefeuilles de crypto-actifs gelés (plus de 70 millions d\'euros) et 4 interpellations, dont 3 par les autorités françaises.</div>' +

      "<h2>8. Le métier d'enquêteur à l'OFAC</h2>" +
      '<p>La police nationale a publié le ' + lien(METIER, "29 décembre 2025 le témoignage d'un enquêteur de l'OFAC") + ", brigadier-chef. Son parcours : des études de graphisme, quelques années de travail, puis le concours de gardien de la paix, un début de carrière en police secours, et enfin la police judiciaire et l'OFAC, porté par sa passion pour le web et la cyber.</p>" +
      "<p>Ce qu'il met en avant : la technicité élevée des policiers de la police judiciaire (judiciaire, juridique, scientifique et numérique), reconnue en France et à l'étranger ; des enquêtes complexes qui demandent beaucoup de curiosité et de réflexion pour identifier les auteurs ; et un « esprit » propre à la police judiciaire.</p>" +
      "<p><strong>Comment y entrer ?</strong> La voie principale est celle de policier actif : " + lien(GPX, "concours de gardien de la paix") + " (externe, deux concours internes, emplois réservés), puis qualification d'officier de police judiciaire et affectation en police judiciaire. L'office recrute aussi des profils techniques, par exemple des ingénieurs experts en cybercriminalité (offres publiées sur choisirleservicepublic.gouv.fr).</p>" +

      '<div class="encadre"><strong>Pour ton stage.</strong> Retiens les trois textes de base : le décret n° 2023-1083 (création et missions), l\'arrêté du 23 novembre 2023 (antennes), et l\'article 230-46 du CPP (enquête sous pseudonyme). Et sache situer l\'OFAC par rapport au COMCYBER-MI, à l\'UNCyber, à la BL2C et à la section J3.</div>' +

      "<h2>Sources officielles</h2><ul class=\"sources\">" +
      "<li>" + lien(DECRET, "Décret n° 2023-1083 du 23 novembre 2023 portant création de l'office anti-cybercriminalité (Légifrance)") + "</li>" +
      "<li>" + lien(ARRETE, "Arrêté du 23 novembre 2023 portant diverses dispositions réglementaires relatives à l'OFAC, version modifiée par l'arrêté du 7 août 2026 (Légifrance)") + "</li>" +
      "<li>" + lien(DNPJ, "Police nationale — La direction nationale de la police judiciaire (DNPJ)") + "</li>" +
      "<li>" + lien(METIER, "Police nationale — À la découverte du métier d'enquêteur à l'OFAC (29/12/2025)") + "</li>" +
      "<li>" + lien(STRAT, "Ministère de l'Intérieur — Une stratégie nationale pour lutter contre la cybercriminalité (30/05/2025)") + "</li>" +
      "<li>" + lien(RAPPORT, "Ministère de l'Intérieur — Publication du rapport annuel relatif à la cybercriminalité (01/07/2025)") + "</li>" +
      "</ul><p class=\"petit\">Pages consultées le 20 novembre 2026. Les organigrammes changent souvent : vérifie les noms et les rattachements avant de les citer.</p>";
  }

  window.OFAC_PAGE = { html: html, after: function () {} };

  /* Lexique et vrai/faux */
  window.LEXIQUE.push(
    ["OFAC", "Office anti-cybercriminalité de la police nationale (DNPJ), créé par le décret n° 2023-1083 du 23 novembre 2023 ; remplace l'OCLCTIC et la SDLC."],
    ["OCLCTIC", "Office central de lutte contre la criminalité liée aux technologies de l'information et de la communication (2000-2023), remplacé par l'OFAC."],
    ["DNPJ", "Direction nationale de la police judiciaire, dont relève l'OFAC."],
    ["COMCYBER-MI", "Commandement du ministère de l'Intérieur dans le cyberespace (2023) : coordonne police et gendarmerie, publie le rapport annuel sur la cybercriminalité."],
    ["UNCyber", "Unité nationale cyber de la gendarmerie nationale."],
    ["BL2C", "Brigade de lutte contre la cybercriminalité de la préfecture de police (Paris)."],
    ["Section J3", "Section du parquet de Paris spécialisée dans la cybercriminalité."],
    ["THESEE", "Plateforme de plainte et de signalement en ligne pour certaines escroqueries sur internet, rattachée à l'OFAC."],
    ["OFMIN", "Office mineurs de la DNPJ : violences faites aux mineurs, dont la pédopornographie en ligne."]
  );
  window.VRAIFAUX.push(
    { q: "L'OFAC est rattaché à la gendarmerie nationale.", r: false, e: "Il relève de la police nationale (direction nationale de la police judiciaire) ; la gendarmerie est associée à ses activités (décret 2023-1083, art. 1er)." },
    { q: "Les plateformes PHAROS et THESEE sont rattachées à l'OFAC.", r: true, e: "Selon la présentation officielle de la DNPJ." },
    { q: "L'OFAC est le point de contact central de la France dans les échanges opérationnels internationaux sur les infractions spécifiques au numérique.", r: true, e: "Article 7 du décret n° 2023-1083." },
    { q: "L'OFAC a remplacé l'OCLCTIC et la sous-direction de la lutte contre la cybercriminalité.", r: true, e: "Le décret abroge celui de 2000 créant l'OCLCTIC et transfère les procédures en cours (art. 15 et 16)." },
    { q: "L'assistance de l'OFAC à un autre service dessaisit automatiquement ce service.", r: false, e: "Article 3, 4° : l'assistance ne dessaisit pas les services demandeurs." }
  );
})();
