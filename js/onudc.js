/* Compléments inspirés de l'« Étude détaillée sur la cybercriminalité » de l'ONUDC (ébauche, février 2013) :
   compétence et coopération internationale, preuve numérique devant le juge.
   Seuls les points utiles en France et en Europe ont été retenus, réécrits à partir des textes français
   (relus sur Légifrance le 20 novembre 2026). */
(function () {
  var CP = window.LF.cp, CPP = window.LF.cpp;

  /* ---------- Fiches d'actes ---------- */
  window.ACTES.push(
    {
      id: "113-6-7", art: "CP 113-6 et 113-7", famille: "Compétence", titre: "Infractions commises à l'étranger par ou contre un Français",
      citation: "La loi pénale française est applicable à tout crime, ainsi qu'à tout délit puni d'emprisonnement, commis par un Français ou par un étranger hors du territoire de la République lorsque la victime est de nationalité française au moment de l'infraction.",
      qui: "Juridictions françaises ; poursuite des délits à la seule requête du ministère public (113-8).",
      conditions: "113-6 : crime commis par un Français à l'étranger ; délit commis par un Français à l'étranger si les faits sont aussi punis dans le pays où ils ont été commis. 113-7 (cité) : crime ou délit puni d'emprisonnement commis contre une victime française. Pour les délits, plainte de la victime ou dénonciation officielle du pays des faits (113-8).",
      duree: "—",
      plus: "En matière cyber, 113-2-1 suffit souvent (victime résidant en France). 113-6 et 113-7 servent quand la victime française réside à l'étranger, ou pour un auteur français opérant depuis l'étranger.",
      version: "10/12/2009 (113-6) ; 01/03/1994 (113-7)", url: CP + "LEGISCTA000006165263/"
    },
    {
      id: "694-15", art: "CPP 694-15 et 694-16", famille: "Coopération", titre: "Décision d'enquête européenne",
      citation: "Une décision d'enquête européenne est une décision judiciaire émise par un Etat membre, appelé Etat d'émission, demandant à un autre Etat membre, appelé Etat d'exécution, en utilisant des formulaires communs à l'ensemble des Etats, de réaliser dans un certain délai sur son territoire des investigations tendant à l'obtention d'éléments de preuve relatifs à une infraction pénale ou à la communication d'éléments de preuve déjà en sa possession.",
      qui: "Autorité judiciaire (procureur, juge d'instruction) ; en sens inverse, exécution en France des décisions d'autres États.",
      conditions: "Entre la France et les autres États membres de l'Union, l'entraide pénale passe en principe par la décision d'enquête européenne (art. 694-15). Elle peut aussi viser à empêcher provisoirement la destruction ou le déplacement d'éléments de preuve.",
      duree: "Délai fixé par la décision, selon des formulaires communs.",
      plus: "Citation : article 694-16. Issue de la directive 2014/41/UE (ordonnance du 1er décembre 2016). Pour des données détenues par un fournisseur dans un autre État membre, l'injonction e-evidence est désormais plus directe.",
      version: "03/12/2016", url: CPP + "LEGISCTA000006167502/"
    },
    {
      id: "695-11", art: "CPP 695-11", famille: "Coopération", titre: "Mandat d'arrêt européen",
      citation: "Le mandat d'arrêt européen est une décision judiciaire émise par un Etat membre de l'Union européenne, appelé Etat membre d'émission, en vue de l'arrestation et de la remise par un autre Etat membre, appelé Etat membre d'exécution, d'une personne recherchée pour l'exercice de poursuites pénales ou pour l'exécution d'une peine ou d'une mesure de sûreté privative de liberté.",
      qui: "Autorité judiciaire de l'État d'émission ; exécution par l'autorité judiciaire de l'État où se trouve la personne.",
      conditions: "Faits punis d'au moins un an d'emprisonnement, ou condamnation à au moins quatre mois (art. 695-12).",
      duree: "—",
      plus: "Remplace l'extradition entre États membres : procédure entièrement judiciaire et plus rapide. Hors de l'Union, on reste sur l'extradition.",
      version: "10/03/2004", url: CPP + "LEGISCTA000006167507/"
    },
    {
      id: "427", art: "CPP 427", famille: "Preuve", titre: "Liberté de la preuve et débat contradictoire",
      citation: "Hors les cas où la loi en dispose autrement, les infractions peuvent être établies par tout mode de preuve et le juge décide d'après son intime conviction. Le juge ne peut fonder sa décision que sur des preuves qui lui sont apportées au cours des débats et contradictoirement discutées devant lui.",
      qui: "Toutes les juridictions de jugement.",
      conditions: "Toute preuve est admissible (captures d'écran, journaux, expertises, métadonnées…), mais elle doit être versée aux débats et discutée contradictoirement.",
      duree: "—",
      plus: "La valeur de la preuve numérique dépend de sa fiabilité : origine, intégrité (empreinte), chaîne de traçabilité. Les preuves recueillies par les enquêteurs doivent en outre être loyales.",
      version: "02/09/1993", url: CPP + "LEGISCTA000006182908/"
    }
  );

  /* ---------- Leçons ---------- */
  var cooperation = {
    id: "cooperation", partie: "enquete",
    titre: "Compétence et coopération internationale",
    resume: "Quand la France peut juger, et comment obtenir preuves et suspects à l'étranger.",
    arts: ["323-1", "313-1"],
    contenu: `
<p>Dans une affaire cyber, l'auteur, les serveurs, les données et la victime sont rarement dans le même pays. Deux questions se posent : la France peut-elle juger ? Et comment obtenir les preuves et la personne ?</p>

<h3>1. La France peut-elle juger ?</h3>
<table class="tab">
<tr><th>Critère</th><th>Texte</th><th>Exemple</th></tr>
<tr><td>Un fait constitutif a eu lieu en France</td><td>CP 113-2</td><td>Le faux SMS est reçu et le virement fait depuis la France.</td></tr>
<tr><td>Délit commis en ligne contre une personne qui réside en France ou une société dont le siège est en France</td><td><a href="#/acte/113-2-1">CP 113-2-1</a></td><td>Rançongiciel lancé depuis l'étranger contre une PME française.</td></tr>
<tr><td>Auteur français à l'étranger</td><td><a href="#/acte/113-6-7">CP 113-6</a></td><td>Un Français qui pirate des serveurs depuis l'étranger (délit : double incrimination exigée).</td></tr>
<tr><td>Victime française à l'étranger</td><td><a href="#/acte/113-6-7">CP 113-7</a></td><td>Expatrié français victime de sextorsion par un auteur étranger.</td></tr>
</table>
<p>Plusieurs pays peuvent être compétents en même temps. Eurojust aide à décider où poursuivre, et la règle <em>non bis in idem</em> interdit de juger deux fois la même personne pour les mêmes faits dans l'Union.</p>

<h3>2. Obtenir les preuves</h3>
<ul>
  <li><strong>Dans l'Union européenne</strong> : la <a href="#/acte/694-15">décision d'enquête européenne</a> (perquisition, audition, interception… réalisées par l'autre État) ; depuis le 18 août 2026, l'<a href="#/europe">injonction européenne de production ou de conservation</a> adressée directement au fournisseur de services.</li>
  <li><strong>Hors de l'Union</strong> : la demande d'entraide classique, fondée sur un traité bilatéral ou la Convention de Budapest, souvent lente (plusieurs mois).</li>
  <li><strong>Directement auprès des grands fournisseurs</strong> : beaucoup de plateformes établies hors de France répondent volontairement à certaines demandes des autorités françaises (données d'abonné, préservation), selon leurs propres règles.</li>
  <li><strong>Pendant une perquisition</strong> : l'accès aux données stockées à l'étranger depuis l'ordinateur saisi n'est possible que dans le cadre des engagements internationaux (<a href="#/acte/57-1">CPP 57-1</a>).</li>
</ul>

<h3>3. Obtenir la personne</h3>
<ul>
  <li>Dans l'Union : le <a href="#/acte/695-11">mandat d'arrêt européen</a>, entièrement judiciaire, pour des faits punis d'au moins un an.</li>
  <li>Hors de l'Union : l'extradition, qui dépend des traités et de la volonté de l'État ; certains pays n'extradent pas leurs ressortissants.</li>
</ul>

<h3>4. La coopération informelle et opérationnelle</h3>
<p>À côté des procédures formelles, la coopération de police à police est essentielle pour aller vite : réseau de points de contact 24/7 (Convention de Budapest, art. 35), Europol et son centre de lutte contre la cybercriminalité, Interpol, équipes communes d'enquête entre plusieurs États. Les informations obtenues ainsi servent à orienter l'enquête ; pour être utilisées comme preuves, elles doivent en principe être obtenues ou confirmées par une voie formelle.</p>

<div class="encadre"><strong>En résumé.</strong> Être compétent ne suffit pas : sans les preuves et sans la personne, la procédure reste bloquée. D'où l'importance de préserver les données très tôt et de passer par les outils européens dès qu'un autre État membre est concerné.</div>
`,
    retenir: [
      "Compétence : 113-2 (fait en France), 113-2-1 (victime en France, infraction en ligne), 113-6 (auteur français), 113-7 (victime française).",
      "Preuves dans l'UE : décision d'enquête européenne, et e-evidence pour les fournisseurs.",
      "Personnes dans l'UE : mandat d'arrêt européen (faits punis d'au moins un an).",
      "La coopération informelle oriente l'enquête ; la preuve passe par les voies formelles."
    ]
  };

  var preuve = {
    id: "preuve-juge", partie: "enquete",
    titre: "La preuve numérique devant le juge",
    resume: "Liberté de la preuve, loyauté, fiabilité : ce qui rend une capture d'écran ou un journal convaincant.",
    arts: ["434-15-2"],
    contenu: `
<h3>Le principe : la liberté de la preuve</h3>
<p>En matière pénale, une infraction peut être établie « par tout mode de preuve » et le juge décide selon son intime conviction, à condition que la preuve ait été discutée contradictoirement à l'audience (<a href="#/acte/427">CPP art. 427</a>). Une capture d'écran, un journal de connexion, une conversation exportée, une expertise : tout peut être produit. La vraie question n'est donc pas « est-ce recevable ? » mais « est-ce fiable ? ».</p>

<h3>Ce qui fait la force d'une preuve numérique</h3>
<table class="tab">
<tr><th>Question de la défense</th><th>Réponse attendue</th></tr>
<tr><td>D'où vient cette donnée ?</td><td>Origine identifiée : support saisi, réponse à réquisition d'un opérateur, constat d'un enquêteur ou d'un commissaire de justice.</td></tr>
<tr><td>A-t-elle été modifiée ?</td><td>Empreinte (hash) calculée à la saisie et vérifiée ensuite ; analyse faite sur une copie.</td></tr>
<tr><td>Qui l'a manipulée ?</td><td>Chaîne de traçabilité : scellés, procès-verbaux, rapport d'expertise.</td></tr>
<tr><td>Que montre-t-elle vraiment ?</td><td>Interprétation prudente : une adresse IP désigne un abonnement, pas une personne ; un compte peut être utilisé par un tiers ; les horodatages dépendent des fuseaux et de l'horloge de la machine.</td></tr>
</table>
<p>Une simple capture d'écran fournie par la victime est utile pour démarrer, mais fragile : elle se fabrique facilement. Elle gagne à être confirmée par un procès-verbal de constat de l'enquêteur (URL, date, heure) et par les réponses des plateformes aux réquisitions.</p>

<h3>La loyauté de la preuve</h3>
<ul>
  <li><strong>Pour les enquêteurs</strong>, la preuve doit être recueillie loyalement : pas de provocation à l'infraction (rappelé expressément pour l'enquête sous pseudonyme, <a href="#/acte/230-46">230-46</a>), respect des conditions de chaque acte (autorisation, seuils de peine, durée), sous peine de nullité.</li>
  <li><strong>Pour les parties privées</strong> (victime, entreprise), la chambre criminelle admet de longue date que le juge ne peut écarter une preuve au seul motif qu'elle a été obtenue de façon illicite ou déloyale ; il en apprécie la valeur après débat contradictoire. Attention : la personne qui l'a recueillie peut, elle, commettre une infraction (par exemple en accédant à la messagerie d'autrui).</li>
</ul>

<h3>L'expertise</h3>
<p>Pour les analyses techniques complexes (téléphone chiffré, disque, mémoire vive, flux réseau), le juge ou le procureur font appel à un expert ou à un service spécialisé, qui rend un rapport décrivant sa méthode et ses limites. Les données chiffrées relèvent de la procédure de mise au clair (<a href="#/acte/230-1">230-1</a>) ; le refus de remettre une clé est un délit (<a class="art" href="#/infraction/434-15-2">434-15-2</a>).</p>

<div class="encadre attention"><strong>Recodification.</strong> L'article 427 du CPP, comme les autres articles cités, sera renuméroté au 1er janvier 2029.</div>
`,
    retenir: [
      "Liberté de la preuve et intime conviction (CPP 427), mais débat contradictoire obligatoire.",
      "Fiabilité : origine, intégrité (empreinte), traçabilité, interprétation prudente.",
      "Une adresse IP désigne un abonnement, pas une personne.",
      "Enquêteurs : preuve loyale, pas de provocation ; parties privées : preuve admise, appréciée par le juge."
    ]
  };

  var pos = window.COURS.length;
  window.COURS.forEach(function (c, i) { if (c.id === "difficultes-enquete") pos = i + 1; });
  window.COURS.splice(pos, 0, cooperation, preuve);

  /* ---------- Lexique ---------- */
  window.LEXIQUE.push(
    ["Décision d'enquête européenne", "Demande d'un magistrat à un autre État membre d'accomplir un acte d'enquête (CPP 694-15 et suivants)."],
    ["Mandat d'arrêt européen", "Décision judiciaire d'arrestation et de remise d'une personne entre États membres (CPP 695-11)."],
    ["Entraide pénale internationale", "Coopération entre autorités judiciaires de pays différents pour obtenir des preuves ou des actes."],
    ["Non bis in idem", "Principe selon lequel une personne ne peut être poursuivie ou condamnée deux fois pour les mêmes faits."],
    ["Intime conviction", "Le juge pénal apprécie librement la valeur des preuves débattues devant lui (CPP 427)."],
    ["Loyauté de la preuve", "Les enquêteurs ne peuvent obtenir une preuve par provocation ou par un stratagème déloyal."],
    ["Équipe commune d'enquête", "Équipe d'enquêteurs de plusieurs États travaillant ensemble sur une même affaire."]
  );

  /* ---------- Vrai ou faux ---------- */
  window.VRAIFAUX.push(
    { q: "Une capture d'écran est en principe recevable comme preuve devant le juge pénal.", r: true, e: "Liberté de la preuve (CPP 427) ; reste à en établir la fiabilité." },
    { q: "Une adresse IP identifie avec certitude l'auteur d'un message.", r: false, e: "Elle désigne un abonnement ou une connexion ; plusieurs personnes peuvent l'utiliser." },
    { q: "Le mandat d'arrêt européen peut être émis pour des faits punis d'au moins un an d'emprisonnement.", r: true, e: "Article 695-12 du CPP." },
    { q: "Entre États membres de l'Union, l'entraide pénale passe en principe par la décision d'enquête européenne.", r: true, e: "Article 694-15 du CPP." },
    { q: "La loi française s'applique à un délit commis à l'étranger contre une victime de nationalité française, s'il est puni d'emprisonnement.", r: true, e: "Article 113-7 du Code pénal ; poursuite sur plainte ou dénonciation officielle (113-8)." }
  );

  /* ---------- Cas pratique ---------- */
  var L = window.CAS_LIBELLES = window.CAS_LIBELLES || {};
  L["c-113-2-1"] = "Compétence : CP 113-2-1 (infraction en ligne, victime en France)";
  L["c-113-7"] = "Compétence : CP 113-7 (victime de nationalité française)";
  L["c-incompetent"] = "La France n'est pas compétente : l'auteur et le serveur sont à l'étranger";
  L["o-dee"] = "Outil : décision d'enquête européenne vers l'Allemagne";
  L["o-eevidence"] = "Outil : injonction européenne de production au fournisseur";
  L["o-mae"] = "Outil : mandat d'arrêt européen";
  L["o-extradition"] = "Outil : demande d'extradition à l'Allemagne";
  L["o-capture"] = "Preuve : se contenter des captures d'écran de la victime";
  window.CAS.push({
    id: "t-international", partie: "cooperation", titre: "L'escroc installé en Allemagne",
    faits: "Une PME de Lyon perd 40 000 € après un faux changement de coordonnées bancaires d'un fournisseur, envoyé depuis une messagerie piratée. L'enquête montre que les mails de l'escroc passaient par un hébergeur établi en Irlande et que le suspect, de nationalité roumaine, vit en Allemagne.",
    bonnes: ["c-113-2-1", "313-1", "o-eevidence", "o-mae", "o-dee"], pieges: ["c-incompetent", "o-extradition", "o-capture", "c-113-7"],
    correction: "La victime a son siège en France et l'infraction a été commise en ligne : la loi française s'applique (113-2-1 ; la remise des fonds en France suffirait aussi, 113-2). 113-7 vise une victime de nationalité française agissant hors de France : inutile ici. Qualification : escroquerie (313-1), et 323-1 pour la messagerie piratée. Pour les données de l'hébergeur irlandais : injonction européenne de production (e-evidence) ; pour des actes en Allemagne (perquisition, audition) : décision d'enquête européenne ; pour obtenir la personne : mandat d'arrêt européen, et non l'extradition, réservée aux pays hors de l'Union. Les captures de la victime ne suffisent pas : il faut des réponses de fournisseurs et des constats."
  });
})();
