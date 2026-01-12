//partie 1
/*
// Taille aléatoire entre 7 et 10
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

// Liste de prénoms
let first_name = ["Pierre", "Nathan", "Gabriel", "Thomas", "Maeva", "Antoine", "Nathanael", "Marion", "Marine", "Enzo"];

// Note maximale
let note_maximum = 20;

// Tableau final des élèves
let eleves = [];

for (let i = 0; i < taille; i++) {

    // Choisir un prénom aléatoire
    let prenom = first_name[Math.floor(Math.random() * first_name.length)];

    // Générer les 3 notes aléatoires
    let noteFrancais = Math.floor(Math.random() * (note_maximum + 1));
    let noteMaths = Math.floor(Math.random() * (note_maximum + 1));
    let noteHistoire = Math.floor(Math.random() * (note_maximum + 1));
    // Construire l'objet élève
    let eleve = {
        prenom: prenom,
        noteFrancais: noteFrancais,
        noteMaths: noteMaths,
        noteHistoire: noteHistoire, 
        moyenne: 0
    };
    // moyenne 
    eleve.moyenne = (eleve.noteMaths+ eleve.noteFrancais + eleve.noteHistoire) / 3;
    // Ajouter au tableau
    eleves.push(eleve);
}

// Affichage du tableau final
console.log("Nombre d'élèves :", eleves.length);
console.log(eleves);
// afficher dans un format  “prenom - moyenne”
eleves.forEach((eleve) =>{
    console.log(eleve.prenom, eleve.moyenne);
});
*/


//partie 2
/*
// Taille aléatoire entre 7 et 10
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

// Liste de prénoms
let first_name = ["Pierre", "Nathan", "Gabriel", "Thomas", "Maeva", "Antoine", "Nathanael", "Marion", "Marine", "Enzo"];

// Note maximale
let note_maximum = 20;

// Tableau final des élèves
let eleves = [];

for (let i = 0; i < taille; i++) {

    // Choisir un prénom aléatoire
    let prenom = first_name[Math.floor(Math.random() * first_name.length)];

    // Générer les 3 notes aléatoires
    let noteFrancais = Math.floor(Math.random() * (note_maximum + 1));
    let noteMaths = Math.floor(Math.random() * (note_maximum + 1));
    let noteHistoire = Math.floor(Math.random() * (note_maximum + 1));
    // Construire l'objet élève
    let eleve = {
        prenom: prenom,
        noteFrancais: noteFrancais,
        noteMaths: noteMaths,
        noteHistoire: noteHistoire, 
        moyenne: 0
    };
    // moyenne 
    eleve.moyenne = (eleve.noteMaths+ eleve.noteFrancais + eleve.noteHistoire) / 3;
    // Ajouter au tableau
    eleves.push(eleve);
}

// affichage du tableau final
console.log("Nombre d'élèves :", eleves.length);
console.log(eleves);
// afficher dans un format  “prenom - moyenne”
eleves.forEach((eleve) =>{
    console.log(eleve.prenom, eleve.moyenne);
});

//afficcher le nombre total d'eleves
let nb_eleves = 0;
for(let i = 0; i < eleves.length; i++) {
    nb_eleves++;
}
console.log("le nombre total d'élèves est de : ",nb_eleves);

//afficher la plus petite moyenne et la plus grande 
let min = eleves[0].moyenne;
let max = eleves[0].moyenne;
let indice_valeur_min = 0;
let indice_valeur_max = 0;

for (let i = 1; i < eleves.length; i++) { 
    if (eleves[i].moyenne < min) { 
        min = eleves[i].moyenne;
        indice_valeur_min = [i]; 
    } 
    if (eleves[i].moyenne > max){
        max =eleves[i].moyenne;
        indice_valeur_max = [i];
    }
    
}
console.log("la plus petite moyenne est de : ",min);
console.log("la plus grande moyenne est de : ",max);
*/


//partie 3

// Taille aléatoire entre 7 et 10
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

// Liste de prénoms
let first_name = ["Pierre", "Nathan", "Gabriel", "Thomas", "Maeva", "Antoine", "Nathanael", "Marion", "Marine", "Enzo"];

// Note maximale
let note_maximum = 20;

// Tableau final des élèves
let eleves = [];

for (let i = 0; i < taille; i++) {

    // Choisir un prénom aléatoire
    let prenom = first_name[Math.floor(Math.random() * first_name.length)];

    // Générer les 3 notes aléatoires
    let noteFrancais = Math.floor(Math.random() * (note_maximum + 1));
    let noteMaths = Math.floor(Math.random() * (note_maximum + 1));
    let noteHistoire = Math.floor(Math.random() * (note_maximum + 1));
    // Construire l'objet élève
    let eleve = {
        prenom: prenom,
        noteFrancais: noteFrancais,
        noteMaths: noteMaths,
        noteHistoire: noteHistoire, 
        moyenne: 0
    };
    // moyenne 
    eleve.moyenne = (eleve.noteMaths+ eleve.noteFrancais + eleve.noteHistoire) / 3;
    // Ajouter au tableau
    eleves.push(eleve);
}

// affichage du tableau final
console.log("Nombre d'élèves :", eleves.length);
console.log(eleves);
// afficher dans un format  “prenom - moyenne”
eleves.forEach((eleve) =>{
    console.log(eleve.prenom, eleve.moyenne);
});

//afficcher le nombre total d'eleves
let nb_eleves = 0;
for(let i = 0; i < eleves.length; i++) {
    nb_eleves++;
}
console.log("le nombre total d'élèves est de : ",nb_eleves);

//afficher la plus petite moyenne et la plus grande 
let min = eleves[0].moyenne;
let max = eleves[0].moyenne;
let indice_valeur_min = 0;
let indice_valeur_max = 0;

for (let i = 1; i < eleves.length; i++) { 
    if (eleves[i].moyenne < min) { 
        min = eleves[i].moyenne;
        indice_valeur_min = i;//indice de la plus petite moyenne
    } 
    if (eleves[i].moyenne > max){
        max =eleves[i].moyenne;
        indice_valeur_max = i;//indice la da plus grande moyenne
    }
    
}
console.log("la plus petite moyenne est de : ",min);
console.log("la plus grande moyenne est de : ",max);
console.log("personne qui a la plus petite moyenne : ","prenom : ",eleves[indice_valeur_min].prenom, " moyenne : ", eleves[indice_valeur_min].moyenne, " indice : ", indice_valeur_min);




//partie 4
let stock = eleves[0]; 
eleves[0] = eleves[indice_valeur_min]; 
eleves[indice_valeur_min] = stock;

console.log(eleves);


//partie 5
