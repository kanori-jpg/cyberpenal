/* INTERPOL et la cybercriminalité — d'après la brochure « Cybercriminalité — Des projets de police tournés
   vers l'avenir » (INTERPOL, 2017), résumée et replacée dans le contexte français. */
(function () {
  /* Page Europe et international : après Europol et Eurojust */
  window.EUROPE.push({
    id: "interpol", nom: "INTERPOL", ref: "Organisation internationale de police criminelle, siège à Lyon", type: "Coopération",
    quoi: "Organisation de coopération policière mondiale. En matière cyber (présentation de 2017) : appui aux enquêtes et coordination d'opérations transnationales depuis son Complexe mondial pour l'innovation à Singapour ; un « Cyber Fusion Centre » réunissant policiers et experts du secteur privé pour produire du renseignement exploitable ; un laboratoire d'informatique légale (analyse de logiciels malveillants, examen de supports, test d'outils) ; des formations (darknet, informatique légale, analyse de malwares) ; et les notices et diffusions pour alerter toutes les polices.",
    france: "La France y passe pour les échanges avec les pays hors de l'Union européenne ; dans l'Union, Europol et Eurojust sont les canaux habituels. Pour les infractions spécifiques au numérique, l'OFAC est le point de contact central de la France dans les échanges opérationnels internationaux (décret n° 2023-1083, art. 7).",
    statut: "—"
  });

  /* Leçon « Compétence et coopération » : une précision sur les notices */
  window.COURS.forEach(function (c) {
    if (c.id === "cooperation") {
      c.contenu = c.contenu.replace(
        "Interpol, équipes communes d'enquête entre plusieurs États.",
        "Interpol (dont les <strong>notices</strong> : la notice rouge demande la localisation et l'arrestation provisoire d'une personne en vue de son extradition, la notice violette diffuse un mode opératoire), équipes communes d'enquête entre plusieurs États."
      );
    }
    if (c.id === "preuve-juge") {
      c.contenu = c.contenu.replace(
        "<h3>La loyauté de la preuve</h3>",
        "<h3>Relier le numérique au physique</h3><p>Une enquête cyber aboutit quand on relie une trace numérique (adresse IP, identifiant d'appareil, compte, portefeuille de crypto-actifs) à une personne réelle : abonnement à son nom, téléphone saisi chez elle, image de vidéoprotection, géolocalisation, retrait d'argent. C'est souvent ce recoupement, plus qu'une preuve isolée, qui convainc le juge.</p><h3>La loyauté de la preuve</h3>"
      );
    }
  });

  window.LEXIQUE.push(
    ["INTERPOL", "Organisation internationale de police criminelle (siège à Lyon) : échanges d'informations, notices, appui aux enquêtes transnationales."],
    ["Notice INTERPOL", "Avis international diffusé aux polices des pays membres ; la notice rouge vise la localisation et l'arrestation provisoire en vue d'extradition, la violette décrit un mode opératoire."],
    ["Crime-as-a-service", "Vente ou location d'outils et de services criminels (rançongiciel, botnet, hameçonnage) à d'autres délinquants."]
  );
  window.VRAIFAUX.push(
    { q: "Le siège d'INTERPOL se trouve à Lyon.", r: true, e: "Le secrétariat général d'INTERPOL est installé à Lyon." },
    { q: "La notice rouge d'INTERPOL vaut mandat d'arrêt international dans tous les pays.", r: false, e: "Elle demande la localisation et l'arrestation provisoire en vue d'extradition ; chaque pays décide selon son droit." }
  );
})();
