// const user = {
//   id: 0,
//   name: "Misha",
// };

// // Object.create

// const user3 = Object.create(null); // {}

// const user2 = {
//   hasOwnProperty: () => console.log("a"),
//   name: "bruno",
//   age: 35,
// };

// if (user.hasOwnProperty("id")) {
//   console.log(`'id' key exists`);
// }

// Object.prototype.hasOwnProperty.call(user, "id");

// if (Object.hasOwn(user, "id")) {
//   console.log(`'id' key exists`);
// }

// // tambem considera se foi herdado
// if ("id" in user) {
//   console.log(`'id' key exists`);
// }

// class Person {
//   id = 0;
// }

// class User extends Person {
//   constructor() {
//     super();
//   }
// }

// const users = [
//   { id: 1, name: "Sergey" },
//   { id: 15, name: "Misha" },
//   { id: 42, name: "Tanya" },
//   { id: 45, name: "Tanya2" },
//   { id: 43, name: "Tanya4" },
// ];

// let result = "";

// for (let user of users) {
//   result += `${user.name} is #${user.id}\n`;
// }

// const result = users.map((item, index, array) => {
//   console.log(item, index, array);

//   return `${item.name} is #${item.id}\n`;
// });
//   .join("");

// console.log(result.join(""));

// console.log(`
// Sergey is #1
// Misha is #15
// Tanya is #42
// `);

// Shallow Copy
// function copy1(obj) {
//   return { ...obj };
// }

// function copy2(obj) {
//   return structuredClone(obj);
// }

// function copy3(obj) {
//   return JSON.parse(JSON.stringify(obj));
// }

// function copyBoth(first, second) {
//   return { ...first, ...second };
// }

// function copy(obj) {
//   const clone = {};

//   for (let key in obj) {
//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       clone[key] = copy(obj[key]);
//     } else {
//       clone[key] = obj[key];
//     }
//   }

//   return clone;
// }

const object3 = [
  { name: "bruno", cidade: "recife" },
  { name: "matheus", cidade: "saopaulo" },
];
