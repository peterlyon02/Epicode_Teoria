//ClassList

let item5 = document.querySelector("#item5");
item5.classList.remove("txtBlue");

let lisFilm = document.querySelectorAll("#listaFilm li");
lisFilm.forEach(li=>{
    li.classList.add("bg-Cyan");
    li.classList.replace("txtBlue", "txtRed");
})

let lis = document.querySelectorAll("li");

lis.forEach(li =>{
    if(li.classList.contains("txtRed")){
        li.innerHTML += " - Esaurito";
    }
})