//Voglio aggiungere un film

//1. Creo il nuovo elemento
let nuovoLi = document.createElement("li");

//2.Scrivo il nuovo film
nuovoLi.textContent = "Batman Begins";

console.log(nuovoLi);

//3.Devo selezionare il punto in cui andare ad inserire il nuovoLi, cioè nella lista dei Film 

let listaFilm = document.querySelector("#listaFilm");

listaFilm.appendChild(nuovoLi);


//altrofilm
let nuovoLi2 = document.createElement("li");
nuovoLi2.innerText = "Barbie";
listaFilm.prepend(nuovoLi2);

nuovoLi.setAttribute("class", "txtRed");
nuovoLi2.setAttribute("class", "txtRed");

//Elimino un elemento della listaSpesa
let elementoDaRimuovere = document.querySelector("#item3");
let genitore = document.querySelector("#listaSpesa");
genitore.removeChild(elementoDaRimuovere);

// let item1 = document.querySelector("#item1");


// item1.addEventListener("click", function(){
//     item1.parentNode.removeChild(this);    
// })
function eliminaItem(){

    let lis = document.querySelectorAll("li");
    
    lis.forEach(li=>{
        li.addEventListener("click", function(){
            this.parentNode.removeChild(this);
        })
    })
    
}

eliminaItem()

function aggiungiItem(){
    let item = document.querySelector("#item").value; //questo è ciò che scrive l'utente

    if(item != ""){
        let li = document.createElement("li");
        li.textContent = item;
        li.setAttribute("class", "txtRed");

        genitore.appendChild(li);

        document.querySelector("#item").value = "";
    }else{
        alert("Amico, scrivi qualcosa nel campo input almeno")
    }

    eliminaItem();
}