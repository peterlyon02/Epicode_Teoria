let results = document.querySelector("#results");
let btnSomma = document.querySelector("#btnSomma");
let btnSottrai = document.querySelector("#btnSottrai");
let btnMolt = document.querySelector("#btnMolt");
let btnDividi = document.querySelector("#btnDividi");
let btnCalcAll = document.querySelector("#btnCalcAll");
let btnUguale = document.querySelector("#btnUguale");

//Recupero i campi input senza i value
let num = document.querySelector("#num");

let numeri = [];

btnSomma.addEventListener("click", function(){
    
    numeri.push(Number(num.value));
    document.querySelector("#num").value = "";
});


btnUguale.addEventListener("click", function(){
    let risultato = 0;
    console.log(numeri);
    for(let i = 0; i < numeri.length; i++){
        risultato += numeri[i];
    }
console.log("Il risultato è:" + risultato);
})