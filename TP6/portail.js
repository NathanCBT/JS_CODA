const inputPseudo = document.getElementById("NamePlayer");
const startBtn = document.getElementById("theme-btn");

const skinSelector = document.getElementById("skin-selector");
let selectedSkin = null;

for (let i = 1; i <= 29; i++) {
    // création de canvas
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    canvas.classList.add("skin-canvas");

    skinSelector.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    // Charger le sprite sheet
    const skinPath = new Image();
    skinPath.src = `assets/${i}.png`;

    skinPath.onload = () => {
        ctx.drawImage(
            skinPath,
            0, 10*64, 64, 64,   // source x, y, w, h
            0, 0, 64, 64    // destination ""
        );
    };

    // Sélection du skin
    canvas.addEventListener("click", () => {
        // Retirer l'ancienne sélection
        document.querySelectorAll(".skin-canvas").forEach(c => {
            c.classList.remove("skin-selected");
        });

        // Ajouter la nouvelle sélection
        canvas.classList.add("skin-selected");
        selectedSkin = i;
        
        // Sauvegarder
        localStorage.setItem("selectedSkin", i);

        console.log("Skin sélectionné :", i);
    });
}
const skin = localStorage.getItem("selectedSkin");

startBtn.addEventListener("click", () => {
    const pseudo = inputPseudo.value;

    if (pseudo.trim() === "" && selectedSkin === null) {
        showError("Veuillez entrer un pseudo et choisir un skin");
        return;
    }
    if (pseudo === "") {
        showError("Veuillez entrer un pseudo");
        return;
    }
    if (selectedSkin === null) {
        showError("Veuillez choisir un skin"); 
        return;
    }
    console.log("Pseudo :", pseudo);
    console.log("Skin :", selectedSkin);
});


//message d'erreures 
const errorBox = document.getElementById("error-box");
const errorMessage = document.getElementById("error-message");
const closeError = document.getElementById("close-error");

function showError(message) {
    errorMessage.textContent = message;
    errorBox.style.display = "block";
}

closeError.addEventListener("click", () => {
    errorBox.style.display = "none";
});


//lien backend 
const inputServerUrl = document.getElementById("LienBackend");

