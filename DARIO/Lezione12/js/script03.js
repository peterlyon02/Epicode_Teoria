let results = document.querySelector("#results");
let btnSomma = document.querySelector("#btnSomma");
let btnSottrai = document.querySelector("#btnSottrai");
let btnMolt = document.querySelector("#btnMolt");
let btnDividi = document.querySelector("#btnDividi");

//Recupero i campi input senza i value
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");

function somma(numero1,  numero2){
    
    let somma = Number(numero1) + Number(numero2);
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

function calcola(operazione){
    //..in base al tipo di pulsante cliccato farà un'operazione
    let numero1 = num1.value;
    let numero2 = num2.value;

    switch (operazione) {
        case "+":
            somma(numero1, numero2);
            break;
        case "*":
            moltiplica(numero1, numero2);
            break;
        case "-":
            sottrai(numero1, numero2);
            break;
        case "/":
            dividi(numero1, numero2);
            break;    
        default:
            break;
    }
}


btnSomma.addEventListener("click", function(event){
    console.log(event.target);
    console.log(event.target.value);
    //oppure
    // console.log(this.id);
    // console.log(this.value);
    // console.log(this.innerHTML);
    calcola(event.target.value);
});
btnMolt.addEventListener("click", function(){
    calcola(this.value);
});
btnSottrai.addEventListener("click", function(){
    calcola(this.value);
});
btnDividi.addEventListener("click", function(){
   calcola(this.value);
});