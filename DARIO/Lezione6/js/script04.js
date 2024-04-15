//OBJECT

//chiave: valore
//proprietà: valore

let studente = {
    nome: "Pippo",
    cognome: "Paperino",
    eta: 36,
    iscrizioneCorso: true,
    matricola: "A098",
    annoNascita: "12/12/1972"
}

let computer = {
    marca: "DEll",
    modello: "Vostro1234",
    ram: 16,
    hd: 2,
    descrizione: "Laptop",
    acceso: false
}

let auto = {
    marca: "Peugeot",
    modello: 3008,
    cilindrata: 1300,
    targa: "AB123FG",
    motore: "Benzina",
}

let nome = "Dario";
let cognome = "Mennillo";
let eta = 34;
//variabile
let ruolo = "Docente";

let docente = {
    //proprietà: valore
    nome: "Dario",
    cognome: "Mennillo",
    eta: 34,
    ruolo: "Docente",
    computerAssegnato: {
        marca: "Mac",
        modello: "Air",
        ram: 8
    },
    autoAziendale: auto
}

//Voglio conoscere il modello del pc che mi è stato assegnato
console.log(docente.computerAssegnato.modello);
console.log(docente.autoAziendale.cilindrata);



console.log(computer);

//per accedere alle proprietà del mio object utilizzo il .
let descrizionePC = "Descrizione PC: " + computer.marca +  " - " + computer.modello + " . Ram: " + computer.ram + " Gb";

console.log(descrizionePC);
