// ESERCIZIO 1
// Sulla base della lezione del giorno, creare una nuova funzione che funzioni 
// esattamente come il metodo parseIntche preso un numero come parametro lo ritorni 
// senza virgola, es: 23.23323 => 23
// Al fine di risolvere l'esercizio non utilizzare il parseInt chiaramente, ma trovare 
// una alternativa possibile, già vista a lezione oppure nuova cercando sulla rete.
// L'esercizio inoltre deve svilupparsi nell'osservanza dei concetti riguardo allo scope 
// in javascript, quindi attenzione alla tipologia di varibili (var, let e const).


function intNum (num) {
    const  finishNum= Math.round(num);
    return finishNum
}

//Verifica con inserimento di 3.3 e 3.7:
console.log(intNum(3.3));
console.log(intNum(3.7));
console.log(intNum(Math.random()*1000)) //Verifica con inserimento casuale di un numero


// AVANZATO
// Creare un array di oggetti e processarne i valori. Bisogna creare una funzione che:
// preso come argomento l'array di oggetti, mostri in tre console.log le seguenti 
// tipologie, per ogni oggetto:
// title
// price
// count

function productGen(id, title, price, description, category, image, rating) {
    return {
        id, 
        title, 
        price, 
        description,
        category, 
        image, 
        rating
    }}

function ratingGen (rate ,count) {
        return {
            rate,
            count,
        }
    }

function typeObj (Obj) {
    console.log(product[Obj].title);
    console.log(product[Obj].price);
    console.log(product[Obj].rating.count);
   
}


const product = [
    productGen (1, 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',109.95,'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday', "mens's clothing", 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', ratingGen(3.9, 120)),
    productGen (2,'Mens Casual Premium Slim Fit T-Shirts', 22.3, 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.', "men's clothing", 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', ratingGen(4.1, 259)),
    productGen (3,'Mens Cotton Jacket', 55.99, 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.', "men's clothing", 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg', ratingGen(4.7, 500) ), 
    productGen (4, 'Mens Casual Slim Fit', 15.99, 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.', "men's clothing", 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg', ratingGen(2.1, 430) ),
    productGen (5, "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet", 695, "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.", 'jewelery', 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg', ratingGen(4.6, 400) )
]

typeObj(0);
console.log ('-----------')
typeObj(1);
console.log ('-----------')
typeObj(2);
console.log ('-----------')
typeObj(3);
console.log ('-----------')
typeObj(4);

//Se avessi potuto divincolarmi dalla consegna avrei svolto la funzione nel seguente modo:
// function typeObj () {
//     for (let=i; i<5; i++) {
//     console.log(product[i].title);
//     console.log(product[i].price);
//     console.log(product[i].rating.count);
//     console.log ('-----------')
// } }

// typeObj ();
  
