// Sum Mixed Array

function sumMix(x){
let numberConvert = x.map(i => parseInt(i))
return numberConvert.reduce((a,b) => (a+b))
  
}