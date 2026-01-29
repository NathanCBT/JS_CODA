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
*/

async function AfficherDonneesPlayers() {
  try {
    const response = await fetch("http://10.45.31.53:8000api/api/listPlayers");
    if (!response.ok) {
      throw new Error("Erreur HTTP : " + response.status);
    }

    const data = await response.json();

    console.log("Nom :", data.name);
  } catch (error) {
    console.error("Erreur lors du chargement :", error);
  }
}
