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
