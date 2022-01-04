const merge = (intervals) => {
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let previous = intervals[0];

  for (let i = 1; i < intervals.length; i += 1) {
    if (previous[1] >= intervals[i][0]) {
      previous = [previous[0], Math.max(previous[1], intervals[i][1])];
    } else {
      result.push(previous);
      previous = intervals[i];
    }
  }

  result.push(previous);

  return result;
};

function removeInterval(intervals, toBeRemoved) {
  const res = [];
  const start = toBeRemoved[0];
  const end = toBeRemoved[1];
  const flat = [];
  const first = [];
  const second = [];
  flat.push(...toBeRemoved);
  for (const el of intervals) {
    if (Array.isArray(el)) {
      flat.push(...el);
    } else {
      flat.push(el);
    }
  }
  new Set([
    ...flat.sort((a, b) => {
      return a - b;
    }),
  ]).forEach((n) => {
    if (n <= start) {
      first.push(n);
    }
    if (n >= end) {
      second.push(n);
    }
  });
  console.log(first);
  console.log(second);
  if (first.length % 2 !== 0) first.pop();
  if (second.length % 2 !== 0) second.shift();
  const ready = [...first, ...second];
  for (let i = 1; i < ready.length; i = i + 2) {
    res.push([ready[i - 1], ready[i]]);
  }
  return res;
}

let int;
let remove;
let expected;

int = [
  [-9, -8],
  [-7, -6],
  [4, 80],
  [81, 88],
  [97, 98],
];
remove = [-5, 2];
expected = [
  [-9, -8],
  [-7, -6],
  [4, 80],
  [81, 88],
  [97, 98],
];
console.log(removeInterval(int, remove));

// int = [
//   [0, 2],
//   [3, 4],
//   [5, 7],
// ];
// remove = [1, 6];
// expected = [
//   [0, 1],
//   [6, 7],
// ];
// console.log(removeInterval(int, remove));

// int = [[0, 5]];
// remove = [2, 3];
// expected = [
//   [0, 2],
//   [3, 5],
// ];
// console.log(removeInterval(int, remove));

// // int = [[1,  3],[4,  6],[7,  9],[8,  18]];
// // int = [[1,  3],[4,  6],[7,  9],[8,  18]];
// const _res = [];
// const _prev = [];
// const _curr = [];
// for (const x of int) {
//   if (Array.isArray(x)) {
//     _prev.push(x[1]);
//     _curr.push(x[0]);
//   }
// }

// for (let i = 0; i < _prev.length; i++) {
//   if (i === 0) {
//     _res.push(_curr[i]);
//   }
//   if (_prev[i] >= _curr[i + 1]) {
//     // do nothing
//   } else if (!_curr[i + 1]) {
//     _res.push(_prev[i]);
//   } else {
//     _res.push(_prev[i]);
//     _res.push(_curr[i + 1]);
//   }
// }

// const result = [];
// for (let i = 1; i < _res.length; i = i + 2) {
//   result.push([_res[i - 1], _res[i]]);
// }

// console.log(result);

// console.log(_res);
// console.log(merge(int));

// int = [
//   [1, 6],
//   [6, 9],
//   [9, 18],
// ];
// // int = [[1,9],[9,18]];
// // int = [[1,18]];
// console.log(merge(int));
// // int curr => int[1] [2,6]
// // int prev => int[0] [1,3]
// // if (prev[1](3) >= curr[0](2)) then newPrev = [prev[0], curr[1]]
// // prev = newPrev

// int = [
//   [1, 3],
//   [2, 6],
//   [6, 10],
//   [9, 18],
// ];
// // int = [[1,6],[8,10],[15,18]];
// console.log(merge(int));

// int = [-5, -4, -3, -2, 1, 2, 3, 5, 8, 9];
// remove = [-1, 4];
// let y = [];
// let r = [];
// for (let i = 0; i < int.length; i++) {
//   y.push(int[i] + 6);
// }
// for (let i = 0; i < remove.length; i++) {
//   r.push(remove[i] + 6);
// }
// console.log(y);
// console.log(r);

// expected = [
//   [-5, -4],
//   [-3, -2],
//   [4, 5],
//   [8, 9],
// ];
// console.log(removeInterval(int, remove));


/**
 * @description removeInterval Faster
 * */
function removeInterval(intervals, remove) {
  const start = remove[0];
  const end = remove[1];
  const res = [];
  for (const i of intervals) {
    const iStart = i[0];
    const iEnd = i[1];
    if (iEnd <= start || iStart >= end) {
      res.push(i)
    } else {
      // iStart is before start
      if (iStart < start) res.push([iStart, start])
      // iEnd is after end
      if (iEnd > end) res.push([end, iEnd])
    }
  }
  return res;
}