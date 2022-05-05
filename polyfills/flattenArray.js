const array = [
  [1, 2],
  [3, [4]],
  [5, 6, [7, 8]],
];

// appraoch - 1 using Array.flat(depth)
console.log(array.flat());

// approach - 2 using polyfills
function flattenArray(array, depth = 1) {
  const temp = [];
  for (const element of array) {
    if (Array.isArray(element) && depth > 0) {
      temp.push(...flattenArray(element, depth - 1));
    } else {
      temp.push(element);
    }
  }
  return temp;
}

console.log(flattenArray(array));
