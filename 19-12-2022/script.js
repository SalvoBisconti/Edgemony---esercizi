let operation = prompt (' Inserisci il tipo di operazione che vuoi effettuare: addizione, sottrazione, moltiplicazione o divisione');
if (operation == 'addizione' || operation == 'sottrazione' || operation == 'moltiplicazione' || operation == 'divisione') {
let firstNumber = prompt ('Inserisci primo numero');
let numFirstNumber =parseInt(firstNumber);
let secondNumber = prompt ('Inserisci secondo numero');
let numSecondNumber =parseInt(secondNumber);
if (isNaN(firstNumber) || isNaN(secondNumber) ){
    alert('Hai inserito un valore non numerico');
}
else {
switch (operation) {
    case 'addizione':
        alert (' La somma è ' + (numFirstNumber + numSecondNumber))
        break;
    case 'sottrazione':
        alert (' La differenza è ' + (numFirstNumber - numSecondNumber))
         break;
     case 'moltiplicazione':
        alert (' Il prodotto è ' + (numFirstNumber * numSecondNumber))
         break;
     case 'divisione':
        alert (' Il quoziente è ' + (numFirstNumber / numSecondNumber))
          break;
}
}
} else {
    alert ('Non hai inserito un' + 'operazione valida'  )
}
