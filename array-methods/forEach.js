// in-built forEach
const array = ["a", "b", "c"];
array.forEach((element) => console.log(element));

// polyfill of forEach
Array.prototype.myForEach = function (callback) {
  const array = this;

  if (!Array.isArray(array)) {
    throw new Error("myForEach is not a function");
  }

  if (typeof callback !== "function") {
    throw new Error(`${callback} is not a function`);
  }

  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
};
array.myForEach((element) => console.log(element));
