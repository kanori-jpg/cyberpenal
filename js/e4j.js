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
