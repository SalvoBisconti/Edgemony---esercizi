// ESERCIZIO 1
// Scrivere una prima funzione che presa un stringa come argomento, 
// ritorni la stessa stringa + la parola bootcamp;

function string(word= ' bootcamp') {
    let inputString = prompt ('Inserisci argomento');
    return inputString + word;
}
// Verifica:
console.log(string());




// ESERCIZIO 2
// Scrivere un oggetto col vostro nome che vi identifichi in proprietà
// (nome, cognome, ecc...) e per metodi (es. possono anche essere 
// semplici console.log di voi che eseguite un hobby);

const me = {
    name: 'Salvo',
    surname: 'Bisconti',
    gender: 'Male',
    age: '24',
    homeTown: 'Palermo',
    bio: function ()
    {
       return "Mi chiamo " + this.name + " " + " sono nato a " + this.homeTown + " e ho " + this.age + " anni"
    }
    
}
console.log (me.bio());





// AVANZATO
// 1. Scrivere una funzione calculator che preso come argomento una operazione e due numeri,
// ritorni alla fine il numero risultato dall'operazione scelta.
// 2. Provare ad aggiungere i due numeri singolarmente (num1, num2) e anche in coppia dentro 
// un array ([num1, num2]).

// AVANZATO 1
function operation (result){
   
    let ChooseOperation = prompt (' Inserisci il tipo di operazione che vuoi effettuare: +, -, * o /');
    if (ChooseOperation == '+' || ChooseOperation == '-' || ChooseOperation == '*' || ChooseOperation == '/') {
    let firstNumber = prompt ('Inserisci primo numero');
    let numFirstNumber =parseInt(firstNumber);
    let secondNumber = prompt ('Inserisci secondo numero');
    let numSecondNumber =parseInt(secondNumber);
    if (isNaN(firstNumber) || isNaN(secondNumber) ){
        alert('Hai inserito un valore non numerico');
     
    }
    
    else {
    switch (ChooseOperation) {
        case '+':
            result= numFirstNumber + numSecondNumber;
            alert (' La somma è ' + (result));
            return result;
            break;
        case '-':
            result= numFirstNumber - numSecondNumber;
            alert (' La differenza è ' + (result));
            return result;
            break;
         case '*':
            result= numFirstNumber * numSecondNumber;
            alert (' Il prodotto è ' + (result));
            return result;
            break;
         case '/':
            result= numFirstNumber / numSecondNumber;
            alert (' Il quoziente è ' + (result));
            return result;
            break;
    }
    }
    } else {
        alert ('Non hai inserito un' + 'operazione valida'  )
    }
    
}

console.log(operation());




// AVANZATO.2 CON INSERIMENTO SINGOLO
function operation (result =[]){

    let ChooseOperation = prompt (' Inserisci il tipo di operazione che vuoi effettuare: +, -, * o /');
    if (ChooseOperation == '+' || ChooseOperation == '-' || ChooseOperation == '*' || ChooseOperation == '/') {
    let num1 = [];
    num1.push(prompt ('Inserisci primo numero'));
    let num2 = [];
    num2.push(prompt ('Inserisci secondo numero'));
    if (isNaN(num1) || isNaN(num2) ){
        alert('Hai inserito un valore non numerico');
     
    }
    
    else {
    switch (ChooseOperation) {
        case '+':
            result[0]= (+num1[0]) + (+num2[0]);
            alert (' La somma è ' + (result));
            return result [0];
            break;
        case '-':
            result[0]= num1[0] - num2[0];
            alert (' La differenza è ' + (result));
            return result [0];
            break;
         case '*':
            result[0]= num1[0] * num2[0];
            alert (' Il prodotto è ' + (result));
            return result [0];
            break;
         case '/':
            result[0]= num1[0] / num2[0];
            alert (' Il quoziente è ' + (result));
            return result [0];
            break;
    }
    }
    } else {
        alert ('Non hai inserito un' + 'operazione valida'  )
    }
    
}

console.log(operation());




// AVANZATO.2 CON INSERIMENTO IN COPPIA
function operation (result =[]){

    let ChooseOperation = prompt (' Inserisci il tipo di operazione che vuoi effettuare: +, -, * o /');
    if (ChooseOperation == '+' || ChooseOperation == '-' || ChooseOperation == '*' || ChooseOperation == '/') {
    let numbers = [];
    for(let i=0; i<2; i++) {
        numbers.push(prompt('inserisci i due numeri'))
    }
    switch (ChooseOperation) {
        case '+':
           result= (+numbers [0]) + (+numbers [1]) ;
           alert (' La somma è ' + (result));
           return result
           break;
        case '-':
                result= numbers [0] - numbers [1] ;
                alert (' La differenza è ' + (result));
                return result 
                break;
        case '*':    
                result= numbers [0] * numbers [1] ;
                alert (' Il prodotto è ' + (result));
                return result
                break;
         case '/':
                result= numbers [0] / numbers [1] ;
                alert (' Il quoziente è ' + (result));
                return result
             
                break;
    }

    } else {
        alert ('Non hai inserito un' + 'operazione valida'  )
    }
    
}

console.log(operation());
