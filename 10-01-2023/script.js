// Esercizio 1
// Sulla base della lezione del giorno, scrivere una funzione che generi una hero dinamicamente tramite Javascript. 
// Devo essere presenti i seguenti elementi:
// Image di sfondo
// Un titolo principale
// Un sottotitolo descrittivo breve

import { products } from './mocks.js';

const createHero = () => {
const bodyEl = document.body;
const sectionHero = document.createElement ('section');
sectionHero.className= 'hero';

const imgEl= document.createElement ('img');
imgEl.className= 'heroImg';
imgEl.setAttribute('src', 'img');
imgEl.src = 'https://picsum.photos/500/500';

const titleEl= document.createElement ('h1');
titleEl.className = 'heroTitle';
titleEl.textContent = 'La mia Hero';

const parEl= document.createElement ('p');
parEl.className= 'heroText';
parEl.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit';



sectionHero.append (imgEl, titleEl, parEl);
bodyEl.appendChild (sectionHero);
}
createHero ();


// Avanzato
// Scrivere un applicazione piu ampia che includa la Hero dell'esercizio 1 e aggiunga anche una sezione 
// relativa a dei prodotti (simile a quanto visto a lezione), attenzione a creare un contenitore che 
// inglobi tutti i singoli prodotti (qualcosa simile a productListEl).

// Creazione contenitore di titolo e cards

const bodyEl = document.body;
const productListEl = document.createElement ('section');
productListEl.className= 'productsCont';

const productListTitle = document.createElement ('div');
productListTitle.className= 'divTitle';
const prodTitleEl= document.createElement ('h1');
prodTitleEl.textContent = 'Scopri i nostri prodotti';

const cardDiv = document.createElement('div');
cardDiv.className = 'cardDiv';

productListTitle.appendChild (prodTitleEl);
productListEl.append (productListTitle, cardDiv);
bodyEl.appendChild (productListEl);

const createCards = (product) => {
const cardEl = document.createElement('div');
cardEl.className = 'card';

const imgEl = document.createElement('img');
imgEl.setAttribute('src', product.img);
imgEl.setAttribute('alt', 'lorem picsum');

const titleEl = document.createElement('h2');
titleEl.className = 'cardTitle';
titleEl.textContent = product.title;

const descriptionEl = document.createElement('p');
descriptionEl.className = 'cardDescription';
descriptionEl.textContent = product.description;

cardEl.append(imgEl, titleEl, descriptionEl);
cardDiv.appendChild (cardEl);
}


for (let product of products) {
    createCards(product);
    
  }

