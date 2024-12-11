function foo(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

console.log(foo(NaN, NaN)); // false
console.log(foo(0, -0)); // false
console.log(foo(null, null)); // true
console.log(foo(undefined, undefined)); // true

//Improved handling of NaN
function fooNaN(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  } else {
    return a === b;
  }
}
console.log(fooNaN(NaN, NaN)); // true