let i = 0; //inizializzo

// while(i < 10){ //condizione
//     i++; //aggiornamento

//     if( i%5 == 0){
//         break;
//     }
//     console.log(i);
// }

let msg = "";

while(i < 10){  
    msg += "<p> 4 x " + i + " = " + (i * 4) + " </p>"; // i = i + qualcosa
    i++; //i = i + 1
}

document.write(msg);
