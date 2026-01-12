// Taille aléatoire entre 7 et 10
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;







// partie 1

function genererEleves(){
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
    console.log(eleves);
    return eleves;
}

//partie 2
function afficherEleves(Tableau) {
    // afficher dans un format  “prenom - moyenne”
    Tableau.forEach((eleve) => {
        console.log(eleve.prenom, eleve.moyenne);
    });
}


//partie 3
function trouverMoyenneMin(Tableau, Index) {
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
    }
    console.log("personne qui a la plus petite moyenne : ","prenom : ",eleves[indice_valeur_min].prenom, " moyenne : ", eleves[indice_valeur_min].moyenne, " indice : ", indice_valeur_min);
    console.log("la plus petite moyenne est de : ",min);
}


//partie 4
function trouverMoyenneMax(Tableau, Index) {
    let max = Tableau[0].moyenne;
    let indice_valeur_max = 0;
    for (let i = 1; i < Tableau.length; i++) {
        if (Tableau[i].moyenne > max) {
            max = Tableau[i].moyenne;
            indice_valeur_max = i;//indice la da plus grande moyenne
        }
    }
    console.log("la plus grande moyenne est de : ",max);
}

function nombreEleves(tableau) {
    let nb_eleves = 0;
    for (let i = 0; i < eleves.length; i++) {
        nb_eleves++;
    }
    console.log("le nombre total d'élèves est de : ", nb_eleves);
}

function afficheDonnees(tableau) {
    trouverMoyenneMin(tableau);
    trouverMoyenneMax(tableau);
    nombreEleves(tableau);
}


//partie 5
function swap(tableau, EleveA, EleveB) {
    let stock = eleves[EleveA]; 
    eleves[EleveA] = eleves[EleveB]; 
    eleves[EleveB] = stock;
}

//partie 6
function triParSelection(tableau) {
    for (let i = 0; i < tableau.length; i++) {
        let min = tableau[i].moyenne;
        let indice_min = i;

        for (let j = i + 1; j < tableau.length; j++) {
            if (tableau[j].moyenne < min) {   // tri du plus petit au plus grand
                min = tableau[j].moyenne;
                indice_min = j;
            }
        }
        let stock = tableau[i];
        tableau[i] = tableau[indice_min];
        tableau[indice_min] = stock;
    }
}



//partie 7
    //partie 2
eleves = genererEleves();
afficherEleves(eleves);
    //partie 3
trouverMoyenneMin(eleves, 0);
    //partie 4
afficheDonnees(eleves);
    //partie 5
swap(eleves, 0, 4);
    //partie 6
triParSelection(eleves);
console.log("Après tri par moyenne :", eleves);