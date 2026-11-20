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
