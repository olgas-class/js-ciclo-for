// 1 - scrivere nella console tutti i numeri  da 0 a 100 specificando se è pari o dispari
// 2 - scrivere tutti i numeri nella pagina
// 3 - coloriamo diversamente pari e dispari

const row = document.querySelector(".row");

for (let i = 0; i <= 100; i++) {
  // Se numero è pari, memorizzo pari
  // Altrimenti memorizzo dispari
  let pariDispari = "";
  if (i % 2 === 0) {
    pariDispari = "pari";
  } else {
    pariDispari = "dispari";
  }

  // Scrivo output
  // Create element mode
  // const cell = document.createElement("div");
  // cell.classList.add("cell");
  // cell.classList.add(pariDispari);
  // cell.innerHTML = i;
  // row.append(cell);

  // Inner html mode
  const cell = `<div class="cell ${pariDispari}">${i}</div>`;
  row.innerHTML += cell;
}

console.log("FINE");
