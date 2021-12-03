// creazione prezzo del biglietto treno 
// richiesta dei km che si vogliono percorrere
const distance = parseInt(prompt('Quanti KM vuole percorrere?'));
// richiesta age dell'utente
const birthYear = parseInt(prompt('In che anno è nato?'));

// calcolo prezzo puro senza sconti
let price = distance * 0.21;

console.log(price);

// calcolo età
const now = new Date();

console.log(now);

let age = now.getFullYear() - birthYear;

console.log(age);

// calcolo discount secondo l'età
if (age < 18) {
    discount = 0.20;
} else if (age < 65) {
    discount = 0;
} else {
    discount = 0.40;
}

let discountedValue = (1 - discount );

console.log(discountedValue);

// prezzo finale dato dalla moltiplicazione del firstprice e il valore di sconto
let totPrice = fixedPrice * discountedValue;

// decimali per i centesimi
let fixedTotPrice = totPrice.toFixed(2);

console.log(fixedTotPrice);