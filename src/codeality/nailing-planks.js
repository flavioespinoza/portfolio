function solution(A, B, C) {
  let max = C.length;
  let bMax = 0;
  let min = 0;
  let noLessThanOne = false;
  const nailsOverall = [];
  if (C.length === 1) {
    if (A[0] <= C[0] && C[0] <= B[0]) {
      return 1;
    } else {
      return -1;
    }
  }
  for (let i = 0; i < A.length; i++) {
    bMax = Math.max(bMax, B[i]);
  }
  for (let i = 0; i <= bMax; i++) {
    nailsOverall[i] = 0;
  }
  while (min <= max) {
    const mid = parseInt((min + max) / 2);
    for (let i = 0; i < nailsOverall.length; i++) {
      nailsOverall[i] = 0;
    }
    for (let i = 0; i < mid; i++) {
      nailsOverall[C[i]] = 1;
    }
    for (let i = 1; i < nailsOverall.length; i++) {
      nailsOverall[i] += nailsOverall[i - 1];
    }
    const outcome = aggregateNailed(A, B, nailsOverall);
    if (outcome) {
      noLessThanOne = true;
      if (max === mid) {
        break;
      }
      max = mid;
    } else {
      min = mid + 1;
    }
  }
  if (!noLessThanOne) {
    return -1;
  } else {
    return min;
  }
}

function aggregateNailed(arrayA, arrayB, nailsOverall) {
  for (let i = 0; i < arrayA.length; i++) {
    if (nailsOverall[arrayA[i] - 1] === nailsOverall[arrayB[i]]) {
      return false;
    }
  }
  return true;
}
