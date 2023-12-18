function accogliUtente(){
    console.log("Benvenuto utente");
    
    //sto richiamando uina funz dall'interno di un'altra funz
    chiediNome();


    // console.log(utente); Questo non è conosciuto
}

function chiediNome(){
    let utente = window.prompt("Come ti chiami ? ");

    console.log("Allora, ciao " + utente);
}


function presentaUtente(){
    accogliUtente();
}

