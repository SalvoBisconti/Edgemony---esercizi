// Esercizio 1
// Eseguire sull'array riportato sotto:
// un metodo forEach che stampi in console.log i soli ID di ogni singolo elemento
// un metodo map che memorizzi in una variabile tutti gli ID di ogni singolo elemento e quindi 
// richiamarli con un console.log a parte
// un metodo filter che stampi in console.log i soli ID di ogni singolo elemento 
// i cui valori siano maggiori o uguali a 4

import {todos, myTodo} from './mocks.js';
import {cE, qS, todoGenerator} from './utilis.js';

const todoList = todos.map ((todo) => todo.id);

todos.forEach ((arrayId) => console.log(arrayId.id));
todos.filter ((todo) => (todo.id >= 4)).map ((todo) => (console.log(todo.id)));

console.log (todoList)


// Avanzato
// Crare una todo list personale, con logica in linea a quanto visto a lezione e 
// applicando lo stile preferito

// PER PROBLEMI DI TEMPISTICA NON SONO RIUSCITO A COMPLETARLO

// const bodyEl = qS ('body');
// const nameSec = cE ('section');
// const titleSec = cE ('h1');
// const daysSec = cE ('section');
// const days = cE ('h2')
// const mainSec= cE ('section');
// const todoList= cE ('div');
// const firstSec= cE ('div');
// const secondSec= cE ('div');
// const thirdSec= cE ('div');

// nameSec.className= 'nameSec';
// mainSec.className= 'mainSec';
// daysSec.className= 'daysSec';
// firstSec.className= 'firstDay';
// secondSec.className= 'secondDay';
// thirdSec.className= 'thirdDay';
// todoList.className ='todo_list';

// titleSec.textContent= 'Scheda di allenamento ';
// days.textContent= 'Lunedi';


// myTodo.forEach((todo) => todoGenerator (todo.id, todo.title, firstSec));
// myTodo.forEach((todo) => todoGenerator (todo.id, todo.title, secondSec));
// myTodo.forEach((todo) => todoGenerator (todo.id, todo.title, thirdSec));



// firstSec.appendChild(todoList);
// mainSec.append (firstSec, secondSec, thirdSec);
// daysSec.appendChild(days);
// nameSec.appendChild(titleSec);
// bodyEl.append(nameSec, daysSec, mainSec);