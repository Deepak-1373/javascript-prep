Promise.myAll = function (promiseArray) {
  return new Promise((resolve, reject) => {
    const result = [];
    let resolvedPromiseCount = 0;

    for (let i = 0; i < promiseArray.length; i++) {
      if (promiseArray[i]?.then) {
        promiseArray[i]
          .then((data) => {
            result[i] = data;
            resolvedPromiseCount++;

            if (resolvedPromiseCount === promiseArray.length) {
              resolve(result);
            }
          })
          .catch((error) => reject(error));
      } else {
        result[i] = promiseArray[i];
        resolvedPromiseCount++;

        if (resolvedPromiseCount === promiseArray.length) {
          resolve(result);
        }
      }
    }
  });
};

const p1 = Promise.resolve(3);
const p2 = Promise.reject("Unknown");
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.myAll([p1, p2, p3]).then((values) => console.log(values));
