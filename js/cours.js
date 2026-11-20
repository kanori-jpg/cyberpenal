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
