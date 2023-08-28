//Opérateurs d'affectation
// =, +=, -=, *=, /=, %=, ++, --,
//
const obj = {};

obj.x = 3;
console.log(obj.x); // Affiche 3.
console.log(obj); // Affiche { x: 3 }.

const key = "y";
obj[key] = 5;
console.log(obj[key]); // Affiche 5.
console.log(obj); // Affiche { x: 3, y: 5 }.

//Opérateurs de comparaison
// ==, !=, >, <, >=, <=, ===, !==,
//=== (egalité stricte), !== (non egalité stricte),


// Opérateurs  logiques
// &&, ||, !
const a1 = true && true; // t && t renvoie true
const a2 = true && false; // t && f renvoie false
const a3 = false && true; // f && t renvoie false
const a4 = false && 3 === 4; // f && f renvoie false
const a5 = "Chat" && "Chien"; // t && t renvoie Chien
const a6 = false && "Chat"; // f && t renvoie false
const a7 = "Chat" && false; // t && f renvoie false

//////////
const o1 = true || true; // t || t renvoie true
const o2 = false || true; // f || t renvoie true
const o3 = true || false; // t || f renvoie true
const o4 = false || 3 === 4; // f || f renvoie false
const o5 = "Chat" || "Chien"; // t || t renvoie Chat
const o6 = false || "Chat"; // f || t renvoie Chat
const o7 = "Chat" || false; // t || f renvoie Chat


// Opérateur conditionnel (ternaire)
//condition ? val1 : val2;
const statut = age >= 18 ? "adulte" : "mineur";