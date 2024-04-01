// Alteram: pop, push, shift, unshift, reverse, sort, splice

// Criam Novo: map, filter, reduce

class Lesson {
  largeArray = [];

  constructor() {
    for (let i = 0; i < 10e5; i++) {
      this.largeArray[i] = Math.round(Math.random() * 100);
    }
  }

  test(f) {
    console.time("time");
    f([...this.largeArray], 42);
    console.timeEnd("time");
  }

  console({ id, value, testFn }) {
    console.group(id);
    console.log(value);
    testFn && this.test(testFn);
    console.groupEnd(id);
  }

  numbers = [1, 4, 5, 3, 42, 6, 8, 9, 3, 3, 4];
}

const lesson = new Lesson();

//! REMOVE_1 -------------------------------------

const numbers_1 = [...lesson.numbers];

function remove_1(values, x) {
  const index = values.indexOf(x);
  values.splice(index, 1);
}

remove_1(numbers_1, 42);

// lesson.console({ id: "remove_1", value: numbers_1, testFn: remove_1 });

//! REMOVE_2 -------------------------------------

const numbers_2 = [...lesson.numbers];

function remove_2(values, x) {
  if (values.includes(x)) {
    values.splice(values.indexOf(x), 1);
  }
}

remove_2(numbers_2, 42);

// lesson.console({ id: "remove_2", value: numbers_2, testFn: remove_2 });

//! REMOVE_3 -------------------------------------

const numbers_3 = [...lesson.numbers];

function remove_3(values, x) {
  const position = values.indexOf(x);
  if (position !== -1) {
    values.splice(position, 1);
  }
}

remove_3(numbers_3, 42);

// lesson.console({ id: "remove_3", value: numbers_3, testFn: remove_3 });

//! REMOVE_4 -------------------------------------

const numbers_4 = [...lesson.numbers];

function remove_4(values, x) {
  while (values.includes(x)) {
    values.splice(values.indexOf(x), 1);
  }
}
remove_4(numbers_4, 42);

// lesson.console({ id: "remove_4", value: numbers_4, testFn: remove_4 });

//! REMOVE_5 -------------------------------------

const numbers_5 = [...lesson.numbers, 42];

function remove_5(values, x) {
  let i = 0;

  while (i < values.length) {
    if (values[i] === 42) {
      values.splice(i, 1);
    } else {
      i++;
    }
  }
}

remove_5(numbers_5, 42);

// lesson.console({ id: "remove_5", value: numbers_5, testFn: remove_5 });

//! REMOVE_6 -------------------------------------

const numbers_6 = [...lesson.numbers];

function remove_6(values, x) {
  let i = 0;
  const filteredNumbers = [];

  for (const y of values) {
    if (y !== x) {
      filteredNumbers.push(values[i]);
    }
    i++;
  }

  values.length = 0;
  values.push(...filteredNumbers);
}

remove_6(numbers_6, 42);

// lesson.console({ id: "remove_6", value: numbers_6, testFn: remove_6 });

//! REMOVE_7 -------------------------------------

const numbers_7 = [...lesson.numbers];

function remove_7(values, y) {
  const filteredNumbers = values.filter((x) => x !== y);

  values.length = 0;
  values.push(...filteredNumbers);
}

remove_7(numbers_7, 42);

// lesson.console({ id: "remove_7", value: numbers_7, testFn: remove_7 });

// ! Returning New Array

const numbers_new_array = [...lesson.numbers];

function remove_numbers_new(values, x) {
  return values.filter((item) => item !== x);
}

const resultArray = remove_numbers_new(numbers_new_array, 42);

// lesson.console({
//   id: "new_array",
//   value: resultArray,
//   testFn: remove_numbers_new,
// });

// const array = [1, 2, 3, 4, 5];

// const result = array.reduce((acc, current, index, arr) => {
//   acc += current;

//   return acc;
// }, 0);

// console.log(result);

// const array2 = [1, 2, 3, 4];

// const result2 = array2.reduce((acc, current) => {
//   if (current !== 2) {
//     acc.push(current);
//   }

//   return acc;
// }, []);

// console.log(result2);

const array3 = [
  { name: "bruno", estado: "pe" },
  { name: "matheus", estado: "sp" },
  { name: "allan", estado: "sp" },
  { name: "mario", estado: "rj" },
];

// {
//   sp: [{name: 'mathes', estado: 'sp'}, rj: [{name: 'mario', estado: 'rj'}]]
// }

const result3 = array3.reduce((acc, current) => {
  if (!acc[current.estado]) {
    acc[current.estado] = [];
  }

  acc[current.estado].push(current);

  return acc;
}, {});

console.log(result3);
