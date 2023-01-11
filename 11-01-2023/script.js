// Esercizio 1
// Creare una singola card tutto in statico (via HTML), inserire gli elementi a piacere, come immagini, 
// testo o titoli, indispensabile pero aggiungere un button con una X come testo.
// Aggiungere un evento al cui click del mouse sulla class intera:
// Cambi il colore del testo di tutta la card
// Aggiungere un secondo evento al cui click del mouse sul pulsante con la X - Elimini la card stessa

function changeTextColor () {
    document.querySelector('.card').style.color = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;     
}
function deleteCard () {
    document.querySelector('.card').remove();
}

const textEl = document.querySelector('.card');
const btnEl = document.querySelector('.btn');

textEl.addEventListener('click', changeTextColor);
btnEl.addEventListener('click', deleteCard);


// AVANZATO
// Completare la funzione quoteGen al fine di avere delle quotes che mostrino tanto
// il testo che l'autore del testo stesso.

// import { quotes } from './mocks.js';

// function quoteGen(quoteText, quoteAuthor) {
//     const quoteEl = document.createElement('div');
//     const textEl = document.createElement('p');
//     const quoteListEl = document.querySelector('.quote-list');
//     const authorEl = document.createElement('p');
  
//     quoteEl.className = 'quote';
//     textEl.textContent = quoteText;
//     authorEl.textContent = quoteAuthor;
  
//     quoteEl.append(textEl, authorEl);
//     quoteListEl.appendChild(quoteEl);
//   }

//   quotes.forEach((item) => quoteGen(item.quote, item.author));