//setto l'href al mio link con il metodo setAttribute()
let a = document.querySelector("#demo a");
console.log(a);

a.setAttribute("href", "https://www.amazon.it");

let h1 = document.querySelector("h1.txtRed");
h1.setAttribute("id", "titolo");

document.querySelector("#titolo").classList.remove("txtRed");


//rimuovo un attributo con il metodo removeAttribute()
let item2 = document.querySelector("#item2");
item2.removeAttribute("class");

//voglio leggere il valore di un attributo 
let link = a.getAttribute("href");
console.log(link);


// document.querySelector("#item5").addEventListener("click", function(){
//     this.classList.toggle("txtBlue");
// });

let lis = document.getElementsByTagName("li");
[...lis].forEach(li=>{
    console.log(li.innerText);
})