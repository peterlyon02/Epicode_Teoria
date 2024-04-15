//Dichiaro una funzione
function saluta(){
    // corpo della funzione
    console.log("Ciao amico, come butta ?");

    console.log("Tutto bene, grazie!");

    console.log("Come ti chiami ? ");

    let nomeAmico = "Pasquale";
    console.log("Mi chiamo " + nomeAmico);

    if(nomeAmico == "Dario"){
        console.log("Ah, che bel nome");
    }else{
        console.log("Non ho amici che si chiamano come te");
    }

}

//per poter eseguire una funzione la devo per forza richiamare
saluta();

