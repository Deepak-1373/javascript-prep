// in-built filter
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);
console.log(result);

// polyfill of filter
Array.prototype.myFilter = function (callback) {
  const array = this;

  // check if method called on array or not
  if (!Array.isArray(array)) {
    throw new Error("myFilter is not a function");
  }

  // check if callback provided
  if (typeof callback !== "function") {
    throw new Error(`${callback} is not a function`);
  }

  const output = [];
  for (let i = 0; i < array.length; i++) {
    let result = callback(array[i], i, array);
    if (result) {
      output.push(array[i]);
    }
  }

  return output;
};

console.log(words.filter((word) => word.length > 5));
