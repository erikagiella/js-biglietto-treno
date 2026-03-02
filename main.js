// Procedimento:

//creo le variabili in cui metterò prezzo a km e costo biglietto
const prezzoAlChilometro = 0.21;
const scontoUnder18 = prezzoAlChilometro * 0.2;
const scontoOver65 = prezzoAlChilometro * 0.4;
let costoBiglietto;


//chiedo all'utente la quantità di km e la assegno alla relativa variabile
const chilometriDaPercorrere = prompt("Ciao! Quanti km vuoi percorrere?");
//chiedo all'utente l'età del passeggero e la assegno alla relativa variabile
const etàPasseggero = prompt("Qual è l'età del passeggero?")
//calcolo il prezzo del biglietto
costoBiglietto = chilometriDaPercorrere * prezzoAlChilometro;

// SE il passeggero ha meno di 18 anni, al risultato verrà scontato il 20%
if (etàPasseggero < 18) {
    costoBiglietto = costoBiglietto - scontoUnder18;
}

// ALTRIMENTI SE il passeggero ha più di 65 anni, al risultato verrà scontato il 40%
else if (etàPasseggero > 65) {
    costoBiglietto = costoBiglietto - scontoOver65;
} else {
    // else superfluo in quanto negli altri casi il costo già calcolato resta invariato
}

//stampo il risultato con due cifre decimali
console.log(`Il biglietto per percorrere ${chilometriDaPercorrere} km per un passeggero di ${etàPasseggero} anni è di ${costoBiglietto.toFixed(2)} euro`)


