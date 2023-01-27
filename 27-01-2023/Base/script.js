import { qS, cE, qSA, GET, serieSecGen, modalGen } from "./utils.js";
const popSec = qS(".popular");
const topRatedSec = qS(".top-rated");
const lateSec = qS(".latest");
const modalEl = qS(".modal");
const overlayEl = qS(".overlay");

Promise.all([
  GET("tv", "popular"),
  GET("tv", "top_rated"),
  GET("tv", "airing_today"),
])
  .then((data) => {
    data[0].results.map((item) => popSec.appendChild(serieSecGen(item)));
    data[1].results.map((item) => topRatedSec.appendChild(serieSecGen(item)));
    data[2].results.map((item) => lateSec.appendChild(serieSecGen(item)));
  })
  .then(() => {
    const series = qSA(".serie");

    series.forEach((serie) =>
      serie.addEventListener("click", () =>
        GET("tv", serie.id).then((selectedSerie) => {
          modalEl.appendChild(modalGen(selectedSerie));
          modalEl.style.display = "flex";
          console.log(selectedSerie);
        })
      )
    );
  });

overlayEl.addEventListener("click", () => {
  const modalOverEl = qS(".serie-modal");

  modalEl.style.display = "none";
  modalOverEl.remove();
});
