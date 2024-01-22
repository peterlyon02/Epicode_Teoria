let btn = document.querySelector("#btn");
let demo = document.querySelector("#demo");
let elUsername = document.querySelector("#username");
console.log(elUsername);


function recuperaUsername(){
    //Lo Username è il value del campo input
    let username = elUsername.value;

    // demo.innerHTML = "<p>Ciao, " + username + "</p>";
    demo.innerHTML = `<p> Ciao ${username} </p>`;

    //voglio pulire il campo input
    // username = ""; NO, STAI SOLO PULENDO UNA VARIABILE
    elUsername.value = "";

}

function recuperaAlias(){
    let alias = document.querySelector("#alias").value;
    demo.innerHTML += "<p> Il tuo Alias è : " + alias + "</p>";
    document.querySelector("#alias").value = "";
}



// btn.addEventListener("click", recuperaUsername);
//Voglio far partire più funzioni allo scattare dello stesso evento utilizzando le funzioni anonime
btn.addEventListener("click", function(){
    recuperaUsername();
    recuperaAlias();
})