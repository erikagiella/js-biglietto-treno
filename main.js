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
- const/let (per km, età, prezzo a km, risultato)
- prompt (per km ed età)
- if/else if/else  (per calcolo biglietto)
- console.log (per stampa risultato)
- metodo ToFixed () (per arrotondamento risultato a 2 decimali)
*/


// Procedimento:

//creo le variabili in cui metterò prezzo a km e risultato
const prezzoAlChilometro = 0.21;
let risultato;

//chiedo all'utente la quantità di km e la assegno alla relativa variabile
const chilometriDaPercorrere = prompt('Quanti km vuoi percorrere?');
//chiedo all'utente l'età del passeggero e la assegno alla relativa variabile
const etàPasseggero = prompt('Qual è l età del passeggero?');
//calcolo il prezzo del biglietto
risultato = chilometriDaPercorrere * prezzoAlChilometro;


//IF/ELSE IF/ELSE

// SE il passeggero ha meno di 18 anni, al risultato verrà scontato il 20%

// ALTRIMENTI SE il passeggero ha più di 65 anni, al risultato verrà scontato il 40%

//stampo il risultato con due cifre decimali

console.log(risultato)


