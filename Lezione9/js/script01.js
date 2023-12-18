let msg = "";
let livello = 0;

switch(livello){
    case 1:
        msg = "Ciao, sei al primo livello. Vediamo cosa sai fare";
        //fai altro
    break;

    case 2:
        msg = "Superato il primo molto faciel il secondo è già complesso";
    break;

    case 3:
        msg = "Hai quasi completato il gioco. Adesso arriva il mostro finale!!";
    break;

    case 4:
        msg = "Ecco il mostro, stavolta non te la caverai";
    break;

    default:
        msg = "Ciao, bevenuto nel gioco";
    break    
}

console.log(msg);


let password = "abcdefg";
let msg2 = "";

switch(password){
    case "abcdefg":
        msg2 = "Amico, questa password te la bucano in 1 nsecondo"
    break;

    case "12345":
        msg2 = "Caro, questa password andava bene nel 1992 quando internet non c'era"
    break;

    case "FammIEntrarePerFavore101010":
        msg2 = "Ok, questa è una bella password";
    break;

    default:
        msg2 = "Questa password non è riconosciuta";
    break;
}

console.log(msg2);

