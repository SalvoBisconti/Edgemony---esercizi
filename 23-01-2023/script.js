import { cE, qS, quotesGenerator } from "./utils.js";
import { GET } from "./api.js";

const bodyEl = qS("body");
const quoteContainer = cE("div");
quoteContainer.className = "main-quotes";
bodyEl.appendChild(quoteContainer);

GET("quotes").then((data) => {
  quoteContainer.appendChild(quotesGenerator(data.quotes[0]));
});
