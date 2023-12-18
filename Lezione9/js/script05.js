
function faiUnCocktail(ingrediente1, ingrediente2, ingrediente3){
    // let listaIngredienti ="Il tuo cocktail è a base di: "  +ingrediente1 + ", " + ingrediente2 + ", " + ingrediente3;

    let listaIngredienti = [ingrediente1, ingrediente2, ingrediente3];

    let cocktail = "";
            
    if(listaIngredienti.includes("Rum") && listaIngredienti.includes("Vermout") && listaIngredienti.includes("Campari")){
        cocktail = "Negroni"
    }else if(ingrediente1 == "Rum" && ingrediente2 == "Arancia" && ingrediente3 == "Aperol"){
        cocktail = "Old Fashion";
    }
    else{
        cocktail = "Cocktail sconosciuto"
    }

    console.log(listaIngredienti, "Il tuo cocktail è : " + cocktail);
}

//al richiamare la funzione devo esplicitare i miei ingredienti
faiUnCocktail("Rum", "Campari", "Vermout");



function calcolaArea(base, altezza){
    let area = base * altezza;
    console.log("L'area vale: " + area);
}

calcolaArea(4,5);


function calcolaVolume(base, altezza, profondita) {
    let volume = base * altezza * profondita;
    console.log("Il volume vale: " + volume);
}

calcolaVolume(4, 6, 8);

