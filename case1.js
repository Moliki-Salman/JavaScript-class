var x, y, z;

var verify = function () {
  x = parseInt(document.getElementById("firstNum").value);
  y = parseInt(document.getElementById("secNum").value);
  z = parseInt(document.getElementById("thirdNum").value);
  var res = document.getElementById("result");

  if (x == y || x == z || y == z) {
    console.log("Invalid");
  } else {
    if (x > y && x > z) {
      res.innerHTML = x;
    }

    if (y > x && y > z) {
      res.innerHTML = y;
    }
    if (z > y && z > x) {
      res.innerHTML = z;
    }
  }
};

// x = parseInt(prompt("Enter first number", " "));
// y = parseInt(prompt(("Enter second number", " "));
// z = parseInt(prompt(("Enter third numbr", " "));
