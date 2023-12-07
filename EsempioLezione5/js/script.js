//Quello che l'utente scrive verrà salvato nello username
let username = window.prompt("Come ti chiami ?");

//il document.write() scrive nella pagina html 
document.write("<h2>Ciao " + username + "</h2>");
document.write("<p>Prepara la tua ricetta</p>");

//ingredienti espressi in grammi
let farina = 2000;
let acqua = 20;
let lievito = 1.5;
let sale = 5;

//
let pesoTotale = farina + acqua + lievito + sale; // questo + vale come operatore matematico

console.log("peso Totale: " + pesoTotale);

console.log("peso totale " + farina + acqua + lievito + sale); // qui viene usato come operatore di concatenazione tra stringhe perché interpreta tutto come string

//Adesso stampo tutto sulla pagina
document.write("<ul> <li> Farina: " + farina + " kg </li>");
document.write("<li class='qualcosa'> Acqua: " + acqua + " litri </li>");
document.write("<li> Lievito: " + lievito + " kg </li>");
document.write("<li> Sale: " + sale + " kg </li> </ul>");
document.write("<h2> Totale: " + pesoTotale + " Kg </h2>");






