// Simple Calculator
function calculator(a,b,sign){
if (sign === "+") {
  return a+b
} else if (sign === "-") {
  return a-b
} else if (sign === "*") {
  return a*b
} else if (sign === "/") {
  return a/b
} else {
  return "unknown value"
}

}