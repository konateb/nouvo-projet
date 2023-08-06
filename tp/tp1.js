import axios from "axios";

const add = (n1, n2) => {
  return parseInt(n1) + parseInt(n2);
};
const sub = (n1, n2) => {
  return parseInt(n1) - parseInt(n2);
};
const mult = (n1, n2) => {
  return "metter les instruction pour faire multiplication" + parse;
};
//genereate nombre alleatotoire entre 1 et 100
const getRandom1 = () => {
  return Math.random() * 100 + 1;
};
const getRandom2 = (min, max) => {
  return Math.random() * (max - min) + min;
};

// Dans le fichier tp1.js  concevoir une fonction de conversion de Fahrenheit en Celsius
//voir le modele fournit dans le groupe du cours.
// Tester la dans index.js

export { getRandom1, getRandom2, add, sub, mult };
