const { log } = require("console");

const arr = [1, 2, 3];

function ADD(arr) {
  const sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(ADD(arr));
