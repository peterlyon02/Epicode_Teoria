let btn = document.querySelector("#btn");
let demo = document.querySelector("#demo");


function recuperaAlias(){
    let alias = document.querySelector("#alias").value;
    return alias;
}

function recuperaUsername(){
    let username = document.querySelector("#username").value;
    return username;
}


function controllaValori(username, alias){
    if(username.length < 10 || alias.length < 6){
        demo.innerHTML = "Mi spiace il tuo username o il tuo alias non corrispondono"
    }else{
        demo.innerHTML = `<p> Ciao, ${username}. </p><p> Il tuo alias è : ${alias}`;
    }
}

btn.addEventListener("click", function(event){
    let username = recuperaUsername();
    let alias = recuperaAlias();
    controllaValori(username, alias);

    //recupero tutte le informazioni che riguardano l'evento che scatena la funzione
    console.log(event);
    console.log("L'evento è stato lanciato nel punto x " + event.x + " - y " + event.y);
})