/*
fetch("http://10.45.31.53:8000api/api/listPlayers")
  .then((response) => response.json())
  .then((data) => console.log(data));*/
/*
fetch("http://10.45.31.53:8000api/api/listPlayers", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "",
    gamesPlayed: "",
    totalKills: "",
    totalDeaths: "",
    kdRatio: "",
  }),
});


async function afficherDonneesPlayers() {
  try {
    const response = await fetch("http://13.38.137.68:8000/api/listPlayers");
    if (!response.ok) {
      throw new Error("Erreur HTTP : " + response.status);
    }

    const data = await response.json();

    console.log("Nom :", data.name);
  } catch (error) {
    console.error("Erreur lors du chargement :", error);
  }
}
afficherDonneesPlayers();
console.log("green flag");
*/

async function afficherDonneesAsync() {
  try {
    fetch("http://13.38.137.68:8000/api/listPlayers")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data[0].name); //premier joueur
      });
  } catch (error) {
    console.error("Erreur lors du chargement :", error);
  }
}
afficherDonneesAsync();
console.log("blabla");

async function loadPlayers() {
  try {
    const response = await fetch("http://13.38.137.68:8000/api/listPlayers");

    if (!response.ok) {
      throw new Error("Erreur HTTP : " + response.status);
    }

    const players = await response.json();
    return players;
  } catch (error) {
    console.error("Erreur loadPlayers :", error);
    return [];
  }
}

async function loadPlayerStats(name) {
  try {
    const players = await loadPlayers();
    const player = players.find((p) => p.name === name);
    if (!player) {
      throw new Error("");
    }
    console.log("name :", player.name);
    console.log("nombre de game jouées", player.gamesPlayed);
    console.log("nombre de kills", player.totalKills);
    console.log("ratio", player.kdRatio);
    return player;
  } catch (error) {
    console.error("Erreur loadPlayerStats :", error);
    return null;
  }
}

async function loadRanking() {
  try {
    const players = await loadPlayers();

    //tri le meilleur joueur au moins bon
    players.sort((a, b) => b.overallRanking - a.overallRanking);
    console.log("Classement général :");

    //parcours de chaque joueur dans l’ordre du classement
    //index correspond à la position dans le tableau
    players.forEach((player, index) => {
      //index + 1 pour avoir un classement qui commence à 1 et non 0
      console.log(
        `${index + 1}. ${player.name} | Score: ${player.overallRanking}`,
      );
    });

    return players;
  } catch (error) {
    console.error("Erreur loadRanking :", error);
    return [];
  }
}

//http://13.38.137.68:8000/api/stats?name=Jay_Leteton_Alaire
