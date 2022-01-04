function is_rotation(array1, array2) {
	if (array1.length !== array2.length) return false;
	const startIndex = array2.findIndex(item => item === array1[0]);
	if (startIndex === -1) return false;
	for (let i = 0; i < array1.length; i++) {
		const modIndex = (startIndex + i) % array1.length;
		if (array1[i] !== array2[modIndex]) return false;
	}
	return true;
}


const list1 = [1, 2, 3, 4, 5, 6, 7];

const list2a = [4, 5, 6, 7, 8, 1, 2, 3];
console.log(is_rotation(list1, list2a)); // should return false.

const list2b = [4, 5, 6, 7, 1, 2, 3];
console.log(is_rotation(list1, list2b)); // should return true.

const list2c = [4, 5, 6, 9, 1, 2, 3];
console.log(is_rotation(list1, list2c)); // should return false.

const list2d = [4, 6, 5, 7, 1, 2, 3];
console.log(is_rotation(list1, list2d)); // should return false.

const list2e = [4, 5, 6, 7, 0, 2, 3];
console.log(is_rotation(list1, list2e)); // should return false.

const list2f = [1, 2, 3, 4, 5, 6, 7];
console.log(is_rotation(list1, list2f)); // should return true.

const list2g = [7, 1, 2, 3, 4, 5, 6];
console.log(is_rotation(list1, list2g)); // should return true.
