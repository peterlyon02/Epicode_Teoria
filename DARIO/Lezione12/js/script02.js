let results = document.querySelector("#results");
let btnSomma = document.querySelector("#btnSomma");
let btnSottrai = document.querySelector("#btnSottrai");
let btnMolt = document.querySelector("#btnMolt");
let btnDividi = document.querySelector("#btnDividi");

//Recupero i campi input senza i value
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");

function somma(pippo,  paperino){
    
    let somma = pippo + paperino;

    results.innerHTML = "Il risultato dell somma è : " + somma;
}

function moltiplica(numero1, numero2){
 
    let prodotto = numero1 * numero2;

    results.innerHTML = "Il risultato del prodotto é: " + prodotto;
}

/**
 * 
 * @param {Number} numero1 
 * @param {Number} numero2 
 */
function dividi(numero1, numero2){
   
    let divisione = (numero1 / numero2).toFixed(2);

    results.innerHTML = "Il risultato della divisione é: " + divisione;
}

function sottrai(numero1, numero2){
   
    let sottrazione = numero1 - numero2;

    results.innerHTML = "Il risultato della sottrazione é: " + sottrazione;
}




btnSomma.addEventListener("click", function(){
    let numero1 = Number(num1.value);
    let numero2 = Number(num2.value);

    somma(numero1, numero2);
});
btnMolt.addEventListener("click", function(){
    let numero1 = num1.value;
    let numero2 = num2.value;

    moltiplica(numero1, numero2);
});
btnSottrai.addEventListener("click", function(){
    let numero1 = num1.value;
    let numero2 = num2.value;
    
    sottrai(numero1, numero2);

});
btnDividi.addEventListener("click", function(){
    let numero1 = (num1.value);
    let numero2 = (num2.value);

    dividi(numero1, numero2)
});