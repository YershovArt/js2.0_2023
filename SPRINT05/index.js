let div = document.querySelectorAll('.dv');

function two() {
	console.log('work\t');
}

for (let i = 0; i < div.length; i++) {
	div[i].style.background = 'red';
	div[i].onclick = two
}

let div2 = document.getElementsByClassName('dv');

console.log(div2[2]);

for (let i = 0; i < div2.length; i++) {
	div2[i].style.border = '1px solid black';
	div2[i].style.borderRadius = '10px';
	div2[i].style.textAlign = 'center';
}

let button = document.querySelector('button').onclick = () => {
	let radio = document.querySelectorAll('input[type="radio"]');
	console.log(radio);
	for (let i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			console.log(radio[i].value);
		}
	}
}

let out = ' ';

for (let i = 0; i < 10; i++) {
	if (i ==6 || i == 7 ) {
		continue;
	}
	out += i + ' '
}

document.querySelector('.dv1').textContent = out;