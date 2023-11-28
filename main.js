// var age = prompt("Enter age", "")
// var tAge = parseInt(age)
// // console.log(age)
// console.log(tAge + 4)

// var pinRequest = parseInt(prompt("Enter a pin", " "))
// console.log(pinRequest)

//simple ATM
var pin = 1234;
var outstanding = 5000;

var pinRequest = parseInt(prompt("Enter pin", ""));
console.log(pinRequest);
//decision making using if stataement
if (pinRequest == pin) {
  console.log("valid");
  var amRequest = parseFloat(prompt("Enter amount", " "));
  if (amRequest <= outstanding) {
    var balance = outstanding - amRequest;
    console.log("Releasing ....." + amRequest);
    console.log("Available Balance" + balance);
  } else {
    console.log("Amount exceeded");
  }
} else {
  console.log("Invalid");
}

// task 1
let num1;
let num2;
let num3;
if( num1 > num2 || num1 > num3)