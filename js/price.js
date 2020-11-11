console.log("hello world!");

// Il programma dovrà chiedere all’utente il
// numero di chilometri che vuole percorrere
var kmr = parseInt( prompt("Quanti km vuoi percorrere oggi?"));
console.log(kmr);
if (kmr >= 1) {
  var kilometri = kmr
} else {
  var errore = alert( "errore ricaricare la pagina")
}
//  e l’età del passeggero.
var age = parseInt( prompt("Quanti anni hai?"));
if (age >= 1) {
  var anni = age
} else {
  var errore = alert( "errore ricaricare la pagina")
}
console.log(anni);

// Il prezzo del biglietto è definito in base ai
// km (0.21 € al km),
var prezzoBiglietto = kilometri * 0.21
console.log(prezzoBiglietto);

if (anni < 18 ) {
  // sconto del 20% per i minorenni e del
  document.getElementById("prezzototale").innerHTML= prezzoBiglietto - (prezzoBiglietto * 0.2);
  console.log(prezzototale);
} else if (anni >= 65 ) {
  // 40% per gli over 65.
  document.getElementById("prezzototale").innerHTML= prezzoBiglietto - (prezzoBiglietto * 0.4);
  console.log(prezzototale);
} else {
  document.getElementById("prezzototale").innerHTML= prezzoBiglietto ;
  console.log(prezzototale);
}

// Sulla base di queste informazioni dovrà
// calcolare il prezzo totale del viaggio.

// data
var dataOdierna = new Date()
document.getElementById("data").innerHTML= dataOdierna ;
console.log(data);
