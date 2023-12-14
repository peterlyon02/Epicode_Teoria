//Array sono contenitori di dati dello stesso tipo
//0-based
//ridimensionabili
//scalabili

//Dichirazione con costruttore (vecchia e poco utilizzata)
let mioArray = new Array("Ciao", "Buongiorno", "Buonanotte", "Addio");

//Dichiarazione standard

// indici        0         1       2        3               
let colori = ["bianco", "rosso", "blu", "giallo"];

let numerodiColori = colori.length; // 4
console.log("Il mio Array ha una lunghezza di " + numerodiColori + " elementi");

//per poter richiamre un elemento uso il suo indice tra le parentesi quadre
let primoElemento = colori[0]; //bianco
console.log(primoElemento);

let secondoElemento = colori[1];
console.log(secondoElemento);

let terzoElemento = colori[2];
console.log(terzoElemento);

let quartoElemento = colori[3];
console.log(quartoElemento);

//stampo un elemento inesistente
let elementoInesistente = colori[10];
console.log(elementoInesistente);

//stampo l'ultimo elemento
let ultimoElemento = colori[colori.length - 1];
console.log(ultimoElemento);

//stampo tutto l'array in un colpo solo
console.log(colori);


//ARRAY solo numeri
let numeri = [1, 89, 44, 23, 7, 5];
console.log(numeri[2]);//44
console.log(numeri.length);

//Array MIsti, si possono fare ma NON HANNO SENSO
let arrayProva = ["bianco", "giallo", "dario", "luisa", "verde"];

let arrayProva2 = ["Dario", "Mennillo", 34, "Javascript", "Epicode", true, "azzurro"];
console.log(arrayProva2[0], arrayProva2[1], arrayProva2[2], arrayProva2[3]);

let docente = {
    nome: "Dario",
    cognome: "Mennillo",
    eta: 34,
    materia: "Javascript",
    corso: "Epicode"
}



let classe = [
    {
        matricola: 1,
        nome: "Dario",
        cognome: "Franco",
        pc: "Dell",
        presenza: true
    },
    {
        matricola: 2,
        nome: "Deborah",
        cognome: "Dondasse",
        pc: "Mac",
        presenza: true
    },
    {
        matricola: 3,
        nome: "Danilo",
        cognome: "Lustro",
        pc: "Asus",
        presenza: true
    },
    {
        matricola: 4,
        nome: "Paolino",
        cognome: "Paperino",
        pc: "HP",
        presenza: false
    }
];

console.log(classe);

//voglio conoscere il pc dell'ultimo studente
let pcUltimoStudente = classe[classe.length - 1].pc;

console.log(pcUltimoStudente);


