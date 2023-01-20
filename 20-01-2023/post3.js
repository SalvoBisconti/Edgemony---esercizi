import { qS, cE, putData } from "./utilis.js";

const postForm = qS("#putForm");
const inputTitle = qS("#formTitle");
const inputPrice = qS("#formPrice");
const inputCategory = qS("#formCategory");
const inputImage = qS("#formImage");
const inputDescription = qS("#formDescription");
const editProdId = qS("#IdOldProdForm");

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
    editProdId.value.length === 0 ||
    inputTitle.value.length === 0 ||
    inputImage.value.length === 0 ||
    inputCategory.value.length === 0 ||
    inputDescription.value.length === 0 ||
    inputPrice.value.length === 0
  ) {
    createMsg("Uno o più campi non sono stati compilati");
  } else {
    putData(newObj, editProdId.value);
  }
});
