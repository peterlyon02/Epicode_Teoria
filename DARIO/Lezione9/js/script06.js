function calcolaArea(base, altezza){
    let area = base * altezza;
    // console.log("L'area vale "  + area);
    return area;
}


let valoreArea = calcolaArea(6,9); //sto salvando il valore di "uscita" della funzione calcolaArea dentro la variabile valoreArea

console.log("Il valore dell'area è: " + valoreArea);

function calcolaVolume(area, profondita){
    let volume = area * profondita;
    return volume;
}

let valoreVolume = calcolaVolume(calcolaArea(7,9), 7);
console.log(valoreVolume);


//Vers 2 di calcolaVolume
function calcolaVolume2(base, altezza, profondita){
    let volume = calcolaArea(base, altezza) * profondita;
    return volume;
}

let valoreVolume2 = calcolaVolume2(8,9,10);
console.log(valoreVolume2);

console.log( calcolaArea(calcolaArea(4,5), 3) );


function calcolaQualcosa(){
    let numeri = window.prompt("inserisci 3 numeri separati da una virgola per calcolare un volume"); //3,4,5

    //trasformo la string in un array
    let numeriArr = numeri.split(","); // [3,4,5];

    let volume = calcolaVolume2(numeriArr[0], numeriArr[1], numeriArr[2]);
    
    let demo = document.getElementById("demo");
    // demo.innerHTML = "Il volume vale: " + volume;
    demo.innerHTML = `Il volume vale ${volume}`; //backtick =>  Alt + 96 
}


//variabili funzionali
let qualcosa = function(){
    let calcolo = 3+4;
    return calcolo;
}

console.log(qualcosa());

//Arrow
let numeri = (parametro) => {
    let numeri = [5,6,7];
    console.log("I miei numeri sono: ", numeri[0], numeri[1], numeri[2]);
}
numeri();

let parole = ["Ciao", "Come", "Stai"];

parole.forEach(parola => {
    console.log(parola);
})

let somma = (a,b)=>{
    console.log(a+b);
}

somma(1,2);