import { qS, cE, postData } from "./utilis.js";

const categoryForm = qS("#postFormCat");
const inputNameCat = qS("#formNameCat");
const inputImgCat = qS("#formImgCat");

categoryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const catObj = {
    name: inputNameCat.value,
    image: inputImgCat.value,
  };

  if (inputNameCat.value.length === 0 || inputImgCat.value.length === 0) {
    createMsg("Uno o più campi non sono stati compilati");
  } else {
    postData(catObj, "categories");
  }
});
