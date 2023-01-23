import { GET } from "./api.js";

const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const buttonEl = cE("button");
const quotesGenerator = (element) => {
  const quoteContainer = cE("div");
  const imgEl = cE("img");
  const quoteEl = cE("p");
  const citEl = cE("p");
  const overlayEl = cE("div");

  buttonEl.textContent = "Genera";
  quoteContainer.className = "quote-main";
  overlayEl.className = "overlay";
  imgEl.setAttribute("src", "./img.jpg");
  imgEl.setAttribute("alt", "Image of quotes");
  quoteEl.textContent = element.quote;
  citEl.textContent = `- ${element.author} `;

  quoteContainer.append(buttonEl, imgEl, quoteEl, overlayEl, citEl);
  return quoteContainer;
};

buttonEl.addEventListener("click", () => {
  document.body.innerHTML = "";
  GET(`quotes/${parseInt(Math.random() * 100)}`).then((data) => {
    document.body.appendChild(quotesGenerator(data));
  });
});

export { cE, qS, quotesGenerator };
