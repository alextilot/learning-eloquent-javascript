console.log(true * "monkey");

function canYouSpotTheProblem() {
  ("use strict");
  // Old: Would create a global scoped variable (not strict).
  // for ( counter = 0; counter < 10; counter++) {
  // → ReferenceError: counter is not defined

  // Fix:
  for (let counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}

// //canYouSpotTheProblem();

// ("use strict");
// function Person(name) {
//   this.name = name;
// }
// let ferdinand = Person("Ferdinand"); // forgot news
// // → TypeError: Cannot set property 'name' of undefined

// // (VillageState, Array) → {direction: string, memory: Array}
// function goalOrientedRobot(state, memory) {
//   // ...
// }

function test(label, body) {
  if (!body()) console.log(`Failed: ${label}`);
}

test(" convert Latin text to uppercase", () => {
  return "hello".toUpperCase() == "HELLO";
});
test("convert Greek text to uppercase", () => {
  return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
});
test("don't convert case-less characters", () => {
  return "مرحبا".toUpperCase() == "مرحبا";
});

function numberToString(n, base = 10) {
  let result = "",
    sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    n /= base;
  } while (n > 0);
  return sign + result;
}
// console.log(numberToString(13, 10));

function promptNumber(question) {
  let result = Number(prompt(question));
  if (Number.isNaN(result)) return null;
  else return result;
}

console.log(promptNumber("How many trees do you see?"));
