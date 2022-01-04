function is_one_away(string1, string2) {
    if (Math.abs(string1.length - string2.length) >= 2) return false;
	if (string1.length === string2.length) {
		let differences = 0;
		for (let i = 0; i < string1.length; i++) {
			if (string1[i] !== string2[i]) {
				differences++;
			}
		}
		if (differences > 1) return false;
    } else {
        let differences = 0;
        let p1 = 0;
        let p2 = 0;
        let long;
        let short;
        if (string1.length > string2.length) {
            long = string1;
            short = string2;
        } else {
            long = string2;
            short = string1;
        }
        while (p1 < long.length) {
            if (long[p1] === short[p2]) {
                p1++;
                p2++;
            } else {
                differences++;
                p1++;
            }
        }
        if (differences > 1) return false;
    }
	return true;
}

// condition 1 - Math.abs(string1.length - string2.length) >= 2
console.log(is_one_away('abcdef', 'abcd')); // should return false

// condition 2 - string1.length === string2.length
console.log(is_one_away("hit", "hot"));  // should return true
console.log(is_one_away("hot", "dot"));  // should return true
console.log(is_one_away("dot", "dog"));  // should return true
console.log(is_one_away("dog", "lot"));  // should return false

console.log(is_one_away("abcdef", "abqdef"));  // should return true
console.log(is_one_away("abcdef", "abccef"));  // should return true
console.log(is_one_away("a", "a"));  // should return true
console.log(is_one_away("abc", "bcc"));  // should return false
console.log(is_one_away("aaa", "abc"));  // should return false

// condition 3 - string1.length !== string2.length
console.log(is_one_away("abcde", "abcd"));  // should return true
console.log(is_one_away("abde", "abcde"));  // should return true
console.log(is_one_away("abcdef", "abcde"));  // should return true
console.log(is_one_away("abcdef", "xbcde"));  // should return false
console.log(is_one_away("abcdef", "abcdd"));  // should return false
console.log(is_one_away("abcde", "abc"));  // should return false
console.log(is_one_away("abc", "abcde"));  // should return false
