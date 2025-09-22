//const - making a variable that cannot  be change 

//let - making a variable that can/should be change

//var - not used anymore cause it sucks

const greetings = 'Hi my name is ...'
const myName = 'Aria'

console.log(greetings, myName);
// console.log(greetings, myName, gratings); - Error - gratings is undefined

let numTime = 0;
// const numTime = 0; - Error - const cannot change

console.log("You've talked", numTime, "Times");
numTime = 1; //repaly the value of numTime
console.log("You've talked", numTime, "Times");
numTime = numTime+1;
console.log("You've talked", numTime, "Times");
numTime++; //exact same thing as numTimes = numTime =1
console.log("You've talked", numTime, "Times");