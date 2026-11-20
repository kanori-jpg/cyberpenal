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
