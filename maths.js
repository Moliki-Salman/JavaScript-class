let st = 5.2;
console.log(Math.floor(5.9));
console.log(Math.ceil(st));
console.log(Math.round(5.9));
console.log(Math.min(1, 2, 3, 4, 6, 7, 8, 9));
console.log(Math.round(Math.random() * 10));
let guessGame = (ipt) => {
  let rangen = Math.random() * 10;
  let generatedNum = Math.round(rangen);
  if (generatedNum == ipt) {
    console.log("you guessed right");
  } else {
    console.log("you guessed wrong.Try again");
  }
  console.log("Computer generated " + generatedNum);
};
guessGame(3);
