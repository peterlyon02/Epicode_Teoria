let superADMIN = "Pippo"; //Questa è una var GLOBALE, visibilità: ovunque

//SCOPE delle funzione, ovvero il campo di visibilità di una var
function daiBenvenuto(){
    let nome = "Dario Mennillo"; //la var nome è una var LOCALE, cioè visibile solo ed esclusivamente nello scope della funzione

    if(nome == "Dario Mennillo"){
        console.log("Ciao, benvenuto " + nome);
        console.log("Il super Admin è : " + superADMIN);
    }else{
        console.log("Non ti conosco " + nome);
    }
}

daiBenvenuto();

let nome = "Marco Gialli"; // questa var è una var GLOBALE ma non si "guarda" con l'altra var nome sopra, anche questa visibile ovunque

if(nome == "Dario Mennillo"){
    console.log("Ciao, benvenuto " + nome);
    console.log("Il super Admin è : " + superADMIN);
}else{
    console.log("Non ti conosco " + nome);
}



function salutaUtente(){
    let nome = "Anna Rossi";

    if(nome == "Anna Rossi"){
        console.log("Ciao, benvenuto " + nome);
        console.log("Il super Admin è : " + superADMIN);

    }else{
        console.log("Non ti conosco " + nome);
    }

}

// salutaUtente(); //La sto richiamando al click sul pulsante nell HTML