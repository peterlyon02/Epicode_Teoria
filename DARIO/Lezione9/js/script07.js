let frase = "Internet Explorer è il miglior browser al mondo";

function cambiaFrase(){


    let nuovaFrase = frase.replace("Internet Explorer", "Firefox");

    console.log(nuovaFrase.toUpperCase());
}

cambiaFrase();