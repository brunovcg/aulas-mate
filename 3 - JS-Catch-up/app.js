// ! Number
Math.ceil(5.5);
Math.floor(5.5);
Math.round(5.4); // round .5?
(5.35).toFixed(1);
// Infinity
// NaN

// ! String
const myName = "bruno";
myName.charAt(1);
myName[1];
myName.includes("b");
myName.toLowerCase();
myName.toUpperCase();

// ! Array
const array = [1, 2, 2, 4];
// array.pop();
// array.push(5);
// array.shift();
// array.unshift(0);
// array.includes(5)
// array.indexOf(4); // se não encontra volta -1
// array.lastIndexOf(4);

// ! Conditional Operators
// const condition = 3;

// if (condition === 1) {
//   console.log("if");
// } else if (condition === 2) {
//   console.log("else if 1");
// } else if (condition === 3) {
//   console.log("else if 2");
// } else {
//   console.log("else");
// }

const variavel = true ? "1" : "2";

const variavel2 = "1" || "2";

// const variavel3 = "1" ?? "2";  Nullish operator verifica null & undefined. Node 16+

// console.log(variavel2);

// ! Function

// ? Regular Function
function funcao1(a, b) {
  return a + b;
}

// ? Anonymous Function
const funcao2 = function (a, b) {
  return a + b;
};

// ? Arrow Function
const funcaoArrow1 = (a, b) => {
  return a + b;
};

const funcaoArrow2 = (a, b) => a + b;

// ! Loops

let a = 1;

function x() {
  // codigo
  for (let i = 0; i < 5; i++) {
    a++;
  }

  // codigo
}

console.log(a);
//  Break X Continue
//  Infinite loop

let index = 0;

while (true) {
  console.log("x");
  index++;
  if (index === 5) {
    break;
  }
}
