import { qS, cE } from "./utilis.js";

const cart = [];
const cartMenu = qS(".cart_menu");
const cartLink = qS(".cart_link");
const heroImg = qS(".hero_img");
const firstButtonEl = qS(".first_btn");
const secondButtonEl = qS(".second_btn");
const thirdButtonEl = qS(".third_btn");
const divContainer = cE("div");
const filterBtn = qS(".filter_btn");
const extBtnFilter = qS(".ext_btn_filter");
const filterDiv = qS(".filter_menu");

fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((data) => {
    cardGenerator(data);
    // cardFiltred(data);
    console.log(data);
  })
  .catch((e) => {
    const errorMsg = cE("h1");
    errorMsg.className = "errorMsg";
    errorMsg.textContent =
      "Siamo spiacenti, si è verificato un errore. Riprova più tardi ";
    document.body.appendChild(errorMsg);
    console.log(e);
  });

const buttonColorSelect = () => {
  firstButtonEl.classList.add("btn_active");
  firstButtonEl.addEventListener("click", () => {
    heroImg.setAttribute("src", "./img/hero1.jpg");
    firstButtonEl.classList.add("btn_active");
    secondButtonEl.classList.remove("btn_active");
    thirdButtonEl.classList.remove("btn_active");
  });
  secondButtonEl.addEventListener("click", () => {
    heroImg.setAttribute("src", "./img/hero2.jpg");
    secondButtonEl.classList.add("btn_active");
    firstButtonEl.classList.remove("btn_active");
    thirdButtonEl.classList.remove("btn_active");
  });
  thirdButtonEl.addEventListener("click", () => {
    heroImg.setAttribute("src", "./img/hero3.jpg");
    thirdButtonEl.classList.add("btn_active");
    secondButtonEl.classList.remove("btn_active");
    firstButtonEl.classList.remove("btn_active");
  });
};

const cardGenerator = (element) => {
  const bodyEl = qS("body");
  const cardContainer = qS(".products_container");

  element.forEach((element) => {
    const card = cE("div");
    const textEl = cE("div");
    const imgEl = cE("img");
    const titleEl = cE("h3");
    const descriptionEl = cE("p");
    const buttonEl = cE("button");

    cardContainer.className = "products_container";
    card.className = "card";
    imgEl.className = "image";
    textEl.className = "text";
    buttonEl.className = "button_card";

    imgEl.setAttribute("src", element.category.image);

    titleEl.textContent = element.title.slice(0, 10);
    descriptionEl.textContent = element.description.slice(0, 30);
    buttonEl.textContent = "Aggiungi al carrello";

    buttonEl.addEventListener("click", () => {
      cartPopulator(element);
      alert("Prodotto aggiunto al carrello");
    });

    textEl.append(titleEl, descriptionEl);
    card.append(imgEl, textEl, buttonEl);
    cardContainer.appendChild(card);
    bodyEl.appendChild(cardContainer);
  });
};

const cartCreation = () => {
  cartMenu.innerHTML = "";
  cart.forEach((item, i) => {
    const cartEl = cE("div");
    const deleteBtn = cE("button");
    cartEl.className = "cart_prod";
    deleteBtn.className = "delete_btn";
    cartEl.innerHTML = `<p> q: ${item.qty} </p><p class="cart_product">${item.title} € ${item.price}</p>`;
    deleteBtn.textContent = "X";

    cartEl.appendChild(deleteBtn);
    cartMenu.appendChild(cartEl);

    deleteBtn.addEventListener("click", () => {
      cartEl.remove();
      cart.splice(i, 1);
    });
  });
};

const cartPopulator = (item) => {
  const newObj = {
    id: item.id,
    title: item.title,
    price: item.price,
    qty: 1,
  };

  const search = cart.filter((element) => {
    if (element.id === newObj.id) {
      element.qty++;
      return element;
    }
  });

  if (search.length === 0) {
    cart.push(newObj);
  }

  console.log(cart);
  cartCreation();
};

divContainer.className = "div_Container";

cartLink.addEventListener("click", () => cartMenu.classList.toggle("show"));
filterBtn.addEventListener("click", () => filterDiv.classList.toggle("show"));
extBtnFilter.addEventListener("click", () => filterDiv.remove());

// const cardFiltred = (element) => {
//   const takeNumber = qS("#filterForm");
//   takeNumber.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const a = qS("#fstValue");
//     const b = qS("#scnValue");
//     const ab = [parseInt(a.value), parseInt(b.value)];

//     const filterArrayObj = [];
//     element.filter((element) => {
//       if (element.category.id >= ab[0] && element.category.id <= ab[1]) {
//         const objFilt = {
//           title: element.title,
//           description: element.description,
//           images: element.images,
//         };
//         filterArrayObj.push(objFilt);

//         cardGenerator2(filterArrayObj);
//         console.log(filterArrayObj);
//       }
//     });
//   });
// };

buttonColorSelect();

document.body.appendChild(divContainer);
