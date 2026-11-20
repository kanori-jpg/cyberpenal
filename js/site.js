/* Fichier généré par outils/construire.py : ne pas modifier à la main. */
/* ===== js/infractions.js ===== */
/* Fiches infractions — droit pénal de la cybercriminalité.
   Toutes les fiches marquées verifie:true ont été relues sur Légifrance
   (version consolidée en vigueur au 18 novembre 2026). Les textes sont résumés,
   pas recopiés : toujours se reporter au lien Légifrance pour la lettre exacte. */

window.LF = {
  cp: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/",
  cpp: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006071154/",
  lcen: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000801164",
  consult: "19 novembre 2026"
};

window.THEMES = [
  { id: "stad", nom: "Atteintes aux systèmes (STAD)", court: "STAD", couleur: "t1" },
  { id: "personnes", nom: "Atteintes aux personnes en ligne", court: "Personnes", couleur: "t2" },
  { id: "mineurs", nom: "Protection des mineurs", court: "Mineurs", couleur: "t3" },
  { id: "biens", nom: "Fraudes et atteintes aux biens", court: "Fraudes", couleur: "t4" },
  { id: "donnees", nom: "Données personnelles", court: "Données", couleur: "t5" },
  { id: "contenus", nom: "Contenus illicites et plateformes", court: "Contenus", couleur: "t6" },
  { id: "procedure", nom: "Chiffrement et procédure", court: "Procédure", couleur: "t7" }
];

(function () {
  var S = {
    stad: "LEGISCTA000006149839/", vie: "LEGISCTA000006165309/", repr: "LEGISCTA000006165310/",
    fich: "LEGISCTA000006165313/", harc: "LEGISCTA000006165282/", min: "LEGISCTA000043405084/",
    ext: "LEGISCTA000006165327/", chant: "LEGISCTA000006165328/", escr: "LEGISCTA000006165331/",
    terr: "LEGISCTA000006149845/", just: "LEGISCTA000006165379/", circ: "LEGISCTA000006165269/",
    risq: "LEGISCTA000006165287/", corr: "LEGISCTA000006181757/"
  };
  function cp(k) { return window.LF.cp + S[k]; }

  window.INFRACTIONS = [
  /* ===================== STAD ===================== */
  {
    id: "323-1", art: "323-1", code: "Code pénal", theme: "stad",
    titre: "Accès ou maintien frauduleux dans un STAD",
    materiel: "Accéder ou se maintenir, frauduleusement, dans tout ou partie d'un système de traitement automatisé de données (STAD). Le maintien est puni même si l'accès initial était fortuit.",
    moral: "Conscience d'être dans le système sans droit (« frauduleusement »). L'absence de protection technique n'efface pas l'infraction si l'auteur savait ne pas être autorisé.",
    peines: [
      ["Base", "3 ans d'emprisonnement et 100 000 € d'amende"],
      ["Avec suppression ou modification de données, ou altération du fonctionnement", "5 ans et 150 000 €"],
      ["STAD de données personnelles mis en œuvre par l'État", "7 ans et 300 000 €"]
    ],
    notes: "Peines relevées par la loi LOPMI n° 2023-22 du 24 janvier 2023 (en vigueur depuis le 26 janvier 2023). Tentative punie (art. 323-7).",
    tentative: true, version: "26/01/2023", url: cp("stad"), verifie: true,
    motscles: "piratage intrusion hacking connexion identifiants serveur"
  },
  {
    id: "323-2", art: "323-2", code: "Code pénal", theme: "stad",
    titre: "Entrave ou altération du fonctionnement d'un STAD",
    materiel: "Entraver ou fausser le fonctionnement d'un STAD (déni de service, sabotage, chiffrement par rançongiciel qui bloque le système…).",
    moral: "Volonté d'entraver ou de fausser le fonctionnement.",
    peines: [
      ["Base", "5 ans d'emprisonnement et 150 000 € d'amende"],
      ["STAD de données personnelles mis en œuvre par l'État", "7 ans et 300 000 €"]
    ],
    notes: "Tentative punie (art. 323-7).", tentative: true, version: "27/07/2015", url: cp("stad"), verifie: true,
    motscles: "ddos déni de service sabotage rançongiciel ransomware blocage"
  },
  {
    id: "323-3", art: "323-3", code: "Code pénal", theme: "stad",
    titre: "Atteintes frauduleuses aux données d'un STAD",
    materiel: "Introduire frauduleusement des données dans un STAD, ou extraire, détenir, reproduire, transmettre, supprimer ou modifier frauduleusement les données qu'il contient.",
    moral: "Conscience du caractère frauduleux de l'opération sur les données.",
    peines: [
      ["Base", "5 ans d'emprisonnement et 150 000 € d'amende"],
      ["STAD de données personnelles mis en œuvre par l'État", "7 ans et 300 000 €"]
    ],
    notes: "Depuis 2014, l'« extraction », la « détention », la « reproduction » et la « transmission » sont visées : le vol de données est désormais réprimé directement. Tentative punie (art. 323-7).",
    tentative: true, version: "27/07/2015", url: cp("stad"), verifie: true,
    motscles: "vol de données extraction exfiltration copie fichier malware virus injection"
  },
  {
    id: "323-3-1", art: "323-3-1", code: "Code pénal", theme: "stad",
    titre: "Outils de piratage détenus ou diffusés sans motif légitime",
    materiel: "Importer, détenir, offrir, céder ou mettre à disposition, sans motif légitime, un équipement, un instrument, un programme informatique ou toute donnée conçus ou spécialement adaptés pour commettre les infractions des articles 323-1 à 323-3.",
    moral: "Absence de motif légitime : la recherche et la sécurité informatique (tests d'intrusion, enseignement) en constituent typiquement un.",
    peines: [
      ["Peine", "Celles prévues pour l'infraction elle-même ou, si plusieurs, pour la plus sévèrement réprimée"]
    ],
    notes: "Vise les kits de hameçonnage, « booters » de DDoS, chevaux de Troie vendus clé en main… Tentative punie (art. 323-7).",
    tentative: true, version: "20/12/2013", url: cp("stad"), verifie: true,
    motscles: "malware kit outil exploit booter cheval de troie vente logiciel malveillant"
  },
  {
    id: "323-3-2", art: "323-3-2", code: "Code pénal", theme: "stad",
    titre: "Plateformes en ligne de cession de produits manifestement illicites",
    materiel: "Pour l'opérateur d'une plateforme en ligne qui réserve l'accès aux utilisateurs de techniques d'anonymisation (Tor…) ou qui ne respecte pas ses obligations légales (LCEN, règlement européen sur les services numériques), permettre sciemment la cession de produits, contenus ou services manifestement illicites. Le II punit aussi les prestations d'intermédiation ou de séquestre qui servent à ces opérations.",
    moral: "Connaissance (« sciemment ») du caractère manifestement illicite des échanges.",
    peines: [
      ["Base", "7 ans d'emprisonnement et 500 000 € d'amende"],
      ["Bande organisée", "10 ans et 1 000 000 €"]
    ],
    notes: "Créé par la LOPMI (2023), durci par la loi « narcotrafic » n° 2025-532 du 13 juin 2025 (version en vigueur depuis le 15 juin 2025). Vise les marchés du darkweb. Tentative punie des mêmes peines. Relève de la délinquance organisée (CPP 706-73-1, 12°).",
    tentative: true, version: "15/06/2025", url: cp("stad"), verifie: true,
    motscles: "darkweb dark web marketplace marché noir séquestre escrow plateforme"
  },
  {
    id: "323-4", art: "323-4", code: "Code pénal", theme: "stad",
    titre: "Association de malfaiteurs informatique",
    materiel: "Participer à un groupement formé ou à une entente établie en vue de la préparation, caractérisée par un ou plusieurs faits matériels, d'une ou plusieurs infractions des articles 323-1 à 323-3-1.",
    moral: "Volonté de participer à la préparation d'atteintes aux STAD.",
    peines: [["Peine", "Celles de l'infraction préparée ou de l'infraction la plus sévèrement réprimée"]],
    notes: "Permet d'intervenir avant le passage à l'acte (forums de préparation d'attaques, groupes de hackers).",
    tentative: false, version: "22/06/2004", url: cp("stad"), verifie: true,
    motscles: "groupe hackers entente préparation forum"
  },
  {
    id: "323-4-1", art: "323-4-1", code: "Code pénal", theme: "stad",
    titre: "Atteintes aux STAD commises en bande organisée",
    materiel: "Commission des infractions des articles 323-1 à 323-3-1 en bande organisée.",
    moral: "Celui de l'infraction de base.",
    peines: [["Bande organisée", "10 ans d'emprisonnement et 300 000 € d'amende"]],
    notes: "Ouvre les techniques spéciales d'enquête de la délinquance organisée (CPP 706-72 et 706-73-1).",
    tentative: false, version: "26/01/2023", url: cp("stad"), verifie: true,
    motscles: "bande organisée groupe criminel rançongiciel ransomware gang"
  },
  {
    id: "323-4-2", art: "323-4-2", code: "Code pénal", theme: "stad",
    titre: "Atteintes aux STAD mettant en danger la vie d'autrui",
    materiel: "Infractions des articles 323-1 à 323-3-1 qui exposent autrui à un risque immédiat de mort ou de blessures graves, ou qui font obstacle aux secours.",
    moral: "Celui de l'infraction de base.",
    peines: [["Peine", "10 ans d'emprisonnement et 300 000 € d'amende"]],
    notes: "Créé par la LOPMI (2023) après les cyberattaques contre des hôpitaux.",
    tentative: false, version: "26/01/2023", url: cp("stad"), verifie: true,
    motscles: "hôpital santé secours urgence danger cyberattaque"
  },

  /* ===================== PERSONNES ===================== */
  {
    id: "222-33-2-2", art: "222-33-2-2", code: "Code pénal", theme: "personnes",
    titre: "Harcèlement moral (dont cyberharcèlement et harcèlement en meute)",
    materiel: "Harceler une personne par des propos ou comportements répétés ayant pour objet ou pour effet une dégradation de ses conditions de vie, se traduisant par une altération de sa santé physique ou mentale. La répétition existe aussi a) quand plusieurs personnes agissent de façon concertée ou à l'instigation de l'une d'elles, même si chacune n'a agi qu'une fois ; b) quand elles agissent successivement en sachant que leurs propos caractérisent une répétition (« raid numérique »).",
    moral: "Conscience du caractère harcelant ; pour la meute sans concertation, savoir que ses propos s'ajoutent à ceux des autres.",
    peines: [
      ["Base (ITT ≤ 8 jours ou pas d'ITT)", "1 an d'emprisonnement et 15 000 € d'amende"],
      ["Une circonstance : ITT > 8 j, victime mineure, vulnérable, élue, présence d'un mineur, ou usage d'un service de communication au public en ligne / support numérique", "2 ans et 30 000 €"],
      ["Deux circonstances réunies", "3 ans et 45 000 €"]
    ],
    notes: "L'usage d'internet ou d'un support numérique est une circonstance aggravante (4°). Version en vigueur depuis le 23 mars 2024.",
    tentative: false, version: "23/03/2024", url: cp("harc"), verifie: true,
    motscles: "cyberharcèlement raid meute réseaux sociaux commentaires insultes"
  },
  {
    id: "222-33-2-1", art: "222-33-2-1", code: "Code pénal", theme: "personnes",
    titre: "Harcèlement au sein du couple",
    materiel: "Harceler son conjoint, partenaire de PACS ou concubin (y compris ancien) par des propos ou comportements répétés dégradant ses conditions de vie et altérant sa santé.",
    moral: "Conscience du caractère harcelant.",
    peines: [
      ["Base (ITT ≤ 8 j ou pas d'ITT)", "3 ans d'emprisonnement et 45 000 € d'amende"],
      ["ITT > 8 j, ou en présence d'un mineur", "5 ans et 75 000 €"],
      ["Suicide ou tentative de suicide de la victime", "10 ans et 150 000 €"]
    ],
    notes: "Souvent cumulé en pratique avec l'espionnage du téléphone (226-1, 226-3) ou la lecture des messages (226-15).",
    tentative: false, version: "01/08/2020", url: cp("harc"), verifie: true,
    motscles: "conjoint ex couple violences conjugales cyber contrôle"
  },
  {
    id: "222-33-2-3", art: "222-33-2-3", code: "Code pénal", theme: "personnes",
    titre: "Harcèlement scolaire",
    materiel: "Harcèlement (y compris en meute) commis contre un élève par une personne qui étudie ou travaille dans le même établissement. L'infraction demeure si les faits continuent après que l'un ou l'autre a quitté l'établissement.",
    moral: "Conscience du caractère harcelant.",
    peines: [
      ["Base (ITT ≤ 8 j ou pas d'ITT)", "3 ans d'emprisonnement et 45 000 € d'amende"],
      ["ITT > 8 jours", "5 ans et 75 000 €"],
      ["Suicide ou tentative de suicide", "10 ans et 150 000 €"]
    ],
    notes: "Loi n° 2022-299 du 2 mars 2022. Le cyberharcèlement entre élèves relève de ce texte.",
    tentative: false, version: "04/03/2022", url: cp("harc"), verifie: true,
    motscles: "école collège lycée élève harcèlement scolaire réseaux"
  },
  {
    id: "226-1", art: "226-1", code: "Code pénal", theme: "personnes",
    titre: "Atteinte à l'intimité de la vie privée",
    materiel: "Porter volontairement atteinte à l'intimité de la vie privée d'autrui en captant, enregistrant ou transmettant, sans consentement : des paroles privées ou confidentielles ; l'image d'une personne dans un lieu privé ; la localisation d'une personne en temps réel ou en différé.",
    moral: "Volonté de porter atteinte à l'intimité. Consentement présumé si les faits ont lieu au vu et au su de la personne qui ne s'y est pas opposée.",
    peines: [
      ["Base", "1 an d'emprisonnement et 45 000 € d'amende"],
      ["Par le conjoint, concubin ou partenaire de PACS ; ou contre un agent public, un élu ou un candidat (ou un proche)", "2 ans et 60 000 €"]
    ],
    notes: "Poursuite uniquement sur plainte de la victime (art. 226-6). La géolocalisation sans consentement (traceur, application espion) est visée depuis 2020. 226-2 punit des mêmes peines la conservation et la diffusion des enregistrements ainsi obtenus.",
    tentative: true, version: "23/03/2024", url: cp("vie"), verifie: true,
    plainte: true, motscles: "espionnage enregistrement micro caméra géolocalisation traceur gps stalkerware"
  },
  {
    id: "226-2-1", art: "226-2-1", code: "Code pénal", theme: "personnes",
    titre: "Diffusion non consentie d'images intimes (dite « revenge porn »)",
    materiel: "Atteintes des articles 226-1 et 226-2 portant sur des paroles ou images à caractère sexuel ; et fait de diffuser, sans l'accord de la personne, un enregistrement ou document à caractère sexuel obtenu avec son consentement (ou par elle-même).",
    moral: "Conscience de diffuser sans l'accord de la personne.",
    peines: [["Peine", "2 ans d'emprisonnement et 60 000 € d'amende"]],
    notes: "Loi pour une République numérique du 7 octobre 2016. Le consentement à la prise de vue ne vaut pas consentement à la diffusion. Poursuite sur plainte (226-6). Les associations de victimes préfèrent parler de « diffusion non consentie d'images intimes » : « revenge porn » laisse entendre que la victime aurait mérité une vengeance.",
    tentative: true, version: "09/10/2016", url: cp("vie"), verifie: true,
    plainte: true, motscles: "revenge porn nudes photos intimes sexe vidéo diffusion ex"
  },
  {
    id: "226-3", art: "226-3", code: "Code pénal", theme: "personnes",
    titre: "Dispositifs d'espionnage (logiciels et appareils espions)",
    materiel: "Fabriquer, importer, détenir, exposer, offrir, louer ou vendre des appareils ou dispositifs techniques permettant de commettre les atteintes à la vie privée ou au secret des correspondances, ou faire une publicité incitant à leur usage frauduleux.",
    moral: "Intention, hors exceptions (opérateurs autorisés).",
    peines: [["Peine", "5 ans d'emprisonnement et 300 000 € d'amende"]],
    notes: "Vise notamment les logiciels espions (stalkerwares) et les traceurs dissimulés.",
    tentative: true, version: "01/08/2020", url: cp("vie"), verifie: true,
    motscles: "stalkerware logiciel espion mouchard traceur vente"
  },
  {
    id: "226-4-1", art: "226-4-1", code: "Code pénal", theme: "personnes",
    titre: "Usurpation d'identité (y compris numérique)",
    materiel: "Usurper l'identité d'un tiers ou faire usage d'une ou plusieurs données de toute nature permettant de l'identifier, en vue de troubler sa tranquillité ou celle d'autrui, ou de porter atteinte à son honneur ou à sa considération. Mêmes peines sur un réseau de communication au public en ligne.",
    moral: "Dol spécial : but de troubler la tranquillité ou de nuire à l'honneur ou à la considération.",
    peines: [
      ["Base (y compris en ligne)", "1 an d'emprisonnement et 15 000 € d'amende"],
      ["Par le conjoint, concubin ou partenaire de PACS", "2 ans et 30 000 €"]
    ],
    notes: "Faux profils, usage du nom ou de la photo d'autrui. Si l'usurpation sert à obtenir des fonds : voir aussi l'escroquerie (313-1, « usage d'un faux nom »).",
    tentative: true, version: "01/08/2020", url: cp("vie"), verifie: true,
    motscles: "faux profil usurpation identité compte fake nom photo"
  },
  {
    id: "226-8", art: "226-8", code: "Code pénal", theme: "personnes",
    titre: "Montage et contenu généré par IA sans consentement (hypertrucage)",
    materiel: "Porter à la connaissance du public ou d'un tiers, sans le consentement de la personne, un montage réalisé avec ses paroles ou son image, s'il n'apparaît pas à l'évidence qu'il s'agit d'un montage ou s'il n'en est pas fait expressément mention. Est assimilé le contenu visuel ou sonore généré par un traitement algorithmique représentant l'image ou les paroles d'une personne.",
    moral: "Conscience de diffuser sans consentement un contenu trompeur.",
    peines: [
      ["Base", "1 an d'emprisonnement et 15 000 € d'amende"],
      ["Via un service de communication au public en ligne", "2 ans et 45 000 €"]
    ],
    notes: "Modifié par la loi SREN n° 2024-449 du 21 mai 2024 (deepfakes).",
    tentative: true, version: "23/05/2024", url: cp("repr"), verifie: true,
    motscles: "deepfake hypertrucage ia montage voix clonage"
  },
  {
    id: "226-8-1", art: "226-8-1", code: "Code pénal", theme: "personnes",
    titre: "Hypertrucage à caractère sexuel",
    materiel: "Porter à la connaissance du public ou d'un tiers, sans consentement, un montage à caractère sexuel réalisé avec les paroles ou l'image d'une personne, ou un contenu sexuel généré algorithmiquement reproduisant son image ou ses paroles.",
    moral: "Conscience de diffuser sans consentement.",
    peines: [
      ["Base", "2 ans d'emprisonnement et 60 000 € d'amende"],
      ["Via un service de communication au public en ligne", "3 ans et 75 000 €"]
    ],
    notes: "Créé par la loi SREN (art. 21). La mention « contenu généré par IA » n'exonère pas : le texte ne prévoit pas cette réserve, contrairement à 226-8.",
    tentative: true, version: "23/05/2024", url: cp("repr"), verifie: true,
    motscles: "deepfake sexuel porno ia nudify déshabillage"
  },
  {
    id: "226-15", art: "226-15", code: "Code pénal", theme: "personnes",
    titre: "Atteinte au secret des correspondances (dont électroniques)",
    materiel: "De mauvaise foi : ouvrir, supprimer, retarder, détourner une correspondance adressée à un tiers ou en prendre frauduleusement connaissance ; intercepter, détourner, utiliser ou divulguer des correspondances émises, transmises ou reçues par voie électronique, ou installer des appareils permettant ces interceptions.",
    moral: "Mauvaise foi.",
    peines: [
      ["Base", "1 an d'emprisonnement et 45 000 € d'amende"],
      ["Par le conjoint, concubin ou partenaire de PACS", "2 ans et 60 000 €"]
    ],
    notes: "Lecture des mails ou SMS d'autrui. Se cumule souvent avec l'accès frauduleux (323-1) quand on utilise le mot de passe d'autrui.",
    tentative: false, version: "01/08/2020", url: cp("corr"), verifie: true,
    motscles: "mails sms messagerie lecture interception correspondance conjoint"
  },
  {
    id: "223-1-1", art: "223-1-1", code: "Code pénal", theme: "personnes",
    titre: "Divulgation d'informations personnelles exposant à un danger (« doxing »)",
    materiel: "Révéler, diffuser ou transmettre, par quelque moyen que ce soit, des informations relatives à la vie privée, familiale ou professionnelle d'une personne permettant de l'identifier ou de la localiser, aux fins de l'exposer, elle ou sa famille, à un risque direct d'atteinte à la personne ou aux biens que l'auteur ne pouvait ignorer.",
    moral: "But d'exposer à un risque que l'auteur ne pouvait ignorer.",
    peines: [
      ["Base", "3 ans d'emprisonnement et 45 000 € d'amende"],
      ["Victime agent public, élue, candidate, journaliste (ou proche), mineure ou vulnérable", "5 ans et 75 000 €"]
    ],
    notes: "Créé en 2021 après l'assassinat de Samuel Paty ; version en vigueur depuis le 23 mars 2024.",
    tentative: false, version: "23/03/2024", url: cp("risq"), verifie: true,
    motscles: "doxing doxxing adresse divulgation mise en danger informations personnelles"
  },
  {
    id: "312-10", art: "312-10", code: "Code pénal", theme: "personnes",
    titre: "Chantage (dont sextorsion)",
    materiel: "Obtenir, en menaçant de révéler ou d'imputer des faits de nature à porter atteinte à l'honneur ou à la considération, une signature, un engagement, une renonciation, la révélation d'un secret, ou la remise de fonds, valeurs ou d'un bien.",
    moral: "Volonté d'obtenir la remise par la menace de révélation.",
    peines: [
      ["Base", "5 ans d'emprisonnement et 75 000 € d'amende"],
      ["En ligne, au moyen d'images/vidéos sexuelles ou pour obtenir de telles images", "7 ans et 100 000 €"],
      ["Menace mise à exécution (312-11)", "7 ans et 100 000 €"]
    ],
    notes: "Aggravation « sextorsion » ajoutée par la loi SREN (version du 23 mai 2024). Tentative punie (312-12).",
    tentative: true, version: "23/05/2024", url: cp("chant"), verifie: true,
    motscles: "sextorsion chantage webcam nudes menace révéler argent"
  },

  /* ===================== MINEURS ===================== */
  {
    id: "227-22", art: "227-22", code: "Code pénal", theme: "mineurs",
    titre: "Corruption de mineur",
    materiel: "Favoriser ou tenter de favoriser la corruption d'un mineur ; pour un majeur, organiser des réunions à caractère sexuel auxquelles un mineur assiste ou participe, ou y assister en connaissance de cause.",
    moral: "Intention de pervertir le mineur.",
    peines: [
      ["Base", "5 ans d'emprisonnement et 75 000 € d'amende"],
      ["Mineur mis en contact via un réseau de communications électroniques, ou faits à l'école / ses abords", "7 ans et 100 000 €"],
      ["Mineur de 15 ans", "10 ans et 150 000 €"],
      ["Bande organisée", "10 ans et 1 000 000 €"]
    ],
    notes: "", tentative: true, version: "23/04/2021", url: cp("min"), verifie: true,
    motscles: "corruption mineur réseau contact"
  },
  {
    id: "227-22-1", art: "227-22-1", code: "Code pénal", theme: "mineurs",
    titre: "Propositions sexuelles à un mineur de 15 ans par voie électronique",
    materiel: "Pour un majeur, faire des propositions sexuelles à un mineur de 15 ans, ou à une personne se présentant comme telle, en utilisant un moyen de communication électronique.",
    moral: "Conscience de s'adresser à un mineur de 15 ans (ou présenté comme tel).",
    peines: [
      ["Base", "2 ans d'emprisonnement et 30 000 € d'amende"],
      ["Propositions suivies d'une rencontre", "5 ans et 75 000 €"]
    ],
    notes: "Le texte vise aussi la personne « se présentant comme » mineure : il couvre donc les enquêteurs sous pseudonyme (CPP 230-46). C'est le « grooming » ou pédopiégeage.",
    tentative: false, version: "23/04/2021", url: cp("min"), verifie: true,
    motscles: "grooming pédopiégeage proposition sexuelle mineur chat rencontre"
  },
  {
    id: "227-22-2", art: "227-22-2", code: "Code pénal", theme: "mineurs",
    titre: "Incitation d'un mineur à des actes sexuels par voie électronique",
    materiel: "Hors viol ou agression sexuelle, pour un majeur, inciter un mineur, par un moyen de communication électronique, à commettre tout acte de nature sexuelle sur lui-même, sur ou avec un tiers, même si l'incitation n'est pas suivie d'effet.",
    moral: "Volonté d'inciter.",
    peines: [
      ["Base", "7 ans d'emprisonnement et 100 000 € d'amende"],
      ["Mineur de 15 ans", "10 ans et 150 000 €"],
      ["Bande organisée", "10 ans et 1 000 000 €"]
    ],
    notes: "Loi n° 2021-478 du 21 avril 2021. Vise notamment le « viol à distance » par webcam lorsqu'il n'est pas qualifié de viol.",
    tentative: false, version: "23/04/2021", url: cp("min"), verifie: true,
    motscles: "webcam incitation mineur acte sexuel live distance"
  },
  {
    id: "227-23", art: "227-23", code: "Code pénal", theme: "mineurs",
    titre: "Images pédopornographiques",
    materiel: "Fixer, enregistrer ou transmettre en vue de sa diffusion l'image ou la représentation pornographique d'un mineur (pour un mineur de 15 ans, même sans intention de diffuser) ; offrir, rendre disponible, diffuser, importer ou exporter une telle image ; consulter habituellement ou en contrepartie d'un paiement un service en ligne qui la met à disposition ; l'acquérir ou la détenir.",
    moral: "Conscience du caractère pédopornographique.",
    peines: [
      ["Base (fixation, diffusion, consultation habituelle, acquisition, détention)", "5 ans d'emprisonnement et 75 000 € d'amende"],
      ["Diffusion à un public non déterminé via un réseau de communications électroniques", "7 ans et 100 000 €"],
      ["Bande organisée", "10 ans et 500 000 €"]
    ],
    notes: "S'applique aussi aux images d'une personne ayant l'apparence d'un mineur, sauf preuve qu'elle avait 18 ans lors de la fixation. Tentative punie.",
    tentative: true, version: "23/04/2021", url: cp("min"), verifie: true,
    motscles: "pédopornographie pedo csam images enfants détention téléchargement"
  },
  {
    id: "227-23-1", art: "227-23-1", code: "Code pénal", theme: "mineurs",
    titre: "Sollicitation d'images pornographiques auprès d'un mineur",
    materiel: "Pour un majeur, solliciter auprès d'un mineur la diffusion ou la transmission d'images, vidéos ou représentations à caractère pornographique de ce mineur.",
    moral: "Volonté d'obtenir ces images.",
    peines: [
      ["Base", "7 ans d'emprisonnement et 100 000 € d'amende"],
      ["Mineur de 15 ans", "10 ans et 150 000 €"],
      ["Bande organisée", "10 ans et 1 000 000 €"]
    ],
    notes: "Constituée par la seule demande, même sans envoi.",
    tentative: false, version: "23/04/2021", url: cp("min"), verifie: true,
    motscles: "nudes demande mineur photos snapchat sollicitation"
  },
  {
    id: "227-24", art: "227-24", code: "Code pénal", theme: "mineurs",
    titre: "Messages violents, pornographiques ou dangereux accessibles aux mineurs",
    materiel: "Fabriquer, transporter, diffuser par quelque moyen que ce soit un message à caractère violent, incitant au terrorisme, pornographique, portant gravement atteinte à la dignité humaine ou incitant des mineurs à des jeux dangereux, ou en faire commerce, lorsque ce message est susceptible d'être vu ou perçu par un mineur.",
    moral: "Conscience que le message peut être vu par un mineur.",
    peines: [["Peine", "3 ans d'emprisonnement et 75 000 € d'amende"]],
    notes: "L'infraction est constituée même si l'accès du mineur résulte d'une simple déclaration d'avoir 18 ans : fondement de l'obligation de vérification d'âge des sites pornographiques.",
    tentative: false, version: "02/12/2021", url: cp("min"), verifie: true,
    motscles: "pornographie site vérification âge mineurs défis dangereux"
  },

  /* ===================== BIENS ===================== */
  {
    id: "313-1", art: "313-1", code: "Code pénal", theme: "biens",
    titre: "Escroquerie (hameçonnage, faux conseiller bancaire, arnaques en ligne)",
    materiel: "Tromper une personne par l'usage d'un faux nom ou d'une fausse qualité, l'abus d'une qualité vraie, ou des manœuvres frauduleuses, pour la déterminer à remettre des fonds, valeurs ou un bien, à fournir un service ou à consentir un acte opérant obligation ou décharge.",
    moral: "Intention de tromper pour obtenir la remise.",
    peines: [
      ["Base", "5 ans d'emprisonnement et 375 000 € d'amende"],
      ["Aggravée (313-2) : victime vulnérable, appel au public, fausse qualité d'agent public…", "7 ans et 750 000 €"],
      ["Bande organisée (313-2)", "10 ans et 1 000 000 €"]
    ],
    notes: "Un faux site, un faux SMS ou un faux appel « du service fraude » constituent des manœuvres frauduleuses. Article 313-2 modifié par la loi n° 2026-534 du 25 juin 2026. Tentative punie (313-3).",
    tentative: true, version: "27/06/2026 (313-2)", url: cp("escr"), verifie: true,
    motscles: "escroquerie phishing hameçonnage arnaque faux conseiller romance scam faux site sms colis"
  },
  {
    id: "312-1", art: "312-1", code: "Code pénal", theme: "biens",
    titre: "Extorsion (rançongiciel)",
    materiel: "Obtenir par violence, menace de violences ou contrainte une signature, un engagement, une renonciation, la révélation d'un secret ou la remise de fonds, valeurs ou d'un bien.",
    moral: "Volonté d'obtenir la remise par la contrainte.",
    peines: [
      ["Base", "7 ans d'emprisonnement et 100 000 € d'amende"],
      ["Bande organisée (312-6)", "20 ans de réclusion criminelle et 150 000 €"]
    ],
    notes: "La demande de rançon après chiffrement des données (rançongiciel) est qualifiée d'extorsion (la contrainte résulte du blocage du système), en concours avec 323-1 à 323-3. Tentative punie (312-9).",
    tentative: true, version: "01/01/2002", url: cp("ext"), verifie: true,
    motscles: "rançongiciel ransomware rançon extorsion bitcoin"
  },

  /* ===================== DONNÉES ===================== */
  {
    id: "226-18", art: "226-18", code: "Code pénal", theme: "donnees",
    titre: "Collecte frauduleuse, déloyale ou illicite de données personnelles",
    materiel: "Collecter des données à caractère personnel par un moyen frauduleux, déloyal ou illicite.",
    moral: "Conscience du caractère déloyal de la collecte.",
    peines: [["Peine", "5 ans d'emprisonnement et 300 000 € d'amende"]],
    notes: "Qualification type du hameçonnage (le faux formulaire collecte identifiants et coordonnées bancaires), en concours avec l'escroquerie.",
    tentative: false, version: "07/08/2004", url: cp("fich"), verifie: true,
    motscles: "collecte données phishing formulaire aspiration scraping"
  },
  {
    id: "226-17", art: "226-17", code: "Code pénal", theme: "donnees",
    titre: "Traitement de données sans mesures de sécurité",
    materiel: "Procéder ou faire procéder à un traitement de données personnelles sans mettre en œuvre les mesures de sécurité prescrites par le RGPD ou la loi Informatique et libertés.",
    moral: "Infraction intentionnelle (le manquement aux mesures doit être conscient).",
    peines: [["Peine", "5 ans d'emprisonnement et 300 000 € d'amende"]],
    notes: "226-17-1 punit des mêmes peines le défaut de notification d'une violation de données à la CNIL ou aux personnes concernées.",
    tentative: false, version: "01/06/2019", url: cp("fich"), verifie: true,
    motscles: "sécurité données rgpd fuite violation notification cnil"
  },
  {
    id: "226-22", art: "226-22", code: "Code pénal", theme: "donnees",
    titre: "Divulgation illicite de données personnelles",
    materiel: "Pour une personne qui a recueilli des données personnelles à l'occasion de leur traitement, les porter sans autorisation à la connaissance d'un tiers non habilité, lorsque cette divulgation porte atteinte à la considération ou à l'intimité de la personne.",
    moral: "Intentionnel, ou par imprudence/négligence (peine réduite).",
    peines: [
      ["Intentionnelle", "5 ans d'emprisonnement et 300 000 € d'amende"],
      ["Par imprudence ou négligence", "3 ans et 100 000 €"]
    ],
    notes: "Poursuite uniquement sur plainte de la victime.",
    tentative: false, version: "07/08/2004", url: cp("fich"), verifie: true,
    plainte: true, motscles: "divulgation fuite base de données fichier"
  },

  /* ===================== CONTENUS ===================== */
  {
    id: "421-2-5", art: "421-2-5", code: "Code pénal", theme: "contenus",
    titre: "Provocation directe aux actes de terrorisme et apologie",
    materiel: "Provoquer directement à des actes de terrorisme ou faire publiquement l'apologie de ces actes.",
    moral: "Conscience du caractère apologétique ou provocateur.",
    peines: [
      ["Base", "5 ans d'emprisonnement et 75 000 € d'amende"],
      ["Via un service de communication au public en ligne", "7 ans et 100 000 €"]
    ],
    notes: "Le Conseil constitutionnel (2020-845 QPC) a précisé que le texte ne réprime pas le « recel d'apologie ». La consultation habituelle de sites terroristes (ancien 421-2-5-2) a été censurée deux fois (2017) ; elle n'est plus qu'un élément possible de l'entreprise individuelle terroriste (421-2-6).",
    tentative: false, version: "15/11/2014", url: cp("terr"), verifie: true,
    motscles: "terrorisme apologie propagande jihadisme provocation"
  },
  {
    id: "421-2-5-1", art: "421-2-5-1", code: "Code pénal", theme: "contenus",
    titre: "Entrave au retrait ou au blocage de contenus terroristes",
    materiel: "Extraire, reproduire et transmettre intentionnellement des données faisant l'apologie du terrorisme ou y provoquant, afin d'entraver, en connaissance de cause, les procédures de retrait ou de blocage (LCEN art. 6-1 ; CPP 706-23).",
    moral: "Intention d'entraver les procédures de retrait.",
    peines: [["Peine", "5 ans d'emprisonnement et 75 000 € d'amende"]],
    notes: "Vise les « sites miroirs » et le re-téléversement de contenus retirés.",
    tentative: false, version: "05/06/2016", url: cp("terr"), verifie: true,
    motscles: "miroir retrait blocage contenu terroriste repost"
  },
  {
    id: "lcen-6-vii", art: "LCEN 6 VII", code: "Loi n° 2004-575 (LCEN)", theme: "contenus",
    titre: "Signalement abusif d'un contenu pour en obtenir le retrait",
    materiel: "Présenter à un hébergeur un contenu ou une activité comme illicite dans le but d'en obtenir le retrait ou d'en faire cesser la diffusion, en sachant cette information inexacte.",
    moral: "Connaissance de l'inexactitude.",
    peines: [["Peine", "1 an d'emprisonnement et 15 000 € d'amende"]],
    notes: "Version consolidée de la LCEN après la loi SREN (2024).",
    tentative: false, version: "consolidée 2026", url: window.LF.lcen, verifie: true,
    motscles: "signalement abusif notification hébergeur retrait"
  },
  {
    id: "lcen-6-v", art: "LCEN 6 V", code: "Loi n° 2004-575 (LCEN)", theme: "contenus",
    titre: "Défaut de conservation ou de communication des données d'identification",
    materiel: "Pour un hébergeur ou un fournisseur d'accès, ne pas conserver les données permettant d'identifier les créateurs de contenus, ou ne pas déférer à la demande de l'autorité judiciaire de les communiquer.",
    moral: "Manquement à l'obligation légale.",
    peines: [["Personne physique", "1 an d'emprisonnement et 250 000 € d'amende"]],
    notes: "Montant relevé par la loi SREN. À articuler avec le règlement européen sur les services numériques (DSA).",
    tentative: false, version: "consolidée 2026", url: window.LF.lcen, verifie: true,
    motscles: "hébergeur fai conservation données réquisition identification"
  },

  /* ===================== PROCÉDURE / CHIFFREMENT ===================== */
  {
    id: "434-15-2", art: "434-15-2", code: "Code pénal", theme: "procedure",
    titre: "Refus de remettre la convention secrète de déchiffrement",
    materiel: "Pour quiconque a connaissance de la convention secrète de déchiffrement d'un moyen de cryptologie susceptible d'avoir été utilisé pour préparer, faciliter ou commettre un crime ou un délit, refuser de la remettre aux autorités judiciaires ou de la mettre en œuvre, sur leurs réquisitions.",
    moral: "Refus conscient opposé à une réquisition.",
    peines: [
      ["Base", "3 ans d'emprisonnement et 270 000 € d'amende"],
      ["Si la remise aurait permis d'éviter ou de limiter un crime ou un délit", "5 ans et 450 000 €"]
    ],
    notes: "La Cour de cassation (assemblée plénière, 7 novembre 2022, n° 21-83.146) admet que le code de déverrouillage d'un téléphone équipé d'un moyen de cryptologie peut constituer une telle convention.",
    tentative: false, version: "05/06/2016", url: cp("just"), verifie: true,
    motscles: "code pin déverrouillage téléphone chiffrement refus garde à vue mot de passe"
  },
  {
    id: "132-79", art: "132-79", code: "Code pénal", theme: "procedure",
    titre: "Circonstance aggravante : usage d'un moyen de cryptologie",
    materiel: "Utilisation d'un moyen de cryptologie pour préparer ou commettre un crime ou un délit, ou pour en faciliter la préparation ou la commission.",
    moral: "—",
    peines: [
      ["Peine maximale relevée", "3 ans ou moins : doublée ; 5 ans → 7 ans ; 7 ans → 10 ans ; 10 ans → 15 ans de réclusion ; 15 → 20 ; 20 → 30 ; 30 ans → perpétuité"]
    ],
    notes: "Ne s'applique pas à l'auteur ou complice qui remet, à la demande des autorités, la version en clair des messages et les conventions de déchiffrement.",
    tentative: false, version: "22/06/2004", url: cp("circ"), verifie: true,
    motscles: "cryptologie chiffrement aggravation messagerie chiffrée"
  }
  ];
})();
;
/* ===== js/citations.js ===== */
/* La lettre des textes : premier alinéa (ou alinéa utile) recopié de Légifrance,
   version en vigueur relue le 19 novembre 2026. Ces textes sont des actes officiels. */
window.CITATIONS = {
  "323-1": "Le fait d'accéder ou de se maintenir, frauduleusement, dans tout ou partie d'un système de traitement automatisé de données est puni de trois ans d'emprisonnement et de 100 000 € d'amende.",
  "323-2": "Le fait d'entraver ou de fausser le fonctionnement d'un système de traitement automatisé de données est puni de cinq ans d'emprisonnement et de 150 000 € d'amende.",
  "323-3": "Le fait d'introduire frauduleusement des données dans un système de traitement automatisé, d'extraire, de détenir, de reproduire, de transmettre, de supprimer ou de modifier frauduleusement les données qu'il contient est puni de cinq ans d'emprisonnement et de 150 000 € d'amende.",
  "323-3-1": "Le fait, sans motif légitime, notamment de recherche ou de sécurité informatique, d'importer, de détenir, d'offrir, de céder ou de mettre à disposition un équipement, un instrument, un programme informatique ou toute donnée conçus ou spécialement adaptés pour commettre une ou plusieurs des infractions prévues par les articles 323-1 à 323-3 est puni des peines prévues respectivement pour l'infraction elle-même ou pour l'infraction la plus sévèrement réprimée.",
  "323-3-2": "I.-Le fait, pour une personne dont l'activité consiste à fournir un service de plateforme en ligne […] qui restreint l'accès à ce service aux personnes utilisant des techniques d'anonymisation des connexions ou qui ne respecte pas les obligations mentionnées au V du même article 6 ou celles mentionnées aux articles 15,16 et 18 du règlement (UE) 2022/2065 […], de permettre sciemment la cession de produits, de contenus ou de services dont la cession, l'offre, l'acquisition ou la détention sont manifestement illicites est puni de sept ans d'emprisonnement et de 500 000 euros d'amende.",
  "323-4": "La participation à un groupement formé ou à une entente établie en vue de la préparation, caractérisée par un ou plusieurs faits matériels, d'une ou de plusieurs des infractions prévues par les articles 323-1 à 323-3-1 est punie des peines prévues pour l'infraction elle-même ou pour l'infraction la plus sévèrement réprimée.",
  "323-4-1": "Lorsque les infractions prévues aux articles 323-1 à 323-3-1 ont été commises en bande organisée, la peine est portée à dix ans d'emprisonnement et à 300 000 € d'amende.",
  "323-4-2": "Lorsque les infractions prévues aux articles 323-1 à 323-3-1 ont pour effet d'exposer autrui à un risque immédiat de mort ou de blessures de nature à entraîner une mutilation ou une infirmité permanente ou de faire obstacle aux secours destinés à faire échapper une personne à un péril imminent ou à combattre un sinistre présentant un danger pour la sécurité des personnes, la peine est portée à dix ans d'emprisonnement et à 300 000 € d'amende.",
  "222-33-2-2": "Le fait de harceler une personne par des propos ou comportements répétés ayant pour objet ou pour effet une dégradation de ses conditions de vie se traduisant par une altération de sa santé physique ou mentale est puni d'un an d'emprisonnement et de 15 000 € d'amende lorsque ces faits ont causé une incapacité totale de travail inférieure ou égale à huit jours ou n'ont entraîné aucune incapacité de travail.",
  "222-33-2-1": "Le fait de harceler son conjoint, son partenaire lié par un pacte civil de solidarité ou son concubin par des propos ou comportements répétés ayant pour objet ou pour effet une dégradation de ses conditions de vie se traduisant par une altération de sa santé physique ou mentale est puni de trois ans d'emprisonnement et de 45 000 € d'amende lorsque ces faits ont causé une incapacité totale de travail inférieure ou égale à huit jours ou n'ont entraîné aucune incapacité de travail […].",
  "222-33-2-3": "Constituent un harcèlement scolaire les faits de harcèlement moral définis aux quatre premiers alinéas de l'article 222-33-2-2 lorsqu'ils sont commis à l'encontre d'un élève par toute personne étudiant ou exerçant une activité professionnelle au sein du même établissement d'enseignement.",
  "226-1": "Est puni d'un an d'emprisonnement et de 45 000 euros d'amende le fait, au moyen d'un procédé quelconque, volontairement de porter atteinte à l'intimité de la vie privée d'autrui : 1° En captant, enregistrant ou transmettant, sans le consentement de leur auteur, des paroles prononcées à titre privé ou confidentiel ; 2° En fixant, enregistrant ou transmettant, sans le consentement de celle-ci, l'image d'une personne se trouvant dans un lieu privé. […]",
  "226-2-1": "Est puni des mêmes peines le fait, en l'absence d'accord de la personne pour la diffusion, de porter à la connaissance du public ou d'un tiers tout enregistrement ou tout document portant sur des paroles ou des images présentant un caractère sexuel, obtenu, avec le consentement exprès ou présumé de la personne ou par elle-même, à l'aide de l'un des actes prévus à l'article 226-1.",
  "226-3": "Est puni de cinq ans d'emprisonnement et de 300 000 € d'amende : 1° La fabrication, l'importation, la détention, l'exposition, l'offre, la location ou la vente d'appareils ou de dispositifs techniques de nature à permettre la réalisation d'opérations pouvant constituer l'infraction prévue par le deuxième alinéa de l'article 226-15 ou qui, conçus pour la détection à distance des conversations, permettent de réaliser l'infraction prévue par l'article 226-1 […].",
  "226-4-1": "Le fait d'usurper l'identité d'un tiers ou de faire usage d'une ou plusieurs données de toute nature permettant de l'identifier en vue de troubler sa tranquillité ou celle d'autrui, ou de porter atteinte à son honneur ou à sa considération, est puni d'un an d'emprisonnement et de 15 000 € d'amende.",
  "226-8": "Est puni d'un an d'emprisonnement et de 15 000 euros d'amende le fait de porter à la connaissance du public ou d'un tiers, par quelque voie que ce soit, le montage réalisé avec les paroles ou l'image d'une personne sans son consentement, s'il n'apparaît pas à l'évidence qu'il s'agit d'un montage ou s'il n'en est pas expressément fait mention. Est assimilé à l'infraction mentionnée au présent alinéa et puni des mêmes peines le fait de porter à la connaissance du public ou d'un tiers, par quelque voie que ce soit, un contenu visuel ou sonore généré par un traitement algorithmique et représentant l'image ou les paroles d'une personne, sans son consentement, s'il n'apparaît pas à l'évidence qu'il s'agit d'un contenu généré algorithmiquement ou s'il n'en est pas expressément fait mention.",
  "226-8-1": "Est puni de deux ans d'emprisonnement et de 60 000 euros d'amende le fait de porter à la connaissance du public ou d'un tiers, par quelque voie que ce soit, un montage à caractère sexuel réalisé avec les paroles ou l'image d'une personne, sans son consentement. Est assimilé à l'infraction mentionnée au présent alinéa et puni des mêmes peines le fait de porter à la connaissance du public ou d'un tiers, par quelque voie que ce soit, un contenu visuel ou sonore à caractère sexuel généré par un traitement algorithmique et reproduisant l'image ou les paroles d'une personne, sans son consentement.",
  "226-15": "Le fait, commis de mauvaise foi, d'ouvrir, de supprimer, de retarder ou de détourner des correspondances arrivées ou non à destination et adressées à des tiers, ou d'en prendre frauduleusement connaissance, est puni d'un an d'emprisonnement et de 45 000 euros d'amende. Est puni des mêmes peines le fait, commis de mauvaise foi, d'intercepter, de détourner, d'utiliser ou de divulguer des correspondances émises, transmises ou reçues par la voie électronique ou de procéder à l'installation d'appareils de nature à permettre la réalisation de telles interceptions.",
  "223-1-1": "Le fait de révéler, de diffuser ou de transmettre, par quelque moyen que ce soit, des informations relatives à la vie privée, familiale ou professionnelle d'une personne permettant de l'identifier ou de la localiser aux fins de l'exposer ou d'exposer les membres de sa famille à un risque direct d'atteinte à la personne ou aux biens que l'auteur ne pouvait ignorer est puni de trois ans d'emprisonnement et de 45 000 euros d'amende.",
  "312-10": "Le chantage est le fait d'obtenir, en menaçant de révéler ou d'imputer des faits de nature à porter atteinte à l'honneur ou à la considération, soit une signature, un engagement ou une renonciation, soit la révélation d'un secret, soit la remise de fonds, de valeurs ou d'un bien quelconque.",
  "227-22": "Le fait de favoriser ou de tenter de favoriser la corruption d'un mineur est puni de cinq ans d'emprisonnement et de 75 000 euros d'amende. Ces peines sont portées à sept ans d'emprisonnement et 100 000 euros d'amende lorsque le mineur a été mis en contact avec l'auteur des faits grâce à l'utilisation, pour la diffusion de messages à destination d'un public non déterminé, d'un réseau de communications électroniques […].",
  "227-22-1": "Le fait pour un majeur de faire des propositions sexuelles à un mineur de quinze ans ou à une personne se présentant comme telle en utilisant un moyen de communication électronique est puni de deux ans d'emprisonnement et de 30 000 euros d'amende.",
  "227-22-2": "Hors les cas de viol ou d'agression sexuelle, le fait pour un majeur d'inciter un mineur, par un moyen de communication électronique, à commettre tout acte de nature sexuelle, soit sur lui-même, soit sur ou avec un tiers, y compris si cette incitation n'est pas suivie d'effet, est puni de sept ans d'emprisonnement et de 100 000 euros d'amende.",
  "227-23": "Le fait, en vue de sa diffusion, de fixer, d'enregistrer ou de transmettre l'image ou la représentation d'un mineur lorsque cette image ou cette représentation présente un caractère pornographique est puni de cinq ans d'emprisonnement et de 75 000 euros d'amende. Lorsque l'image ou la représentation concerne un mineur de quinze ans, ces faits sont punis même s'ils n'ont pas été commis en vue de la diffusion de cette image ou représentation.",
  "227-23-1": "Le fait pour un majeur de solliciter auprès d'un mineur la diffusion ou la transmission d'images, vidéos ou représentations à caractère pornographique dudit mineur est puni de sept ans d'emprisonnement et de 100 000 euros d'amende.",
  "227-24": "Le fait soit de fabriquer, de transporter, de diffuser par quelque moyen que ce soit et quel qu'en soit le support un message à caractère violent, incitant au terrorisme, pornographique, y compris des images pornographiques impliquant un ou plusieurs animaux, ou de nature à porter gravement atteinte à la dignité humaine ou à inciter des mineurs à se livrer à des jeux les mettant physiquement en danger, soit de faire commerce d'un tel message, est puni de trois ans d'emprisonnement et de 75 000 euros d'amende lorsque ce message est susceptible d'être vu ou perçu par un mineur.",
  "313-1": "L'escroquerie est le fait, soit par l'usage d'un faux nom ou d'une fausse qualité, soit par l'abus d'une qualité vraie, soit par l'emploi de manoeuvres frauduleuses, de tromper une personne physique ou morale et de la déterminer ainsi, à son préjudice ou au préjudice d'un tiers, à remettre des fonds, des valeurs ou un bien quelconque, à fournir un service ou à consentir un acte opérant obligation ou décharge.",
  "312-1": "L'extorsion est le fait d'obtenir par violence, menace de violences ou contrainte soit une signature, un engagement ou une renonciation, soit la révélation d'un secret, soit la remise de fonds, de valeurs ou d'un bien quelconque.",
  "226-17": "Le fait de procéder ou de faire procéder à un traitement de données à caractère personnel sans mettre en oeuvre les mesures prescrites aux articles 24,25,30 et 32 du règlement (UE) 2016/679 du 27 avril 2016 précité ou au 6° de l'article 4 et aux articles 99 à 101 de la loi n° 78-17 du 6 janvier 1978 précitée est puni de cinq ans d'emprisonnement et de 300 000 euros d'amende.",
  "226-18": "Le fait de collecter des données à caractère personnel par un moyen frauduleux, déloyal ou illicite est puni de cinq ans d'emprisonnement et de 300 000 euros d'amende.",
  "226-22": "Le fait, par toute personne qui a recueilli, à l'occasion de leur enregistrement, de leur classement, de leur transmission ou d'une autre forme de traitement, des données à caractère personnel dont la divulgation aurait pour effet de porter atteinte à la considération de l'intéressé ou à l'intimité de sa vie privée, de porter, sans autorisation de l'intéressé, ces données à la connaissance d'un tiers qui n'a pas qualité pour les recevoir est puni de cinq ans d'emprisonnement et de 300 000 euros d'amende.",
  "421-2-5": "Le fait de provoquer directement à des actes de terrorisme ou de faire publiquement l'apologie de ces actes est puni de cinq ans d'emprisonnement et de 75 000 € d'amende. Les peines sont portées à sept ans d'emprisonnement et à 100 000 € d'amende lorsque les faits ont été commis en utilisant un service de communication au public en ligne.",
  "421-2-5-1": "Le fait d'extraire, de reproduire et de transmettre intentionnellement des données faisant l'apologie publique d'actes de terrorisme ou provoquant directement à ces actes afin d'entraver, en connaissance de cause, l'efficacité des procédures prévues à l'article 6-1 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique ou à l'article 706-23 du code de procédure pénale est puni de cinq ans d'emprisonnement et de 75 000 € d'amende.",
  "lcen-6-vii": "VII.-Le fait, pour toute personne, de présenter aux personnes dont l'activité consiste à fournir des services d'hébergement un contenu ou une activité comme étant illicite dans le but d'en obtenir le retrait ou d'en faire cesser la diffusion, alors qu'elle sait cette information inexacte, est puni d'un an d'emprisonnement et de 15 000 euros d'amende.",
  "lcen-6-v": "B.-Tout manquement aux obligations mentionnées au A du présent V est puni d'un an d'emprisonnement et de 250 000 euros d'amende. Le fait de ne pas déférer à la demande d'une autorité judiciaire d'obtenir communication des éléments mentionnés au même A est puni des mêmes peines.",
  "434-15-2": "Est puni de trois ans d'emprisonnement et de 270 000 € d'amende le fait, pour quiconque ayant connaissance de la convention secrète de déchiffrement d'un moyen de cryptologie susceptible d'avoir été utilisé pour préparer, faciliter ou commettre un crime ou un délit, de refuser de remettre ladite convention aux autorités judiciaires ou de la mettre en oeuvre, sur les réquisitions de ces autorités délivrées en application des titres II et III du livre Ier du code de procédure pénale.",
  "132-79": "Lorsqu'un moyen de cryptologie au sens de l'article 29 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique a été utilisé pour préparer ou commettre un crime ou un délit, ou pour en faciliter la préparation ou la commission, le maximum de la peine privative de liberté encourue est relevé ainsi qu'il suit : […]"
};
;
/* ===== js/cours.js ===== */
/* Cours — droit pénal de la cybercriminalité.
   Les liens « art » renvoient aux fiches infractions du site (#/infraction/<id>). */

window.PARTIES = [
  { id: "bases", num: "I", titre: "Comprendre", sous: "Notions, textes et acteurs" },
  { id: "stad", num: "II", titre: "Attaquer les systèmes", sous: "Les atteintes aux STAD" },
  { id: "moyen", num: "III", titre: "Le numérique comme moyen", sous: "Personnes, mineurs, fraudes, contenus" },
  { id: "enquete", num: "IV", titre: "Enquêter et juger", sous: "Procédure et coopération" }
];

window.COURS = [
/* ------------------------------------------------------------------ */
{
  id: "definir", partie: "bases",
  titre: "Qu'est-ce que la cybercriminalité ?",
  resume: "Deux familles d'infractions, une définition qui n'existe pas dans la loi.",
  arts: ["323-1", "313-1", "222-33-2-2"],
  contenu: `
<p>Le mot « cybercriminalité » <strong>n'est défini par aucun texte</strong> du Code pénal. On l'emploie pour désigner l'ensemble des infractions pénales commises au moyen ou à l'encontre d'un système d'information. Pour s'y retrouver, on distingue classiquement deux familles :</p>

<div class="deux">
  <div class="bloc"><h4>1. Le système est la <em>cible</em></h4>
  <p>Ce sont les infractions <strong>spécifiques</strong> au numérique, qui n'existeraient pas sans ordinateur : intrusion, sabotage, vol de données, outils de piratage. Elles sont regroupées aux <a class="art" href="#/infraction/323-1">articles 323-1 et suivants</a> du Code pénal (« atteintes aux systèmes de traitement automatisé de données », STAD).</p></div>
  <div class="bloc"><h4>2. Le numérique est le <em>moyen</em></h4>
  <p>Ce sont des infractions <strong>de droit commun</strong> (escroquerie, harcèlement, chantage, pédopornographie, apologie du terrorisme…) commises grâce aux réseaux. Le législateur en a adapté beaucoup, souvent en faisant de l'usage d'internet une <strong>circonstance aggravante</strong>.</p></div>
</div>

<h3>Une construction par couches</h3>
<ul>
  <li><strong>1978</strong> — loi Informatique et libertés : premières infractions sur les fichiers.</li>
  <li><strong>1988</strong> — loi Godfrain (n° 88-19 du 5 janvier 1988) : naissance des infractions contre les systèmes informatiques.</li>
  <li><strong>1994</strong> — nouveau Code pénal : ces infractions deviennent les articles 323-1 et suivants.</li>
  <li><strong>2004</strong> — loi pour la confiance dans l'économie numérique (LCEN, n° 2004-575) : statut des hébergeurs, aggravation liée à la cryptologie (<a class="art" href="#/infraction/132-79">art. 132-79</a>), outils de piratage (323-3-1).</li>
  <li><strong>2014-2016</strong> — lois antiterroristes : vol de données réprimé (323-3), apologie en ligne aggravée (<a class="art" href="#/infraction/421-2-5">421-2-5</a>), refus de déchiffrement durci (<a class="art" href="#/infraction/434-15-2">434-15-2</a>).</li>
  <li><strong>2016</strong> — loi pour une République numérique : diffusion de contenus intimes (<a class="art" href="#/infraction/226-2-1">226-2-1</a>).</li>
  <li><strong>2018-2022</strong> — harcèlement en meute, protection des mineurs en ligne (lois du 21 avril 2021), harcèlement scolaire (2022).</li>
  <li><strong>2023</strong> — LOPMI (n° 2023-22 du 24 janvier 2023) : peines des STAD relevées, plateformes illicites du darkweb, mise en danger par cyberattaque, obligation de plainte en 72 h pour être indemnisé par son assureur.</li>
  <li><strong>2024</strong> — loi SREN (n° 2024-449 du 21 mai 2024) : hypertrucages (deepfakes), sextorsion aggravée.</li>
  <li><strong>2025</strong> — loi « narcotrafic » (n° 2025-532 du 13 juin 2025) : peines des plateformes illicites portées à 7 ans.</li>
</ul>

<div class="encadre"><strong>Le réflexe de qualification.</strong> Devant un fait numérique, pose-toi toujours deux questions : <em>1) un système a-t-il été pénétré, perturbé ou ses données touchées ?</em> (→ 323-x) ; <em>2) quelle infraction « classique » le numérique a-t-il servi à commettre ?</em> (→ droit commun, souvent aggravé). Les deux se <strong>cumulent</strong> très souvent.</div>
`,
  retenir: [
    "Pas de définition légale de la cybercriminalité.",
    "Deux familles : le système comme cible (323-1 s.) et le numérique comme moyen (droit commun adapté).",
    "Loi fondatrice : loi Godfrain du 5 janvier 1988.",
    "Réformes récentes : LOPMI 2023, SREN 2024, narcotrafic 2025."
  ]
},
/* ------------------------------------------------------------------ */
{
  id: "acteurs", partie: "bases",
  titre: "Les textes internationaux et les acteurs",
  resume: "Convention de Budapest, droit de l'Union, et qui fait quoi en France.",
  arts: ["323-4-1"],
  contenu: `
<h3>Le cadre international et européen</h3>
<ul>
  <li><strong>Convention du Conseil de l'Europe sur la cybercriminalité</strong> (Budapest, 23 novembre 2001) : premier traité international en la matière. Elle impose d'incriminer l'accès illégal, l'interception illégale, l'atteinte aux données et aux systèmes, l'abus de dispositifs, et organise l'entraide (conservation rapide des données, point de contact 24/7). La France l'a ratifiée.</li>
  <li><strong>Directive 2013/40/UE</strong> relative aux attaques contre les systèmes d'information : harmonise les incriminations dans l'Union.</li>
  <li><strong>Règlement sur les services numériques (DSA)</strong> : obligations des plateformes en matière de contenus illicites ; la LCEN française y renvoie désormais.</li>
</ul>

<h3>Les acteurs français</h3>
<table class="tab">
<tr><th>Acteur</th><th>Rôle</th></tr>
<tr><td>Parquet de Paris (section cyber)</td><td>Compétence <strong>concurrente nationale</strong> pour les atteintes aux STAD (CPP art. 706-72-1).</td></tr>
<tr><td>Police et gendarmerie spécialisées</td><td><a href="#/ofac">Office anti-cybercriminalité (OFAC)</a> côté police ; commandement de la gendarmerie dans le cyberespace côté gendarmerie ; enquêteurs spécialisés en région.</td></tr>
<tr><td>PHAROS</td><td>Plateforme de signalement des contenus illicites en ligne.</td></tr>
<tr><td>Plainte en ligne</td><td>Dispositif de plainte en ligne pour les escroqueries sur internet.</td></tr>
<tr><td>Cybermalveillance.gouv.fr</td><td>Assistance aux victimes et prévention.</td></tr>
<tr><td>ANSSI</td><td>Autorité nationale de sécurité des systèmes d'information (défense, pas répression).</td></tr>
<tr><td>CNIL</td><td>Protection des données ; peut dénoncer au parquet les infractions des articles 226-16 et suivants.</td></tr>
<tr><td>ARCOM</td><td>Régulation des plateformes (contenus, vérification d'âge).</td></tr>
</table>

<div class="encadre attention"><strong>À vérifier / compléter.</strong> Les noms et missions des services d'enquête évoluent souvent (réorganisations). Cette leçon ne repose pas sur Légifrance : les points de contact sont donnés à titre indicatif.</div>
`,
  retenir: [
    "Convention de Budapest (2001) : le traité de référence.",
    "Paris a une compétence concurrente nationale pour les atteintes aux STAD.",
    "PHAROS = signalement des contenus ; cybermalveillance.gouv.fr = assistance."
  ]
},
/* ------------------------------------------------------------------ */
{
  id: "stad-acces", partie: "stad",
  titre: "L'accès et le maintien frauduleux",
  resume: "L'infraction-socle : entrer ou rester là où l'on n'a pas le droit d'être.",
  arts: ["323-1", "323-4-1"],
  contenu: `
<p>L'<a class="art" href="#/infraction/323-1">article 323-1</a> réprime le fait « d'accéder ou de se maintenir, frauduleusement, dans tout ou partie d'un système de traitement automatisé de données ».</p>

<h3>Qu'est-ce qu'un STAD ?</h3>
<p>La loi ne le définit pas. La jurisprudence l'entend très largement : ordinateur, serveur, site web, réseau, téléphone, objet connecté, carte bancaire, autocommutateur… Tout ensemble capable de traiter automatiquement des données.</p>

<h3>Deux comportements distincts</h3>
<ul>
  <li><strong>L'accès</strong> : pénétrer dans le système sans droit (identifiants volés, faille exploitée, contournement d'une authentification).</li>
  <li><strong>Le maintien</strong> : rester dans le système en sachant qu'on n'y est pas autorisé, même si l'on y est entré par hasard ou de manière autorisée au départ.</li>
</ul>
<div class="encadre"><strong>Jurisprudence clé — l'affaire « Bluetouff ».</strong> La Cour de cassation (crim., 20 mai 2015, n° 14-81.336) a confirmé la condamnation d'une personne entrée sans difficulté dans un extranet mal protégé, mais qui y était <strong>restée</strong> et avait téléchargé des documents après avoir constaté la présence d'un contrôle d'accès. Le défaut de sécurité n'exonère pas : c'est la conscience de ne pas être autorisé qui compte.</div>

<h3>Une échelle de peines</h3>
<table class="tab">
<tr><th>Situation</th><th>Peine</th></tr>
<tr><td>Accès ou maintien simple</td><td>3 ans et 100 000 €</td></tr>
<tr><td>Avec suppression / modification de données ou altération du fonctionnement</td><td>5 ans et 150 000 €</td></tr>
<tr><td>Contre un STAD de données personnelles mis en œuvre par l'État</td><td>7 ans et 300 000 €</td></tr>
<tr><td>En bande organisée (<a class="art" href="#/infraction/323-4-1">323-4-1</a>)</td><td>10 ans et 300 000 €</td></tr>
</table>
<p>La <strong>tentative</strong> est punie des mêmes peines (art. 323-7). Les personnes morales sont responsables (323-6) et des peines complémentaires sont possibles (323-5 : interdictions, confiscation…).</p>

<div class="encadre attention"><strong>L'ancien salarié.</strong> Utiliser des identifiants restés actifs après son départ, c'est accéder <em>frauduleusement</em> : l'autorisation a cessé avec le contrat.</div>
`,
  retenir: [
    "323-1 : accès OU maintien frauduleux — 3 ans et 100 000 €.",
    "Le maintien est punissable même après un accès fortuit (Bluetouff, 2015).",
    "Une faille de sécurité n'exonère pas l'auteur.",
    "Aggravations : 5 ans (dommage), 7 ans (STAD de l'État), 10 ans (bande organisée)."
  ]
},
/* ------------------------------------------------------------------ */
{
  id: "stad-atteintes", partie: "stad",
  titre: "Sabotage, données et outils",
  resume: "Entraver un système, toucher à ses données, fournir les armes.",
  arts: ["323-2", "323-3", "323-3-1", "323-4", "323-4-2", "323-3-2"],
  contenu: `
<h3>Entraver ou fausser le fonctionnement — <a class="art" href="#/infraction/323-2">art. 323-2</a></h3>
<p>Vise tout ce qui empêche le système de fonctionner normalement : <strong>déni de service distribué (DDoS)</strong>, sabotage, effacement de configuration, chiffrement par rançongiciel. 5 ans et 150 000 € (7 ans et 300 000 € pour un STAD de l'État).</p>

<h3>Atteintes aux données — <a class="art" href="#/infraction/323-3">art. 323-3</a></h3>
<p>Introduire, <strong>extraire, détenir, reproduire, transmettre</strong>, supprimer ou modifier frauduleusement des données. Depuis la loi du 13 novembre 2014, la copie de données (« vol de données ») est directement réprimée, ce qui évite le débat sur le vol d'une chose immatérielle. Installer un malware (introduction de données), exfiltrer une base clients, défigurer un site (modification) relèvent de ce texte.</p>

<h3>Les outils — <a class="art" href="#/infraction/323-3-1">art. 323-3-1</a></h3>
<p>Détenir, offrir, céder ou mettre à disposition <strong>sans motif légitime</strong> un programme ou un équipement conçu pour pirater est puni comme l'infraction qu'il permet de commettre. Le « motif légitime » protège notamment la recherche et la sécurité informatique (pentesteurs, chercheurs, formateurs).</p>

<h3>La préparation collective — <a class="art" href="#/infraction/323-4">art. 323-4</a></h3>
<p>Association de malfaiteurs spécifique : participer à un groupement en vue de préparer ces infractions est puni comme l'infraction préparée.</p>

<h3>Les aggravations de la LOPMI (2023)</h3>
<ul>
  <li><a class="art" href="#/infraction/323-4-1">323-4-1</a> : bande organisée — 10 ans et 300 000 €.</li>
  <li><a class="art" href="#/infraction/323-4-2">323-4-2</a> : attaque exposant autrui à un risque immédiat de mort ou de blessures graves, ou faisant obstacle aux secours (hôpitaux, services d'urgence) — 10 ans et 300 000 €.</li>
</ul>

<h3>Les marchés du darkweb — <a class="art" href="#/infraction/323-3-2">art. 323-3-2</a></h3>
<p>L'administrateur d'une plateforme qui permet sciemment la vente de produits manifestement illicites, ou qui offre un service d'intermédiation ou de séquestre, encourt <strong>7 ans et 500 000 €</strong> (10 ans et 1 000 000 € en bande organisée) depuis la loi du 13 juin 2025.</p>

<h3>Le rançongiciel, cas d'école du cumul</h3>
<p>Une attaque par rançongiciel combine : accès frauduleux (323-1), introduction de données (323-3), entrave (323-2), puis <a class="art" href="#/infraction/312-1">extorsion</a> (312-1) pour la demande de rançon — souvent en bande organisée.</p>
<div class="encadre"><strong>Assurance et plainte en 72 heures.</strong> Depuis la LOPMI, l'indemnisation par un assureur des pertes liées à une atteinte à un STAD est subordonnée au dépôt d'une <strong>plainte</strong> au plus tard 72 heures après la connaissance de l'attaque, pour les personnes morales et les professionnels (article L. 12-10-1 du Code des assurances).</div>
`,
  retenir: [
    "323-2 : entrave (DDoS, sabotage) — 5 ans et 150 000 €.",
    "323-3 : données (introduire, extraire, copier, modifier…) — 5 ans et 150 000 €.",
    "323-3-1 : outils sans motif légitime — peine de l'infraction visée.",
    "Darkweb (323-3-2) : 7 ans et 500 000 € depuis juin 2025.",
    "Rançongiciel = 323-1 + 323-2 + 323-3 + extorsion 312-1."
  ]
},
/* ------------------------------------------------------------------ */
{
  id: "personnes", partie: "moyen",
  titre: "Atteintes aux personnes en ligne",
  resume: "Cyberharcèlement, vie privée, revenge porn, deepfakes, usurpation, sextorsion, doxing.",
  arts: ["222-33-2-2", "226-1", "226-2-1", "226-4-1", "226-8", "226-8-1", "312-10", "223-1-1", "226-15"],
  contenu: `
<h3>Le cyberharcèlement</h3>
<p>Le harcèlement moral « général » (<a class="art" href="#/infraction/222-33-2-2">222-33-2-2</a>) est aggravé lorsqu'il est commis par un service de communication au public en ligne ou un support numérique : <strong>2 ans et 30 000 €</strong>, et 3 ans et 45 000 € si une seconde circonstance s'y ajoute (victime mineure, par exemple).</p>
<p>Le texte règle le cas du <strong>harcèlement en meute</strong> (« raid numérique ») : la répétition est caractérisée même si chaque auteur n'a agi qu'une fois, dès lors que les auteurs se sont concertés, ou qu'ils savaient que leurs propos s'ajoutaient à ceux des autres. Voir aussi le harcèlement dans le couple (<a class="art" href="#/infraction/222-33-2-1">222-33-2-1</a>) et le harcèlement scolaire (<a class="art" href="#/infraction/222-33-2-3">222-33-2-3</a>).</p>

<h3>La vie privée</h3>
<ul>
  <li><a class="art" href="#/infraction/226-1">226-1</a> : capter paroles, images (lieu privé) ou <strong>localisation</strong> sans consentement — 1 an et 45 000 € ; 2 ans et 60 000 € dans le couple.</li>
  <li><a class="art" href="#/infraction/226-3">226-3</a> : vendre ou détenir des logiciels espions — 5 ans et 300 000 €.</li>
  <li><a class="art" href="#/infraction/226-15">226-15</a> : lire ou intercepter les messages électroniques d'autrui de mauvaise foi — 1 an et 45 000 €.</li>
  <li><a class="art" href="#/infraction/226-2-1">226-2-1</a> : diffuser sans accord des images sexuelles, <strong>même obtenues avec le consentement</strong> — 2 ans et 60 000 €.</li>
</ul>
<p class="petit">Les infractions 226-1 à 226-2-1 ne peuvent être poursuivies que sur <strong>plainte de la victime</strong> (art. 226-6).</p>

<h3>Les hypertrucages (deepfakes)</h3>
<p>La loi SREN de 2024 a adapté le délit de montage (<a class="art" href="#/infraction/226-8">226-8</a>) aux contenus générés par IA et créé un délit spécifique pour les deepfakes <strong>sexuels</strong> (<a class="art" href="#/infraction/226-8-1">226-8-1</a>) : 2 ans et 60 000 €, 3 ans et 75 000 € s'ils sont publiés en ligne.</p>

<h3>Usurpation d'identité et doxing</h3>
<ul>
  <li><a class="art" href="#/infraction/226-4-1">226-4-1</a> : faux profil, usage du nom ou des données d'un tiers pour troubler sa tranquillité ou nuire à son honneur — 1 an et 15 000 €.</li>
  <li><a class="art" href="#/infraction/223-1-1">223-1-1</a> : publier l'adresse ou des informations d'une personne pour l'exposer à un danger — 3 ans et 45 000 € ; 5 ans si la victime est policier, élu, journaliste, mineure…</li>
</ul>

<h3>La sextorsion</h3>
<p>Menacer de diffuser des images intimes pour obtenir de l'argent est un <a class="art" href="#/infraction/312-10">chantage</a> (312-10). Depuis 2024, il est aggravé (<strong>7 ans et 100 000 €</strong>) lorsqu'il est commis en ligne au moyen d'images sexuelles ou pour en obtenir.</p>
`,
  retenir: [
    "Cyberharcèlement : 2 ans et 30 000 € (aggravation « en ligne »).",
    "Meute : un seul message suffit si l'auteur sait qu'il s'ajoute aux autres.",
    "Revenge porn (226-2-1) : consentir à la photo ≠ consentir à la diffusion.",
    "Deepfake sexuel (226-8-1) : jusqu'à 3 ans et 75 000 € en ligne.",
    "Sextorsion = chantage aggravé, 7 ans et 100 000 €."
  ]
},
/* ------------------------------------------------------------------ */
{
  id: "mineurs", partie: "moyen",
  titre: "La protection des mineurs en ligne",
  resume: "Pédopiégeage, sollicitation d'images, pédopornographie, contenus accessibles aux mineurs.",
  arts: ["227-22-1", "227-22-2", "227-23", "227-23-1", "227-24", "227-22"],
  contenu: `
<p>La loi n° 2021-478 du 21 avril 2021 a profondément remanié ces textes. Ils sont réunis dans le paragraphe « Des infractions sexuelles commises contre les mineurs ».</p>

<table class="tab">
<tr><th>Comportement</th><th>Texte</th><th>Peine de base</th></tr>
<tr><td>Propositions sexuelles à un mineur de 15 ans par voie électronique (pédopiégeage)</td><td><a class="art" href="#/infraction/227-22-1">227-22-1</a></td><td>2 ans et 30 000 € ; 5 ans si rencontre</td></tr>
<tr><td>Demander à un mineur des images pornographiques de lui-même</td><td><a class="art" href="#/infraction/227-23-1">227-23-1</a></td><td>7 ans et 100 000 € ; 10 ans si moins de 15 ans</td></tr>
<tr><td>Inciter un mineur, en ligne, à des actes sexuels</td><td><a class="art" href="#/infraction/227-22-2">227-22-2</a></td><td>7 ans et 100 000 € ; 10 ans si moins de 15 ans</td></tr>
<tr><td>Fixer, diffuser, consulter habituellement, détenir des images pédopornographiques</td><td><a class="art" href="#/infraction/227-23">227-23</a></td><td>5 ans et 75 000 € ; 7 ans si diffusion en ligne</td></tr>
<tr><td>Corruption de mineur</td><td><a class="art" href="#/infraction/227-22">227-22</a></td><td>5 ans ; 7 ans si contact par réseau</td></tr>
<tr><td>Message pornographique ou violent susceptible d'être vu par un mineur</td><td><a class="art" href="#/infraction/227-24">227-24</a></td><td>3 ans et 75 000 €</td></tr>
</table>

<div class="encadre"><strong>« Ou à une personne se présentant comme telle ».</strong> L'article 227-22-1 s'applique même si l'interlocuteur n'est pas réellement mineur — par exemple un enquêteur agissant sous pseudonyme (CPP 230-46). L'enquêteur ne doit cependant jamais <em>provoquer</em> l'infraction.</div>

<div class="encadre attention"><strong>Vérification de l'âge.</strong> L'article 227-24 précise que l'infraction est constituée même si le mineur a simplement déclaré avoir 18 ans : une case « J'ai plus de 18 ans » ne protège pas l'éditeur d'un site pornographique.</div>
`,
  retenir: [
    "Demander des nudes à un mineur (227-23-1) : 7 ans, 10 ans s'il a moins de 15 ans.",
    "Simple détention d'images pédopornographiques : 5 ans et 75 000 €.",
    "227-22-1 couvre aussi la personne « se présentant comme » mineure.",
    "Déclarer avoir 18 ans ne suffit pas (227-24)."
  ]
},
/* ------------------------------------------------------------------ */
{
  id: "fraudes", partie: "moyen",
  titre: "Fraudes, données et contenus illicites",
  resume: "Hameçonnage, arnaques, données personnelles, terrorisme en ligne, hébergeurs.",
  arts: ["313-1", "226-18", "226-17", "226-22", "421-2-5", "421-2-5-1", "lcen-6-v", "lcen-6-vii"],
  contenu: `
<h3>L'hameçonnage (phishing) : un cumul</h3>
<p>Un faux SMS « votre colis est bloqué » renvoyant vers un faux site qui recueille la carte bancaire relève de :</p>
<ul>
  <li>l'<a class="art" href="#/infraction/313-1">escroquerie</a> (313-1) — manœuvres frauduleuses déterminant une remise : 5 ans et 375 000 € ; tentative punie ;</li>
  <li>la <a class="art" href="#/infraction/226-18">collecte déloyale de données</a> (226-18) : 5 ans et 300 000 € ;</li>
  <li>le cas échéant, l'usurpation d'identité ou l'usage d'outils (323-3-1) si l'auteur vend un « kit ».</li>
</ul>
<p>L'escroquerie est aggravée (7 ans et 750 000 €) notamment au préjudice d'une personne vulnérable ou par une personne qui prend indûment la qualité d'agent public (faux policier, faux agent des impôts), et punie de 10 ans et 1 000 000 € en bande organisée.</p>

<h3>Les données personnelles</h3>
<p>Les articles 226-16 à 226-24 sanctionnent pénalement les manquements les plus graves au RGPD : traitement sans sécurité (<a class="art" href="#/infraction/226-17">226-17</a>), défaut de notification d'une fuite (226-17-1), collecte déloyale (226-18), divulgation (<a class="art" href="#/infraction/226-22">226-22</a>). La plupart sont punis de <strong>5 ans et 300 000 €</strong>.</p>

<h3>Le terrorisme en ligne</h3>
<ul>
  <li><a class="art" href="#/infraction/421-2-5">421-2-5</a> : provocation directe et apologie — 5 ans ; <strong>7 ans et 100 000 € en ligne</strong>.</li>
  <li><a class="art" href="#/infraction/421-2-5-1">421-2-5-1</a> : recopier des contenus pour faire échec à leur retrait — 5 ans et 75 000 €.</li>
  <li>La consultation habituelle de sites terroristes n'est <strong>plus</strong> un délit autonome : le Conseil constitutionnel l'a censurée deux fois en 2017.</li>
</ul>

<h3>Les hébergeurs et la LCEN</h3>
<p>Les hébergeurs ne sont pas responsables a priori des contenus qu'ils stockent, mais doivent les retirer promptement lorsqu'ils en ont connaissance, conserver les données d'identification et répondre aux réquisitions (<a class="art" href="#/infraction/lcen-6-v">LCEN art. 6 V</a>). L'autorité administrative peut ordonner le retrait des contenus terroristes ou pédopornographiques (art. 6-1), et un contenu terroriste signalé doit être retiré <strong>en une heure</strong>. Signaler faussement un contenu pour le faire retirer est un délit (<a class="art" href="#/infraction/lcen-6-vii">art. 6 VII</a>).</p>
`,
  retenir: [
    "Phishing = escroquerie (313-1) + collecte déloyale (226-18).",
    "Faux policier ou victime vulnérable : escroquerie aggravée, 7 ans et 750 000 €.",
    "Apologie du terrorisme en ligne : 7 ans et 100 000 €.",
    "Consultation habituelle de sites terroristes : censurée (2017)."
  ]
},
/* ------------------------------------------------------------------ */
{
  id: "procedure", partie: "enquete",
  titre: "Enquêter sur la cybercriminalité",
  resume: "Compétence, pseudonyme, déchiffrement, techniques spéciales — et la recodification de 2029.",
  arts: ["434-15-2", "132-79"],
  contenu: `
<h3>Qui est compétent ?</h3>
<p>Pour les atteintes aux STAD (323-1 à 323-4-1), le procureur, le pôle de l'instruction et les juridictions de <strong>Paris</strong> ont une <strong>compétence concurrente</strong> sur tout le territoire (CPP art. 706-72 et 706-72-1). Un juge d'instruction d'un autre tribunal peut se dessaisir au profit de Paris (706-72-2).</p>

<p class="petit">Chaque acte a sa fiche détaillée dans <a href="#/procedure">Actes d'enquête</a>.</p>

<h3>L'enquête sous pseudonyme — CPP art. 230-46</h3>
<p>Pour les crimes et délits punis d'emprisonnement commis par voie électronique, des enquêteurs <strong>spécialement habilités</strong> peuvent, sous pseudonyme : participer à des échanges électroniques, y compris avec les suspects ; extraire et conserver des preuves ; avec l'accord du procureur ou du juge d'instruction, acquérir des contenus ou services et mettre à disposition des moyens. Les actes ne doivent jamais constituer une <strong>incitation</strong> ayant déterminé l'infraction.</p>

<h3>Le chiffrement</h3>
<ul>
  <li>Le procureur, le juge d'instruction ou l'OPJ autorisé peut requérir toute personne qualifiée pour mettre au clair des données chiffrées ; si la peine encourue est d'au moins 2 ans, il peut recourir aux moyens de l'État couverts par le secret de la défense nationale (CPP art. 230-1 à 230-5).</li>
  <li>Refuser de remettre la convention de déchiffrement est un délit (<a class="art" href="#/infraction/434-15-2">434-15-2</a>) : 3 ans et 270 000 €. Le code de déverrouillage d'un téléphone chiffré peut constituer une telle convention (Cass. ass. plén., 7 novembre 2022).</li>
  <li>Utiliser la cryptologie pour commettre une infraction aggrave la peine (<a class="art" href="#/infraction/132-79">132-79</a>), sauf si l'auteur remet les clés.</li>
</ul>

<h3>Les techniques de la délinquance organisée</h3>
<p>Les atteintes aux STAD en bande organisée (323-4-1), les plateformes illicites (323-3-2) et l'escroquerie en bande organisée figurent dans la liste de l'article 706-73-1. Elles ouvrent : surveillance (706-80), infiltration (706-81, 4 mois renouvelables), interceptions en enquête autorisées par le JLD (706-95, 1 mois renouvelable une fois), dispositifs techniques de recueil des données de connexion de type « IMSI-catcher » (706-95-20), captation de données informatiques, et garde à vue prolongée.</p>

<div class="encadre attention"><strong>Recodification du Code de procédure pénale.</strong> L'ordonnance n° 2025-1091 du 19 novembre 2025 réécrit le CPP : les articles cités ici sont marqués « abrogés » à compter du <strong>1er janvier 2029</strong>, date à laquelle une nouvelle numérotation s'appliquera. Jusque-là, ce sont bien eux qui s'appliquent.</div>
`,
  retenir: [
    "Paris : compétence concurrente nationale pour les atteintes aux STAD (706-72-1).",
    "Enquête sous pseudonyme (230-46) : jamais de provocation à l'infraction.",
    "Refus de livrer la clé de déchiffrement : 3 ans et 270 000 € (434-15-2).",
    "Le CPP sera renuméroté au 1er janvier 2029."
  ]
},
/* ------------------------------------------------------------------ */
{
  id: "donnees-connexion", partie: "enquete",
  titre: "Réquisitions et données de connexion",
  resume: "Obtenir une adresse IP, des fadettes, une localisation : ce que permet le CPP depuis 2022.",
  arts: ["226-4-1", "323-1"],
  contenu: `
<p>Dans une enquête cyber, l'essentiel des preuves est détenu par des tiers : opérateurs, hébergeurs, plateformes, banques. On les obtient par <strong>réquisition</strong>.</p>

<h3>Le principe : requérir toute personne qui détient des informations</h3>
<p>En flagrance, le procureur ou l'OPJ peut requérir toute personne ou organisme de lui remettre des informations, y compris issues d'un système informatique (<a href="#/acte/60-1">CPP art. 60-1</a>). En préliminaire, il faut l'autorisation du procureur (art. 77-1-1). Ne pas répondre est puni de 3 750 € d'amende.</p>

<h3>L'exception : les données de connexion</h3>
<p>Les données qui identifient la source d'une connexion (adresse IP), les données de trafic et de localisation sont très protégées depuis la jurisprudence européenne (<a href="#/arret/lqdn">La Quadrature du Net</a>, <a href="#/arret/prokuratuur">Prokuratuur</a>). Depuis la loi du 2 mars 2022, l'<a href="#/acte/60-1-2">article 60-1-2</a> ne les autorise, à peine de nullité, que pour :</p>
<ul>
  <li>un crime ou un délit puni d'<strong>au moins 3 ans</strong> d'emprisonnement ;</li>
  <li>un délit puni d'<strong>au moins 1 an</strong> commis par un réseau de communications électroniques, pour <strong>identifier l'auteur</strong> ;</li>
  <li>les équipements de la victime, à sa demande ;</li>
  <li>la recherche d'une personne disparue.</li>
</ul>
<div class="encadre"><strong>Application.</strong> Une usurpation d'identité en ligne (<a class="art" href="#/infraction/226-4-1">226-4-1</a>, 1 an) permet de requérir l'adresse IP du faux profil pour identifier son auteur. Un accès frauduleux (<a class="art" href="#/infraction/323-1">323-1</a>, 3 ans) permet aussi d'obtenir les données de trafic.</div>

<h3>Perquisition informatique et données à l'étranger</h3>
<p>Pendant une perquisition, l'OPJ peut accéder aux données accessibles depuis l'ordinateur présent sur place, même stockées ailleurs, par exemple dans le cloud (<a href="#/acte/57-1">art. 57-1</a>). Si elles sont stockées à l'étranger, il faut passer par les engagements internationaux : Convention de Budapest, décision d'enquête européenne, et depuis le 18 août 2026 le <a href="#/europe">règlement e-evidence</a>, qui permet de demander directement les données à un fournisseur établi dans un autre État membre.</p>

<h3>Géolocalisation en temps réel</h3>
<p>Suivre un téléphone ou un véhicule en direct relève d'un régime distinct (<a href="#/acte/230-32">art. 230-32</a>) : crime ou délit puni d'au moins 3 ans, autorisation du procureur pour 8 ou 15 jours, puis du JLD.</p>
`,
  retenir: [
    "Réquisition : 60-1 (flagrance), 77-1-1 (préliminaire, autorisation du procureur).",
    "Données de connexion (60-1-2) : 3 ans, ou 1 an si commis en ligne pour identifier l'auteur.",
    "Données à l'étranger : Budapest, décision d'enquête européenne, e-evidence (depuis le 18 août 2026).",
    "Géolocalisation en temps réel (230-32) : délit puni d'au moins 3 ans."
  ]
}
];
;
/* ===== js/exercices.js ===== */
/* Cas pratiques, vrai/faux et lexique. */

/* Cas pratiques : coche les qualifications pertinentes.
   bonnes : identifiants de fiches attendues ; pieges : fiches proposées mais non pertinentes. */
window.CAS = [
  {
    id: "ex-salarie", titre: "L'ancien salarié",
    faits: "Licencié il y a deux semaines, Karim constate que ses identifiants VPN fonctionnent toujours. Il se connecte au serveur de son ancien employeur et copie le fichier clients sur une clé USB pour démarcher ces clients.",
    bonnes: ["323-1", "323-3"], pieges: ["323-2", "313-1", "226-4-1"],
    correction: "Accès frauduleux (323-1) : l'autorisation a cessé avec le contrat de travail ; le fait que les identifiants marchent encore n'y change rien. Copie du fichier : extraction et reproduction frauduleuses de données (323-3). Aucune entrave au fonctionnement (323-2), ni tromperie pour obtenir une remise (313-1)."
  },
  {
    id: "hopital", titre: "Le rançongiciel à l'hôpital",
    faits: "Un groupe structuré pénètre le réseau d'un hôpital, chiffre les serveurs et exige 2 millions d'euros en cryptomonnaie. Les urgences doivent dérouter les patients pendant trois jours.",
    bonnes: ["323-1", "323-2", "323-3", "312-1", "323-4-1", "323-4-2"], pieges: ["312-10", "226-18"],
    correction: "Cumul classique : accès (323-1), introduction du logiciel et chiffrement des données (323-3), blocage du système (323-2), demande de rançon = extorsion (312-1, au moins tentée). Groupe structuré : bande organisée (323-4-1, et 312-6 pour l'extorsion). Le déroutage des urgences caractérise l'obstacle aux secours / le risque pour la vie (323-4-2). Ce n'est pas un chantage : la contrainte vient du blocage, pas d'une menace de révéler des faits déshonorants."
  },
  {
    id: "colis", titre: "Le faux SMS du colis",
    faits: "Lucie reçoit un SMS : « Votre colis est en attente, réglez 1,99 € de frais ». Le lien mène à un site copiant celui d'un transporteur, où elle saisit sa carte bancaire. 900 € sont ensuite débités.",
    bonnes: ["313-1", "226-18"], pieges: ["323-1", "312-1", "227-24"],
    correction: "Manœuvres frauduleuses (faux SMS, faux site) ayant déterminé la remise de fonds : escroquerie (313-1). Le faux formulaire collecte déloyalement des données personnelles (226-18). Aucun système n'a été piraté : Lucie a elle-même saisi ses données, donc pas de 323-1."
  },
  {
    id: "revenge", titre: "Les photos de l'ex",
    faits: "Pendant leur relation, Julie a envoyé des photos dénudées à Thomas. Après la rupture, il menace de les publier si elle ne lui verse pas 500 €. Elle refuse ; il les poste sur un forum public.",
    bonnes: ["312-10", "226-2-1"], pieges: ["226-8-1", "226-1", "222-33-2-1"],
    correction: "Menace de révélation pour obtenir des fonds par l'utilisation d'images sexuelles en ligne : chantage aggravé (312-10, 7 ans) — la menace ayant été exécutée, 312-11 s'applique aussi. Diffusion sans accord d'images sexuelles obtenues avec le consentement : 226-2-1 (poursuite sur plainte). Pas de deepfake (226-8-1) : les images sont réelles. Pas de 226-1 : les images n'ont pas été captées à son insu."
  },
  {
    id: "deepfake", titre: "Le deepfake dans le groupe de classe",
    faits: "Un étudiant de 21 ans génère avec une application d'IA une fausse image dénudée d'une camarade de promotion, majeure, et la partage dans le groupe WhatsApp privé de la promotion (35 membres).",
    bonnes: ["226-8-1"], pieges: ["227-23", "226-4-1", "226-2-1"],
    correction: "Contenu sexuel généré par algorithme reproduisant l'image d'une personne, porté à la connaissance de tiers sans consentement : 226-8-1 (2 ans et 60 000 €). L'aggravation « en ligne » (3 ans) suppose un service de communication au public : un groupe privé fermé se discute. 226-2-1 vise des images réelles, pas des contenus fabriqués. Si la victime était mineure, il faudrait examiner 227-23, qui vise aussi les « représentations » pornographiques d'un mineur."
  },
  {
    id: "snap", titre: "Les demandes sur Snapchat",
    faits: "Un homme de 34 ans échange sur Snapchat avec Léa, 13 ans, lui fait des propositions sexuelles et lui demande des photos d'elle nue. Elle ne répond pas et prévient ses parents.",
    bonnes: ["227-22-1", "227-23-1"], pieges: ["227-23", "227-24", "222-33-2-2"],
    correction: "Propositions sexuelles par voie électronique à un mineur de 15 ans (227-22-1, 2 ans). Sollicitation d'images pornographiques d'un mineur (227-23-1) : constituée dès la demande, 10 ans car Léa a moins de 15 ans. Aucune image n'a été obtenue : pas de détention au sens de 227-23."
  },
  {
    id: "meute", titre: "Le raid sous la vidéo",
    faits: "Une streameuse publie une vidéo. Un influenceur appelle ses abonnés à « aller lui dire ce qu'on pense d'elle ». En deux jours, 4 000 messages insultants sont postés ; la plupart des auteurs n'ont écrit qu'une fois. Elle est arrêtée 10 jours par son médecin.",
    bonnes: ["222-33-2-2"], pieges: ["223-1-1", "226-4-1", "421-2-5"],
    correction: "Harcèlement en meute (222-33-2-2) : la répétition est caractérisée pour chaque auteur ayant agi à l'instigation de l'influenceur, même avec un seul message. Deux circonstances : usage d'un service en ligne et ITT de plus de 8 jours → 3 ans et 45 000 €. L'influenceur est l'instigateur. Pas de doxing si aucune information de localisation n'a été diffusée."
  },
  {
    id: "faux-profil", titre: "Le faux profil du voisin",
    faits: "En conflit avec son voisin, Marc crée un compte Facebook à son nom, avec sa photo, et y publie des messages racistes pour qu'il soit mal vu dans le quartier.",
    bonnes: ["226-4-1"], pieges: ["313-1", "323-1", "226-8"],
    correction: "Usage du nom et de la photo d'un tiers pour porter atteinte à son honneur et à sa considération : usurpation d'identité (226-4-1), 1 an et 15 000 €. Les propos racistes eux-mêmes peuvent relever de la loi de 1881 sur la presse (non traitée ici). Pas de montage (226-8) : la photo n'est pas modifiée."
  },
  {
    id: "booter", titre: "Le « booter » loué en ligne",
    faits: "Un étudiant développe un service qui permet, pour 10 € par mois, de lancer des attaques par déni de service contre n'importe quel site. Un client s'en sert pour paralyser le site d'un concurrent.",
    bonnes: ["323-3-1", "323-2"], pieges: ["323-3-2", "323-4-2", "313-1"],
    correction: "L'étudiant met à disposition, sans motif légitime, un outil conçu pour commettre une entrave : 323-3-1 (puni comme l'entrave). Le client commet l'entrave elle-même (323-2), 5 ans et 150 000 €. Le service n'est pas une plateforme de cession de produits illicites au sens de 323-3-2."
  },
  {
    id: "code-tel", titre: "Le code du téléphone",
    faits: "Placé en garde à vue pour trafic de stupéfiants, Yanis refuse de donner le code de déverrouillage de son téléphone, chiffré, alors que l'OPJ le lui demande sur réquisition.",
    bonnes: ["434-15-2"], pieges: ["132-79", "323-1"],
    correction: "Le code de déverrouillage d'un téléphone équipé d'un moyen de cryptologie peut constituer une convention secrète de déchiffrement (Cass. ass. plén., 7 novembre 2022) : refus réprimé par 434-15-2 (3 ans et 270 000 €), à condition qu'il y ait une réquisition et que le téléphone ait pu servir à l'infraction. L'aggravation de 132-79 concerne l'usage de la cryptologie pour commettre l'infraction, pas le refus."
  },
  {
    id: "doxing", titre: "L'adresse du policier",
    faits: "Après une interpellation filmée, un internaute publie sur X le nom, l'adresse et la photo de la maison d'un des policiers, avec le message « vous savez où le trouver ».",
    bonnes: ["223-1-1"], pieges: ["226-1", "226-4-1", "222-33-2-2"],
    correction: "Diffusion d'informations permettant de localiser une personne pour l'exposer à un risque d'atteinte que l'auteur ne pouvait ignorer : 223-1-1, aggravé car la victime est dépositaire de l'autorité publique → 5 ans et 75 000 €. Pas de 226-1 : rien n'a été capté dans un lieu privé."
  },
  {
    id: "conjoint", titre: "Les mails du conjoint",
    faits: "Soupçonnant une liaison, Sophie utilise le mot de passe de son mari, qu'elle a deviné, pour lire ses mails, et installe sur son téléphone une application qui lui transmet sa position en temps réel.",
    bonnes: ["226-15", "323-1", "226-1"], pieges: ["226-4-1", "226-3", "313-1"],
    correction: "Prise de connaissance frauduleuse de correspondances électroniques par le conjoint : 226-15 aggravé (2 ans et 60 000 €). Connexion à la messagerie avec un mot de passe non confié : accès frauduleux (323-1). Transmission de la localisation sans consentement par le conjoint : 226-1 aggravé (2 ans et 60 000 €). 226-3 viserait celui qui vend ou détient le logiciel — on peut en discuter pour la détention, mais l'usage relève de 226-1."
  }
];

window.VRAIFAUX = [
  { q: "La cybercriminalité est définie à l'article 323-1 du Code pénal.", r: false, e: "Aucun texte ne définit la cybercriminalité. 323-1 réprime l'accès ou le maintien frauduleux." },
  { q: "Rester dans un système où l'on est entré par hasard peut être puni.", r: true, e: "Le maintien frauduleux est réprimé par 323-1 (affaire Bluetouff, 2015)." },
  { q: "Un système mal protégé ne peut pas faire l'objet d'un accès frauduleux.", r: false, e: "Le défaut de sécurité n'exonère pas : seule compte la conscience de ne pas être autorisé." },
  { q: "L'accès frauduleux simple est puni de 3 ans et 100 000 € depuis la LOPMI.", r: true, e: "Peines relevées par la loi du 24 janvier 2023 (avant : 2 ans et 60 000 €)." },
  { q: "La tentative d'atteinte à un STAD n'est pas punissable.", r: false, e: "L'article 323-7 punit la tentative des mêmes peines." },
  { q: "Un chercheur en sécurité qui détient un outil d'intrusion pour ses tests commet forcément l'infraction de 323-3-1.", r: false, e: "323-3-1 exige l'absence de motif légitime ; la recherche et la sécurité informatique en sont un." },
  { q: "La diffusion d'une photo intime est punie même si la victime avait accepté d'être photographiée.", r: true, e: "226-2-1 vise expressément les contenus obtenus avec le consentement de la personne." },
  { q: "Le cyberharcèlement suppose que chaque auteur ait agi plusieurs fois.", r: false, e: "Harcèlement en meute : un seul message suffit en cas de concertation ou si l'auteur sait qu'il s'ajoute aux autres." },
  { q: "Les poursuites pour atteinte à l'intimité de la vie privée (226-1) supposent une plainte de la victime.", r: true, e: "Article 226-6." },
  { q: "Un deepfake sexuel publié en ligne est puni de 3 ans et 75 000 €.", r: true, e: "226-8-1, issu de la loi SREN du 21 mai 2024." },
  { q: "La consultation habituelle de sites terroristes est un délit autonome en vigueur.", r: false, e: "Censurée deux fois par le Conseil constitutionnel en 2017." },
  { q: "L'apologie du terrorisme est plus sévèrement punie lorsqu'elle est commise en ligne.", r: true, e: "421-2-5 : 7 ans et 100 000 € au lieu de 5 ans et 75 000 €." },
  { q: "Demander une photo nue à un mineur n'est punissable que si la photo est envoyée.", r: false, e: "227-23-1 est constitué par la seule sollicitation." },
  { q: "Déclarer avoir 18 ans suffit à exonérer l'éditeur d'un site pornographique.", r: false, e: "227-24 précise que l'infraction est constituée même dans ce cas." },
  { q: "Refuser de donner le code de son téléphone chiffré peut constituer un délit.", r: true, e: "434-15-2, Cass. ass. plén., 7 novembre 2022." },
  { q: "Le tribunal de Paris a une compétence exclusive pour toutes les cyberattaques.", r: false, e: "Sa compétence est concurrente (706-72-1), pas exclusive." },
  { q: "Pour être indemnisée par son assureur après une cyberattaque, une entreprise doit porter plainte dans les 72 heures.", r: true, e: "Article L. 12-10-1 du Code des assurances (LOPMI)." },
  { q: "Administrer un marché du darkweb est puni de 7 ans et 500 000 € depuis 2025.", r: true, e: "323-3-2, modifié par la loi narcotrafic du 13 juin 2025." },
  { q: "On peut requérir l'adresse IP d'un faux profil pour une usurpation d'identité en ligne, punie d'un an.", r: true, e: "60-1-2, 2° : délit puni d'au moins un an commis par un réseau, pour identifier l'auteur." },
  { q: "La géolocalisation en temps réel est possible pour tout délit puni d'emprisonnement.", r: false, e: "230-32 exige un crime ou un délit puni d'au moins trois ans." },
  { q: "Le règlement e-evidence permet à un juge français de demander directement des données à un fournisseur établi en Irlande.", r: true, e: "Règlement (UE) 2023/1543, applicable depuis le 18 août 2026." },
  { q: "La directive NIS 2 était entièrement transposée en France à l'automne 2026.", r: false, e: "Le projet de loi « Résilience » n'était pas définitivement adopté ; la Commission a saisi la CJUE en juillet 2026." },
  { q: "Au cours d'une perquisition, l'OPJ peut accéder à des données stockées dans le cloud depuis l'ordinateur sur place.", r: true, e: "57-1, si elles sont accessibles depuis le système initial ; à l'étranger, sous réserve des engagements internationaux." },
  { q: "Pendant une enquête sous pseudonyme, l'enquêteur peut inciter un suspect à commettre l'infraction pour le confondre.", r: false, e: "230-46 interdit toute incitation ayant déterminé la commission de l'infraction." }
];

window.LEXIQUE = [
  ["STAD", "Système de traitement automatisé de données : toute installation qui traite automatiquement des données (ordinateur, serveur, réseau, téléphone, objet connecté…). Notion non définie par la loi."],
  ["Accès frauduleux", "Le fait d'entrer sans droit dans un STAD (323-1)."],
  ["Maintien frauduleux", "Le fait de rester dans un STAD en sachant ne pas y être autorisé, même après un accès fortuit (323-1)."],
  ["Hameçonnage (phishing)", "Technique consistant à se faire passer pour un organisme de confiance pour obtenir des identifiants ou des coordonnées bancaires. Qualifié d'escroquerie et de collecte déloyale de données."],
  ["Rançongiciel (ransomware)", "Logiciel malveillant qui chiffre les données et exige une rançon. Qualifié d'atteintes aux STAD et d'extorsion."],
  ["Déni de service (DDoS)", "Saturation d'un service par un afflux de requêtes pour le rendre indisponible. Entrave au fonctionnement (323-2)."],
  ["Booter / stresser", "Service, souvent payant, permettant de lancer des attaques par déni de service. Outil au sens de 323-3-1."],
  ["Logiciel malveillant (malware)", "Programme conçu pour nuire : virus, cheval de Troie, ver, logiciel espion, rançongiciel…"],
  ["Enregistreur de frappe (keylogger)", "Logiciel ou appareil qui capture ce qui est tapé au clavier."],
  ["Botnet", "Réseau de machines infectées pilotées à distance par un attaquant."],
  ["Logiciel espion (stalkerware)", "Application installée à l'insu d'une personne pour surveiller son téléphone. Voir 226-1 et 226-3."],
  ["Darkweb", "Partie du web accessible uniquement par des réseaux d'anonymisation (Tor…). Les marchés illicites relèvent de 323-3-2."],
  ["Séquestre (escrow)", "Service qui conserve le paiement jusqu'à la livraison ; réprimé lorsqu'il facilite des ventes illicites (323-3-2)."],
  ["Cyberharcèlement", "Harcèlement commis par un service en ligne ou un support numérique ; circonstance aggravante de 222-33-2-2."],
  ["Raid numérique", "Harcèlement en meute : nombreux auteurs ciblant la même victime, chacun parfois une seule fois."],
  ["Revenge porn", "Diffusion d'images intimes sans l'accord de la personne (226-2-1)."],
  ["Sextorsion", "Chantage à la diffusion d'images intimes, souvent pour obtenir de l'argent (312-10 aggravé)."],
  ["Hypertrucage (deepfake)", "Contenu visuel ou sonore généré ou modifié par IA pour représenter une personne (226-8 et 226-8-1)."],
  ["Doxing", "Divulgation d'informations personnelles (adresse…) pour exposer quelqu'un à un danger (223-1-1)."],
  ["Pédopiégeage (grooming)", "Manœuvres d'un adulte pour approcher un mineur en ligne à des fins sexuelles (227-22-1)."],
  ["Usurpation d'identité numérique", "Usage du nom ou des données d'un tiers pour nuire (226-4-1)."],
  ["Convention secrète de déchiffrement", "Clé, mot de passe ou code permettant de déchiffrer des données (434-15-2)."],
  ["Cryptologie", "Techniques de chiffrement ; leur usage pour commettre une infraction l'aggrave (132-79)."],
  ["Hébergeur", "Prestataire qui stocke des contenus fournis par des tiers ; responsabilité limitée mais obligation de retrait (LCEN)."],
  ["Enquête sous pseudonyme", "Technique permettant à des enquêteurs habilités d'échanger en ligne sous une fausse identité (CPP 230-46)."],
  ["IMSI-catcher", "Dispositif simulant une antenne-relais pour recueillir les identifiants des téléphones à proximité (CPP 706-95-20)."],
  ["PHAROS", "Plateforme publique de signalement des contenus illicites en ligne."],
  ["LOPMI", "Loi d'orientation et de programmation du ministère de l'Intérieur du 24 janvier 2023."],
  ["SREN", "Loi visant à sécuriser et réguler l'espace numérique du 21 mai 2024."],
  ["Convention de Budapest", "Convention du Conseil de l'Europe sur la cybercriminalité du 23 novembre 2001."]
];
;
/* ===== js/cours-technique.js ===== */
/* Partie V — la technique, vue par l'enquêteur.
   Plan inspiré d'un cours de cybercriminalité et d'investigation (2024/2025) consulté sur Scribd ;
   contenu rédigé à nouveau et rattaché au droit français. */

window.PARTIES.push({ id: "technique", num: "V", titre: "Comprendre la technique", sous: "Attaques, malwares, preuve numérique" });

window.COURS.push(
/* ------------------------------------------------------------------ */
{
  id: "securite-bases", partie: "technique",
  titre: "Les bases de la sécurité informatique",
  resume: "Confidentialité, intégrité, disponibilité : ce qu'une attaque casse, et ce que le droit protège.",
  arts: ["323-1", "323-2", "323-3", "226-17"],
  contenu: `
<p>Les professionnels de la sécurité décrivent tout incident à partir de quelques propriétés que le système doit garantir. Les connaître permet de comprendre le vocabulaire des victimes et des experts, et de faire le lien avec les qualifications pénales.</p>

<h3>La triade « CIA » et son miroir « DAD »</h3>
<table class="tab">
<tr><th>Propriété protégée</th><th>Ce que l'attaque provoque</th><th>Qualification pénale typique</th></tr>
<tr><td><strong>Confidentialité</strong> : seules les personnes autorisées accèdent à l'information.</td><td><strong>Divulgation</strong> (fuite, vol de données).</td><td>Accès frauduleux (<a class="art" href="#/infraction/323-1">323-1</a>), extraction de données (<a class="art" href="#/infraction/323-3">323-3</a>), divulgation (<a class="art" href="#/infraction/226-22">226-22</a>).</td></tr>
<tr><td><strong>Intégrité</strong> : l'information n'est pas modifiée sans autorisation.</td><td><strong>Altération</strong> (modification, chiffrement, défiguration).</td><td>Modification ou suppression de données (<a class="art" href="#/infraction/323-3">323-3</a>), 323-1 alinéa 2.</td></tr>
<tr><td><strong>Disponibilité</strong> : le service fonctionne quand on en a besoin.</td><td><strong>Destruction ou déni</strong> (panne, DDoS, blocage).</td><td>Entrave au fonctionnement (<a class="art" href="#/infraction/323-2">323-2</a>).</td></tr>
</table>
<p>On y ajoute souvent l'<strong>authenticité</strong> (l'interlocuteur ou le document est bien celui qu'il prétend être) et la <strong>non-répudiation</strong> (l'auteur d'une action ne peut pas nier l'avoir faite, grâce à la signature et à l'horodatage). Ces deux notions comptent beaucoup pour la preuve : un journal horodaté et signé est plus solide devant un juge.</p>

<h3>Les conséquences d'un incident pour la victime</h3>
<ul>
  <li><strong>Financières</strong> : remise en état, rançon, perte de chiffre d'affaires.</li>
  <li><strong>Réputation</strong> : perte de confiance des clients et partenaires.</li>
  <li><strong>Stratégiques et opérationnelles</strong> : projets compromis, activité ralentie ou arrêtée.</li>
  <li><strong>Conformité</strong> : manquement à une obligation légale, par exemple la sécurité des données personnelles (<a class="art" href="#/infraction/226-17">226-17</a>) ou la notification d'une fuite à la CNIL sous 72 heures.</li>
</ul>
<div class="encadre"><strong>En stage.</strong> Quand une entreprise dépose plainte, demande-lui quelle propriété a été atteinte : cela oriente directement la qualification et les premières réquisitions.</div>
`,
  retenir: [
    "CIA : confidentialité, intégrité, disponibilité ; DAD : divulgation, altération, destruction.",
    "Confidentialité ↔ 323-1 et 323-3 ; intégrité ↔ 323-3 ; disponibilité ↔ 323-2.",
    "Authenticité et non-répudiation renforcent la valeur des preuves."
  ]
},
/* ------------------------------------------------------------------ */
{
  id: "acteurs-menace", partie: "technique",
  titre: "Qui attaque, et pourquoi ?",
  resume: "Du script kiddie à l'APT : compétences, moyens, motivations, et comment ils entrent.",
  arts: ["323-3-1", "323-4-1", "312-1", "323-1"],
  contenu: `
<h3>Les profils</h3>
<table class="tab">
<tr><th>Profil</th><th>Compétences et moyens</th><th>Exemples de faits</th></tr>
<tr><td><strong>Amateur (« script kiddie »)</strong></td><td>Faibles ; utilise des outils tout faits trouvés en ligne.</td><td>DDoS avec un outil gratuit, défiguration de site.</td></tr>
<tr><td><strong>Hacktiviste</strong></td><td>Variables ; motivation idéologique ou politique.</td><td>DDoS contre des sites institutionnels, fuites de documents.</td></tr>
<tr><td><strong>Cybercriminel organisé</strong></td><td>Élevés ; organisation quasi industrielle, sous-traitance (accès initiaux, négociateurs, blanchiment), « rançongiciel en tant que service ».</td><td>Rançongiciels, fraude bancaire, revente de données.</td></tr>
<tr><td><strong>Menace persistante avancée (APT)</strong></td><td>Très élevés ; souvent liée à un État ; discrète et durable.</td><td>Espionnage, sabotage d'infrastructures.</td></tr>
<tr><td><strong>Initié (« insider »)</strong></td><td>Accès légitime au système ; malveillant ou négligent.</td><td>Salarié qui exfiltre des fichiers avant de partir.</td></tr>
</table>
<p>Les spécialistes parlent aussi de « chapeaux » : <strong>blanc</strong> (autorisé, par exemple un auditeur ou un pentesteur sous contrat), <strong>noir</strong> (malveillant), <strong>gris</strong> (sans autorisation mais sans intention de nuire, par exemple quelqu'un qui teste une faille puis la signale). En droit français, le chapeau gris reste exposé : l'accès sans droit est puni par <a class="art" href="#/infraction/323-1">323-1</a> même sans dommage, et seul un <em>motif légitime</em> protège la détention d'outils (<a class="art" href="#/infraction/323-3-1">323-3-1</a>).</p>

<h3>Les motivations</h3>
<p>Gain financier (rançon, revente de données), espionnage, idéologie, vengeance, chantage, volonté de perturber, ou simple défi. La motivation compte pour l'enquête (piste de l'auteur) et parfois pour la qualification : obtenir une remise par la contrainte, c'est l'<a class="art" href="#/infraction/312-1">extorsion</a>.</p>

<h3>Par où entrent-ils ? Vecteurs et surface d'attaque</h3>
<ul>
  <li><strong>Messages</strong> : mails, SMS, messageries, appels (hameçonnage).</li>
  <li><strong>Réseaux</strong> : prise réseau accessible au public, Wi-Fi mal protégé ou faux point d'accès.</li>
  <li><strong>Systèmes</strong> : services exposés, ports ouverts inutiles, mots de passe par défaut, logiciels non mis à jour.</li>
  <li><strong>Fichiers et supports amovibles</strong> : pièce jointe piégée, clé USB abandonnée.</li>
  <li><strong>Cloud et chaîne d'approvisionnement</strong> : stockage mal configuré, prestataire compromis.</li>
</ul>

<h3>Le renseignement sur la menace</h3>
<p>Les équipes de sécurité partagent des <strong>indicateurs de compromission</strong> (IoC : adresses IP, noms de domaine, empreintes de fichiers malveillants) et des <strong>indicateurs d'attaque</strong> (IoA : comportements suspects en cours). Elles s'appuient sur des sources ouvertes (OSINT), publiques (avis des agences de cybersécurité) et commerciales. Pour l'enquêteur, ces indicateurs servent de point de départ aux réquisitions : un domaine ou une IP de serveur de commande mène à un hébergeur.</p>
`,
  retenir: [
    "Profils : amateur, hacktiviste, cybercriminel organisé, APT, initié.",
    "Chapeau gris : l'accès sans autorisation reste un délit (323-1).",
    "IoC = traces d'une compromission (IP, domaines, empreintes) ; utiles pour les réquisitions."
  ]
},
/* ------------------------------------------------------------------ */
{
  id: "kill-chain", partie: "technique",
  titre: "Anatomie d'une attaque",
  resume: "Les 7 étapes de la « kill chain », et l'infraction qui correspond à chacune.",
  arts: ["323-1", "323-3", "323-3-1", "323-4", "226-18", "312-1"],
  contenu: `
<p>Les attaques ciblées suivent souvent le même enchaînement, popularisé sous le nom de <strong>« cyber kill chain »</strong> (modèle de Lockheed Martin). Le connaître aide à reconstituer la chronologie d'une affaire et à ne rater aucune qualification : chaque étape peut constituer une infraction distincte.</p>

<table class="tab">
<tr><th>Étape</th><th>Ce que fait l'attaquant</th><th>Qualification possible</th></tr>
<tr><td>1. <strong>Reconnaissance</strong></td><td>Collecte d'informations : organigramme, adresses mail, technologies utilisées, réseaux sociaux des salariés.</td><td>Souvent licite seule ; si elle prépare une attaque à plusieurs : <a class="art" href="#/infraction/323-4">323-4</a>.</td></tr>
<tr><td>2. <strong>Armement</strong></td><td>Préparation des outils : mail piégé crédible, logiciel malveillant, faux site.</td><td>Détention ou création d'outils : <a class="art" href="#/infraction/323-3-1">323-3-1</a>.</td></tr>
<tr><td>3. <strong>Livraison</strong></td><td>Envoi des mails ciblés (« spear phishing »), piégeage d'un site fréquenté par la cible (« watering hole »), clé USB.</td><td>Collecte déloyale si un faux formulaire recueille des identifiants : <a class="art" href="#/infraction/226-18">226-18</a>. Tentative de 323-1.</td></tr>
<tr><td>4. <strong>Exploitation</strong></td><td>Utilisation d'une faille ou des identifiants volés pour entrer.</td><td>Accès frauduleux : <a class="art" href="#/infraction/323-1">323-1</a>.</td></tr>
<tr><td>5. <strong>Installation</strong></td><td>Porte dérobée, comptes administrateurs cachés, persistance.</td><td>Introduction et modification de données : <a class="art" href="#/infraction/323-3">323-3</a> ; maintien frauduleux.</td></tr>
<tr><td>6. <strong>Commande et contrôle (C2)</strong></td><td>Liaison avec un serveur distant pour piloter les machines compromises.</td><td>Maintien frauduleux (323-1) ; le serveur de commande est une piste d'enquête (hébergeur, réquisitions).</td></tr>
<tr><td>7. <strong>Actions sur l'objectif</strong></td><td>Vol de données, chiffrement, sabotage, demande de rançon.</td><td>Extraction (323-3), entrave (323-2), <a class="art" href="#/infraction/312-1">extorsion</a>, bande organisée (323-4-1).</td></tr>
</table>

<div class="encadre"><strong>Pour l'enquête.</strong> Les traces se trouvent à chaque étape : en-têtes du mail de livraison, journaux de connexion de l'exploitation, comptes créés à l'installation, flux réseau vers le C2. Une chronologie construite sur ce modèle rend le dossier lisible pour le magistrat.</div>
`,
  retenir: [
    "Kill chain : reconnaissance, armement, livraison, exploitation, installation, C2, actions.",
    "Chaque étape peut être une infraction (323-3-1, 226-18, 323-1, 323-3, 312-1…).",
    "Le serveur de commande et contrôle mène souvent à l'hébergeur, donc aux réquisitions."
  ]
},
/* ------------------------------------------------------------------ */
{
  id: "malwares", partie: "technique",
  titre: "Les logiciels malveillants",
  resume: "Rançongiciel, cheval de Troie, ver, virus, espion, keylogger, rootkit : reconnaître et qualifier.",
  arts: ["323-3", "323-3-1", "323-2", "226-3", "226-1", "312-1"],
  contenu: `
<p>« Malware » désigne tout programme conçu pour nuire. Le Code pénal ne les nomme pas : il réprime ce qu'ils font (introduire des données, entraver, espionner) et le fait de les diffuser (<a class="art" href="#/infraction/323-3-1">323-3-1</a>).</p>

<table class="tab">
<tr><th>Type</th><th>Fonctionnement</th><th>Indices typiques</th></tr>
<tr><td><strong>Rançongiciel</strong></td><td>Chiffre les fichiers ou bloque le système, puis exige une rançon ; souvent aussi exfiltration et menace de publication (« double extorsion »).</td><td>Fichiers renommés, note de rançon, contacts avec un serveur de commande.</td></tr>
<tr><td><strong>Cheval de Troie</strong></td><td>Se présente comme un logiciel légitime (fausse application, version modifiée d'une messagerie) ; le RAT donne un accès à distance.</td><td>Application inconnue, connexions sortantes inhabituelles.</td></tr>
<tr><td><strong>Ver</strong></td><td>Se propage seul, de machine en machine, en exploitant des failles ou des supports amovibles.</td><td>Propagation rapide sur le réseau, trafic anormal.</td></tr>
<tr><td><strong>Virus</strong></td><td>S'attache à des fichiers et se reproduit quand ils sont ouverts. Variante « sans fichier » (fileless) : vit en mémoire et détourne des outils légitimes du système.</td><td>Fichiers modifiés ; pour le fileless, presque rien sur le disque : il faut la mémoire vive.</td></tr>
<tr><td><strong>Logiciel espion</strong></td><td>Collecte discrètement messages, position, micro, caméra. Des outils commerciaux très avancés visent des téléphones sans action de l'utilisateur.</td><td>Batterie, données mobiles, autorisations anormales.</td></tr>
<tr><td><strong>Enregistreur de frappe</strong></td><td>Capture ce qui est tapé (mots de passe) ; peut être logiciel ou matériel (boîtier entre clavier et ordinateur).</td><td>Processus inconnu, petit boîtier sur le câble.</td></tr>
<tr><td><strong>Rootkit</strong></td><td>Se cache au plus profond du système pour garder un accès invisible.</td><td>Difficile à voir depuis la machine infectée : analyse de l'extérieur (copie du disque).</td></tr>
<tr><td><strong>Bombe logique</strong></td><td>Code caché dans un programme, qui se déclenche à une date ou à une condition (par exemple le départ d'un salarié).</td><td>Découverte par analyse du code.</td></tr>
<tr><td><strong>Botnet</strong></td><td>Ensemble de machines infectées pilotées à distance (DDoS, spam, fraude).</td><td>Trafic vers un serveur de commande.</td></tr>
</table>

<h3>Qualifier</h3>
<ul>
  <li>Installer un malware sur la machine d'autrui : introduction frauduleuse de données (<a class="art" href="#/infraction/323-3">323-3</a>) et, selon l'effet, entrave (<a class="art" href="#/infraction/323-2">323-2</a>).</li>
  <li>Le créer, le vendre ou le louer : <a class="art" href="#/infraction/323-3-1">323-3-1</a>.</li>
  <li>Un logiciel espion installé sur le téléphone d'un proche : atteinte à la vie privée (<a class="art" href="#/infraction/226-1">226-1</a>, localisation comprise) ; sa vente ou sa détention : <a class="art" href="#/infraction/226-3">226-3</a>.</li>
  <li>La demande de rançon : <a class="art" href="#/infraction/312-1">extorsion</a>.</li>
</ul>
`,
  retenir: [
    "Ver = se propage seul ; virus = s'attache à des fichiers ; cheval de Troie = se déguise.",
    "Malware « sans fichier » : la preuve est en mémoire vive.",
    "Installer = 323-3 ; vendre ou louer = 323-3-1 ; espionner un proche = 226-1 et 226-3."
  ]
},
/* ------------------------------------------------------------------ */
{
  id: "attaques-reseau", partie: "technique",
  titre: "Attaques réseau et ingénierie sociale",
  resume: "Homme du milieu, DNS, DDoS, et les ressorts psychologiques de l'hameçonnage.",
  arts: ["323-2", "226-15", "313-1", "226-18", "226-4-1"],
  contenu: `
<h3>L'attaque de l'« homme du milieu »</h3>
<p>L'attaquant se place entre deux interlocuteurs pour lire ou modifier leurs échanges : écoute sur un Wi-Fi public, usurpation d'adresses sur un réseau local (ARP spoofing), vol d'un jeton de session pour se faire passer pour l'utilisateur connecté, retrait du chiffrement (passage forcé de HTTPS à HTTP), ou logiciel caché dans le navigateur. Qualifications : interception de correspondances électroniques (<a class="art" href="#/infraction/226-15">226-15</a>) et accès frauduleux (323-1).</p>

<h3>Les attaques sur le DNS</h3>
<p>Le DNS traduit les noms de domaine en adresses IP. L'attaquant peut détourner un nom de domaine (prise de contrôle du compte chez le registraire), empoisonner les réponses DNS pour renvoyer vers un faux site, ou rediriger les visiteurs. Résultat fréquent : un faux site parfaitement crédible, donc de l'hameçonnage.</p>

<h3>Le déni de service distribué (DDoS)</h3>
<ul>
  <li><strong>Volumétrique</strong> : saturer la bande passante (inondations UDP, ICMP).</li>
  <li><strong>Protocolaire</strong> : épuiser les ressources des équipements (inondation de demandes de connexion « SYN »).</li>
  <li><strong>Applicatif</strong> : multiplier les requêtes coûteuses sur un site.</li>
  <li><strong>Par amplification ou réflexion</strong> : envoyer de petites requêtes à des serveurs tiers qui renvoient de grosses réponses vers la victime.</li>
</ul>
<p>Qualification : entrave au fonctionnement (<a class="art" href="#/infraction/323-2">323-2</a>). Louer un service de DDoS (« booter ») relève de <a class="art" href="#/infraction/323-3-1">323-3-1</a>.</p>

<h3>L'ingénierie sociale</h3>
<p>Manipuler une personne pour qu'elle agisse contre son intérêt. Les ressorts les plus utilisés :</p>
<table class="tab">
<tr><th>Ressort</th><th>Exemple</th></tr>
<tr><td>Autorité</td><td>« Ici le service fraude de votre banque », « le directeur général vous demande un virement ».</td></tr>
<tr><td>Intimidation</td><td>« Votre compte sera bloqué », menace de poursuites.</td></tr>
<tr><td>Urgence</td><td>« Vous avez 24 heures », colis bloqué.</td></tr>
<tr><td>Rareté</td><td>Offre limitée, dernière place.</td></tr>
<tr><td>Consensus</td><td>« Tous vos collègues ont déjà validé ».</td></tr>
<tr><td>Familiarité et confiance</td><td>Faux profil d'un proche, relation entretenue pendant des semaines (arnaque aux sentiments).</td></tr>
</table>
<p>Techniques associées : hameçonnage de masse, hameçonnage ciblé (« spear phishing »), ciblage des dirigeants (« whaling »), par SMS (« smishing »), par téléphone (« vishing »), faux prétexte (« pretexting »), fraude au président, noms de domaine imitant le vrai (« typosquatting »).</p>
<div class="encadre"><strong>Qualifier.</strong> La tromperie qui obtient une remise de fonds est une <a class="art" href="#/infraction/313-1">escroquerie</a> ; le faux formulaire est une <a class="art" href="#/infraction/226-18">collecte déloyale</a> ; se faire passer pour un agent public aggrave l'escroquerie (313-2) ; utiliser le nom d'un tiers pour nuire relève de <a class="art" href="#/infraction/226-4-1">226-4-1</a>.</div>
`,
  retenir: [
    "Homme du milieu = interception (226-15) ; DDoS = entrave (323-2).",
    "DDoS : volumétrique, protocolaire, applicatif, par amplification.",
    "Ingénierie sociale : autorité, urgence, intimidation, rareté, consensus, confiance."
  ]
},
/* ------------------------------------------------------------------ */
{
  id: "vulnerabilites", partie: "technique",
  titre: "Vulnérabilités, failles et tests de sécurité",
  resume: "CVE, score CVSS, faille « zero-day », et la frontière entre test autorisé et intrusion.",
  arts: ["323-1", "323-3-1", "226-17"],
  contenu: `
<p>Une vulnérabilité est une faiblesse (erreur de code, mauvaise configuration, mot de passe par défaut) qu'un attaquant peut exploiter. Aucun logiciel n'en est exempt.</p>

<h3>Le vocabulaire</h3>
<ul>
  <li><strong>CVE</strong> : identifiant public d'une vulnérabilité connue (par exemple « CVE-2024-xxxx »), qui permet à tout le monde de parler de la même faille.</li>
  <li><strong>CVSS</strong> : score de gravité de 0 à 10, calculé selon la facilité d'exploitation (à distance ou en local, complexité, authentification nécessaire) et l'impact sur la confidentialité, l'intégrité et la disponibilité.</li>
  <li><strong>Zero-day</strong> : faille inconnue de l'éditeur, pour laquelle aucun correctif n'existe encore ; très recherchée, parfois vendue très cher.</li>
  <li><strong>Correctif (patch)</strong> : mise à jour qui corrige la faille. La plupart des attaques réussies exploitent des failles déjà corrigées mais non mises à jour.</li>
</ul>

<h3>Les contre-mesures</h3>
<p>Inventaire des actifs, mises à jour régulières, réduction de la surface d'attaque (fermer ce qui ne sert pas), comptes à privilèges limités, authentification forte, sauvegardes hors ligne, journalisation. Pour une entreprise qui traite des données personnelles, l'absence de mesures de sécurité peut elle-même être un délit (<a class="art" href="#/infraction/226-17">226-17</a>).</p>

<h3>Tests d'intrusion : où est la limite ?</h3>
<p>Scanner un réseau, chercher des failles, tenter d'entrer : ce sont les gestes d'un attaquant… et d'un auditeur. Ce qui fait la différence, c'est l'<strong>autorisation</strong> du responsable du système, idéalement écrite, avec un périmètre et une durée.</p>
<ul>
  <li>Sans autorisation, l'intrusion est un accès frauduleux (<a class="art" href="#/infraction/323-1">323-1</a>), même si l'intention est de signaler la faille ensuite.</li>
  <li>Les outils de test sont licites si la détention a un <em>motif légitime</em>, que le texte cite expressément : « recherche ou sécurité informatique » (<a class="art" href="#/infraction/323-3-1">323-3-1</a>).</li>
  <li>Les programmes de « bug bounty » fixent des règles qui valent autorisation, dans leur périmètre seulement.</li>
</ul>
`,
  retenir: [
    "CVE = identifiant d'une faille ; CVSS = gravité de 0 à 10 ; zero-day = pas encore de correctif.",
    "La plupart des attaques exploitent des failles connues mais non corrigées.",
    "Test d'intrusion licite = autorisation écrite du responsable ; sinon 323-1."
  ]
},
/* ------------------------------------------------------------------ */
{
  id: "forensic", partie: "technique",
  titre: "L'investigation numérique",
  resume: "Saisir, copier, prouver l'intégrité, analyser, rapporter — et ce que le CPP en dit.",
  arts: ["434-15-2"],
  contenu: `
<p>L'investigation numérique (« forensic ») consiste à rechercher, préserver et analyser des preuves numériques de façon à ce qu'elles soient <strong>recevables et incontestables</strong> devant un tribunal.</p>

<h3>Les domaines</h3>
<p>Ordinateurs et disques ; téléphones mobiles ; réseau (captures de trafic, journaux d'équipements) ; bases de données ; cloud ; et mémoire vive.</p>

<h3>Les types de preuves</h3>
<ul>
  <li><strong>Données créées par l'utilisateur</strong> : documents, photos, messages, historique, contacts.</li>
  <li><strong>Données créées par la machine ou le réseau</strong> : journaux système, historiques de connexion, fichiers temporaires, sauvegardes de téléphone, données de géolocalisation.</li>
  <li><strong>Métadonnées</strong> : date de création et de modification, auteur, appareil, coordonnées GPS d'une photo. Elles contredisent souvent un alibi.</li>
</ul>

<h3>Le processus</h3>
<table class="tab">
<tr><th>Étape</th><th>Ce qu'on fait</th><th>Cadre en procédure pénale</th></tr>
<tr><td>1. Saisie</td><td>Identifier et saisir les supports ; photographier l'installation ; décider s'il faut capturer la mémoire vive avant d'éteindre.</td><td>Perquisition et saisie (CPP art. 56) ; accès aux données accessibles depuis le système (<a href="#/acte/57-1">art. 57-1</a>) ; scellés.</td></tr>
<tr><td>2. Acquisition</td><td>Copie bit à bit (« image ») avec un bloqueur d'écriture ; calcul de l'empreinte (hash) de l'original et de la copie.</td><td>L'article 56 prévoit la saisie des données sur le support ou sur une copie réalisée en présence des personnes qui assistent à la perquisition.</td></tr>
<tr><td>3. Analyse</td><td>On travaille sur la copie, jamais sur l'original : récupération de fichiers effacés, chronologie, artefacts.</td><td>Réquisition à une personne qualifiée ou expertise ; données chiffrées : <a href="#/acte/230-1">art. 230-1</a>.</td></tr>
<tr><td>4. Rapport</td><td>Rapport structuré : méthode, outils, constatations, limites.</td><td>Procès-verbal ou rapport d'expertise versé au dossier.</td></tr>
</table>

<h3>La chaîne de traçabilité</h3>
<p>Chaque transfert d'un scellé est documenté : qui l'a pris, quand, pourquoi, et dans quel état. Avec l'empreinte calculée dès l'acquisition, elle permet de répondre à la question que posera la défense : « comment savez-vous que la preuve n'a pas été modifiée ? ».</p>

<h3>L'ordre de volatilité</h3>
<p>On collecte d'abord ce qui disparaît le plus vite : mémoire vive et connexions en cours, puis fichiers temporaires, puis disque, puis sauvegardes. Éteindre un ordinateur allumé peut faire perdre des clés de chiffrement présentes en mémoire.</p>

<h3>L'anti-investigation</h3>
<p>Les auteurs tentent d'effacer leurs traces : effacement sécurisé (écrasement des données), chiffrement intégral du disque, modification des dates des fichiers (« timestomping »), suppression des journaux, <strong>stéganographie</strong> (cacher un fichier dans une image ou un son), usage de systèmes « amnésiques » ou de machines virtuelles. Face au chiffrement, l'enquêteur dispose des réquisitions de déchiffrement (230-1) et du délit de refus de remettre la clé (<a class="art" href="#/infraction/434-15-2">434-15-2</a>).</p>
`,
  retenir: [
    "Toujours travailler sur une copie, jamais sur l'original.",
    "L'empreinte (hash) prouve que la copie est identique à l'original.",
    "Chaîne de traçabilité + scellés = preuve incontestable.",
    "Ordre de volatilité : mémoire vive d'abord, disque ensuite."
  ]
},
/* ------------------------------------------------------------------ */
{
  id: "crypto", partie: "technique",
  titre: "La cryptographie pour l'enquêteur",
  resume: "Chiffrement symétrique et asymétrique, hachage, signature : à quoi servent-ils dans un dossier ?",
  arts: ["132-79", "434-15-2"],
  contenu: `
<p>La cryptographie protège les victimes… et les auteurs. Il suffit d'en comprendre les grandes familles pour suivre un rapport d'expertise.</p>

<h3>Chiffrement symétrique</h3>
<p>La même clé chiffre et déchiffre (AES par exemple). Rapide, il sert à chiffrer des disques ou des volumes de données. Sa difficulté : transmettre la clé à son correspondant sans qu'elle soit interceptée.</p>

<h3>Chiffrement asymétrique</h3>
<p>Chaque personne possède une paire de clés : une <strong>clé publique</strong>, que tout le monde peut connaître, et une <strong>clé privée</strong>, gardée secrète. Ce qui est chiffré avec la clé publique de Bob ne peut être déchiffré qu'avec la clé privée de Bob. Plus lent, il sert surtout à échanger des clés symétriques (HTTPS, messageries chiffrées de bout en bout) et à signer.</p>

<h3>Signature électronique</h3>
<p>L'auteur signe avec <strong>sa clé privée</strong> ; chacun vérifie avec sa clé publique. La signature garantit l'origine (authenticité) et l'absence de modification (intégrité), et empêche l'auteur de nier (non-répudiation).</p>

<h3>Hachage</h3>
<p>Une fonction de hachage (SHA-256 par exemple) produit une <strong>empreinte</strong> de taille fixe à partir de n'importe quelle donnée. Elle est à sens unique (on ne retrouve pas la donnée à partir de l'empreinte) et la moindre modification change complètement le résultat. C'est l'outil qui prouve l'intégrité d'une copie judiciaire, et c'est aussi la manière dont les mots de passe sont stockés.</p>

<h3>Le principe de Kerckhoffs</h3>
<p>La sécurité d'un système de chiffrement doit reposer sur le secret de la clé, pas sur le secret de l'algorithme. Conséquence pratique : sans la clé, un chiffrement moderne bien employé est en général hors de portée. D'où l'importance de la saisie à chaud (clés en mémoire vive), des réquisitions de déchiffrement et de l'obligation de remettre la clé.</p>

<div class="encadre"><strong>Les règles pénales.</strong> Utiliser un moyen de cryptologie pour préparer ou commettre une infraction aggrave la peine (<a class="art" href="#/infraction/132-79">132-79</a>), sauf si l'auteur remet la version en clair et les clés. Refuser de remettre la convention de déchiffrement sur réquisition est un délit (<a class="art" href="#/infraction/434-15-2">434-15-2</a>).</div>
`,
  retenir: [
    "Symétrique = une clé partagée ; asymétrique = clé publique + clé privée.",
    "On signe avec sa clé privée ; on vérifie avec la clé publique.",
    "Le hachage prouve l'intégrité d'une copie (même entrée = même empreinte).",
    "Principe de Kerckhoffs : tout repose sur le secret de la clé."
  ]
}
);

/* Lexique et vrai/faux de la partie technique */
window.LEXIQUE.push(
  ["Triade CIA", "Confidentialité, intégrité, disponibilité : les trois propriétés que la sécurité informatique protège."],
  ["Non-répudiation", "Garantie que l'auteur d'une action ne peut pas nier l'avoir faite (signature, horodatage)."],
  ["Kill chain", "Modèle en 7 étapes d'une attaque ciblée : reconnaissance, armement, livraison, exploitation, installation, commande et contrôle, actions sur l'objectif."],
  ["Commande et contrôle (C2)", "Serveur ou canal par lequel l'attaquant pilote les machines compromises."],
  ["APT", "Menace persistante avancée : groupe très compétent, souvent lié à un État, qui reste longtemps et discrètement dans un réseau."],
  ["Indicateur de compromission (IoC)", "Trace qui révèle une intrusion : adresse IP, domaine, empreinte de fichier malveillant."],
  ["OSINT", "Renseignement en sources ouvertes : informations publiquement accessibles (sites, réseaux sociaux, registres)."],
  ["Cheval de Troie", "Logiciel malveillant déguisé en programme légitime ; le RAT donne un accès à distance."],
  ["Ver", "Logiciel malveillant qui se propage seul d'une machine à l'autre."],
  ["Rootkit", "Logiciel malveillant qui se cache au cœur du système pour garder un accès invisible."],
  ["Bombe logique", "Code caché qui se déclenche à une date ou à une condition donnée."],
  ["Homme du milieu (MitM)", "Attaque où l'attaquant s'interpose entre deux interlocuteurs pour lire ou modifier leurs échanges."],
  ["Spear phishing", "Hameçonnage ciblé, préparé à partir d'informations sur la victime."],
  ["Vishing / smishing", "Hameçonnage par téléphone / par SMS."],
  ["CVE", "Identifiant public d'une vulnérabilité connue."],
  ["CVSS", "Score de gravité d'une vulnérabilité, de 0 à 10."],
  ["Zero-day", "Faille inconnue de l'éditeur, sans correctif disponible."],
  ["Investigation numérique (forensic)", "Recherche, préservation et analyse de preuves numériques recevables en justice."],
  ["Image disque", "Copie bit à bit d'un support, sur laquelle porte l'analyse."],
  ["Empreinte (hash)", "Valeur calculée par une fonction de hachage ; prouve qu'une copie est identique à l'original."],
  ["Chaîne de traçabilité", "Suivi documenté de chaque manipulation d'une preuve, de la saisie au procès."],
  ["Ordre de volatilité", "Règle de collecte : d'abord ce qui disparaît le plus vite (mémoire vive), ensuite le disque."],
  ["Stéganographie", "Technique pour cacher un message dans un autre fichier (image, son)."],
  ["Timestomping", "Modification des dates d'un fichier pour brouiller la chronologie."],
  ["Principe de Kerckhoffs", "La sécurité d'un chiffrement doit reposer sur le secret de la clé, pas de l'algorithme."]
);

window.VRAIFAUX.push(
  { q: "Un ver a besoin qu'un utilisateur ouvre un fichier pour se propager.", r: false, e: "C'est le virus. Le ver se propage seul en exploitant des failles ou des supports amovibles." },
  { q: "Pour signer un message, on utilise sa propre clé privée.", r: true, e: "La signature se fait avec la clé privée de l'auteur et se vérifie avec sa clé publique." },
  { q: "L'analyse forensique se fait de préférence directement sur le disque saisi.", r: false, e: "On travaille sur une copie bit à bit dont l'empreinte est identique à celle de l'original." },
  { q: "Éteindre immédiatement un ordinateur allumé est toujours la meilleure solution.", r: false, e: "Cela peut faire perdre la mémoire vive (clés de chiffrement, connexions) : ordre de volatilité." },
  { q: "Un auditeur qui teste les failles d'un site sans autorisation, pour les signaler ensuite, ne commet aucune infraction.", r: false, e: "L'accès sans droit reste réprimé par 323-1, même sans intention de nuire." },
  { q: "Une attaque DDoS par amplification utilise des serveurs tiers qui renvoient de grosses réponses vers la victime.", r: true, e: "Le DDoS est une entrave au fonctionnement (323-2)." },
  { q: "Un logiciel malveillant « sans fichier » laisse surtout des traces en mémoire vive.", r: true, e: "Il détourne des outils légitimes et vit en mémoire : il faut capturer la RAM." },
  { q: "Un score CVSS de 9,8 correspond à une vulnérabilité critique.", r: true, e: "Le CVSS va de 0 à 10 ; au-dessus de 9, la faille est critique." }
);
;
/* ===== js/cas-technique.js ===== */
/* Cas pratiques de la partie V « Comprendre la technique ».
   Les choix mêlent des articles (identifiants de fiches) et des réponses techniques ou de procédure,
   décrites dans « libelles ». */
(function () {
  var L = {
    /* techniques */
    "t-ver": "Technique : ver (propagation automatique)",
    "t-virus": "Technique : virus (s'attache à des fichiers)",
    "t-cheval": "Technique : cheval de Troie (logiciel déguisé)",
    "t-rancon": "Technique : rançongiciel",
    "t-mitm": "Technique : homme du milieu (interception)",
    "t-ddos": "Technique : déni de service distribué",
    "t-ampli": "Technique : DDoS par amplification",
    "t-sqli": "Technique : injection SQL (faille d'une application web)",
    "t-bombe": "Technique : bombe logique",
    "t-rootkit": "Technique : rootkit",
    "t-espion": "Technique : logiciel espion",
    "t-vishing": "Technique : hameçonnage par téléphone (vishing)",
    "t-spear": "Technique : hameçonnage ciblé (spear phishing)",
    "t-autorite": "Ressort psychologique : autorité",
    "t-urgence": "Ressort psychologique : urgence",
    "t-rarete": "Ressort psychologique : rareté",
    "t-timestomp": "Anti-investigation : modification des dates (timestomping)",
    "t-stegano": "Anti-investigation : stéganographie",
    "t-wipe": "Anti-investigation : effacement sécurisé",
    /* réflexes d'enquête ou de réponse */
    "r-ram": "Réflexe : capturer la mémoire vive avant toute extinction",
    "r-eteindre": "Réflexe : éteindre l'ordinateur tout de suite",
    "r-image": "Réflexe : faire une copie bit à bit et calculer son empreinte",
    "r-original": "Réflexe : analyser directement le disque saisi",
    "r-cloud": "Réflexe : accéder aux données du cloud depuis l'ordinateur perquisitionné (CPP 57-1)",
    "r-isoler": "Réflexe : isoler les machines du réseau sans les éteindre",
    "r-payer": "Réflexe : payer la rançon pour redémarrer vite",
    "r-formater": "Réflexe : tout réinstaller immédiatement",
    "r-plainte72": "Réflexe : porter plainte dans les 72 heures (assurance)",
    "r-cnil72": "Réflexe : notifier la CNIL dans les 72 heures (données personnelles)",
    "r-journaux": "Réflexe : comparer avec les journaux du système et les autres horodatages",
    "r-exif": "Réflexe : lire les métadonnées de la photo",
    "r-ip": "Réflexe : requérir l'hébergeur ou l'opérateur pour identifier la source (CPP 60-1-2)"
  };

  var CAS_T = [
    {
      id: "t-cle-usb", partie: "technique", titre: "La clé USB du parking",
      faits: "Un salarié d'une usine trouve une clé USB sur le parking et la branche sur son poste. Dans l'heure, un programme se copie tout seul sur les autres ordinateurs du réseau, sans que personne ne clique sur rien, puis chiffre les fichiers. La chaîne de production s'arrête.",
      bonnes: ["t-ver", "323-3", "323-2", "r-isoler"], pieges: ["t-virus", "t-cheval", "r-eteindre", "226-18"],
      correction: "Propagation automatique de machine en machine : c'est un ver (un virus suppose qu'on ouvre des fichiers infectés ; un cheval de Troie se fait passer pour un logiciel légitime). Introduction de données et chiffrement : 323-3 ; arrêt de la production : entrave, 323-2. Premier réflexe : isoler le réseau sans éteindre, pour garder les traces en mémoire vive. Si une rançon est demandée, ajouter l'extorsion (312-1)."
    },
    {
      id: "t-wifi", partie: "technique", titre: "Le faux Wi-Fi de la gare",
      faits: "Un individu installe dans une gare un point d'accès Wi-Fi gratuit portant le nom de celui de la gare. Les voyageurs s'y connectent ; il enregistre le trafic et récupère des identifiants de messagerie, qu'il utilise ensuite pour lire les mails de plusieurs victimes.",
      bonnes: ["t-mitm", "226-15", "323-1"], pieges: ["t-ddos", "323-2", "312-10", "t-rootkit"],
      correction: "Il s'interpose entre les victimes et Internet : attaque de l'homme du milieu. L'interception de correspondances électroniques, et l'installation d'un appareil permettant de telles interceptions, relèvent de 226-15. Se connecter ensuite aux messageries avec les identifiants volés : accès frauduleux, 323-1. Aucune entrave au fonctionnement, aucun chantage."
    },
    {
      id: "t-mairie", partie: "technique", titre: "Le site de la mairie inaccessible",
      faits: "Après un vote du conseil municipal, un groupe militant organise sur une messagerie une « journée d'action » et partage un outil. Le jour J, le site de la mairie est saturé : des milliers de serveurs mal configurés dans le monde lui renvoient d'énormes réponses à de petites requêtes envoyées par le groupe.",
      bonnes: ["t-ampli", "323-2", "323-4"], pieges: ["323-1", "323-3", "t-sqli", "r-payer"],
      correction: "De petites requêtes envoyées à des serveurs tiers qui renvoient de grosses réponses vers la victime : DDoS par amplification. Rendre le site indisponible : entrave au fonctionnement, 323-2. La préparation concertée du groupe sur la messagerie : association de malfaiteurs informatique, 323-4. Personne n'est entré dans le système ni n'a modifié ses données : ni 323-1, ni 323-3."
    },
    {
      id: "t-faux-pdg", partie: "technique", titre: "L'appel du « président »",
      faits: "Un vendredi à 17 h 30, la comptable d'une PME reçoit l'appel d'une voix qui imite celle du dirigeant, alors en déplacement. Il lui demande un virement de 85 000 € pour une acquisition « confidentielle » à boucler avant la fermeture des banques. Un mail semblant venir d'un avocat confirme la demande. Elle exécute le virement.",
      bonnes: ["t-vishing", "t-autorite", "t-urgence", "313-1"], pieges: ["t-rarete", "323-1", "312-1", "226-8"],
      correction: "Hameçonnage par téléphone combinant les ressorts de l'autorité (le dirigeant, l'avocat) et de l'urgence (avant la fermeture). Les manœuvres frauduleuses (fausse identité, faux mail) ont déterminé la remise de fonds : escroquerie, 313-1, en bande organisée si l'équipe est structurée. Aucun système n'a été piraté. Pas d'extorsion : il n'y a ni violence ni contrainte. Si la voix a été générée par IA, 226-8 pourrait se discuter, mais seulement s'il y a eu diffusion au public ou à un tiers d'un contenu représentant la personne : la qualification principale reste l'escroquerie."
    },
    {
      id: "t-perquisition", partie: "technique", titre: "L'ordinateur allumé",
      faits: "Lors d'une perquisition chez un suspect de vente de données volées, l'OPJ trouve un ordinateur portable allumé, session ouverte. Le disque est entièrement chiffré. Un client de stockage en ligne est connecté.",
      bonnes: ["r-ram", "r-cloud", "r-image"], pieges: ["r-eteindre", "r-original", "t-stegano"],
      correction: "Le disque étant chiffré, l'éteindre ferait perdre les clés présentes en mémoire vive : il faut d'abord capturer la mémoire (ordre de volatilité). Les données du cloud accessibles depuis l'ordinateur peuvent être recueillies pendant la perquisition (CPP 57-1 ; si elles sont stockées à l'étranger, dans le cadre des engagements internationaux). Ensuite, copie bit à bit et calcul de l'empreinte : on n'analyse jamais l'original. Si le suspect refuse ensuite de donner sa clé, 434-15-2 s'applique."
    },
    {
      id: "t-developpeur", partie: "technique", titre: "Le développeur rancunier",
      faits: "Un développeur apprend son licenciement. Avant de partir, il ajoute dans le logiciel de facturation, auquel il a légitimement accès, quelques lignes qui effaceront la base clients si son compte est désactivé. Trois semaines plus tard, la base disparaît.",
      bonnes: ["t-bombe", "323-3", "323-2"], pieges: ["323-1", "t-ver", "t-rootkit", "313-1"],
      correction: "Code caché qui se déclenche à une condition : bombe logique. Introduire ce code puis supprimer les données : atteinte frauduleuse aux données, 323-3 ; la disparition de la base fausse le fonctionnement du système : 323-2. L'accès frauduleux (323-1) se discute mal : il avait encore un accès autorisé quand il a ajouté le code. Le caractère frauduleux tient à l'introduction de données, pas à l'accès."
    },
    {
      id: "t-faille-clinique", partie: "technique", titre: "L'étudiant et la faille de la clinique",
      faits: "Un étudiant en sécurité découvre que le formulaire de contact du site d'une clinique accepte des commandes qui interrogent directement la base de données. Pour « prouver » la faille, il en extrait dix dossiers de patients, puis écrit à la clinique pour la prévenir, sans avoir été autorisé à tester.",
      bonnes: ["t-sqli", "323-1", "323-3"], pieges: ["323-2", "313-1", "312-10", "t-ddos"],
      correction: "Exploiter un formulaire pour interroger la base : injection SQL. Sans autorisation, l'accès est frauduleux (323-1), et l'extraction des dossiers est une atteinte aux données (323-3) ; les juges tiendront compte de l'intention, mais l'infraction est constituée. Aucune demande d'argent : ce n'est pas un chantage. Le bon réflexe aurait été de signaler la faille sans l'exploiter, ou de passer par un programme de signalement prévu par l'organisme."
    },
    {
      id: "t-antidate", partie: "technique", titre: "Le fichier antidaté",
      faits: "Accusé d'avoir copié des plans confidentiels après sa démission, un ingénieur fournit une clé USB : selon lui, les fichiers datent d'avant son départ, comme l'indiquent leurs dates de création. L'analyste remarque que ces dates sont arrondies à la seconde exacte, contrairement à tous les autres fichiers du disque.",
      bonnes: ["t-timestomp", "r-journaux"], pieges: ["t-stegano", "t-wipe", "r-original"],
      correction: "Des dates trop « rondes » et incohérentes avec le reste du disque font penser à une modification volontaire des horodatages (timestomping). On les confronte aux autres traces : journaux du système, structures internes du système de fichiers, historique de connexion de la clé, journaux du serveur d'où les plans ont été copiés. Rien n'indique un fichier caché dans une image (stéganographie) ni un effacement. Et toujours sur une copie, pas sur la clé d'origine."
    },
    {
      id: "t-photo", partie: "technique", titre: "La photo qui trahit",
      faits: "Une personne soupçonnée d'avoir posté des menaces depuis un faux compte affirme ne jamais être allée dans la ville d'où elles semblent venir. Parmi les photos publiées par ce faux compte figure un cliché original, non retouché, d'une terrasse de café.",
      bonnes: ["r-exif", "r-ip", "226-4-1"], pieges: ["t-stegano", "r-eteindre", "323-1"],
      correction: "Une photo originale peut garder ses métadonnées : modèle d'appareil, date, parfois coordonnées GPS. Elles se comparent avec le téléphone du suspect. Les réquisitions à la plateforme puis à l'opérateur permettent d'identifier la source des connexions au faux compte (CPP 60-1-2 : délit puni d'au moins un an commis en ligne, pour identifier l'auteur). Le faux compte au nom d'un tiers relève de l'usurpation d'identité (226-4-1) ; les menaces elles-mêmes ont leurs propres incriminations (non traitées sur le site)."
    },
    {
      id: "t-stalkerware", partie: "technique", titre: "L'application de « contrôle parental »",
      faits: "Après leur séparation, un homme récupère quelques minutes le téléphone de son ex-compagne et y installe une application vendue comme « contrôle parental », mais configurée pour rester invisible. Il reçoit ses positions, ses SMS et ses photos.",
      bonnes: ["t-espion", "226-1", "226-15", "323-3"], pieges: ["t-ver", "226-4-1", "312-1"],
      correction: "Logiciel espion (« stalkerware »), quel que soit son nom commercial. Capter la localisation et les images sans consentement : 226-1, aggravé quand l'auteur est le conjoint, le concubin ou le partenaire (l'article 132-80 étend en principe cette circonstance aux anciens partenaires : à vérifier sur Légifrance). Intercepter les SMS : 226-15. Installer l'application sur le téléphone d'autrui : introduction frauduleuse de données, 323-3. Si les faits sont répétés et dégradent ses conditions de vie, ajouter le harcèlement (222-33-2-1 vise aussi les anciens conjoints)."
    },
    {
      id: "t-cabinet", partie: "technique", titre: "Le lundi matin du cabinet comptable",
      faits: "Un lundi matin, tous les postes d'un cabinet comptable affichent une demande de rançon. Les fichiers clients (déclarations, bulletins de paie) sont chiffrés et les attaquants affirment en avoir une copie. Le cabinet est assuré contre les cyberattaques.",
      bonnes: ["t-rancon", "r-isoler", "r-plainte72", "r-cnil72", "312-1"], pieges: ["r-payer", "r-formater", "t-ampli"],
      correction: "Rançongiciel avec double extorsion (chiffrement et menace de publication). Réflexes : isoler sans éteindre ; ne pas tout réinstaller tout de suite, ce qui détruirait les preuves ; ne pas payer. Pour être indemnisé, le cabinet doit porter plainte dans les 72 heures (Code des assurances, L. 12-10-1). Les données personnelles des clients étant touchées, il doit aussi notifier la CNIL dans les 72 heures (RGPD). Qualifications : 323-1, 323-3, 323-2 et extorsion (312-1)."
    }
  ];

  window.CAS_LIBELLES = L;
  CAS_T.forEach(function (c) { window.CAS.push(c); });
})();
;
/* ===== js/complements.js ===== */
/* Procédure (actes d'enquête), jurisprudence, droit européen et guide des victimes. */

/* ===================== ACTES D'ENQUÊTE (CPP) ===================== */
(function () {
  var CPP = "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006071154/";
  window.ACTES = [
    {
      id: "57-1", art: "CPP 57-1", famille: "Perquisition et saisie", titre: "Accès aux données à partir du système perquisitionné",
      citation: "Les officiers de police judiciaire ou, sous leur responsabilité, les agents de police judiciaire peuvent, au cours d'une perquisition effectuée dans les conditions prévues par le présent code, accéder par un système informatique implanté sur les lieux où se déroule la perquisition à des données intéressant l'enquête en cours et stockées dans ledit système ou dans un autre système informatique, dès lors que ces données sont accessibles à partir du système initial ou disponibles pour le système initial.",
      qui: "OPJ, ou APJ sous sa responsabilité, au cours d'une perquisition.",
      conditions: "Les données doivent être accessibles depuis le système présent sur place (ou depuis un poste du service). Si elles sont stockées à l'étranger, elles ne sont recueillies que dans les conditions prévues par les engagements internationaux (Convention de Budapest notamment).",
      duree: "Le temps de la perquisition.",
      plus: "Les données peuvent être copiées et les supports saisis sous scellés. Toute personne peut être requise de fournir les codes ou informations d'accès ; s'abstenir de répondre est puni de 3 750 € d'amende. Applicable en préliminaire (art. 76-3) et à l'instruction (art. 97-1).",
      version: "26/01/2023", url: CPP + "LEGISCTA000006151876/"
    },
    {
      id: "60-1", art: "CPP 60-1", famille: "Réquisitions", titre: "Réquisitions de documents et de données (flagrance)",
      citation: "Le procureur de la République ou l'officier de police judiciaire ou, sous le contrôle de ce dernier, l'agent de police judiciaire […] peut, par tout moyen, requérir de toute personne, de tout établissement ou organisme privé ou public ou de toute administration publique qui sont susceptibles de détenir des informations intéressant l'enquête, y compris, sous réserve de l'article 60-1-2, celles issues d'un système informatique ou d'un traitement de données nominatives, de lui remettre ces informations, notamment sous forme numérique […].",
      qui: "Procureur, OPJ, APJ sous son contrôle (et l'assistant d'enquête dans un cas).",
      conditions: "Le secret professionnel ne peut être opposé sans motif légitime. Pour les avocats, journalistes, médecins… (art. 56-1 à 56-5), la remise exige leur accord.",
      duree: "Réponse « dans les meilleurs délais ».",
      plus: "Ne pas répondre est puni de 3 750 € d'amende. En préliminaire, l'équivalent est l'article 77-1-1, qui suppose l'autorisation du procureur.",
      version: "26/01/2023", url: CPP + "LEGISCTA000006151876/"
    },
    {
      id: "60-1-2", art: "CPP 60-1-2", famille: "Réquisitions", titre: "Accès aux données de connexion : les seuils",
      citation: "A peine de nullité, les réquisitions portant sur les données techniques permettant d'identifier la source de la connexion ou celles relatives aux équipements terminaux utilisés […] ou sur les données de trafic et de localisation […] ne sont possibles, si les nécessités de la procédure l'exigent, que dans les cas suivants : 1° La procédure porte sur un crime ou sur un délit puni d'au moins trois ans d'emprisonnement ; 2° La procédure porte sur un délit puni d'au moins un an d'emprisonnement commis par l'utilisation d'un réseau de communications électroniques et ces réquisitions ont pour seul objet d'identifier l'auteur de l'infraction ; […]",
      qui: "S'applique à toutes les réquisitions portant sur ces données (60-1, 60-2, 77-1-1, 99-3…).",
      conditions: "Crime ou délit puni d'au moins 3 ans ; ou délit puni d'au moins 1 an commis par un réseau, pour identifier l'auteur ; ou équipements de la victime à sa demande ; ou recherche d'une personne disparue.",
      duree: "—",
      plus: "Créé par la loi du 2 mars 2022 après la jurisprudence européenne sur les données de connexion (voir CJUE Prokuratuur et Cass. crim. 12 juillet 2022). Exemple : une usurpation d'identité (226-4-1, 1 an) commise en ligne permet de requérir l'adresse IP pour identifier l'auteur.",
      version: "04/03/2022", url: CPP + "LEGISCTA000006151876/"
    },
    {
      id: "60-2", art: "CPP 60-2", famille: "Réquisitions", titre: "Réquisitions informatiques et préservation des contenus",
      citation: "L'officier de police judiciaire […] intervenant sur réquisition du procureur de la République préalablement autorisé par ordonnance du juge des libertés et de la détention, peut requérir des opérateurs de télécommunications […] de prendre, sans délai, toutes mesures propres à assurer la préservation, pour une durée ne pouvant excéder un an, du contenu des informations consultées par les personnes utilisatrices des services fournis par les opérateurs.",
      qui: "Alinéa 1 : OPJ (APJ sous son contrôle), par voie télématique. Alinéa 2 : OPJ sur réquisition du procureur autorisée par le JLD.",
      conditions: "Alinéa 1 : accès aux informations des systèmes des organismes publics et personnes morales privées, hors secrets légaux et sous réserve de 60-1-2. Alinéa 2 : « gel » des contenus consultés.",
      duree: "Préservation : 1 an au plus.",
      plus: "Refus sans motif légitime : 3 750 € d'amende. En préliminaire : article 77-1-2.",
      version: "04/03/2022", url: CPP + "LEGISCTA000006151876/"
    },
    {
      id: "230-1", art: "CPP 230-1", famille: "Chiffrement", titre: "Mise au clair des données chiffrées",
      citation: "",
      qui: "Procureur, juridiction d'instruction, OPJ avec l'autorisation de l'un d'eux, ou juridiction de jugement.",
      conditions: "Données saisies ou obtenues chiffrées ou protégées par un mécanisme d'authentification. Si la peine encourue est d'au moins 2 ans, recours possible aux moyens de l'État couverts par le secret de la défense nationale (art. 230-2).",
      duree: "Délai fixé par la réquisition, prorogeable.",
      plus: "Les résultats reviennent avec une attestation de sincérité (230-3). Ces décisions ne sont susceptibles d'aucun recours (230-4). Voir aussi le refus de remettre la clé (434-15-2).",
      version: "en vigueur", url: CPP + "LEGISCTA000006151887/"
    },
    {
      id: "230-32", art: "CPP 230-32", famille: "Surveillance", titre: "Géolocalisation en temps réel",
      citation: "Il peut être recouru à tout moyen technique destiné à la localisation en temps réel, sur l'ensemble du territoire national, d'une personne, à l'insu de celle-ci, d'un véhicule ou de tout autre objet, sans le consentement de son propriétaire ou de son possesseur, si cette opération est exigée par les nécessités : 1° D'une enquête ou d'une instruction portant sur un crime ou sur un délit puni d'au moins trois ans d'emprisonnement ; […]",
      qui: "Procureur (enquête), puis JLD ; juge d'instruction (information).",
      conditions: "Crime ou délit puni d'au moins 3 ans, ou recherche des causes de la mort ou d'une disparition.",
      duree: "Procureur : 8 jours, ou 15 jours (crime, criminalité organisée, disparition). Puis JLD : 1 mois renouvelable. Instruction : 4 mois renouvelables (art. 230-33).",
      plus: "Géolocaliser un téléphone en temps réel relève de ce texte ; les données de localisation passées relèvent des réquisitions (60-1-2).",
      version: "en vigueur", url: CPP + "LEGISCTA000028793411/"
    },
    {
      id: "230-46", art: "CPP 230-46", famille: "Infiltration numérique", titre: "Enquête sous pseudonyme",
      citation: "",
      qui: "OPJ et APJ affectés dans un service spécialisé et habilités par arrêté des ministres de la Justice et de l'Intérieur.",
      conditions: "Crimes et délits punis d'emprisonnement commis par voie électronique. Acquisition de contenus et mise à disposition de moyens : accord du procureur ou du juge d'instruction, versé au dossier sous peine de nullité.",
      duree: "—",
      plus: "Interdiction de toute incitation ayant déterminé l'infraction. Le Conseil constitutionnel a censuré une partie du texte en 2023 (décision n° 2022-846 DC). Dernière modification : loi du 13 juin 2025.",
      version: "15/06/2025", url: CPP + "LEGISCTA000038269232/"
    },
    {
      id: "706-102-1", art: "CPP 706-102-1", famille: "Criminalité organisée", titre: "Captation de données informatiques",
      citation: "Il peut être recouru à la mise en place d'un dispositif technique ayant pour objet, sans le consentement des intéressés, d'accéder, en tous lieux, à des données informatiques, de les enregistrer, de les conserver et de les transmettre, telles qu'elles sont stockées dans un système informatique, telles qu'elles s'affichent sur un écran pour l'utilisateur d'un système de traitement automatisé de données, telles qu'il les y introduit par saisie de caractères ou telles qu'elles sont reçues et émises par des périphériques.",
      qui: "JLD à la requête du procureur (enquête) ou juge d'instruction.",
      conditions: "Infractions de la criminalité organisée (706-73 et 706-73-1, dont les atteintes aux STAD en bande organisée et les plateformes illicites). La décision précise l'infraction, la durée et les systèmes visés, à peine de nullité (706-102-3).",
      duree: "Fixée par la décision d'autorisation.",
      plus: "Installation possible par introduction dans un lieu privé ou un véhicule, ou par transmission à distance via un réseau (706-102-5). Interdite chez les avocats, journalistes, médecins, magistrats, parlementaires.",
      version: "15/06/2025", url: CPP + "LEGISCTA000006138138/"
    },
    {
      id: "706-95", art: "CPP 706-95", famille: "Criminalité organisée", titre: "Interceptions en enquête",
      citation: "",
      qui: "JLD à la requête du procureur.",
      conditions: "Enquête de flagrance ou préliminaire sur une infraction des articles 706-73 ou 706-73-1.",
      duree: "1 mois, renouvelable une fois.",
      plus: "Voir aussi 706-95-20 (dispositif type « IMSI-catcher » : recueil des données de connexion, et interceptions pour 48 h renouvelables une fois).",
      version: "01/03/2022", url: CPP + "LEGISCTA000006138138/"
    },
    {
      id: "706-72-1", art: "CPP 706-72-1", famille: "Compétence", titre: "Compétence concurrente de Paris",
      citation: "",
      qui: "Procureur, pôle de l'instruction, tribunal correctionnel et cour d'assises de Paris.",
      conditions: "Atteintes aux STAD (323-1 à 323-4-1) et certaines atteintes aux intérêts de la Nation commises sur un STAD.",
      duree: "—",
      plus: "Compétence concurrente, pas exclusive. Dessaisissement possible d'un juge d'instruction au profit de Paris (706-72-2), recours devant la chambre criminelle (706-72-6).",
      version: "30/09/2021", url: CPP + "LEGISCTA000006138137/"
    }
  ];
})();

/* ===================== JURISPRUDENCE ===================== */
window.JURIS = [
  {
    id: "bluetouff", court: "Bluetouff", juridiction: "Cass. crim.", date: "20 mai 2015", num: "n° 14-81.336",
    theme: "STAD",
    faits: "Un internaute accède, via une recherche Google, à l'extranet d'une agence sanitaire mal protégé. Il remarque une page d'authentification, reste dans le système et télécharge des milliers de documents qu'il diffuse.",
    question: "Peut-on être condamné pour maintien frauduleux quand l'accès lui-même n'avait rien de frauduleux ?",
    solution: "Oui. Le maintien dans un système après avoir constaté l'existence d'un contrôle d'accès est frauduleux, et la copie des données a été qualifiée de vol (l'article 323-3 a depuis été modifié pour viser l'extraction).",
    portee: "Une faille de sécurité n'exonère pas. C'est la conscience de ne pas avoir le droit d'être là qui compte.",
    arts: ["323-1", "323-3"]
  },
  {
    id: "code-tel", court: "Code de déverrouillage", juridiction: "Cass. ass. plén.", date: "7 novembre 2022", num: "n° 21-83.146",
    theme: "Chiffrement",
    faits: "Un suspect refuse de communiquer le code de déverrouillage de son téléphone en garde à vue.",
    question: "Le code d'un téléphone est-il une « convention secrète de déchiffrement » au sens de l'article 434-15-2 ?",
    solution: "Oui, lorsque le téléphone est équipé d'un moyen de cryptologie et que le déverrouillage permet de mettre au clair ses données. Le refus de le remettre peut donc être puni.",
    portee: "Met fin à une divergence entre chambres. Il faut une réquisition d'une autorité judiciaire et un téléphone susceptible d'avoir servi à l'infraction.",
    arts: ["434-15-2"]
  },
  {
    id: "qpc-2018-696", court: "Refus de déchiffrement conforme", juridiction: "Cons. const.", date: "30 mars 2018", num: "n° 2018-696 QPC",
    theme: "Chiffrement",
    faits: "Une QPC soutient que l'article 434-15-2 viole le droit de ne pas s'auto-incriminer et le droit au silence.",
    question: "Obliger à remettre une clé de déchiffrement est-il contraire à la Constitution ?",
    solution: "Non. Le texte n'impose pas de reconnaître sa culpabilité ; la clé existe indépendamment de la volonté de la personne, et l'obligation ne joue que si l'enquête l'exige et sur réquisition judiciaire.",
    portee: "Fonde la validité du délit de 434-15-2.",
    arts: ["434-15-2"]
  },
  {
    id: "qpc-consultation", court: "Consultation de sites terroristes", juridiction: "Cons. const.", date: "10 février 2017 et 15 décembre 2017", num: "n° 2016-611 QPC et n° 2017-682 QPC",
    theme: "Contenus",
    faits: "Le délit de consultation habituelle de sites terroristes (ancien 421-2-5-2) est contesté, puis réécrit par le législateur, puis contesté à nouveau.",
    question: "Punir la simple consultation de contenus porte-t-il une atteinte excessive à la liberté de communication ?",
    solution: "Oui, à deux reprises : le délit est censuré et abrogé, l'arsenal existant suffisant à prévenir le terrorisme.",
    portee: "Cas rare de double censure. La consultation reste un élément possible de l'entreprise individuelle terroriste (421-2-6).",
    arts: ["421-2-5"]
  },
  {
    id: "qpc-recel-apologie", court: "Recel d'apologie", juridiction: "Cons. const.", date: "19 juin 2020", num: "n° 2020-845 QPC",
    theme: "Contenus",
    faits: "La Cour de cassation avait admis de condamner pour « recel d'apologie » la détention de fichiers faisant l'apologie du terrorisme.",
    question: "Cette construction jurisprudentielle est-elle conforme à la Constitution ?",
    solution: "Non : le recel ne peut pas s'appliquer à l'apologie du terrorisme ; il aboutirait à réprimer la simple détention, déjà censurée pour la consultation.",
    portee: "Limite de l'interprétation extensive des textes.",
    arts: ["421-2-5"]
  },
  {
    id: "lqdn", court: "La Quadrature du Net", juridiction: "CJUE, gde ch.", date: "6 octobre 2020", num: "C-511/18, C-512/18 et C-520/18",
    theme: "Données de connexion",
    faits: "Des associations contestent l'obligation française de conservation généralisée des données de connexion.",
    question: "Le droit de l'Union permet-il d'imposer aux opérateurs de conserver toutes les données de trafic et de localisation ?",
    solution: "Non, sauf menace grave, réelle et actuelle pour la sécurité nationale, pour une durée limitée. Pour la criminalité grave : conservation ciblée ou « conservation rapide » ; les adresses IP peuvent être conservées de façon généralisée pour une durée limitée.",
    portee: "Point de départ de la réforme française des données de connexion (Conseil d'État, French Data Network, 21 avril 2021 ; loi du 30 juillet 2021).",
    arts: []
  },
  {
    id: "prokuratuur", court: "Prokuratuur", juridiction: "CJUE, gde ch.", date: "2 mars 2021", num: "C-746/18",
    theme: "Données de connexion",
    faits: "En Estonie, le parquet autorisait seul l'accès aux données de trafic et de localisation.",
    question: "Qui peut autoriser l'accès aux données de connexion ?",
    solution: "L'accès doit être réservé à la lutte contre la criminalité grave et soumis à un contrôle préalable d'une juridiction ou d'une entité administrative indépendante. Un ministère public qui dirige l'enquête n'est pas indépendant.",
    portee: "A conduit la Cour de cassation (12 juillet 2022) puis le législateur (art. 60-1-2 CPP) à encadrer les réquisitions.",
    arts: []
  },
  {
    id: "crim-2022-07-12", court: "Données de connexion en France", juridiction: "Cass. crim.", date: "12 juillet 2022", num: "n° 21-83.710 (et trois autres arrêts)",
    theme: "Données de connexion",
    faits: "Des personnes poursuivies demandent l'annulation de réquisitions de données de connexion autorisées par le parquet.",
    question: "Quelles conséquences tirer en France de la jurisprudence de la CJUE ?",
    solution: "Le procureur ne peut pas être l'autorité de contrôle exigée par le droit de l'Union, mais la nullité suppose que la personne démontre un grief (par exemple, accès à des données hors de la criminalité grave ou au-delà du strict nécessaire).",
    portee: "Les réquisitions restent possibles mais doivent être justifiées ; le contrôle se fait a posteriori par le juge.",
    arts: []
  },
  {
    id: "qpc-2021-952", court: "Réquisitions en préliminaire", juridiction: "Cons. const.", date: "3 décembre 2021", num: "n° 2021-952 QPC",
    theme: "Procédure",
    faits: "Contestation des articles 77-1-1 et 77-1-2 du CPP, qui permettaient au parquet d'autoriser largement la réquisition de données de connexion en enquête préliminaire.",
    question: "Ces réquisitions sont-elles suffisamment encadrées ?",
    solution: "Non : censure, avec effet différé au 31 décembre 2022, faute de garanties suffisantes pour le respect de la vie privée.",
    portee: "Le législateur a réagi par la loi du 2 mars 2022 (création de l'article 60-1-2).",
    arts: []
  },
  {
    id: "dc-2022-846", court: "LOPMI et enquête sous pseudonyme", juridiction: "Cons. const.", date: "19 janvier 2023", num: "n° 2022-846 DC",
    theme: "Procédure",
    faits: "Saisine sur la loi d'orientation et de programmation du ministère de l'Intérieur (LOPMI).",
    question: "Les nouvelles prérogatives de l'enquête sous pseudonyme sont-elles conformes ?",
    solution: "Censure partielle de l'article 230-46 du CPP (Légifrance mentionne la décision dans la version consolidée) ; le reste de la loi, dont les nouvelles infractions 323-3-2 et 323-4-2, est validé.",
    portee: "Rappelle l'interdiction de la provocation à l'infraction par les enquêteurs.",
    arts: ["323-3-2", "323-4-2"]
  }
];

/* ===================== DROIT EUROPÉEN ET INTERNATIONAL ===================== */
window.EUROPE = [
  {
    id: "budapest", nom: "Convention de Budapest", ref: "Conseil de l'Europe, STE n° 185, 23 novembre 2001", type: "Traité",
    quoi: "Premier traité international sur la cybercriminalité : incriminations communes (accès illégal, interception, atteinte aux données et aux systèmes, abus de dispositifs, fraude et faux informatiques, pédopornographie) et coopération (conservation rapide des données, entraide, réseau 24/7). Un deuxième protocole additionnel (2022) facilite la demande directe de données aux fournisseurs étrangers.",
    france: "Ratifiée par la France. Le CPP y renvoie implicitement : l'article 57-1 n'autorise la collecte de données stockées à l'étranger que dans les conditions des engagements internationaux.",
    statut: "En vigueur"
  },
  {
    id: "onu", nom: "Convention des Nations unies contre la cybercriminalité", ref: "Adoptée le 24 décembre 2024 (résolution 79/243)", type: "Traité",
    quoi: "Premier traité mondial sur le sujet : incriminations et coopération en matière de preuves électroniques.",
    france: "Signée par la France le 25 octobre 2025 à Hanoï. Elle entrera en vigueur 90 jours après la 40e ratification.",
    statut: "Signée, pas encore en vigueur"
  },
  {
    id: "dir-2013-40", nom: "Directive 2013/40/UE", ref: "Attaques contre les systèmes d'information, 12 août 2013", type: "Directive",
    quoi: "Harmonise dans l'Union les infractions d'accès illégal, d'atteinte aux systèmes et aux données, d'interception et d'outils, avec des peines minimales maximales et des circonstances aggravantes (botnets, infrastructures critiques).",
    france: "Transposée : elle explique notamment l'incrimination des outils (323-3-1) et le niveau des peines des articles 323-1 et suivants.",
    statut: "Transposée"
  },
  {
    id: "rgpd", nom: "RGPD", ref: "Règlement (UE) 2016/679", type: "Règlement",
    quoi: "Cadre de la protection des données personnelles : sécurité des traitements (art. 32), notification des violations à l'autorité de contrôle sous 72 heures (art. 33).",
    france: "Les articles 226-16 et suivants du Code pénal y renvoient directement : l'article 226-17 vise les mesures prescrites aux articles 24, 25, 30 et 32 du RGPD.",
    statut: "Applicable depuis 2018"
  },
  {
    id: "dsa", nom: "Règlement sur les services numériques (DSA)", ref: "Règlement (UE) 2022/2065, 19 octobre 2022", type: "Règlement",
    quoi: "Obligations des plateformes en ligne face aux contenus illicites : mécanisme de notification, signaleurs de confiance, transparence, obligations renforcées des très grandes plateformes.",
    france: "La LCEN a été réécrite par la loi SREN (2024) pour s'y articuler, et l'article 323-3-2 du Code pénal vise expressément le non-respect des articles 15, 16 et 18 du DSA. L'ARCOM est le coordinateur national.",
    statut: "Applicable depuis 2024"
  },
  {
    id: "tco", nom: "Règlement sur les contenus terroristes en ligne", ref: "Règlement (UE) 2021/784", type: "Règlement",
    quoi: "Une injonction de retrait d'un contenu terroriste doit être exécutée par l'hébergeur dans l'heure, y compris si l'injonction vient d'un autre État membre.",
    france: "Mis en œuvre dans la LCEN (art. 6-1-1 et suivants) : sanction pénale d'un an et 250 000 € pour l'hébergeur qui ne retire pas dans l'heure.",
    statut: "Applicable depuis 2022"
  },
  {
    id: "e-evidence", nom: "Règlement « e-evidence »", ref: "Règlement (UE) 2023/1543 et directive (UE) 2023/1544", type: "Règlement",
    quoi: "Crée l'injonction européenne de production et l'injonction européenne de conservation : un magistrat peut demander directement à un fournisseur établi dans un autre État membre les données (abonnés, trafic, contenus) qu'il détient, avec des délais de 10 jours, ou 8 heures en urgence. La directive oblige les fournisseurs à désigner un représentant légal dans l'Union.",
    france: "Applicable depuis le 18 août 2026 : c'est un outil nouveau, qui contourne l'entraide classique pour les données stockées dans un autre État membre.",
    statut: "Applicable depuis le 18 août 2026"
  },
  {
    id: "nis2", nom: "Directive NIS 2", ref: "Directive (UE) 2022/2555", type: "Directive",
    quoi: "Obligations de cybersécurité et de notification des incidents pour des milliers d'entités « essentielles » et « importantes » (énergie, santé, transport, collectivités, numérique…).",
    france: "Transposition en retard : le projet de loi « Résilience » (qui transpose aussi la directive REC et adapte le règlement DORA) n'était pas définitivement adopté à l'automne 2026, et la Commission a saisi la CJUE contre la France en juillet 2026. À vérifier avant ton stage.",
    statut: "Transposition en cours"
  },
  {
    id: "dee", nom: "Décision d'enquête européenne", ref: "Directive 2014/41/UE", type: "Directive",
    quoi: "Permet à un magistrat de demander à un autre État membre d'accomplir un acte d'enquête (perquisition, audition, interception…) avec reconnaissance mutuelle.",
    france: "Transposée dans le CPP (art. 694-15 et suivants). Pour les seules données détenues par un fournisseur, l'injonction e-evidence est désormais plus directe.",
    statut: "En vigueur"
  },
  {
    id: "agences", nom: "Europol (EC3) et Eurojust", ref: "Agences de l'Union", type: "Coopération",
    quoi: "Le Centre européen de lutte contre la cybercriminalité d'Europol coordonne les opérations transfrontalières (démantèlements de botnets, de marchés du darkweb, de groupes de rançongiciels). Eurojust coordonne les autorités judiciaires et les équipes communes d'enquête.",
    france: "Les grandes affaires françaises de rançongiciels ou de messageries chiffrées criminelles passent par ces coopérations.",
    statut: "—"
  }
];

/* ===================== VICTIMES : QUE FAIRE ? ===================== */
window.VICTIMES = [
  {
    id: "preuves", titre: "Dans tous les cas : garder les preuves",
    etapes: [
      "Faire des captures d'écran complètes : le message, le profil, la date, l'heure et l'adresse (URL) de la page.",
      "Conserver les messages, mails (avec leurs en-têtes) et numéros d'appel ; ne rien supprimer, même si c'est pénible.",
      "Noter la chronologie : qui, quoi, quand, combien.",
      "Ne pas répondre à l'auteur, ne pas négocier, ne pas payer.",
      "Utiliser le diagnostic 17Cyber sur cybermalveillance.gouv.fr pour savoir quoi faire selon la situation."
    ]
  },
  {
    id: "escroquerie", titre: "Escroquerie, faux site, faux conseiller bancaire",
    etapes: [
      "Faire opposition immédiatement auprès de sa banque et contester les opérations.",
      "Changer les mots de passe des comptes concernés.",
      "Porter plainte : au commissariat ou à la gendarmerie, ou en ligne pour certaines escroqueries sur internet (plateforme THESEE, accessible depuis service-public.fr ou le site du ministère de l'Intérieur).",
      "Signaler un SMS frauduleux en le transférant au 33700.",
      "Qualifications possibles : escroquerie (313-1), collecte déloyale de données (226-18)."
    ],
    arts: ["313-1", "226-18"]
  },
  {
    id: "compte", titre: "Compte piraté (messagerie, réseau social)",
    etapes: [
      "Tenter de récupérer le compte par la procédure officielle du service, changer le mot de passe et activer la double authentification.",
      "Prévenir ses contacts qu'ils peuvent recevoir de faux messages.",
      "Vérifier les autres comptes qui utilisaient le même mot de passe.",
      "Porter plainte si des dommages ou une usurpation en découlent.",
      "Qualifications possibles : accès frauduleux (323-1), usurpation d'identité (226-4-1)."
    ],
    arts: ["323-1", "226-4-1"]
  },
  {
    id: "rancon", titre: "Entreprise ou collectivité : rançongiciel",
    etapes: [
      "Isoler les machines du réseau sans les éteindre (préserver les traces).",
      "Ne pas payer la rançon : aucune garantie, et cela finance les groupes criminels.",
      "Porter plainte dans les 72 heures si l'on veut être indemnisé par son assureur (art. L. 12-10-1 du Code des assurances).",
      "Notifier la CNIL dans les 72 heures si des données personnelles sont touchées (art. 33 du RGPD).",
      "Faire appel à un prestataire de réponse à incident (liste sur cybermalveillance.gouv.fr ; l'ANSSI pour les opérateurs les plus sensibles).",
      "Qualifications possibles : 323-1, 323-2, 323-3, extorsion (312-1), bande organisée (323-4-1)."
    ],
    arts: ["323-2", "312-1"]
  },
  {
    id: "harcelement", titre: "Cyberharcèlement, contenus intimes, sextorsion",
    etapes: [
      "Garder les preuves, bloquer et signaler les comptes sur la plateforme.",
      "Sextorsion : ne pas payer, couper le contact, conserver les messages.",
      "Pour un jeune : le 3018, numéro national contre le cyberharcèlement, peut aider à faire retirer des contenus.",
      "Signaler les contenus illicites sur PHAROS (internet-signalement.gouv.fr).",
      "Porter plainte : les atteintes à la vie privée (226-1 à 226-2-1) ne sont poursuivies que sur plainte.",
      "Qualifications possibles : 222-33-2-2, 226-2-1, 226-8-1, 312-10."
    ],
    arts: ["222-33-2-2", "226-2-1", "312-10"]
  },
  {
    id: "mineur", titre: "Un mineur contacté par un adulte",
    etapes: [
      "Ne pas supprimer la conversation ni confronter l'auteur.",
      "Signaler sur PHAROS et porter plainte rapidement.",
      "Accompagner l'enfant : il n'est pas fautif ; le 3018 et le 119 peuvent aider.",
      "Qualifications possibles : 227-22-1, 227-23-1, 227-22-2."
    ],
    arts: ["227-22-1", "227-23-1"]
  }
];
;
/* ===== js/libertes.js ===== */
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
;
/* ===== js/itu.js ===== */
/* Compléments inspirés du guide de l'UIT « Comprendre la cybercriminalité » (M. Gercke, 2009) :
   difficultés de l'enquête, responsabilité des intermédiaires, vol d'identité en trois temps.
   Seuls les points utiles en France et en Europe ont été retenus, réécrits et mis à jour (droit en vigueur en 2026). */
(function () {
  var CP = window.LF.cp;

  /* ---------- Compétence territoriale : fiche d'acte ---------- */
  window.ACTES.unshift({
    id: "113-2-1", art: "CP 113-2-1", famille: "Compétence", titre: "Compétence française pour les infractions commises en ligne",
    citation: "Tout crime ou tout délit réalisé au moyen d'un réseau de communication électronique, lorsqu'il est tenté ou commis au préjudice d'une personne physique résidant sur le territoire de la République ou d'une personne morale dont le siège se situe sur le territoire de la République, est réputé commis sur le territoire de la République.",
    qui: "Toutes les juridictions françaises (règle de droit pénal général, Code pénal).",
    conditions: "Crime ou délit commis ou tenté au moyen d'un réseau de communication électronique, au préjudice d'une personne résidant en France ou d'une personne morale dont le siège est en France. Complète l'article 113-2 : l'infraction est commise en France dès qu'un de ses faits constitutifs y a eu lieu.",
    duree: "—",
    plus: "Créé par la loi du 3 juin 2016. La loi française s'applique même si l'auteur et le serveur sont à l'étranger ; reste ensuite à obtenir les preuves et l'auteur, par l'entraide ou l'extradition.",
    version: "05/06/2016", url: CP + "LEGISCTA000006165262/"
  });

  /* ---------- Leçons ---------- */
  var difficultes = {
    id: "difficultes-enquete", partie: "enquete",
    titre: "Pourquoi l'enquête cyber est difficile",
    resume: "Chiffre noir, anonymat, chiffrement, volatilité, frontières : les obstacles, et les outils juridiques qui y répondent.",
    arts: ["434-15-2", "132-79"],
    contenu: `
<p>Une infraction commise en ligne laisse beaucoup de traces, mais elles sont dispersées, éphémères, souvent à l'étranger et parfois chiffrées. Connaître ces obstacles permet de comprendre pourquoi les textes de procédure sont rédigés comme ils le sont.</p>

<table class="tab">
<tr><th>Obstacle</th><th>En pratique</th><th>Réponse du droit</th></tr>
<tr><td><strong>Le chiffre noir</strong></td><td>Beaucoup de victimes ne portent pas plainte : petits montants, honte (sextorsion), peur pour la réputation (entreprises). Les statistiques sous-estiment le phénomène.</td><td>Plainte en ligne pour les escroqueries, plainte exigée pour être indemnisé après une cyberattaque (Code des assurances, L. 12-10-1).</td></tr>
<tr><td><strong>L'automatisation</strong></td><td>Un seul auteur vise des milliers de victimes pour de petites sommes ; chaque plainte isolée paraît mineure.</td><td>Regroupement des plaintes, compétence nationale du parquet de Paris pour les atteintes aux STAD (CPP <a href="#/acte/706-72-1">706-72-1</a>).</td></tr>
<tr><td><strong>L'anonymat</strong></td><td>Wi-Fi publics, cartes prépayées, VPN, Tor, adresses mail créées sans vérification, comptes au nom d'un tiers.</td><td>Réquisitions aux opérateurs et hébergeurs (<a href="#/acte/60-1-2">60-1-2</a>), obligation de conserver les données d'identification (LCEN), enquête sous pseudonyme (<a href="#/acte/230-46">230-46</a>).</td></tr>
<tr><td><strong>Le chiffrement</strong></td><td>Disques, téléphones et messageries chiffrés.</td><td>Mise au clair (<a href="#/acte/230-1">230-1</a>), refus de remettre la clé (<a class="art" href="#/infraction/434-15-2">434-15-2</a>), aggravation de la peine (<a class="art" href="#/infraction/132-79">132-79</a>), captation de données (<a href="#/acte/706-102-1">706-102-1</a>).</td></tr>
<tr><td><strong>La volatilité</strong></td><td>Journaux effacés après quelques jours, comptes supprimés, mémoire vive perdue à l'extinction.</td><td>Préservation rapide des données (« gel ») : CPP <a href="#/acte/60-2">60-2</a> ; injonction européenne de conservation (e-evidence).</td></tr>
<tr><td><strong>Les frontières</strong></td><td>L'auteur, le serveur et la victime sont dans trois pays différents ; certains États servent de refuges.</td><td>Compétence française (<a href="#/acte/113-2-1">CP 113-2-1</a>), Convention de Budapest, décision d'enquête européenne, règlement e-evidence, Europol et Eurojust.</td></tr>
<tr><td><strong>La vitesse d'évolution</strong></td><td>Nouvelles techniques plus rapides que les lois.</td><td>Incriminations « neutres » (323-1 vise tout système, quel que soit l'outil) et réformes régulières (2023, 2024, 2025).</td></tr>
</table>

<h3>Conserver ou préserver : deux notions à ne pas confondre</h3>
<ul>
  <li><strong>La conservation générale</strong> (« data retention ») : les opérateurs gardent par défaut certaines données de tous leurs clients pendant une durée fixée par la loi. La Cour de justice de l'Union européenne l'a fortement encadrée : en dehors des menaces graves pour la sécurité nationale, une conservation généralisée des données de trafic et de localisation n'est pas admise (voir <a href="#/arret/digital-rights">Digital Rights Ireland</a>, <a href="#/arret/tele2">Tele2</a> et <a href="#/arret/lqdn">La Quadrature du Net</a>). Les adresses IP et les données d'identité civile restent conservables plus largement.</li>
  <li><strong>La préservation ciblée</strong> (« gel rapide », « quick freeze ») : dans une enquête précise, l'enquêteur demande de ne pas effacer des données qui existent encore, le temps d'obtenir l'autorisation d'y accéder. C'est l'article 16 de la Convention de Budapest et, en France, l'article <a href="#/acte/60-2">60-2</a> du CPP.</li>
</ul>

<div class="encadre"><strong>Le réflexe en stage.</strong> Le premier geste dans une affaire en ligne est souvent une demande de préservation à la plateforme, avant même de connaître l'auteur : sans elle, les journaux de connexion peuvent avoir disparu quand la réquisition arrive.</div>
`,
    retenir: [
      "Obstacles : chiffre noir, automatisation, anonymat, chiffrement, volatilité, frontières.",
      "CP 113-2-1 : un délit commis en ligne contre une victime résidant en France est réputé commis en France.",
      "Conservation générale ≠ préservation ciblée (« gel rapide », CPP 60-2).",
      "La CJUE limite la conservation généralisée des données de trafic et de localisation."
    ]
  };

  var intermediaires = {
    id: "intermediaires", partie: "moyen",
    titre: "Qui est responsable ? Les intermédiaires techniques",
    resume: "Éditeur, hébergeur, fournisseur d'accès : ce que chacun risque, et ce que l'enquêteur peut leur demander.",
    arts: ["lcen-6-v", "lcen-6-vii", "323-3-2"],
    contenu: `
<p>Un contenu illicite circule grâce à une chaîne d'acteurs. Le droit ne les traite pas de la même façon : plus un acteur a la maîtrise du contenu, plus il est responsable.</p>

<table class="tab">
<tr><th>Acteur</th><th>Rôle</th><th>Responsabilité</th></tr>
<tr><td><strong>Éditeur</strong></td><td>Choisit et publie le contenu (auteur d'un blog, média en ligne).</td><td>Pleinement responsable, comme l'auteur.</td></tr>
<tr><td><strong>Hébergeur</strong></td><td>Stocke des contenus fournis par d'autres (réseau social, plateforme de vidéos, forum, stockage en ligne).</td><td>Pas responsable a priori ; le devient s'il a <strong>connaissance effective</strong> du caractère illicite et ne retire pas <strong>promptement</strong>.</td></tr>
<tr><td><strong>Fournisseur d'accès</strong> (« simple transport »)</td><td>Transmet les données sans les choisir ni les modifier.</td><td>Pas responsable du contenu transporté ; peut recevoir des ordres de blocage.</td></tr>
<tr><td><strong>Cache</strong></td><td>Copie temporaire pour accélérer la transmission.</td><td>Pas responsable s'il ne modifie pas l'information et la retire quand l'original est retiré.</td></tr>
</table>

<h3>D'où viennent ces règles ?</h3>
<p>Elles ont été posées par la directive européenne « commerce électronique » de 2000 (articles 12 à 15) et transposées en France par la LCEN de 2004. Elles sont aujourd'hui reprises par le <a href="#/europe">règlement sur les services numériques (DSA)</a> : simple transport (art. 4), cache (art. 5), hébergement (art. 6), et <strong>absence d'obligation générale de surveillance</strong> (art. 8). Un hébergeur ne peut donc pas être obligé de surveiller tout ce qu'il stocke, mais il doit agir quand on lui signale un contenu manifestement illicite.</p>
<p>La Cour de justice précise ces notions : une plateforme qui joue un « rôle actif » (en optimisant ou en promouvant les annonces) perd le bénéfice du régime de l'hébergeur (<a href="#/arret/loreal-ebay">L'Oréal c/ eBay</a>), et un juge peut ordonner le retrait de contenus identiques ou équivalents à un contenu jugé illicite (<a href="#/arret/glawischnig">Glawischnig-Piesczek</a>).</p>

<h3>Ce que l'enquêteur peut obtenir</h3>
<ul>
  <li>Les <strong>données d'identification</strong> des personnes qui ont créé un contenu, que les hébergeurs et fournisseurs d'accès doivent conserver ; ne pas les conserver ou ne pas les communiquer au juge est puni d'un an et 250 000 € (<a class="art" href="#/infraction/lcen-6-v">LCEN 6 V</a>).</li>
  <li>La <strong>préservation</strong> puis la communication des données (CPP <a href="#/acte/60-2">60-2</a>, <a href="#/acte/60-1-2">60-1-2</a>).</li>
  <li>Le <strong>retrait administratif</strong> des contenus terroristes et pédopornographiques (LCEN art. 6-1), en une heure pour les contenus terroristes.</li>
</ul>
<div class="encadre attention"><strong>Attention aux signalements abusifs.</strong> Présenter sciemment un contenu licite comme illicite pour le faire retirer est un délit (<a class="art" href="#/infraction/lcen-6-vii">LCEN 6 VII</a>). Et une plateforme qui permet sciemment la vente de produits manifestement illicites tout en se dérobant à ses obligations peut être poursuivie pénalement (<a class="art" href="#/infraction/323-3-2">323-3-2</a>).</div>
`,
    retenir: [
      "Éditeur responsable ; hébergeur responsable seulement s'il sait et ne retire pas promptement.",
      "Pas d'obligation générale de surveillance (directive 2000, aujourd'hui DSA art. 8).",
      "Hébergeurs et FAI doivent conserver les données d'identification (LCEN 6 V)."
    ]
  };

  var identite = {
    id: "vol-identite", partie: "moyen",
    titre: "Le vol d'identité en trois temps",
    resume: "Obtenir, revendre, utiliser : chaque étape a sa qualification.",
    arts: ["226-18", "323-1", "323-3", "323-3-2", "226-4-1", "313-1"],
    contenu: `
<p>Le « vol d'identité » n'est pas une infraction unique : c'est un processus, qui se déroule généralement en trois temps. Les distinguer aide à qualifier chaque acteur de la chaîne, qui sont souvent des personnes différentes.</p>

<table class="tab">
<tr><th>Étape</th><th>Exemples</th><th>Qualifications possibles</th></tr>
<tr><td><strong>1. Obtenir</strong> les données</td><td>Hameçonnage, logiciel espion ou enregistreur de frappe, intrusion dans une base de données, vol d'un ordinateur, fouille de courrier ou de poubelles, salarié qui extrait un fichier, recherches avancées sur des moteurs de recherche pour trouver des fichiers mal protégés.</td><td>Collecte déloyale (<a class="art" href="#/infraction/226-18">226-18</a>), accès frauduleux et extraction (<a class="art" href="#/infraction/323-1">323-1</a>, <a class="art" href="#/infraction/323-3">323-3</a>), vol (pour un support matériel).</td></tr>
<tr><td><strong>2. Échanger</strong> les données</td><td>Revente de « fullz » (identité complète), de numéros de carte ou d'identifiants sur des forums ou des marchés du darkweb.</td><td>Détention et transmission de données frauduleusement obtenues (<a class="art" href="#/infraction/323-3">323-3</a>), administrateur de la plateforme (<a class="art" href="#/infraction/323-3-2">323-3-2</a>), association de malfaiteurs.</td></tr>
<tr><td><strong>3. Utiliser</strong> l'identité</td><td>Ouverture de comptes ou de crédits, achats avec la carte, faux profils, faux documents.</td><td>Escroquerie (<a class="art" href="#/infraction/313-1">313-1</a>, faux nom ou fausse qualité), usurpation d'identité (<a class="art" href="#/infraction/226-4-1">226-4-1</a>), faux et usage de faux.</td></tr>
</table>

<div class="encadre"><strong>Pour l'enquête.</strong> L'auteur de l'étape 3 (souvent une « mule » qui prête son compte bancaire ou retire l'argent) est le plus facile à identifier, mais rarement le cerveau. Remonter la chaîne passe par les flux financiers et par les plateformes de l'étape 2.</div>
`,
    retenir: [
      "Vol d'identité = obtenir, échanger, utiliser.",
      "Obtenir : 226-18, 323-1, 323-3 ; échanger : 323-3, 323-3-2 ; utiliser : 313-1, 226-4-1.",
      "La mule est le maillon visible ; les organisateurs sont en amont."
    ]
  };

  function inserer(apres, lecon) {
    var pos = window.COURS.length;
    window.COURS.forEach(function (c, i) { if (c.id === apres) pos = i + 1; });
    window.COURS.splice(pos, 0, lecon);
  }
  inserer("fraudes", intermediaires);
  inserer("intermediaires", identite);
  inserer("procedure", difficultes);

  /* ---------- Jurisprudence européenne ---------- */
  window.JURIS.push(
    {
      id: "digital-rights", court: "Digital Rights Ireland", juridiction: "CJUE, gde ch.", date: "8 avril 2014", num: "C-293/12 et C-594/12",
      theme: "Données de connexion",
      faits: "Une directive européenne de 2006 obligeait les opérateurs à conserver pendant 6 à 24 mois les données de trafic et de localisation de tous leurs abonnés.",
      question: "Cette conservation généralisée est-elle compatible avec la Charte des droits fondamentaux (vie privée, protection des données) ?",
      solution: "Non : la directive est invalidée, car elle concerne toute la population sans distinction, sans limitation suffisante ni contrôle préalable d'accès.",
      portee: "Point de départ de la jurisprudence européenne sur les données de connexion, poursuivie par Tele2 (2016) et La Quadrature du Net (2020).",
      arts: []
    },
    {
      id: "tele2", court: "Tele2 Sverige", juridiction: "CJUE, gde ch.", date: "21 décembre 2016", num: "C-203/15 et C-698/15",
      theme: "Données de connexion",
      faits: "Après l'invalidation de la directive de 2006, la Suède et le Royaume-Uni avaient maintenu des obligations nationales de conservation généralisée.",
      question: "Les États peuvent-ils imposer une conservation générale et indifférenciée des données au titre de la lutte contre la criminalité ?",
      solution: "Non : seule une conservation ciblée est admise pour la criminalité grave, et l'accès aux données doit être soumis à un contrôle préalable par une juridiction ou une autorité indépendante.",
      portee: "Fonde les arrêts ultérieurs (La Quadrature du Net, Prokuratuur) et la réforme française de 2021-2022.",
      arts: []
    },
    {
      id: "fdn", court: "French Data Network", juridiction: "Conseil d'État, ass.", date: "21 avril 2021", num: "n° 393099",
      theme: "Données de connexion",
      faits: "Des associations contestaient le régime français de conservation des données de connexion à la suite de l'arrêt La Quadrature du Net de la CJUE.",
      question: "Comment concilier le droit de l'Union avec les besoins de la sécurité nationale et des enquêtes pénales ?",
      solution: "Le Conseil d'État admet la conservation généralisée au nom d'une menace grave et actuelle pour la sécurité nationale, réexaminée régulièrement, et en tire que les enquêteurs peuvent accéder, pour la criminalité grave, aux données ainsi conservées ; il impose un réexamen périodique de la menace.",
      portee: "A conduit à la loi du 30 juillet 2021 (réécriture de l'article L. 34-1 du Code des postes et des communications électroniques).",
      arts: []
    },
    {
      id: "loreal-ebay", court: "L'Oréal c/ eBay", juridiction: "CJUE, gde ch.", date: "12 juillet 2011", num: "C-324/09",
      theme: "Intermédiaires",
      faits: "Des contrefaçons de produits L'Oréal étaient vendues sur eBay, qui faisait aussi de la publicité pour certaines annonces.",
      question: "Une place de marché en ligne bénéficie-t-elle toujours du régime protecteur de l'hébergeur ?",
      solution: "Non si elle joue un « rôle actif » lui donnant connaissance ou contrôle des données (assistance pour optimiser ou promouvoir les offres). Et même hébergeur, elle est responsable si, informée de faits rendant l'illicéité apparente, elle n'agit pas promptement.",
      portee: "Critère du rôle actif, repris dans le règlement sur les services numériques (DSA).",
      arts: []
    },
    {
      id: "glawischnig", court: "Glawischnig-Piesczek c/ Facebook", juridiction: "CJUE", date: "3 octobre 2019", num: "C-18/18",
      theme: "Intermédiaires",
      faits: "Une responsable politique autrichienne obtient en justice que Facebook retire un message diffamatoire à son égard.",
      question: "Un juge peut-il ordonner à l'hébergeur de retirer aussi les contenus identiques ou équivalents, sans violer l'interdiction d'une obligation générale de surveillance ?",
      solution: "Oui, pour les contenus identiques et pour les contenus équivalents dont les éléments sont précisés par l'injonction, sans exiger de l'hébergeur une appréciation autonome ; l'injonction peut avoir une portée mondiale dans le respect du droit international.",
      portee: "Délimite l'interdiction de l'obligation générale de surveillance (aujourd'hui article 8 du DSA).",
      arts: []
    }
  );

  /* ---------- Lexique ---------- */
  window.LEXIQUE.push(
    ["Chiffre noir", "Part des infractions jamais signalées ni connues des services ; très importante en matière cyber."],
    ["Gel rapide (quick freeze)", "Demande de préserver des données qui existent encore, dans une enquête précise, le temps d'en obtenir l'accès (Budapest art. 16, CPP 60-2)."],
    ["Conservation des données (data retention)", "Obligation faite aux opérateurs de garder par défaut certaines données de tous leurs clients ; très encadrée par la CJUE."],
    ["Éditeur", "Celui qui choisit et publie un contenu ; pleinement responsable."],
    ["Intermédiaire technique", "Fournisseur d'accès, service de cache ou hébergeur : responsabilité limitée, mais obligations de retrait et de conservation."],
    ["Rôle actif", "Critère de la CJUE : une plateforme qui optimise ou promeut les contenus perd le régime protecteur de l'hébergeur."],
    ["Mule", "Personne qui prête son compte bancaire ou son identité, ou retire de l'argent, pour le compte d'escrocs ; maillon le plus visible de la chaîne."],
    ["Fullz", "Dans le jargon des fraudeurs, ensemble complet de données d'identité d'une victime, revendu en ligne."]
  );

  /* ---------- Vrai ou faux ---------- */
  window.VRAIFAUX.push(
    { q: "Une escroquerie en ligne commise depuis l'étranger contre une victime résidant en France est réputée commise en France.", r: true, e: "Article 113-2-1 du Code pénal (loi du 3 juin 2016)." },
    { q: "Un hébergeur doit surveiller en permanence tous les contenus qu'il stocke.", r: false, e: "Il n'existe pas d'obligation générale de surveillance (directive de 2000, aujourd'hui DSA art. 8) ; il doit retirer promptement ce qu'on lui signale de manifestement illicite." },
    { q: "La directive européenne de 2006 sur la conservation des données a été invalidée par la CJUE.", r: true, e: "Arrêt Digital Rights Ireland du 8 avril 2014." },
    { q: "Le « gel rapide » et la conservation générale des données désignent la même chose.", r: false, e: "Le gel vise des données précises dans une enquête ; la conservation générale porte sur les données de tous les clients." },
    { q: "Une place de marché qui promeut activement certaines annonces peut perdre le régime protecteur de l'hébergeur.", r: true, e: "Critère du « rôle actif », CJUE L'Oréal c/ eBay, 2011." }
  );

  /* ---------- Cas pratique ---------- */
  window.CAS.push({
    id: "mule", titre: "Le compte prêté",
    faits: "Contactée sur un réseau social pour un « job facile », une étudiante accepte de recevoir des virements sur son compte et de les reverser en cryptomonnaie contre une commission. Les fonds proviennent de victimes de faux conseillers bancaires. Les identités utilisées pour ouvrir d'autres comptes avaient été achetées sur un forum.",
    bonnes: ["313-1", "323-3", "323-3-2"], pieges: ["226-4-1", "312-1", "323-2"],
    correction: "Les faux conseillers commettent l'escroquerie (313-1), et l'étudiante, si elle savait ou ne pouvait ignorer l'origine des fonds, peut être poursuivie comme complice ou pour blanchiment (non traité sur le site). Les données d'identité vendues sur le forum relèvent de la détention et de la transmission de données frauduleusement obtenues (323-3) ; l'administrateur d'un forum qui permet sciemment ce commerce, s'il réserve l'accès aux utilisateurs de techniques d'anonymisation ou manque à ses obligations, relève de 323-3-2. L'usurpation d'identité (226-4-1) suppose le but de troubler la tranquillité ou de nuire à l'honneur : ici le but est financier, c'est l'escroquerie (usage d'un faux nom) qui s'impose."
  });
})();
;
/* ===== js/onudc.js ===== */
/* Compléments inspirés de l'« Étude détaillée sur la cybercriminalité » de l'ONUDC (ébauche, février 2013) :
   compétence et coopération internationale, preuve numérique devant le juge.
   Seuls les points utiles en France et en Europe ont été retenus, réécrits à partir des textes français
   (relus sur Légifrance le 20 novembre 2026). */
(function () {
  var CP = window.LF.cp, CPP = window.LF.cpp;

  /* ---------- Fiches d'actes ---------- */
  window.ACTES.push(
    {
      id: "113-6-7", art: "CP 113-6 et 113-7", famille: "Compétence", titre: "Infractions commises à l'étranger par ou contre un Français",
      citation: "La loi pénale française est applicable à tout crime, ainsi qu'à tout délit puni d'emprisonnement, commis par un Français ou par un étranger hors du territoire de la République lorsque la victime est de nationalité française au moment de l'infraction.",
      qui: "Juridictions françaises ; poursuite des délits à la seule requête du ministère public (113-8).",
      conditions: "113-6 : crime commis par un Français à l'étranger ; délit commis par un Français à l'étranger si les faits sont aussi punis dans le pays où ils ont été commis. 113-7 (cité) : crime ou délit puni d'emprisonnement commis contre une victime française. Pour les délits, plainte de la victime ou dénonciation officielle du pays des faits (113-8).",
      duree: "—",
      plus: "En matière cyber, 113-2-1 suffit souvent (victime résidant en France). 113-6 et 113-7 servent quand la victime française réside à l'étranger, ou pour un auteur français opérant depuis l'étranger.",
      version: "10/12/2009 (113-6) ; 01/03/1994 (113-7)", url: CP + "LEGISCTA000006165263/"
    },
    {
      id: "694-15", art: "CPP 694-15 et 694-16", famille: "Coopération", titre: "Décision d'enquête européenne",
      citation: "Une décision d'enquête européenne est une décision judiciaire émise par un Etat membre, appelé Etat d'émission, demandant à un autre Etat membre, appelé Etat d'exécution, en utilisant des formulaires communs à l'ensemble des Etats, de réaliser dans un certain délai sur son territoire des investigations tendant à l'obtention d'éléments de preuve relatifs à une infraction pénale ou à la communication d'éléments de preuve déjà en sa possession.",
      qui: "Autorité judiciaire (procureur, juge d'instruction) ; en sens inverse, exécution en France des décisions d'autres États.",
      conditions: "Entre la France et les autres États membres de l'Union, l'entraide pénale passe en principe par la décision d'enquête européenne (art. 694-15). Elle peut aussi viser à empêcher provisoirement la destruction ou le déplacement d'éléments de preuve.",
      duree: "Délai fixé par la décision, selon des formulaires communs.",
      plus: "Citation : article 694-16. Issue de la directive 2014/41/UE (ordonnance du 1er décembre 2016). Pour des données détenues par un fournisseur dans un autre État membre, l'injonction e-evidence est désormais plus directe.",
      version: "03/12/2016", url: CPP + "LEGISCTA000006167502/"
    },
    {
      id: "695-11", art: "CPP 695-11", famille: "Coopération", titre: "Mandat d'arrêt européen",
      citation: "Le mandat d'arrêt européen est une décision judiciaire émise par un Etat membre de l'Union européenne, appelé Etat membre d'émission, en vue de l'arrestation et de la remise par un autre Etat membre, appelé Etat membre d'exécution, d'une personne recherchée pour l'exercice de poursuites pénales ou pour l'exécution d'une peine ou d'une mesure de sûreté privative de liberté.",
      qui: "Autorité judiciaire de l'État d'émission ; exécution par l'autorité judiciaire de l'État où se trouve la personne.",
      conditions: "Faits punis d'au moins un an d'emprisonnement, ou condamnation à au moins quatre mois (art. 695-12).",
      duree: "—",
      plus: "Remplace l'extradition entre États membres : procédure entièrement judiciaire et plus rapide. Hors de l'Union, on reste sur l'extradition.",
      version: "10/03/2004", url: CPP + "LEGISCTA000006167507/"
    },
    {
      id: "427", art: "CPP 427", famille: "Preuve", titre: "Liberté de la preuve et débat contradictoire",
      citation: "Hors les cas où la loi en dispose autrement, les infractions peuvent être établies par tout mode de preuve et le juge décide d'après son intime conviction. Le juge ne peut fonder sa décision que sur des preuves qui lui sont apportées au cours des débats et contradictoirement discutées devant lui.",
      qui: "Toutes les juridictions de jugement.",
      conditions: "Toute preuve est admissible (captures d'écran, journaux, expertises, métadonnées…), mais elle doit être versée aux débats et discutée contradictoirement.",
      duree: "—",
      plus: "La valeur de la preuve numérique dépend de sa fiabilité : origine, intégrité (empreinte), chaîne de traçabilité. Les preuves recueillies par les enquêteurs doivent en outre être loyales.",
      version: "02/09/1993", url: CPP + "LEGISCTA000006182908/"
    }
  );

  /* ---------- Leçons ---------- */
  var cooperation = {
    id: "cooperation", partie: "enquete",
    titre: "Compétence et coopération internationale",
    resume: "Quand la France peut juger, et comment obtenir preuves et suspects à l'étranger.",
    arts: ["323-1", "313-1"],
    contenu: `
<p>Dans une affaire cyber, l'auteur, les serveurs, les données et la victime sont rarement dans le même pays. Deux questions se posent : la France peut-elle juger ? Et comment obtenir les preuves et la personne ?</p>

<h3>1. La France peut-elle juger ?</h3>
<table class="tab">
<tr><th>Critère</th><th>Texte</th><th>Exemple</th></tr>
<tr><td>Un fait constitutif a eu lieu en France</td><td>CP 113-2</td><td>Le faux SMS est reçu et le virement fait depuis la France.</td></tr>
<tr><td>Délit commis en ligne contre une personne qui réside en France ou une société dont le siège est en France</td><td><a href="#/acte/113-2-1">CP 113-2-1</a></td><td>Rançongiciel lancé depuis l'étranger contre une PME française.</td></tr>
<tr><td>Auteur français à l'étranger</td><td><a href="#/acte/113-6-7">CP 113-6</a></td><td>Un Français qui pirate des serveurs depuis l'étranger (délit : double incrimination exigée).</td></tr>
<tr><td>Victime française à l'étranger</td><td><a href="#/acte/113-6-7">CP 113-7</a></td><td>Expatrié français victime de sextorsion par un auteur étranger.</td></tr>
</table>
<p>Plusieurs pays peuvent être compétents en même temps. Eurojust aide à décider où poursuivre, et la règle <em>non bis in idem</em> interdit de juger deux fois la même personne pour les mêmes faits dans l'Union.</p>

<h3>2. Obtenir les preuves</h3>
<ul>
  <li><strong>Dans l'Union européenne</strong> : la <a href="#/acte/694-15">décision d'enquête européenne</a> (perquisition, audition, interception… réalisées par l'autre État) ; depuis le 18 août 2026, l'<a href="#/europe">injonction européenne de production ou de conservation</a> adressée directement au fournisseur de services.</li>
  <li><strong>Hors de l'Union</strong> : la demande d'entraide classique, fondée sur un traité bilatéral ou la Convention de Budapest, souvent lente (plusieurs mois).</li>
  <li><strong>Directement auprès des grands fournisseurs</strong> : beaucoup de plateformes établies hors de France répondent volontairement à certaines demandes des autorités françaises (données d'abonné, préservation), selon leurs propres règles.</li>
  <li><strong>Pendant une perquisition</strong> : l'accès aux données stockées à l'étranger depuis l'ordinateur saisi n'est possible que dans le cadre des engagements internationaux (<a href="#/acte/57-1">CPP 57-1</a>).</li>
</ul>

<h3>3. Obtenir la personne</h3>
<ul>
  <li>Dans l'Union : le <a href="#/acte/695-11">mandat d'arrêt européen</a>, entièrement judiciaire, pour des faits punis d'au moins un an.</li>
  <li>Hors de l'Union : l'extradition, qui dépend des traités et de la volonté de l'État ; certains pays n'extradent pas leurs ressortissants.</li>
</ul>

<h3>4. La coopération informelle et opérationnelle</h3>
<p>À côté des procédures formelles, la coopération de police à police est essentielle pour aller vite : réseau de points de contact 24/7 (Convention de Budapest, art. 35), Europol et son centre de lutte contre la cybercriminalité, Interpol, équipes communes d'enquête entre plusieurs États. Les informations obtenues ainsi servent à orienter l'enquête ; pour être utilisées comme preuves, elles doivent en principe être obtenues ou confirmées par une voie formelle.</p>

<div class="encadre"><strong>En résumé.</strong> Être compétent ne suffit pas : sans les preuves et sans la personne, la procédure reste bloquée. D'où l'importance de préserver les données très tôt et de passer par les outils européens dès qu'un autre État membre est concerné.</div>
`,
    retenir: [
      "Compétence : 113-2 (fait en France), 113-2-1 (victime en France, infraction en ligne), 113-6 (auteur français), 113-7 (victime française).",
      "Preuves dans l'UE : décision d'enquête européenne, et e-evidence pour les fournisseurs.",
      "Personnes dans l'UE : mandat d'arrêt européen (faits punis d'au moins un an).",
      "La coopération informelle oriente l'enquête ; la preuve passe par les voies formelles."
    ]
  };

  var preuve = {
    id: "preuve-juge", partie: "enquete",
    titre: "La preuve numérique devant le juge",
    resume: "Liberté de la preuve, loyauté, fiabilité : ce qui rend une capture d'écran ou un journal convaincant.",
    arts: ["434-15-2"],
    contenu: `
<h3>Le principe : la liberté de la preuve</h3>
<p>En matière pénale, une infraction peut être établie « par tout mode de preuve » et le juge décide selon son intime conviction, à condition que la preuve ait été discutée contradictoirement à l'audience (<a href="#/acte/427">CPP art. 427</a>). Une capture d'écran, un journal de connexion, une conversation exportée, une expertise : tout peut être produit. La vraie question n'est donc pas « est-ce recevable ? » mais « est-ce fiable ? ».</p>

<h3>Ce qui fait la force d'une preuve numérique</h3>
<table class="tab">
<tr><th>Question de la défense</th><th>Réponse attendue</th></tr>
<tr><td>D'où vient cette donnée ?</td><td>Origine identifiée : support saisi, réponse à réquisition d'un opérateur, constat d'un enquêteur ou d'un commissaire de justice.</td></tr>
<tr><td>A-t-elle été modifiée ?</td><td>Empreinte (hash) calculée à la saisie et vérifiée ensuite ; analyse faite sur une copie.</td></tr>
<tr><td>Qui l'a manipulée ?</td><td>Chaîne de traçabilité : scellés, procès-verbaux, rapport d'expertise.</td></tr>
<tr><td>Que montre-t-elle vraiment ?</td><td>Interprétation prudente : une adresse IP désigne un abonnement, pas une personne ; un compte peut être utilisé par un tiers ; les horodatages dépendent des fuseaux et de l'horloge de la machine.</td></tr>
</table>
<p>Une simple capture d'écran fournie par la victime est utile pour démarrer, mais fragile : elle se fabrique facilement. Elle gagne à être confirmée par un procès-verbal de constat de l'enquêteur (URL, date, heure) et par les réponses des plateformes aux réquisitions.</p>

<h3>La loyauté de la preuve</h3>
<ul>
  <li><strong>Pour les enquêteurs</strong>, la preuve doit être recueillie loyalement : pas de provocation à l'infraction (rappelé expressément pour l'enquête sous pseudonyme, <a href="#/acte/230-46">230-46</a>), respect des conditions de chaque acte (autorisation, seuils de peine, durée), sous peine de nullité.</li>
  <li><strong>Pour les parties privées</strong> (victime, entreprise), la chambre criminelle admet de longue date que le juge ne peut écarter une preuve au seul motif qu'elle a été obtenue de façon illicite ou déloyale ; il en apprécie la valeur après débat contradictoire. Attention : la personne qui l'a recueillie peut, elle, commettre une infraction (par exemple en accédant à la messagerie d'autrui).</li>
</ul>

<h3>L'expertise</h3>
<p>Pour les analyses techniques complexes (téléphone chiffré, disque, mémoire vive, flux réseau), le juge ou le procureur font appel à un expert ou à un service spécialisé, qui rend un rapport décrivant sa méthode et ses limites. Les données chiffrées relèvent de la procédure de mise au clair (<a href="#/acte/230-1">230-1</a>) ; le refus de remettre une clé est un délit (<a class="art" href="#/infraction/434-15-2">434-15-2</a>).</p>

<div class="encadre attention"><strong>Recodification.</strong> L'article 427 du CPP, comme les autres articles cités, sera renuméroté au 1er janvier 2029.</div>
`,
    retenir: [
      "Liberté de la preuve et intime conviction (CPP 427), mais débat contradictoire obligatoire.",
      "Fiabilité : origine, intégrité (empreinte), traçabilité, interprétation prudente.",
      "Une adresse IP désigne un abonnement, pas une personne.",
      "Enquêteurs : preuve loyale, pas de provocation ; parties privées : preuve admise, appréciée par le juge."
    ]
  };

  var pos = window.COURS.length;
  window.COURS.forEach(function (c, i) { if (c.id === "difficultes-enquete") pos = i + 1; });
  window.COURS.splice(pos, 0, cooperation, preuve);

  /* ---------- Lexique ---------- */
  window.LEXIQUE.push(
    ["Décision d'enquête européenne", "Demande d'un magistrat à un autre État membre d'accomplir un acte d'enquête (CPP 694-15 et suivants)."],
    ["Mandat d'arrêt européen", "Décision judiciaire d'arrestation et de remise d'une personne entre États membres (CPP 695-11)."],
    ["Entraide pénale internationale", "Coopération entre autorités judiciaires de pays différents pour obtenir des preuves ou des actes."],
    ["Non bis in idem", "Principe selon lequel une personne ne peut être poursuivie ou condamnée deux fois pour les mêmes faits."],
    ["Intime conviction", "Le juge pénal apprécie librement la valeur des preuves débattues devant lui (CPP 427)."],
    ["Loyauté de la preuve", "Les enquêteurs ne peuvent obtenir une preuve par provocation ou par un stratagème déloyal."],
    ["Équipe commune d'enquête", "Équipe d'enquêteurs de plusieurs États travaillant ensemble sur une même affaire."]
  );

  /* ---------- Vrai ou faux ---------- */
  window.VRAIFAUX.push(
    { q: "Une capture d'écran est en principe recevable comme preuve devant le juge pénal.", r: true, e: "Liberté de la preuve (CPP 427) ; reste à en établir la fiabilité." },
    { q: "Une adresse IP identifie avec certitude l'auteur d'un message.", r: false, e: "Elle désigne un abonnement ou une connexion ; plusieurs personnes peuvent l'utiliser." },
    { q: "Le mandat d'arrêt européen peut être émis pour des faits punis d'au moins un an d'emprisonnement.", r: true, e: "Article 695-12 du CPP." },
    { q: "Entre États membres de l'Union, l'entraide pénale passe en principe par la décision d'enquête européenne.", r: true, e: "Article 694-15 du CPP." },
    { q: "La loi française s'applique à un délit commis à l'étranger contre une victime de nationalité française, s'il est puni d'emprisonnement.", r: true, e: "Article 113-7 du Code pénal ; poursuite sur plainte ou dénonciation officielle (113-8)." }
  );

  /* ---------- Cas pratique ---------- */
  var L = window.CAS_LIBELLES = window.CAS_LIBELLES || {};
  L["c-113-2-1"] = "Compétence : CP 113-2-1 (infraction en ligne, victime en France)";
  L["c-113-7"] = "Compétence : CP 113-7 (victime de nationalité française)";
  L["c-incompetent"] = "La France n'est pas compétente : l'auteur et le serveur sont à l'étranger";
  L["o-dee"] = "Outil : décision d'enquête européenne vers l'Allemagne";
  L["o-eevidence"] = "Outil : injonction européenne de production au fournisseur";
  L["o-mae"] = "Outil : mandat d'arrêt européen";
  L["o-extradition"] = "Outil : demande d'extradition à l'Allemagne";
  L["o-capture"] = "Preuve : se contenter des captures d'écran de la victime";
  window.CAS.push({
    id: "t-international", partie: "cooperation", titre: "L'escroc installé en Allemagne",
    faits: "Une PME de Lyon perd 40 000 € après un faux changement de coordonnées bancaires d'un fournisseur, envoyé depuis une messagerie piratée. L'enquête montre que les mails de l'escroc passaient par un hébergeur établi en Irlande et que le suspect, de nationalité roumaine, vit en Allemagne.",
    bonnes: ["c-113-2-1", "313-1", "o-eevidence", "o-mae", "o-dee"], pieges: ["c-incompetent", "o-extradition", "o-capture", "c-113-7"],
    correction: "La victime a son siège en France et l'infraction a été commise en ligne : la loi française s'applique (113-2-1 ; la remise des fonds en France suffirait aussi, 113-2). 113-7 vise une victime de nationalité française agissant hors de France : inutile ici. Qualification : escroquerie (313-1), et 323-1 pour la messagerie piratée. Pour les données de l'hébergeur irlandais : injonction européenne de production (e-evidence) ; pour des actes en Allemagne (perquisition, audition) : décision d'enquête européenne ; pour obtenir la personne : mandat d'arrêt européen, et non l'extradition, réservée aux pays hors de l'Union. Les captures de la victime ne suffisent pas : il faut des réponses de fournisseurs et des constats."
  });
})();
;
/* ===== js/ofac.js ===== */
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
;
/* ===== js/interpol.js ===== */
/* INTERPOL et la cybercriminalité — d'après la brochure « Cybercriminalité — Des projets de police tournés
   vers l'avenir » (INTERPOL, 2017), résumée et replacée dans le contexte français. */
(function () {
  /* Page Europe et international : après Europol et Eurojust */
  window.EUROPE.push({
    id: "interpol", nom: "INTERPOL", ref: "Organisation internationale de police criminelle, siège à Lyon", type: "Coopération",
    quoi: "Organisation de coopération policière mondiale. En matière cyber (présentation de 2017) : appui aux enquêtes et coordination d'opérations transnationales depuis son Complexe mondial pour l'innovation à Singapour ; un « Cyber Fusion Centre » réunissant policiers et experts du secteur privé pour produire du renseignement exploitable ; un laboratoire d'informatique légale (analyse de logiciels malveillants, examen de supports, test d'outils) ; des formations (darknet, informatique légale, analyse de malwares) ; et les notices et diffusions pour alerter toutes les polices.",
    france: "La France y passe pour les échanges avec les pays hors de l'Union européenne ; dans l'Union, Europol et Eurojust sont les canaux habituels. Pour les infractions spécifiques au numérique, l'OFAC est le point de contact central de la France dans les échanges opérationnels internationaux (décret n° 2023-1083, art. 7).",
    statut: "—"
  });

  /* Leçon « Compétence et coopération » : une précision sur les notices */
  window.COURS.forEach(function (c) {
    if (c.id === "cooperation") {
      c.contenu = c.contenu.replace(
        "Interpol, équipes communes d'enquête entre plusieurs États.",
        "Interpol (dont les <strong>notices</strong> : la notice rouge demande la localisation et l'arrestation provisoire d'une personne en vue de son extradition, la notice violette diffuse un mode opératoire), équipes communes d'enquête entre plusieurs États."
      );
    }
    if (c.id === "preuve-juge") {
      c.contenu = c.contenu.replace(
        "<h3>La loyauté de la preuve</h3>",
        "<h3>Relier le numérique au physique</h3><p>Une enquête cyber aboutit quand on relie une trace numérique (adresse IP, identifiant d'appareil, compte, portefeuille de crypto-actifs) à une personne réelle : abonnement à son nom, téléphone saisi chez elle, image de vidéoprotection, géolocalisation, retrait d'argent. C'est souvent ce recoupement, plus qu'une preuve isolée, qui convainc le juge.</p><h3>La loyauté de la preuve</h3>"
      );
    }
  });

  window.LEXIQUE.push(
    ["INTERPOL", "Organisation internationale de police criminelle (siège à Lyon) : échanges d'informations, notices, appui aux enquêtes transnationales."],
    ["Notice INTERPOL", "Avis international diffusé aux polices des pays membres ; la notice rouge vise la localisation et l'arrestation provisoire en vue d'extradition, la violette décrit un mode opératoire."],
    ["Crime-as-a-service", "Vente ou location d'outils et de services criminels (rançongiciel, botnet, hameçonnage) à d'autres délinquants."]
  );
  window.VRAIFAUX.push(
    { q: "Le siège d'INTERPOL se trouve à Lyon.", r: true, e: "Le secrétariat général d'INTERPOL est installé à Lyon." },
    { q: "La notice rouge d'INTERPOL vaut mandat d'arrêt international dans tous les pays.", r: false, e: "Elle demande la localisation et l'arrestation provisoire en vue d'extradition ; chaque pays décide selon son droit." }
  );
})();
;
/* ===== js/cas-cooperation.js ===== */
/* Cas pratiques — compétence et coopération internationale.
   Réponses à cocher : compétence (CP 113-x), outils de coopération, réflexes, et pièges. */
(function () {
  var L = window.CAS_LIBELLES = window.CAS_LIBELLES || {};
  var add = {
    "k-113-2": "Compétence : CP 113-2 (un fait constitutif a eu lieu en France)",
    "k-113-2-1": "Compétence : CP 113-2-1 (infraction en ligne, victime résidant en France)",
    "k-113-6": "Compétence : CP 113-6 (auteur de nationalité française)",
    "k-113-7": "Compétence : CP 113-7 (victime de nationalité française)",
    "k-113-8": "Condition : plainte de la victime ou dénonciation officielle du pays des faits (CP 113-8)",
    "k-double": "Condition : faits également punis dans le pays où ils ont été commis",
    "k-aucune": "La France n'est pas compétente",
    "x-dee": "Outil : décision d'enquête européenne",
    "x-eevidence": "Outil : injonction européenne de production ou de conservation (e-evidence)",
    "x-mae": "Outil : mandat d'arrêt européen",
    "x-extradition": "Outil : demande d'extradition",
    "x-entraide": "Outil : demande d'entraide pénale internationale (traité, Convention de Budapest)",
    "x-rouge": "Outil : notice rouge INTERPOL",
    "x-europol": "Outil : coordination par Europol",
    "x-eurojust": "Outil : coordination par Eurojust",
    "x-ece": "Outil : équipe commune d'enquête",
    "x-247": "Outil : point de contact 24/7 (Convention de Budapest, art. 35)",
    "x-direct": "Outil : demande directe (volontaire ou d'urgence) à la plateforme étrangère",
    "x-pharos": "Outil : signalement PHAROS et demande de retrait du contenu",
    "x-ofac": "Acteur : l'OFAC, point de contact central de la France (décret 2023-1083, art. 7)",
    "x-gel": "Outil : mesure provisoire pour empêcher le transfert des avoirs (décision d'enquête européenne)",
    "p-attendre": "Réflexe : attendre l'identification de l'auteur avant de demander la préservation des données",
    "p-mae-hors-ue": "Outil : mandat d'arrêt européen adressé à un pays hors de l'Union",
    "p-perquisition-distance": "Outil : copier les données du serveur étranger à distance, sans autre formalité",
    "p-rogatoire": "Outil : commission rogatoire internationale classique, alors que les deux pays sont dans l'Union"
  };
  Object.keys(add).forEach(function (k) { L[k] = add[k]; });

  var CASC = [
    {
      id: "co-russie", partie: "cooperation", titre: "Le rançongiciel signé d'un groupe russophone",
      faits: "Une clinique de Bordeaux est chiffrée par un rançongiciel. L'analyse montre que les données volées ont transité par des serveurs loués aux Pays-Bas. Les principaux suspects, de nationalité russe, vivent en Russie ; des affiliés seraient en Espagne. Des enquêtes sont aussi ouvertes en Allemagne et aux Pays-Bas contre le même groupe.",
      bonnes: ["k-113-2-1", "x-europol", "x-eurojust", "x-dee", "x-mae", "x-rouge"],
      pieges: ["k-aucune", "p-mae-hors-ue", "p-perquisition-distance"],
      correction: "La victime a son siège en France et l'attaque a été commise en ligne : la loi française s'applique (113-2-1). Plusieurs États enquêtent sur le même groupe : coordination opérationnelle par Europol, judiciaire par Eurojust (qui aide aussi à choisir où poursuivre). Pour saisir ou copier les serveurs aux Pays-Bas : décision d'enquête européenne, pas une copie à distance sans cadre (57-1 renvoie aux engagements internationaux). Pour les affiliés en Espagne : mandat d'arrêt européen. Pour les suspects en Russie, le mandat d'arrêt européen ne vaut pas hors de l'Union, et la Russie n'extrade pas ses ressortissants : on peut délivrer un mandat d'arrêt et demander une notice rouge, pour les interpeller s'ils voyagent dans un pays qui coopère."
    },
    {
      id: "co-canada", partie: "cooperation", titre: "Le harceleur installé au Canada",
      faits: "Une habitante de Lille reçoit chaque jour des messages menaçants et voit des montages humiliants publiés sur un réseau social américain. L'auteur présumé, son ancien compagnon, a déménagé au Canada. Elle porte plainte en France.",
      bonnes: ["k-113-2-1", "x-direct", "x-entraide", "x-extradition", "222-33-2-1"],
      pieges: ["x-mae", "x-dee", "k-aucune"],
      correction: "Délit commis en ligne au préjudice d'une personne qui réside en France : compétence française (113-2-1). Qualification : harcèlement par un ex-conjoint (222-33-2-1), éventuellement 226-8 pour les montages. Les données du compte s'obtiennent d'abord par une demande directe à la plateforme (beaucoup répondent volontairement pour les données d'abonné ou en urgence), puis, si nécessaire, par une demande d'entraide aux États-Unis. Le Canada est hors de l'Union : ni décision d'enquête européenne ni mandat d'arrêt européen ; il faut l'entraide et, pour obtenir la personne, l'extradition. Le Canada et les États-Unis sont parties à la Convention de Budapest, ce qui facilite la coopération."
    },
    {
      id: "co-expatriee", partie: "cooperation", titre: "L'expatriée victime de sextorsion",
      faits: "Une Française qui vit et travaille à Montréal depuis trois ans est victime de sextorsion par un inconnu opérant depuis le Brésil. De passage à Paris, elle dépose plainte.",
      bonnes: ["k-113-7", "k-113-8", "312-10"],
      pieges: ["k-113-2-1", "k-113-2", "k-aucune"],
      correction: "Elle ne réside pas en France et aucun fait constitutif n'a eu lieu en France : ni 113-2 ni 113-2-1. Mais la victime est de nationalité française et le chantage est un délit puni d'emprisonnement : la loi française s'applique au titre de la compétence personnelle passive (113-7). Pour un délit, la poursuite est à la requête du ministère public et doit être précédée de sa plainte (113-8) : c'est le cas. Qualification : chantage aggravé, commis en ligne avec des images sexuelles (312-10). En pratique, l'enquête dépendra beaucoup de la coopération avec le Brésil et le Canada."
    },
    {
      id: "co-francais-etranger", partie: "cooperation", titre: "Le pirate français en Thaïlande",
      faits: "Un ressortissant français installé en Thaïlande pénètre les serveurs d'une entreprise japonaise et en copie la base clients. Il n'y a aucune victime en France et aucun serveur en France. Les autorités japonaises dénoncent officiellement les faits à la France.",
      bonnes: ["k-113-6", "k-double", "k-113-8", "323-1", "323-3"],
      pieges: ["k-113-2-1", "k-113-7", "k-aucune"],
      correction: "Compétence personnelle active : la loi française s'applique au délit commis par un Français à l'étranger, à condition que les faits soient aussi punis dans le pays où ils ont été commis (113-6). La poursuite exige une plainte de la victime ou une dénonciation officielle de l'autorité étrangère (113-8) : la dénonciation japonaise le permet. 113-2-1 ne joue pas (pas de victime en France), ni 113-7 (victime non française). Qualifications : accès frauduleux et extraction de données (323-1, 323-3)."
    },
    {
      id: "co-urgence", partie: "cooperation", titre: "Les menaces publiées la nuit",
      faits: "Un samedi à 23 heures, un compte anonyme publie sur une plateforme établie aux États-Unis des menaces précises d'attaque contre un lycée français pour le lundi, avec des photos d'armes. Le compte peut être supprimé à tout moment.",
      bonnes: ["x-pharos", "x-direct", "x-247", "x-ofac", "x-entraide"],
      pieges: ["p-attendre", "x-mae", "x-dee"],
      correction: "Urgence vitale : signalement à PHAROS et demande de retrait ; demande d'urgence à la plateforme (la plupart disposent d'une procédure pour divulguer des données en cas de danger imminent) et demande immédiate de préservation des données, sans attendre d'avoir identifié l'auteur. Le réseau 24/7 de la Convention de Budapest permet une préservation rapide via le point de contact américain ; pour la France, l'OFAC est le point de contact central des échanges opérationnels internationaux pour les infractions spécifiques au numérique. Les preuves seront ensuite consolidées par une demande d'entraide. Les États-Unis sont hors de l'Union : pas de décision d'enquête européenne ni de mandat d'arrêt européen."
    },
    {
      id: "co-equipe", partie: "cooperation", titre: "Deux enquêtes sur la même fraude",
      faits: "Une fraude aux faux conseillers bancaires vise à la fois des victimes françaises et belges. La police belge a identifié le centre d'appel à Bruxelles ; l'OFAC a identifié en France les comptes de réception. Les deux parquets veulent avancer ensemble sans se gêner.",
      bonnes: ["x-ece", "x-eurojust", "k-113-2", "313-1"],
      pieges: ["p-rogatoire", "x-extradition", "k-aucune"],
      correction: "Les remises de fonds ont eu lieu en France : compétence française (113-2 ; 113-2-1 aussi pour les victimes résidant en France). Quand deux États enquêtent sur les mêmes faits, l'équipe commune d'enquête permet de travailler ensemble et de partager directement les preuves, avec l'appui d'Eurojust qui aide aussi à décider où poursuivre (pour éviter deux procès pour les mêmes faits, non bis in idem). Entre États membres, on n'utilise ni l'extradition ni la commission rogatoire internationale classique : ce sont le mandat d'arrêt européen et la décision d'enquête européenne qui les remplacent. Qualification : escroquerie en bande organisée (313-1, 313-2)."
    },
    {
      id: "co-crypto", partie: "cooperation", titre: "Les fonds partis sur une plateforme maltaise",
      faits: "Après une escroquerie aux faux placements, une victime de Nantes a vu 120 000 € convertis en crypto-actifs sur une plateforme d'échange établie à Malte. Les enquêteurs veulent éviter que les avoirs soient transférés ailleurs et identifier les titulaires des comptes.",
      bonnes: ["x-gel", "x-dee", "k-113-2-1", "313-1"],
      pieges: ["x-rouge", "x-extradition", "p-attendre"],
      correction: "Compétence française : escroquerie commise en ligne au préjudice d'une personne résidant en France (113-2-1). Malte est dans l'Union : la décision d'enquête européenne peut avoir pour objet d'empêcher provisoirement le transfert ou l'aliénation d'éléments (CPP 694-16) ; en pratique, on agit aussi très vite auprès de la plateforme. Les informations sur les titulaires des comptes peuvent être demandées aux autorités maltaises par la même voie (l'injonction e-evidence vise surtout les fournisseurs de services de communication et de stockage : son application à une plateforme d'échange de crypto-actifs est à vérifier). Il ne faut pas attendre : les crypto-actifs se déplacent en quelques minutes."
    }
  ];
  CASC.forEach(function (c) { window.CAS.push(c); });
})();
;
/* ===== js/ressources.js ===== */
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
;
/* ===== js/e4j.js ===== */
/* Compléments inspirés de la série de modules universitaires E4J de l'ONUDC sur la cybercriminalité
   (modules 11 « propriété intellectuelle », 13 « cybercriminalité organisée », 14 « hacktivisme, terrorisme,
   espionnage, désinformation »), rédigés à partir des textes français relus sur Légifrance le 20/11/2026. */
(function () {
  var CP = window.LF.cp;
  var CPI = "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069414/";

  window.THEMES.push(
    { id: "etat", nom: "Atteintes aux intérêts de l'État", court: "État", couleur: "t3" },
    { id: "pi", nom: "Propriété intellectuelle", court: "Contrefaçon", couleur: "t4" }
  );

  window.INFRACTIONS.push(
    {
      id: "421-1", art: "421-1", code: "Code pénal", theme: "etat",
      titre: "Cyberterrorisme : atteintes informatiques en relation avec une entreprise terroriste",
      materiel: "Les « infractions en matière informatique » du livre III (atteintes aux STAD, 323-1 et suivants) deviennent des actes de terrorisme lorsqu'elles sont intentionnellement en relation avec une entreprise individuelle ou collective ayant pour but de troubler gravement l'ordre public par l'intimidation ou la terreur (421-1, 2°).",
      moral: "Intention de commettre l'atteinte, et lien intentionnel avec une entreprise terroriste.",
      peines: [
        ["Barème de l'article 421-3", "Maximum relevé : 3 ans ou moins → doublé ; 5 ans → 7 ans ; 7 ans → 10 ans ; 10 ans → 15 ans de réclusion"],
        ["Exemple : accès frauduleux (323-1, 3 ans)", "6 ans d'emprisonnement"],
        ["Exemple : atteinte en bande organisée (323-4-1, 10 ans)", "15 ans de réclusion criminelle"]
      ],
      notes: "Ouvre la procédure antiterroriste (parquet national antiterroriste, techniques spéciales d'enquête). La plupart des attaques « militantes » ne remplissent pas la condition d'entreprise terroriste et restent des atteintes aux STAD.",
      tentative: true, version: "03/07/2016 (421-1) ; 05/06/2016 (421-3)", url: CP + "LEGISCTA000006149845/", verifie: true,
      motscles: "cyberterrorisme terrorisme sabotage infrastructure attaque"
    },
    {
      id: "411-6", art: "411-6", code: "Code pénal", theme: "etat",
      titre: "Livraison d'informations à une puissance étrangère (dont données informatisées)",
      materiel: "Livrer ou rendre accessibles à une puissance, entreprise ou organisation étrangère ou sous contrôle étranger, ou à leurs agents, des renseignements, documents, données informatisées ou fichiers dont l'exploitation, la divulgation ou la réunion est de nature à porter atteinte aux intérêts fondamentaux de la nation.",
      moral: "Conscience de livrer à une puissance étrangère des informations sensibles.",
      peines: [["Peine", "15 ans de détention criminelle et 225 000 € d'amende"]],
      notes: "Crime. 411-7 punit de 10 ans et 150 000 € le fait de recueillir ou rassembler de telles informations en vue de les livrer. Enquêtes généralement confiées à la DGSI.",
      tentative: true, version: "01/01/2002", url: CP + "LEGISCTA000006149841/", verifie: true,
      motscles: "espionnage cyberespionnage puissance étrangère exfiltration secret"
    },
    {
      id: "411-9", art: "411-9", code: "Code pénal", theme: "etat",
      titre: "Sabotage, y compris d'un système de traitement automatisé",
      materiel: "Détruire, détériorer ou détourner tout document, matériel, installation, dispositif technique ou système de traitement automatisé d'informations, ou y apporter des malfaçons, lorsque ce fait est de nature à porter atteinte aux intérêts fondamentaux de la nation.",
      moral: "Volonté de détruire ou de détériorer ; atteinte aux intérêts fondamentaux.",
      peines: [
        ["Base", "15 ans de détention criminelle et 225 000 € d'amende"],
        ["Pour servir les intérêts d'une puissance étrangère", "20 ans de détention criminelle et 300 000 €"]
      ],
      notes: "Visé par l'article 706-72 du CPP (compétence concurrente de Paris) lorsqu'il est commis sur un STAD.",
      tentative: true, version: "01/01/2002", url: CP + "LEGISCTA000006149841/", verifie: true,
      motscles: "sabotage infrastructure critique destruction système État"
    },
    {
      id: "411-12", art: "411-12", code: "Code pénal", theme: "etat",
      titre: "Circonstance aggravante : infraction commise pour le compte d'une puissance étrangère",
      materiel: "Crime ou délit contre les personnes (titre II du livre II), contre les biens par appropriation frauduleuse (titre Ier du livre III), ou destructions et atteintes aux STAD (chapitres II et III du titre II du livre III), commis dans le but de servir les intérêts d'une puissance, entreprise ou organisation étrangère ou sous contrôle étranger.",
      moral: "But de servir des intérêts étrangers.",
      peines: [["Maximum relevé", "3 ans ou moins → doublé ; 5 ans → 7 ans ; 7 ans → 10 ans ; 10 ans → 15 ans de réclusion ; 15 → 20 ; 20 → 30 ; 30 ans → perpétuité"]],
      notes: "Créé par la loi n° 2024-850 du 25 juillet 2024 visant à prévenir les ingérences étrangères. Une cyberattaque (323-1 à 323-3) menée pour un service étranger est donc plus lourdement punie.",
      tentative: false, version: "27/07/2024", url: CP + "LEGISCTA000006149841/", verifie: true,
      motscles: "ingérence étrangère puissance étrangère aggravation cyberattaque étatique"
    },
    {
      id: "L335-3", art: "L335-2 et L335-3", code: "Code de la propriété intellectuelle", theme: "pi",
      titre: "Contrefaçon d'œuvres et de logiciels (piratage)",
      materiel: "Toute reproduction, représentation ou diffusion, par quelque moyen que ce soit, d'une œuvre de l'esprit en violation des droits de l'auteur ; la violation des droits de l'auteur d'un logiciel ; la captation d'un film en salle (L335-3). Peines prévues par L335-2, qui punit aussi la vente, l'importation ou la détention à ces fins.",
      moral: "Mauvaise foi présumée en matière de contrefaçon ; l'auteur doit connaître ou ne pouvoir ignorer l'absence d'autorisation.",
      peines: [
        ["Base", "3 ans d'emprisonnement et 300 000 € d'amende"],
        ["Bande organisée", "7 ans et 750 000 €"]
      ],
      notes: "Vise la mise en ligne de films, séries, jeux ou logiciels piratés, les sites de téléchargement ou de streaming illicites. L335-4 punit des mêmes peines les atteintes aux droits voisins (artistes-interprètes, producteurs, diffuseurs, éditeurs de presse).",
      tentative: false, version: "05/06/2016 (L335-2) ; 14/06/2009 (L335-3)", url: CPI + "LEGISCTA000006161658/", verifie: true,
      motscles: "piratage contrefaçon streaming téléchargement illégal logiciel film musique"
    },
    {
      id: "L716-10", art: "L716-9 et L716-10", code: "Code de la propriété intellectuelle", theme: "pi",
      titre: "Vente de contrefaçons de marque, aggravée en ligne",
      materiel: "L716-10 : détenir sans motif légitime, importer, exporter, offrir à la vente ou vendre des marchandises sous une marque contrefaisante ; reproduire ou imiter une marque. L716-9 : importer, exporter ou produire industriellement de telles marchandises en vue de les vendre.",
      moral: "Intention ; vente en connaissance du caractère contrefaisant.",
      peines: [
        ["L716-10, base", "3 ans d'emprisonnement et 300 000 € d'amende"],
        ["L716-9, base", "4 ans et 400 000 €"],
        ["Bande organisée, réseau de communication au public en ligne, ou marchandises dangereuses", "7 ans et 750 000 €"]
      ],
      notes: "L'aggravation « sur un réseau de communication au public en ligne » vise les boutiques en ligne et les ventes sur les réseaux sociaux ou les places de marché.",
      tentative: false, version: "15/12/2019", url: CPI + "LEGISCTA000039377645/", verifie: true,
      motscles: "contrefaçon marque faux produits boutique en ligne marketplace réseaux sociaux"
    }
  );

  var C = window.CITATIONS;
  C["421-1"] = "Constituent des actes de terrorisme, lorsqu'elles sont intentionnellement en relation avec une entreprise individuelle ou collective ayant pour but de troubler gravement l'ordre public par l'intimidation ou la terreur, les infractions suivantes : […] 2° Les vols, les extorsions, les destructions, dégradations et détériorations, ainsi que les infractions en matière informatique définis par le livre III du présent code ; […]";
  C["411-6"] = "Le fait de livrer ou de rendre accessibles à une puissance étrangère, à une entreprise ou organisation étrangère ou sous contrôle étranger ou à leurs agents des renseignements, procédés, objets, documents, données informatisées ou fichiers dont l'exploitation, la divulgation ou la réunion est de nature à porter atteinte aux intérêts fondamentaux de la nation est puni de quinze ans de détention criminelle et de 225 000 euros d'amende.";
  C["411-9"] = "Le fait de détruire, détériorer ou détourner tout document, matériel, construction, équipement, installation, appareil, dispositif technique ou système de traitement automatisé d'informations ou d'y apporter des malfaçons, lorsque ce fait est de nature à porter atteinte aux intérêts fondamentaux de la nation, est puni de quinze ans de détention criminelle et de 225 000 euros d'amende.";
  C["411-12"] = "Lorsqu'un crime ou un délit prévu au titre II du livre II ou au titre Ier et aux chapitres II et III du titre II du livre III est commis dans le but de servir les intérêts d'une puissance étrangère ou d'une entreprise ou d'une organisation étrangère ou sous contrôle étranger, le maximum de la peine privative de liberté est relevé ainsi qu'il suit : […]";
  C["L335-3"] = "Est également un délit de contrefaçon toute reproduction, représentation ou diffusion, par quelque moyen que ce soit, d'une oeuvre de l'esprit en violation des droits de l'auteur, tels qu'ils sont définis et réglementés par la loi. Est également un délit de contrefaçon la violation de l'un des droits de l'auteur d'un logiciel définis à l'article L. 122-6.";
  C["L716-10"] = "Est puni de trois ans d'emprisonnement et de 300 000 euros d'amende le fait pour toute personne : a) De détenir sans motif légitime, d'importer ou d'exporter des marchandises présentées sous une marque contrefaisante ; b) D'offrir à la vente ou de vendre des marchandises présentées sous une marque contrefaisante ; […] Lorsque les délits prévus aux a à d ont été commis en bande organisée ou sur un réseau de communication au public en ligne […], les peines sont portées à sept ans d'emprisonnement et à 750 000 euros d'amende.";

  /* ---------- Leçons ---------- */
  window.PARTIES.push({ id: "menaces", num: "VI", titre: "Menaces organisées et étatiques", sous: "Crime organisé, hacktivisme, espionnage, désinformation" });

  var contrefacon = {
    id: "contrefacon", partie: "moyen",
    titre: "La contrefaçon en ligne",
    resume: "Piratage d'œuvres et de logiciels, faux produits vendus sur internet : le Code de la propriété intellectuelle.",
    arts: ["L335-3", "L716-10"],
    contenu: `
<p>Les atteintes à la propriété intellectuelle sont l'une des catégories de la Convention de Budapest (art. 10). En France, elles ne sont pas dans le Code pénal mais dans le <strong>Code de la propriété intellectuelle</strong>, qui contient ses propres délits.</p>

<h3>Le droit d'auteur : le « piratage »</h3>
<p>Reproduire, représenter ou diffuser une œuvre (film, série, musique, livre, jeu) ou un logiciel sans l'autorisation de l'auteur est une contrefaçon (<a class="art" href="#/infraction/L335-3">L335-3</a>), punie de <strong>3 ans et 300 000 €</strong>, et de 7 ans et 750 000 € en bande organisée (L335-2). Les droits des artistes-interprètes, producteurs et diffuseurs sont protégés de la même façon (L335-4).</p>
<ul>
  <li>Sont visés en priorité ceux qui <strong>mettent à disposition</strong> : administrateurs de sites de streaming ou de téléchargement illicite, de services d'IPTV pirates, revendeurs d'abonnements.</li>
  <li>Le simple téléchargement par un particulier relève surtout, en pratique, d'une réponse graduée administrative (ARCOM) plutôt que de poursuites pénales.</li>
</ul>

<h3>Les marques : les faux produits vendus en ligne</h3>
<p>Offrir à la vente ou vendre des produits sous une marque contrefaisante est puni de 3 ans et 300 000 € (<a class="art" href="#/infraction/L716-10">L716-10</a>) ; l'importation ou la production industrielle en vue de la vente, de 4 ans et 400 000 € (L716-9). Point important : les peines passent à <strong>7 ans et 750 000 €</strong> quand les faits sont commis <strong>sur un réseau de communication au public en ligne</strong>, en bande organisée, ou portent sur des produits dangereux (médicaments, jouets, pièces automobiles).</p>

<h3>Pourquoi c'est un sujet cyber</h3>
<ul>
  <li>Les sites pirates financent souvent leur activité par la publicité et peuvent diffuser des logiciels malveillants.</li>
  <li>Les ventes de contrefaçons utilisent les mêmes outils que d'autres fraudes : faux sites, réseaux sociaux, paiements en crypto-actifs, et parfois des réseaux de criminalité organisée.</li>
  <li>Les moyens d'action : blocage judiciaire ou administratif des sites, coupure des revenus publicitaires, retrait des annonces par les plateformes (DSA), saisies douanières.</li>
</ul>
`,
    retenir: [
      "Contrefaçon d'œuvres et de logiciels : 3 ans et 300 000 € (CPI L335-2, L335-3).",
      "Vente de contrefaçons de marque : 3 ans ; 7 ans et 750 000 € si en ligne (L716-10).",
      "Cibles prioritaires : ceux qui mettent à disposition, pas le simple téléchargement."
    ]
  };

  var organisee = {
    id: "crime-organise", partie: "menaces",
    titre: "La cybercriminalité organisée",
    resume: "Groupes criminels qui se mettent au numérique, réseaux nés en ligne, « crime as a service » : comment le droit les saisit.",
    arts: ["323-4-1", "323-4", "323-3-2", "313-1"],
    contenu: `
<h3>Deux visages</h3>
<ul>
  <li><strong>Des groupes criminels traditionnels qui utilisent le numérique</strong> : jeux d'argent illégaux en ligne, ou piratage pour servir une activité classique. Exemple souvent cité : des trafiquants de drogue ont fait pirater les systèmes d'un port européen pour suivre et récupérer des conteneurs.</li>
  <li><strong>Des réseaux nés pour le numérique</strong> : groupes de rançongiciels, forums de fraude, marchés du darkweb. Même s'ils agissent en ligne, la recherche montre que les contacts hors ligne et la proximité géographique jouent souvent un grand rôle dans leur formation et leur recrutement.</li>
</ul>

<h3>Une organisation par spécialités</h3>
<p>Les services de l'État parlent d'« industrialisation » : certains développent les outils, d'autres vendent des accès initiaux à des réseaux piratés, louent des botnets, revendent des bases de données, négocient les rançons ou blanchissent l'argent. C'est le modèle du <strong>« crime as a service »</strong> : on loue un rançongiciel comme on louerait un logiciel, contre un pourcentage des gains.</p>

<h3>Comment le droit français les saisit</h3>
<table class="tab">
<tr><th>Comportement</th><th>Qualification</th></tr>
<tr><td>Participer à la préparation d'attaques</td><td>Association de malfaiteurs informatique (<a class="art" href="#/infraction/323-4">323-4</a>)</td></tr>
<tr><td>Commettre les attaques en groupe structuré</td><td>Bande organisée (<a class="art" href="#/infraction/323-4-1">323-4-1</a>) : 10 ans</td></tr>
<tr><td>Vendre ou louer les outils</td><td><a class="art" href="#/infraction/323-3-1">323-3-1</a></td></tr>
<tr><td>Administrer le marché du darkweb ou le service de séquestre</td><td><a class="art" href="#/infraction/323-3-2">323-3-2</a> : 7 ans, 10 ans en bande organisée</td></tr>
<tr><td>Escroqueries de masse organisées</td><td>Escroquerie en bande organisée (<a class="art" href="#/infraction/313-1">313-2</a>) : 10 ans et 1 000 000 €</td></tr>
<tr><td>Recycler les gains (crypto-actifs, mules)</td><td>Blanchiment (non traité sur ce site)</td></tr>
</table>
<p>Ces qualifications ouvrent les <a href="#/acte/706-102-1">techniques spéciales d'enquête</a> de la criminalité organisée (CPP 706-73-1) : infiltration, captation de données, interceptions, garde à vue prolongée.</p>

<div class="encadre"><strong>Pour l'enquête.</strong> Démanteler un maillon (un serveur, une mule) ne suffit pas : l'objectif est l'infrastructure et l'argent. D'où les opérations coordonnées par Europol et Eurojust, comme ENDGAME (2024) contre plusieurs botnets (voir la page <a href="#/ofac">OFAC</a>).</div>
`,
    retenir: [
      "Groupes traditionnels qui se numérisent, et réseaux nés en ligne.",
      "Crime as a service : outils, accès et botnets loués ou vendus.",
      "Qualifications : 323-4, 323-4-1, 323-3-1, 323-3-2, 313-2 ; techniques spéciales d'enquête (706-73-1)."
    ]
  };

  var etat = {
    id: "hacktivisme-espionnage", partie: "menaces",
    titre: "Hacktivisme, cyberterrorisme, espionnage et désinformation",
    resume: "Quand la motivation est politique, idéologique ou étatique : ce qui change pour la qualification.",
    arts: ["323-2", "421-1", "411-6", "411-9", "411-12"],
    contenu: `
<p>Toutes les cyberattaques ne visent pas l'argent. Le droit français ne crée pas d'infraction spéciale pour chaque motivation : il part des atteintes aux STAD et ajoute, selon le but poursuivi, une qualification ou une aggravation.</p>

<table class="tab">
<tr><th>Phénomène</th><th>Exemples</th><th>Traitement en droit français</th></tr>
<tr><td><strong>Hacktivisme</strong></td><td>DDoS contre des sites institutionnels, défiguration de sites, fuites de documents au nom d'une cause.</td><td>Atteintes aux STAD ordinaires (<a class="art" href="#/infraction/323-2">323-2</a>, 323-1, 323-3) ; la cause défendue n'est pas une excuse.</td></tr>
<tr><td><strong>Cyberterrorisme</strong></td><td>Attaque d'une infrastructure pour terroriser la population.</td><td>Les infractions informatiques deviennent des actes de terrorisme si elles sont en relation avec une entreprise terroriste (<a class="art" href="#/infraction/421-1">421-1, 2°</a>) ; peines relevées (421-3).</td></tr>
<tr><td><strong>Cyberespionnage</strong></td><td>Intrusion pour voler des secrets industriels ou d'État au profit d'un pays étranger.</td><td>Atteintes aux STAD + livraison d'informations à une puissance étrangère (<a class="art" href="#/infraction/411-6">411-6</a>), ou leur collecte en vue de les livrer (411-7).</td></tr>
<tr><td><strong>Sabotage</strong></td><td>Destruction d'un système d'importance vitale.</td><td><a class="art" href="#/infraction/411-9">411-9</a> : 15 ans, 20 ans pour une puissance étrangère.</td></tr>
<tr><td><strong>Ingérence étrangère</strong></td><td>Cyberattaque ordinaire commandée par un service étranger.</td><td>Aggravation de <a class="art" href="#/infraction/411-12">411-12</a> (loi du 25 juillet 2024) : par exemple, 323-1 passe de 3 à 6 ans.</td></tr>
<tr><td><strong>Désinformation</strong></td><td>Faux comptes coordonnés, fausses informations diffusées massivement, surtout en période électorale.</td><td>Pas de délit général de « fausse nouvelle » ; outils ciblés : référé pour faire cesser la diffusion de fausses informations pendant les élections (loi du 22 décembre 2018), obligations des plateformes (DSA), détection des ingérences numériques étrangères par le service VIGINUM (SGDSN).</td></tr>
</table>

<h3>Qui enquête ?</h3>
<p>Les atteintes aux intérêts fondamentaux de la nation relèvent principalement de la DGSI ; le terrorisme, du parquet national antiterroriste ; les cyberattaques « de droit commun », de l'<a href="#/ofac">OFAC</a>, de l'UNCyber et des services territoriaux, sous l'autorité notamment de la section J3 du parquet de Paris. L'OFAC n'intervient qu'en respectant les missions de l'ANSSI et des services de renseignement (décret de 2023, art. 2).</p>

<h3>Et la « cyberguerre » ?</h3>
<p>Entre États, les cyberopérations relèvent du droit international (souveraineté, non-intervention, droit des conflits armés), pas du droit pénal. Pour l'enquêteur, l'enjeu est l'<strong>attribution</strong> : relier techniquement une attaque à un groupe, puis éventuellement à un État, ce qui reste difficile et souvent politique.</p>
`,
    retenir: [
      "Hacktivisme = atteintes aux STAD ordinaires ; la cause n'excuse rien.",
      "Cyberterrorisme : 421-1, 2° et barème de 421-3.",
      "Espionnage : 411-6, 411-7 ; sabotage : 411-9 ; ingérence étrangère : aggravation 411-12 (2024).",
      "Désinformation : pas de délit général ; référé électoral, DSA, VIGINUM."
    ]
  };

  var pos = window.COURS.length;
  window.COURS.forEach(function (c, i) { if (c.id === "vol-identite") pos = i + 1; });
  window.COURS.splice(pos, 0, contrefacon);
  window.COURS.push(organisee, etat);

  /* ---------- Cas pratiques ---------- */
  window.CAS.push(
    {
      id: "hacktiviste", titre: "Le collectif militant",
      faits: "Pour protester contre un projet d'aéroport, un collectif lance une attaque par déni de service qui rend indisponible le site d'une préfecture pendant deux jours, puis défigure la page d'accueil d'une entreprise de BTP en y publiant un message politique. Aucune revendication de violence, aucune volonté de terroriser.",
      bonnes: ["323-2", "323-1", "323-3", "323-4"], pieges: ["421-1", "411-9", "411-12"],
      correction: "Hacktivisme : la cause défendue ne change pas la qualification. DDoS : entrave (323-2) ; défiguration : accès frauduleux et modification de données (323-1, 323-3) ; préparation concertée : 323-4. Il n'y a ni entreprise terroriste (pas de but de troubler gravement l'ordre public par l'intimidation ou la terreur), ni atteinte aux intérêts fondamentaux de la nation au sens de 411-9, ni lien avec une puissance étrangère (411-12)."
    },
    {
      id: "faux-sacs", titre: "La boutique Instagram",
      faits: "Une jeune femme vend sur Instagram et via un site à son nom des sacs portant le logo d'une grande marque de luxe, importés de l'étranger et vendus quatre fois moins cher que l'original. Elle reconnaît savoir qu'il s'agit de copies.",
      bonnes: ["L716-10"], pieges: ["313-1", "L335-3", "226-4-1"],
      correction: "Offrir à la vente et vendre des marchandises sous une marque contrefaisante : L716-10 (et L716-9 pour l'importation en vue de la vente). Les faits étant commis sur un réseau de communication au public en ligne, la peine passe à 7 ans et 750 000 €. L'escroquerie se discute mal si les acheteurs savaient, vu le prix, qu'il s'agissait de copies. L335-3 vise le droit d'auteur (œuvres, logiciels), pas les marques."
    }
  );

  /* ---------- Lexique, vrai/faux ---------- */
  window.LEXIQUE.push(
    ["Hacktivisme", "Attaques informatiques menées au nom d'une cause politique ou idéologique (DDoS, défigurations, fuites)."],
    ["Défiguration (defacement)", "Modification de la page d'un site pour y afficher un message ; atteinte aux données (323-3)."],
    ["Attribution", "Fait de relier techniquement une cyberattaque à un groupe ou à un État."],
    ["VIGINUM", "Service du SGDSN chargé de détecter les ingérences numériques étrangères (campagnes de manipulation de l'information)."],
    ["Contrefaçon", "Atteinte à un droit de propriété intellectuelle (droit d'auteur, marque, brevet…), délit prévu par le Code de la propriété intellectuelle."],
    ["IPTV pirate", "Service illégal de diffusion de chaînes de télévision par internet, sans autorisation des ayants droit."]
  );
  window.VRAIFAUX.push(
    { q: "Une attaque DDoS menée pour une cause politique est punie moins sévèrement qu'une attaque crapuleuse.", r: false, e: "La motivation ne change pas la qualification : c'est une entrave (323-2)." },
    { q: "Une cyberattaque commise pour le compte d'une puissance étrangère voit sa peine maximale relevée.", r: true, e: "Article 411-12 du Code pénal (loi du 25 juillet 2024)." },
    { q: "Vendre des contrefaçons de marque en ligne fait passer la peine à 7 ans d'emprisonnement.", r: true, e: "Article L716-10 du Code de la propriété intellectuelle." },
    { q: "Les atteintes aux STAD peuvent constituer des actes de terrorisme.", r: true, e: "421-1, 2° vise les « infractions en matière informatique » en relation avec une entreprise terroriste." },
    { q: "Le Code pénal punit de manière générale la diffusion de fausses informations en ligne.", r: false, e: "Il n'existe pas de délit général ; il existe des outils ciblés (référé électoral, DSA, VIGINUM)." }
  );
})();
;
/* ===== js/manques.js ===== */
/* Infractions complémentaires : blanchiment, recel, fraude aux moyens de paiement, menaces et messages
   malveillants. Textes relus sur Légifrance le 20 novembre 2026. */
(function () {
  var CP = window.LF.cp;
  var CMF = "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072026/LEGISCTA000006154001/";

  window.INFRACTIONS.push(
    {
      id: "324-1", art: "324-1", code: "Code pénal", theme: "biens",
      titre: "Blanchiment (dont par crypto-actifs)",
      materiel: "Faciliter la justification mensongère de l'origine des biens ou revenus de l'auteur d'un crime ou d'un délit, ou apporter un concours à une opération de placement, de dissimulation ou de conversion du produit d'un crime ou d'un délit.",
      moral: "Connaissance de l'origine délictueuse ; facilitée par la présomption de 324-1-1.",
      peines: [
        ["Base", "5 ans d'emprisonnement et 375 000 € d'amende"],
        ["Habituel, facilité par une activité professionnelle, ou en bande organisée (324-2)", "10 ans et 750 000 €"]
      ],
      notes: "Présomption (324-1-1) : les biens sont présumés d'origine délictueuse quand l'opération n'a pas d'autre justification que de dissimuler leur origine ou leur bénéficiaire ; depuis la loi du 13 juin 2025, elle s'applique expressément aux opérations utilisant un crypto-actif à anonymisation intégrée ou une technique d'opacification des transactions (mixeurs…). Vise typiquement les mules qui reçoivent et reversent l'argent des escroqueries.",
      tentative: true, version: "15/06/2025", url: CP + "LEGISCTA000006165345/", verifie: true,
      motscles: "blanchiment mule crypto-actifs bitcoin mixeur conversion argent sale"
    },
    {
      id: "321-1", art: "321-1", code: "Code pénal", theme: "biens",
      titre: "Recel (dont bénéficier du produit d'une cyberinfraction)",
      materiel: "Dissimuler, détenir ou transmettre une chose, ou servir d'intermédiaire pour la transmettre, en sachant qu'elle provient d'un crime ou d'un délit ; ou bénéficier, en connaissance de cause, par tout moyen, du produit d'un crime ou d'un délit.",
      moral: "Connaissance de l'origine délictueuse.",
      peines: [
        ["Base", "5 ans d'emprisonnement et 375 000 € d'amende"],
        ["Habituel, facilité par une activité professionnelle, ou en bande organisée (321-2)", "10 ans et 750 000 €"]
      ],
      notes: "S'applique au matériel volé, aux fonds issus d'une escroquerie ou d'une extorsion. Pour les données elles-mêmes, la détention et la transmission de données frauduleusement obtenues relèvent directement de 323-3 ; et le Conseil constitutionnel a exclu le « recel d'apologie du terrorisme ».",
      tentative: false, version: "01/01/2002", url: CP + "LEGISCTA000006165338/", verifie: true,
      motscles: "recel produit escroquerie bénéficier rançon matériel volé"
    },
    {
      id: "L163-3", art: "L163-3", code: "Code monétaire et financier", theme: "biens",
      titre: "Contrefaçon et usage d'une carte ou d'un instrument de paiement falsifié",
      materiel: "Contrefaire ou falsifier un chèque ou un autre instrument de paiement (carte bancaire…) ; en faire ou tenter d'en faire usage en connaissance de cause ; accepter sciemment un paiement au moyen d'un tel instrument.",
      moral: "Connaissance du caractère contrefait ou falsifié.",
      peines: [
        ["Base", "5 ans d'emprisonnement et 375 000 € d'amende"],
        ["Bande organisée (L163-4-2)", "10 ans et 1 000 000 €"]
      ],
      notes: "Fabriquer une fausse carte à partir de données copiées (skimming). L'utilisation de numéros de carte volés pour acheter en ligne, sans fausse carte, est souvent poursuivie comme escroquerie (313-1). Tentative punie (L163-4-1).",
      tentative: true, version: "01/09/2019", url: CMF, verifie: true,
      motscles: "carte bancaire skimming fausse carte carding fraude paiement"
    },
    {
      id: "L163-4", art: "L163-4", code: "Code monétaire et financier", theme: "biens",
      titre: "Outils de fabrication de fausses cartes (skimmers, logiciels de carding)",
      materiel: "Fabriquer, acquérir, détenir, céder, offrir ou mettre à disposition des équipements, instruments, programmes informatiques ou données conçus ou spécialement adaptés pour contrefaire ou falsifier des instruments de paiement.",
      moral: "Intention ; connaissance de la destination des outils.",
      peines: [
        ["Base", "7 ans d'emprisonnement et 750 000 € d'amende"],
        ["Bande organisée (L163-4-2)", "10 ans et 1 000 000 €"]
      ],
      notes: "Équivalent, pour les cartes, de 323-3-1 pour les outils de piratage : vise les dispositifs posés sur les distributeurs ou les terminaux de paiement, et les logiciels d'encodage. Tentative punie (L163-4-1).",
      tentative: true, version: "01/11/2009", url: CMF, verifie: true,
      motscles: "skimmer distributeur dab terminal encodeur carding outil"
    },
    {
      id: "222-17", art: "222-17 et 222-18", code: "Code pénal", theme: "personnes",
      titre: "Menaces (dont menaces de mort en ligne)",
      materiel: "222-17 : menace de commettre un crime ou un délit contre les personnes, réitérée ou matérialisée par un écrit, une image ou tout autre objet (un message en ligne suffit). 222-18 : même menace, par quelque moyen que ce soit, avec l'ordre de remplir une condition.",
      moral: "Volonté d'intimider ; la menace doit être sérieuse, peu importe que l'auteur ait réellement l'intention de passer à l'acte.",
      peines: [
        ["Menace réitérée ou écrite (222-17)", "6 mois d'emprisonnement et 7 500 € d'amende"],
        ["Menace de mort réitérée ou écrite (222-17)", "3 ans et 45 000 €"],
        ["Menace sous condition (222-18)", "3 ans et 45 000 €"],
        ["Menace de mort sous condition (222-18)", "5 ans et 75 000 €"],
        ["Par le conjoint, concubin ou partenaire de PACS (222-18-3)", "Menace simple : 3 ans et 45 000 € ; menace de mort ou sous condition : 5 ans et 75 000 € ; menace de mort sous condition : 7 ans et 100 000 €"],
        ["Mobile raciste, religieux, sexiste, homophobe ou transphobe (132-76, 132-77)", "Maximum relevé : 3 ans ou moins → doublé ; 5 ans → 7 ans"]
      ],
      notes: "L'ancien article 222-18-1 (menaces à caractère raciste ou homophobe) a été abrogé en 2017 : ce mobile relève désormais des circonstances aggravantes générales des articles 132-76 et 132-77, qui s'appliquent à presque toutes les infractions. Les menaces contre un élu, un policier, un gendarme, un magistrat, un enseignant, un soignant… relèvent d'un texte spécial (433-3). Si la condition est la remise d'argent ou d'images, voir aussi l'extorsion (312-1) ou le chantage (312-10).",
      tentative: false, version: "01/01/2002", url: CP + "LEGISCTA000006181752/", verifie: true,
      motscles: "menace de mort message réseaux sociaux intimidation condition"
    },
    {
      id: "433-3", art: "433-3", code: "Code pénal", theme: "personnes",
      titre: "Menaces contre un élu, un policier, un enseignant ou un autre agent public",
      materiel: "Menace de commettre un crime ou un délit contre les personnes ou les biens, proférée contre un élu, un magistrat, un avocat, un policier, un gendarme, un pompier, un agent pénitentiaire ou toute personne dépositaire de l'autorité publique, ou contre un enseignant, un soignant, un agent de transport ou toute personne chargée d'une mission de service public, dans l'exercice ou du fait de ses fonctions. Les mêmes peines protègent leurs proches visés en raison de ces fonctions.",
      moral: "La qualité de la victime doit être apparente ou connue de l'auteur.",
      peines: [
        ["Menace", "3 ans d'emprisonnement et 45 000 € d'amende"],
        ["Menace de mort ou d'atteinte aux biens dangereuse pour les personnes", "5 ans et 75 000 €"],
        ["Menaces ou intimidation pour obtenir un acte de la fonction ou un abus d'autorité", "10 ans et 150 000 €"]
      ],
      notes: "Contrairement à 222-17, une seule menace orale suffit et il n'est pas nécessaire qu'elle soit réitérée ou écrite. Fréquent en ligne : menaces sous la vidéo d'une interpellation, messages à un élu. Si l'adresse est publiée pour exposer la personne, voir aussi 223-1-1.",
      tentative: false, version: "27/11/2021", url: CP + "LEGISCTA000006165398/", verifie: true,
      motscles: "menace policier gendarme élu maire enseignant soignant agent public"
    },
    {
      id: "222-16", art: "222-16", code: "Code pénal", theme: "personnes",
      titre: "Messages malveillants réitérés",
      materiel: "Appels téléphoniques malveillants réitérés, envois réitérés de messages malveillants par voie de communications électroniques, ou agressions sonores, en vue de troubler la tranquillité d'autrui.",
      moral: "But de troubler la tranquillité d'autrui.",
      peines: [
        ["Base", "1 an d'emprisonnement et 15 000 € d'amende"],
        ["Par le conjoint, concubin ou partenaire de PACS", "3 ans et 45 000 €"]
      ],
      notes: "Utile quand les messages sont répétés et malveillants mais que l'altération de la santé exigée pour le harcèlement (222-33-2-2) n'est pas établie.",
      tentative: false, version: "01/08/2020", url: CP + "LEGISCTA000006181751/", verifie: true,
      motscles: "messages répétés sms appels malveillants tranquillité spam harcèlement"
    }
  );

  var C = window.CITATIONS;
  C["324-1"] = "Le blanchiment est le fait de faciliter, par tout moyen, la justification mensongère de l'origine des biens ou des revenus de l'auteur d'un crime ou d'un délit ayant procuré à celui-ci un profit direct ou indirect. […] Constitue également un blanchiment le fait d'apporter un concours à une opération de placement, de dissimulation ou de conversion du produit direct ou indirect d'un crime ou d'un délit. Le blanchiment est puni de cinq ans d'emprisonnement et de 375 000 euros d'amende.";
  C["321-1"] = "Le recel est le fait de dissimuler, de détenir ou de transmettre une chose, ou de faire office d'intermédiaire afin de la transmettre, en sachant que cette chose provient d'un crime ou d'un délit. Constitue également un recel le fait, en connaissance de cause, de bénéficier, par tout moyen, du produit d'un crime ou d'un délit. Le recel est puni de cinq ans d'emprisonnement et de 375 000 euros d'amende.";
  C["L163-3"] = "Est puni d'un emprisonnement de cinq ans et d'une amende de 375 000 euros le fait pour toute personne : 1. De contrefaire ou de falsifier un chèque ou un autre instrument mentionné à l'article L. 133-4 ; 2. De faire ou de tenter de faire usage, en connaissance de cause, d'un chèque ou un autre instrument mentionné à l'article L. 133-4 contrefaisant ou falsifié ; […]";
  C["L163-4"] = "Est puni de sept ans d'emprisonnement et de 750 000 euros d'amende le fait, pour toute personne, de fabriquer, d'acquérir, de détenir, de céder, d'offrir ou de mettre à disposition des équipements, instruments, programmes informatiques ou toutes données conçus ou spécialement adaptés pour commettre les infractions prévues au 1° de l'article L. 163-3.";
  C["222-17"] = "La menace de commettre un crime ou un délit contre les personnes dont la tentative est punissable est punie de six mois d'emprisonnement et de 7 500 euros d'amende lorsqu'elle est, soit réitérée, soit matérialisée par un écrit, une image ou tout autre objet. La peine est portée à trois ans d'emprisonnement et à 45 000 euros d'amende s'il s'agit d'une menace de mort.";
  C["433-3"] = "Est punie de trois ans d'emprisonnement et de 45 000 euros d'amende la menace de commettre un crime ou un délit contre les personnes ou les biens proférée à l'encontre d'une personne investie d'un mandat électif public, d'un magistrat, d'un juré, d'un avocat, d'un officier public ou ministériel, d'un militaire de la gendarmerie nationale, d'un fonctionnaire de la police nationale, […] ou de toute autre personne dépositaire de l'autorité publique, […] dans l'exercice ou du fait de ses fonctions, lorsque la qualité de la victime est apparente ou connue de l'auteur. […] La peine est portée à cinq ans d'emprisonnement et 75 000 euros d'amende lorsqu'il s'agit d'une menace de mort ou d'une menace d'atteinte aux biens dangereuse pour les personnes.";
  C["222-16"] = "Les appels téléphoniques malveillants réitérés, les envois réitérés de messages malveillants émis par la voie des communications électroniques ou les agressions sonores en vue de troubler la tranquillité d'autrui sont punis d'un an d'emprisonnement et de 15 000 euros d'amende.";

  /* ---------- Leçons ---------- */
  var argent = {
    id: "argent-cybercrime", partie: "moyen",
    titre: "L'argent du cybercrime : blanchiment, mules, cartes et crypto-actifs",
    resume: "Suivre l'argent : du skimmer au mixeur de crypto-actifs, les qualifications qui visent ceux qui encaissent et recyclent.",
    arts: ["324-1", "321-1", "L163-3", "L163-4", "313-1"],
    contenu: `
<p>Presque toute cybercriminalité vise un profit. Après l'attaque ou l'escroquerie vient une deuxième étape, souvent confiée à d'autres personnes : <strong>encaisser, déplacer et recycler l'argent</strong>. C'est aussi là que les enquêtes aboutissent le plus souvent.</p>

<h3>Les cartes bancaires</h3>
<table class="tab">
<tr><th>Comportement</th><th>Qualification</th></tr>
<tr><td>Poser un « skimmer » sur un distributeur, vendre un logiciel d'encodage</td><td><a class="art" href="#/infraction/L163-4">L163-4</a> : 7 ans et 750 000 €</td></tr>
<tr><td>Fabriquer une fausse carte, l'utiliser</td><td><a class="art" href="#/infraction/L163-3">L163-3</a> : 5 ans et 375 000 €</td></tr>
<tr><td>Acheter en ligne avec des numéros de carte volés</td><td>Le plus souvent escroquerie (<a class="art" href="#/infraction/313-1">313-1</a>)</td></tr>
<tr><td>Obtenir les numéros par hameçonnage, les revendre</td><td>226-18, 323-3, 323-3-2 (voir <a href="#/cours/vol-identite">le vol d'identité en trois temps</a>)</td></tr>
</table>
<p>En bande organisée, les infractions du Code monétaire et financier passent à 10 ans et 1 000 000 € (L163-4-2).</p>

<h3>Les mules</h3>
<p>Une « mule » reçoit sur son compte l'argent des victimes et le reverse, souvent en crypto-actifs, contre une commission. Elle est recrutée par des annonces de « job facile » sur les réseaux sociaux. Selon ce qu'elle savait :</p>
<ul>
  <li><strong>blanchiment</strong> (<a class="art" href="#/infraction/324-1">324-1</a>) : apporter son concours à la conversion ou à la dissimulation du produit d'un délit ;</li>
  <li><strong>recel</strong> (<a class="art" href="#/infraction/321-1">321-1</a>) : bénéficier, en connaissance de cause, du produit d'un délit (sa commission) ;</li>
  <li>parfois complicité de l'escroquerie.</li>
</ul>
<p>Les deux sont punis de 5 ans et 375 000 €, et de 10 ans et 750 000 € si les faits sont habituels ou en bande organisée.</p>

<h3>Les crypto-actifs</h3>
<p>Ils servent à recevoir les rançons, à payer sur les marchés du darkweb et à éloigner les fonds de leur origine (échanges successifs, « mixeurs », cryptomonnaies conçues pour l'anonymat). Depuis la loi « narcotrafic » du 13 juin 2025, la présomption de l'article 324-1-1 s'applique expressément : une opération réalisée avec un crypto-actif à anonymisation intégrée, ou avec une technique d'opacification, sans autre justification que de dissimuler l'origine des fonds, est présumée porter sur le produit d'un délit.</p>
<p>Les transactions restent pourtant traçables sur la blockchain : l'enquête cherche le moment où les fonds passent par une plateforme d'échange identifiée, à laquelle on peut adresser une réquisition, une demande de gel ou une décision d'enquête européenne (voir le <a href="#/cas/co-crypto">cas pratique</a>).</p>

<div class="encadre"><strong>Le réflexe.</strong> Dans une escroquerie en ligne, la victime doit prévenir sa banque immédiatement ; et l'enquêteur doit remonter les comptes de réception sans attendre : les mules sont identifiables, et elles mènent aux organisateurs.</div>
`,
    retenir: [
      "Skimmer et logiciels de carding : L163-4 (7 ans) ; fausse carte : L163-3 (5 ans).",
      "Mules : blanchiment (324-1) ou recel (321-1), 5 ans ; 10 ans si habituel ou en bande organisée.",
      "Crypto-actifs anonymisants : présomption de blanchiment (324-1-1, loi du 13 juin 2025)."
    ]
  };

  var menaces = {
    id: "menaces-en-ligne", partie: "moyen",
    titre: "Menaces et messages malveillants en ligne",
    resume: "Menace de mort sur un réseau social, messages répétés, menace pour obtenir quelque chose : choisir le bon texte.",
    arts: ["222-17", "433-3", "222-16", "222-33-2-2", "312-10", "312-1"],
    contenu: `
<p>Les messages hostiles reçus en ligne relèvent de plusieurs textes. Tout dépend de ce qu'ils contiennent, de leur répétition et de ce que l'auteur cherche à obtenir.</p>
<table class="tab">
<tr><th>Situation</th><th>Texte</th><th>Peine</th></tr>
<tr><td>Un seul message écrit menaçant d'un délit ou d'un crime contre la personne</td><td><a class="art" href="#/infraction/222-17">222-17</a> (menace matérialisée par un écrit)</td><td>6 mois ; 3 ans si menace de mort</td></tr>
<tr><td>Menace avec une condition (« si tu ne retires pas ta plainte… »)</td><td>222-18</td><td>3 ans ; 5 ans si menace de mort</td></tr>
<tr><td>Menace contre un élu, un policier, un enseignant, un soignant… du fait de ses fonctions</td><td><a class="art" href="#/infraction/433-3">433-3</a></td><td>3 ans ; 5 ans si menace de mort ; 10 ans pour obtenir un acte de la fonction</td></tr>
<tr><td>Menace par le conjoint ou l'ex-conjoint</td><td>222-18-3</td><td>3 à 7 ans selon la menace</td></tr>
<tr><td>Menace à caractère raciste, antisémite, sexiste, homophobe…</td><td>Circonstances aggravantes générales 132-76 et 132-77</td><td>Maximum doublé (6 mois → 1 an ; 3 ans → 6 ans)</td></tr>
<tr><td>Menace pour obtenir de l'argent, une signature, des images</td><td><a class="art" href="#/infraction/312-1">312-1</a> (extorsion) ou <a class="art" href="#/infraction/312-10">312-10</a> (chantage, si la menace est de révéler)</td><td>7 ans ; 5 à 7 ans</td></tr>
<tr><td>Messages malveillants répétés pour troubler la tranquillité</td><td><a class="art" href="#/infraction/222-16">222-16</a></td><td>1 an ; 3 ans dans le couple</td></tr>
<tr><td>Messages répétés qui dégradent les conditions de vie et altèrent la santé</td><td><a class="art" href="#/infraction/222-33-2-2">222-33-2-2</a> (harcèlement)</td><td>2 ans en ligne</td></tr>
<tr><td>Publication de l'adresse d'une personne pour l'exposer</td><td><a class="art" href="#/infraction/223-1-1">223-1-1</a></td><td>3 à 5 ans</td></tr>
<tr><td>Menaces publiques d'attentat</td><td>Selon les cas, menaces, apologie ou provocation au terrorisme (<a class="art" href="#/infraction/421-2-5">421-2-5</a>)</td><td>—</td></tr>
</table>
<div class="encadre"><strong>En pratique.</strong> Ces qualifications se cumulent souvent : des menaces de mort répétées par un ancien conjoint peuvent relever à la fois de 222-17 et de 222-33-2-1. Faire constater les messages (captures avec URL, date, auteur) et demander très vite la préservation des données du compte.</div>
`,
    retenir: [
      "Menace écrite ou réitérée : 222-17 (6 mois ; menace de mort 3 ans).",
      "Menace avec condition : 222-18 (3 ans ; menace de mort 5 ans).",
      "Messages malveillants répétés : 222-16 (1 an) ; s'ils altèrent la santé : harcèlement.",
      "Agent public visé du fait de ses fonctions : 433-3 (3 ans ; 5 ans si menace de mort).",
      "Mobile discriminatoire : aggravation générale (132-76, 132-77), l'ancien 222-18-1 est abrogé."
    ]
  };

  function apres(id, lecon) {
    var pos = window.COURS.length;
    window.COURS.forEach(function (c, i) { if (c.id === id) pos = i + 1; });
    window.COURS.splice(pos, 0, lecon);
  }
  apres("personnes", menaces);
  apres("vol-identite", argent);

  /* ---------- Cas pratiques ---------- */
  window.CAS.push(
    {
      id: "skimmer", titre: "Le distributeur trafiqué",
      faits: "Deux hommes posent un faux clavier et un lecteur dissimulé sur un distributeur de billets d'une gare. Les données copiées servent à fabriquer des cartes, utilisées pour retirer de l'argent à l'étranger. Un troisième homme reçoit une partie des gains pour avoir prêté son appartement de stockage du matériel.",
      bonnes: ["L163-4", "L163-3", "321-1"], pieges: ["323-1", "226-4-1", "312-1"],
      correction: "Le skimmer est un équipement conçu pour contrefaire des cartes : L163-4 (7 ans). Fabriquer et utiliser les fausses cartes : L163-3 (5 ans). Agissant à plusieurs de façon structurée, la bande organisée porte les peines à 10 ans et 1 000 000 € (L163-4-2). Le troisième homme bénéficie sciemment du produit des délits : recel (321-1). Le distributeur n'est pas piraté au sens de 323-1 : on copie les données de la piste magnétique et le code au clavier."
    },
    {
      id: "menace-snap", titre: "Les messages après la plainte",
      faits: "Après avoir été dénoncé pour vol, un homme envoie à la victime, depuis un compte anonyme, une dizaine de messages en trois jours, dont un : « Retire ta plainte ou tu es mort ».",
      bonnes: ["222-17", "222-16"], pieges: ["312-10", "226-4-1", "323-1"],
      correction: "Le message « retire ta plainte ou tu es mort » est une menace de mort faite avec l'ordre de remplir une condition : 222-18, alinéa 2 (5 ans et 75 000 €), sur la même fiche que 222-17. L'envoi réitéré de messages malveillants pour troubler la tranquillité relève de 222-16. Selon les cas, on examinera aussi la subornation de témoin ou les pressions sur une victime (non traitées sur le site). Ce n'est pas un chantage : il ne menace pas de révéler un fait déshonorant."
    }
  );

  /* ---------- Lexique, vrai/faux ---------- */
  window.LEXIQUE.push(
    ["Skimming", "Copie des données d'une carte bancaire au moyen d'un dispositif dissimulé sur un distributeur ou un terminal de paiement."],
    ["Carding", "Commerce et utilisation frauduleuse de données de cartes bancaires volées."],
    ["Mixeur (mixer)", "Service qui mélange des crypto-actifs de nombreux utilisateurs pour brouiller leur traçabilité."],
    ["Blanchiment", "Faciliter la justification mensongère de l'origine de biens d'origine délictueuse, ou concourir à leur placement, dissimulation ou conversion (324-1)."],
    ["Recel", "Détenir ou transmettre une chose provenant d'un délit, ou en bénéficier en connaissance de cause (321-1)."]
  );
  window.VRAIFAUX.push(
    { q: "Poser un skimmer sur un distributeur est puni plus sévèrement que fabriquer une fausse carte.", r: true, e: "L163-4 : 7 ans ; L163-3 : 5 ans." },
    { q: "Une mule qui reverse sciemment l'argent d'escroqueries peut être poursuivie pour blanchiment.", r: true, e: "Concours à une opération de dissimulation ou de conversion du produit d'un délit (324-1)." },
    { q: "Une menace de mort ne peut être poursuivie que si elle est répétée.", r: false, e: "Une menace matérialisée par un écrit, une image ou un message suffit (222-17)." },
    { q: "Une menace de mort adressée à un policier du fait de ses fonctions est punie de 5 ans d'emprisonnement.", r: true, e: "Article 433-3, alinéa 5." },
    { q: "Les menaces à caractère raciste sont toujours réprimées par l'article 222-18-1.", r: false, e: "Cet article a été abrogé en 2017 ; le mobile raciste est une circonstance aggravante générale (132-76)." },
    { q: "Depuis 2025, la loi présume l'origine délictueuse des fonds dans certaines opérations en crypto-actifs anonymisants.", r: true, e: "Article 324-1-1, modifié par la loi du 13 juin 2025." }
  );

  /* ---------- Mises à jour de contenus existants ---------- */
  window.CAS.forEach(function (c) {
    if (c.id === "mule") {
      c.bonnes = c.bonnes.concat(["324-1"]);
      c.correction = c.correction.replace("peut être poursuivie comme complice ou pour blanchiment (non traité sur le site)", "peut être poursuivie pour blanchiment (324-1 : concours à la conversion du produit d'un délit), pour recel de sa commission (321-1) ou comme complice");
    }
  });
  window.COURS.forEach(function (c) {
    if (c.id === "crime-organise") {
      c.contenu = c.contenu.replace("<td>Blanchiment (non traité sur ce site)</td>", "<td>Blanchiment (<a class=\"art\" href=\"#/infraction/324-1\">324-1</a>, 324-2) ; présomption pour les crypto-actifs anonymisants (324-1-1)</td>");
    }
  });
})();
;
/* ===== js/trafics.js ===== */
/* Trafics en ligne (stupéfiants, armes), proxénétisme et prostitution en ligne, saisies et peines
   complémentaires numériques. Textes relus sur Légifrance le 20 novembre 2026. */
(function () {
  var CP = window.LF.cp, CPP = window.LF.cpp;

  window.THEMES.push({ id: "trafics", nom: "Trafics et exploitation en ligne", court: "Trafics", couleur: "t6" });

  window.INFRACTIONS.push(
    {
      id: "222-37", art: "222-37 et 222-39", code: "Code pénal", theme: "trafics",
      titre: "Trafic de stupéfiants, dont vente par messageries et réseaux sociaux",
      materiel: "222-37 : transport, détention, offre, cession, acquisition ou emploi illicites de stupéfiants, ou le fait de faciliter leur usage illicite. 222-39 : cession ou offre de stupéfiants à une personne pour sa consommation personnelle.",
      moral: "Connaissance de la nature stupéfiante du produit.",
      peines: [
        ["Trafic (222-37)", "10 ans d'emprisonnement et 7 500 000 € d'amende"],
        ["Cession pour consommation personnelle (222-39)", "5 ans et 75 000 €"],
        ["Cession à des mineurs ou aux abords d'un établissement scolaire (222-39)", "10 ans"],
        ["Importation ou exportation en bande organisée (222-36)", "30 ans de réclusion criminelle"]
      ],
      notes: "Il n'existe pas d'aggravation propre à la vente en ligne : un « point de deal » sur Telegram ou Snapchat relève de 222-37 ou 222-39 comme un point de vente physique. Exemption ou réduction de peine pour qui alerte les autorités (222-43, 222-43-1).",
      tentative: true, version: "01/01/2002 (222-37) ; 07/03/2007 (222-39)", url: CP + "LEGISCTA000006165284/", verifie: true,
      motscles: "drogue stupéfiants telegram snapchat point de deal livraison cannabis cocaïne darkweb"
    },
    {
      id: "222-52", art: "222-52", code: "Code pénal", theme: "trafics",
      titre: "Acquisition, détention ou cession d'armes de catégorie A ou B sans autorisation",
      materiel: "Acquérir, détenir ou céder des matériels de guerre, armes, éléments d'armes ou munitions des catégories A ou B sans l'autorisation exigée par le code de la défense et le code de la sécurité intérieure.",
      moral: "Intention ; connaissance de la nature de l'arme.",
      peines: [
        ["Base", "5 ans d'emprisonnement et 75 000 € d'amende"],
        ["Auteur déjà condamné pour une infraction de criminalité organisée", "7 ans et 100 000 €"],
        ["Au moins deux personnes, auteurs ou complices", "10 ans et 500 000 €"]
      ],
      notes: "Pas de disposition propre à la vente en ligne : l'achat d'une arme sur un marché du darkweb relève de ce texte (et de 323-3-2 pour l'administrateur du marché). Voir aussi 222-54 (port et transport, 7 ans), 222-57 (armes sans marquage, 5 ans ; 10 ans en bande organisée) et 222-59 (fabrication ou reconstitution d'une arme, 5 ans).",
      tentative: false, version: "05/06/2016", url: CP + "LEGISCTA000032632507/", verifie: true,
      motscles: "arme darkweb vente arme feu munitions impression 3d"
    },
    {
      id: "225-5", art: "225-5 à 225-7-1", code: "Code pénal", theme: "trafics",
      titre: "Proxénétisme, aggravé par l'usage d'internet",
      materiel: "Aider, assister ou protéger la prostitution d'autrui ; en tirer profit ou en partager les produits ; embaucher, entraîner ou détourner une personne en vue de la prostitution ou faire pression sur elle (225-5). Sont assimilés : servir d'intermédiaire, faciliter la justification de ressources fictives, ne pas pouvoir justifier ses ressources en vivant avec une personne prostituée (225-6).",
      moral: "Intention ; conscience de l'activité de prostitution.",
      peines: [
        ["Base", "7 ans d'emprisonnement et 150 000 € d'amende"],
        ["Aggravé (225-7) : mineur, personne vulnérable, plusieurs personnes, violences, ou contact par un réseau de communication électronique diffusant à un public non déterminé", "10 ans et 1 500 000 €"],
        ["Mineur de 15 ans (225-7-1)", "20 ans de réclusion criminelle et 3 000 000 €"]
      ],
      notes: "Gérer les annonces en ligne, le site ou le compte qui « vend » la personne, ou encaisser les paiements, c'est aider ou tirer profit de la prostitution. L'aggravation 225-7, 10° vise l'usage d'un réseau de communication électronique pour diffuser des messages à un public non déterminé (sites d'annonces, réseaux sociaux publics). Peine complémentaire de suspension des comptes possible (131-35-1).",
      tentative: false, version: "19/05/2011 (225-7) ; 23/04/2021 (225-7-1)", url: CP + "LEGISCTA000006165301/", verifie: true,
      motscles: "proxénétisme prostitution annonces escort mineurs réseaux sociaux exploitation"
    },
    {
      id: "225-12-1", art: "225-12-1 et 225-12-2", code: "Code pénal", theme: "trafics",
      titre: "Recours à la prostitution d'un mineur ou d'une personne vulnérable",
      materiel: "Solliciter, accepter ou obtenir, contre rémunération ou avantage, des relations sexuelles avec une personne qui se prostitue, même occasionnellement, lorsqu'elle est mineure ou particulièrement vulnérable.",
      moral: "Connaissance de la minorité ou de la vulnérabilité (apparente ou connue).",
      peines: [
        ["Base (225-12-1, al. 2)", "5 ans d'emprisonnement et 75 000 € d'amende"],
        ["Mise en contact par un réseau de communication diffusant à un public non déterminé, faits habituels, plusieurs victimes… (225-12-2)", "7 ans et 100 000 €"],
        ["Mineur de 15 ans, hors viol ou agression sexuelle (225-12-2)", "10 ans et 150 000 €"]
      ],
      notes: "Pour un adulte non vulnérable, le recours à la prostitution est une contravention, qui devient un délit (3 750 €) en cas de récidive (225-12-1, al. 1).",
      tentative: false, version: "23/04/2021", url: CP + "LEGISCTA000006165396/", verifie: true,
      motscles: "prostitution mineur client annonce réseau social"
    }
  );

  var C = window.CITATIONS;
  C["222-37"] = "Le transport, la détention, l'offre, la cession, l'acquisition ou l'emploi illicites de stupéfiants sont punis de dix ans d'emprisonnement et de 7 500 000 euros d'amende. Est puni des mêmes peines le fait de faciliter, par quelque moyen que ce soit, l'usage illicite de stupéfiants, […]";
  C["222-52"] = "Le fait d'acquérir, de détenir ou de céder des matériels de guerre, armes, éléments d'armes ou munitions relevant des catégories A ou B, sans l'autorisation prévue au I de l'article L. 2332-1 du code de la défense, en violation des articles L. 312-1 à L. 312-4, L. 312-4-3, L. 314-2 et L. 314-3 du code de la sécurité intérieure, est puni de cinq ans d'emprisonnement et de 75 000 € d'amende.";
  C["225-5"] = "Le proxénétisme est le fait, par quiconque, de quelque manière que ce soit : 1° D'aider, d'assister ou de protéger la prostitution d'autrui ; 2° De tirer profit de la prostitution d'autrui, d'en partager les produits ou de recevoir des subsides d'une personne se livrant habituellement à la prostitution ; 3° D'embaucher, d'entraîner ou de détourner une personne en vue de la prostitution ou d'exercer sur elle une pression pour qu'elle se prostitue ou continue à le faire. Le proxénétisme est puni de sept ans d'emprisonnement et de 150 000 euros d'amende.";
  C["225-12-1"] = "Est puni de cinq ans d'emprisonnement et de 75 000 € d'amende le fait de solliciter, d'accepter ou d'obtenir, en échange d'une rémunération, d'une promesse de rémunération, de la fourniture d'un avantage en nature ou de la promesse d'un tel avantage, des relations de nature sexuelle de la part d'une personne qui se livre à la prostitution, y compris de façon occasionnelle, lorsque cette personne est mineure ou présente une particulière vulnérabilité, apparente ou connue de son auteur, due à une maladie, à une infirmité, à un handicap ou à un état de grossesse.";

  /* ---------- Fiches de procédure et de peines ---------- */
  window.ACTES.push(
    {
      id: "706-154", art: "CPP 706-154", famille: "Saisie des avoirs", titre: "Saisie d'un compte bancaire ou de crypto-actifs",
      citation: "Par dérogation à l'article 706-153, l'officier de police judiciaire peut être autorisé, par tout moyen, par le procureur de la République ou par le juge d'instruction à procéder, aux frais avancés du Trésor, à la saisie d'une somme d'argent versée sur un compte ouvert auprès d'un établissement habilité par la loi à tenir des comptes de dépôts, de paiement ou de crypto-actifs mentionnés à l'article L. 54-10-1 du code monétaire et financier. […]",
      qui: "OPJ autorisé par tout moyen par le procureur ou le juge d'instruction ; puis JLD (enquête) ou juge d'instruction.",
      conditions: "Somme sur un compte de dépôt, de paiement ou de crypto-actifs tenu par un établissement habilité (banque, prestataire de services sur crypto-actifs). Le JLD ou le juge d'instruction statue sur le maintien ou la mainlevée dans les 10 jours de la saisie.",
      duree: "Décision de maintien dans les 10 jours ; appel possible dans les 10 jours de la notification, non suspensif.",
      plus: "Version issue de l'ordonnance du 15 octobre 2024, qui vise expressément les comptes de crypto-actifs. Pour les autres biens incorporels, la saisie est ordonnée par le JLD sur requête du procureur, ou par le juge d'instruction (706-153). Les biens saisis peuvent être confiés à l'Agence de gestion et de recouvrement des avoirs saisis et confisqués (AGRASC, CPP 706-159 et suivants).",
      version: "30/12/2024", url: CPP + "LEGISCTA000022456789/"
    },
    {
      id: "131-21", art: "CP 131-21", famille: "Peines complémentaires", titre: "Confiscation, dont l'ordinateur ou le téléphone utilisé en ligne",
      citation: "Lorsqu'une infraction pour laquelle la peine de confiscation est encourue a été commise en utilisant un service de communication au public en ligne, l'instrument utilisé pour avoir accès à ce service est considéré comme un bien meuble ayant servi à commettre l'infraction et peut être confisqué. Au cours de l'enquête ou de l'instruction, il peut être saisi dans les conditions prévues au code de procédure pénale.",
      qui: "Juridiction de jugement ; saisie possible pendant l'enquête ou l'instruction.",
      conditions: "Encourue de plein droit pour les crimes et les délits punis de plus d'un an d'emprisonnement (sauf délits de presse). Porte sur les biens ayant servi ou destinés à commettre l'infraction, sur son objet ou son produit, et sur les droits incorporels (crypto-actifs compris). Pour un crime ou un délit puni d'au moins 5 ans ayant procuré un profit, elle peut viser les biens dont le condamné ne justifie pas l'origine.",
      duree: "Définitive : les biens sont dévolus à l'État.",
      plus: "La confiscation des biens saisis qui ont servi à l'infraction ou en sont le produit est obligatoire, sauf décision spécialement motivée. Elle peut être prononcée en valeur.",
      version: "26/06/2024", url: CP + "LEGISCTA000006181731/"
    },
    {
      id: "131-35-1", art: "CP 131-35-1", famille: "Peines complémentaires", titre: "Suspension des comptes de réseaux sociaux",
      citation: "Pour les délits mentionnés au II, le tribunal peut ordonner à titre de peine complémentaire la suspension des comptes d'accès à des services en ligne ayant été utilisés pour commettre l'infraction. […] La suspension est prononcée pour une durée maximale de six mois ; cette durée est portée à un an lorsque la personne est en état de récidive légale.",
      qui: "Tribunal correctionnel ; la décision est signifiée aux plateformes.",
      conditions: "Délits limitativement énumérés : harcèlements, atteintes à la vie privée et revenge porn, usurpation d'identité, hypertrucages, infractions sexuelles contre les mineurs en ligne (227-22 à 227-24), doxing (223-1-1), apologie du terrorisme, proxénétisme, menaces contre les agents publics (433-3), certains délits de presse, entre autres.",
      duree: "6 mois au plus ; 1 an en récidive. Première demande de relèvement possible après 3 mois.",
      plus: "Pendant la peine, interdiction d'utiliser ces comptes et d'en créer de nouveaux. La plateforme qui ne bloque pas les comptes encourt 75 000 € d'amende. Créée par la loi SREN (2024), version en vigueur depuis le 26 août 2026 (loi du 24 août 2026).",
      version: "26/08/2026", url: CP + "LEGISCTA000006181731/"
    }
  );

  /* ---------- Leçons ---------- */
  var trafics = {
    id: "trafics-en-ligne", partie: "moyen",
    titre: "Trafics en ligne : drogue, armes et prostitution",
    resume: "Points de deal sur messageries, armes sur le darkweb, annonces et proxénétisme : les textes et les aggravations liées à internet.",
    arts: ["222-37", "222-52", "225-5", "225-12-1", "323-3-2"],
    contenu: `
<p>Les réseaux sociaux et les messageries sont devenus des vitrines pour des trafics très classiques. Le droit applicable reste celui du trafic ; ce qui change, c'est la façon d'enquêter et, parfois, une aggravation liée à internet.</p>

<h3>La drogue</h3>
<p>Les « menus » diffusés sur Telegram, Snapchat ou Signal, avec livraison à domicile, relèvent du trafic de stupéfiants (<a class="art" href="#/infraction/222-37">222-37</a>, 10 ans) ou de la cession pour consommation personnelle (222-39, 5 ans ; 10 ans pour une cession à des mineurs). Il n'y a <strong>pas d'aggravation propre à internet</strong>. L'administrateur d'un marché du darkweb relève en plus de <a class="art" href="#/infraction/323-3-2">323-3-2</a>.</p>

<h3>Les armes</h3>
<p>Acheter ou vendre une arme des catégories A ou B sans autorisation est puni de 5 ans, 10 ans à plusieurs (<a class="art" href="#/infraction/222-52">222-52</a>). Là encore, le texte ne distingue pas la vente en ligne : ce sont les règles générales du trafic d'armes qui s'appliquent.</p>

<h3>La prostitution et le proxénétisme</h3>
<p>Ici, la loi prévoit expressément une aggravation liée à internet :</p>
<ul>
  <li>le <strong>proxénétisme</strong> (<a class="art" href="#/infraction/225-5">225-5</a>, 7 ans) passe à <strong>10 ans et 1 500 000 €</strong> lorsqu'il est commis grâce à un réseau de communication électronique diffusant des messages à un public non déterminé (225-7, 10°), et à 20 ans de réclusion pour un mineur de 15 ans (225-7-1) ;</li>
  <li>le <strong>client d'un mineur ou d'une personne vulnérable</strong> (<a class="art" href="#/infraction/225-12-1">225-12-1</a>, 5 ans) encourt 7 ans s'il a été mis en contact par un réseau de communication (225-12-2), et 10 ans pour un mineur de 15 ans.</li>
</ul>
<p>Gérer les annonces, le compte ou le site, encaisser l'argent : c'est aider la prostitution ou en tirer profit. Pour les mineurs, voir aussi la <a href="#/cours/mineurs">leçon sur la protection des mineurs en ligne</a>.</p>

<div class="encadre"><strong>Pour l'enquête.</strong> Ces dossiers combinent toutes les techniques du site : réquisitions aux plateformes et opérateurs (<a href="#/acte/60-1-2">60-1-2</a>), enquête sous pseudonyme pour acheter ou commander (<a href="#/acte/230-46">230-46</a>), suivi des paiements et des crypto-actifs, saisie des avoirs (<a href="#/acte/706-154">706-154</a>), et suspension des comptes au jugement (<a href="#/acte/131-35-1">131-35-1</a>).</div>
`,
    retenir: [
      "Drogue et armes vendues en ligne : textes ordinaires (222-37, 222-39, 222-52), pas d'aggravation internet.",
      "Proxénétisme via un réseau diffusant au public : 10 ans et 1 500 000 € (225-7, 10°).",
      "Client d'un mineur contacté en ligne : 7 ans ; 10 ans si moins de 15 ans (225-12-2)."
    ]
  };

  var saisir = {
    id: "saisir-confisquer", partie: "enquete",
    titre: "Saisir, confisquer, suspendre",
    resume: "Bloquer l'argent et les crypto-actifs pendant l'enquête, confisquer au jugement, suspendre les comptes de réseaux sociaux.",
    arts: ["324-1", "222-33-2-2"],
    contenu: `
<p>Identifier un auteur ne suffit pas : il faut aussi l'empêcher de profiter de l'infraction et de recommencer. Trois outils.</p>

<h3>1. Saisir pendant l'enquête</h3>
<ul>
  <li><strong>Comptes bancaires et crypto-actifs</strong> (<a href="#/acte/706-154">CPP 706-154</a>) : l'OPJ, autorisé par tout moyen par le procureur ou le juge d'instruction, saisit la somme sur un compte tenu par une banque ou un prestataire de crypto-actifs habilité. Le JLD ou le juge d'instruction doit statuer sur le maintien dans les 10 jours.</li>
  <li><strong>Autres biens incorporels</strong> (706-153) : saisie ordonnée par le JLD sur requête du procureur, ou par le juge d'instruction.</li>
  <li><strong>Matériel</strong> : ordinateurs et téléphones sont saisis sous scellés (CPP 56) ; ils pourront être confisqués comme instrument de l'infraction.</li>
</ul>
<p>Les biens saisis peuvent être confiés à l'<strong>AGRASC</strong> (Agence de gestion et de recouvrement des avoirs saisis et confisqués, CPP 706-159 et suivants), qui les gère jusqu'au jugement. Pour les crypto-actifs détenus hors d'une plateforme (portefeuille personnel), les modalités pratiques de saisie sont une question à poser en stage : elles supposent de récupérer les clés.</p>

<h3>2. Confisquer au jugement</h3>
<p>La confiscation (<a href="#/acte/131-21">CP 131-21</a>) est encourue de plein droit pour les crimes et les délits punis de plus d'un an. Elle vise ce qui a servi à l'infraction, son produit, les droits incorporels, et, pour les délits punis d'au moins 5 ans ayant rapporté un profit, les biens dont l'origine n'est pas justifiée. Le texte précise que l'appareil utilisé pour accéder à un service en ligne ayant servi à l'infraction peut être confisqué.</p>

<h3>3. Suspendre les comptes</h3>
<p>Pour une liste de délits commis en ligne (harcèlements, revenge porn, deepfakes, usurpation d'identité, infractions sexuelles contre les mineurs, doxing, apologie du terrorisme, proxénétisme, menaces contre les agents publics…), le tribunal peut ordonner la <strong>suspension des comptes</strong> de réseaux sociaux utilisés pour l'infraction (<a href="#/acte/131-35-1">CP 131-35-1</a>) : 6 mois au plus, 1 an en récidive, avec interdiction d'en créer de nouveaux. La plateforme qui ne bloque pas encourt 75 000 € d'amende.</p>

<div class="encadre"><strong>Le réflexe.</strong> Dès qu'un compte de réception ou un portefeuille de crypto-actifs est identifié, envisager la saisie immédiatement : quelques heures plus tard, les fonds ont souvent disparu.</div>
`,
    retenir: [
      "Saisie d'un compte ou de crypto-actifs : CPP 706-154 (OPJ autorisé, puis JLD sous 10 jours).",
      "Confiscation de plein droit pour les délits punis de plus d'un an (CP 131-21), y compris l'appareil utilisé en ligne.",
      "Suspension des comptes de réseaux sociaux : 6 mois, 1 an en récidive (CP 131-35-1)."
    ]
  };

  function apres(id, lecon) {
    var pos = window.COURS.length;
    window.COURS.forEach(function (c, i) { if (c.id === id) pos = i + 1; });
    window.COURS.splice(pos, 0, lecon);
  }
  apres("argent-cybercrime", trafics);
  apres("preuve-juge", saisir);

  /* ---------- Cas pratiques ---------- */
  var L = window.CAS_LIBELLES = window.CAS_LIBELLES || {};
  L["s-706-154"] = "Outil : saisie des sommes sur le compte ou la plateforme de crypto-actifs (CPP 706-154)";
  L["s-131-35-1"] = "Au jugement : suspension des comptes de réseaux sociaux (CP 131-35-1)";
  L["s-131-21"] = "Au jugement : confiscation du téléphone et des gains (CP 131-21)";
  L["s-pseudo"] = "Outil : enquête sous pseudonyme pour passer commande (CPP 230-46)";
  L["s-aucune-saisie"] = "Attendre le jugement pour bloquer l'argent";
  window.CAS.push(
    {
      id: "deal-telegram", titre: "Le menu sur Telegram",
      faits: "Une chaîne Telegram de 4 000 abonnés publie chaque jour un « menu » de cannabis et de cocaïne avec livraison à domicile en scooter. Les paiements se font en espèces ou en crypto-actifs vers un compte ouvert sur une plateforme d'échange agréée en France. Plusieurs clients sont mineurs.",
      bonnes: ["222-37", "s-pseudo", "s-706-154", "s-131-21"], pieges: ["323-3-2", "s-aucune-saisie", "227-24"],
      correction: "Offre et cession de stupéfiants : 222-37 (10 ans) ; la cession à des mineurs relève aussi de 222-39 (10 ans). Une chaîne Telegram n'est pas une « plateforme en ligne » restreinte aux utilisateurs d'anonymisation au sens de 323-3-2 : c'est le vendeur qui est poursuivi. Enquête : commande sous pseudonyme par des enquêteurs habilités (230-46), réquisitions, et saisie immédiate des crypto-actifs sur la plateforme agréée (706-154), sans attendre le jugement. Au jugement : confiscation du produit et des instruments (131-21)."
    },
    {
      id: "escort", titre: "Les annonces d'« escort »",
      faits: "Un homme rédige et publie sur un site d'annonces des offres de rendez-vous tarifés pour trois jeunes femmes, dont une de 16 ans, réserve leurs chambres d'hôtel et encaisse la moitié des paiements sur son compte.",
      bonnes: ["225-5", "s-706-154", "s-131-35-1"], pieges: ["225-12-1", "312-1", "226-4-1"],
      correction: "Il aide la prostitution et en tire profit : proxénétisme (225-5). Aggravations de 225-7 : mineure, plusieurs personnes, et usage d'un réseau de communication électronique diffusant des messages à un public non déterminé : 10 ans et 1 500 000 €. 225-12-1 vise les clients, pas lui. Saisie de son compte (706-154) ; au jugement, suspension possible des comptes en ligne utilisés (131-35-1, qui vise 225-5 et 225-6) et confiscation."
    },
    {
      id: "harceleur-comptes", titre: "Le harceleur qui recrée ses comptes",
      faits: "Condamné pour cyberharcèlement de son ancienne collègue, un homme continue à la viser depuis de nouveaux comptes Instagram et X créés après le jugement.",
      bonnes: ["s-131-35-1", "222-33-2-2"], pieges: ["s-131-21", "323-1", "226-4-1"],
      correction: "Le cyberharcèlement (222-33-2-2) figure parmi les délits pour lesquels le tribunal peut ordonner la suspension des comptes (131-35-1) : jusqu'à 6 mois, 1 an en récidive, avec interdiction de créer de nouveaux comptes ; la plateforme qui ne bloque pas encourt 75 000 €. Les nouveaux messages peuvent constituer une nouvelle infraction de harcèlement. La confiscation du téléphone (131-21) est possible mais ne l'empêche pas d'en racheter un."
    }
  );

  window.LEXIQUE.push(
    ["AGRASC", "Agence de gestion et de recouvrement des avoirs saisis et confisqués : gère les biens saisis pendant la procédure et après confiscation."],
    ["Saisie pénale", "Mesure qui bloque un bien pendant l'enquête pour garantir une future confiscation (CPP 706-141 et suivants)."],
    ["Suspension de comptes", "Peine complémentaire interdisant d'utiliser ses comptes de réseaux sociaux et d'en créer de nouveaux (CP 131-35-1)."],
    ["Point de deal numérique", "Vente de stupéfiants organisée via une messagerie ou un réseau social, souvent avec livraison."]
  );
  window.VRAIFAUX.push(
    { q: "La vente de cannabis via Snapchat est punie plus sévèrement que la vente de rue.", r: false, e: "Il n'existe pas d'aggravation propre à internet pour les stupéfiants (222-37, 222-39)." },
    { q: "Le proxénétisme commis grâce à un site d'annonces est puni de 10 ans d'emprisonnement.", r: true, e: "225-7, 10° : réseau de communication électronique diffusant des messages à un public non déterminé." },
    { q: "Un OPJ peut saisir des crypto-actifs détenus sur une plateforme habilitée avec l'autorisation du procureur donnée par tout moyen.", r: true, e: "CPP 706-154 ; le JLD statue sur le maintien dans les 10 jours." },
    { q: "La suspension des comptes de réseaux sociaux peut être prononcée pour 2 ans.", r: false, e: "6 mois au plus, 1 an en récidive (131-35-1)." }
  );
})();
;
/* ===== js/constat.js ===== */
/* Provocation au suicide, faux documents vendus en ligne, procès-verbal de constat sur internet.
   Textes relus sur Légifrance le 20 novembre 2026. */
(function () {
  var CP = window.LF.cp, CPP = window.LF.cpp;

  window.INFRACTIONS.push(
    {
      id: "223-13", art: "223-13 et 223-14", code: "Code pénal", theme: "personnes",
      titre: "Provocation au suicide (y compris en ligne)",
      materiel: "Provoquer au suicide d'autrui, lorsque la provocation a été suivie du suicide ou d'une tentative de suicide (223-13). Faire de la propagande ou de la publicité, quel qu'en soit le mode, en faveur de produits, objets ou méthodes préconisés comme moyens de se donner la mort (223-14).",
      moral: "Volonté de pousser la victime au suicide (223-13) ; conscience du caractère de propagande (223-14).",
      peines: [
        ["Provocation suivie d'un suicide ou d'une tentative (223-13)", "3 ans d'emprisonnement et 45 000 € d'amende"],
        ["Victime mineure de 15 ans (223-13)", "5 ans et 75 000 €"],
        ["Propagande ou publicité pour des moyens de se donner la mort (223-14)", "3 ans et 45 000 €"]
      ],
      notes: "Sans suicide ni tentative, 223-13 ne s'applique pas. Dans les affaires de harcèlement, le suicide ou la tentative de la victime est aussi une aggravation propre du harcèlement dans le couple ou scolaire (222-33-2-1, 222-33-2-3 : 10 ans). 223-14 vise par exemple les contenus en ligne qui vantent des méthodes de suicide. Peine complémentaire de suspension des comptes possible (131-35-1).",
      tentative: false, version: "26/11/2009 (223-13) ; 01/01/2002 (223-14)", url: CP + "LEGISCTA000006165292/", verifie: true,
      motscles: "suicide provocation harcèlement adolescent défi méthode propagande"
    },
    {
      id: "441-1", art: "441-1", code: "Code pénal", theme: "biens",
      titre: "Faux et usage de faux (documents numériques compris)",
      materiel: "Toute altération frauduleuse de la vérité, de nature à causer un préjudice, accomplie par quelque moyen que ce soit dans un écrit ou tout autre support d'expression de la pensée destiné ou pouvant servir à prouver un droit ou un fait ayant des conséquences juridiques ; et l'usage d'un tel faux.",
      moral: "Conscience de l'altération de la vérité.",
      peines: [["Faux et usage de faux", "3 ans d'emprisonnement et 45 000 € d'amende"]],
      notes: "« Tout autre support d'expression de la pensée » couvre les documents numériques : faux RIB, fausse facture, faux bulletin de salaire, faux mail d'avocat dans une fraude au président. Correspond à l'article 7 de la Convention de Budapest (falsification informatique).",
      tentative: false, version: "01/01/2002", url: CP + "LEGISCTA000006149854/", verifie: true,
      motscles: "faux document numérique rib facture bulletin salaire fraude"
    },
    {
      id: "441-2", art: "441-2 et 441-3", code: "Code pénal", theme: "biens",
      titre: "Faux documents administratifs vendus en ligne (papiers d'identité, permis…)",
      materiel: "Faux commis dans un document délivré par une administration pour constater un droit, une identité ou une qualité, ou accorder une autorisation (carte d'identité, passeport, permis de conduire, titre de séjour…), et son usage (441-2) ; détention frauduleuse d'un tel faux (441-3).",
      moral: "Conscience de la falsification.",
      peines: [
        ["Faux ou usage (441-2)", "5 ans d'emprisonnement et 75 000 € d'amende"],
        ["De manière habituelle, ou pour faciliter un crime (441-2)", "7 ans et 100 000 €"],
        ["Détention d'un faux document (441-3)", "2 ans et 30 000 €"],
        ["Détention de plusieurs faux documents (441-3)", "5 ans et 75 000 €"]
      ],
      notes: "Vise les vendeurs de faux papiers sur les messageries ou le darkweb (souvent « de manière habituelle »), et les acheteurs qui les détiennent ou les utilisent. Les faux papiers servent aussi à ouvrir des comptes de mules.",
      tentative: false, version: "01/01/2002", url: CP + "LEGISCTA000006149854/", verifie: true,
      motscles: "faux papiers carte identité passeport permis titre séjour vente darkweb telegram"
    },
    {
      id: "441-7", art: "441-7", code: "Code pénal", theme: "biens",
      titre: "Fausses attestations et faux certificats",
      materiel: "Établir une attestation ou un certificat faisant état de faits matériellement inexacts, falsifier une attestation sincère, ou faire usage d'une attestation inexacte ou falsifiée.",
      moral: "Conscience de l'inexactitude.",
      peines: [
        ["Base", "1 an d'emprisonnement et 15 000 € d'amende"],
        ["Pour porter préjudice au Trésor public ou au patrimoine d'autrui, ou obtenir un titre de séjour", "3 ans et 45 000 €"]
      ],
      notes: "Vise les fausses attestations vendues en ligne : faux certificats médicaux, attestations d'hébergement ou d'employeur, faux justificatifs pour obtenir un crédit ou une aide.",
      tentative: false, version: "12/09/2018", url: CP + "LEGISCTA000006149854/", verifie: true,
      motscles: "fausse attestation faux certificat médical justificatif"
    }
  );

  var C = window.CITATIONS;
  C["223-13"] = "Le fait de provoquer au suicide d'autrui est puni de trois ans d'emprisonnement et de 45 000 euros d'amende lorsque la provocation a été suivie du suicide ou d'une tentative de suicide. Les peines sont portées à cinq ans d'emprisonnement et à 75 000 euros d'amende lorsque la victime de l'infraction définie à l'alinéa précédent est un mineur de quinze ans.";
  C["441-1"] = "Constitue un faux toute altération frauduleuse de la vérité, de nature à causer un préjudice et accomplie par quelque moyen que ce soit, dans un écrit ou tout autre support d'expression de la pensée qui a pour objet ou qui peut avoir pour effet d'établir la preuve d'un droit ou d'un fait ayant des conséquences juridiques. Le faux et l'usage de faux sont punis de trois ans d'emprisonnement et de 45 000 euros d'amende.";
  C["441-2"] = "Le faux commis dans un document délivré par une administration publique aux fins de constater un droit, une identité ou une qualité ou d'accorder une autorisation est puni de cinq ans d'emprisonnement et de 75 000 euros d'amende. L'usage du faux mentionné à l'alinéa précédent est puni des mêmes peines.";
  C["441-7"] = "Indépendamment des cas prévus au présent chapitre, est puni d'un an d'emprisonnement et de 15 000 euros d'amende le fait : 1° D'établir une attestation ou un certificat faisant état de faits matériellement inexacts ; 2° De falsifier une attestation ou un certificat originairement sincère ; 3° De faire usage d'une attestation ou d'un certificat inexact ou falsifié.";

  /* ---------- Fiche d'acte ---------- */
  window.ACTES.push({
    id: "429", art: "CPP 429", famille: "Preuve", titre: "Valeur probante du procès-verbal (dont le constat en ligne)",
    citation: "Tout procès-verbal ou rapport n'a de valeur probante que s'il est régulier en la forme, si son auteur a agi dans l'exercice de ses fonctions et a rapporté sur une matière de sa compétence ce qu'il a vu, entendu ou constaté personnellement.",
    qui: "Tout OPJ ou APJ qui rédige un procès-verbal.",
    conditions: "Régularité de forme ; auteur agissant dans ses fonctions et dans sa compétence ; constatations personnelles.",
    duree: "—",
    plus: "C'est ce qui donne sa force au procès-verbal de constat d'une page internet : l'enquêteur décrit ce qu'il a lui-même vu en ligne. La preuve reste libre et discutée contradictoirement (427).",
    version: "01/01/2001", url: CPP + "LEGISCTA000006182908/"
  });

  /* ---------- Leçon ---------- */
  var constat = {
    id: "constat-internet", partie: "enquete",
    titre: "Le procès-verbal de constat sur internet",
    resume: "Figer une page, un profil ou un message avant qu'il disparaisse, de façon incontestable.",
    arts: ["441-1"],
    contenu: `
<p>Un contenu en ligne peut être supprimé en quelques secondes. La capture d'écran de la victime est utile, mais fragile : elle se truque facilement. Le procès-verbal de constat dressé par l'enquêteur lui donne une tout autre force : selon l'article <a href="#/acte/429">429 du CPP</a>, un procès-verbal fait foi de ce que son auteur a « vu, entendu ou constaté personnellement », s'il est régulier et établi dans ses fonctions.</p>

<div class="encadre attention">Cette leçon décrit des bonnes pratiques couramment enseignées ; elle ne reprend pas un texte officiel. Les modèles et outils exacts varient selon les services : demande ceux de ton service de stage.</div>

<h3>Ce que doit contenir le constat</h3>
<ul>
  <li><strong>Le cadre</strong> : date, heure (avec le fuseau), identité et qualité de l'enquêteur, cadre d'enquête (flagrance, préliminaire, commission rogatoire).</li>
  <li><strong>L'environnement technique</strong> : poste et connexion utilisés (de préférence un poste dédié aux investigations, non rattaché à une identité personnelle), navigateur.</li>
  <li><strong>Le chemin d'accès</strong> : comment l'enquêteur est arrivé au contenu (adresse URL complète, recherche effectuée, compte utilisé ou consultation sans compte).</li>
  <li><strong>La description</strong> : ce qui est vu, avec l'identifiant exact du compte (pas seulement le pseudonyme affiché, qui peut changer), la date de publication affichée, le nombre d'abonnés ou de vues si utile.</li>
  <li><strong>Les captures</strong> annexées, numérotées et décrites, et si possible un enregistrement vidéo de la navigation ou une archive de la page, avec leur empreinte (hash) pour prouver qu'elles n'ont pas été modifiées.</li>
</ul>

<h3>Ce qu'il ne faut pas faire</h3>
<ul>
  <li>Interagir avec le suspect sans cadre légal : échanger sous une fausse identité relève de l'<a href="#/acte/230-46">enquête sous pseudonyme</a>, réservée aux enquêteurs habilités, et ne doit jamais provoquer l'infraction.</li>
  <li>Se contenter de la capture de la victime sans la vérifier : un faux est vite fabriqué, et sa production serait elle-même un faux (<a class="art" href="#/infraction/441-1">441-1</a>).</li>
  <li>Oublier les suites : constater ne suffit pas, il faut aussi demander la préservation des données à la plateforme (<a href="#/acte/60-2">CPP 60-2</a>), puis les requérir (<a href="#/acte/60-1-2">60-1-2</a>).</li>
</ul>

<h3>Et du côté de la victime ?</h3>
<p>Une victime peut aussi faire établir un constat par un commissaire de justice (anciennement huissier), utile notamment pour une action civile. Pour la plainte, des captures complètes (URL, date, auteur) et la conservation des messages suffisent souvent à démarrer l'enquête.</p>
`,
    retenir: [
      "Un procès-verbal fait foi de ce que l'enquêteur a constaté personnellement (CPP 429).",
      "Noter : date et heure, poste utilisé, URL complète, identifiant exact du compte, captures numérotées avec empreinte.",
      "Ne pas échanger avec le suspect hors du cadre de l'enquête sous pseudonyme.",
      "Constater, puis faire préserver et requérir les données."
    ]
  };

  var pos = window.COURS.length;
  window.COURS.forEach(function (c, i) { if (c.id === "preuve-juge") pos = i + 1; });
  window.COURS.splice(pos, 0, constat);

  /* Leçon menaces : rappel de la provocation au suicide */
  window.COURS.forEach(function (c) {
    if (c.id === "menaces-en-ligne") {
      c.contenu = c.contenu.replace(
        "<tr><td>Menaces publiques d'attentat</td>",
        "<tr><td>Messages qui poussent la victime au suicide, suivis d'un suicide ou d'une tentative</td><td><a class=\"art\" href=\"#/infraction/223-13\">223-13</a></td><td>3 ans ; 5 ans si mineur de 15 ans</td></tr>\n<tr><td>Menaces publiques d'attentat</td>"
      );
    }
  });

  /* ---------- Cas pratiques ---------- */
  var L = window.CAS_LIBELLES = window.CAS_LIBELLES || {};
  L["c-pv"] = "Réflexe : procès-verbal de constat de l'enquêteur (URL, identifiant du compte, captures avec empreinte)";
  L["c-capture"] = "Se contenter des captures d'écran fournies par la victime";
  L["c-preservation"] = "Réflexe : demande de préservation des données à la plateforme";
  L["c-contact"] = "Écrire au suspect depuis un compte personnel pour obtenir des aveux";
  window.CAS.push(
    {
      id: "faux-papiers", titre: "La boutique de faux papiers",
      faits: "Un canal Telegram propose des cartes d'identité, permis de conduire et attestations d'employeur « garantis indétectables ». L'enquête identifie l'administrateur, qui en a vendu plus de 300 ; chez un acheteur, on trouve deux fausses cartes d'identité à des noms différents.",
      bonnes: ["441-2", "441-7", "324-1"], pieges: ["441-1", "313-1", "323-3-2"],
      correction: "Fabriquer et vendre de faux documents administratifs : 441-2, aggravé à 7 ans car commis de manière habituelle. Les fausses attestations d'employeur relèvent de 441-7. L'acheteur détient plusieurs faux documents administratifs : 441-3 (5 ans), sur la même fiche que 441-2. Les gains peuvent être blanchis (324-1). 441-1 est le texte général : quand le document est délivré par une administration, c'est 441-2 qui s'applique. Une chaîne Telegram n'est pas, en elle-même, la plateforme visée par 323-3-2."
    },
    {
      id: "constat-profil", titre: "Le profil qui va disparaître",
      faits: "Une adolescente signale qu'un compte Instagram publie des photos d'elle avec des messages l'incitant à « en finir ». La veille, elle a tenté de mettre fin à ses jours. Le compte change de pseudonyme régulièrement.",
      bonnes: ["223-13", "222-33-2-2", "c-pv", "c-preservation"], pieges: ["c-capture", "c-contact", "226-4-1"],
      correction: "Provocation au suicide suivie d'une tentative (223-13 : 5 ans si la victime a moins de 15 ans, 3 ans sinon) ; harcèlement aggravé par l'usage d'un service en ligne et la minorité de la victime (222-33-2-2), voire harcèlement scolaire si l'auteur fréquente son établissement. Réflexes : procès-verbal de constat immédiat avec l'identifiant exact du compte (le pseudonyme change, l'identifiant non), captures avec empreinte, puis demande de préservation des données à la plateforme. Ne pas contacter l'auteur depuis un compte personnel. La protection de la victime passe en premier (signalement, prise en charge)."
    }
  );

  window.LEXIQUE.push(
    ["Procès-verbal de constat", "Acte par lequel un enquêteur décrit ce qu'il a personnellement vu, notamment sur internet ; il fait foi s'il est régulier (CPP 429)."],
    ["Identifiant de compte", "Numéro ou nom technique unique d'un compte, qui ne change pas quand l'utilisateur modifie son pseudonyme affiché."],
    ["Faux", "Altération frauduleuse de la vérité dans un document, papier ou numérique, de nature à causer un préjudice (441-1)."]
  );
  window.VRAIFAUX.push(
    { q: "La provocation au suicide est punissable même si la victime n'a fait aucune tentative.", r: false, e: "223-13 exige que la provocation ait été suivie d'un suicide ou d'une tentative." },
    { q: "Un faux RIB envoyé par mail peut constituer un faux au sens de l'article 441-1.", r: true, e: "Le texte vise tout « support d'expression de la pensée », numérique compris." },
    { q: "Détenir plusieurs faux documents d'identité est puni de 5 ans d'emprisonnement.", r: true, e: "Article 441-3, alinéa 2." },
    { q: "Dans un constat en ligne, le pseudonyme affiché suffit à identifier le compte.", r: false, e: "Il faut relever l'identifiant technique du compte : le pseudonyme peut changer." }
  );
})();
;
/* ===== js/corrections.js ===== */
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
;
/* ===== js/features.js ===== */
/* Cyberpénal — outils ajoutés le 20/11/2026 :
   recherche dans tout le site, mes révisions (points faibles + révision espacée),
   atelier (qualifier un fait réel, rédiger un acte), comparateur, arbre « quelle infraction ? »,
   lexique au survol.
   Les vues s'enregistrent dans window.CP_VIEWS ; app.js les appelle depuis son routeur
   et expose ses outils dans window.CP_API. */
(function () {
  "use strict";
  var V = window.CP_VIEWS = window.CP_VIEWS || {};
  function api() { return window.CP_API; }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function norm(s) { return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function sansBalises(h) { var d = document.createElement("div"); d.innerHTML = h || ""; return (d.textContent || "").replace(/\s+/g, " ").trim(); }
  function INF() { return window.INFRACTIONS; }
  function inf(id) { var l = INF(); for (var i = 0; i < l.length; i++) if (l[i].id === id) return l[i]; return null; }
  function acte(id) { var l = window.ACTES || []; for (var i = 0; i < l.length; i++) if (l[i].id === id) return l[i]; return null; }
  function artLabel(f) { return f.code === "Code pénal" ? "art. " + f.art : f.art; }
  function themeNom(id) { var t = (window.THEMES || []).filter(function (x) { return x.id === id; })[0]; return t ? t.court : ""; }
  function themeCouleur(id) { var t = (window.THEMES || []).filter(function (x) { return x.id === id; })[0]; return t ? t.couleur : ""; }
  function aujourdhui() { var d = new Date(); return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate(); }
  function dansJours(n) { var d = new Date(); d.setDate(d.getDate() + n); return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate(); }
  function lire(k, def) { try { var v = JSON.parse(localStorage.getItem(k) || "null"); return v == null ? def : v; } catch (e) { return def; } }
  function ecrire(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function arme(b, texte, action) {
    b.addEventListener("click", function () {
      if (b.dataset.armed) { action(); return; }
      var avant = b.textContent; b.dataset.armed = "1"; b.textContent = texte;
      setTimeout(function () { if (b.isConnected) { delete b.dataset.armed; b.textContent = avant; } }, 3000);
    });
  }

  /* ---------- Claude (capacité « sample » du site publié) ---------- */
  var claudeP = null;
  function claude() {
    if (!claudeP) {
      claudeP = (window.claude && typeof window.claude.use === "function")
        ? window.claude.use("sample").catch(function () { return null; }) : Promise.resolve(null);
    }
    return claudeP;
  }
  function msgErreur(e) {
    if (e && e.code === "not_granted") return "Tu n'as pas autorisé ce site à utiliser Claude. Recharge la page pour qu'il te le redemande.";
    if (e && e.code === "rate_limited") return "Trop de demandes d'un coup. Attends une minute et réessaie.";
    return "Claude n'a pas pu répondre. Réessaie un peu plus tard.";
  }
  var HORS_LIGNE = "Cet outil a besoin de Claude : il ne marche que dans la version Claude du site, sur claude.ai.";

  /* ======================================================================
     1. RECHERCHE DANS TOUT LE SITE
     ====================================================================== */
  var index = null;
  function construireIndex() {
    var L = [];
    function add(type, titre, url, texte, sous) { L.push({ type: type, titre: titre, url: url, sous: sous || "", texte: texte, n: norm(titre + " " + (sous || "") + " " + texte), nt: norm(titre + " " + (sous || "")) }); }
    INF().forEach(function (f) {
      add("Fiches", f.titre, "#/infraction/" + f.id, [(window.CITATIONS || {})[f.id], f.materiel, f.moral, f.peines.map(function (p) { return p[0] + " " + p[1]; }).join(" "), f.notes, f.motscles].join(" "), f.code + " " + artLabel(f));
    });
    (window.COURS || []).forEach(function (c) { add("Cours", c.titre, "#/cours/" + c.id, c.resume + " " + sansBalises(c.contenu) + " " + (c.retenir || []).join(" ")); });
    (window.ACTES || []).forEach(function (a) { add("Actes d'enquête", a.titre, "#/acte/" + a.id, [a.citation, a.qui, a.conditions, a.duree, a.plus].join(" "), a.art); });
    (window.JURIS || []).forEach(function (j) { add("Jurisprudence", j.court, "#/arret/" + j.id, [j.faits, j.question, j.solution, j.portee].join(" "), j.juridiction + ", " + j.date + " " + j.num); });
    (window.CAS || []).forEach(function (c) { add("Cas pratiques", c.titre, "#/cas/" + c.id, c.faits + " " + c.correction); });
    (window.EUROPE || []).forEach(function (e) { add("Europe et international", e.nom, "#/europe", [e.quoi, e.france, e.statut].join(" "), e.ref); });
    (window.VICTIMES || []).forEach(function (v) { add("Victimes", v.titre, "#/victimes", (v.etapes || []).join(" ")); });
    (window.LEXIQUE || []).forEach(function (l) { add("Lexique", l[0], "#/lexique", l[1]); });
    if (window.OFAC_PAGE) add("Pages", "L'OFAC, l'Office anti-cybercriminalité", "#/ofac", sansBalises(window.OFAC_PAGE.html()));
    if (window.RESSOURCES_PAGE) add("Pages", "Les dispositifs publics gratuits", "#/ressources", sansBalises(window.RESSOURCES_PAGE.html()));
    return L;
  }
  function chercher(q) {
    var termes = norm(q).split(/[\s,;]+/).filter(function (t) { return t.length > 1 || /\d/.test(t); });
    if (!termes.length) return [];
    if (!index) index = construireIndex();
    var res = [];
    index.forEach(function (e) {
      for (var i = 0; i < termes.length; i++) if (e.n.indexOf(termes[i]) < 0) return;
      var score = 0;
      termes.forEach(function (t) { if (e.nt.indexOf(t) >= 0) score += 10; var k = 0, p = -1; while ((p = e.n.indexOf(t, p + 1)) >= 0 && k < 20) k++; score += k; });
      res.push({ e: e, score: score, termes: termes });
    });
    return res.sort(function (a, b) { return b.score - a.score; });
  }
  function extrait(texte, termes) {
    var n = norm(texte), pos = -1;
    termes.forEach(function (t) { var p = n.indexOf(t); if (p >= 0 && (pos < 0 || p < pos)) pos = p; });
    var debut = Math.max(0, pos - 70), fin = Math.min(texte.length, debut + 220);
    var s = texte.slice(debut, fin), nS = norm(s);
    var marques = [];
    termes.forEach(function (t) { var p = -1; while ((p = nS.indexOf(t, p + 1)) >= 0) marques.push([p, p + t.length]); });
    marques.sort(function (a, b) { return a[0] - b[0]; });
    var out = "", i = 0;
    marques.forEach(function (m) { if (m[0] < i) return; out += esc(s.slice(i, m[0])) + "<mark>" + esc(s.slice(m[0], m[1])) + "</mark>"; i = m[1]; });
    out += esc(s.slice(i));
    return (debut > 0 ? "… " : "") + out + (fin < texte.length ? " …" : "");
  }
  var ORDRE_TYPES = ["Fiches", "Cours", "Actes d'enquête", "Jurisprudence", "Cas pratiques", "Europe et international", "Victimes", "Pages", "Lexique"];
  V.recherche = function (args) {
    var q = args[0] || "";
    api().page('<p class="eyebrow">Outils</p><h1>Rechercher</h1>' +
      '<p class="lead">Dans tout le site : fiches, cours, actes d\'enquête, jurisprudence, cas pratiques, Europe, victimes, lexique.</p>' +
      '<input type="search" class="search" id="rechQ" placeholder="Ex. : logs, VPN, 60-1, sextorsion, hébergeur…" autocomplete="off" value="' + esc(q) + '">' +
      '<div id="rechRes" class="rech-res" aria-live="polite"></div>');
    var input = $("#rechQ"), t;
    function rendre() {
      var v = input.value.trim(), z = $("#rechRes");
      try { history.replaceState(null, "", "#/recherche" + (v ? "/" + encodeURIComponent(v) : "")); } catch (e) {}
      if (!v) { z.innerHTML = '<p class="petit">Tape un mot, un numéro d\'article ou une expression. Plusieurs mots : seuls les résultats qui les contiennent tous s\'affichent.</p>'; return; }
      var r = chercher(v);
      if (!r.length) { z.innerHTML = "<p>Aucun résultat pour « " + esc(v) + " ». Essaie un mot plus court ou sans accent.</p>"; return; }
      var groupes = {};
      r.forEach(function (x) { (groupes[x.e.type] = groupes[x.e.type] || []).push(x); });
      z.innerHTML = '<p class="petit">' + r.length + " résultat" + (r.length > 1 ? "s" : "") + "</p>" +
        ORDRE_TYPES.filter(function (k) { return groupes[k]; }).map(function (k) {
          return "<h2>" + esc(k) + ' <span class="petit">' + groupes[k].length + "</span></h2>" + groupes[k].slice(0, 25).map(function (x) {
            return '<a class="rech-item" href="' + x.e.url + '"><b>' + esc(x.e.titre) + "</b>" + (x.e.sous ? ' <span class="rech-sous">' + esc(x.e.sous) + "</span>" : "") +
              "<span>" + extrait(x.e.texte, x.termes) + "</span></a>";
          }).join("");
        }).join("");
    }
    input.addEventListener("input", function () { clearTimeout(t); t = setTimeout(rendre, 120); });
    rendre(); input.focus();
  };

  /* ======================================================================
     2. MES RÉVISIONS : points faibles + révision espacée
     ====================================================================== */
  var KEY_REV = "cyberpenal.revoir";
  var PAS = [1, 2, 4, 8, 16, 32]; /* jours avant la prochaine révision, selon la boîte */
  function hash(s) { var h = 0; s = String(s); for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return "q" + Math.abs(h).toString(36); }
  function lireRev() { return lire(KEY_REV, {}); }
  function ecrireRev(r) { ecrire(KEY_REV, r); }
  function themeDeRef(ref) {
    var m = /^(fiche|art):(.+)$/.exec(ref || ""); if (m) { var f = inf(m[2]); return f ? f.theme : ""; }
    m = /^acte:/.exec(ref || ""); if (m) return "procedure";
    m = /^cas:(.+)$/.exec(ref || ""); if (m) { var c = (window.CAS || []).filter(function (x) { return x.id === m[1]; })[0]; var f2 = c && inf(c.bonnes[0]); return f2 ? f2.theme : ""; }
    return "";
  }
  function lienDeRef(ref) {
    var m = /^(fiche|art):(.+)$/.exec(ref || ""); if (m && inf(m[2])) return ["#/infraction/" + m[2], artLabel(inf(m[2]))];
    m = /^acte:(.+)$/.exec(ref || ""); if (m && acte(m[1])) return ["#/acte/" + m[1], acte(m[1]).art];
    m = /^cas:(.+)$/.exec(ref || ""); if (m) return ["#/cas/" + m[1], "le cas"];
    return null;
  }
  var REVOIR = window.CP_REVOIR = {
    /* appelé par le moteur de jeux après chaque réponse */
    noter: function (q, juste) {
      if (!q || !q.q) return;
      var r = lireRev(), k = q.ref || hash(q.q), it = r[k], j = aujourdhui();
      if (juste) {
        if (!it) return;
        it.reussies = (it.reussies || 0) + 1;
        if (it.due <= j) { it.boite = Math.min(PAS.length - 1, (it.boite || 0) + 1); it.due = dansJours(PAS[it.boite]); }
      } else {
        it = r[k] = it || { q: q.q, c: q.c, r: q.r, e: q.e || "", ref: q.ref || "", binaire: !!q.binaire, ratees: 0, reussies: 0 };
        it.q = q.q; it.c = q.c; it.r = q.r; it.e = q.e || it.e;
        it.ratees = (it.ratees || 0) + 1; it.boite = 0; it.due = dansJours(1); it.vu = j;
      }
      it.theme = it.theme || themeDeRef(it.ref);
      r[k] = it; ecrireRev(r);
    },
    noterCas: function (c, score) {
      var bonnes = c.bonnes.map(function (id) { var f = inf(id); return f ? artLabel(f) + " (" + f.titre + ")" : id; }).join(" ; ");
      this.noter({ q: c.titre + " — " + c.faits, c: null, r: bonnes, e: c.correction, ref: "cas:" + c.id }, score >= 100);
    },
    aRevoir: function () { var r = lireRev(), j = aujourdhui(); return Object.keys(r).filter(function (k) { return r[k].due <= j; }).length; }
  };

  var session = null;
  V.revisions = function () {
    var r = lireRev(), cles = Object.keys(r), j = aujourdhui();
    var dues = cles.filter(function (k) { return r[k].due <= j; });
    var maitrisees = cles.filter(function (k) { return r[k].boite >= 3; }).length;
    var parTheme = {};
    cles.forEach(function (k) { var t = r[k].theme || "autres"; parTheme[t] = (parTheme[t] || 0) + (r[k].ratees || 0); });
    var themes = Object.keys(parTheme).sort(function (a, b) { return parTheme[b] - parTheme[a]; });
    var maxT = themes.length ? parTheme[themes[0]] : 1;
    var pires = cles.slice().sort(function (a, b) { return (r[b].ratees - r[b].reussies * .5) - (r[a].ratees - r[a].reussies * .5); }).slice(0, 8);
    api().page('<p class="eyebrow">S\'entraîner</p><h1>Mes révisions</h1>' +
      '<p class="lead">Chaque question ratée dans un quiz, le défi du jour, un jeu ou un cas pratique arrive ici. Le site te la repose le lendemain, puis de plus en plus tard à mesure que tu la réussis.</p>' +
      '<div class="stats"><div class="stat"><b>' + dues.length + '</b><span>à revoir aujourd\'hui</span></div><div class="stat"><b>' + (cles.length - maitrisees) + '</b><span>en cours d\'apprentissage</span></div><div class="stat"><b>' + maitrisees + "</b><span>bien retenues</span></div></div>" +
      (cles.length ? "" : '<div class="card"><p>Rien à revoir pour l\'instant. Fais un entraînement dans <a href="#/tester">Me tester</a> ou un <a href="#/cas">cas pratique</a> : tes erreurs viendront ici.</p></div>') +
      (dues.length ? '<div class="btns"><button class="btn" id="revGo">Réviser les ' + dues.length + " question" + (dues.length > 1 ? "s" : "") + " du jour</button></div>" :
        (cles.length ? '<p class="petit">Rien d\'autre à revoir aujourd\'hui. Reviens demain.</p>' : "")) +
      '<section class="card jeu" id="revZone" hidden></section>' +
      (themes.length ? "<h2>Tes points faibles</h2><p class=\"petit\">Nombre d'erreurs par thème, toutes révisions confondues.</p><div class=\"rev-themes\">" + themes.map(function (t) {
        return '<div class="rev-theme ' + themeCouleur(t) + '"><span>' + esc(themeNom(t) || "Autres questions") + '</span><span class="rev-barre"><i style="width:' + Math.round(100 * parTheme[t] / maxT) + '%"></i></span><b>' + parTheme[t] + "</b></div>";
      }).join("") + "</div>" : "") +
      (pires.length ? "<h2>Les questions qui te résistent</h2><ul class=\"rev-liste\">" + pires.map(function (k) {
        var it = r[k], l = lienDeRef(it.ref);
        return "<li><span>" + esc(it.q.length > 160 ? it.q.slice(0, 160) + "…" : it.q) + '</span><span class="petit">ratée ' + it.ratees + " fois" + (l ? ' · <a href="' + l[0] + '">revoir ' + esc(l[1]) + "</a>" : "") + "</span></li>";
      }).join("") + "</ul>" : "") +
      (cles.length ? '<p class="corr-pied"><button class="corr-lien" id="revRaz">tout effacer et repartir de zéro</button></p>' : ""));
    var go = $("#revGo"); if (go) go.addEventListener("click", function () { demarrerSession(dues); });
    var raz = $("#revRaz"); if (raz) arme(raz, "clique encore pour tout effacer", function () { ecrireRev({}); V.revisions(); });
  };
  function demarrerSession(cles) {
    session = { cles: cles.slice().sort(function () { return Math.random() - .5; }), i: 0, ok: 0 };
    var z = $("#revZone"); z.hidden = false; poser(); z.scrollIntoView({ block: "start", behavior: "smooth" });
  }
  function poser() {
    var z = $("#revZone"), r = lireRev();
    if (session.i >= session.cles.length) {
      z.innerHTML = "<h3>Révision terminée</h3><p>" + session.ok + " / " + session.cles.length + " réussies. Les questions ratées reviendront demain.</p>" +
        '<div class="row"><button class="btn" id="revFin">Voir mon bilan</button></div>';
      $("#revFin").addEventListener("click", function () { V.revisions(); });
      return;
    }
    var k = session.cles[session.i], it = r[k], l = lienDeRef(it.ref);
    var entete = '<p class="q-progress">Question ' + (session.i + 1) + " / " + session.cles.length + "</p>";
    if (Array.isArray(it.c) && it.c.length) {
      var ordre = it.c.map(function (c, i) { return i; }).sort(function () { return Math.random() - .5; });
      if (it.binaire) ordre = [0, 1];
      z.innerHTML = entete + '<p class="jeu-question">' + esc(it.q) + '</p><div class="options">' +
        ordre.map(function (i) { return '<button class="opt" data-i="' + i + '">' + esc(it.c[i]) + "</button>"; }).join("") + '</div><div id="revRetour"></div>';
      $$(".opt", z).forEach(function (b) {
        b.addEventListener("click", function () {
          var juste = +b.dataset.i === it.r;
          $$(".opt", z).forEach(function (x) { x.disabled = true; if (+x.dataset.i === it.r) x.classList.add("good"); else if (x === b) x.classList.add("bad"); });
          conclure(k, it, juste, l);
        });
      });
    } else {
      z.innerHTML = entete + '<p class="jeu-question">' + esc(it.q) + '</p><p class="petit">Réfléchis à ta réponse, puis regarde la correction.</p>' +
        '<div class="row"><button class="btn" id="revVoir">Voir la correction</button></div><div id="revRetour"></div>';
      $("#revVoir").addEventListener("click", function () {
        $("#revVoir").remove();
        $("#revRetour").innerHTML = '<div class="feedback"><p><strong>Réponse : </strong>' + esc(it.r) + "</p><p>" + esc(it.e) + "</p></div>" +
          '<div class="row"><button class="btn" id="revSu">Je l\'avais</button><button class="btn ghost" id="revPas">Je ne l\'avais pas</button></div>';
        $("#revSu").addEventListener("click", function () { suite(k, true); });
        $("#revPas").addEventListener("click", function () { suite(k, false); });
      });
    }
  }
  function conclure(k, it, juste, l) {
    $("#revRetour").innerHTML = '<div class="feedback"><strong>' + (juste ? "C'est juste !" : "Ce n'était pas ça.") + "</strong>" + (it.e ? "<br>" + esc(it.e) : "") +
      (l ? '<br><a href="' + l[0] + '" target="_blank" rel="noopener">Revoir ' + esc(l[1]) + "</a>" : "") + '</div><div class="row"><button class="btn" id="revNext">Suivante</button></div>';
    $("#revNext").addEventListener("click", function () { suite(k, juste); });
    $("#revNext").focus();
  }
  function suite(k, juste) {
    var r = lireRev(), it = r[k];
    if (it) {
      if (juste) { it.boite = Math.min(PAS.length - 1, (it.boite || 0) + 1); it.reussies = (it.reussies || 0) + 1; it.due = dansJours(PAS[it.boite]); session.ok++; }
      else { it.boite = 0; it.ratees = (it.ratees || 0) + 1; it.due = dansJours(1); }
      ecrireRev(r);
    }
    session.i++; poser();
  }

  /* ======================================================================
     3 et 4. ATELIER : qualifier un fait réel, rédiger un acte
     ====================================================================== */
  var KEY_AT = "cyberpenal.atelier";
  function catalogueFiches() {
    return INF().map(function (f) { return "- " + f.id + " | " + f.titre + " | " + f.materiel + " | base : " + f.peines[0][1]; }).join("\n");
  }
  function catalogueActes() {
    return (window.ACTES || []).map(function (a) { return "- " + a.id + " | " + a.art + " | " + a.titre + " | " + (a.qui || ""); }).join("\n");
  }
  function lienFiche(id) { var f = inf(id); return f ? '<a class="chip" href="#/infraction/' + f.id + '">' + esc(artLabel(f)) + "</a> " : ""; }
  function lienActe(id) { var a = acte(id); return a ? '<a class="chip" href="#/acte/' + a.id + '">' + esc(a.art) + "</a> " : ""; }
  function ajouterAuCarnet(texte) {
    var A = api(); A.state.notes = (A.state.notes ? A.state.notes.replace(/\s+$/, "") + "\n\n" : "") + texte; A.save();
  }

  var REDAC = {
    requisition: {
      nom: "Réquisition à un opérateur ou une plateforme",
      attendu: ["L'autorité qui requiert (OPJ, sur instruction ou autorisation du procureur selon le cadre) et le cadre d'enquête (flagrance ou préliminaire)",
        "Le fondement : art. 60-1 CPP en flagrance, 77-1-1 en préliminaire, et 60-1-2 pour les données de connexion (seuils de peine)",
        "Le destinataire précis (opérateur, plateforme, banque…) et le service compétent",
        "L'objet : quelles données exactement (identité de l'abonné, adresses IP, journaux de connexion…), pour quel compte ou quel identifiant",
        "La période visée, avec dates et heures, et le fuseau horaire",
        "Le délai de réponse et le mode de transmission",
        "La date, la signature et la mention de l'obligation de répondre et de son éventuelle sanction"],
      actes: ["60-1", "60-1-2", "60-2"]
    },
    constat: {
      nom: "Procès-verbal de constatation en ligne",
      attendu: ["Qui constate (qualité de l'enquêteur), la date et les heures de début et de fin",
        "Le matériel et la connexion utilisés (poste dédié, navigateur, éventuel compte d'enquête)",
        "L'adresse exacte (URL) de chaque page consultée, et le chemin suivi pour y arriver",
        "La description objective de ce qui est vu : textes, images, pseudonymes, dates de publication",
        "Les captures d'écran annexées, numérotées, et leur lien avec le texte du PV",
        "Aucune interprétation ni qualification juridique dans la constatation elle-même",
        "La clôture : signature, et rappel que le PV vaut jusqu'à preuve contraire (art. 429 et 430 CPP)"],
      actes: ["429"]
    }
  };

  V.atelier = function (args) {
    var onglet = args[0] === "rediger" ? "rediger" : "qualifier";
    var hist = lire(KEY_AT, []);
    api().page('<p class="eyebrow">S\'entraîner</p><h1>Atelier</h1>' +
      '<p class="lead">Deux exercices corrigés par Claude, au plus près de ce que tu feras en stage.</p>' +
      '<div class="filtres"><a class="pill' + (onglet === "qualifier" ? " on" : "") + '" href="#/atelier">Qualifier un fait réel</a><a class="pill' + (onglet === "rediger" ? " on" : "") + '" href="#/atelier/rediger">Rédiger un acte</a></div>' +
      '<div id="atZone"></div>');
    onglet === "rediger" ? rediger() : qualifier(hist);
  };

  function qualifier(hist) {
    var z = $("#atZone");
    z.innerHTML = '<div class="card"><h3>Qualifier un fait réel</h3><p class="petit">Colle un article de presse ou décris une situation vue en stage (sans nom réel). Claude propose les qualifications, ce qu\'il faut prouver et les actes d\'enquête utiles, en s\'appuyant sur les fiches du site.</p>' +
      '<label for="atFaits" class="lettre-k">Les faits</label><textarea id="atFaits" rows="7" placeholder="Ex. : Une étudiante reçoit un message d\'un faux conseiller de sa banque…"></textarea>' +
      '<div class="btns"><button class="btn" id="atGo">Qualifier</button></div><p class="jeu-msg" id="atMsg" hidden></p></div><div id="atRes"></div>' +
      (hist.length ? "<h2>Mes analyses précédentes</h2>" + hist.slice(0, 10).map(function (h, i) {
        return '<details class="card at-hist"><summary>' + esc(h.date) + " — " + esc(h.faits.slice(0, 90)) + (h.faits.length > 90 ? "…" : "") + '</summary><div data-h="' + i + '"></div></details>';
      }).join("") : "");
    $$("[data-h]", z).forEach(function (d) { d.innerHTML = rendreQualif(hist[+d.dataset.h].res); });
    $("#atGo").addEventListener("click", function () {
      var faits = $("#atFaits").value.trim(), msg = $("#atMsg"), b = $("#atGo");
      if (faits.length < 30) { msg.textContent = "Décris les faits en quelques phrases au moins."; msg.hidden = false; return; }
      claude().then(function (s) {
        if (!s) { msg.textContent = HORS_LIGNE; msg.hidden = false; return; }
        b.disabled = true; b.textContent = "Claude analyse…"; msg.textContent = "Analyse en cours, cela prend une vingtaine de secondes."; msg.hidden = false;
        var consigne = "Tu aides une personne qui prépare un stage en enquête sur la cybercriminalité, en droit pénal français. Voici des faits, puis le catalogue des infractions et des actes d'enquête de son site de révision.\n\n" +
          "Propose les qualifications pénales possibles. Règles :\n" +
          "- Utilise UNIQUEMENT les identifiants du catalogue ci-dessous. Si une qualification utile n'y figure pas, signale-la dans « a_verifier » sans inventer de numéro.\n" +
          "- Pour chaque qualification : pourquoi elle colle aux faits, et la liste des éléments à prouver (matériel et intentionnel), concrètement.\n" +
          "- Indique les qualifications voisines à écarter et pourquoi, les circonstances aggravantes possibles, et 2 à 5 actes d'enquête utiles du catalogue avec leur intérêt ici.\n" +
          "- Si les faits sont flous, dis quelles informations manquent. Écris en français, tutoie la personne, phrases courtes.\n\n" +
          'Réponds UNIQUEMENT avec un objet JSON de ce format exact :\n{"resume":"une phrase","qualifications":[{"id":"323-1","pourquoi":"...","a_prouver":["...","..."]}],"a_ecarter":[{"id":"...","pourquoi":"..."}],"aggravations":"...","actes":[{"id":"60-1","pourquoi":"..."}],"a_verifier":"..."}\n\n' +
          "FAITS :\n" + faits + "\n\nCATALOGUE DES INFRACTIONS (id | titre | élément matériel | peine de base) :\n" + catalogueFiches() +
          "\n\nCATALOGUE DES ACTES D'ENQUÊTE (id | article | titre | qui) :\n" + catalogueActes();
        s.json(consigne, { modelTier: "complex" }).then(function (res) {
          b.disabled = false; b.textContent = "Qualifier";
          if (!res || !Array.isArray(res.qualifications)) { msg.textContent = "La réponse de Claude était incomplète. Réessaie."; return; }
          msg.hidden = true;
          var entree = { date: new Date().toLocaleDateString("fr-FR"), faits: faits, res: res };
          hist.unshift(entree); ecrire(KEY_AT, hist.slice(0, 20));
          $("#atRes").innerHTML = '<div class="card at-res">' + rendreQualif(res) + '<div class="btns"><button class="btn ghost small" id="atCarnet">Ajouter à mon carnet</button></div></div>';
          $("#atCarnet").addEventListener("click", function () {
            ajouterAuCarnet("— Qualification (" + entree.date + ") —\nFaits : " + faits + "\n" + texteQualif(res));
            $("#atCarnet").textContent = "Ajouté au carnet ✓"; $("#atCarnet").disabled = true;
          });
          $("#atRes").scrollIntoView({ block: "start", behavior: "smooth" });
        }, function (e) { b.disabled = false; b.textContent = "Qualifier"; msg.textContent = msgErreur(e); msg.hidden = false; });
      });
    });
  }
  function filtreIds(l, f) { return (Array.isArray(l) ? l : []).filter(function (x) { return x && f(x.id); }); }
  function rendreQualif(res) {
    var q = filtreIds(res.qualifications, inf), e = filtreIds(res.a_ecarter, inf), a = filtreIds(res.actes, acte);
    return (res.resume ? '<p class="lead">' + esc(res.resume) + "</p>" : "") +
      "<h3>Qualifications retenues</h3>" + (q.length ? q.map(function (x) {
        var f = inf(x.id);
        return '<div class="at-q"><p>' + lienFiche(x.id) + "<b>" + esc(f.titre) + '</b> <span class="petit">' + esc(f.peines[0][1]) + "</span></p><p>" + esc(x.pourquoi) + "</p>" +
          (Array.isArray(x.a_prouver) && x.a_prouver.length ? '<p class="lettre-k">À prouver</p><ul>' + x.a_prouver.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" : "") + "</div>";
      }).join("") : "<p>Aucune qualification du site ne colle clairement.</p>") +
      (e.length ? "<h3>À écarter</h3><ul>" + e.map(function (x) { return "<li>" + lienFiche(x.id) + esc(x.pourquoi) + "</li>"; }).join("") + "</ul>" : "") +
      (res.aggravations ? "<h3>Circonstances aggravantes possibles</h3><p>" + esc(res.aggravations) + "</p>" : "") +
      (a.length ? "<h3>Actes d'enquête utiles</h3><ul>" + a.map(function (x) { return "<li>" + lienActe(x.id) + esc(x.pourquoi) + "</li>"; }).join("") + "</ul>" : "") +
      (res.a_verifier ? "<h3>À vérifier</h3><p>" + esc(res.a_verifier) + "</p>" : "") +
      '<p class="petit">Proposition de Claude à partir des fiches du site : vérifie toujours le texte de l\'article avant de t\'en servir.</p>';
  }
  function texteQualif(res) {
    return filtreIds(res.qualifications, inf).map(function (x) { var f = inf(x.id); return "• " + artLabel(f) + " — " + f.titre + " : " + x.pourquoi + (x.a_prouver ? "\n  À prouver : " + x.a_prouver.join(" ; ") : ""); }).join("\n") +
      (res.a_verifier ? "\nÀ vérifier : " + res.a_verifier : "");
  }

  function rediger() {
    var z = $("#atZone"), cas = window.CAS || [];
    z.innerHTML = '<div class="card"><h3>Rédiger un acte</h3><p class="petit">Choisis un type d\'acte et une situation, rédige l\'acte, puis Claude te corrige sur le fond et la forme. C\'est un exercice : le modèle proposé n\'est pas un formulaire officiel.</p>' +
      '<div class="row"><label class="lettre-k" for="rdType">Acte</label><select id="rdType">' + Object.keys(REDAC).map(function (k) { return '<option value="' + k + '">' + esc(REDAC[k].nom) + "</option>"; }).join("") + "</select></div>" +
      '<div class="row" style="margin-top:8px"><label class="lettre-k" for="rdCas">Situation</label><select id="rdCas"><option value="">Au hasard</option>' +
      cas.map(function (c) { return '<option value="' + esc(c.id) + '">' + esc(c.titre) + "</option>"; }).join("") + "</select></div>" +
      '<div class="cas-faits" id="rdFaits" style="margin-top:12px"></div>' +
      '<details class="rd-attendu"><summary>Ce qu\'on attend dans cet acte</summary><ul id="rdAttendu"></ul></details>' +
      '<label for="rdTexte" class="lettre-k">Ton acte</label><textarea id="rdTexte" rows="14" placeholder="Rédige ici ton acte, comme si tu le préparais pour l\'enquêteur."></textarea>' +
      '<div class="btns"><button class="btn" id="rdGo">Faire corriger</button></div><p class="jeu-msg" id="rdMsg" hidden></p></div><div id="rdRes"></div>';
    var choisi = null;
    function maj() {
      var id = $("#rdCas").value;
      choisi = id ? cas.filter(function (c) { return c.id === id; })[0] : cas[Math.floor(Math.random() * cas.length)];
      $("#rdFaits").innerHTML = "<b>" + esc(choisi.titre) + "</b><br>" + esc(choisi.faits);
      $("#rdAttendu").innerHTML = REDAC[$("#rdType").value].attendu.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("");
    }
    $("#rdCas").addEventListener("change", maj);
    $("#rdType").addEventListener("change", function () { $("#rdAttendu").innerHTML = REDAC[$("#rdType").value].attendu.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join(""); });
    maj();
    $("#rdGo").addEventListener("click", function () {
      var texte = $("#rdTexte").value.trim(), msg = $("#rdMsg"), b = $("#rdGo"), T = REDAC[$("#rdType").value];
      if (texte.length < 80) { msg.textContent = "Rédige ton acte avant de le faire corriger (quelques lignes au moins)."; msg.hidden = false; return; }
      claude().then(function (s) {
        if (!s) { msg.textContent = HORS_LIGNE; msg.hidden = false; return; }
        b.disabled = true; b.textContent = "Correction…"; msg.textContent = "Claude relit ton acte."; msg.hidden = false;
        var ref = T.actes.map(acte).filter(Boolean).map(function (a) { return a.art + " — " + a.titre + "\nTexte : " + a.citation + "\nConditions : " + (a.conditions || "") + (a.plus ? "\nÀ savoir : " + a.plus : ""); }).join("\n\n");
        var lecon = (window.COURS || []).filter(function (c) { return c.id === (T === REDAC.constat ? "constat-internet" : "donnees-connexion"); })[0];
        var consigne = "Tu corriges un exercice de rédaction d'une personne qui prépare un stage en enquête sur la cybercriminalité (droit français). Elle a rédigé : « " + T.nom + " ».\n\n" +
          "Corrige avec bienveillance mais exigence, sur le fond (fondement juridique, cadre d'enquête, précision des données demandées ou constatées, période, proportionnalité) et sur la forme (structure, mentions, style neutre).\n" +
          "Règles : appuie-toi sur les textes de référence fournis ; n'invente aucun article ; si tu cites un article qui n'est pas dans les références (par exemple 77-1-1 ou 430 CPP), reste général. Les faits sont fictifs. Écris en français, tutoie la personne.\n\n" +
          'Réponds UNIQUEMENT avec un objet JSON de ce format exact :\n{"appreciation":"2 ou 3 phrases","points_forts":["..."],"a_corriger":[{"point":"...","conseil":"..."}],"modele":"une version corrigée complète de l\'acte, avec des retours à la ligne"}\n\n' +
          "CE QU'ON ATTEND DANS CET ACTE :\n- " + T.attendu.join("\n- ") + "\n\nSITUATION :\n" + choisi.titre + " — " + choisi.faits +
          "\n\nTEXTES DE RÉFÉRENCE :\n" + ref + (lecon ? "\n\nEXTRAIT DU COURS « " + lecon.titre + " » :\n" + sansBalises(lecon.contenu).slice(0, 6000) : "") +
          "\n\nACTE RÉDIGÉ PAR LA PERSONNE :\n" + texte;
        s.json(consigne, { modelTier: "complex" }).then(function (res) {
          b.disabled = false; b.textContent = "Faire corriger";
          if (!res || !res.appreciation) { msg.textContent = "La correction est incomplète. Réessaie."; return; }
          msg.hidden = true;
          $("#rdRes").innerHTML = '<div class="card at-res"><h3>Correction</h3><p>' + esc(res.appreciation) + "</p>" +
            (Array.isArray(res.points_forts) && res.points_forts.length ? '<p class="lettre-k">Ce qui va bien</p><ul>' + res.points_forts.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" : "") +
            (Array.isArray(res.a_corriger) && res.a_corriger.length ? '<p class="lettre-k">À corriger</p><ul>' + res.a_corriger.map(function (p) { return "<li><b>" + esc(p.point) + "</b> — " + esc(p.conseil) + "</li>"; }).join("") + "</ul>" : "") +
            (res.modele ? '<details open><summary class="lettre-k">Une version corrigée</summary><pre class="rd-modele">' + esc(res.modele) + "</pre></details>" : "") +
            '<div class="btns"><button class="btn ghost small" id="rdCarnet">Ajouter la version corrigée à mon carnet</button></div></div>';
          $("#rdCarnet").addEventListener("click", function () {
            ajouterAuCarnet("— " + T.nom + " (" + choisi.titre + ") —\n" + (res.modele || "")); $("#rdCarnet").textContent = "Ajouté au carnet ✓"; $("#rdCarnet").disabled = true;
          });
          $("#rdRes").scrollIntoView({ block: "start", behavior: "smooth" });
        }, function (e) { b.disabled = false; b.textContent = "Faire corriger"; msg.textContent = msgErreur(e); msg.hidden = false; });
      });
    });
  }

  /* ======================================================================
     5. COMPARER DEUX INFRACTIONS
     ====================================================================== */
  var PAIRES = [["323-1", "323-3"], ["323-1", "323-2"], ["313-1", "312-1"], ["312-1", "312-10"], ["222-33-2-2", "222-16"],
    ["226-1", "226-2-1"], ["226-4-1", "313-1"], ["227-22-1", "227-23-1"], ["324-1", "321-1"], ["222-17", "433-3"], ["226-8", "226-8-1"]];
  var explications = {};
  function optionsFiches(sel) {
    return (window.THEMES || []).map(function (t) {
      var fs = INF().filter(function (f) { return f.theme === t.id; });
      return fs.length ? '<optgroup label="' + esc(t.nom) + '">' + fs.map(function (f) { return '<option value="' + esc(f.id) + '"' + (f.id === sel ? " selected" : "") + ">" + esc(artLabel(f) + " — " + f.titre) + "</option>"; }).join("") + "</optgroup>" : "";
    }).join("");
  }
  V.comparer = function (args) {
    var a = inf(args[0]) || inf("323-1"), b = inf(args[1]) || inf("323-3");
    var CIT = window.CITATIONS || {};
    function ligne(k, fa, fb) { return '<tr><th scope="row">' + k + "</th><td>" + fa + "</td><td>" + fb + "</td></tr>"; }
    function peines(f) { return '<ul class="peines">' + f.peines.map(function (p) { return "<li><small>" + esc(p[0]) + "</small><b>" + esc(p[1]) + "</b></li>"; }).join("") + "</ul>"; }
    var cle = a.id + "|" + b.id;
    api().page('<p class="eyebrow">Apprendre</p><h1>Comparer deux infractions</h1>' +
      '<p class="lead">Côte à côte, pour bien voir ce qui les distingue.</p>' +
      '<div class="cmp-choix"><select id="cmpA" aria-label="Première infraction">' + optionsFiches(a.id) + '</select><span aria-hidden="true">et</span><select id="cmpB" aria-label="Deuxième infraction">' + optionsFiches(b.id) + "</select></div>" +
      '<p class="petit">Comparaisons classiques : ' + PAIRES.filter(function (p) { return inf(p[0]) && inf(p[1]); }).map(function (p) { return '<a href="#/comparer/' + p[0] + "/" + p[1] + '">' + esc(inf(p[0]).art + " / " + inf(p[1]).art) + "</a>"; }).join(" · ") + "</p>" +
      '<div class="cmp-wrap"><table class="cmp"><thead><tr><th></th><th><a href="#/infraction/' + a.id + '">' + esc(artLabel(a)) + "</a><br><span>" + esc(a.titre) + '</span></th><th><a href="#/infraction/' + b.id + '">' + esc(artLabel(b)) + "</a><br><span>" + esc(b.titre) + "</span></th></tr></thead><tbody>" +
      ligne("Thème", esc(themeNom(a.theme)), esc(themeNom(b.theme))) +
      ligne("La lettre du texte", CIT[a.id] ? "« " + esc(CIT[a.id]) + " »" : "—", CIT[b.id] ? "« " + esc(CIT[b.id]) + " »" : "—") +
      ligne("Élément matériel", esc(a.materiel), esc(b.materiel)) +
      ligne("Élément moral", esc(a.moral), esc(b.moral)) +
      ligne("Peines", peines(a), peines(b)) +
      ligne("Tentative", a.tentative ? "Punissable" : "Non prévue", b.tentative ? "Punissable" : "Non prévue") +
      ligne("À savoir", esc(a.notes || "—"), esc(b.notes || "—")) +
      "</tbody></table></div>" +
      '<div class="card"><h3>La différence clé</h3><div id="cmpCle">' + (explications[cle] ? "<p>" + esc(explications[cle]) + "</p>" : '<p class="petit">Claude peut résumer en quelques phrases ce qui sépare ces deux infractions, avec un exemple.</p><button class="btn ghost small" id="cmpGo">Expliquer la différence</button>') + '</div><p class="jeu-msg" id="cmpMsg" hidden></p></div>');
    function aller() { location.hash = "#/comparer/" + $("#cmpA").value + "/" + $("#cmpB").value; }
    $("#cmpA").addEventListener("change", aller); $("#cmpB").addEventListener("change", aller);
    var go = $("#cmpGo"); if (go) go.addEventListener("click", function () {
      var msg = $("#cmpMsg");
      claude().then(function (s) {
        if (!s) { msg.textContent = HORS_LIGNE; msg.hidden = false; return; }
        go.disabled = true; go.textContent = "Claude réfléchit…";
        function bloc(f) { return artLabel(f) + " — " + f.titre + "\nTexte : " + (CIT[f.id] || "") + "\nÉlément matériel : " + f.materiel + "\nÉlément moral : " + f.moral + "\nPeines : " + f.peines.map(function (p) { return p[0] + " : " + p[1]; }).join(" ; ") + "\nÀ savoir : " + (f.notes || ""); }
        s("Explique à une personne qui prépare un stage en cybercriminalité la différence clé entre ces deux infractions du droit français, en 4 à 6 phrases simples, avec un exemple concret pour chacune et le critère qui permet de trancher. Appuie-toi uniquement sur ces fiches, tutoie la personne, pas de titre ni de liste.\n\n" + bloc(a) + "\n\n" + bloc(b), { modelTier: "default" })
          .then(function (r) { explications[cle] = (r && r.text || "").trim(); $("#cmpCle").innerHTML = "<p>" + esc(explications[cle]).replace(/\n+/g, "</p><p>") + "</p>"; },
            function (e) { go.disabled = false; go.textContent = "Expliquer la différence"; msg.textContent = msgErreur(e); msg.hidden = false; });
      });
    });
  };

  /* ======================================================================
     6. ARBRE « QUELLE INFRACTION ? »
     ====================================================================== */
  var AUSSI = "Vérifie aussi les aggravations : bande organisée, usage de la cryptologie (132-79), lien avec une entreprise terroriste (421-1) ou avec une puissance étrangère (411-12).";
  var ARBRE = {
    depart: { q: "Qu'est-ce que le comportement vise d'abord ?", r: [
      ["Un ordinateur, un serveur, un réseau ou les données qu'il contient", "stad"],
      ["Une personne : sa tranquillité, son intimité, son image, son identité", "pers"],
      ["De l'argent ou un bien", "biens"],
      ["Un mineur", "min"],
      ["Un contenu mis en ligne, ou le rôle d'une plateforme", "cont"],
      ["La vente de choses interdites : drogue, armes, faux papiers, prostitution", "traf"],
      ["Les intérêts de l'État : espionnage, sabotage, terrorisme", { f: ["411-6", "411-9", "421-1", "411-12"], n: "Ces textes s'ajoutent souvent aux atteintes aux STAD : regarde aussi 323-1 à 323-3." }]] },
    stad: { q: "Que s'est-il passé dans le système ?", r: [
      ["Quelqu'un y est entré, ou y est resté, sans en avoir le droit", { f: ["323-1"], n: "Si des données ont été supprimées ou modifiées, ou si le fonctionnement a été altéré, la peine est aggravée (323-1 alinéa 2). " + AUSSI }],
      ["Le système a été bloqué, ralenti ou faussé (déni de service, sabotage)", { f: ["323-2"], n: "Si la vie de personnes a été mise en danger (hôpital, par exemple) : 323-4-2. " + AUSSI }],
      ["Des données ont été introduites, copiées, modifiées ou supprimées", { f: ["323-3"], n: "Souvent cumulé avec l'accès frauduleux (323-1). " + AUSSI }],
      ["Une rançon est réclamée pour rendre les données ou débloquer le système", { f: ["312-1", "323-2", "323-3", "323-1"], n: "Le rançongiciel cumule souvent extorsion et atteintes aux STAD. Si la vie est mise en danger : 323-4-2. " + AUSSI }],
      ["Quelqu'un détient, vend ou diffuse un outil de piratage", { f: ["323-3-1"], n: "Le motif légitime (recherche, sécurité informatique) exclut l'infraction." }],
      ["Plusieurs personnes ont préparé ou mené l'attaque ensemble", { f: ["323-4", "323-4-1"], n: "323-4 réprime la préparation en groupe ; 323-4-1 aggrave les atteintes commises en bande organisée." }],
      ["Un suspect refuse de donner le code de son téléphone chiffré aux enquêteurs", { f: ["434-15-2"], n: "Voir aussi l'acte de mise au clair des données (230-1 CPP)." }]] },
    pers: { q: "Que subit la personne ?", r: [
      ["Des messages ou propos répétés qui dégradent sa vie", "harc"],
      ["Une menace (de mort, de violence…)", "menace"],
      ["Des images ou informations intimes captées, diffusées ou truquées", "intime"],
      ["Quelqu'un se fait passer pour elle", { f: ["226-4-1", "313-1"], n: "Si l'usurpation sert à obtenir de l'argent, l'escroquerie (313-1) s'ajoute." }],
      ["Ses messages, son téléphone ou son ordinateur sont espionnés", { f: ["226-15", "226-3", "323-1"], n: "Le logiciel espion caché sur le téléphone d'un conjoint est un cas classique." }],
      ["Ses informations personnelles sont publiées pour l'exposer à un danger", { f: ["223-1-1"], n: "C'est le « doxing »." }],
      ["On la pousse au suicide", { f: ["223-13"], n: "" }]] },
    harc: { q: "Dans quel cadre ?", r: [
      ["L'auteur est son conjoint, son partenaire ou son ex", { f: ["222-33-2-1"], n: "" }],
      ["La victime est un élève, harcelé dans le cadre scolaire", { f: ["222-33-2-3"], n: "" }],
      ["Autre cadre (réseaux sociaux, travail, inconnus, « raid » en meute)", { f: ["222-33-2-2"], n: "Le harcèlement en meute est réprimé même si chacun n'a agi qu'une fois." }],
      ["Des appels ou messages malveillants répétés, sans dégradation des conditions de vie établie", { f: ["222-16"], n: "" }]] },
    menace: { q: "Qui est visé ?", r: [
      ["Un élu, un policier, un enseignant ou un autre agent public", { f: ["433-3"], n: "" }],
      ["Une autre personne", { f: ["222-17"], n: "La menace de mort est plus lourdement punie ; les mobiles racistes, sexistes ou homophobes aggravent aussi (132-76, 132-77)." }]] },
    intime: { q: "Qu'a-t-on fait de ces images ou informations ?", r: [
      ["On les a diffusées sans son accord", { f: ["226-2-1"], n: "" }],
      ["On les a captées ou enregistrées à son insu", { f: ["226-1"], n: "" }],
      ["On a fabriqué un montage ou un « deepfake »", { f: ["226-8-1", "226-8"], n: "226-8-1 si le contenu est à caractère sexuel, 226-8 sinon." }],
      ["On menace de les diffuser pour obtenir quelque chose (sextorsion)", { f: ["312-10"], n: "" }]] },
    biens: { q: "Comment le bien ou l'argent a-t-il été obtenu ?", r: [
      ["La victime a été trompée et a payé, ou donné ses codes", { f: ["313-1", "226-4-1"], n: "Faux conseiller bancaire, hameçonnage, fausse annonce… Si l'auteur se fait passer pour un tiers, l'usurpation d'identité peut s'ajouter." }],
      ["Par une menace ou une contrainte", "contrainte"],
      ["Sa carte bancaire a été copiée ou utilisée frauduleusement", { f: ["L163-3", "L163-4"], n: "L163-4 vise les outils (skimmers, logiciels de carding)." }],
      ["L'argent d'une infraction est reçu, caché ou converti (mules, crypto-actifs)", "argent"],
      ["Des documents ont été falsifiés (attestations, papiers, factures)", { f: ["441-1", "441-2", "441-7"], n: "441-2 pour les documents administratifs (papiers d'identité, permis), 441-7 pour les attestations." }],
      ["Des copies de logiciels ou de faux produits de marque sont vendus", { f: ["L335-3", "L716-10"], n: "" }]] },
    contrainte: { q: "Sur quoi porte la menace ?", r: [
      ["Révéler quelque chose de gênant ou d'intime", { f: ["312-10"], n: "C'est le chantage, dont la sextorsion." }],
      ["Une violence, ou le blocage de ses données ou de son système", { f: ["312-1"], n: "C'est l'extorsion, dont le rançongiciel." }]] },
    argent: { q: "Qu'a fait la personne de cet argent ?", r: [
      ["Elle l'a caché, transféré ou converti pour en masquer l'origine", { f: ["324-1"], n: "Le blanchiment suppose de savoir que les fonds viennent d'une infraction." }],
      ["Elle l'a simplement reçu ou gardé en sachant d'où il venait", { f: ["321-1"], n: "" }]] },
    min: { q: "Que s'est-il passé ?", r: [
      ["Un adulte fait des propositions sexuelles en ligne à un mineur de moins de 15 ans", { f: ["227-22-1"], n: "" }],
      ["Il lui demande des images à caractère sexuel", { f: ["227-23-1"], n: "" }],
      ["Il l'incite à commettre des actes sexuels", { f: ["227-22-2", "227-22"], n: "" }],
      ["Des images pédopornographiques sont détenues, consultées ou diffusées", { f: ["227-23"], n: "" }],
      ["Un contenu violent ou pornographique lui est accessible", { f: ["227-24"], n: "" }],
      ["Il est harcelé à l'école ou en ligne", { f: ["222-33-2-3", "222-33-2-2"], n: "" }],
      ["On le prostitue ou on recourt à sa prostitution", { f: ["225-12-1", "225-5"], n: "" }]] },
    cont: { q: "De quoi s'agit-il ?", r: [
      ["Apologie du terrorisme ou provocation à des actes terroristes", { f: ["421-2-5"], n: "" }],
      ["Empêcher le retrait ou le blocage d'un contenu terroriste", { f: ["421-2-5-1"], n: "" }],
      ["Signaler faussement un contenu pour le faire retirer", { f: ["lcen-6-vii"], n: "" }],
      ["Un hébergeur ou un fournisseur d'accès ne conserve pas les données d'identification", { f: ["lcen-6-v"], n: "" }],
      ["Une plateforme facilite la vente de produits illicites", { f: ["323-3-2"], n: "" }],
      ["Des données personnelles sont collectées, mal protégées ou divulguées", { f: ["226-18", "226-17", "226-22"], n: "" }]] },
    traf: { q: "Qu'est-ce qui est vendu ou proposé ?", r: [
      ["De la drogue, par messagerie ou réseau social", { f: ["222-37"], n: "Si une plateforme sert d'intermédiaire : 323-3-2." }],
      ["Des armes", { f: ["222-52"], n: "" }],
      ["De faux papiers", { f: ["441-2"], n: "" }],
      ["Des services sexuels (proxénétisme)", { f: ["225-5"], n: "Si la personne est mineure : 225-12-1." }]] }
  };
  V.arbre = function (args) {
    var chemin = (args[0] || "").split(".").filter(Boolean);
    var noeud = ARBRE.depart, etapes = [], feuille = null;
    for (var i = 0; i < chemin.length; i++) {
      var rep = noeud.r[+chemin[i]]; if (!rep) break;
      etapes.push({ q: noeud.q, r: rep[0], lien: chemin.slice(0, i).join(".") });
      if (typeof rep[1] === "string") noeud = ARBRE[rep[1]]; else { feuille = rep[1]; break; }
    }
    var base = chemin.slice(0, etapes.length).join(".");
    api().page('<p class="eyebrow">Apprendre</p><h1>Quelle infraction ?</h1>' +
      '<p class="lead">Réponds aux questions : l\'arbre te mène aux fiches qui correspondent. C\'est une première piste, à confirmer en lisant les fiches.</p>' +
      (etapes.length ? '<ol class="arbre-fil">' + etapes.map(function (e) { return '<li><a href="#/arbre/' + e.lien + '">' + esc(e.q) + "</a> <b>" + esc(e.r) + "</b></li>"; }).join("") + "</ol>" : "") +
      (feuille ? '<h2>Les pistes</h2><div class="grid">' + feuille.f.filter(inf).map(function (id) {
        var f = inf(id); return '<a class="tile" href="#/infraction/' + f.id + '"><span class="k">' + esc(artLabel(f)) + "</span><h3>" + esc(f.titre) + "</h3><p>" + esc(f.peines[0][1]) + "</p></a>";
      }).join("") + "</div>" + (feuille.n ? '<p class="eu-fr">' + esc(feuille.n) + "</p>" : "") +
        '<div class="btns"><a class="btn" href="#/arbre">Recommencer</a>' + (feuille.f.length > 1 && inf(feuille.f[0]) && inf(feuille.f[1]) ? '<a class="btn ghost" href="#/comparer/' + feuille.f[0] + "/" + feuille.f[1] + '">Comparer les deux premières</a>' : "") + "</div>"
        : '<div class="card"><h3>' + esc(noeud.q) + '</h3><div class="options">' + noeud.r.map(function (r, k) { return '<a class="opt" href="#/arbre/' + (base ? base + "." : "") + k + '">' + esc(r[0]) + "</a>"; }).join("") + "</div>" +
          (etapes.length ? '<p class="petit" style="margin-top:12px"><a href="#/arbre/' + etapes[etapes.length - 1].lien + '">← Question précédente</a></p>' : "") + "</div>"));
  };

  /* ======================================================================
     7. LEXIQUE AU SURVOL
     ====================================================================== */
  var lexRegex = null, lexDefs = {};
  function preparerLexique() {
    var L = (window.LEXIQUE || []).filter(function (l) { return l[0] && l[0].length > 2; });
    L.forEach(function (l) { lexDefs[l[0].toLowerCase()] = l[1]; });
    var termes = L.map(function (l) { return l[0]; }).sort(function (a, b) { return b.length - a.length; })
      .map(function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); });
    try { lexRegex = new RegExp("(?<![\\p{L}\\p{N}])(" + termes.join("|") + ")(?![\\p{L}\\p{N}])", "giu"); } catch (e) { lexRegex = null; }
  }
  /* bulle de définition : un seul élément fixé à l'écran, placé près du mot */
  var bulle = null;
  function montrerBulle(span) {
    var d = span.querySelector(".lex-def"); if (!d) return;
    if (!bulle) { bulle = document.createElement("div"); bulle.id = "lexBulle"; bulle.setAttribute("role", "tooltip"); document.body.appendChild(bulle); }
    bulle.textContent = d.textContent; bulle.hidden = false;
    var r = span.getBoundingClientRect(), b = bulle.getBoundingClientRect(), W = document.documentElement.clientWidth;
    var x = Math.min(Math.max(12, r.left + r.width / 2 - b.width / 2), W - b.width - 12);
    var y = r.top - b.height - 8; if (y < 60) y = r.bottom + 8;
    bulle.style.left = x + "px"; bulle.style.top = y + "px";
  }
  function cacherBulle() { if (bulle) bulle.hidden = true; }
  document.addEventListener("mouseover", function (e) { var s = e.target.closest && e.target.closest(".lex"); if (s) montrerBulle(s); });
  document.addEventListener("mouseout", function (e) { var s = e.target.closest && e.target.closest(".lex"); if (s && !s.contains(e.relatedTarget)) cacherBulle(); });
  document.addEventListener("focusin", function (e) { if (e.target.classList && e.target.classList.contains("lex")) montrerBulle(e.target); });
  document.addEventListener("focusout", function (e) { if (e.target.classList && e.target.classList.contains("lex")) cacherBulle(); });
  window.addEventListener("scroll", cacherBulle, { passive: true });
  window.addEventListener("hashchange", cacherBulle);

  window.CP_LEX = {
    annoter: function (racine) {
      if (!racine) return;
      if (!lexRegex) preparerLexique(); if (!lexRegex) return;
      var vus = {}, noeuds = [];
      var w = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT, {
        acceptNode: function (n) {
          var p = n.parentElement;
          if (!p || p.closest("a, button, h1, h2, h3, h4, .chips, .eyebrow, .lex, textarea, select, .corr-pied, .badges")) return NodeFilter.FILTER_REJECT;
          return n.nodeValue.trim().length > 2 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      });
      while (w.nextNode()) noeuds.push(w.currentNode);
      noeuds.forEach(function (n) {
        var txt = n.nodeValue, out = [], i = 0, m;
        lexRegex.lastIndex = 0;
        while ((m = lexRegex.exec(txt))) {
          var cle = m[1].toLowerCase();
          if (vus[cle] || !lexDefs[cle]) continue;
          vus[cle] = 1;
          out.push(document.createTextNode(txt.slice(i, m.index)));
          var s = document.createElement("span");
          s.className = "lex"; s.tabIndex = 0; s.textContent = m[1];
          var d = document.createElement("span"); d.className = "lex-def"; d.setAttribute("role", "tooltip"); d.textContent = lexDefs[cle];
          s.appendChild(d); out.push(s);
          i = m.index + m[1].length;
        }
        if (!out.length) return;
        out.push(document.createTextNode(txt.slice(i)));
        var f = document.createDocumentFragment(); out.forEach(function (x) { f.appendChild(x); });
        n.parentNode.replaceChild(f, n);
      });
    }
  };
})();
;
/* ===== js/features2.js ===== */
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
;
/* ===== js/appareils.js ===== */
/* Cyberpénal — « Sur mes appareils » : l'appli sur le téléphone, la synchronisation, la sauvegarde.
   Deux versions du site existent :
   - la version Claude (claude.ai) : outils de Claude, progression synchronisée par la base de l'artifact ;
   - la version GitHub (kanori-jpg.github.io/cyberpenal) : installable, utilisable sans réseau,
     progression synchronisée par un gist secret du compte GitHub (comme Ivrit !).
   Les deux ne partagent pas leur progression : on passe de l'une à l'autre par un fichier de sauvegarde. */
(function () {
  "use strict";
  var GITHUB_URL = "https://kanori-jpg.github.io/cyberpenal/";
  var CLAUDE_URL = "https://claude.ai/artifact/8eELpQk9FcnKjsDcmD38Kf";
  var V = window.CP_VIEWS = window.CP_VIEWS || {};
  function $(s, r) { return (r || document).querySelector(s); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function api() { return window.CP_API; }
  function S() { return window.CP_SYNC; }
  var LOCAL = /^(localhost|127\.0\.0\.1)$/.test(location.hostname) || location.protocol === "file:";
  var GITHUB = /\.github\.io$/.test(location.hostname);
  var CLAUDE = !!(window.claude && typeof window.claude.use === "function");

  /* ---------- L'appli : service worker (version GitHub seulement) ---------- */
  var swOk = GITHUB && "serviceWorker" in navigator && "caches" in window;
  if (swOk) navigator.serviceWorker.register("sw.js").catch(function () {});
  var invite = null;
  window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); invite = e; majPage(); });
  window.addEventListener("appinstalled", function () { invite = null; majPage(); });
  function installee() { return matchMedia("(display-mode: standalone)").matches || navigator.standalone === true; }
  var iPhone = /iPhone|iPad|iPod/.test(navigator.userAgent);

  /* ---------- Synchronisation par gist (version GitHub) ---------- */
  var KEY_GIST = "cyberpenal.gist", API = "https://api.github.com", FICHIER = "cyberpenal-progression.json";
  function lireConf() { try { return JSON.parse(localStorage.getItem(KEY_GIST) || "{}") || {}; } catch (e) { return {}; } }
  var conf = lireConf();
  function ecrireConf() { try { localStorage.setItem(KEY_GIST, JSON.stringify(conf)); } catch (e) {} }
  function actif() { return !!(conf.token && conf.gistId) && !CLAUDE; }
  function nomAppareil() { return /iPhone|Android.+Mobile/.test(navigator.userAgent) ? "téléphone" : /iPad|Android/.test(navigator.userAgent) ? "tablette" : "ordinateur"; }
  function gh(chemin, options) {
    options = options || {};
    var h = { Authorization: "Bearer " + conf.token, Accept: "application/vnd.github+json" };
    if (options.body) h["Content-Type"] = "application/json";
    return fetch(API + chemin, { method: options.method || "GET", body: options.body, cache: "no-store", headers: h }).then(function (r) {
      if (r.status === 401) { var e = new Error("Le code d'accès n'est plus valable (expiré ou supprimé)."); e.jeton = true; throw e; }
      if (r.status === 404 && chemin.indexOf("/gists/") === 0) throw new Error("Le fichier de synchronisation est introuvable sur GitHub.");
      if (!r.ok) throw new Error("GitHub a répondu " + r.status + ".");
      return r.status === 204 ? null : r.json();
    });
  }
  function contenu() { var i = S().instantane(); return JSON.stringify({ application: "cyberpenal", version: 1, savedAt: Date.now(), appareil: nomAppareil(), data: i.data, t: i.t }); }
  function lireDistant() {
    return gh("/gists/" + conf.gistId).then(function (g) {
      var f = g.files && g.files[FICHIER]; if (!f) return null;
      var p = f.truncated ? fetch(f.raw_url, { cache: "no-store" }).then(function (r) { return r.text(); }) : Promise.resolve(f.content);
      return p.then(function (t) { try { return JSON.parse(t); } catch (e) { return null; } });
    });
  }
  var enCours = null;
  function synchroniser() {
    if (!actif()) return Promise.resolve();
    if (enCours) return enCours;
    enCours = lireDistant().then(function (d) {
      if (d && d.data) S().fusionnerDans(d.data, d.t);
      var c = contenu();
      if (d && d.data && JSON.stringify(d.data) === JSON.stringify(JSON.parse(c).data)) return null;
      var files = {}; files[FICHIER] = { content: c };
      return gh("/gists/" + conf.gistId, { method: "PATCH", body: JSON.stringify({ files: files }) });
    }).then(function () { conf.dernier = Date.now(); conf.erreur = null; conf.jetonInvalide = false; },
      function (e) { conf.erreur = e.message || "La synchronisation n'a pas marché."; if (e.jeton) conf.jetonInvalide = true; })
      .then(function () { ecrireConf(); enCours = null; etatMenu(); majPage(); });
    return enCours;
  }
  /* changements locaux : envoi quelques secondes plus tard */
  var vu = {}, minuteur = null;
  function cles() { return (S() && S().CLES) || []; }
  function surveiller() {
    cles().forEach(function (k) { vu[k] = localStorage.getItem(k); });
    setInterval(function () {
      if (!actif()) return;
      var change = false, temps = {};
      try { temps = JSON.parse(localStorage.getItem(S().KEY_T) || "{}") || {}; } catch (e) {}
      cles().forEach(function (k) { var s = localStorage.getItem(k); if (s !== vu[k]) { vu[k] = s; temps[k] = Date.now(); change = true; } });
      if (change) { try { localStorage.setItem(S().KEY_T, JSON.stringify(temps)); } catch (e) {} clearTimeout(minuteur); minuteur = setTimeout(synchroniser, 4000); }
    }, 3000);
  }
  var cacheeDepuis = 0;
  document.addEventListener("visibilitychange", function () {
    if (!actif()) return;
    if (document.visibilityState === "hidden") { cacheeDepuis = Date.now(); if (minuteur) { clearTimeout(minuteur); minuteur = null; synchroniser(); } }
    else if (Date.now() - cacheeDepuis > 30000) synchroniser();
  });
  function connecter(jeton) {
    conf = { token: jeton.trim() };
    return fetch(API + "/user", { headers: { Authorization: "Bearer " + conf.token, Accept: "application/vnd.github+json" }, cache: "no-store" }).then(function (r) {
      if (!r.ok) { conf = {}; throw new Error("GitHub n'accepte pas ce code : vérifie que tu l'as copié en entier."); }
      var portees = r.headers.get("x-oauth-scopes");
      if (portees !== null && portees.split(",").map(function (s) { return s.trim(); }).indexOf("gist") < 0) { conf = {}; throw new Error("Ce code n'a pas la permission « gist » : coche la case « gist » en le créant."); }
      return r.json();
    }).then(function (u) {
      conf.login = u.login;
      var id = null, page = 1;
      function chercher() {
        if (id || page > 5) return Promise.resolve();
        return gh("/gists?per_page=100&page=" + page).then(function (l) {
          if (!l.length) { page = 99; return; }
          var g = l.filter(function (x) { return x.files && x.files[FICHIER]; })[0]; if (g) id = g.id; page++; return chercher();
        });
      }
      return chercher().then(function () {
        if (id) return id;
        var files = {}; files[FICHIER] = { content: contenu() };
        return gh("/gists", { method: "POST", body: JSON.stringify({ description: "Cyberpénal — ma progression (synchronisation entre appareils)", public: false, files: files }) }).then(function (g) { return g.id; });
      });
    }).then(function (id) { conf.gistId = id; ecrireConf(); return synchroniser(); });
  }
  function deconnecter() { conf = {}; ecrireConf(); etatMenu(); majPage(); }
  function ilYa(t) { var m = Math.round((Date.now() - t) / 60000); return m < 1 ? "à l'instant" : m < 60 ? "il y a " + m + " min" : m < 1440 ? "il y a " + Math.round(m / 60) + " h" : "il y a " + Math.round(m / 1440) + " j"; }
  function etatMenu() {
    if (CLAUDE) return;
    var z = $("#syncEtat"); if (!z) return;
    z.textContent = actif() ? (conf.erreur ? "Synchronisation impossible pour l'instant" : conf.dernier ? "✓ Synchronisé entre tes appareils" : "Synchronisation…") : "";
  }

  /* ---------- Sauvegarde dans un fichier (les deux versions) ---------- */
  function exporter(bouton) {
    var texte = contenu(), nom = "cyberpenal-progression-" + new Date().toISOString().slice(0, 10) + ".json";
    var fin = function (ok) { bouton.textContent = ok ? "Fichier enregistré ✓" : "Le fichier n'a pas pu être enregistré"; setTimeout(function () { bouton.textContent = "Enregistrer ma progression dans un fichier"; }, 3000); };
    if (CLAUDE) {
      window.claude.use("downloads").then(function (d) {
        if (!d) return fin(false);
        return d.save({ filename: nom, data: new Blob([texte], { type: "application/json" }) }).then(function () { fin(true); }, function () { fin(false); });
      }).catch(function () { fin(false); });
      return;
    }
    var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([texte], { type: "application/json" })); a.download = nom;
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000); fin(true);
  }
  function importer(fichier, msg) {
    var r = new FileReader();
    r.onload = function () {
      var d = null; try { d = JSON.parse(r.result); } catch (e) {}
      if (!d || d.application !== "cyberpenal" || !d.data) { msg.textContent = "Ce fichier n'est pas une sauvegarde de Cyberpénal."; return; }
      var change = S().fusionnerDans(d.data, d.t);
      msg.textContent = change ? "Progression fusionnée : ce que tu avais ici est gardé, ce qui venait du fichier est ajouté." : "Rien de nouveau dans ce fichier : tu avais déjà tout ici.";
      if (actif()) synchroniser();
    };
    r.readAsText(fichier);
  }

  /* ---------- La page ---------- */
  function blocAppli() {
    if (!GITHUB) return '<div class="card"><h3>L\'appli sur ton téléphone</h3><p>Cyberpénal existe aussi en version installable, qui marche même sans réseau : <a href="' + GITHUB_URL + '" target="_blank" rel="noopener">kanori-jpg.github.io/cyberpenal</a>. Ouvre-la sur ton téléphone, puis ajoute-la à l\'écran d\'accueil.</p>' +
      '<p class="petit">Les outils qui passent par Claude (défi du jour, jeux créés, Mes questions, atelier, audition, import de documents) ne marchent que dans la version Claude. Les deux versions ont chacune leur progression : passe de l\'une à l\'autre avec la sauvegarde dans un fichier, plus bas.</p></div>';
    if (!swOk) return '<div class="card"><h3>L\'appli sur ton téléphone</h3><p>Ce navigateur ne permet pas d\'installer le site. Essaie avec Chrome, Edge ou Safari.</p></div>';
    return '<div class="card"><h3>L\'appli sur ton téléphone</h3>' +
      (installee() ? "<p><b>✓ Cyberpénal est installée comme une appli sur cet appareil.</b></p>"
        : invite ? '<p>Ajoute Cyberpénal à ton écran d\'accueil : elle s\'ouvrira en plein écran, comme une appli.</p><p><button class="btn" id="appInstaller">Installer l\'appli</button></p>'
        : iPhone ? "<p>Pour l'installer : touche <b>Partager</b> (le carré avec une flèche), puis <b>Sur l'écran d'accueil</b>.</p>"
        : "<p>Pour l'installer : ouvre le menu du navigateur <b>⋮</b>, puis <b>Ajouter à l'écran d'accueil</b> (ou <b>Installer l'application</b>).</p>") +
      '<p class="petit">Les pages marchent sans réseau dès la deuxième ouverture. Les outils qui passent par Claude restent dans la <a href="' + CLAUDE_URL + '" target="_blank" rel="noopener">version Claude</a>.</p></div>';
  }
  function blocSync() {
    if (CLAUDE) return '<div class="card"><h3>Synchronisation</h3><p>' + (S() && S().claude() ? "✓ Dans la version Claude, ta progression se synchronise toute seule entre tes appareils." : "Dans la version Claude, ta progression se synchronise toute seule entre tes appareils dès que tu es connectée.") + "</p></div>";
    if (LOCAL) return '<div class="card"><h3>Synchronisation</h3><p class="petit">Cette copie, lancée depuis ton ordinateur, garde sa propre progression. La synchronisation se règle dans la <a href="' + GITHUB_URL + '" target="_blank" rel="noopener">version GitHub</a>.</p></div>';
    if (!actif()) return '<div class="card"><h3>Synchronisation entre mes appareils</h3><p>Ta progression passe toute seule d\'un appareil à l\'autre grâce à ton compte GitHub, comme pour Ivrit. À faire une fois sur chaque appareil :</p>' +
      '<ol><li>Ouvre <a href="https://github.com/settings/tokens/new?scopes=gist&description=Cyberp%C3%A9nal%20synchronisation" target="_blank" rel="noopener">cette page GitHub</a> (connecte-toi si besoin).</li>' +
      "<li>« Expiration » : choisis <b>No expiration</b> (ou 1 an). Ne coche rien d'autre que <b>gist</b>, déjà cochée.</li>" +
      "<li>Tout en bas, clique <b>Generate token</b>, puis copie le code qui commence par <b>ghp_</b>.</li><li>Colle-le ici :</li></ol>" +
      '<div class="row"><input type="password" id="ghJeton" placeholder="ghp_…" autocomplete="off" spellcheck="false" aria-label="Code d\'accès GitHub"><button class="btn" id="ghGo">Connecter cet appareil</button></div>' +
      '<p class="petit" id="ghMsg">Ce code reste dans ce navigateur : il n\'est ni dans ta progression, ni dans les fichiers de sauvegarde. Il ne sert qu\'à lire et écrire tes gists. Si tu as déjà un code pour Ivrit, tu peux réutiliser le même.</p></div>';
    var etat = conf.erreur ? "⚠ " + esc(conf.erreur) + (conf.jetonInvalide ? " Déconnecte cet appareil, puis reconnecte-le avec un nouveau code." : " Nouvel essai à la prochaine modification.")
      : conf.dernier ? "✓ Synchronisée " + ilYa(conf.dernier) + "." : "Première synchronisation…";
    return '<div class="card"><h3>Synchronisation entre mes appareils</h3><p><b>' + etat + '</b></p><p class="petit">Cet appareil (' + nomAppareil() + ") est relié au compte GitHub <b>" + esc(conf.login || "") + "</b>. Ta progression s'envoie quelques secondes après chaque changement, et se met à jour quand tu ouvres le site.</p>" +
      '<div class="row"><button class="btn" id="ghNow">Synchroniser maintenant</button><button class="btn ghost" id="ghOff">Déconnecter cet appareil</button></div></div>';
  }
  function blocFichier() {
    return '<div class="card"><h3>Sauvegarde dans un fichier</h3><p>Pour garder une copie de ta progression, ou la passer de la version Claude à la version GitHub (et inversement). À l\'import, rien n\'est écrasé : les deux progressions sont fusionnées.</p>' +
      '<div class="row"><button class="btn" id="fExport">Enregistrer ma progression dans un fichier</button><label class="btn ghost" for="fImport">Importer un fichier</label><input type="file" id="fImport" accept=".json,application/json" hidden></div><p class="petit" id="fMsg"></p></div>';
  }
  function majPage() {
    if (!$("#appareilsPage")) return;
    $("#appareilsPage").innerHTML = blocAppli() + blocSync() + blocFichier();
    var b = $("#appInstaller"); if (b) b.addEventListener("click", function () { var e = invite; invite = null; if (e) { e.prompt(); e.userChoice.then(majPage, majPage); } });
    var go = $("#ghGo"); if (go) go.addEventListener("click", function () {
      var j = $("#ghJeton").value.trim(); if (!j) return;
      go.disabled = true; $("#ghMsg").textContent = "Connexion à GitHub…";
      connecter(j).then(majPage, function (e) { $("#ghMsg").textContent = "⚠ " + e.message; go.disabled = false; });
    });
    var now = $("#ghNow"); if (now) now.addEventListener("click", function () { now.disabled = true; synchroniser(); });
    var off = $("#ghOff"); if (off) off.addEventListener("click", deconnecter);
    $("#fExport").addEventListener("click", function (e) { exporter(e.currentTarget); });
    $("#fImport").addEventListener("change", function (e) { var f = e.target.files[0]; if (f) importer(f, $("#fMsg")); e.target.value = ""; });
  }
  V.appareils = function () {
    api().page('<p class="eyebrow">Mes outils</p><h1>Sur mes appareils</h1><p class="lead">Installer Cyberpénal sur ton téléphone, retrouver ta progression partout, et en garder une copie.</p><div id="appareilsPage"></div>');
    majPage();
  };

  /* au démarrage (après le chargement des autres modules) */
  window.addEventListener("load", function () {
    if (CLAUDE || !S()) return;
    surveiller(); etatMenu();
    if (actif()) synchroniser();
  });
})();
;
/* ===== js/jeux.js ===== */
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
;
/* ===== js/pdf.js ===== */
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
;
/* ===== js/perso.js ===== */
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
;
/* ===== js/tester.js ===== */
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
;
/* ===== js/questions.js ===== */
/* Mes questions — un endroit pour poser ses questions de droit pénal du numérique et garder les réponses.
   En ligne : conversations enregistrées dans la base de l'artifact (donc retrouvées sur tous
   tes appareils) et réponses de Claude. En local : enregistrement dans le navigateur, sans réponses. */
(function () {
  "use strict";

  var KEY = "cyberpenal.questions.v1";
  var COLL = "questions";
  var MAX_TOURS = 24;      // on garde les derniers échanges d'un fil

  var cap = { sample: null, db: null };
  var fils = [];           // conversations, la plus récente d'abord
  var courant = null;      // fil ouvert
  var ctrl = null, enCours = false, etat = "", filtre = false;
  var fileEcriture = Promise.resolve();

  var SUGGESTIONS = [
    "Quelle différence entre accès et maintien frauduleux ?",
    "Comment qualifier une attaque par rançongiciel ?",
    "Un enquêteur peut-il se faire passer pour un mineur en ligne ?",
    "Quand peut-on obtenir une adresse IP auprès d'un opérateur ?",
    "Qu'est-ce qui change avec le règlement e-evidence ?",
    "Que fait concrètement un enquêteur cyber pendant une perquisition ?"
  ];

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function uid() { return "q" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function maintenant() { return new Date().toISOString(); }
  function jour(iso) {
    try { return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }); }
    catch (e) { return ""; }
  }
  function actif() { return !!document.getElementById("qPage"); }

  /* ---------- Ce que le site contient, en résumé, pour situer les réponses ---------- */
  var RESUME = null;
  function resumeDuSite() {
    if (RESUME) return RESUME;
    var l = ["Ce que cette personne a déjà à sa disposition sur son site de révision :"];
    l.push("\nLes leçons et leurs points clés :");
    COURS.forEach(function (c) {
      l.push("— " + c.titre + " : " + (c.retenir || []).slice(0, 3).join(" ; "));
    });
    l.push("\nLes infractions résumées sur le site (version Légifrance du 19 novembre 2026), avec leur peine de base :");
    INFRACTIONS.forEach(function (f) { l.push("- " + f.art + " : " + f.titre + " — " + f.peines[0][1]); });
    l.push("\nElle dispose aussi de fiches sur les actes d'enquête (CPP), de résumés de jurisprudence, d'une page sur le droit européen, d'un guide pour les victimes, de cas pratiques et d'un lexique.");
    RESUME = l.join("\n");
    return RESUME;
  }

  function consigne() {
    return "Tu réponds aux questions d'une personne qui prépare un stage dans un service qui lutte contre la " +
      "cybercriminalité, en France. Tu es un juriste pédagogue, spécialiste du droit pénal du numérique et de la " +
      "procédure pénale : précis, clair, qui prend ses questions au sérieux.\n\n" +
      "Comment tu réponds :\n" +
      "- En français, en la tutoyant, simplement, sans jargon. Si tu emploies un mot technique, tu l'expliques.\n" +
      "- Court : 5 à 12 lignes. Pas de longue dissertation, pas de titres. Des paragraphes courts.\n" +
      "- Tu distingues clairement ce que dit le texte, ce qu'en dit la jurisprudence, et ce qui reste discuté.\n" +
      "- Tu cites les articles (Code pénal, CPP, LCEN, textes européens) quand c'est utile, mais si tu n'es pas " +
      "sûr d'un numéro, d'une peine ou d'une date, tu le dis plutôt que d'inventer. Le droit change souvent : " +
      "invite à vérifier sur Légifrance pour tout point précis. Le Code de procédure pénale sera renuméroté au 1er janvier 2029.\n" +
      "- Tu ne fais pas semblant de tout savoir : devant une question difficile ou discutée, tu le reconnais.\n" +
      "- Tu ne donnes jamais de mode d'emploi pour commettre une infraction ou contourner une enquête ; tu restes " +
      "sur le droit, la procédure et le fonctionnement général des menaces.\n" +
      "- Si elle décrit une situation où elle est elle-même victime, tu l'orientes vers le dépôt de plainte, " +
      "PHAROS ou cybermalveillance.gouv.fr, et tu lui conseilles un professionnel du droit pour un avis personnel.\n" +
      "- Tu termines parfois, quand c'est naturel, par une question ou une piste pour aller plus loin. " +
      "Jamais systématiquement.\n\n" +
      resumeDuSite() + "\n\n" +
      "Tu peux faire le lien avec ce qu'elle a déjà vu (« tu as vu ça dans la leçon sur… »), mais tu n'es " +
      "pas limité à ce contenu : réponds à sa vraie question.";
  }

  /* ---------- Stockage ---------- */
  function lireLocal() {
    try { return JSON.parse(localStorage.getItem(KEY) || "[]") || []; } catch (e) { return []; }
  }
  function ecrireLocal() {
    try { localStorage.setItem(KEY, JSON.stringify(fils)); } catch (e) {}
  }

  function trier() {
    fils.sort(function (a, b) { return (b.modifie || b.cree || "").localeCompare(a.modifie || a.cree || ""); });
  }

  function enregistrerFil(fil) {
    fil.modifie = maintenant();
    trier();
    if (!cap.db) { ecrireLocal(); return Promise.resolve(); }
    var corps = {};
    Object.keys(fil).forEach(function (k) { if (k !== "id") corps[k] = fil[k]; });
    fileEcriture = fileEcriture.then(function () {
      return cap.db.collection(COLL).doc(fil.id).set(corps);
    }).catch(function () {
      etat = "erreur";
      if (actif()) majEtat();
    });
    return fileEcriture;
  }

  function supprimerFil(fil) {
    fils = fils.filter(function (f) { return f.id !== fil.id; });
    if (courant && courant.id === fil.id) courant = null;
    if (!cap.db) { ecrireLocal(); rendre(); return; }
    fileEcriture = fileEcriture.then(function () {
      return cap.db.collection(COLL).doc(fil.id).delete();
    }).catch(function () {});
    rendre();
  }

  function charger() {
    if (!cap.db) { fils = lireLocal(); trier(); etat = ""; return Promise.resolve(); }
    etat = "chargement";
    return cap.db.collection(COLL).limit(300).get().then(function (snap) {
      fils = snap.docs.map(function (d) {
        var o = d.data() || {};
        var f = {};
        /* on recopie tout ce qui est stocké, pour ne rien perdre */
        Object.keys(o).forEach(function (k) { f[k] = o[k]; });
        f.id = d.id;
        if (!Array.isArray(f.messages)) f.messages = [];
        return f;
      });
      trier();
      etat = "";
    }).catch(function () {
      etat = "erreur"; fils = lireLocal(); trier();
    });
  }

  /* ---------- Capacités ---------- */
  function init() {
    if (!window.claude || typeof window.claude.use !== "function") { fils = lireLocal(); trier(); return; }
    etat = "chargement";
    Promise.all([
      window.claude.use("sample").catch(function () { return null; }),
      window.claude.use("db").catch(function () { return null; })
    ]).then(function (r) {
      cap.sample = r[0]; cap.db = r[1];
      return charger();
    }).then(function () {
      if (actif()) rendre();
    }, function () { if (actif()) rendre(); });
  }

  /* ---------- Page ---------- */
  function html() {
    return '<p class="eyebrow"><a href="#/accueil">Accueil</a> · Mes questions</p>' +
      "<h1>Mes questions</h1>" +
      '<p class="lead">Pose ici tes questions de droit et de procédure, même celles qui te semblent simples. Chaque échange est gardé pour que tu puisses le relire, et tu peux marquer celles que tu veux poser à ton maître de stage.</p>' +
      '<div id="qPage"></div>';
  }

  function majEtat() {
    var e = $("#qEtat"); if (!e) return;
    var t = "";
    if (etat === "chargement") t = "Chargement de tes questions…";
    else if (etat === "erreur") t = "L'espace en ligne n'a pas répondu : tes questions sont enregistrées sur cet appareil uniquement.";
    else if (!cap.sample) t = "Les réponses ont besoin de Claude : ouvre la version Claude du site (sur claude.ai). Tu peux déjà écrire tes questions ici, elles seront gardées.";
    else if (cap.db) t = "✓ Enregistré en ligne : tu retrouves ces échanges sur ton téléphone et sur ton ordinateur.";
    else t = "Enregistré dans ce navigateur, sur cet appareil.";
    e.textContent = t;
    e.className = "perso-etat" + (etat === "erreur" || !cap.sample ? " attention" : (cap.db && !etat ? " ok" : ""));
  }

  function rendre() {
    var z = $("#qPage"); if (!z) return;
    z.innerHTML = courant ? vueFil() : vueListe();
    majEtat();
    courant ? brancherFil() : brancherListe();
  }

  /* --- Liste des conversations --- */
  function vueListe() {
    var marquees = fils.filter(function (f) { return f.aDemander; }).length;
    var vus = filtre ? fils.filter(function (f) { return f.aDemander; }) : fils;

    return '<section class="q-poser card">' +
      "<h3>Quelle est ta question ?</h3>" +
      '<textarea id="qNouvelle" rows="3" placeholder="Écris ta question, même si elle te semble naïve ou compliquée…"></textarea>' +
      '<div class="row" style="margin-top:12px"><button class="btn" id="qEnvoyer">Poser la question</button></div>' +
      '<p class="petit" style="margin-top:14px">Ou pars d\'une de celles-ci :</p>' +
      '<div class="q-suggestions">' + SUGGESTIONS.map(function (s) {
        return '<button class="q-suggestion" data-s="' + esc(s) + '">' + esc(s) + "</button>";
      }).join("") + "</div>" +
      '<p class="jeu-msg" id="qMsg" hidden></p>' +
      "</section>" +
      '<p class="perso-etat" id="qEtat"></p>' +

      (fils.length
        ? '<div class="q-entete"><h2>Mes échanges</h2>' +
          (marquees ? '<button class="btn ghost small" id="qFiltre">' +
            (filtre ? "Tout afficher" : "À demander (" + marquees + ")") + "</button>" : "") + "</div>" +
          '<div class="q-liste">' + vus.map(function (f) {
            var dernier = f.messages && f.messages.length ? f.messages[f.messages.length - 1] : null;
            return '<article class="q-fil card" data-id="' + esc(f.id) + '">' +
              '<div class="q-fil-tete"><h3>' + esc(f.titre || "Question") + "</h3>" +
              (f.aDemander ? '<span class="pill essentiel">À demander</span>' : "") + "</div>" +
              '<p class="petit">' + esc(jour(f.cree)) + " · " +
              Math.ceil((f.messages || []).length / 2) + " question" + (Math.ceil((f.messages || []).length / 2) > 1 ? "s" : "") + "</p>" +
              (dernier ? '<p class="q-apercu">' + esc(dernier.t.slice(0, 160)) + (dernier.t.length > 160 ? "…" : "") + "</p>" : "") +
              '<div class="row"><button class="btn ghost small" data-act="ouvrir">Relire et continuer</button>' +
              '<button class="btn ghost small" data-act="marquer">' + (f.aDemander ? "Ne plus marquer" : "À demander en stage") + "</button>" +
              '<button class="btn ghost small" data-act="supprimer">Supprimer</button></div>' +
              "</article>";
          }).join("") + "</div>"
        : '<p class="petit">Tes échanges apparaîtront ici, du plus récent au plus ancien.</p>');
  }

  function brancherListe() {
    var champ = $("#qNouvelle");
    $("#qEnvoyer").addEventListener("click", function () { demarrer(champ.value); });
    champ.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); demarrer(champ.value); }
    });
    $$(".q-suggestion").forEach(function (b) {
      b.addEventListener("click", function () { demarrer(b.dataset.s); });
    });
    var f = $("#qFiltre");
    if (f) f.addEventListener("click", function () { filtre = !filtre; rendre(); });

    $$(".q-fil").forEach(function (el) {
      var fil = fils.filter(function (x) { return x.id === el.dataset.id; })[0];
      if (!fil) return;
      $$("[data-act]", el).forEach(function (b) {
        b.addEventListener("click", function () {
          if (b.dataset.act === "ouvrir") { courant = fil; rendre(); }
          else if (b.dataset.act === "marquer") { fil.aDemander = !fil.aDemander; enregistrerFil(fil); rendre(); }
          else if (b.dataset.sur) supprimerFil(fil);
          else { b.dataset.sur = "1"; b.textContent = "Confirmer la suppression"; }
        });
      });
    });
  }

  /* --- Un fil ouvert --- */
  function vueFil() {
    return '<section class="q-fil-ouvert card">' +
      '<div class="jeu-tete"><button class="btn ghost small" id="qRetour">← Toutes mes questions</button>' +
      '<span class="jeu-score"></span>' +
      '<button class="btn ghost small" id="qMarquer">' + (courant.aDemander ? "✓ À demander" : "À demander en stage") + "</button></div>" +
      '<h3 class="q-titre">' + esc(courant.titre || "Question") + "</h3>" +
      '<div class="chat-fil q-fil-messages" id="qMessages"></div>' +
      '<div class="chat-saisie">' +
      '<textarea id="qSuite" rows="3" placeholder="Poser une autre question, ou demander une précision…"></textarea>' +
      '<div class="row" style="margin-top:10px"><button class="btn" id="qSuiteEnvoyer">Envoyer</button>' +
      '<button class="btn ghost" id="qStop" hidden>Arrêter</button></div>' +
      "</div></section>" +
      '<p class="perso-etat" id="qEtat"></p>';
  }

  function brancherFil() {
    rendreMessages();
    $("#qRetour").addEventListener("click", function () {
      if (ctrl) { ctrl.abort(); ctrl = null; }
      enCours = false; courant = null; rendre();
    });
    $("#qMarquer").addEventListener("click", function () {
      courant.aDemander = !courant.aDemander;
      enregistrerFil(courant);
      $("#qMarquer").textContent = courant.aDemander ? "✓ À demander" : "À demander en stage";
    });
    $("#qSuiteEnvoyer").addEventListener("click", function () { envoyer($("#qSuite").value); });
    $("#qStop").addEventListener("click", function () { if (ctrl) ctrl.abort(); });
    $("#qSuite").addEventListener("keydown", function (e) {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); envoyer($("#qSuite").value); }
    });
  }

  function rendreMessages() {
    var z = $("#qMessages"); if (!z) return;
    z.innerHTML = (courant.messages || []).map(function (m) {
      return '<div class="chat-msg ' + (m.r === "moi" ? "moi" : "claude") + '">' + esc(m.t) + "</div>";
    }).join("");
    z.scrollTop = z.scrollHeight;
  }

  /* ---------- Poser une question ---------- */
  function demarrer(texte) {
    texte = (texte || "").trim();
    var msg = $("#qMsg");
    if (!texte) { msg.textContent = "Écris d'abord ta question."; msg.hidden = false; $("#qNouvelle").focus(); return; }
    courant = {
      id: uid(),
      titre: texte.length > 80 ? texte.slice(0, 80) + "…" : texte,
      messages: [{ r: "moi", t: texte }],
      aDemander: false,
      cree: maintenant(), modifie: maintenant()
    };
    fils.unshift(courant);
    rendre();
    repondre();
  }

  function envoyer(texte) {
    if (enCours) return;
    texte = (texte || "").trim();
    if (!texte) { $("#qSuite").focus(); return; }
    courant.messages.push({ r: "moi", t: texte });
    $("#qSuite").value = "";
    rendreMessages();
    repondre();
  }

  function repondre() {
    if (!cap.sample) {
      enregistrerFil(courant);
      var z = $("#qMessages");
      if (z) {
        var d = document.createElement("div");
        d.className = "chat-msg info";
        d.textContent = "Ta question est gardée. Ouvre la version Claude du site (sur claude.ai) pour avoir la réponse de Claude.";
        z.appendChild(d);
        z.scrollTop = z.scrollHeight;
      }
      return;
    }
    enCours = true;
    $("#qSuiteEnvoyer").disabled = true;
    $("#qStop").hidden = false;

    var z = $("#qMessages");
    var bulle = document.createElement("div");
    bulle.className = "chat-msg claude";
    bulle.textContent = "…";
    z.appendChild(bulle);
    z.scrollTop = z.scrollHeight;

    var tours = [{ role: "user", content: consigne() }];
    var recents = courant.messages.slice(-MAX_TOURS);
    recents.forEach(function (m) {
      tours.push({ role: m.r === "moi" ? "user" : "assistant", content: m.t });
    });

    ctrl = new AbortController();
    cap.sample(tours, {
      modelTier: "default",
      cache: false,
      signal: ctrl.signal,
      onText: function (u) { bulle.textContent = u.text; z.scrollTop = z.scrollHeight; }
    }).then(function (res) {
      bulle.textContent = res.text;
      courant.messages.push({ r: "claude", t: res.text });
      finTour();
      enregistrerFil(courant);
      var s = $("#qSuite"); if (s) s.focus();
    }).catch(function (e) {
      var code = e && e.code;
      if (e && e.text) {
        bulle.textContent = e.text;
        courant.messages.push({ r: "claude", t: e.text });
      } else {
        bulle.remove();
      }
      var m = {
        cancelled: "Réponse arrêtée. Tu peux reposer ta question.",
        not_granted: "Tu n'as pas autorisé ce site à utiliser Claude. Recharge la page pour qu'il te le redemande.",
        sampling_disabled: "Claude n'est pas disponible sur ce compte.",
        rate_limited: "Trop de demandes d'un coup, ou ta limite d'usage est atteinte. Réessaie un peu plus tard.",
        session_expired: "Ta session a expiré : reconnecte-toi puis réessaie.",
        refused: "Claude n'a pas pu répondre à cette question.",
        prompt_too_large: "Cet échange est devenu très long. Repars sur une nouvelle question."
      };
      var info = document.createElement("div");
      info.className = "chat-msg info";
      info.textContent = m[code] || "La réponse n'est pas arrivée. Ta question est gardée : réessaie.";
      z.appendChild(info);
      z.scrollTop = z.scrollHeight;
      finTour();
      enregistrerFil(courant);
    });
  }

  function finTour() {
    enCours = false; ctrl = null;
    var b = $("#qSuiteEnvoyer"), s = $("#qStop");
    if (b) b.disabled = false;
    if (s) s.hidden = true;
  }

  function after() { rendre(); }

  window.QUESTIONS = { html: html, after: after };
  init();
})();
;
/* ===== js/app.js ===== */
/* Cyberpénal — application (routage, progression, pages). */
(function () {
  "use strict";

  /* ============ Stockage local (progression, jamais écrasée) ============ */
  var KEY = "cyberpenal.v1";
  var DEFAULTS = { lecons: {}, cas: {}, quiz: {}, vues: {}, notes: "", theme: "auto", skin: "neon", taille: 0, lisible: false };
  var state = load();
  function load() {
    var s = {};
    try { s = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { s = {}; }
    var out = {};
    Object.keys(DEFAULTS).forEach(function (k) {
      out[k] = s[k] !== undefined ? s[k] : (typeof DEFAULTS[k] === "object" ? {} : DEFAULTS[k]);
    });
    /* on garde aussi toute clé inconnue, pour ne rien perdre */
    Object.keys(s).forEach(function (k) { if (out[k] === undefined) out[k] = s[k]; });
    return out;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

  /* ============ Utilitaires ============ */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function norm(s) { return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  var INF = window.INFRACTIONS, COURS = window.COURS, PARTIES = window.PARTIES, THEMES = window.THEMES, CAS = window.CAS;
  var CIT = window.CITATIONS || {};
  function trouve(liste, id) { for (var i = 0; i < liste.length; i++) if (liste[i].id === id) return liste[i]; return null; }
  function inf(id) { return trouve(INF, id); }
  function theme(id) { return trouve(THEMES, id) || THEMES[0]; }
  function artLabel(f) { return f.code === "Code pénal" ? "art. " + f.art : f.art; }
  function chip(id) { var f = inf(id); return f ? '<a class="chip" href="#/infraction/' + f.id + '">' + esc(artLabel(f)) + "</a>" : ""; }
  var main = $("#main");
  function page(html) { main.innerHTML = html; }

  /* ============ Habillages ============ */
  /* « Deux ambiances » : accueil et entraînement en sombre, pages de lecture en clair. */
  var SKINS = ["neon", "cyber", "nuit", "duo", "biseau"];
  var DUO_SOMBRE = { accueil: 1, tester: 1 };
  var pageCourante = "accueil";
  function applyTheme() {
    if (SKINS.indexOf(state.skin) < 0) state.skin = "neon";
    var r = document.documentElement;
    r.removeAttribute("data-theme");
    r.setAttribute("data-skin", state.skin);
    r.setAttribute("data-look", state.skin === "duo" ? (DUO_SOMBRE[pageCourante] ? "cyberviolet" : "magclair") : state.skin);
    $$("#skinMenu [data-skin]").forEach(function (b) { b.setAttribute("aria-checked", b.dataset.skin === state.skin ? "true" : "false"); });
    var tl = Math.max(-1, Math.min(3, +state.taille || 0));
    r.setAttribute("data-taille", String(tl));
    if (window.CP_FONTS) window.CP_FONTS(state.skin, state.lisible);
    if (state.lisible) r.setAttribute("data-lisible", ""); else r.removeAttribute("data-lisible");
    var lb = $("#lisibleBtn"); if (lb) lb.setAttribute("aria-checked", state.lisible ? "true" : "false");
    var tv = $("#tailleVal"); if (tv) tv.textContent = ["90 %", "100 %", "112 %", "125 %", "140 %"][tl + 1];
  }
  applyTheme();
  var skinBtn = $("#themeBtn"), skinMenu = $("#skinMenu");
  function skinOpen(open) { skinMenu.hidden = !open; skinBtn.setAttribute("aria-expanded", open ? "true" : "false"); }
  skinBtn.addEventListener("click", function (e) { e.stopPropagation(); skinOpen(skinMenu.hidden); });
  $$("#skinMenu [data-skin]").forEach(function (b) {
    b.addEventListener("click", function () { state.skin = b.dataset.skin; save(); applyTheme(); skinOpen(false); });
  });
  document.addEventListener("click", function (e) { if (!skinMenu.hidden && !skinMenu.contains(e.target)) skinOpen(false); });
  $("#tailleMoins").addEventListener("click", function (e) { e.stopPropagation(); state.taille = Math.max(-1, (+state.taille || 0) - 1); save(); applyTheme(); });
  $("#taillePlus").addEventListener("click", function (e) { e.stopPropagation(); state.taille = Math.min(3, (+state.taille || 0) + 1); save(); applyTheme(); });
  $("#lisibleBtn").addEventListener("click", function (e) { e.stopPropagation(); state.lisible = !state.lisible; save(); applyTheme(); });
  applyTheme();
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !skinMenu.hidden) { skinOpen(false); skinBtn.focus(); } });

  /* ============ Menu mobile ============ */
  var sidebar = $("#sidebar"), scrim = $("#scrim"), menuBtn = $("#menuBtn");
  function menu(open) { sidebar.classList.toggle("open", open); scrim.classList.toggle("open", open); menuBtn.setAttribute("aria-expanded", open ? "true" : "false"); }
  menuBtn.addEventListener("click", function () { menu(!sidebar.classList.contains("open")); });
  scrim.addEventListener("click", function () { menu(false); });

  /* ============ PDF ============ */
  function boutonPdf(id, label) { return '<button class="btn ghost small" data-pdf="' + esc(id) + '">' + esc(label) + "</button>"; }
  function brancherPdf(actions) {
    $$("[data-pdf]").forEach(function (b) {
      b.addEventListener("click", function () {
        var f = actions[b.dataset.pdf]; if (!f) return;
        var avant = b.textContent; b.disabled = true; b.textContent = "Préparation du PDF…";
        var p;
        try { p = window.PDF ? PDF.charger().then(function () { return f(); }) : Promise.reject(new Error("pdf")); } catch (e) { p = Promise.reject(e); }
        p.then(function (r) { b.textContent = r === "refus" ? "Téléchargement annulé" : "PDF prêt ✓"; },
          function () { b.textContent = "Le PDF n'a pas pu être créé"; })
          .then(function () { setTimeout(function () { b.disabled = false; b.textContent = avant; }, 2500); });
      });
    });
  }

  /* ============ Accueil ============ */
  function vAccueil() {
    var nbL = COURS.filter(function (c) { return state.lecons[c.id]; }).length;
    var nbC = Object.keys(state.cas).length;
    var nbV = Object.keys(state.vues).filter(function (k) { return inf(k); }).length;
    var next = COURS.filter(function (c) { return !state.lecons[c.id]; })[0];
    function pct(a, b) { return Math.round(100 * a / b); }
    page(
      '<section class="hero"><p class="eyebrow">Préparer mon stage</p>' +
      "<h1>La cybercriminalité, texte par texte</h1>" +
      "<p>Arriver en stage en sachant qualifier un piratage, une sextorsion ou un rançongiciel, et comprendre les actes d'enquête : cours, " + INF.length + " fiches infractions citées d'après Légifrance, procédure, jurisprudence, droit européen et cas pratiques.</p>" +
      '<div class="btns">' + (next ? '<a class="btn" href="#/cours/' + next.id + '">' + (nbL ? "Continuer : " + esc(next.titre) : "Commencer le premier cours") + "</a>" : '<a class="btn" href="#/tester">Me tester</a>') +
      '<a class="btn ghost" href="#/infractions">Chercher une infraction</a></div>' +
      '<div class="terminal">$ grep -r "frauduleusement" code-penal/livre-3/titre-2/chapitre-3\n323-1 : accéder ou se maintenir, frauduleusement…</div></section>' +
      (window.CP_REVOIR && window.CP_REVOIR.aRevoir() ? '<a class="rev-bandeau" href="#/revisions"><b>' + window.CP_REVOIR.aRevoir() + "</b> question" + (window.CP_REVOIR.aRevoir() > 1 ? "s" : "") + " à revoir aujourd'hui dans Mes révisions →</a>" : "") +
      '<div class="stats">' +
      '<div class="stat"><b>' + nbL + "/" + COURS.length + '</b><span>cours terminés</span><div class="bar"><i style="width:' + pct(nbL, COURS.length) + '%"></i></div></div>' +
      '<div class="stat"><b>' + nbV + "/" + INF.length + '</b><span>fiches consultées</span><div class="bar"><i style="width:' + pct(nbV, INF.length) + '%"></i></div></div>' +
      '<div class="stat"><b>' + nbC + "/" + CAS.length + '</b><span>cas pratiques faits</span><div class="bar"><i style="width:' + pct(nbC, CAS.length) + '%"></i></div></div>' +
      "</div>" +
      "<h2>Apprendre</h2><div class=\"grid\">" +
      tuiles([["cours", "Les cours", COURS.length + " leçons, de la loi Godfrain à la coopération européenne."],
        ["infractions", "Les fiches infractions", "La lettre du texte, puis l'explication, les peines et les aggravations."],
        ["procedure", "Les actes d'enquête", "Réquisitions, perquisition informatique, géolocalisation, pseudonyme…"],
        ["jurisprudence", "La jurisprudence", JURIS.length + " décisions à connaître, de Bluetouff au code du téléphone."],
        ["europe", "Europe et international", "Budapest, DSA, e-evidence, NIS 2 : ce qui change en France."],
        ["victimes", "Victimes : que faire ?", "Les bons réflexes, situation par situation."],
        ["enquetes", "L'enquête pas à pas", "Quatre affaires types, de la plainte au jugement, étape par étape."],
        ["nouveautes", "Ce qui a changé", "Les réformes récentes, datées, avec les fiches concernées."],
        ["arbre", "Quelle infraction ?", "Réponds à quelques questions, l'arbre te mène aux bonnes fiches."],
        ["comparer", "Comparer deux infractions", "Côte à côte : texte, éléments, peines, et la différence clé."]]) +
      "</div><h2>S'entraîner</h2><div class=\"grid\">" +
      tuiles([["cas", "Les cas pratiques", "Qualifier des faits, avec correction."],
        ["revisions", "Mes révisions", "Tes erreurs reviennent au bon moment, et ton bilan par thème."],
        ["atelier", "L'atelier", "Qualifier un fait réel, rédiger une réquisition ou un PV, corrigés par Claude."],
        ["audition", "Simuler une audition", "Claude joue une victime, un témoin ou un suspect ; tu poses les questions."],
        ["tester", "Me tester", "Défi du jour, QCM, texte à trous sur les articles, frise des lois…"],
        ["questions", "Mes questions", "Poser une question de droit à Claude et garder les réponses."],
        ["perso", "Mon contenu", "Tes notes de cours et de stage, importées depuis une photo ou un PDF."]]) +
      "</div>"
    );
  }
  function tuiles(t) { return t.map(function (x) { return '<a class="tile" href="#/' + x[0] + '"><h3>' + x[1] + "</h3><p>" + x[2] + "</p></a>"; }).join(""); }

  /* ============ Cours ============ */
  function vCours() {
    var n = 0;
    page('<p class="eyebrow">Apprendre</p><h1>Les cours</h1><p class="lead">Coche chaque leçon une fois lue. Les références d\'articles ouvrent la fiche correspondante.</p>' +
      PARTIES.map(function (p) {
        var ls = COURS.filter(function (c) { return c.partie === p.id; });
        return '<div class="partie"><b>' + p.num + "</b><h2>" + esc(p.titre) + "</h2><em>" + esc(p.sous) + "</em></div>" +
          '<ul class="lessons">' + ls.map(function (c) {
            n++;
            var ok = !!state.lecons[c.id];
            return '<li><a href="#/cours/' + c.id + '"><span class="n">' + n + '</span><span class="t"><strong>' + esc(c.titre) + "</strong><span>" + esc(c.resume) + '</span></span><span class="check' + (ok ? " on" : "") + '" aria-label="' + (ok ? "terminée" : "à faire") + '">' + (ok ? "✓" : "") + "</span></a></li>";
          }).join("") + "</ul>";
      }).join(""));
  }
  function vLecon(id) {
    var i = -1; COURS.forEach(function (c, k) { if (c.id === id) i = k; });
    if (i < 0) return page('<h1>Leçon introuvable</h1><p><a href="#/cours">Retour aux cours</a></p>');
    var c = COURS[i], prev = COURS[i - 1], next = COURS[i + 1];
    var p = trouve(PARTIES, c.partie);
    var ok = !!state.lecons[c.id];
    page('<article class="lecon"><p class="eyebrow"><a href="#/cours">Cours</a> · Partie ' + p.num + " — " + esc(p.titre) + " · Leçon " + (i + 1) + "</p>" +
      "<h1>" + esc(c.titre) + '</h1><p class="lead">' + esc(c.resume) + "</p>" +
      '<div class="chips">' + (c.arts || []).map(chip).join("") + "</div>" +
      c.contenu +
      '<div class="retenir"><h3>À retenir</h3><ul>' + c.retenir.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="btns"><button class="btn' + (ok ? " ghost" : "") + '" id="doneBtn">' + (ok ? "✓ Leçon terminée (annuler)" : "Marquer comme terminée") + "</button>" +
      boutonPdf("cours", "Télécharger en PDF") + "</div>" +
      '<div class="pager">' + (prev ? '<a class="btn ghost" href="#/cours/' + prev.id + '">← ' + esc(prev.titre) + "</a>" : "<span></span>") +
      (next ? '<a class="btn ghost" href="#/cours/' + next.id + '">' + esc(next.titre) + " →</a>" : '<a class="btn ghost" href="#/cas">Cas pratiques →</a>') + "</div></article>");
    $("#doneBtn").addEventListener("click", function () { state.lecons[c.id] = !state.lecons[c.id]; save(); route(true); });
    brancherPdf({ cours: function () { return PDF.cours(c); } });
  }

  /* ============ Fiches infractions ============ */
  var filtre = { theme: "", q: "" };
  function vInfractions() {
    page('<p class="eyebrow">Apprendre</p><h1>Les infractions</h1>' +
      '<p class="lead">' + INF.length + " fiches : la lettre du texte d'après Légifrance (version en vigueur au " + window.LF.consult + "), puis l'explication.</p>" +
      '<input class="search" id="q" type="search" placeholder="Rechercher : phishing, deepfake, 323-1, mineur, rançongiciel…" value="' + esc(filtre.q) + '" aria-label="Rechercher une infraction">' +
      '<div class="filtres"><button class="pill' + (filtre.theme ? "" : " on") + '" data-t="">Toutes</button>' +
      THEMES.map(function (t) { return '<button class="pill' + (filtre.theme === t.id ? " on" : "") + '" data-t="' + t.id + '">' + esc(t.court) + "</button>"; }).join("") +
      '</div><div id="liste"></div>');
    function draw() {
      var q = norm(filtre.q.trim());
      var res = INF.filter(function (f) {
        if (filtre.theme && f.theme !== filtre.theme) return false;
        if (!q) return true;
        return norm([f.art, f.titre, f.materiel, f.motscles || "", f.notes, CIT[f.id] || ""].join(" ")).indexOf(q) >= 0;
      });
      $("#liste").innerHTML = res.length ? res.map(function (f) {
        var t = theme(f.theme);
        return '<a class="fiche-item ' + t.couleur + '" href="#/infraction/' + f.id + '"><span class="num">' + esc(artLabel(f)) + '</span><span><span class="theme-tag">' + esc(t.court) + "</span><br>" + esc(f.titre) + '</span><span class="peine">' + esc(f.peines[0][1]) + "</span></a>";
      }).join("") : '<p class="petit">Aucune fiche ne correspond. Essaie un autre mot.</p>';
    }
    draw();
    $("#q").addEventListener("input", function (e) { filtre.q = e.target.value; draw(); });
    $$(".pill").forEach(function (b) { b.addEventListener("click", function () { filtre.theme = b.dataset.t; $$(".pill").forEach(function (x) { x.classList.toggle("on", x === b); }); draw(); }); });
  }
  function vInfraction(id) {
    var f = inf(id);
    if (!f) return page('<h1>Fiche introuvable</h1><p><a href="#/infractions">Retour aux fiches</a></p>');
    state.vues[f.id] = 1; save();
    var t = theme(f.theme);
    var lies = COURS.filter(function (c) { return (c.arts || []).indexOf(f.id) >= 0; });
    var cas = CAS.filter(function (c) { return c.bonnes.indexOf(f.id) >= 0; });
    var arrets = JURIS.filter(function (j) { return j.arts.indexOf(f.id) >= 0; });
    var i = INF.indexOf(f), prev = INF[i - 1], next = INF[i + 1];
    page('<article class="fiche ' + t.couleur + '"><p class="eyebrow"><a href="#/infractions">Fiches</a> · ' + esc(t.nom) + "</p>" +
      '<p class="ref">' + esc(f.code) + " — " + esc(artLabel(f)) + "</p><h1>" + esc(f.titre) + "</h1>" +
      '<p class="badges">' + (f.verifie ? '<span class="badge">Relu sur Légifrance</span>' : '<span class="badge warn">À vérifier</span>') +
      '<span class="badge">Version : ' + esc(f.version) + "</span>" + (f.plainte ? '<span class="badge warn">Plainte préalable</span>' : "") + "</p>" +
      (CIT[f.id] ? '<section class="lettre"><p class="lettre-k">La lettre du texte</p><blockquote>« ' + esc(CIT[f.id]) + ' »</blockquote></section>' : "") +
      '<div class="dl">' +
      '<div class="k">Élément matériel</div><div>' + esc(f.materiel) + "</div>" +
      '<div class="k">Élément moral</div><div>' + esc(f.moral) + "</div>" +
      '<div class="k">Peines</div><div><ul class="peines">' + f.peines.map(function (p) { return "<li><small>" + esc(p[0]) + "</small><b>" + esc(p[1]) + "</b></li>"; }).join("") + "</ul></div>" +
      '<div class="k">Tentative</div><div>' + (f.tentative ? "Punissable" : "Non prévue par le texte (ou sans objet)") + "</div>" +
      (f.notes ? '<div class="k">À savoir</div><div>' + esc(f.notes) + "</div>" : "") +
      "</div>" +
      '<div class="btns"><a class="btn ghost small" href="' + esc(f.url) + '" target="_blank" rel="noopener">Texte officiel sur Légifrance ↗</a>' + boutonPdf("fiche", "Télécharger la fiche en PDF") + "</div>" +
      (lies.length ? "<h3>Dans les cours</h3><div class=\"chips\">" + lies.map(function (c) { return '<a class="chip" href="#/cours/' + c.id + '">' + esc(c.titre) + "</a>"; }).join("") + "</div>" : "") +
      (arrets.length ? "<h3>Jurisprudence</h3><div class=\"chips\">" + arrets.map(function (j) { return '<a class="chip" href="#/arret/' + j.id + '">' + esc(j.juridiction + ", " + j.date) + "</a>"; }).join("") + "</div>" : "") +
      (cas.length ? "<h3>Dans les cas pratiques</h3><div class=\"chips\">" + cas.map(function (c) { return '<a class="chip" href="#/cas/' + c.id + '">' + esc(c.titre) + "</a>"; }).join("") + "</div>" : "") +
      '<div class="pager">' + (prev ? '<a class="btn ghost" href="#/infraction/' + prev.id + '">← ' + esc(artLabel(prev)) + "</a>" : "<span></span>") +
      (next ? '<a class="btn ghost" href="#/infraction/' + next.id + '">' + esc(artLabel(next)) + " →</a>" : "") + "</div>" +
      blocCorrection(f) + "</article>");
    brancherPdf({ fiche: function () { return PDF.fiche(f); } });
    brancherCorrection(f);
  }

  /* ============ Corriger une fiche ============ */
  var CORR = window.CORRECTIONS;
  function dateCourte(iso) { try { return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }); } catch (e) { return ""; } }
  function blocCorrection(f) {
    if (!CORR) return "";
    var c = CORR.info(f.id);
    return '<p class="corr-pied">' +
      (c ? '<span class="corr-marque">Fiche corrigée par toi' + (c.modifie ? " le " + esc(dateCourte(c.modifie)) : "") + "</span> · " +
        '<button class="corr-lien" data-corr="origine">revenir au texte d\'origine</button> · ' : "") +
      '<button class="corr-lien" data-corr="editer">✎ corriger cette fiche</button></p>';
  }
  function brancherCorrection(f) {
    $$("[data-corr]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (b.dataset.corr === "editer") return vCorriger(f);
        if (b.dataset.armed) { CORR.annuler(f.id); return; }
        b.dataset.armed = "1"; b.textContent = "clique encore pour confirmer";
        setTimeout(function () { if (b.isConnected) { delete b.dataset.armed; b.textContent = "revenir au texte d'origine"; } }, 3000);
      });
    });
  }
  function vCorriger(f) {
    var a = CORR.actuel(f.id), o = CORR.origine(f.id);
    var champs = [
      ["titre", "Titre", 1, ""],
      ["citation", "La lettre du texte", 6, "Le texte exact de l'article, sans les guillemets."],
      ["materiel", "Élément matériel", 4, ""],
      ["moral", "Élément moral", 3, ""],
      ["peines", "Peines", 4, "Une ligne par peine, sous la forme « situation : peine »."],
      ["notes", "À savoir", 3, ""]
    ];
    window.CP_EDITION = true;
    page('<article class="fiche corr-form"><p class="eyebrow"><a href="#/infraction/' + esc(f.id) + '">' + esc(artLabel(f)) + "</a> · correction</p>" +
      "<h1>Corriger la fiche</h1><p class=\"lead\">Change ce qui est faux. Ta version remplacera la mienne partout sur le site, PDF compris. Le texte d'origine reste gardé : tu pourras y revenir.</p>" +
      champs.map(function (c) {
        var id = "corr-" + c[0], diff = a[c[0]] !== o[c[0]];
        return '<div class="corr-champ"><label for="' + id + '">' + c[1] + (diff ? ' <span class="corr-marque">corrigé</span>' : "") + "</label>" +
          (c[3] ? '<p class="petit">' + esc(c[3]) + "</p>" : "") +
          (c[2] === 1 ? '<input type="text" id="' + id + '" value="' + esc(a[c[0]]) + '">' : '<textarea id="' + id + '" rows="' + c[2] + '">' + esc(a[c[0]]) + "</textarea>") + "</div>";
      }).join("") +
      '<div class="btns"><button class="btn" id="corrOk">Enregistrer</button><a class="btn ghost" href="#/infraction/' + esc(f.id) + '" id="corrNon">Annuler</a></div>' +
      '<p class="petit" id="corrMsg">' + (CORR.mode() === "sync" ? "La correction est enregistrée avec le site : je pourrai la relire pour corriger aussi ma source." : "La correction est enregistrée dans ce navigateur.") + "</p></article>");
    $("#corrNon").addEventListener("click", function () { window.CP_EDITION = false; });
    $("#corrOk").addEventListener("click", function () {
      var v = {};
      champs.forEach(function (c) { v[c[0]] = $("#corr-" + c[0]).value; });
      if (!v.titre.trim()) { $("#corrMsg").textContent = "Le titre ne peut pas être vide."; return; }
      var b = $("#corrOk"); b.disabled = true; b.textContent = "Enregistrement…";
      window.CP_EDITION = false;
      Promise.resolve(CORR.enregistrer(f.id, v)).then(function () {
        if (location.hash === "#/infraction/" + f.id) route(true); else location.hash = "#/infraction/" + f.id;
      }, function () {
        var p = $(".corr-pied");
        if (p) p.insertAdjacentHTML("beforeend", '<br><span class="corr-marque">Gardée dans ce navigateur seulement : l\'enregistrement avec le site a échoué.</span>');
      });
    });
  }

  /* ============ Tableau des peines ============ */
  function vPeines() {
    var acts = { tout: function () { return PDF.peines(); }, fiches: function () { return PDF.theme(""); } };
    page('<p class="eyebrow">Réviser</p><h1>Toutes les peines</h1><p class="lead">Les maxima encourus par une personne physique. Les personnes morales encourent en principe le quintuple de l\'amende.</p>' +
      '<div class="btns">' + boutonPdf("tout", "Tableau des peines en PDF") + boutonPdf("fiches", "Toutes les fiches en PDF") + "</div>" +
      THEMES.map(function (t) {
        var fs = INF.filter(function (f) { return f.theme === t.id; });
        if (!fs.length) return "";
        acts["t-" + t.id] = function () { return PDF.theme(t.id); };
        return '<div class="theme-titre ' + t.couleur + '"><h2><span class="theme-tag">' + esc(t.court) + "</span><br>" + esc(t.nom) + "</h2>" + boutonPdf("t-" + t.id, "Ces fiches en PDF") + "</div>" +
          '<div class="table-wrap"><table class="tab"><tr><th>Article</th><th>Infraction</th><th>Peines</th></tr>' +
          fs.map(function (f) {
            return '<tr><td><a class="chip" href="#/infraction/' + f.id + '">' + esc(f.art) + "</a></td><td>" + esc(f.titre) + "</td><td>" +
              f.peines.map(function (p) { return "<div><b class=\"mono\">" + esc(p[1]) + "</b>" + (f.peines.length > 1 ? ' <span class="petit">— ' + esc(p[0]) + "</span>" : "") + "</div>"; }).join("") + "</td></tr>";
          }).join("") + "</table></div>";
      }).join(""));
    brancherPdf(acts);
  }

  /* ============ Actes d'enquête ============ */
  function vProcedure() {
    var familles = [];
    ACTES.forEach(function (a) { if (familles.indexOf(a.famille) < 0) familles.push(a.famille); });
    page('<p class="eyebrow">Apprendre</p><h1>Les actes d\'enquête</h1>' +
      '<p class="lead">La boîte à outils de l\'enquêteur cyber dans le Code de procédure pénale : qui peut faire quoi, à quelles conditions, pour combien de temps.</p>' +
      '<div class="encadre attention"><strong>Recodification.</strong> L\'ordonnance n° 2025-1091 du 19 novembre 2025 renumérote le CPP à compter du 1er janvier 2029. Jusque-là, les numéros ci-dessous s\'appliquent.</div>' +
      familles.map(function (fam) {
        return "<h2>" + esc(fam) + '</h2><div class="grid">' + ACTES.filter(function (a) { return a.famille === fam; }).map(function (a) {
          return '<a class="tile" href="#/acte/' + a.id + '"><span class="k">' + esc(a.art) + "</span><h3>" + esc(a.titre) + "</h3><p>" + esc(a.qui) + "</p></a>";
        }).join("") + "</div>";
      }).join(""));
  }
  function vActe(id) {
    var a = trouve(ACTES, id);
    if (!a) return page('<h1>Fiche introuvable</h1><p><a href="#/procedure">Retour</a></p>');
    var i = ACTES.indexOf(a), prev = ACTES[i - 1], next = ACTES[i + 1];
    page('<article class="fiche t7"><p class="eyebrow"><a href="#/procedure">Actes d\'enquête</a> · ' + esc(a.famille) + "</p>" +
      '<p class="ref">Code de procédure pénale — ' + esc(a.art.replace("CPP ", "art. ")) + "</p><h1>" + esc(a.titre) + "</h1>" +
      '<p class="badges"><span class="badge">Relu sur Légifrance</span><span class="badge">Version : ' + esc(a.version) + "</span></p>" +
      (a.citation ? '<section class="lettre"><p class="lettre-k">La lettre du texte</p><blockquote>« ' + esc(a.citation) + ' »</blockquote></section>' : "") +
      '<div class="dl"><div class="k">Qui</div><div>' + esc(a.qui) + '</div><div class="k">Conditions</div><div>' + esc(a.conditions) + "</div>" +
      '<div class="k">Durée</div><div>' + esc(a.duree) + '</div><div class="k">À savoir</div><div>' + esc(a.plus) + "</div></div>" +
      '<p><a class="btn ghost small" href="' + esc(a.url) + '" target="_blank" rel="noopener">Texte officiel sur Légifrance ↗</a></p>' +
      '<div class="pager">' + (prev ? '<a class="btn ghost" href="#/acte/' + prev.id + '">← ' + esc(prev.art) + "</a>" : "<span></span>") +
      (next ? '<a class="btn ghost" href="#/acte/' + next.id + '">' + esc(next.art) + " →</a>" : "") + "</div></article>");
  }

  /* ============ Jurisprudence ============ */
  function vJuris() {
    page('<p class="eyebrow">Apprendre</p><h1>La jurisprudence</h1><p class="lead">Les décisions qui ont fixé le sens des textes. Chaque fiche suit le plan classique : faits, question, solution, portée.</p>' +
      '<div class="encadre attention">Ces résumés ne viennent pas de Légifrance : vérifie les références (numéro, date) sur Légifrance ou Judilibre avant de les citer.</div>' +
      '<div class="grid">' + JURIS.map(function (j) {
        return '<a class="tile" href="#/arret/' + j.id + '"><span class="k">' + esc(j.theme) + " · " + esc(j.juridiction) + "</span><h3>" + esc(j.court) + "</h3><p>" + esc(j.date) + " — " + esc(j.num) + "</p></a>";
      }).join("") + "</div>");
  }
  function vArret(id) {
    var j = trouve(JURIS, id);
    if (!j) return page('<h1>Décision introuvable</h1><p><a href="#/jurisprudence">Retour</a></p>');
    var i = JURIS.indexOf(j), prev = JURIS[i - 1], next = JURIS[i + 1];
    page('<article class="fiche t5"><p class="eyebrow"><a href="#/jurisprudence">Jurisprudence</a> · ' + esc(j.theme) + "</p>" +
      '<p class="ref">' + esc(j.juridiction + ", " + j.date + ", " + j.num) + "</p><h1>" + esc(j.court) + "</h1>" +
      '<div class="dl"><div class="k">Faits</div><div>' + esc(j.faits) + '</div><div class="k">Question</div><div>' + esc(j.question) + "</div>" +
      '<div class="k">Solution</div><div>' + esc(j.solution) + '</div><div class="k">Portée</div><div>' + esc(j.portee) + "</div></div>" +
      (j.arts.length ? '<h3>Textes concernés</h3><div class="chips">' + j.arts.map(chip).join("") + "</div>" : "") +
      '<div class="pager">' + (prev ? '<a class="btn ghost" href="#/arret/' + prev.id + '">← ' + esc(prev.court) + "</a>" : "<span></span>") +
      (next ? '<a class="btn ghost" href="#/arret/' + next.id + '">' + esc(next.court) + " →</a>" : "") + "</div></article>");
  }

  /* ============ Europe ============ */
  function vEurope() {
    page('<p class="eyebrow">Apprendre</p><h1>Europe et international</h1><p class="lead">Les textes européens et internationaux qui s\'appliquent en France ou qui ont façonné le droit français.</p>' +
      EUROPE.map(function (e) {
        return '<section class="card eu"><div class="eu-tete"><span class="badge">' + esc(e.type) + '</span><span class="badge ' + (/cours|pas encore|retard/i.test(e.statut) ? "warn" : "") + '">' + esc(e.statut) + "</span></div>" +
          "<h2>" + esc(e.nom) + '</h2><p class="petit mono">' + esc(e.ref) + "</p><p>" + esc(e.quoi) + '</p><p class="eu-fr"><strong>En France :</strong> ' + esc(e.france) + "</p></section>";
      }).join("") +
      '<p class="petit">Sources : EUR-Lex, Légifrance et collection des traités des Nations unies. L\'état de la transposition de NIS 2 change vite : vérifie-le avant ton stage.</p>');
  }

  /* ============ Victimes ============ */
  function vVictimes() {
    page('<p class="eyebrow">Pratique</p><h1>Victimes : que faire ?</h1><p class="lead">Les réflexes à donner à une victime, situation par situation. En stage, c\'est souvent la première question au téléphone ou à l\'accueil.</p>' +
      VICTIMES.map(function (v, i) {
        return '<section class="card victime"><h2>' + esc(v.titre) + '</h2><ol class="etapes">' + v.etapes.map(function (e) { return "<li>" + esc(e) + "</li>"; }).join("") + "</ol>" +
          (v.arts ? '<div class="chips">' + v.arts.map(chip).join("") + "</div>" : "") + "</section>";
      }).join("") +
      '<div class="encadre"><strong>Contacts utiles.</strong> 17Cyber et cybermalveillance.gouv.fr (diagnostic et assistance) ; PHAROS sur internet-signalement.gouv.fr (contenus illicites) ; 33700 (SMS et appels frauduleux) ; 3018 (cyberharcèlement des jeunes) ; 119 (enfance en danger) ; 17 ou 112 en cas d\'urgence.</div>' +
      '<p class="petit">Ces conseils sont généraux. Les services et numéros évoluent : vérifie-les sur les sites officiels.</p>');
  }

  /* ============ Cas pratiques ============ */
  function vCas() {
    function tuile(c) {
      var i = CAS.indexOf(c), s = state.cas[c.id];
      return '<a class="tile" href="#/cas/' + c.id + '"><span class="k">Cas ' + (i + 1) + (s != null ? " · " + s + " %" : "") + "</span><h3>" + esc(c.titre) + "</h3><p>" + esc(c.faits.slice(0, 110)) + "…</p></a>";
    }
    var droit = CAS.filter(function (c) { return !c.partie; }), tech = CAS.filter(function (c) { return c.partie === "technique"; }), coop = CAS.filter(function (c) { return c.partie === "cooperation"; });
    page('<p class="eyebrow">S\'entraîner</p><h1>Cas pratiques</h1><p class="lead">Lis les faits, coche toutes les réponses qui te semblent justes, puis compare avec la correction.</p>' +
      "<h2>Qualifier les faits</h2><p class=\"petit\">Retrouver les infractions.</p><div class=\"grid\">" + droit.map(tuile).join("") + "</div>" +
      (tech.length ? "<h2>Partie technique</h2><p class=\"petit\">Reconnaître la technique d'attaque, choisir les bons réflexes d'enquête, et qualifier.</p><div class=\"grid\">" + tech.map(tuile).join("") + "</div>" : "") +
      (coop.length ? "<h2>Coopération internationale</h2><p class=\"petit\">Trouver la règle qui rend la France compétente et choisir les bons outils de coopération.</p><div class=\"grid\">" + coop.map(tuile).join("") + "</div>" : ""));
  }
  function casLibelle(id) {
    var f = inf(id);
    if (f) return '<span class="mono">' + esc(artLabel(f)) + "</span> — " + esc(f.titre);
    return esc((window.CAS_LIBELLES || {})[id] || id);
  }
  function casChip(id) {
    if (inf(id)) return chip(id);
    return '<span class="chip">' + esc((window.CAS_LIBELLES || {})[id] || id) + "</span>";
  }
  function vUnCas(id) {
    var i = -1; CAS.forEach(function (c, k) { if (c.id === id) i = k; });
    if (i < 0) return page('<h1>Cas introuvable</h1><p><a href="#/cas">Retour</a></p>');
    var c = CAS[i], next = CAS[i + 1];
    var tech = c.partie === "technique";
    var opts = shuffle(c.bonnes.concat(c.pieges)).filter(function (id) { return inf(id) || (window.CAS_LIBELLES || {})[id]; });
    page('<article class="quiz"><p class="eyebrow"><a href="#/cas">Cas pratiques</a> · ' + (tech ? "Partie technique · " : (c.partie === "cooperation" ? "Coopération internationale · " : "")) + "Cas " + (i + 1) + "/" + CAS.length + "</p><h1>" + esc(c.titre) + "</h1>" +
      '<div class="cas-faits">' + esc(c.faits) + "</div>" +
      "<h3>" + (tech ? "Quelle technique, quels réflexes, quelles qualifications ?" : (c.partie === "cooperation" ? "Quelle compétence, quels outils, quelles qualifications ?" : "Quelles qualifications retiens-tu ?")) + "</h3>" +
      '<div class="cas-opts">' + opts.map(function (id) {
        return '<label data-id="' + esc(id) + '"><input type="checkbox" value="' + esc(id) + '"><span>' + casLibelle(id) + "</span></label>";
      }).join("") + "</div>" +
      '<div class="btns"><button class="btn" id="corriger">Corriger</button></div><p class="jeu-msg" id="casMsg" hidden></p><div id="corr"></div>' +
      '<div class="pager"><a class="btn ghost" href="#/cas">← Tous les cas</a>' + (next ? '<a class="btn ghost" href="#/cas/' + next.id + '">Cas suivant →</a>' : "") + "</div></article>");
    $("#corriger").addEventListener("click", function () {
      var choix = $$(".cas-opts input").filter(function (x) { return x.checked; }).map(function (x) { return x.value; });
      if (!choix.length) { var m = $("#casMsg"); m.textContent = "Coche au moins une réponse avant de corriger."; m.hidden = false; return; }
      var bons = 0, faux = 0;
      $$(".cas-opts label").forEach(function (l) {
        var lid = l.dataset.id, att = c.bonnes.indexOf(lid) >= 0, coche = choix.indexOf(lid) >= 0;
        if (att && coche) { l.classList.add("good"); bons++; }
        else if (!att && coche) { l.classList.add("bad"); faux++; }
        else if (att && !coche) l.classList.add("miss");
        l.querySelector("input").disabled = true;
      });
      var score = Math.max(0, Math.round(100 * (bons - faux) / c.bonnes.length));
      state.cas[c.id] = score; save();
      if (window.CP_REVOIR) window.CP_REVOIR.noterCas(c, score);
      $("#corriger").disabled = true; $("#casMsg").hidden = true;
      $("#corr").innerHTML = '<div class="feedback"><p class="score-big">' + score + ' %</p><p class="legend">Bordure verte : bonne réponse cochée · rouge : réponse à écarter · orange pointillé : réponse oubliée.</p><p>' + esc(c.correction) + '</p><div class="chips">' + c.bonnes.map(casChip).join("") + "</div></div>";
    });
    $$(".cas-opts input").forEach(function (x) { x.addEventListener("change", function () { $("#casMsg").hidden = true; }); });
  }

  /* ============ Lexique, carnet, sources ============ */
  function vLexique() {
    var L = window.LEXIQUE.slice().sort(function (a, b) { return a[0].localeCompare(b[0], "fr"); });
    page('<p class="eyebrow">Apprendre</p><h1>Lexique</h1><input class="search" id="lq" type="search" placeholder="Filtrer le lexique…" aria-label="Filtrer le lexique"><dl class="lex" id="lex"></dl>');
    function draw(q) {
      q = norm(q || "");
      $("#lex").innerHTML = L.filter(function (t) { return !q || norm(t[0] + " " + t[1]).indexOf(q) >= 0; })
        .map(function (t) { return "<dt>" + esc(t[0]) + "</dt><dd>" + esc(t[1]) + "</dd>"; }).join("");
    }
    draw(); $("#lq").addEventListener("input", function (e) { draw(e.target.value); });
  }
  function vCarnet() {
    page('<p class="eyebrow">Réviser</p><h1>Mon carnet</h1><p class="lead">Un brouillon rapide : moyens mnémotechniques, questions à vérifier. Enregistré dans ce navigateur. Pour des notes complètes, synchronisées entre tes appareils, utilise <a href="#/perso">Mon contenu</a>.</p>' +
      '<textarea class="carnet" id="notes" placeholder="Ex. : 323-1 = 3 ans / 100 000 € depuis la LOPMI…">' + esc(state.notes) + '</textarea><p class="saved" id="saved"></p>');
    var t;
    $("#notes").addEventListener("input", function (e) {
      state.notes = e.target.value; clearTimeout(t);
      t = setTimeout(function () { save(); $("#saved").textContent = "Enregistré à " + new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }); }, 400);
    });
  }
  function vSources() {
    var lf = window.LF.cp, cpp = window.LF.cpp;
    var L = [
      ["Code pénal — Atteintes aux STAD (art. 323-1 à 323-8)", lf + "LEGISCTA000006149839/"],
      ["Code pénal — Atteinte à la vie privée (226-1 à 226-7)", lf + "LEGISCTA000006165309/"],
      ["Code pénal — Atteinte à la représentation de la personne (226-8, 226-8-1)", lf + "LEGISCTA000006165310/"],
      ["Code pénal — Secret des correspondances (226-15)", lf + "LEGISCTA000006181757/"],
      ["Code pénal — Fichiers et traitements informatiques (226-16 à 226-24)", lf + "LEGISCTA000006165313/"],
      ["Code pénal — Harcèlement moral (222-33-2 s.)", lf + "LEGISCTA000006165282/"],
      ["Code pénal — Risques causés à autrui (223-1-1)", lf + "LEGISCTA000006165287/"],
      ["Code pénal — Infractions sexuelles contre les mineurs (227-21-1 s.)", lf + "LEGISCTA000043405084/"],
      ["Code pénal — Extorsion (312-1 s.)", lf + "LEGISCTA000006165327/"],
      ["Code pénal — Chantage (312-10 s.)", lf + "LEGISCTA000006165328/"],
      ["Code pénal — Escroquerie (313-1 s.)", lf + "LEGISCTA000006165331/"],
      ["Code pénal — Actes de terrorisme (421-1 s.)", lf + "LEGISCTA000006149845/"],
      ["Code pénal — Entraves à la justice (434-15-2)", lf + "LEGISCTA000006165379/"],
      ["Code pénal — Circonstances aggravantes (132-79)", lf + "LEGISCTA000006165269/"],
      ["Code pénal — Trahison et espionnage (411-1 à 411-12)", lf + "LEGISCTA000006149841/"],
      ["Code pénal — Violences, dont messages malveillants (222-16)", lf + "LEGISCTA000006181751/"],
      ["Code pénal — Menaces (222-17 à 222-18-3)", lf + "LEGISCTA000006181752/"],
      ["Code pénal — Menaces contre les personnes exerçant une fonction publique (433-3)", lf + "LEGISCTA000006165398/"],
      ["Code pénal — Recel (321-1 s.)", lf + "LEGISCTA000006165338/"],
      ["Code pénal — Provocation au suicide (223-13 s.)", lf + "LEGISCTA000006165292/"],
      ["Code pénal — Des faux (441-1 s.)", lf + "LEGISCTA000006149854/"],
      ["Code pénal — Trafic de stupéfiants (222-34 s.)", lf + "LEGISCTA000006165284/"],
      ["Code pénal — Trafic d'armes (222-52 s.)", lf + "LEGISCTA000032632507/"],
      ["Code pénal — Proxénétisme (225-5 s.)", lf + "LEGISCTA000006165301/"],
      ["Code pénal — Recours à la prostitution (225-12-1 s.)", lf + "LEGISCTA000006165396/"],
      ["Code pénal — Contenu de certaines peines, dont confiscation et suspension des comptes (131-21, 131-35-1)", lf + "LEGISCTA000006181731/"],
      ["CPP — Saisies spéciales (706-141 s.)", cpp + "LEGISCTA000022456757/"],
      ["Code pénal — Blanchiment (324-1 s.)", lf + "LEGISCTA000006165345/"],
      ["Code monétaire et financier — Infractions relatives aux instruments de paiement (L163-1 s.)", "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072026/LEGISCTA000006154001/"],
      ["Code de la propriété intellectuelle — Dispositions pénales, droit d'auteur (L335-1 s.)", "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069414/LEGISCTA000006161658/"],
      ["Code de la propriété intellectuelle — Actions pénales, marques (L716-8-9 s.)", "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069414/LEGISCTA000039377645/"],
      ["Code pénal — Infractions commises sur le territoire de la République (113-2, 113-2-1)", lf + "LEGISCTA000006165262/"],
      ["Code pénal — Infractions commises hors du territoire (113-6 à 113-14)", lf + "LEGISCTA000006165263/"],
      ["CPP — Administration de la preuve (427 s.)", cpp + "LEGISCTA000006182908/"],
      ["CPP — Décision d'enquête européenne (694-15 s.)", cpp + "LEGISCTA000006167502/"],
      ["CPP — Mandat d'arrêt européen (695-11 s.)", cpp + "LEGISCTA000006167507/"],
      ["CPP — Crimes et délits flagrants (56, 57-1, 60-1, 60-1-2, 60-2)", cpp + "LEGISCTA000006151876/"],
      ["CPP — Enquête préliminaire (76-3, 77-1-1, 77-1-2)", cpp + "LEGISCTA000006151877/"],
      ["CPP — Mise au clair des données chiffrées (230-1 s.)", cpp + "LEGISCTA000006151887/"],
      ["CPP — Géolocalisation (230-32 s.)", cpp + "LEGISCTA000028793411/"],
      ["CPP — Enquête sous pseudonyme (230-46)", cpp + "LEGISCTA000038269232/"],
      ["CPP — Atteintes aux STAD (706-72 s.)", cpp + "LEGISCTA000006138137/"],
      ["CPP — Criminalité organisée (706-73 s., 706-95, 706-102-1)", cpp + "LEGISCTA000006138138/"],
      ["Loi n° 2004-575 du 21 juin 2004 (LCEN), version consolidée", window.LF.lcen]
    ];
    page('<p class="eyebrow">Références</p><h1>Sources</h1><p class="lead">Les citations des fiches sont recopiées de Légifrance, version consolidée en vigueur au ' + window.LF.consult + ". Les explications sont des résumés : en cas de doute, le texte officiel fait foi.</p>" +
      "<h2>Légifrance</h2><ul class=\"sources\">" + L.map(function (s) { return '<li><a href="' + s[1] + '" target="_blank" rel="noopener">' + esc(s[0]) + " ↗</a></li>"; }).join("") + "</ul>" +
      "<h2>Non relu sur Légifrance</h2><ul class=\"sources\">" +
      "<li>Code des assurances, art. L. 12-10-1 (plainte sous 72 h).</li>" +
      "<li>Les décisions de la page Jurisprudence (Cour de cassation, Conseil constitutionnel, CJUE).</li>" +
      "<li>Les textes européens et internationaux (EUR-Lex, Conseil de l'Europe, Nations unies), et l'état de la transposition de NIS 2.</li>" +
      "<li>Les services et numéros de la page Victimes.</li>" +
      "</ul><h2>Autres sources</h2><ul class=\"sources\">" +
      "<li>Partie V « Comprendre la technique » : plan inspiré d'un cours de cybercriminalité et d'investigation numérique (2024/2025) consulté sur Scribd ; contenu rédigé à nouveau et rattaché au droit français.</li>" +
      "<li>Leçon « Réprimer sans museler » : d'après Media Defence, « Module 7 : Cybercriminalité » (décembre 2020, licence Creative Commons BY-NC-SA 4.0), contenu reformulé et complété.</li>" +
      "<li>Leçons « Pourquoi l'enquête cyber est difficile », « Qui est responsable ? » et « Le vol d'identité en trois temps » : idées tirées de UIT, « Comprendre la cybercriminalité : guide pour les pays en développement » (M. Gercke, 2009), rédigées à nouveau et mises à jour avec le droit en vigueur (DSA, CJUE, CPP).</li>" +
      "<li>Leçons « Compétence et coopération internationale » et « La preuve numérique devant le juge » : thèmes tirés de l'ONUDC, « Étude détaillée sur la cybercriminalité » (ébauche, février 2013), rédigés à partir des textes français.</li>" +
      "<li>Leçons « La contrefaçon en ligne », « La cybercriminalité organisée » et « Hacktivisme, cyberterrorisme, espionnage et désinformation » : thèmes des modules 11, 13 et 14 de la série universitaire E4J de l'ONUDC sur la cybercriminalité, rédigés à partir des textes français.</li>" +
      "<li>Page « Dispositifs publics » : d'après economie.gouv.fr (4 novembre 2026) et les sites officiels de 17Cyber, du CERT-FR, de MesServicesCyber et de Cybermalveillance.gouv.fr.</li>" +
      "<li>Fiche INTERPOL (page Europe et international) : d'après la brochure INTERPOL « Cybercriminalité — Des projets de police tournés vers l'avenir » (2017), résumée.</li>" +
      "</ul><div class=\"encadre attention\"><strong>À surveiller.</strong> L'ordonnance n° 2025-1091 du 19 novembre 2025 recodifie le Code de procédure pénale à compter du 1er janvier 2029 : les numéros d'articles du CPP changeront à cette date.</div>");
  }

  /* ============ Pages branchées sur des modules ============ */
  function module(nom, titre) {
    var M = window[nom];
    if (!M) return page("<h1>" + titre + "</h1><p>Page indisponible.</p>");
    page(M.html()); M.after();
  }

  /* ============ Routeur ============ */
  var NAV = { infraction: "infractions", acte: "procedure", arret: "jurisprudence" };
  function route(keepScroll) {
    var h = (location.hash || "#/accueil").replace(/^#\/?/, "").split("/");
    var name = h[0] || "accueil", arg = h[1] ? decodeURIComponent(h[1]) : "";
    var navName = NAV[name] || name;
    $$(".nav a").forEach(function (a) { a.classList.toggle("active", a.dataset.route === navName); });
    menu(false);
    pageCourante = name; document.documentElement.setAttribute("data-page", name); applyTheme();
    window.CP_EDITION = false;
    var VUES = window.CP_VIEWS || {};
    if (VUES[name]) { VUES[name](h.slice(1).map(function (x) { try { return decodeURIComponent(x); } catch (e) { return x; } })); if (!keepScroll) window.scrollTo(0, 0); return; }
    switch (name) {
      case "cours": arg ? vLecon(arg) : vCours(); break;
      case "infractions": vInfractions(); break;
      case "infraction": vInfraction(arg); break;
      case "peines": vPeines(); break;
      case "procedure": vProcedure(); break;
      case "acte": vActe(arg); break;
      case "jurisprudence": vJuris(); break;
      case "arret": vArret(arg); break;
      case "europe": vEurope(); break;
      case "victimes": vVictimes(); break;
      case "cas": arg ? vUnCas(arg) : vCas(); break;
      case "ofac": module("OFAC_PAGE", "L'OFAC"); break;
      case "ressources": module("RESSOURCES_PAGE", "Dispositifs publics"); break;
      case "tester": module("TESTER", "Me tester"); break;
      case "questions": module("QUESTIONS", "Mes questions"); break;
      case "perso": module("PERSO", "Mon contenu"); break;
      case "lexique": vLexique(); break;
      case "carnet": vCarnet(); break;
      case "sources": vSources(); break;
      default: vAccueil();
    }
    if (window.CP_LEX && arg && /^(cours|infraction|acte|arret|cas)$/.test(name)) {
      var cible = $(".lecon") || $(".dl") || $(".cas-faits") || main;
      try { window.CP_LEX.annoter(cible); } catch (e) {}
    }
    if (!keepScroll) window.scrollTo(0, 0);
  }
  window.CP_API = { state: state, save: save, page: page, route: route,
    /* appelé par la synchronisation quand un autre appareil a avancé */
    recharger: function (rerendre) {
      var s = load(); Object.keys(s).forEach(function (k) { state[k] = s[k]; });
      applyTheme(); if (rerendre !== false && !window.CP_EDITION) route(true);
    } };
  window.CP_RERENDER = function () { route(true); };
  window.addEventListener("hashchange", function () { route(); });
  route();
})();
;
