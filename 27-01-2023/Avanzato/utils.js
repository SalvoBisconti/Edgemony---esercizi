const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "ace1900d36691df66e8862da68abe605";

const cE = (element) => document.createElement(element);
const qS = (type) => document.querySelector(type);
const qSA = (type) => document.querySelectorAll(type);

const GET = async (type = "movie", resource = "550") => {
  const res = await fetch(`${BASE_URL}${type}/${resource}?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
};

const serieSecGen = (data) => {
  const cardEl = cE("div");
  const imgEl = cE("img");

  cardEl.setAttribute("id", data.id);
  cardEl.className = "serie";
  imgEl.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
  imgEl.alt = data.title;

  cardEl.append(imgEl);
  return cardEl;
};

export { cE, qS, qSA, GET, serieSecGen };
