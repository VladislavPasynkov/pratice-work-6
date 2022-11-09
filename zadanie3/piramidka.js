let a = 0;
let n = 0;
let m = 6;
let count = "";
let array = "";
while (a < m) {
  count = "";
  array = "";
  for (n = 0; n < m - a; ++n) count += " ";
  for (n = 0; n < 2 * a + 1; ++n) array += "*";
  console.log(count + array); 
}