const qS = (element) => document.querySelector(element);
const cE = (type) => document.createElement(type);

const postData = (obj, type) => {
  fetch(`https://api.escuelajs.co/api/v1/` + type, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((obj) => {
      createMsg("Elemento correttamente caricato nel nostro store");
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
export { qS, cE, postData };
