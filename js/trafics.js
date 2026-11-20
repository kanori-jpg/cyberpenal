/* Trafics en ligne (stupéfiants, armes), proxénétisme et prostitution en ligne, saisies et peines
   complémentaires numériques. Textes relus sur Légifrance le 20 novembre 2026. */
(function () {
  var CP = window.LF.cp, CPP = window.LF.cpp;

  window.THEMES.push({ id: "trafics", nom: "Trafics et exploitation en ligne", court: "Trafics", couleur: "t6" });

  window.INFRACTIONS.push(
    {
      id: "222-37", art: "222-37 et 222-39", code: "Code pénal", theme: "trafics",
      titre: "Trafic de stupéfiants, dont vente par messageries et réseaux sociaux",
      materiel: "222-37 : transport, détention, offre, cession, acquisition ou emploi illicites de stupéfiants, ou le fait de faciliter leur usage illicite. 222-39 : cession ou offre de stupéfiants à une personne pour sa consommation personnelle.",
      moral: "Connaissance de la nature stupéfiante du produit.",
      peines: [
        ["Trafic (222-37)", "10 ans d'emprisonnement et 7 500 000 € d'amende"],
        ["Cession pour consommation personnelle (222-39)", "5 ans et 75 000 €"],
        ["Cession à des mineurs ou aux abords d'un établissement scolaire (222-39)", "10 ans"],
        ["Importation ou exportation en bande organisée (222-36)", "30 ans de réclusion criminelle"]
      ],
      notes: "Il n'existe pas d'aggravation propre à la vente en ligne : un « point de deal » sur Telegram ou Snapchat relève de 222-37 ou 222-39 comme un point de vente physique. Exemption ou réduction de peine pour qui alerte les autorités (222-43, 222-43-1).",
      tentative: true, version: "01/01/2002 (222-37) ; 07/03/2007 (222-39)", url: CP + "LEGISCTA000006165284/", verifie: true,
      motscles: "drogue stupéfiants telegram snapchat point de deal livraison cannabis cocaïne darkweb"
    },
    {
      id: "222-52", art: "222-52", code: "Code pénal", theme: "trafics",
      titre: "Acquisition, détention ou cession d'armes de catégorie A ou B sans autorisation",
      materiel: "Acquérir, détenir ou céder des matériels de guerre, armes, éléments d'armes ou munitions des catégories A ou B sans l'autorisation exigée par le code de la défense et le code de la sécurité intérieure.",
      moral: "Intention ; connaissance de la nature de l'arme.",
      peines: [
        ["Base", "5 ans d'emprisonnement et 75 000 € d'amende"],
        ["Auteur déjà condamné pour une infraction de criminalité organisée", "7 ans et 100 000 €"],
        ["Au moins deux personnes, auteurs ou complices", "10 ans et 500 000 €"]
      ],
      notes: "Pas de disposition propre à la vente en ligne : l'achat d'une arme sur un marché du darkweb relève de ce texte (et de 323-3-2 pour l'administrateur du marché). Voir aussi 222-54 (port et transport, 7 ans), 222-57 (armes sans marquage, 5 ans ; 10 ans en bande organisée) et 222-59 (fabrication ou reconstitution d'une arme, 5 ans).",
      tentative: false, version: "05/06/2016", url: CP + "LEGISCTA000032632507/", verifie: true,
      motscles: "arme darkweb vente arme feu munitions impression 3d"
    },
    {
      id: "225-5", art: "225-5 à 225-7-1", code: "Code pénal", theme: "trafics",
      titre: "Proxénétisme, aggravé par l'usage d'internet",
      materiel: "Aider, assister ou protéger la prostitution d'autrui ; en tirer profit ou en partager les produits ; embaucher, entraîner ou détourner une personne en vue de la prostitution ou faire pression sur elle (225-5). Sont assimilés : servir d'intermédiaire, faciliter la justification de ressources fictives, ne pas pouvoir justifier ses ressources en vivant avec une personne prostituée (225-6).",
      moral: "Intention ; conscience de l'activité de prostitution.",
      peines: [
        ["Base", "7 ans d'emprisonnement et 150 000 € d'amende"],
        ["Aggravé (225-7) : mineur, personne vulnérable, plusieurs personnes, violences, ou contact par un réseau de communication électronique diffusant à un public non déterminé", "10 ans et 1 500 000 €"],
        ["Mineur de 15 ans (225-7-1)", "20 ans de réclusion criminelle et 3 000 000 €"]
      ],
      notes: "Gérer les annonces en ligne, le site ou le compte qui « vend » la personne, ou encaisser les paiements, c'est aider ou tirer profit de la prostitution. L'aggravation 225-7, 10° vise l'usage d'un réseau de communication électronique pour diffuser des messages à un public non déterminé (sites d'annonces, réseaux sociaux publics). Peine complémentaire de suspension des comptes possible (131-35-1).",
      tentative: false, version: "19/05/2011 (225-7) ; 23/04/2021 (225-7-1)", url: CP + "LEGISCTA000006165301/", verifie: true,
      motscles: "proxénétisme prostitution annonces escort mineurs réseaux sociaux exploitation"
    },
    {
      id: "225-12-1", art: "225-12-1 et 225-12-2", code: "Code pénal", theme: "trafics",
      titre: "Recours à la prostitution d'un mineur ou d'une personne vulnérable",
      materiel: "Solliciter, accepter ou obtenir, contre rémunération ou avantage, des relations sexuelles avec une personne qui se prostitue, même occasionnellement, lorsqu'elle est mineure ou particulièrement vulnérable.",
      moral: "Connaissance de la minorité ou de la vulnérabilité (apparente ou connue).",
      peines: [
        ["Base (225-12-1, al. 2)", "5 ans d'emprisonnement et 75 000 € d'amende"],
        ["Mise en contact par un réseau de communication diffusant à un public non déterminé, faits habituels, plusieurs victimes… (225-12-2)", "7 ans et 100 000 €"],
        ["Mineur de 15 ans, hors viol ou agression sexuelle (225-12-2)", "10 ans et 150 000 €"]
      ],
      notes: "Pour un adulte non vulnérable, le recours à la prostitution est une contravention, qui devient un délit (3 750 €) en cas de récidive (225-12-1, al. 1).",
      tentative: false, version: "23/04/2021", url: CP + "LEGISCTA000006165396/", verifie: true,
      motscles: "prostitution mineur client annonce réseau social"
    }
  );

  var C = window.CITATIONS;
  C["222-37"] = "Le transport, la détention, l'offre, la cession, l'acquisition ou l'emploi illicites de stupéfiants sont punis de dix ans d'emprisonnement et de 7 500 000 euros d'amende. Est puni des mêmes peines le fait de faciliter, par quelque moyen que ce soit, l'usage illicite de stupéfiants, […]";
  C["222-52"] = "Le fait d'acquérir, de détenir ou de céder des matériels de guerre, armes, éléments d'armes ou munitions relevant des catégories A ou B, sans l'autorisation prévue au I de l'article L. 2332-1 du code de la défense, en violation des articles L. 312-1 à L. 312-4, L. 312-4-3, L. 314-2 et L. 314-3 du code de la sécurité intérieure, est puni de cinq ans d'emprisonnement et de 75 000 € d'amende.";
  C["225-5"] = "Le proxénétisme est le fait, par quiconque, de quelque manière que ce soit : 1° D'aider, d'assister ou de protéger la prostitution d'autrui ; 2° De tirer profit de la prostitution d'autrui, d'en partager les produits ou de recevoir des subsides d'une personne se livrant habituellement à la prostitution ; 3° D'embaucher, d'entraîner ou de détourner une personne en vue de la prostitution ou d'exercer sur elle une pression pour qu'elle se prostitue ou continue à le faire. Le proxénétisme est puni de sept ans d'emprisonnement et de 150 000 euros d'amende.";
  C["225-12-1"] = "Est puni de cinq ans d'emprisonnement et de 75 000 € d'amende le fait de solliciter, d'accepter ou d'obtenir, en échange d'une rémunération, d'une promesse de rémunération, de la fourniture d'un avantage en nature ou de la promesse d'un tel avantage, des relations de nature sexuelle de la part d'une personne qui se livre à la prostitution, y compris de façon occasionnelle, lorsque cette personne est mineure ou présente une particulière vulnérabilité, apparente ou connue de son auteur, due à une maladie, à une infirmité, à un handicap ou à un état de grossesse.";

  /* ---------- Fiches de procédure et de peines ---------- */
  window.ACTES.push(
    {
      id: "706-154", art: "CPP 706-154", famille: "Saisie des avoirs", titre: "Saisie d'un compte bancaire ou de crypto-actifs",
      citation: "Par dérogation à l'article 706-153, l'officier de police judiciaire peut être autorisé, par tout moyen, par le procureur de la République ou par le juge d'instruction à procéder, aux frais avancés du Trésor, à la saisie d'une somme d'argent versée sur un compte ouvert auprès d'un établissement habilité par la loi à tenir des comptes de dépôts, de paiement ou de crypto-actifs mentionnés à l'article L. 54-10-1 du code monétaire et financier. […]",
      qui: "OPJ autorisé par tout moyen par le procureur ou le juge d'instruction ; puis JLD (enquête) ou juge d'instruction.",
      conditions: "Somme sur un compte de dépôt, de paiement ou de crypto-actifs tenu par un établissement habilité (banque, prestataire de services sur crypto-actifs). Le JLD ou le juge d'instruction statue sur le maintien ou la mainlevée dans les 10 jours de la saisie.",
      duree: "Décision de maintien dans les 10 jours ; appel possible dans les 10 jours de la notification, non suspensif.",
      plus: "Version issue de l'ordonnance du 15 octobre 2024, qui vise expressément les comptes de crypto-actifs. Pour les autres biens incorporels, la saisie est ordonnée par le JLD sur requête du procureur, ou par le juge d'instruction (706-153). Les biens saisis peuvent être confiés à l'Agence de gestion et de recouvrement des avoirs saisis et confisqués (AGRASC, CPP 706-159 et suivants).",
      version: "30/12/2024", url: CPP + "LEGISCTA000022456789/"
    },
    {
      id: "131-21", art: "CP 131-21", famille: "Peines complémentaires", titre: "Confiscation, dont l'ordinateur ou le téléphone utilisé en ligne",
      citation: "Lorsqu'une infraction pour laquelle la peine de confiscation est encourue a été commise en utilisant un service de communication au public en ligne, l'instrument utilisé pour avoir accès à ce service est considéré comme un bien meuble ayant servi à commettre l'infraction et peut être confisqué. Au cours de l'enquête ou de l'instruction, il peut être saisi dans les conditions prévues au code de procédure pénale.",
      qui: "Juridiction de jugement ; saisie possible pendant l'enquête ou l'instruction.",
      conditions: "Encourue de plein droit pour les crimes et les délits punis de plus d'un an d'emprisonnement (sauf délits de presse). Porte sur les biens ayant servi ou destinés à commettre l'infraction, sur son objet ou son produit, et sur les droits incorporels (crypto-actifs compris). Pour un crime ou un délit puni d'au moins 5 ans ayant procuré un profit, elle peut viser les biens dont le condamné ne justifie pas l'origine.",
      duree: "Définitive : les biens sont dévolus à l'État.",
      plus: "La confiscation des biens saisis qui ont servi à l'infraction ou en sont le produit est obligatoire, sauf décision spécialement motivée. Elle peut être prononcée en valeur.",
      version: "26/06/2024", url: CP + "LEGISCTA000006181731/"
    },
    {
      id: "131-35-1", art: "CP 131-35-1", famille: "Peines complémentaires", titre: "Suspension des comptes de réseaux sociaux",
      citation: "Pour les délits mentionnés au II, le tribunal peut ordonner à titre de peine complémentaire la suspension des comptes d'accès à des services en ligne ayant été utilisés pour commettre l'infraction. […] La suspension est prononcée pour une durée maximale de six mois ; cette durée est portée à un an lorsque la personne est en état de récidive légale.",
      qui: "Tribunal correctionnel ; la décision est signifiée aux plateformes.",
      conditions: "Délits limitativement énumérés : harcèlements, atteintes à la vie privée et revenge porn, usurpation d'identité, hypertrucages, infractions sexuelles contre les mineurs en ligne (227-22 à 227-24), doxing (223-1-1), apologie du terrorisme, proxénétisme, menaces contre les agents publics (433-3), certains délits de presse, entre autres.",
      duree: "6 mois au plus ; 1 an en récidive. Première demande de relèvement possible après 3 mois.",
      plus: "Pendant la peine, interdiction d'utiliser ces comptes et d'en créer de nouveaux. La plateforme qui ne bloque pas les comptes encourt 75 000 € d'amende. Créée par la loi SREN (2024), version en vigueur depuis le 26 août 2026 (loi du 24 août 2026).",
      version: "26/08/2026", url: CP + "LEGISCTA000006181731/"
    }
  );

  /* ---------- Leçons ---------- */
  var trafics = {
    id: "trafics-en-ligne", partie: "moyen",
    titre: "Trafics en ligne : drogue, armes et prostitution",
    resume: "Points de deal sur messageries, armes sur le darkweb, annonces et proxénétisme : les textes et les aggravations liées à internet.",
    arts: ["222-37", "222-52", "225-5", "225-12-1", "323-3-2"],
    contenu: `
<p>Les réseaux sociaux et les messageries sont devenus des vitrines pour des trafics très classiques. Le droit applicable reste celui du trafic ; ce qui change, c'est la façon d'enquêter et, parfois, une aggravation liée à internet.</p>

<h3>La drogue</h3>
<p>Les « menus » diffusés sur Telegram, Snapchat ou Signal, avec livraison à domicile, relèvent du trafic de stupéfiants (<a class="art" href="#/infraction/222-37">222-37</a>, 10 ans) ou de la cession pour consommation personnelle (222-39, 5 ans ; 10 ans pour une cession à des mineurs). Il n'y a <strong>pas d'aggravation propre à internet</strong>. L'administrateur d'un marché du darkweb relève en plus de <a class="art" href="#/infraction/323-3-2">323-3-2</a>.</p>

<h3>Les armes</h3>
<p>Acheter ou vendre une arme des catégories A ou B sans autorisation est puni de 5 ans, 10 ans à plusieurs (<a class="art" href="#/infraction/222-52">222-52</a>). Là encore, le texte ne distingue pas la vente en ligne : ce sont les règles générales du trafic d'armes qui s'appliquent.</p>

<h3>La prostitution et le proxénétisme</h3>
<p>Ici, la loi prévoit expressément une aggravation liée à internet :</p>
<ul>
  <li>le <strong>proxénétisme</strong> (<a class="art" href="#/infraction/225-5">225-5</a>, 7 ans) passe à <strong>10 ans et 1 500 000 €</strong> lorsqu'il est commis grâce à un réseau de communication électronique diffusant des messages à un public non déterminé (225-7, 10°), et à 20 ans de réclusion pour un mineur de 15 ans (225-7-1) ;</li>
  <li>le <strong>client d'un mineur ou d'une personne vulnérable</strong> (<a class="art" href="#/infraction/225-12-1">225-12-1</a>, 5 ans) encourt 7 ans s'il a été mis en contact par un réseau de communication (225-12-2), et 10 ans pour un mineur de 15 ans.</li>
</ul>
<p>Gérer les annonces, le compte ou le site, encaisser l'argent : c'est aider la prostitution ou en tirer profit. Pour les mineurs, voir aussi la <a href="#/cours/mineurs">leçon sur la protection des mineurs en ligne</a>.</p>

<div class="encadre"><strong>Pour l'enquête.</strong> Ces dossiers combinent toutes les techniques du site : réquisitions aux plateformes et opérateurs (<a href="#/acte/60-1-2">60-1-2</a>), enquête sous pseudonyme pour acheter ou commander (<a href="#/acte/230-46">230-46</a>), suivi des paiements et des crypto-actifs, saisie des avoirs (<a href="#/acte/706-154">706-154</a>), et suspension des comptes au jugement (<a href="#/acte/131-35-1">131-35-1</a>).</div>
`,
    retenir: [
      "Drogue et armes vendues en ligne : textes ordinaires (222-37, 222-39, 222-52), pas d'aggravation internet.",
      "Proxénétisme via un réseau diffusant au public : 10 ans et 1 500 000 € (225-7, 10°).",
      "Client d'un mineur contacté en ligne : 7 ans ; 10 ans si moins de 15 ans (225-12-2)."
    ]
  };

  var saisir = {
    id: "saisir-confisquer", partie: "enquete",
    titre: "Saisir, confisquer, suspendre",
    resume: "Bloquer l'argent et les crypto-actifs pendant l'enquête, confisquer au jugement, suspendre les comptes de réseaux sociaux.",
    arts: ["324-1", "222-33-2-2"],
    contenu: `
<p>Identifier un auteur ne suffit pas : il faut aussi l'empêcher de profiter de l'infraction et de recommencer. Trois outils.</p>

<h3>1. Saisir pendant l'enquête</h3>
<ul>
  <li><strong>Comptes bancaires et crypto-actifs</strong> (<a href="#/acte/706-154">CPP 706-154</a>) : l'OPJ, autorisé par tout moyen par le procureur ou le juge d'instruction, saisit la somme sur un compte tenu par une banque ou un prestataire de crypto-actifs habilité. Le JLD ou le juge d'instruction doit statuer sur le maintien dans les 10 jours.</li>
  <li><strong>Autres biens incorporels</strong> (706-153) : saisie ordonnée par le JLD sur requête du procureur, ou par le juge d'instruction.</li>
  <li><strong>Matériel</strong> : ordinateurs et téléphones sont saisis sous scellés (CPP 56) ; ils pourront être confisqués comme instrument de l'infraction.</li>
</ul>
<p>Les biens saisis peuvent être confiés à l'<strong>AGRASC</strong> (Agence de gestion et de recouvrement des avoirs saisis et confisqués, CPP 706-159 et suivants), qui les gère jusqu'au jugement. Pour les crypto-actifs détenus hors d'une plateforme (portefeuille personnel), les modalités pratiques de saisie sont une question à poser en stage : elles supposent de récupérer les clés.</p>

<h3>2. Confisquer au jugement</h3>
<p>La confiscation (<a href="#/acte/131-21">CP 131-21</a>) est encourue de plein droit pour les crimes et les délits punis de plus d'un an. Elle vise ce qui a servi à l'infraction, son produit, les droits incorporels, et, pour les délits punis d'au moins 5 ans ayant rapporté un profit, les biens dont l'origine n'est pas justifiée. Le texte précise que l'appareil utilisé pour accéder à un service en ligne ayant servi à l'infraction peut être confisqué.</p>

<h3>3. Suspendre les comptes</h3>
<p>Pour une liste de délits commis en ligne (harcèlements, revenge porn, deepfakes, usurpation d'identité, infractions sexuelles contre les mineurs, doxing, apologie du terrorisme, proxénétisme, menaces contre les agents publics…), le tribunal peut ordonner la <strong>suspension des comptes</strong> de réseaux sociaux utilisés pour l'infraction (<a href="#/acte/131-35-1">CP 131-35-1</a>) : 6 mois au plus, 1 an en récidive, avec interdiction d'en créer de nouveaux. La plateforme qui ne bloque pas encourt 75 000 € d'amende.</p>

<div class="encadre"><strong>Le réflexe.</strong> Dès qu'un compte de réception ou un portefeuille de crypto-actifs est identifié, envisager la saisie immédiatement : quelques heures plus tard, les fonds ont souvent disparu.</div>
`,
    retenir: [
      "Saisie d'un compte ou de crypto-actifs : CPP 706-154 (OPJ autorisé, puis JLD sous 10 jours).",
      "Confiscation de plein droit pour les délits punis de plus d'un an (CP 131-21), y compris l'appareil utilisé en ligne.",
      "Suspension des comptes de réseaux sociaux : 6 mois, 1 an en récidive (CP 131-35-1)."
    ]
  };

  function apres(id, lecon) {
    var pos = window.COURS.length;
    window.COURS.forEach(function (c, i) { if (c.id === id) pos = i + 1; });
    window.COURS.splice(pos, 0, lecon);
  }
  apres("argent-cybercrime", trafics);
  apres("preuve-juge", saisir);

  /* ---------- Cas pratiques ---------- */
  var L = window.CAS_LIBELLES = window.CAS_LIBELLES || {};
  L["s-706-154"] = "Outil : saisie des sommes sur le compte ou la plateforme de crypto-actifs (CPP 706-154)";
  L["s-131-35-1"] = "Au jugement : suspension des comptes de réseaux sociaux (CP 131-35-1)";
  L["s-131-21"] = "Au jugement : confiscation du téléphone et des gains (CP 131-21)";
  L["s-pseudo"] = "Outil : enquête sous pseudonyme pour passer commande (CPP 230-46)";
  L["s-aucune-saisie"] = "Attendre le jugement pour bloquer l'argent";
  window.CAS.push(
    {
      id: "deal-telegram", titre: "Le menu sur Telegram",
      faits: "Une chaîne Telegram de 4 000 abonnés publie chaque jour un « menu » de cannabis et de cocaïne avec livraison à domicile en scooter. Les paiements se font en espèces ou en crypto-actifs vers un compte ouvert sur une plateforme d'échange agréée en France. Plusieurs clients sont mineurs.",
      bonnes: ["222-37", "s-pseudo", "s-706-154", "s-131-21"], pieges: ["323-3-2", "s-aucune-saisie", "227-24"],
      correction: "Offre et cession de stupéfiants : 222-37 (10 ans) ; la cession à des mineurs relève aussi de 222-39 (10 ans). Une chaîne Telegram n'est pas une « plateforme en ligne » restreinte aux utilisateurs d'anonymisation au sens de 323-3-2 : c'est le vendeur qui est poursuivi. Enquête : commande sous pseudonyme par des enquêteurs habilités (230-46), réquisitions, et saisie immédiate des crypto-actifs sur la plateforme agréée (706-154), sans attendre le jugement. Au jugement : confiscation du produit et des instruments (131-21)."
    },
    {
      id: "escort", titre: "Les annonces d'« escort »",
      faits: "Un homme rédige et publie sur un site d'annonces des offres de rendez-vous tarifés pour trois jeunes femmes, dont une de 16 ans, réserve leurs chambres d'hôtel et encaisse la moitié des paiements sur son compte.",
      bonnes: ["225-5", "s-706-154", "s-131-35-1"], pieges: ["225-12-1", "312-1", "226-4-1"],
      correction: "Il aide la prostitution et en tire profit : proxénétisme (225-5). Aggravations de 225-7 : mineure, plusieurs personnes, et usage d'un réseau de communication électronique diffusant des messages à un public non déterminé : 10 ans et 1 500 000 €. 225-12-1 vise les clients, pas lui. Saisie de son compte (706-154) ; au jugement, suspension possible des comptes en ligne utilisés (131-35-1, qui vise 225-5 et 225-6) et confiscation."
    },
    {
      id: "harceleur-comptes", titre: "Le harceleur qui recrée ses comptes",
      faits: "Condamné pour cyberharcèlement de son ancienne collègue, un homme continue à la viser depuis de nouveaux comptes Instagram et X créés après le jugement.",
      bonnes: ["s-131-35-1", "222-33-2-2"], pieges: ["s-131-21", "323-1", "226-4-1"],
      correction: "Le cyberharcèlement (222-33-2-2) figure parmi les délits pour lesquels le tribunal peut ordonner la suspension des comptes (131-35-1) : jusqu'à 6 mois, 1 an en récidive, avec interdiction de créer de nouveaux comptes ; la plateforme qui ne bloque pas encourt 75 000 €. Les nouveaux messages peuvent constituer une nouvelle infraction de harcèlement. La confiscation du téléphone (131-21) est possible mais ne l'empêche pas d'en racheter un."
    }
  );

  window.LEXIQUE.push(
    ["AGRASC", "Agence de gestion et de recouvrement des avoirs saisis et confisqués : gère les biens saisis pendant la procédure et après confiscation."],
    ["Saisie pénale", "Mesure qui bloque un bien pendant l'enquête pour garantir une future confiscation (CPP 706-141 et suivants)."],
    ["Suspension de comptes", "Peine complémentaire interdisant d'utiliser ses comptes de réseaux sociaux et d'en créer de nouveaux (CP 131-35-1)."],
    ["Point de deal numérique", "Vente de stupéfiants organisée via une messagerie ou un réseau social, souvent avec livraison."]
  );
  window.VRAIFAUX.push(
    { q: "La vente de cannabis via Snapchat est punie plus sévèrement que la vente de rue.", r: false, e: "Il n'existe pas d'aggravation propre à internet pour les stupéfiants (222-37, 222-39)." },
    { q: "Le proxénétisme commis grâce à un site d'annonces est puni de 10 ans d'emprisonnement.", r: true, e: "225-7, 10° : réseau de communication électronique diffusant des messages à un public non déterminé." },
    { q: "Un OPJ peut saisir des crypto-actifs détenus sur une plateforme habilitée avec l'autorisation du procureur donnée par tout moyen.", r: true, e: "CPP 706-154 ; le JLD statue sur le maintien dans les 10 jours." },
    { q: "La suspension des comptes de réseaux sociaux peut être prononcée pour 2 ans.", r: false, e: "6 mois au plus, 1 an en récidive (131-35-1)." }
  );
})();
