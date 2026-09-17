const prompt = require('prompt-sync')();
let nombre = Number(prompt("Entrez un nombre entier : "));
console.log(nombre);
if (nombre % 2 === 0) {
    console.log(`Le nombre ${nombre} est pair.`);
} else {
    console.log(`Le nombre ${nombre} est impair.`);
} 