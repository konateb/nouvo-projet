const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
let result = plants.pop();
console.log(result);
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]
