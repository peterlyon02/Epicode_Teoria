//IF STATEMENT

/**
 * if(condizione){
 *  //esegui questo blocco se la condizione è vera
 * }
 */

let etaUtente = 65;

if(etaUtente >= 18){
    console.log("Benvenuto, puoi entrare");
}else{
    console.log("Mi spiace, la tua età non è adatta!");
}

//Voglio controllare una condizione in più

if(etaUtente >= 18 && etaUtente < 60){
    console.log("Benvenuto, puoi entrare");
}else if(etaUtente >= 14 && etaUtente < 18){
    console.log("Ciao, puoi accedere solo ad una parte di contenuti");
}else if(etaUtente >= 60 && etaUtente < 80){
    console.log("Ciao, puoi entrare ma avrai un accesso dedicato");
}else{
    console.log("Mi spiace, sei troppo piccolo");
}

//operatore ternario
let votoEsame = 17;

let responso = votoEsame >= 18 ? "Bravo, hai superato l'esame": "Mi spiace, ritenta la prossima sessione";

console.log(responso);


// if(votoEsame < 18){
//     console.log("Mi spiace, ci vediamo la prossima sessione");
// }else{
//     console.log("Bravo, sei stato promosso");
// }

// if(votoEsame >= 18){
//     console.log("Bravo, hai superato l'esame");
// }else{
//     console.log("Mi dispiace, ci vediamo la prossima sessione");
// }

