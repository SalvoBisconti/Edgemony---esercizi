const qS = (element) => document.querySelector(element);
const cE = (type) => document.createElement(type);

const todoGenerator = (order, title, serie, category, todoList) => {
    const todoEl = cE('div');
    const mainEl = cE('div');
    const typeTrainEl = cE('div');
    const isCompletedEl = cE('div');
    const titleEl = cE ('h2');
    const orderEl = cE('h3');
    const seriesEl = cE('h3');
    const typeTraning = cE('div');

    

    isCompletedEl.className = 'circle-check';
    isCompletedEl ? isCompletedEl.classList.add('completed') : null;
    todoEl.className= 'todo';
    typeTrainEl.className = 'typeTrainDiv';
    mainEl.className= 'mainElementDiv';
    orderEl.className = 'order';
    titleEl.className = 'title';
    seriesEl.className = 'serie';
    typeTraning.className = 'typeTrain';
    titleEl.textContent = title;
    seriesEl.textContent= serie;
    orderEl.textContent = order;
    typeTraning.textContent = category;
  
    isCompletedEl.addEventListener('click', () => {
        isCompletedEl.classList.toggle('completed');
      });

    typeTrainEl.appendChild (typeTraning);
    mainEl.append(isCompletedEl, orderEl, titleEl, seriesEl);
    todoEl.append(mainEl, typeTrainEl);
    todoList.appendChild (todoEl);
  };

  export {qS, cE, todoGenerator};
