// console.log(1);
// console.log(2);
// console.log(3);

// Ripeti console log 10 volte e inserisci i numeri da 1 a 10;
// for (let i = 1; i < 10; i++) {
//     console.log(i);
// }

// let i = 10;
// let y = ++i;
// console.log(y);
// console.log(i);

// Countdown che parte da 10 e conta finchè è maggiore uguale di 0
// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// Stampo numeri da 1 a 10 in una lista
const userLimit = parseInt(prompt("Quanti numeri vuoi stampare?"));

const numbersList = document.getElementById("numbers-list");

for (let i = 1; i <= userLimit; i++) {
  // const item = `<li><button>numero ${i}</button></li>`;
  // numbersList.innerHTML += item;

  const item = document.createElement("button");
  item.innerHTML = `numero ${i}`;
  item.classList.add("btn");
  item.classList.add(`btn-${i}`)
  item.addEventListener("click", function() {
    alert("Ciao");
  });
  numbersList.append(item);

}