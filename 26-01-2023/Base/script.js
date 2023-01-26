// Sulla base della lezione di oggi, creare un intervallo temporale che simuli un conto alla rovescia, che dopo n secondi:

// mostra il timer in schermo, come visto a lezione;
// che allo scadere del timer la pagina deve cambiare colore e il timer stesso deve scomparire;
// la presenza di un pulsante STOP interrompe il flusso temporale, tramite il relativo clearInterval.

const countText = document.createElement("h1");
const stopBtn = document.createElement("button");
const img = document.createElement("img");
img.src =
  "https://media0.giphy.com/media/oe33xf3B50fsc/giphy.gif?cid=790b76119484fedd3ba6088c0bc2fcbd7ffd748636a60d86&rid=giphy.gif&ct=g";

img.classList = "img-none";
stopBtn.textContent = "STOP";

let timer = 10;

const intervalId = setInterval(() => {
  document.body.append(countText, stopBtn);
  if (timer === 0) {
    document.body.style.backgroundColor = "white";
    countText.remove();
    stopBtn.remove();

    img.classList = "img-set";
  } else {
    timer--;
    countText.textContent = timer;
  }
}, 1000);

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  const loadTimer = document.createElement("button");
  loadTimer.className = "load-btn";
  loadTimer.textContent = "RIPRENDI";
  loadTimer.addEventListener("click", () => {
    setInterval(() => {
      if (timer === 0) {
        document.body.style.backgroundColor = "white";
        countText.remove();
        stopBtn.remove();
        img.classList = "img-set";
      } else {
        timer--;
        countText.textContent = timer;
      }
    }, 1000);
    loadTimer.remove();
  });
  stopBtn.remove();
  document.body.appendChild(loadTimer);
});

document.body.appendChild(img);
