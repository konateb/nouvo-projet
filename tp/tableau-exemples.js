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

fruits.forEach(function (item, index, array) {
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

