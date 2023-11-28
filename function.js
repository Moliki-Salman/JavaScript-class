let x = 50; //global scope
let y = 3;
let ab = 0;
fun = () => {
  let z = x + y;
  return z;
};
console.log(fun());
ab = fun();
console.log(ab);

// parameterised function: allows the acceptance of value, they enable you to pass values into the function.
fn = (c, d) => {
  let z = c * 5 + 4;
  return z;
};
console.log(fn(10, 20));
