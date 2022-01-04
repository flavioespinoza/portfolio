// array to store characters and occurrences
// [{char: a, count: 2}, {char: b, count 2}, {char: c, count: 1}]
// index = array.findIndex(item => item.count === 1)
// index === -1 return null;
// return array[index].char

function non_repeating_x(string) {
	const array = [];
	for (const char of string) {
		let i = array.findIndex(item => item.char === char);
		if (i === -1) {
			array.push({
				char,
				count: 1,
			});
		} else {
			array[i].count++;
		}
	}
	let i = array.findIndex(item => item.count === 1);
	if (i === -1) return null;
	return array[i].char;
}

function non_repeating(string) {
	const seen = new Set();
	const repeating = new Set();
	for (const char of string) {
		if (!seen.has(char)) {
			seen.add(char);
		} else {
			repeating.add(char);
		}
	}
	for (const char of string) {
		if (seen.has(char) && !repeating.has(char)) {
			return char;
		}
	}
	return null;
}


console.log(non_repeating('abcab')); // should return 'c'
console.log(non_repeating('abab')); // should return null
console.log(non_repeating('aabbbc')); // should return 'c'
console.log(non_repeating('aabbdbc')); // should return 'd'
