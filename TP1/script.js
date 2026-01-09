// PARTIE 1
/*
const name = "classe";
let count = 24;
let open  = true;
console.log(name);
console.log(count);
console.log(count);
*/

//partie 2
/*
let eleve = {
    name: "Nathan",
    note_maths : 12,
    note_fr: 14,
}

console.log(eleve.name);
console.log(eleve.note_maths);
console.log(eleve.note_fr);
*/

//partie 3
/*
let eleve_1 = {
    name: "Nathan",
}

let eleve_2 = {
    name: "Pierre",
}

let eleve_3 = {
    name: "Thomas",
}
const eleves = [eleve_1, eleve_2, eleve_3];
for (let i = 0; i < eleves.length; i++) {
  console.log(eleves[i].name);
}
*/

//partie 4
/*
let eleve_1 = {
    name: "Nathan",
    note: {
        note_maths: 12,
        note_fr: 14,
    }
}

let eleve_2 = {
    name: "Pierre",
    note:{
        note_maths: 16,
        note_fr: 11,
    }
}

let eleve_3 = {
    name: "Thomas",
    note: {
        note_maths: 17,
        note_fr: 18,
    }
}
const eleves = [eleve_1, eleve_2, eleve_3];

for (let i = 0; i < eleves.length; i++) {
    let notes = eleves[i].note;
    let total = eleves[i].note.note_maths + notes.note_fr;
    let moyenne = total/2;
    console.log(eleves[i].name+" moyenne : "+moyenne);
}
*/

//partie 5
/*
let eleve_1 = {
    name: "Nathan",
    note: {
        note_maths: 12,
        note_fr: 14,
    }
}

let eleve_2 = {
    name: "Pierre",
    note:{
        note_maths: 16,
        note_fr: 11,
    }
}

let eleve_3 = {
    name: "Thomas",
    note: {
        note_maths: 0,
        note_fr: 18,
    }
}
const eleves = [eleve_1, eleve_2, eleve_3];

for (let i = 0; i < eleves.length; i++) {
    let notes = eleves[i].note;
    let total = eleves[i].note.note_maths + notes.note_fr;
    let moyenne = total/2;
    if (moyenne >= 10) {
        console.log(eleves[i].name+" moyenne : "+moyenne+" Admis");
    }
    else{
        console.log(eleves[i].name+" moyenne : "+moyenne+" Refusé");
    }
}
*/

//partie 6
/*
let eleve_1 = {
    name: "Nathan",
    note: {
        note_maths: 12,
        note_fr: 14,
    }
}

let eleve_2 = {
    name: "Pierre",
    note:{
        note_maths: 16,
        note_fr: 11,
    }
}

let eleve_3 = {
    name: "Thomas",
    note: {
        note_maths: 0,
        note_fr: 18,
    }
}
const eleves = [eleve_1, eleve_2, eleve_3];

for (let i = 0; i < eleves.length; i++) {
    let notes = eleves[i].note;
    let total = eleves[i].note.note_maths + notes.note_fr;
    let moyenne = total/2;

    if(moyenne >= 16){
        console.log(eleves[i].name+" moyenne : "+moyenne+" Admis "+ "Mention : très bien")
    }
    else if(moyenne >= 14 && moyenne < 16){
        console.log(eleves[i].name+" moyenne : "+moyenne+" Admis "+ "Mention : bien")
    }
    else if(moyenne >= 12 && moyenne < 14){
        console.log(eleves[i].name+" moyenne : "+moyenne+" Admis "+ "Mention : assez bien")
    }
    else if(moyenne >= 10 && moyenne < 12){
        console.log(eleves[i].name+" moyenne : "+moyenne+" Admis "+ "Mention : passable")
    }else{
       console.log(eleves[i].name+" moyenne : "+moyenne+" Refusé "+ "Mention : insuffisant") 
    }
}
*/

//partie 7
let eleve_1 = {
    name: "Nathan",
    note: {
        note_maths: 12,
        note_fr: 14,
    }
}

let eleve_2 = {
    name: "Pierre",
    note:{
        note_maths: 16,
        note_fr: 11,
    }
}

let eleve_3 = {
    name: "Thomas",
    note: {
        note_maths: 0,
        note_fr: 18,
    }
}
const eleves = [eleve_1, eleve_2, eleve_3];
for (let i = 0; i < eleves.length; i++) {
    let notes = eleves[i].note;
    let total = eleves[i].note.note_maths + notes.note_fr;
    let moyenne = total/2;

    if(moyenne >= 16){
        console.log(eleves[i].name+" moyenne : "+moyenne+" Admis "+ "Mention : très bien")
    }
    else if(moyenne >= 14 && moyenne < 16){
        console.log(eleves[i].name+" moyenne : "+moyenne+" Admis "+ "Mention : bien")
    }
    else if(moyenne >= 12 && moyenne < 14){
        console.log(eleves[i].name+" moyenne : "+moyenne+" Admis "+ "Mention : assez bien")
    }
    else if(moyenne >= 10 && moyenne < 12){
        console.log(eleves[i].name+" moyenne : "+moyenne+" Admis "+ "Mention : passable")
    }else{
       console.log(eleves[i].name+" moyenne : "+moyenne+" Refusé "+ "Mention : insuffisant") 
    }

}
let count_eleve_admis =0;
let i = 0;
while(i < eleves.length){
    count_eleve_admis ++;
}
console.log(count_eleve_admis);