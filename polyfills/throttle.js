function throttle(func, limit) {
  let flag = true;
  return function () {
    if (flag) {
      flag = false;
      func.apply(this, argument);
      setTimeout(() => (flag = true), limit);
    }
  };
}
