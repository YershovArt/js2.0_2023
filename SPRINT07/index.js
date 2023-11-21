let out = document.querySelector('.out');
let f1 = document.querySelector('.f-1');

function one() {
	console.log('work');
}

one();

f1.onclick = one


function two () {
	console.log('work 222222');
	return 54;
}

two();

console.log(1+ two());

let a = 8;
let b = 9;
let c 
function multiply() {
	return a*b;
}

multiply();

let c1 = multiply();
let c2 = 10*  multiply();

console.log(c1, c2);

function multiply2(x, y) {
	return x*y;
}

console.log(multiply2(3,100));