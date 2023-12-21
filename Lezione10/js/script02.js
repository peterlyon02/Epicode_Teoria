//QuerySelector funziona con la sintassi CSS
//#nomeId
//.nomeClasse
//tag

let item2 = document.querySelector("#item2");
console.log(item2);

// let item = document.querySelector(".txtRed"); //qui recupera la nutella, cioè sempre la prima occorrenza
let item = document.querySelector("li"); //anche in questo caso recupera solo Nutella
console.log(item);

// Se devo recuperare più elementi utilizzo il querySelectorAll
let lis = document.querySelectorAll("li");
console.log(lis); //recupero una NodeList, ancora una volta parente stretto dell'array
//voglio leggere i contenuti degli li 

lis.forEach(li =>{
    console.log(li.textContent);
})


//voglio recuperare tutti gli li con classe txtRed
let lisTxtRed = document.querySelectorAll("li.txtRed");
console.log(lisTxtRed);
lisTxtRed.forEach(li =>{
    li.classList.replace("txtRed", "txtBlue");
})


// let item3 = document.querySelector("#item3");
// let item3 = document.querySelector("ul#listaStpesa").children[2];

// let ul = document.querySelectorAll("#listaSpesa");
// console.log(ul[0].textContent);

//Recupero tutto
let allLis = document.querySelectorAll("li");
console.log(allLis);

// //Recupero solo i film 
// let lisFilm = document.querySelectorAll("#listaFilm li");
// console.log(lisFilm);

// let lisSpesa = document.querySelectorAll("#listaSpesa li");
// console.log(lisSpesa);

//Att: recupero senza gli id dei parent ul
let lisFilm = document.querySelectorAll("ul#listaFilm > li.txtBlue");
console.log(lisFilm);


//dal figlio prendo il genitore
let item4 = document.querySelector("#item4");
let genitore = item4.parentNode;

console.log(genitore);