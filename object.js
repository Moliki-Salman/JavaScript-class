
let arr = [9, 6, 4, 5, 3, 2];
console.log(arr);

//object
let person = {
  firstname: "Dami",
  lastname: "Moli",
  age: 24,
  "date of birth": "2022/02/16",
};
console.log(person.firstname, person.lastname, person["date of birth"]);

//note when you passin a parameter inside a function, like x here, so to call the function documents.getElementById("frr"), i must add in a parameterof the function when its been called.
let documents = {
  getElementById: (x) => console.log("sample object function"),
};
documents.getElementById("frr");

//HOW TO CREATE AN OBJECT,FIRST METHOD
let car = {
  colour: ["red", "yellow", "green"],
  speed: (distance, time) => {
    return distance / time;
  },
};
let carSpeed = car.speed(100, 10); // this returns a number andwe caanot use the concat() on a number so we have to convert the number toString before we use the concat().
console.log(carSpeed.toString().concat(" ", "km/h"));
console.log(car.colour[2]);

//here we made the distance and time an object, so you have to use the {this}constructor.
//NOTE this as a constructor will not work with arrow function.
let carInstance = {
  distance: 100,
  time: 10,
  speed: function () {
    return this.distance / this.time;
  },
};
console.log(carInstance.speed());

let carSpeed3 = carInstance.speed(); // this returns a number andwe caanot use the concat() on a number so we have to convert the number toString before we use the concat().
console.log(carSpeed3.toString().concat(" ", "km/h"));

//HOW TO CREATE AN OBJECT,SECOND METHOD
// this creates the object using the object class
let car2 = new Object();
car2.doors = 4;
car.colour = "blue";

//create new object out of the former object created
let car3 = Object.create(car);
car3.doors = 7;
car3.colour = "pink";

//Arrays of Objects
let carprototype = {
carModel:null,
carColor:null,
carYear: null,
carMake: null,
}

let carlist =[]

displayList = () => {
console.log(carlist)
}
//addding more array object into an array using html
carlist.push({carModel:"Camry", carMake:"Toyota"})
carlist.push({ carModel: "Camry", carMake: "Toyota" });

displayList()
