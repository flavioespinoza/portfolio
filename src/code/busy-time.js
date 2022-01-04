const data = [
  [1487799425, 14, 1], // add
  [1487799425, 4, 0],
  [1487799425, 2, 0],
  [1487800378, 10, 1],
  [1487801478, 18, 0],
  [1487801478, 17, 1],
  [1487901013, 1, 0],
  [1487901211, 7, 1],
  [1487901211, 7, 0],
];

const output = 1487800378;

function max_element(arr){
  let mx = arr[0]
  for(let i = 1; i < arr.length; i++){
    console.log(mx)
    console.log(i)
    if (mx < arr[i]){
      mx = arr[i]
    }
  }
  return mx
}

function findBusiestPeriod(data) {
  const map = {};
  for (let i = 0; i < data.length; i++) {
    const timestamp = data[i][0];
    const visitors = data[i][1];
    const nState = data[i][2];
    if (!map[timestamp]) {
      map[timestamp] = {
        visitors,
        nState,
      };
    }
  }
  let res = [];
  let runningTotal = 0;
  for (const [key, val] of Object.entries(map)) {
    let netVisitors = 0;
    if (val.nState === 1) {
      netVisitors = runningTotal + val.visitors;
    } else {
      netVisitors = runningTotal - val.visitors;
    }
    runningTotal = netVisitors;
    res.push({
      timestamp: parseInt(key),
      visitors: netVisitors,
    });
    console.log(runningTotal) // 14, 24, 6, 5, 12 
  }
  let max = max_element([14, 24, 6, 5, 12]);
  console.log(max)

}
function findBusiestPeriod_Math(data) {
  if (data.length == 0) return 0
  let res = 0, local_max = 0
  data[0][2] == 1 ? local_max += data[0][1] : local_max -= data[0][1]
  let timestamp = data[0][0]
  for(let i = 1; i < data.length; i++){
    if (data[i][0] == data[i-1][0]){
      if (data[i][2] == 1){
        local_max += data[i][1]
      } else {
        local_max -= data[i][1]
      }
      continue
    } else {
      if (data[i][2] == 1){
        local_max += data[i][1]
      } else {
        local_max -= data[i][1]
      }
    }
    if (local_max > res){
      res = local_max
      timestamp = data[i][0]
    }
    local_max = 0
  }
  return timestamp
}
const solution = findBusiestPeriod(data)
console.log(solution) // 1487800378

/**
 * check if solution equals the desired output
 * */
console.log(solution === output) // true