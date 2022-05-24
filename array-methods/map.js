// in-built map
const array = ["a", "b", "c", "d"];
const result = array.map((value, i) => value + i);
console.log(result);

// polyfill of map
Array.prototype.myMap = function (callback) {
  const array = this;
  const result = [];
  if (!Array.isArray(array)) {
    throw new Error("myMap is not a function");
  }

  if (typeof callback !== "function") {
    throw new Error(`${callback} is not a function`);
  }

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }

  return result;
};

console.log(array.myMap((value, i) => value + i * 2));
