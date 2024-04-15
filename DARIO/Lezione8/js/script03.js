let frutta = ["Arancia", "Mandarino", "Mela", "Mango", "Kiwi"];

//aggiungere un elemento
// frutta.push("Banana");

// //ordino alfabeticamente gli elementi A-Z
// frutta.sort();

// //li rigiro dalla Z-A
// frutta.reverse();

// //elimino l'ultimo elemento
// frutta.pop();

//gli stessi metodi possono essere applicati in linea
frutta.push("Banana");
frutta.sort().reverse().pop();
console.log(frutta);

let verdura = ["Broccoli", "Friarielli", "Peperoni", "Verza"];

//unisco 2 array
let fruttaEVerdura = frutta.concat(verdura);

console.log(fruttaEVerdura);

//chiedo la posizione di un particolare elemento
console.log( fruttaEVerdura.indexOf("Mela") );
console.log( fruttaEVerdura.indexOf("Friarielli"));

console.log( fruttaEVerdura.indexOf("Ciliegie") ); //-1

if(fruttaEVerdura.indexOf("Pesca") == -1 ){
    console.log("Mi spiace, non è stagione per questa frutta");
}else{
    console.log("Oggi ce l'abbiamo");
}

console.log(fruttaEVerdura.includes("Mandarino")); //true
console.log(fruttaEVerdura.includes("mandarino")); //false


let nuovoArray = fruttaEVerdura.splice(2,5); //questo estrare e vi propone quelli estratti
console.log(nuovoArray);

let nuovoArray2 = fruttaEVerdura.slice(2,5); //elimina e vi propore il restante
console.log(nuovoArray2);

//Applico split() e join() alle string
let frase = "Ciao, come stai ?";
console.log( frase.charAt(0) );//C
console.log( frase.length );//C

let mioNome = "Dario";
let mioNomeArray = mioNome.split(""); //trasforma in array delle stringhe in base al selettore
console.log(mioNomeArray);

let mioCognomeArray = ["M","E","N", "N", "I", "L", "L", "O"];
let mioCognome = mioCognomeArray.join("");
console.log(mioCognome);

let frase2 = "Ciao, come stai? Tutto bene grazie!";
console.log(frase2.split(" "));

let provaNome = "alessandro";
let nomeAlContrario = provaNome.split("").reverse().join("");
console.log(nomeAlContrario);

console.log(provaNome.indexOf("a")); //prima occorrenza
console.log(provaNome.lastIndexOf("a")); //ultima occorrenza
console.log(provaNome.toUpperCase());
