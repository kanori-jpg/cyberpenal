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
