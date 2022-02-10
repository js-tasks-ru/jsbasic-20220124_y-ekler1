let arr = [5, 3, 8, 1];


function filterRange(arr, a, b) {
  return arr.filter(i => (a <= i && i <= b ))
}

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // [3,1] (совпадающие значения)
console.log( arr );