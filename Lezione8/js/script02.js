let marcheAuto = ["Bmw", "Mercedes", "Ferrari", "Peugeot", "Fiat", "Piaggio"];

//NOIOSISSIMO
// console.log(marcheAuto[0]);
// console.log(marcheAuto[1]);
// console.log(marcheAuto[2]);
// console.log(marcheAuto[3]);
// console.log(marcheAuto[4]);
// console.log(marcheAuto[5]);
// console.log(marcheAuto[6]);

//per leggere i valori di un qualsiasi array utilizzo il ciclo for
for(let indice = 0; indice < marcheAuto.length; indice++){
    console.log(marcheAuto[indice]);
}

// Stampo le stesse cose con il forOF
console.log("STAMPO CON IL FOROF");
for (const singolaMarca of marcheAuto) {
    console.log(singolaMarca);
}

//Stampo con il Foreach
console.log("STAMPO CON IL FOREACH");
marcheAuto.forEach(elementoMarca =>{
    console.log(elementoMarca);
});

// array.forEach(element => {
//     //fai qualcosa con il singolo element
//     console.log(element);
// })

