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
  postData(newObj);
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
      console.log(obj);
    })

    .catch((e) => {
      const errorMsg = cE("h1");
      errorMsg.className = "errorMsg";
      errorMsg.textContent =
        "Siamo spiacenti, si è verificato un errore. Riprova più tardi ";
      document.body.appendChild(errorMsg);
      console.log(e);
    });
};
