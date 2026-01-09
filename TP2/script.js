//////////////////////// Code fourni (ne pas moidifier) ////////////////////////

// Définir la taille du tableau de notes au hasard entre 15 et 30 éléments
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

// Déclarer le tableau pour stocker les notes
let notes = [];
// Définir la note maximale (pas besoin de définir la note minimale car elle est 0 par défaut)
let note_maximum = 20;

// Itérer autant de fois qu'on a de notes aléatoires à générer
for (let i = 0; i < taille; i++) {
    // Générer une note aléatoire entre 0 et note_maximum (inclus)
    let note = Math.floor(Math.random() * (note_maximum + 1));
    // Ajouter la note générée au tableau
    notes.push(note);
}

///////////////////////////////////////////////////////////////////////////////


//partie 1 et 2 
/*
console.log("la taille du tableau est de : ",notes.length);
let min = notes[0];
let max = notes[0];
let indice_valeur_min = 0;
let indice_valeur_max = 0;

for (let i = 1; i < notes.length; i++) { 
    if (notes[i] < min) { 
        min = notes[i];
        indice_valeur_min = [i]; 
    } 
    if (notes[i] > max){
        max =notes[i];
        indice_valeur_max = [i];
    }
    
}
console.log("le minimum est de : ",min);
console.log("le maximum est de : ",max);
console.log(notes);
console.log("indice de la valeur min",indice_valeur_min);
console.log("indice de la valeur max",indice_valeur_max);
*/
//partie 3
/*
console.log("la taille du tableau est de : ",notes.length);
let min = notes[0];
let max = notes[0];
let indice_valeur_min = 0;
let indice_valeur_max = 0;
let stock = notes[0];

for (let i = 1; i < notes.length; i++) { 
    if (notes[i] < min) { 
        min = notes[i];
        indice_valeur_min = i; 
    } 
    if (notes[i] > max){
        max =notes[i];
        indice_valeur_max = i;
    }
    
}
notes[0] = min;
notes[indice_valeur_min] = stock;

console.log("le minimum est de : ",min);
console.log("le maximum est de : ",max);
console.log(notes);
console.log("indice de la valeur min",indice_valeur_min);
console.log("indice de la valeur max",indice_valeur_max);
*/

//partie 4
/*
console.log("la taille du tableau est de : ",notes.length);
let min = notes[0];
let max = notes[0];
let indice_valeur_min = 0;
let indice_valeur_max = 0;
let stock = notes[0];

for (let i = 1; i < notes.length; i++) { 
    if (notes[i] < min) { 
        min = notes[i];
        indice_valeur_min = i; 
    } 
    if (notes[i] > max){
        max =notes[i];
        indice_valeur_max = i;
    }
    
}
notes[0] = min;
notes[indice_valeur_min] = stock;

for (let i=0; i<notes.length; i++){
    let min = notes[i];
    let indice_min = i;
    for (let j = i + 1; j < notes.length; j++) { 
        if (notes[j] < min) { 
            min = notes[j]; 
            indice_min = j;
        }
    }
    let stock = notes[i];
    notes[i] = notes[indice_min];
    notes[indice_min] = stock;
}

console.log("le minimum est de : ",min);
console.log("le maximum est de : ",max);
console.log(notes);
console.log("indice de la valeur min",indice_valeur_min);
console.log("indice de la valeur max",indice_valeur_max);
*/

// partie 5
/*
console.log("la taille du tableau est de : ",notes.length);
console.log("avant tri ",notes);
let min = notes[0];
let max = notes[0];
let indice_valeur_min = 0;
let indice_valeur_max = 0;
let stock = notes[0];

for (let i = 1; i < notes.length; i++) { 
    if (notes[i] < min) { 
        min = notes[i];
        indice_valeur_min = i; 
    } 
    if (notes[i] > max){
        max =notes[i];
        indice_valeur_max = i;
    }
    
}
notes[0] = min;
notes[indice_valeur_min] = stock;

for (let i=0; i<notes.length; i++){
    let min = notes[i];
    let indice_min = i;
    for (let j = i + 1; j < notes.length; j++) { 
        if (notes[j] < min) { 
            min = notes[j]; 
            indice_min = j;
        }
    }
    let stock = notes[i];
    notes[i] = notes[indice_min];
    notes[indice_min] = stock;
}

console.log("après tri ",notes);
console.log("le minimum est de : ",min);
console.log("le maximum est de : ",max);
console.log("indice de la valeur min",indice_valeur_min);
console.log("indice de la valeur max",indice_valeur_max);
*/

//bonus 1 et 2 
/*
console.log("la taille du tableau est de : ",notes.length);
console.log("avant tri ",notes);
let min = notes[0];
let max = notes[0];
let indice_valeur_min = 0;
let indice_valeur_max = 0;
let stock = notes[0];

for (let i = 1; i < notes.length; i++) { 
    if (notes[i] < min) { 
        min = notes[i];
        indice_valeur_min = i; 
    } 
    if (notes[i] > max){
        max =notes[i];
        indice_valeur_max = i;
    }
    
}
notes[0] = min;
notes[indice_valeur_min] = stock;

let verification = 0;
let echanges = 0;

for (let i=0; i<notes.length; i++){
    let min = notes[i];
    let indice_min = i;

    for (let j = i + 1; j < notes.length; j++) { 
        if (notes[j] < min) { 
            min = notes[j]; 
            indice_min = j;
            console.log("progression du tri ",notes);
            echanges++;
        }
        verification ++;
    }
    let stock = notes[i];
    notes[i] = notes[indice_min];
    notes[indice_min] = stock;
    
}

console.log("le nombre d'échanges est de : ",echanges)
console.log("le nombre de vérification est de : ",verification);
console.log("après tri ",notes);
console.log("le minimum est de : ",min);
console.log("le maximum est de : ",max);
console.log("indice de la valeur min",indice_valeur_min);
console.log("indice de la valeur max",indice_valeur_max);
*/

//bonus 3
console.log("la taille du tableau est de : ",notes.length);
console.log("avant tri ",notes);
let min = notes[0];
let max = notes[0];
let indice_valeur_min = 0;
let indice_valeur_max = 0;
let stock = notes[0];

for (let i = 1; i < notes.length; i++) { 
    if (notes[i] < min) { 
        min = notes[i];
        indice_valeur_min = i; 
    } 
    if (notes[i] > max){
        max =notes[i];
        indice_valeur_max = i;
    }
    
}
notes[0] = min;
notes[indice_valeur_min] = stock;

let verification = 0;
let echanges = 0;

//range dans l'ordre décroissant 
for (let i=0; i<notes.length; i++){
    let min = notes[i];
    let indice_min = i;

    for (let j = i + 1; j < notes.length; j++) { 
        if (notes[j] < min) { // ">" range dans l'ordre décroissant
            min = notes[j]; 
            indice_min = j;
            console.log("progression du tri ",notes);
            echanges++;
        }
        verification ++;
    }
    let stock = notes[i];
    notes[i] = notes[indice_min];
    notes[indice_min] = stock;
    
}


console.log("le nombre d'échanges est de : ",echanges)
console.log("le nombre de vérification est de : ",verification);
console.log("après tri ",notes);
console.log("le minimum est de : ",min);
console.log("le maximum est de : ",max);
console.log("indice de la valeur min",indice_valeur_min);
console.log("indice de la valeur max",indice_valeur_max);