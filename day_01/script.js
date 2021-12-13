const fs = require("fs");
const depths = fs.readFileSync("input.txt").toString().split("\n");

//part 1

let count = 1;

for (let i = 1; i < depths.length; i++) {
  let increased = depths[i] > depths[i - 1];
  if (increased) {
    count++;
  }
}
console.log(count);
