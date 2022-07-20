// polyfill for call
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this} It's not callable`);
  }

  context.fn = this;
  context.fn(...args);
};
