// Esercizio 1
// Sulla base della lezione del giorno, creare un mock in formato JSON. Riprendere uno degli esercizi passati (es. generatore di una card prodotto),
// eliminare eventuale chiamata fetch ed utilizzare il mock JSON creato per popolare i dati.

// Avanzato
// Creare un grafico a piacere basato su una api a scelta oppure su un mock costruito ad hoc.

import { cE, qS } from "./utils.js";
import usersJson from "./mocks.json" assert { type: "json" };

const userGenerator = (element) => {
  const { firstName, lastName, gender, image } = element;
  const card = cE("div");
  const imgCard = cE("img");
  const textCard = cE("div");
  const name = cE("h3");
  const surname = cE("h4");
  const genderEl = cE("h4");
  const ageEl = cE("h4");

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

const deleteUsers = () => {
  const allUsers = document.querySelectorAll(".card");
  allUsers.forEach((card) => card.remove());
};

const graphicCreator = (element, userColorEyes) => {
  const graphicGen = cE("div");
  const colorTitle = cE("h4");
  const bar = cE("div");
  const barTitle = cE("h3");

  graphicGen.className = "bar";
  colorTitle.textContent = element[0];
  bar.className = "color-bar";
  barTitle.textContent = element.length;
  bar.style.height = `${userColorEyes * 70}px`;
  bar.style.backgroundColor = `${element[0]}`;
  bar.appendChild(barTitle);
  graphicGen.append(colorTitle, bar);
  return graphicGen;
};

const bodyEl = qS("body");
const usersContainer = cE("div");
const bars = cE("div");
const nameBar = cE("h2");
const surnameBar = cE("h2");
const filterBarName = cE("input");
const filterBarSurname = cE("input");
const graphicDiv = cE("div");
const titleGraphic = cE("h2");
const graphicEl = cE("div");

graphicDiv.className = "graphic-div";
usersContainer.className = "main-users";
filterBarName.setAttribute("placeholder", "Insert name");
filterBarSurname.setAttribute("placeholder", "Insert surname");
nameBar.textContent = "Name:";
surnameBar.textContent = "Surname:";
filterBarName.className = "filterbar";
filterBarSurname.className = "filterbar";
bars.className = "bars";
titleGraphic.textContent = "Eyes color chart";
graphicEl.className = "graphic-area";

usersJson.users.map((user) => {
  usersContainer.appendChild(userGenerator(user));
});

filterBarName.addEventListener("input", (e) => {
  deleteUsers();
  usersJson.users.map((user) => {
    if (
      user.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
      user.firstName.toUpperCase().includes(e.target.value.toUpperCase())
    )
      usersContainer.appendChild(userGenerator(user));
  });
});

filterBarSurname.addEventListener("input", (e) => {
  deleteUsers();
  usersJson.users.map((user) => {
    if (
      user.lastName.toLowerCase().includes(e.target.value.toLowerCase()) ||
      user.lastName.toUpperCase().includes(e.target.value.toUpperCase())
    )
      usersContainer.appendChild(userGenerator(user));
  });
});

const usersEyes = usersJson.users.map((user) => user.eyeColor);
let firstStage = usersEyes.filter((eyes) => eyes === "Green");
let secondStage = usersEyes.filter((eyes) => eyes === "Brown");
let thirdStage = usersEyes.filter((eyes) => eyes === "Gray");
let fourthStage = usersEyes.filter((eyes) => eyes === "Blue");
let stages = [];
stages.push(firstStage, secondStage, thirdStage, fourthStage);

stages.map((stage) =>
  graphicEl.appendChild(graphicCreator(stage, stage.length))
);

graphicDiv.append(titleGraphic, graphicEl);
bars.append(nameBar, filterBarName, surnameBar, filterBarSurname);
bodyEl.append(bars, usersContainer, graphicDiv);
