import {qS, cE} from './utilis.js';

const cart= [];
const cartMenu = qS('.cart_menu');
const cartLink= qS ('.cart_link')
const heroImg = qS('.hero_img');
const firstButtonEl = qS('.first_btn');
const secondButtonEl = qS('.second_btn');
const thirdButtonEl = qS('.third_btn');
const buttonCardGen = cE ('button');
const loadingMsg = cE ('h2');

    buttonCardGen.addEventListener ('click', () => {
    loadingMsg.textContent = "Caricamento in corso ...";
    
    fetch ('https://api.escuelajs.co/api/v1/products')
    .then (res => res.json())
    .then(data => {
    cardGenerator(data);
    })
    .catch (e =>  {
        const errorMsg = document.createElement ('h1');
        errorMsg.className = ('errorMsg');
        errorMsg.textContent = 'Siamo spiacenti, si è verificato un errore. Riprova più tardi ';
        document.body.appendChild (errorMsg);
        console.log(e)});
    });

    const buttonColorSelect = () => {
    firstButtonEl.classList.add('btn_active');
    firstButtonEl.addEventListener ('click', () => {
        heroImg.setAttribute("src", "./img/hero1.jpg")
        firstButtonEl.classList.add('btn_active');
        secondButtonEl.classList.remove('btn_active');
        thirdButtonEl.classList.remove('btn_active');
    });
    secondButtonEl.addEventListener ('click', () => {
        heroImg.setAttribute('src', "./img/hero2.jpg")
        secondButtonEl.classList.add('btn_active');
        firstButtonEl.classList.remove('btn_active');
        thirdButtonEl.classList.remove('btn_active');
    });
    thirdButtonEl.addEventListener ('click', () => {
        heroImg.setAttribute('src', "./img/hero3.jpg")
        thirdButtonEl.classList.add('btn_active');
        secondButtonEl.classList.remove('btn_active');
        firstButtonEl.classList.remove('btn_active');
    });
    };

    const cardGenerator = (element) => {
    const bodyEl= qS ('body');
    const cardContainer = qS ('.products_container');
    loadingMsg.textContent = "";
    buttonCardGen.remove () ;
    element.forEach(element => {
        const card = cE  ('div');
        const textEl = cE  ('div');
        const imgEl = cE  ('img')
        const titleEl = cE  ('h3');
        const descriptionEl = cE  ('p'); 
        const buttonEl = cE ('button');


        cardContainer.className = ('products_container');
        card.className = ('card');
        imgEl.className = ('image');
        textEl.className = ('text');
        buttonEl.className = ('button_card');

        imgEl.setAttribute ('src', element.category.image);

        titleEl.textContent= element.title.slice(0,10);
        descriptionEl.textContent= element.description.slice(0,30);
        buttonEl.textContent= 'Aggiungi al carrello';
    

        buttonEl.addEventListener ('click',() => {
            cart.push(element);
            cartCreation ();
            alert ('Prodotto aggiunto al carrello');
               });

        textEl.append (titleEl, descriptionEl);
        card.append (imgEl, textEl, buttonEl);
        cardContainer.appendChild(card);
        bodyEl.appendChild(cardContainer);
    } 
    ) 
};

const cartCreation = () => {
    cartMenu.innerHTML = "";
    cart.forEach(item => {
      const cartEl = cE("div");
      cartEl.innerHTML = `<p class="carrello">${item.title}</p><p>${item.price}</p>`;
      cartMenu.appendChild(cartEl);
    });
  };
    
  buttonCardGen.className= ('card_gen_but');
  buttonCardGen.textContent = 'SCOPRI I NOSTRI PRODOTTI';
  loadingMsg.className = ('loadMsg')
  
   
    cartLink.addEventListener("click", () => {
        cartMenu.classList.toggle("show");
      });

    buttonColorSelect();

    document.body.append(buttonCardGen, loadingMsg);



