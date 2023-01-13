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

// const bodyEl = qS ('body');
// const nameSec = cE ('section');
// const titleSec = cE ('h1');
// const daysSec = cE ('section');
// const mainSec= cE ('section');

// const firstSec= cE ('div');
// const secondSec= cE ('div');
// const thirdSec= cE ('div');
// const daysArr= ["Lunedì", "Mercoledì", "Venerdì"];

// nameSec.className= 'nameSec';
// mainSec.className= 'mainSec';
// daysSec.className= 'daysSec';
// firstSec.className= 'firstDay';
// secondSec.className= 'secondDay';
// thirdSec.className= 'thirdDay';



// titleSec.textContent= 'Scheda di allenamento ';


// const daysCompile = (day) => {
//     const days = cE ('h2');
//     days.textContent= day;
//     daysSec.appendChild (days)
// }

// daysArr.forEach((day) => daysCompile (day));
// myTodo.filter ((todo) => (todo.day === "Lunedì")).forEach ((todo) => todoGenerator (todo.order, todo.title, todo.serie, todo.category, firstSec));
// myTodo.filter ((todo) => (todo.day === "Mercoledì")).forEach ((todo) => todoGenerator (todo.order,todo.title, todo.serie,todo.category, secondSec));
// myTodo.filter ((todo) => (todo.day === "Venerdì")).forEach ((todo) => todoGenerator (todo.order,todo.title, todo.serie,todo.category, thirdSec));




// mainSec.append (firstSec, secondSec, thirdSec);
// nameSec.appendChild(titleSec);
// bodyEl.append(nameSec, daysSec, mainSec);
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
