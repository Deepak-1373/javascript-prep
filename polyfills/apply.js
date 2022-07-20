Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(`${this} It's not callable`);
  }

  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }
  context.fn = this;
  context.fn(...args);
};
