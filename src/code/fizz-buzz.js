function fizzBuzz(n) {
    let res = `${n} `;
    if (n % 3 === 0) {
        let temp = res.replace(`${n} `, '');
        temp += `fizz `;
        res = temp;
    }
    if (n % 5 === 0) {
        let temp = res.replace(`${n} `, '');
        temp += `buzz`;
        res = temp;
    }
    let trim = res.trim();
    console.log(trim);
    console.log(trim.length);
}

fizzBuzz(15);