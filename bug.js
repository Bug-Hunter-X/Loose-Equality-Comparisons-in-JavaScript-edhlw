function foo(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

console.log(foo(NaN, NaN)); // false
console.log(foo(0, -0)); // true
console.log(foo(null, null)); // true
console.log(foo(undefined, undefined)); // true