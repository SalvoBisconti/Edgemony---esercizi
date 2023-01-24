// Esercizio 1
// Sulla base della lezione del giorno, creare una paginetta che effettui una chiamata di tipo GET all'endpoint https://dummyjson.com/users,
// renderizzare la lista di utenti, creando delle cards con i valori a vostra scelta (es. nome, cognome, ecc...)

import { cE, qS } from "./utils.js";
import { GET } from "./api.js";

const bodyEl = qS("body");
const usersContainer = cE("div");
usersContainer.className = "main-users";

GET("users").then((data) => {
  data.users.map((user) => usersContainer.appendChild(userGenerator(user)));
});

const userGenerator = (element) => {
  const { firstName, lastName, gender, image } = element;
  const card = cE("div");
  const imgCard = cE("img");
  const textCard = cE("div");
  const name = cE("h3");
  const surname = cE("h3");
  const genderEl = cE("h3");

  card.className = "card";
  imgCard.setAttribute("src", image);
  textCard.className = "divText";
  name.textContent = `Name: ${firstName}`;
  surname.textContent = `Surname: ${lastName}`;
  genderEl.textContent = `Gender: ${gender}`;

  textCard.append(name, surname, genderEl);
  card.append(imgCard, textCard);
  return card;
};

// Avanzato
// Sulla base dell'esercizio 1, creare un filtro tramite input che vada a filtrare la lista degli utenti per nome e/o cognome

const bars = cE("div");
const nameBar = cE("h2");
const surnameBar = cE("h2");
const filterBarName = cE("input");
const filterBarSurname = cE("input");
filterBarName.setAttribute("placeholder", "Insert name");
filterBarSurname.setAttribute("placeholder", "Insert surname");
nameBar.textContent = "Name:";
surnameBar.textContent = "Surname:";
filterBarName.className = "filterbar";
filterBarSurname.className = "filterbar";
bars.className = "bars";
bars.append(nameBar, filterBarName, surnameBar, filterBarSurname);

const deleteUsers = () => {
  const allUsers = document.querySelectorAll(".card");
  allUsers.forEach((card) => card.remove());
};

filterBarName.addEventListener("input", (e) => {
  deleteUsers();

  GET("users").then((data) => {
    data.users.map((user) => {
      if (
        user.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user.firstName.toUpperCase().includes(e.target.value.toUpperCase())
      )
        usersContainer.appendChild(userGenerator(user));
    });
  });
});

filterBarSurname.addEventListener("input", (e) => {
  deleteUsers();

  GET("users").then((data) => {
    data.users.map((user) => {
      if (
        user.lastName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user.lastName.toUpperCase().includes(e.target.value.toUpperCase())
      )
        usersContainer.appendChild(userGenerator(user));
    });
  });
});
bodyEl.append(bars, usersContainer);
