function createCounter() {
  let counter = 0;
  return function count() {
    return counter++;
  };
}
let increment = createCounter();
console.log(increment());
console.log(increment());
console.log(increment());

function rateLimiter(fn, limit) {}
