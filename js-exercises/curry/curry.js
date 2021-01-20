function curry(inFunction) {
  return function curried(...args) {
    if (args.length >= inFunction.length) {
      return inFunction.apply(this, args);
    }

    return function (...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}

module.exports.curry = curry;
// export { curry };
