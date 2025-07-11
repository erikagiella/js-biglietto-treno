// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km),
// va applicato uno sconto del 20% per i minorenni,
// va applicato uno sconto del 40% per gli over 65.,
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.,

// TIP:
// per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

// 100km, 10 anni => prezzo corretto:  €16.80,
// 100km, 70 anni => prezzo corretto: €12.60

/* Tools:
- const/let (per prezzo a km, costo biglietto)
- prompt (per km ed età)
- if/else if/else  (per calcolo biglietto)
- console.log (per stampa costo biglietto)
- metodo ToFixed () (per arrotondamento costo biglietto a 2 decimali)
*/


// Procedimento:

//creo le variabili in cui metterò prezzo a km e costo biglietto
const prezzoAlChilometro = 0.21
let costoBiglietto

//chiedo all'utente la quantità di km e la assegno alla relativa variabile
const chilometriDaPercorrere = prompt('Quanti km vuoi percorrere?')
//chiedo all'utente l'età del passeggero e la assegno alla relativa variabile
const etàPasseggero = prompt('Qual è l età del passeggero?')
//calcolo il prezzo del biglietto
costoBiglietto = chilometriDaPercorrere * prezzoAlChilometro


//IF/ELSE IF/ELSE

// SE il passeggero ha meno di 18 anni, al risultato verrà scontato il 20%
if (etàPasseggero < 18) {
    const sconto = costoBiglietto * 20 / 100
    costoBiglietto = costoBiglietto - sconto
}

// ALTRIMENTI SE il passeggero ha più di 65 anni, al risultato verrà scontato il 40%
else if (etàPasseggero > 65) {
    const sconto = costoBiglietto * 40 / 100
    costoBiglietto = costoBiglietto - sconto
} else {
    // else superfluo in quanto negli altri casi il costo 
}

//stampo il risultato con due cifre decimali
console.log(`Il biglietto per percorrere ${chilometriDaPercorrere} km per un passeggero di ${etàPasseggero} anni è di ${costoBiglietto.toFixed(2)} euro`)


