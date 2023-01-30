import { qS, cE, qSA, GET, serieSecGen } from "./utils.js";

const form = qS("#form");
const movieName = qS("#searchMovie");
const movie = cE("div");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  movie.innerHTML = "";
  GET("movie", "popular").then((data) => {
    data.results.map((item) => {
      if (
        movieName.value.toLowerCase() === item.title.toLowerCase() ||
        movieName.value.toUpperCase() === item.title.toUpperCase()
      ) {
        const imgEl = cE("img");
        const titleEl = cE("h2");
        movie.className = "movie-div";

        imgEl.src = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
        titleEl.textContent = item.title;

        movie.append(imgEl, titleEl);
        document.body.appendChild(movie);
      }
    });
  });
});
