import { qS, cE } from "./utilis.js";

const postForm = qS("#postForm");
const inputTitle = qS("#formTitle");
const inputPrice = qS("#formPrice");
const inputCategory = qS("#formCategory");
const inputImage = qS("#formImage");
const inputDescription = qS("#formDescription");

postForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newObj = {
    title: inputTitle.value,
    price: parseInt(inputPrice.value),
    description: inputDescription.value,
    categoryId: parseInt(inputCategory.value),
    images: [inputImage.value],
  };

  if (
    inputTitle.value.length === 0 ||
    inputImage.value.length === 0 ||
    inputCategory.value.length === 0 ||
    inputDescription.value.length === 0 ||
    inputPrice.value.length === 0
  ) {
    createMsg("Uno o più campi non sono stati compilati");
  } else {
    postData(newObj);
  }
});

const postData = (obj) => {
  fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((obj) => {
      createMsg(
        "Il tuo prodotto è stato correttamente caricato nel nostro store"
      );
      console.log(obj);
    })
    .catch((e) => {
      createMsg("Siamo spiacenti, si è verificato un errore");
      console.log(e);
    });
};

const createMsg = (string) => {
  const divEl = cE("div");
  const exitButton = cE("button");
  const errorText = cE("h1");

  divEl.className = "divMsgError";
  exitButton.className = "exitBtn";
  exitButton.textContent = "X";
  errorText.textContent = string;

  exitButton.addEventListener("click", () => {
    divEl.remove();
  });

  divEl.append(exitButton, errorText);
  document.body.appendChild(divEl);
};
