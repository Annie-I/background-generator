var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log("answer:", _.without(array, 3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random1 = document.getElementById("random1");
var random2 = document.getElementById("random2");

//Test that variables are set correctly
	// console.log(css);
	// console.log(color1);
	// console.log(color2);
	// console.log(body);
	// console.log(random1);
	// console.log(random2);

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// add random colors to both buttons