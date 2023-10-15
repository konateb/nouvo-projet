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

//tester
const resultNoOp = calcule("exponent")(20, 10);
console.log(resultNoOp);

const result = calcule("sub")(20, 10);
console.log(result);
