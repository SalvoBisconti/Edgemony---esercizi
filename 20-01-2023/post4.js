import { qS, cE, deleteData } from "./utilis.js";

const deleteForm = qS("#deleteForm");
const idProdDel = qS("#idDelProd");

deleteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (idProdDel.value.length === 0) {
    createMsg("Uno o più campi non sono stati compilati");
  } else {
    deleteData(idProdDel.value);
  }
});
