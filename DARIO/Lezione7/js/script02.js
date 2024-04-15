//CICLO FOR

for(let i = 0; i < 5; i++){
    console.log(i);
}

/**
 * i++ ==> Operatore di Post-incremento: la variabile viene prima letta poi aggiornata
 *  i = i + 1;
 * 
 * for( inizializzazione; condizione; aggiornamento){
 *  blocco di codice
 * }
 *
 * 
 * Il ciclo va avanti fintanto che la condizione "centrale" è verificata
 * 
 * 1° Giro (i = 0; 0 < 5 [T]; 1){log(0)};
 * 2° Giro (i = 1; 1 < 5 [T]; 2){log(1)};
 * ....
 * 5° Giro (i = 4; 4<5 [T]; 5){log(4)};
 * 6° Giro (i = 5; 5 < 5 [F]; ) ---> STOP
 */

console.log("Stampo i numeri da 1 a 10");

for( let i = 1; i <= 10; i++){
    console.log(i);
}


console.log("Stampo i numeri da 10 a 1");

for(let i = 10; i >= 1; i--){
    console.log(i);
}

console.log("Saluto gli studenti con il numero di matricola");

for(let i = 1; i <= 15; i++){
    console.log("Ciao studente n° " + i);
}

console.log("Innesto if nel for");

let contatore = 0;

for(let i = 1; i <= 200; i++){
    
    if(i % 3 == 0){
        console.log(i + " - Ciao");
        contatore++;
    }else{
        console.log(i);
    }
}

console.log("Numero di numeri divisibili per 3: " +  contatore);

//BREAK and Continue

for(let i = 0; i < 10; i++){

    console.log(i);
    if(i == 3){
        break; //serve ad interrompere un ciclo
    }
}

for(let i = 0; i < 10; i++){
    console.log(i);
    if(i==3){
        continue //serve a far continuare il ciclo dopo la condizione
    }; 
}