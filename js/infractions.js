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
