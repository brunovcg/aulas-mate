class Lesson {
  largeArray = [];

  constructor() {
    for (let i = 0; i < 10e6; i++) {
      this.largeArray[i] = Math.round(Math.random() * 100);
    }
  }

  testPerformance(f, ...args) {
    console.time("time");
    console.group(f.name);
    console.log(f(this.largeArray, ...args));
    console.groupEnd(f.name);
    console.timeEnd("time");
  }
}

const lesson = new Lesson();

// console.log([].__proto__);

// ! Filter
const array_1 = [1, 2, 3, 4, 5, 6];

function filterCallback(item, index, array) {
  return item % 2 === 0;
}

const filterCallbackArrow = (item, index, array) => item % 2 === 0;

const result_1 = array_1.filter((item, index, array) => item % 2 === 0);

// console.log(array_1, result_1);

// ! Map vs ForEach
const array_2 = [1, 2, 3, 4, 5, 6];

function mapCallback(item, index, array) {
  return { name: item };
}

const x = [];

function forEachCallback(item, index, array) {
  if (item % 2 === 0) {
    x.push(item * 2);
  }
}

const result_2 = array_2.map(mapCallback);
const result_3 = array_2.forEach(forEachCallback);

// console.log(x);

//! Find
const array_4 = [
  { id: 1, name: "rafael" },
  { id: 2, name: "eduardo" },
  { id: 3, name: "rodrigo" },
  { id: 4, name: "bruno" },
];

const result_4 = array_4.find((item) => item.id === 1);

// console.log(result_4);

// ! FindIndex
const array_5 = [
  { id: 1, name: "rafael" },
  { id: 2, name: "eduardo" },
  { id: 3, name: "rodrigo" },
  { id: 4, name: "bruno" },
];

const result_5 = array_4.findIndex((item) => item.id === 1);
// console.log(result_5);

// ! Sort e toSorted

const array_6 = [6, 5, 4, 3, 2, 1];

const newSorted = array_6.toSorted();

const array_7 = [
  { id: 1, name: "rafael" },
  { id: 5, name: "eduardo" },
  { id: 3, name: "rodrigo" },
  { id: 4, name: "bruno" },
];

array_7.sort((a, b) => b.name.localeCompare(a.name));

// console.log(array_7);

// Reverse e toReversed

// ! Slice vs Splice vs toSpliced

const array_9 = [1, 2, 3, 4, 5];

const sliced = array_9.slice(0, 3);

// console.log(array_9, sliced);

// const spliced = array_9.splice(0, 3, 9, 8);

// console.log(array_9, spliced);

const toSpliced = array_9.toSpliced(0, 3, 9);

// console.log(array_9, toSpliced);

// ! Some vs every

const array_10 = [1, 2, 3, 4, 5];

const someFn = array_10.some((item) => item % 2 === 0);

// console.log(someFn);

const everyFn = array_10.every((item) => item % 2 === 0);

const filterFn = array_10.filter((item) => item % 2 === 0);

// !  With

const array_11 = [1, 2, 3, 4, 5];

const withFn = array_11.with(0, 9);

// console.log(array_11, withFn);

// ! FILTER MAP

const array_12 = [1, 2, 3, 4, 5];

const filterCB = (item) => item > 10 && item < 50;
const mapCB = (item) => ({
  id: item * 2,
});

function filter_map_original(array) {
  return array.filter(filterCB).map(mapCB);
}

function filter_map_reduced(array, filterFn, mapFn) {
  return array.reduce((accumator, current) => {
    if (filterFn(current)) {
      accumator.push(mapFn(current));
    }

    return accumator;
  }, []);
}

// lesson.testPerformance(filter_map_original, filterCB, mapCB);

// lesson.testPerformance(filter_map_reduced, filterCB, mapCB);

function x1() {}
// function () {}

const x2 = () => {
  return true;
};

const x3 = () => true;

const xReturnObj = () => ({ x: 1, y: 2 });
const xReturnObj2 = () => {
  return { x: 1, y: 2 };
};

const xReturnArray = () => [1, 2, 3, 4, 5];

const array_15 = [1, 2, 3, 4, 5];

array_15.map((item) => item * 2);
