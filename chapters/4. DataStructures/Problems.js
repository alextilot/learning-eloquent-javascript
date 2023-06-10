//4.1 The sum of a range
//Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
function range(start, end, step = start < end ? 1 : -1) {
  const array = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (const val of array) {
    total += val;
  }
  return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

//4.2 Reversing an array
//For this exercise, write two functions, reverseArray and reverseArrayInPlace.
//The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
//
//The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument
//by reversing its elements. Neither may use the standard reverse method.
function reverseArray(array) {
  const inverse = [];
  for (let i = array.length - 1; i >= 0; i--) {
    inverse.push(array[i]);
  }
  return inverse;
}
//Shift route
//[1, 2, 3, 4, 5]
//[5, 1, 2, 3, 4]
//[5, 4, 1, 2, 3]
//[5, 4, 3, 1 ,2]
//[5, 4, 3, 2, 1]

//Swap route
//[1, 2, 3, 4, 5]
//[5, 2, 3, 4, 1]
//[5, 4, 3, 2, 1]
//[5, 4, 3, 2, 1]

//[1, 2, 3, 4, 5, 6]
//[6, 2, 3, 4, 5, 1]
//[6, 5, 3, 4, 2, 1]
//[6, 5, 4, 3, 2, 1]
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
}

console.log(reverseArray(['A', 'B', 'C']));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

//4.3 A list
//Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
//Also write a listToArray function that produces an array from a list. Then add a helper function prepend,
//which takes an element and a list and creates a new list that adds the element to the front of the input list,
//and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element)
//or undefined when there is no such element.

function arrayToList(array) {
  let list = {};
  for (let i = array.length; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function arrayToListRec(array) {
  return {
    value: array.shift(),
    rest: array.length == 0 ? null : arrayToList(array),
  };
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node.rest) {
    array.push(node.value);
  }
  return array;
}

function listToArrayRec(list) {
  if (list.rest == null) return [list.value];
  return [list.value, ...listToArray(list.rest)];
}

function prepend(value, list) {
  return {
    value: value,
    rest: list,
  };
}

function nth(list, n) {
  if (!list) return undefined;
  if (n == 0) return list.value;
  return nth(list.rest, n - 1);
}

//4.4 Deep Comparison
//Write a function deepEqual that takes two values and returns true
// only if they are the same value or are objects with the same
// properties, where the values of the properties are equal when
// compared with a recursive call to deepEqual
function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || typeof a != 'object' || b == null || typeof b != 'object')
    return false;

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}
