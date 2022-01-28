function factorial(n) {
  let myFact = 1;
  while (n)
    myFact *= n--
  return myFact
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(3))
console.log(factorial(5))
