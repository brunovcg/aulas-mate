// JS - Basic Refresh

// const object = {
//   a: 1,
//   b: 5,
//   c: 6,
// };

// const entries = Object.entries(object);

// for (let [key, value] of entries) {
//   object[key] = value * 2;
// }

// const response = [
//   { name: "bruno", cidade: "recife" },
//   { name: "matheus", cidade: "saoPaulo" },
// ];
// let div = document.getElementById("id");

// for (let entry of response) {
//   let name = document.createElement("p");
//   name.innerText = `name: ${entry.name}`;

//   let cidade = document.createElement("p");

//   cidade.innerText = `cidade: ${entry.cidade}`;

//   div.appendChild(name);
//   div.appendChild(cidade);
// }

// const array = [];

// // console.log(array.__proto__);
// // console.log(Object.values(object));
// // console.log(Object.keys(object));
// // console.log(Object.entries(object));

// const pessoa = {
//   name: "nome",
//   cursos: {
//     adm: true,
//     psi: false,
//   },
// };

// const pessoa2 = { ...pessoa, cursos: { ...pessoa.cursos } };

// console.log(JSON.parse(JSON.stringify(pessoa)));

function getMin(numbers) {
  // return Math.min(...numbers);
  let final = Infinity;
  for (let num of numbers) {
    if (num < final) {
      final = num;
    }
  }
  return final;
}

// console.log(
//   getMin([10, 20, 30]) // 10
// );

// console.log(
//   getMin([-2, -2, -3, -3]) // -3
// );

function firstAlphabetLetter(word) {
  const alfabeto = "abcdefghijklmnopqrstuvwxyz";
  let finalPosition = alfabeto.indexOf(word[0]);
  let finalLetter = word[0];
  for (let letter of word) {
    if (alfabeto.indexOf(letter) < finalPosition) {
      finalPosition = alfabeto.indexOf(letter);
      finalLetter = letter;
    }
  }
  return finalLetter ?? "";
}

// console.log(
//   firstAlphabetLetter("hello") // 'e'
// );

// console.log(
//   firstAlphabetLetter("") // ''
// );

// console.log(
//   firstAlphabetLetter("Misha") // 'a'
// );

// console.log(
//   firstAlphabetLetter("Ann") // 'a'
// );

function getTheBiggestDigit(n) {}

// console.log(
//   getTheBigestDigit(0) // 0
// );

// console.log(
//   getTheBigestDigit(23412) // 4
// );

// console.log(
//   getTheBigestDigit(-123702) // 7
// );

// Calculate average value
function getAverage(numbers) {}

// console.log(
//   getAverage([10, 20, 30]) //20
// );

// console.log(
//   getAverage([-2, -2, -3, -3]) // -2.5
// );

// console.log(
//   getAverage([]) // 0
// );

function checkIfAllNumbersAreGreaterThan(numbers, value) {}

// console.log(
//   checkIfAllNumbersAreGreaterThan([3, 4, 5], 2) // true,
// );

// console.log(
//   checkIfAllNumbersAreGreaterThan([3, 4, 5], 3) // false,
// );

// console.log(
//   checkIfAllNumbersAreGreaterThan([6, 4, -3, 5], 2) // false,
// );

// console.log(
//   checkIfAllNumbersAreGreaterThan([], 100) // true,
// );

function copy(obj) {
  const clone = {};

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      clone[key] = copy(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }

  return clone;
}

const a = {
  age: 1,
  position: {
    x: 10,
    y: 20,
  },
};
const b = copy(a);
const c = copy(a);

b.position.x++;

console.log(c.position.x); // ???
