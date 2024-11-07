// Exo 1

let str = "texte"; // Déclaration d'une variable de type string
let numb = 2; // Déclaration d'une variable de type number
let bool = true; // Déclaration d'une variable de type boolean

// Exo 2
function degre(c){ // Ici je suis parti du principe qu'on recevrai la valeur "c" de degrés celsius qu'on voudrait convertir en Fahrenheit
    let n = 0;
    n = c*(9/5)+32;
    return n;
}

// Exo 3

function pair(n){
    if (n%2 == 0){
        console.log(n, "est pair");
        return;
    }
    console.log(n, "est impair");
}

// Exo 4

function boucle(){
    for(let i = 0; i <= 10; i++){
        console.log(i);
    }
    for(let j = 10; j > 0; j--){
        console.log(j);
    }
}

// Exo 5 

function somme(n1,n2){
    let res = n1 + n2;
    return res;
}

// Exo 6

function mot(str,mot){
    let res = false;
    if(str.includes(mot)){
        res = true;
    }
    return res;
}

// Exo 7

let tab = ["Apolline","Maxime","Jeff","Florian","Hugo","Pierre"];
for(let i = 0; i < tab.length; i++){
    console.log(tab[i]);
}

// Exo 8

let person = {};

person.nom = "Robert";
person.age = 65;
person.ville = "Paris";

console.log(person.nom,person.age,person.ville);

// Exo 9

const titre = document.createElement("h1");
titre.textContent = "Ceci est mon titre";
const body = document.body;
body.appendChild(titre);

// Exo 10

function onButtonClick(){
    alert("Vous avez cliqué sur le bouton !");
}

const bouton = document.createElement("bouton");
bouton.textContent = "Bouton";
bouton.addEventListener("click", ()=>{
    onButtonClick()});
body.appendChild(bouton);