//OPERATORI DI UGUAGLIANZA E DIS
let numero1 = 12;
let numero2 = 12;

//appena si utilizza un operatore logico ottengo un valore di tipo boolean
let sonoUguali = (numero1 == numero2);
console.log("sono uguali i due numeri ? " + sonoUguali); //false

let sonoDiversi = (numero1 != numero2); 
console.log("sono diversi i due numeri ?" + sonoDiversi); //true

//triplo uguale -> confronta anche il tipo 
let num1 = "34";
let num2 = 34;

console.log(num1 == num2); //true, in questo caso controlla solo il valore
console.log(num1 === num2); //false, in questo caso sto confrontando anche il tipo


//OPERATORE DI CONFRONTO

let mioNum = 10;
let tuoNum = 20;

console.log( mioNum > tuoNum); //false
console.log( mioNum < tuoNum); //true
console.log( mioNum >= tuoNum); //false
console.log( mioNum <= tuoNum); //true


//Ovviamente possiamo confrontare anche le string
let mioNome = "Dario";
let tuoNome = "Anna";

console.log( mioNome === tuoNome); //false
console.log( mioNome != tuoNome ); //true

let suoNome = "dario";
console.log( mioNome == suoNome); //false

//OPERATORI LOGICI
let mieSkill = 15;
let mieExp = 99;

let skillSoglia = 15;
let expSoglia = 100;

//per poter superare il livello le mie skill e i miei punti exp devono essere sopra la soglia
                        //        True                      True
let passaggioLivello = (mieSkill >= skillSoglia) && (mieExp >= expSoglia); //true

console.log("Hai superato il livello versione Hard Mode ? " + passaggioLivello);

//EASY MODE
let passaggioLivello2 = (mieSkill >= skillSoglia) || (mieExp >= expSoglia);
console.log("Hai superato il livello versione Easy Mode ?" + passaggioLivello2);

//Esempio spoiler
//Faccio lo stesso gioco con il costrutto if
//if(condizione){}

//&& AND
// || OR (doppio pipe)

if((mieSkill >= 15) && (mieExp >= 100)){
    console.log("Bravo, hai superato il livello in HArd Mode");
}else{
    console.log("Mi spiace, ritenta !");
}

if((mieSkill >= skillSoglia) || (mieExp >= expSoglia)){
    console.log("Bravo, hai superato il livello nella Easy Mode");
}else{
    console.log("Cambia Gioco, perché neppure con la easy mode sei capace");
}

//Esempio con le string
let username = "Dario";
let password = "abcd1234";

let usernameFornito = window.prompt("Inserisci il tuo username");
let passwordFornita = window.prompt("Inserisci la pass");

let accesso = (usernameFornito == username) && (passwordFornita == password);

console.log("Accesso: " + accesso);

if(accesso){
    console.log("Benvenuto " + username);
}else{
    console.log("Credenziali errate");
}

