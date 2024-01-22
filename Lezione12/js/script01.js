let results = document.querySelector("#results");
let btnSomma = document.querySelector("#btnSomma");
let btnSottrai = document.querySelector("#btnSottrai");
let btnMolt = document.querySelector("#btnMolt");
let btnDividi = document.querySelector("#btnDividi");

//Recupero i campi input senza i value
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");

function somma(){
    let numero1 = Number(num1.value);
    let numero2 = Number(num2.value);

    let somma = numero1 + numero2;

    results.innerHTML = "Il risultato dell somma è : " + somma;
}

function moltiplica(){
    let numero1 = Number(num1.value);
    let numero2 = Number(num2.value);

    let prodotto = numero1 * numero2;

    results.innerHTML = "Il risultato del prodotto é: " + prodotto;
}

function dividi(){
    let numero1 = Number(num1.value);
    let numero2 = Number(num2.value);

    let divisione = numero1 / numero2;

    results.innerHTML = "Il risultato della divisione é: " + divisione;
}

function sottrai(){
    let numero1 = Number(num1.value);
    let numero2 = Number(num2.value);

    let sottrazione = numero1 - numero2;

    results.innerHTML = "Il risultato della sottrazione é: " + sottrazione;
}




btnSomma.addEventListener("click", somma);
btnMolt.addEventListener("click", moltiplica);
btnSottrai.addEventListener("click", sottrai);
btnDividi.addEventListener("click", dividi);