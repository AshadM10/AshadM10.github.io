$(document) .ready(function() {

console.log("Hello");
//alert("Your computer has a virus"); This is a comment! the computer will not run it
console.log(1+1);

var name = "Ashad";
console.log(name);

var lucky = 7;
console.log("Seven times three is...");
console.log(lucky * 3);


if (1 + 1 === 2) {
	console.log("Maths works");
}

if (1 + 2 === 1000) {
	console.log("Oh dear");
}

var name = "Ashad";

if (name === "Naeem") {
	console.log("Your name is Naeem");
} else {
	console.log("Nope, your not Naeem");
}

for (var i = 0; i < 5; i++) {
	console.log(i);

}

});

function checkPassword() {
var enteredText = $("#password").val();

if (enteredText === "yellow") {
	$(document.body).append("That was the password!");
 } else {
  $(document.body).append("That was not the password :(");
 }

}