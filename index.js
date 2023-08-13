import prompt from "prompt-sync";
import { add, sub, getRandom1, getRandom2 } from "./tp/tp1.js";
const obj = {
  property1: value1, // property name may be an identifier
  2: value2, // or a number
  "property n": value3, // or a string
};


//
//l'appel de fonction getRandom. Math.floor donne les nombres entiers
let r = Math.floor(getRandom1());
console.log("Aleatoire : ", r);
//demande de tapper le premier nombre
let nombre1 = prompt()("taper le premier: ");
//demande de tapper le second nombre
let nombre2 = prompt()("taper le second: ");
//l'appel de fonction add
let somme = add(nombre1, nombre2);
//l'appel de fonction add
let difference = sub(nombre1, nombre2);

//imprimer les resultats dans le terminal
console.log("la somme : ", somme);
console.log("la differance: ", difference);
// ajouter une logique qui demande de tapper le min et le max.
// ensuite supprimer les // des lignes 23 et 24
//demande de tapper le premier nombre
let tempMin = prompt()("taper le premier: ");
//demande de tapper le second nombre
let tempMax = prompt()("taper le second: ");
 let r2 = Math.floor(getRandom2(tempMin, tempMax));
console.log("Aleatoire : ", r2);
