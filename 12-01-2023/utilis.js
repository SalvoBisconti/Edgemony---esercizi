const qS = (element) => document.querySelector(element);
const cE = (type) => document.createElement(type);

const todoGenerator = (id, title, todoList) => {
    const todoEl = cE('div');
    const isCompletedEl = cE('div');
    const titleEl = cE ('h2');
    const idEl = cE('p');
  
    isCompletedEl.className = 'circle-check';
    isCompletedEl ? isCompletedEl.classList.add('completed') : null;
    todoEl.className= 'todo';
    idEl.className = 'id';
    titleEl.className = 'title';

    
    titleEl.textContent = title;
    idEl.textContent = id;

    isCompletedEl.addEventListener('click', () => {
        isCompletedEl.classList.toggle('completed');
      });
    
    todoEl.append(isCompletedEl, idEl, titleEl);
    todoList.appendChild (todoEl);
  };

  export {qS, cE, todoGenerator};