
let k = 0;
// while (k < 5) {
// k++; /// 1 to 5
// 	console.log('k: ' + k);
// 	k++; /// 1 to 4
// }

//  0 до 10

let sum = 0;
let p = 0
while (p <= 10) {
	sum += p;
	p++
}
console.log(sum);


p = 0
let out = document.querySelector('.out');
let outStr = '';
let flag = 3;

while (p < 4) {
	let p1 = 0
	console.log('p = ', p);
	console.log('flag = ', flag);
	while (p1 <= 4) {
		if (p1 < flag) {
			outStr += '0';
		} else {
			outStr += '*';
		}
		p1++;
		console.log('p1 lov = ', p1);
		console.log('flag lovw = ', flag);
	}
	flag--;
	outStr += '<br>'
	p++;
}

out.innerHTML = outStr;