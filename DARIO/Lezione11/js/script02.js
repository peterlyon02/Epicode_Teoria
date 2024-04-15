function saluta(){
    alert("Ciao Dario");
    console.log("Ciao Dario");
}


///Recupero il pulsante
let btn2 = document.querySelector("#btn2");
//Assegno un evento (onqualcosa) legato ad una funzione SENZA LE PARENTESI TONDE
btn2.onclick = saluta;


//Recupero il pulsante
let btn3 = document.querySelector("#btn3");

//aggancio un EventListener (addEventListener è un metodo) al pulsante
//nel caso dell'eventListener c'è solo il nome evento: click, scroll, resize
btn3.addEventListener("click", saluta);