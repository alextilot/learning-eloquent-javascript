//3.1 Minimum
// Write a function min that takes two arguments and returns their minimum.
function min(a, b) {
  if (a < b) return a;
  return b;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//3.2 Recursion
//Zero is even.
//One is odd.
//For any other number N, its evenness is the same as N - 2.

function isEven(n) {
  if (n == 0) return true;
  if (n == 1) return false;
  if (n < 0) return isEven(-n);
  return isEven(n - 2);
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//3.3 Bean counting
function countChar(string, val) {
  let count = 0;
  for (const char of string) {
    if (char === val) count++;
  }
  return count;
}
function countBs(string) {
  return countChar(string, 'B');
}
console.log(countBs('BBC'));
// → 2
console.log(countChar('kakkerlak', 'k'));
// → 4
