// in-built reduce method
const array = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);

// polyfill for reduce
Array.prototype.myReduce = function (reducerCallback, initialValue) {
  const array = this; // array onto which myReduce is called

  if (!Array.isArray(array)) {
    throw new Error("myReduce is not a function");
  }

  if (typeof reducerCallback !== "function") {
    throw new Error(`${reducerCallback} is not a function`);
  }

  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    if (accumulator === undefined) {
      accumulator = array[i];
    } else {
      accumulator = reducerCallback(accumulator, array[i], i, array);
    }
  }

  return accumulator;
};

console.log(
  array.myReduce((accumulator, currentValue) => accumulator * currentValue, 1)
);
