let btn = document.querySelector("#btn");
let demo = document.querySelector("#demo");

function recuperaUsername(){
    //Lo Username è il value del campo input
    let username = document.querySelector("#username").value;

    // demo.innerHTML = "<p>Ciao, " + username + "</p>";
    demo.innerHTML = `<p> Ciao ${username} </p>`;

    //voglio pulire il campo input
    // username = ""; NO, STAI SOLO PULENDO UNA VARIABILE
    document.querySelector("#username").value = "";
}

btn.addEventListener("click", recuperaUsername);