const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const quotesGenerator = (element) => {
  const quoteContainer = cE("div");
  const imgEl = cE("img");
  const quoteEl = cE("p");
  const citEl = cE("p");
  const overlayEl = cE("div");
  const buttonEl = cE("button");

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

export { cE, qS, quotesGenerator };
