// Esercitazione
// Seguendo quello fatto oggi a lezione effettuate una chiamate fetch() alla seguente API web: https://api.escuelajs.co/api/v1/products 
// e stampate in console nome e descrizione.

fetch ('https://api.escuelajs.co/api/v1/products')
.then (res => res.json())
.then(data => {
    data.forEach(element => {
    console.log ('--------------');
    console.log (element.title);
    console.log (element.description);
   }); 
})
.catch (e => console.log(e));



// Avanzato
// Crea delle card il più verosimili possibile ad un vero e-commerce e provate ad 
// utilizzare un loader (puo anche essere un semplice messaggio) e la gestione degli errori

const buttonCardGen = document.createElement ('button');
const loadingMsg = document.createElement ('h2');

buttonCardGen.className= ('button');
loadingMsg.className = ('loadMsg')
buttonCardGen.textContent = 'SCOPRI I NOSTRI PRODOTTI';


buttonCardGen.addEventListener ('click', () => {
    loadingMsg.textContent = "Caricamento in corso ...";
    
    fetch ('https://api.escuelajs.co/api/v1/products')
    .then (res => res.json())
    .then(data => {
    cardGenerator (data); 
    })
    .catch (e =>  {
        const errorMsg = document.createElement ('h1');
        errorMsg.className = ('errorMsg');
        errorMsg.textContent = 'Siamo spiacenti, si è verificato un errore. Riprova più tardi ';
        document.body.appendChild (errorMsg);
        console.log(e)});

});


const cardGenerator = (data) => {
    const bodyEl= document.querySelector ('body');
    const cardContainer = document.createElement ('section');
    loadingMsg.textContent = "";
    buttonCardGen.remove () ;
    data.forEach ((datas) => {
        
        const card = document.createElement ('div');
        const textEl = document.createElement ('div');
        const imgEl = document.createElement ('img')
        const titleEl = document.createElement ('h3');
        const descriptionEl = document.createElement ('p'); 

        cardContainer.className = ('container');
        card.className = ('card');
        imgEl.className = ('image');
        textEl.className = ('text');

        imgEl.setAttribute ('src', 'https://picsum.photos/300/300');

        titleEl.textContent= datas.title;
        descriptionEl.textContent= datas.description;

        textEl.append (titleEl, descriptionEl);
        card.append (imgEl, textEl);
        cardContainer.appendChild(card);
        bodyEl.appendChild(cardContainer);
    }
)

};

document.body.append (buttonCardGen, loadingMsg);





