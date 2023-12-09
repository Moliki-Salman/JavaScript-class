/*
alert
document.write()
document.getElementById():This is used to represent an element that has been given an id in an html doc, so that javascript can control all that is inside the <div id="contentArea">
document.getElementsByClassName() same explanation for this.
var cArea = document.getElementById(): we also assign the entire document.getElementById() to a variable
var cArea = document.getElementById("contentArea"); By assigningdocument.getElementById("contentArea") to a variable makedocument.getElementById("contentArea") a object (javascript object;
  cArea.innerHTML = '<h1>Direct injection of html</h1>'; the ".innerHTML" added tocArea is a property of the object cArea. NOTE When ever you see dot something like rhe  "cArea.innerHTML", the dot here is indicating that it an object with a property. in this case the cArea is the object while the .innerHTML is the property.
  also note that the "innerHTML" is a built in property of javaScript.


var text = 'let\'s play'; "\" is an example of an escape sequence,when \ is put inbetween a string, it will ignore the quotation mark;
prompt is used to accept content from user:
typeof: is used tospecify theparticular type of a variable;
parseInt converts a string to a number;
example :
var age = prompt("Enter age", "")
var tAge = parseInt(age)
// console.log(age)
console.log(tAge + 4);
NOTE:prompt and parseInt are default function in Javascript.
Example 2:
var pinRequest = parseInt(prompt("Enter a pin", " "))
console.log(pinRequest)

logical {and or not - && || !}
relational operators {> < == != >= <= }
arithmetic - {+ -* /};

there are attribute called eventhandlers: they are used to execute a code afterward to; evenhandlers work with functions
Event handlers can be used to handle and verify user input, user actions, and browser actions: Things that should be done every time a page loads. Things that should be done when the page is closed. Action that should be performed when a user clicks a button.;

document.write: it creates an instance of the page
.innerHTML: loads the result on the page
event is an object that has its own functions and proeprties; event.


while loop is used when you do not know the number of times;
for loop is used when we know the number of times;

document.createElement("div");the createElement() method is used to create an html element  directly from javascript;
container.appendChild(blackbox): the .appendchild() method is used to push the blackbox element inside the container element which is an OBJECT ;
NOTE:when you see a dot something like the dot createElement() with a bracket()  mkaes it a method that may likely have a parameter like this document.createElement("div");
NOTE: When you see a dot somthing that is attached to another variable , it means that the dot something is a property to the object.

NOTE NOTE NOTE:
var blackbox = document.createElement("div");this sentence means that you created an object by assigning to it a fuction(),
which means that blackbox becomes an OBJECT the moment we assigned  to it a fuction as its value. So whatever is inside the function() that has been assigned to an object will become
the propertiesof the object like this blackbox.style.height = "100px"; meaning that .style is a property to blackbox;
var blackbox = document.createElement("div");
  blackbox.style.height = "100px";
NOTE NOTE ended here

*/
function addAndPopNames(namesArray, newNames) {
  // Add new names to the array
  namesArray.push(...newNames);

  // Pop names from the array in order
  while (namesArray.length > 0) {
    const poppedName = namesArray.shift();
    console.log(`Popped: ${poppedName}`);
  }
}
const namesArray = [];
const newNames = ["Alice", "Bob", "Charlie", "David"];

addAndPopNames(namesArray, newNames);
