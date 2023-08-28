const tab = [1,2,3,4,5]
const conversionFei2Celc = (x) => {
  const x1 = parseInt(x); 
  const y =  (x1-32)/1.8
  return Math.floor(y);
};

//convert
const tab1 = tab.map(conversionFei2Celc);
// const result = conversionFei2Celc(20);
console.table(tab);
console.table(tab1);



