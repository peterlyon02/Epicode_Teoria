// Qui inserirò il mio codice

// Dichiaro una variabile
let oraDelGiorno;

//non ho scritto
// let ora del giorno;
// let oradelgiorno; solo difficile da leggere
//let ORADELGIORNO; è solo utilizzato per le costanti

//Assegno un valore alla mia varibile
oraDelGiorno = 20;

//Posso anche fare tutto in un colpo solo
let minutoDellOra = 31;

let giornoDelMese = 4;
let meseDellAnno = 12;
let anno = 2023;

//Adesso stamperò il valore delle variabili in console

//console è un oggetto, log è un metodo della console, il . è la chiave di accesso a metodi e proprietà
console.log("Ora: " + oraDelGiorno); 
console.log("Minuto: " + minutoDellOra);
console.log("Giorno: " + giornoDelMese);
console.log("Mese: " + meseDellAnno);
console.log("Anno: " + anno);

//Uso + come operatore di concatenazione
//posso anche usare come operatore matematico di somma

//Faccio tutto su una riga, anzi costruisco una variabile con all'interno tutte le info, cioè opero una concatenazione tra stringhe e numeri
let info = "Ora: " + oraDelGiorno + ":" + minutoDellOra + ". Giorno: " + giornoDelMese + "/" + meseDellAnno + "/" + anno;

console.log(info);

//posso dichiarare delle variabili solo stringhe
let nome = "Dario";
let cognome = "Mennillo";
let corso = "Epicode - fEDev";
let eta = 34;
let citta = "Torino";

let infoPersonali = nome + " "+ cognome + " - " + corso + ". Età " + eta + " anni";
console.log(infoPersonali);



