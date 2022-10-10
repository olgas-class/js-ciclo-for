// Sommare tutti i numeri da 1 a 50
// 1 +2 +3 ...
// Somma è ...
let somma = 0;

// 1 -> somma + 1 = 1
// 2 -> somma + 2 = 1 + 2 = 3
// 3 -> somma + 3
// ...
// 50 -> somma + 50

for(let i = 1; i <= 5; i++) {
    somma += i;
}
// Fuori perché voglio solo il risultato finale -> una sola volta
console.log("Somma totale è", somma);
