// Number
let studentiPresenti = 35;

// Controllo il tipo di dato
console.log(typeof studentiPresenti);

//String
let nomeDocente = "Dario";

//String nomeDocente = "Dario"; es: JAVA
// nomeDocente: string = "Dario"; es: Typescript

console.log(typeof nomeDocente);

//Boolean
let connessioneAttiva = true;
console.log(typeof connessioneAttiva);

//Esempio della tipizzazione debole
let miaVariabile = "Ciao"; //String
miaVariabile = "Buongiorno";
miaVariabile = "Buonasera";

//Nella tipizzazione debole posso anche saltare da un tipo all'altro
miaVariabile = 42;
miaVariabile = false;

console.log(miaVariabile);

// let numClick = 0;

// let pulsantone = document.getElementById("pulsantone");

// pulsantone.addEventListener("click", function(){
//     // numClick = numClick + 1;
//     numClick += 1;
//     console.log(numClick);
//     document.getElementById("demo").innerHTML = "Numero di click: " + numClick;
// });
