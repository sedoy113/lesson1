let num, x = 33721;
let grade, y = 3;
let z = 3*3*7*2*1
	console.log(z);
	alert(z**y);

	
//вариант лучше
var number = "33721", sum = 1;

 var split = number.split('');

console.log(split);

// Math.pow(number, 3);

for (var i = 0; i < split.length; i++) {
	split[i] = +split[i];
	
	sum = sum * split[i];
}

console.log("Число в степени 3 = " + Math.pow(sum, 3));