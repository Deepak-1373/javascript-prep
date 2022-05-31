const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo")
);
const promise3 = Promise.resolve("Known");

// inbuilt
Promise.allSettled([promise1, promise2, promise3]).then((data) => {
  console.log(data);
});

// polyfill
Promise.myAllSettled = function (promiseArray) {
  return new Promise((resolve, reject) => {
    let result = [];
    promiseArray.forEach((eachPromise) => {
      eachPromise
        .then((data) => {
          result.push({ status: "fulfilled", value: data });
          if (result.length === promiseArray.length) {
            resolve(result);
          }
        })
        .catch((error) => {
          result.push({ status: "rejected", value: error });
          if (result.length === promiseArray.length) {
            resolve(result);
          }
        })
        .finally(() => {
          if (output.length === promiseArray.length) {
            resolve(result);
          }
        });
    });
  });
};

Promise.myAllSettled([promise1, promise2, promise3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
