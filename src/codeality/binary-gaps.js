function binaryGaps(N) {
  let binary = '';
  let enumerator = -1;
  let apex = 0;
  while (N > 0) {
    const num = N % 2;
    if (num === 1) {
      if (enumerator > apex) {
        apex = enumerator;
      }
      enumerator = 0;
    } else if (enumerator >= 0) {
      enumerator++;
    }
    binary = `${num}${binary}`;
    N = parseInt(N / 2);
  }
  return apex;
}

console.log('binaryGaps(1041)', binaryGaps(1041)); // => 5

