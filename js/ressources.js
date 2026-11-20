/* Page « Dispositifs publics » — d'après economie.gouv.fr (« Cybersécurité : des dispositifs publics gratuits
   pour vous accompagner », 04/11/2026) et les sites officiels de chaque service, consultés le 20/11/2026. */
(function () {
  "use strict";
  var SOURCE = "https://www.economie.gouv.fr/entreprises/gerer-son-entreprise-au-quotidien/assurer-sa-cybersecurite-et-la-protection-de-ses-donnees/cybersecurite-des-dispositifs-publics-gratuits";

  var SERVICES = [
    {
      moment: "Réagir", nom: "17Cyber", url: "https://17cyber.gouv.fr/",
      qui: "Police nationale, gendarmerie nationale et Cybermalveillance.gouv.fr",
      pour: "Toutes les victimes : particuliers, entreprises, collectivités",
      quoi: "Guichet unique en ligne, 24 h/24 et 7 j/7 : un diagnostic par questions identifie le type d'attaque et donne des conseils adaptés. Si nécessaire, mise en relation avec un prestataire (payant) et échange par tchat avec un policier ou un gendarme. Le site oriente aussi vers le signalement d'une escroquerie ou d'un contenu illicite et vers le dépôt de plainte. En cas d'urgence : 17, 112, ou SMS au 114."
    },
    {
      moment: "Réagir", nom: "CSIRT territoriaux", url: "https://www.cert.ssi.gouv.fr/csirt/csirt-territoriaux/",
      qui: "Centres régionaux de réponse aux incidents, créés avec France Relance (2021) et accompagnés par l'ANSSI",
      pour: "Acteurs de taille intermédiaire : PME, ETI, collectivités, associations",
      quoi: "Réponse à incident de premier niveau gratuite, mise en relation avec des prestataires et des services de l'État, missions de prévention et de sensibilisation. 15 CSIRT territoriaux et un centre de ressources cyber (CRC)."
    },
    {
      moment: "Se protéger", nom: "MesServicesCyber", url: "https://messervices.cyber.gouv.fr/parcours-securisation",
      qui: "ANSSI (lancé au printemps 2025)",
      pour: "Toutes les organisations, même débutantes",
      quoi: "Parcours en ligne gratuit : 12 premières mesures simples, puis un programme complet fondé sur le Référentiel Cyber France ; tests de maturité, contacts de proximité, prestataires et financements. Possibilité d'un « diagnostic cyberdépart » d'une heure avec un Aidant cyber bénévole."
    },
    {
      moment: "Se former", nom: "SensCyber", url: "https://www.cybermalveillance.gouv.fr/sens-cyber/apprendre",
      qui: "Cybermalveillance.gouv.fr",
      pour: "Tout le monde",
      quoi: "E-sensibilisation gratuite en 3 modules (comprendre, agir, transmettre), environ 2 heures, avec quiz et attestation personnalisée. Le module 3 présente les acteurs nationaux et les textes de référence."
    },
    {
      moment: "Se faire accompagner", nom: "Mon ExpertCyber", url: "https://www.cybermalveillance.gouv.fr/label-expertcyber",
      qui: "Cybermalveillance.gouv.fr (label ExpertCyber créé en 2020)",
      pour: "Publics professionnels, en particulier TPE et PME",
      quoi: "Mise en relation avec des prestataires labellisés ExpertCyber, selon la localisation et les besoins : installation, sécurisation, maintenance, assistance."
    }
  ];

  var CSIRT = [
    ["Atlantique (Guadeloupe, Guyane, Martinique, Saint-Barthélemy, Saint-Martin, Saint-Pierre-et-Miquelon)", "CSIRT-ATLANTIC"],
    ["Auvergne-Rhône-Alpes", "Cyber Assistance Auvergne-Rhône-Alpes"],
    ["Bourgogne-Franche-Comté", "CSIRT Bourgogne-Franche-Comté"],
    ["Bretagne", "Breizh Cyber"],
    ["Corse", "CSIRT CyberCorsica"],
    ["Centre-Val de Loire", "CybeRéponse"],
    ["Grand Est", "Grand Est Cybersécurité"],
    ["Hauts-de-France", "CSIRT Hauts-de-France"],
    ["Île-de-France", "Urgence Cyber Île-de-France"],
    ["Normandie", "Normandie Cyber"],
    ["Nouvelle-Aquitaine", "Campus régional de cybersécurité et de confiance numérique"],
    ["Nouvelle-Calédonie", "Centre Cyber du Pacifique"],
    ["Occitanie", "Cyber'Occ"],
    ["Pays de la Loire", "Cyber Assistance"],
    ["Provence-Alpes-Côte d'Azur", "Urgence Cyber région Sud"],
    ["La Réunion", "CSIRT La Réunion"]
  ];

  var GUIDES = [
    ["Que faire en cas de cyberattaque ? Guide pour les dirigeants (Cybermalveillance.gouv.fr)", "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/cyberattaque-que-faire-guide-dirigeants"],
    ["La cybersécurité pour les TPE/PME : enjeux et solutions (Cybermalveillance.gouv.fr)", "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/cybersecurite-tpe-pme-enjeux-solutions"],
    ["Guide de cybersécurité à destination des dirigeants de TPE, PME et ETI (France Num)", "https://www.francenum.gouv.fr/index.php/guides-et-conseils/protection-contre-les-risques/cybersecurite/guide-de-cybersecurite-destination"]
  ];

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function lien(u, t) { return '<a href="' + u + '" target="_blank" rel="noopener">' + esc(t) + " ↗</a>"; }

  function html() {
    var moments = [];
    SERVICES.forEach(function (s) { if (moments.indexOf(s.moment) < 0) moments.push(s.moment); });
    return '<p class="eyebrow">Pratique</p><h1>Les dispositifs publics gratuits</h1>' +
      '<p class="lead">Les services de l\'État pour se protéger, se former et réagir à une cyberattaque. En stage, tu devras souvent orienter une victime vers le bon interlocuteur : voici qui fait quoi.</p>' +
      moments.map(function (m) {
        return "<h2>" + esc(m) + "</h2>" + SERVICES.filter(function (s) { return s.moment === m; }).map(function (s) {
          return '<section class="card eu"><h2>' + esc(s.nom) + '</h2><p class="petit">' + esc(s.qui) + "</p>" +
            '<p><strong>Pour qui :</strong> ' + esc(s.pour) + "</p><p>" + esc(s.quoi) + "</p><p>" + lien(s.url, "Site officiel") + "</p></section>";
        }).join("");
      }).join("") +

      "<h2>Les CSIRT territoriaux, région par région</h2>" +
      '<div class="table-wrap"><table class="tab"><tr><th>Territoire</th><th>CSIRT ou CRC</th></tr>' +
      CSIRT.map(function (c) { return "<tr><td>" + esc(c[0]) + "</td><td>" + esc(c[1]) + "</td></tr>"; }).join("") +
      '</table></div><p class="petit">Liste publiée par le CERT-FR (ANSSI), consultée le 20 novembre 2026.</p>' +

      "<h2>Les autres canaux à connaître</h2>" +
      '<table class="tab"><tr><th>Service</th><th>À quoi il sert</th></tr>' +
      "<tr><td><strong>PHAROS</strong> (internet-signalement.gouv.fr)</td><td>Signaler un contenu illicite en ligne ; plateforme rattachée à l'<a href=\"#/ofac\">OFAC</a>.</td></tr>" +
      "<tr><td><strong>THESEE</strong></td><td>Plainte ou signalement en ligne pour certaines escroqueries sur internet ; rattachée à l'OFAC.</td></tr>" +
      "<tr><td><strong>Commissariat ou brigade de gendarmerie</strong></td><td>Plainte dans tous les autres cas ; pour une entreprise assurée, plainte dans les 72 heures pour être indemnisée après une atteinte à ses systèmes.</td></tr>" +
      "<tr><td><strong>CNIL</strong></td><td>Notification d'une violation de données personnelles dans les 72 heures.</td></tr>" +
      "</table>" +

      '<div class="encadre"><strong>Le bon réflexe d\'orientation.</strong> Un particulier ou une petite structure qui ne sait pas ce qui lui arrive : 17Cyber. Une PME, une collectivité ou une association en pleine crise : son CSIRT territorial, puis un prestataire labellisé. Un contenu illicite : PHAROS. Une escroquerie en ligne : THESEE ou plainte. Une urgence vitale : 17 ou 112.</div>' +

      "<h2>Guides utiles</h2><ul class=\"sources\">" + GUIDES.map(function (g) { return "<li>" + lien(g[1], g[0]) + "</li>"; }).join("") + "</ul>" +
      '<p class="petit">Source principale : ' + lien(SOURCE, "economie.gouv.fr, « Cybersécurité : des dispositifs publics gratuits pour vous accompagner » (4 novembre 2026)") + ". Chaque service a été vérifié sur son site officiel le 20 novembre 2026.</p>";
  }

  window.RESSOURCES_PAGE = { html: html, after: function () {} };

  /* Page Victimes : les réflexes du guide pour les dirigeants */
  window.VICTIMES.forEach(function (v) {
    if (v.id === "rancon") {
      v.etapes.splice(1, 0, "Constituer une cellule de crise et tenir un registre des événements et des actions, à disposition des enquêteurs.");
      v.etapes.splice(4, 0, "Déposer plainte avant toute action de remédiation, en fournissant toutes les preuves ; alerter sa banque si des informations permettant des virements ont pu être volées.");
      v.etapes.splice(v.etapes.length - 1, 0, "Contacter son CSIRT territorial (PME, ETI, collectivités, associations) : voir la page « Dispositifs publics ».");
    }
    if (v.id === "preuves") {
      v.etapes[v.etapes.length - 1] = "Utiliser le diagnostic 17Cyber (17cyber.gouv.fr), disponible 24 h/24, pour savoir quoi faire selon la situation.";
    }
  });

  window.LEXIQUE.push(
    ["17Cyber", "Guichet unique en ligne d'assistance aux victimes de cybermalveillance (police, gendarmerie, Cybermalveillance.gouv.fr), 24 h/24."],
    ["CSIRT", "Équipe de réponse aux incidents de sécurité informatique ; les CSIRT territoriaux aident gratuitement PME, ETI, collectivités et associations."],
    ["CERT-FR", "Centre gouvernemental de veille, d'alerte et de réponse aux attaques informatiques, au sein de l'ANSSI."],
    ["MesServicesCyber", "Plateforme gratuite de l'ANSSI (2025) pour aider les organisations à se protéger, par étapes."],
    ["ExpertCyber", "Label de Cybermalveillance.gouv.fr (2020) attribué à des prestataires de cybersécurité de confiance."]
  );
  window.VRAIFAUX.push(
    { q: "17Cyber est un service réservé aux entreprises.", r: false, e: "Il s'adresse à toutes les victimes : particuliers, entreprises et collectivités." },
    { q: "Une PME victime d'une cyberattaque peut obtenir une première réponse gratuite auprès de son CSIRT territorial.", r: true, e: "Les CSIRT territoriaux assurent une réponse à incident de premier niveau gratuite pour les acteurs de taille intermédiaire." },
    { q: "Le guide officiel pour les dirigeants recommande de payer la rançon si l'activité est bloquée.", r: false, e: "Il recommande de ne pas payer et de déposer plainte avant toute action de remédiation." }
  );
})();
