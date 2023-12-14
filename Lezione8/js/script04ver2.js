let libri = [
    {
        titolo: "Il signore degli anelli",
        prezzo: 21,
        descrizione: "Lorem qualcosa"
    },
    {
        titolo: "Guida Galattica",
        prezzo: 18
    },
    {
        titolo: "I fiori blu",
        prezzo: 6
    },
    {
        titolo: "Harry Potter",
        prezzo: 14
    }    
];

libri.push(
    {
    titolo: "La città invincibile",
    prezzo: 9
    }
)


//con il metodo getElementById("") prendo un elemento HTML attraverso il suo id
let elencoLibri = document.getElementById("elencoLibri");
let totale = 0;

//con innerHTML stampo qualcosa dentro questo elemento
for(let i = 0; i < libri.length ; i++){
    console.log(libri[i].titolo + " - " + libri[i].prezzo + " €");

    elencoLibri.innerHTML += "<li>" + libri[i].titolo + " - "+ libri[i].prezzo + " € </li>"

    totale += libri[i].prezzo; //totale = totale + prezzi[i]
}

console.log(totale);

let totalePrezzi = document.getElementById("totalePrezzi");
totalePrezzi.innerHTML = totale + " € ";