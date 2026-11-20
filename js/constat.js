/* Provocation au suicide, faux documents vendus en ligne, procès-verbal de constat sur internet.
   Textes relus sur Légifrance le 20 novembre 2026. */
(function () {
  var CP = window.LF.cp, CPP = window.LF.cpp;

  window.INFRACTIONS.push(
    {
      id: "223-13", art: "223-13 et 223-14", code: "Code pénal", theme: "personnes",
      titre: "Provocation au suicide (y compris en ligne)",
      materiel: "Provoquer au suicide d'autrui, lorsque la provocation a été suivie du suicide ou d'une tentative de suicide (223-13). Faire de la propagande ou de la publicité, quel qu'en soit le mode, en faveur de produits, objets ou méthodes préconisés comme moyens de se donner la mort (223-14).",
      moral: "Volonté de pousser la victime au suicide (223-13) ; conscience du caractère de propagande (223-14).",
      peines: [
        ["Provocation suivie d'un suicide ou d'une tentative (223-13)", "3 ans d'emprisonnement et 45 000 € d'amende"],
        ["Victime mineure de 15 ans (223-13)", "5 ans et 75 000 €"],
        ["Propagande ou publicité pour des moyens de se donner la mort (223-14)", "3 ans et 45 000 €"]
      ],
      notes: "Sans suicide ni tentative, 223-13 ne s'applique pas. Dans les affaires de harcèlement, le suicide ou la tentative de la victime est aussi une aggravation propre du harcèlement dans le couple ou scolaire (222-33-2-1, 222-33-2-3 : 10 ans). 223-14 vise par exemple les contenus en ligne qui vantent des méthodes de suicide. Peine complémentaire de suspension des comptes possible (131-35-1).",
      tentative: false, version: "26/11/2009 (223-13) ; 01/01/2002 (223-14)", url: CP + "LEGISCTA000006165292/", verifie: true,
      motscles: "suicide provocation harcèlement adolescent défi méthode propagande"
    },
    {
      id: "441-1", art: "441-1", code: "Code pénal", theme: "biens",
      titre: "Faux et usage de faux (documents numériques compris)",
      materiel: "Toute altération frauduleuse de la vérité, de nature à causer un préjudice, accomplie par quelque moyen que ce soit dans un écrit ou tout autre support d'expression de la pensée destiné ou pouvant servir à prouver un droit ou un fait ayant des conséquences juridiques ; et l'usage d'un tel faux.",
      moral: "Conscience de l'altération de la vérité.",
      peines: [["Faux et usage de faux", "3 ans d'emprisonnement et 45 000 € d'amende"]],
      notes: "« Tout autre support d'expression de la pensée » couvre les documents numériques : faux RIB, fausse facture, faux bulletin de salaire, faux mail d'avocat dans une fraude au président. Correspond à l'article 7 de la Convention de Budapest (falsification informatique).",
      tentative: false, version: "01/01/2002", url: CP + "LEGISCTA000006149854/", verifie: true,
      motscles: "faux document numérique rib facture bulletin salaire fraude"
    },
    {
      id: "441-2", art: "441-2 et 441-3", code: "Code pénal", theme: "biens",
      titre: "Faux documents administratifs vendus en ligne (papiers d'identité, permis…)",
      materiel: "Faux commis dans un document délivré par une administration pour constater un droit, une identité ou une qualité, ou accorder une autorisation (carte d'identité, passeport, permis de conduire, titre de séjour…), et son usage (441-2) ; détention frauduleuse d'un tel faux (441-3).",
      moral: "Conscience de la falsification.",
      peines: [
        ["Faux ou usage (441-2)", "5 ans d'emprisonnement et 75 000 € d'amende"],
        ["De manière habituelle, ou pour faciliter un crime (441-2)", "7 ans et 100 000 €"],
        ["Détention d'un faux document (441-3)", "2 ans et 30 000 €"],
        ["Détention de plusieurs faux documents (441-3)", "5 ans et 75 000 €"]
      ],
      notes: "Vise les vendeurs de faux papiers sur les messageries ou le darkweb (souvent « de manière habituelle »), et les acheteurs qui les détiennent ou les utilisent. Les faux papiers servent aussi à ouvrir des comptes de mules.",
      tentative: false, version: "01/01/2002", url: CP + "LEGISCTA000006149854/", verifie: true,
      motscles: "faux papiers carte identité passeport permis titre séjour vente darkweb telegram"
    },
    {
      id: "441-7", art: "441-7", code: "Code pénal", theme: "biens",
      titre: "Fausses attestations et faux certificats",
      materiel: "Établir une attestation ou un certificat faisant état de faits matériellement inexacts, falsifier une attestation sincère, ou faire usage d'une attestation inexacte ou falsifiée.",
      moral: "Conscience de l'inexactitude.",
      peines: [
        ["Base", "1 an d'emprisonnement et 15 000 € d'amende"],
        ["Pour porter préjudice au Trésor public ou au patrimoine d'autrui, ou obtenir un titre de séjour", "3 ans et 45 000 €"]
      ],
      notes: "Vise les fausses attestations vendues en ligne : faux certificats médicaux, attestations d'hébergement ou d'employeur, faux justificatifs pour obtenir un crédit ou une aide.",
      tentative: false, version: "12/09/2018", url: CP + "LEGISCTA000006149854/", verifie: true,
      motscles: "fausse attestation faux certificat médical justificatif"
    }
  );

  var C = window.CITATIONS;
  C["223-13"] = "Le fait de provoquer au suicide d'autrui est puni de trois ans d'emprisonnement et de 45 000 euros d'amende lorsque la provocation a été suivie du suicide ou d'une tentative de suicide. Les peines sont portées à cinq ans d'emprisonnement et à 75 000 euros d'amende lorsque la victime de l'infraction définie à l'alinéa précédent est un mineur de quinze ans.";
  C["441-1"] = "Constitue un faux toute altération frauduleuse de la vérité, de nature à causer un préjudice et accomplie par quelque moyen que ce soit, dans un écrit ou tout autre support d'expression de la pensée qui a pour objet ou qui peut avoir pour effet d'établir la preuve d'un droit ou d'un fait ayant des conséquences juridiques. Le faux et l'usage de faux sont punis de trois ans d'emprisonnement et de 45 000 euros d'amende.";
  C["441-2"] = "Le faux commis dans un document délivré par une administration publique aux fins de constater un droit, une identité ou une qualité ou d'accorder une autorisation est puni de cinq ans d'emprisonnement et de 75 000 euros d'amende. L'usage du faux mentionné à l'alinéa précédent est puni des mêmes peines.";
  C["441-7"] = "Indépendamment des cas prévus au présent chapitre, est puni d'un an d'emprisonnement et de 15 000 euros d'amende le fait : 1° D'établir une attestation ou un certificat faisant état de faits matériellement inexacts ; 2° De falsifier une attestation ou un certificat originairement sincère ; 3° De faire usage d'une attestation ou d'un certificat inexact ou falsifié.";

  /* ---------- Fiche d'acte ---------- */
  window.ACTES.push({
    id: "429", art: "CPP 429", famille: "Preuve", titre: "Valeur probante du procès-verbal (dont le constat en ligne)",
    citation: "Tout procès-verbal ou rapport n'a de valeur probante que s'il est régulier en la forme, si son auteur a agi dans l'exercice de ses fonctions et a rapporté sur une matière de sa compétence ce qu'il a vu, entendu ou constaté personnellement.",
    qui: "Tout OPJ ou APJ qui rédige un procès-verbal.",
    conditions: "Régularité de forme ; auteur agissant dans ses fonctions et dans sa compétence ; constatations personnelles.",
    duree: "—",
    plus: "C'est ce qui donne sa force au procès-verbal de constat d'une page internet : l'enquêteur décrit ce qu'il a lui-même vu en ligne. La preuve reste libre et discutée contradictoirement (427).",
    version: "01/01/2001", url: CPP + "LEGISCTA000006182908/"
  });

  /* ---------- Leçon ---------- */
  var constat = {
    id: "constat-internet", partie: "enquete",
    titre: "Le procès-verbal de constat sur internet",
    resume: "Figer une page, un profil ou un message avant qu'il disparaisse, de façon incontestable.",
    arts: ["441-1"],
    contenu: `
<p>Un contenu en ligne peut être supprimé en quelques secondes. La capture d'écran de la victime est utile, mais fragile : elle se truque facilement. Le procès-verbal de constat dressé par l'enquêteur lui donne une tout autre force : selon l'article <a href="#/acte/429">429 du CPP</a>, un procès-verbal fait foi de ce que son auteur a « vu, entendu ou constaté personnellement », s'il est régulier et établi dans ses fonctions.</p>

<div class="encadre attention">Cette leçon décrit des bonnes pratiques couramment enseignées ; elle ne reprend pas un texte officiel. Les modèles et outils exacts varient selon les services : demande ceux de ton service de stage.</div>

<h3>Ce que doit contenir le constat</h3>
<ul>
  <li><strong>Le cadre</strong> : date, heure (avec le fuseau), identité et qualité de l'enquêteur, cadre d'enquête (flagrance, préliminaire, commission rogatoire).</li>
  <li><strong>L'environnement technique</strong> : poste et connexion utilisés (de préférence un poste dédié aux investigations, non rattaché à une identité personnelle), navigateur.</li>
  <li><strong>Le chemin d'accès</strong> : comment l'enquêteur est arrivé au contenu (adresse URL complète, recherche effectuée, compte utilisé ou consultation sans compte).</li>
  <li><strong>La description</strong> : ce qui est vu, avec l'identifiant exact du compte (pas seulement le pseudonyme affiché, qui peut changer), la date de publication affichée, le nombre d'abonnés ou de vues si utile.</li>
  <li><strong>Les captures</strong> annexées, numérotées et décrites, et si possible un enregistrement vidéo de la navigation ou une archive de la page, avec leur empreinte (hash) pour prouver qu'elles n'ont pas été modifiées.</li>
</ul>

<h3>Ce qu'il ne faut pas faire</h3>
<ul>
  <li>Interagir avec le suspect sans cadre légal : échanger sous une fausse identité relève de l'<a href="#/acte/230-46">enquête sous pseudonyme</a>, réservée aux enquêteurs habilités, et ne doit jamais provoquer l'infraction.</li>
  <li>Se contenter de la capture de la victime sans la vérifier : un faux est vite fabriqué, et sa production serait elle-même un faux (<a class="art" href="#/infraction/441-1">441-1</a>).</li>
  <li>Oublier les suites : constater ne suffit pas, il faut aussi demander la préservation des données à la plateforme (<a href="#/acte/60-2">CPP 60-2</a>), puis les requérir (<a href="#/acte/60-1-2">60-1-2</a>).</li>
</ul>

<h3>Et du côté de la victime ?</h3>
<p>Une victime peut aussi faire établir un constat par un commissaire de justice (anciennement huissier), utile notamment pour une action civile. Pour la plainte, des captures complètes (URL, date, auteur) et la conservation des messages suffisent souvent à démarrer l'enquête.</p>
`,
    retenir: [
      "Un procès-verbal fait foi de ce que l'enquêteur a constaté personnellement (CPP 429).",
      "Noter : date et heure, poste utilisé, URL complète, identifiant exact du compte, captures numérotées avec empreinte.",
      "Ne pas échanger avec le suspect hors du cadre de l'enquête sous pseudonyme.",
      "Constater, puis faire préserver et requérir les données."
    ]
  };

  var pos = window.COURS.length;
  window.COURS.forEach(function (c, i) { if (c.id === "preuve-juge") pos = i + 1; });
  window.COURS.splice(pos, 0, constat);

  /* Leçon menaces : rappel de la provocation au suicide */
  window.COURS.forEach(function (c) {
    if (c.id === "menaces-en-ligne") {
      c.contenu = c.contenu.replace(
        "<tr><td>Menaces publiques d'attentat</td>",
        "<tr><td>Messages qui poussent la victime au suicide, suivis d'un suicide ou d'une tentative</td><td><a class=\"art\" href=\"#/infraction/223-13\">223-13</a></td><td>3 ans ; 5 ans si mineur de 15 ans</td></tr>\n<tr><td>Menaces publiques d'attentat</td>"
      );
    }
  });

  /* ---------- Cas pratiques ---------- */
  var L = window.CAS_LIBELLES = window.CAS_LIBELLES || {};
  L["c-pv"] = "Réflexe : procès-verbal de constat de l'enquêteur (URL, identifiant du compte, captures avec empreinte)";
  L["c-capture"] = "Se contenter des captures d'écran fournies par la victime";
  L["c-preservation"] = "Réflexe : demande de préservation des données à la plateforme";
  L["c-contact"] = "Écrire au suspect depuis un compte personnel pour obtenir des aveux";
  window.CAS.push(
    {
      id: "faux-papiers", titre: "La boutique de faux papiers",
      faits: "Un canal Telegram propose des cartes d'identité, permis de conduire et attestations d'employeur « garantis indétectables ». L'enquête identifie l'administrateur, qui en a vendu plus de 300 ; chez un acheteur, on trouve deux fausses cartes d'identité à des noms différents.",
      bonnes: ["441-2", "441-7", "324-1"], pieges: ["441-1", "313-1", "323-3-2"],
      correction: "Fabriquer et vendre de faux documents administratifs : 441-2, aggravé à 7 ans car commis de manière habituelle. Les fausses attestations d'employeur relèvent de 441-7. L'acheteur détient plusieurs faux documents administratifs : 441-3 (5 ans), sur la même fiche que 441-2. Les gains peuvent être blanchis (324-1). 441-1 est le texte général : quand le document est délivré par une administration, c'est 441-2 qui s'applique. Une chaîne Telegram n'est pas, en elle-même, la plateforme visée par 323-3-2."
    },
    {
      id: "constat-profil", titre: "Le profil qui va disparaître",
      faits: "Une adolescente signale qu'un compte Instagram publie des photos d'elle avec des messages l'incitant à « en finir ». La veille, elle a tenté de mettre fin à ses jours. Le compte change de pseudonyme régulièrement.",
      bonnes: ["223-13", "222-33-2-2", "c-pv", "c-preservation"], pieges: ["c-capture", "c-contact", "226-4-1"],
      correction: "Provocation au suicide suivie d'une tentative (223-13 : 5 ans si la victime a moins de 15 ans, 3 ans sinon) ; harcèlement aggravé par l'usage d'un service en ligne et la minorité de la victime (222-33-2-2), voire harcèlement scolaire si l'auteur fréquente son établissement. Réflexes : procès-verbal de constat immédiat avec l'identifiant exact du compte (le pseudonyme change, l'identifiant non), captures avec empreinte, puis demande de préservation des données à la plateforme. Ne pas contacter l'auteur depuis un compte personnel. La protection de la victime passe en premier (signalement, prise en charge)."
    }
  );

  window.LEXIQUE.push(
    ["Procès-verbal de constat", "Acte par lequel un enquêteur décrit ce qu'il a personnellement vu, notamment sur internet ; il fait foi s'il est régulier (CPP 429)."],
    ["Identifiant de compte", "Numéro ou nom technique unique d'un compte, qui ne change pas quand l'utilisateur modifie son pseudonyme affiché."],
    ["Faux", "Altération frauduleuse de la vérité dans un document, papier ou numérique, de nature à causer un préjudice (441-1)."]
  );
  window.VRAIFAUX.push(
    { q: "La provocation au suicide est punissable même si la victime n'a fait aucune tentative.", r: false, e: "223-13 exige que la provocation ait été suivie d'un suicide ou d'une tentative." },
    { q: "Un faux RIB envoyé par mail peut constituer un faux au sens de l'article 441-1.", r: true, e: "Le texte vise tout « support d'expression de la pensée », numérique compris." },
    { q: "Détenir plusieurs faux documents d'identité est puni de 5 ans d'emprisonnement.", r: true, e: "Article 441-3, alinéa 2." },
    { q: "Dans un constat en ligne, le pseudonyme affiché suffit à identifier le compte.", r: false, e: "Il faut relever l'identifiant technique du compte : le pseudonyme peut changer." }
  );
})();
