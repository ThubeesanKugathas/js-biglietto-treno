// data attuale 
let now = new Date();
let date = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();
let dateElement = document.getElementById('date');
dateElement.innerHTML = `${date}`;


// clicker che fa partire il calcolo del costo del biglietto 
const button = document.getElementById('button');

let clickCounter = 0;

button.addEventListener('click', function () {
    clickCounter++; // alias di clickCounter += 1;

    // se clickCounter è dispari, mostro il box
    if (clickCounter !== 0) {

        // costanti
        const costPerKm = 0.21;

        // creazione prezzo del biglietto treno 
        // richiesta dei km che si vogliono percorrere
        const distance = parseInt(prompt('Quanti KM vuole percorrere?'));
        let distanceElement = document.getElementById('km');
        distanceElement.innerHTML = `${distance} KM`;
        // richiesta age dell'utente
        const birthYear = parseInt(prompt('In che anno è nato?'));

        // calcolo prezzo puro senza sconti
        let price = distance * costPerKm;
        
        // calcolo età
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
        let totPrice = price * discountedValue;

        // decimali per i centesimi
        let fixedTotPrice = totPrice.toFixed(2);
        let priceElement = document.getElementById('price');
        priceElement.innerHTML = `${fixedTotPrice}`;

        console.log(fixedTotPrice);
    } 
})