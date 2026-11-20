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
