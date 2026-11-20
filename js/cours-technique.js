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
