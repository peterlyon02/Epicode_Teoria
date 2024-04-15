
let eta = 34;
let eta2 = 34;
eta = 2;
let peso = 80.56;
let tempoDal1970 = 9876543456789098765;
let numeriPiccoli = 0.0000003;
let numeroNeg = -6;


let potenza = Math.pow(3,2);
let logaritmo = Math.log(5);
let numACaso = Math.random() * 10;


let sommaACaso = eta + peso;
let prodottoACaso = eta * peso;

let quoziente0 = eta2 / 0;

console.log(quoziente0);

////Esempio tipizzazione debole

let mioNumero = "4";
let tuoNumero = "5";

//nel caso della somma forzo il dato ad esssere un numero 
//CAST == serve a trasformare il tipo di un dato in un altro 
let somma = Number(mioNumero) + Number(tuoNumero);
let prod = mioNumero * tuoNumero;
let diff = mioNumero - tuoNumero;
let quoz = mioNumero / tuoNumero;

console.log(somma);
console.log(prod);
console.log(diff);
console.log(quoz);

//Esempio
let primoNumero = Number( window.prompt("Inserisci il primo numero") );
let secondoNumero = Number(window.prompt("Inserisci il secondo numero") );

let sommaNumeri = primoNumero + secondoNumero;

console.log(sommaNumeri);

//alternativamente posso utilizzare parseInt per trasformare un numero qualunque in un intero
//parseFloat per trasformarlo in un numero con la virgola

let numeroVirgola = 12.34;
let numeroParsing = parseInt(numeroVirgola);
console.log(numeroParsing);

let numeroIntero = 34.080;
let numeroParsing2 = parseFloat(numeroIntero);
console.log(numeroParsing2);
