let cafés = ["Brésilien", "Colombien", "Kona"];
console.log(cafés);
console.log(cafés[1]);
console.log(cafés[0]);
console.log(cafés[2]);
console.log(cafés[cafés.length - 1]);

let fruits = ["Apple", "Banana"];

console.log(fruits.length);
// 2

let first = fruits[0];
// Apple

let last = fruits[fruits.length - 1];
// Banana

fruits.forEach( (item, index)=> {
  console.log(item, index);
});
// Apple 0
// Banana 1

let newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]

 last = fruits.pop(); // supprime Orange (à la fin)
// ["Apple", "Banana"];

first = fruits.shift(); // supprime Apple (au début)
// ["Banana"];

newLength = fruits.unshift("Strawberry"); // ajoute au début
// ["Strawberry", "Banana"];

///////////////////////////////////////
 const array7 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array7.map((x) => x * 2);
console.log(map1);
// Expected output: Array [2, 8, 18, 32]

 
 const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true

const array6 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array6.findIndex(isLargeNumber));
// Expected output: 3



const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

 const array2 = [5, 12, 8, 130, 44];

 const isLargeNumber1 = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber1));
// Expected output: 3

const array3 = [5, 12, 8, 130, 44];

const found = array3.find((element) => element > 10);

console.log(found);
// Expected output: 12

const array4 = [5, 12, 8, 130, 44];

const found1 = array4.find((element) => element > 10);

console.log(found1);
// Expected output: 12

