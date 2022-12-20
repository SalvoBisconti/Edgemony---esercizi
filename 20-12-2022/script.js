// ESERCIZIO
// Sulla base della lezione del giorno, scrivere un array inizialmente vuoto, 
// e aggiungere al suo interno dieci elementi di tipo string a scelta, rispettando i seguenti 
// punti:
// - utilizzare il ciclo for classico
// - sarà l'utente ad inserire queste stringhe (prompt)
// - alla fine, quando l'utente avrà inserito tutte e 10 le parole, stamparle in console


// let arrayString = [];
// for (let i=0; i<10; i++ ) {
//   arrayString.push(prompt ('Inserisci elemento'));
// }

// for (let i=0; i<10; i++ ) {
//     console.log (arrayString [i]);
//   }


// AVANZATO
// Riscrivere l'esercizio sopra utilizzando le altre due 
// versioni minimal del ciclo for (for in e for of)

 let arrayString = [];
 for (let i=0; i<10; i++ ) {
   arrayString.push(prompt ('Inserisci elemento'));
 }

 // For of
//  for (let element of arrayString) {
//     console.log(element);
//  }

//For in
 for (let arrayIndex in arrayString) {
    console.log(arrayString[arrayIndex]);
 }
