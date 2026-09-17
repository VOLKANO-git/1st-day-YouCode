// Ask the user for a temperature in Celsius
let celsius = parseFloat(prompt("Enter the temperature in Celsius:"));

let state;

if (isNaN(celsius)) {
  state = "Invalid input. Please enter a valid number.";
} else if (celsius < 0) {
  state = "Solid";
} else if (celsius < 100) {
  state = "Liquid";
} else {
  state = "Gas";
}

console.log(`At ${celsius}°C, water is in a ${state} state.`);
alert(`At ${celsius}°C, water is in a ${state} state.`);