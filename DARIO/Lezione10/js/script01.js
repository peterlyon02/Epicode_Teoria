//recupero un elemento 
const item2 = document.getElementById("item2");

console.log(item2);

//textContent o innerText
//leggo il contenuto testuale
console.log(item2.textContent);

//modifico il suo contenuto testuale
item2.textContent = "Spaghetti"

//innerHTML : legge e scrive testo con html
const item3 = document.getElementById("item3");
item3.innerHTML = "<h2>Pizza</h2>";
console.log(item3.innerHTML);


let demo = document.getElementById("demo");
demo.innerHTML = "Ciao"

//recupero più elementi
let lis = document.getElementsByClassName("txtRed"); //HTML COLLECTION: parente stretto degli array
console.log(lis);

//per conoscere il contenuto testuale di tutti e 3 gli elementi devo fare un for
for(let i = 0; i < lis.length; i++){
    console.log(lis[i].textContent);
}

//recupero degli elementi by tagname
let allLi = document.getElementsByTagName("li");
console.log(allLi);

//voglio recuperare tutti gli elementi partendo dal genitore
let listaSpesa = document.getElementById("listaSpesa");
console.log(listaSpesa.children);