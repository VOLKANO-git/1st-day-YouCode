const prompt = require('prompt-sync')();
let c = Number(prompt('enter temperature en celsius'));
if (celsius<0){

state = "solid";
}else if(celsius<100){
state = "liquid";
}else {
state = "gas"}
console.log(`At ${celsius}°C, water is in a ${state} state.`);
alert(`At ${celsius}°C, water is in a ${state} state.`);