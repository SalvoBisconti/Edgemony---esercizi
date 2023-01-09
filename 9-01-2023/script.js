// ESERCIZIO 1
// Sulla base della lezione del giorno, ricreare la calcolatrice fatta in passato utilizzando 
// solo arrow functions.
// Alla fine combinare le varie operazioni in una funzione piu ampia, dove all'utente viene data la 
// possibilita di scegliere quale operazione effettuare. Siate liberi di aggiungere gli argomenti a piacere,
//  come per esempio i numeri, se chiederli all'utente o meno.

const summ = (firstNum, secondNum) => firstNum + secondNum;
const sub = (firstNum, secondNum) => firstNum - secondNum;
const div = (firstNum, secondNum) => firstNum / secondNum;
const mul = (firstNum, secondNum) => firstNum * secondNum;
const calculator = function (){
    let ChooseOperation = prompt (' Inserisci il tipo di operazione che vuoi effettuare. Puoi scegliere tra: +  -  *  :');
    if (ChooseOperation === '+' || ChooseOperation === '-'|| ChooseOperation === '*'  || ChooseOperation === ':') {
        switch (ChooseOperation) {
            case '+':
                console.log(summ(3,2));
                break;
            case '-':
                console.log(sub(3,2))
                break;
             case '*':
                console.log(mul(3,2))
                break;
             case ':':
                console.log(div(3,2))
                break;
        }
        } else {
            alert ('Non hai inserito un' + 'operazione valida')
        }
    }

calculator ();