import booksJson from "../books.json" assert { type: "json" };
const booksSec = document.querySelector(".books");
const cardGen = (data) => {
  const card = document.createElement("div");
  const image = document.createElement("img");
  const textEl = document.createElement("div");
  const title = document.createElement("h3");
  const author = document.createElement("p");
  const price = document.createElement("p");

  card.className = "card";
  image.className = "img";
  textEl.className = "text";
  image.src = data.image;
  title.textContent = data.Titolo;
  author.textContent = data.Autore;
  price.textContent = data.Prezzo;

  textEl.append(title, author, price);
  card.append(image, textEl);
  return card;
};

console.log(booksJson);

booksJson.books.map((book) => {
  booksSec.appendChild(cardGen(book));
});
