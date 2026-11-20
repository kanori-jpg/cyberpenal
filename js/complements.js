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
