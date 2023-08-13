import { readFileSync, writeFileSync } from "node:fs";
import prompt from "prompt-sync";
// Lire le fichier database.json
let data = readFileSync("database.json");
//Deserialiser l'data
const objetData = JSON.parse(data);

//afficher les donnees au terminal
console.log(
  "Voici les donnees avant modifications",
  JSON.stringify(objetData, null, 4)
);

//extraire les donnees ( tableau users) dans l'objet
const users = objetData.users;
// demander de taper l'email de l'utilisateur
// dont on souhaite modifier les donnees
let email = prompt()("taper l'email: ");
//demande de tapper le nouveau prenom
let nouvoPrenom = prompt()("taper le nouveau prenom: ");

// trouver l'utilisateur a modifier
const userOld = users.find((user) => user.email === email);
//trouver l'index de l'utilisateur
const index = users.findIndex((user) => user.email === email);
console.log("index", index);

// users.push({
//   nom: userOld.nom,
//   prenom: "Toto",
//   email: userOld.email,
// });
//modifier les donnees a l'index
users[index] = {
  nom: userOld.nom,
  prenom: nouvoPrenom,
  email: userOld.email,
};

// Serialiser l'objetData apres modification
let jsonData = JSON.stringify(objetData);

//Sauver les donnees modifiées
writeFileSync("database.json", jsonData, "utf-8", (err) => {
  if (err) throw err;
  console.log("database modifié");
});

//lire les donnees apres modification
data = readFileSync("database.json");
//Serialiser les donnees
jsonData = JSON.parse(data);

//afficher les donnees au terminal
console.log("voici data apres modification", JSON.stringify(jsonData, null, 4));
