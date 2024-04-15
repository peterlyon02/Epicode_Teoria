let titoli = [
    "Il signore degli anelli",
    "Guida Galattica per autostoppisti",
    "I fiori Blu",
    "Harry Potter"
];

let prezzi = [
    21,
    18,
    6,
    14
];

//con il metodo getElementById("") prendo un elemento HTML attraverso il suo id
let elencoLibri = document.getElementById("elencoLibri");


let totale = 0;

//con innerHTML stampo qualcosa dentro questo elemento
for(let i = 0; i < titoli.length ; i++){
    console.log(titoli[i] + " - " + prezzi[i] + " €");
    //+= self-increment
    elencoLibri.innerHTML += "<li>" + titoli[i] +  " " + prezzi[i] + "€</li>";

    totale += prezzi[i]; //totale = totale + prezzi[i]
}

console.log(totale);

let totalePrezzi = document.getElementById("totalePrezzi");
totalePrezzi.innerHTML = totale + " € ";