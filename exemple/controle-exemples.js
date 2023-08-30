// Tester des conditions
//----------------------------------------------------------------
//Intruction if

if(condition) {
    // instruction_1
    conditionSatisfaite();
    
}

// Instruction if ... else
if (condition) {
  // instruction_1
  conditionSatisfaite();
} else {
    //instruction_2
  conditionNonSatisfaite();
}

// Instruction if ... else if
if (condition_1) {
  instruction_1;
} else if (condition_2) {
  instruction_2;
} else if (condition_n) {
  instruction_n;
} else {
  dernière_instruction;
}
//L'instruction switch
// switch (expression) {
//   case label_1:
//     instructions_1
//     [break;]
//   case label_2:
//     instructions_2
//     [break;]
//   ...
//   default:
//     instructions_par_defaut
//     [break;]
// }

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / (b == 0 ? 1 : b); // Opérateur conditionnel ternaire
//(condition ? ifTrue : ifFalse) pour éviter division par 0
const calcule = (op) => {
  switch (op) {
    case "add":
      return add;
    case "sub":
      return sub;
    case "mul":
      return mul;
    case "div":
      return div;
    default:
        return (a, b) => "impossible d'effectuer cette operation";
  }
};
// Instructions d'iterations
// Boucle for
// for (expressionInitiale; condition; expressionIncrément)
for (let pas = 0; pas < 5; pas++) {
  // Ceci sera exécuté 5 fois
  // À chaque éxécution, la variable "pas" augmentera de 1
  // Lorsque'elle sera arrivée à 5, le boucle se terminera.
  console.log("Faire " + pas + " pas vers l'est");
}

let a = [1, 2, 3, 4, 5];
for (i = 0; i < a.length; i++) {
    console.log(a[i]);
}
