// Esercizio 1
// Creare uno slider (template via HTML), seguendo il wireframe presente in allegato, seguendo le logiche viste durante la lezione. 
// Lo stesso dovrà presentare 3 immagini che si susseguono al click sui relativi pallini identificatori.
import  {cE, qS} from './utilis.js';

const imgArr = [
    '../img/1.jpeg',
    '../img/2.jpeg',
    '../img/3.jpeg',
]

const imgEl = qS ('.imgs_slider');
const firstButtonEl = qS ('.frt_button');
const secondButtonEl = qS ('.scn_button');
const thirdButtonEl = qS ('.trd_button');


firstButtonEl.addEventListener ('click', () => {
    imgEl.setAttribute("src", imgArr [0])
    firstButtonEl.style.backgroundColor ='rgba(62, 59, 59, 0.898)';
    secondButtonEl.style ="none";
    thirdButtonEl.style ="none";
});
secondButtonEl.addEventListener ('click', () => {
    imgEl.setAttribute('src', imgArr [1])
    secondButtonEl.style.backgroundColor ='rgba(62, 59, 59, 0.898)';
    firstButtonEl.style ="none";
    thirdButtonEl.style ="none";
});
thirdButtonEl.addEventListener ('click', () => {
    imgEl.setAttribute('src', imgArr [2])
    thirdButtonEl.style.backgroundColor ='rgba(62, 59, 59, 0.898)';
    secondButtonEl.style ="none";
    firstButtonEl.style ="none";
});




// Avanzato
// Creare il template dello slider cui sopra completamente dinamico (via Javascript).

// const overlayEl= cE ('div');
// const title= cE ('h1');
// const slideEl= cE ('div');
// const imgEl= cE ('img');
// const shapeEl= cE ('div');
// const buttonSliderEl= cE ('div');
// const firstButtonEl= cE ('button');
// const secondButtonEl= cE ('button');
// const thirdButtonEl= cE ('button');
// const imgArr = [
//     '../img/1.jpeg',
//     '../img/2.jpeg',
//     '../img/3.jpeg',
// ]

// title.className ='title_format';
// title.textContent= 'Visita Oviedo!';
// overlayEl.className ='overlay';
// slideEl.className ='slider';
// overlayEl.className ='overlay';
// imgEl.className ='imgs_slider';
// imgEl.setAttribute('src', '../img/1.jpeg');
// shapeEl.className ='shape';
// buttonSliderEl.className ='button_slider';
// firstButtonEl.className ='frt_button';
// secondButtonEl.className ='scn_button';
// thirdButtonEl.className ='trd_button';

// firstButtonEl.addEventListener ('click', () => {
//     imgEl.setAttribute("src", imgArr [0])
// });
// secondButtonEl.addEventListener ('click', () => {
//     imgEl.setAttribute('src', imgArr [1])
// });
// thirdButtonEl.addEventListener ('click', () => {
//     imgEl.setAttribute('src', imgArr [2])
// });

// buttonSliderEl.append (firstButtonEl, secondButtonEl, thirdButtonEl);
// slideEl.append (imgEl, shapeEl, buttonSliderEl);
// document.body.append (overlayEl, title,slideEl);
