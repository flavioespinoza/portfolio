let cnt = 0
const counter = {
  cnt: 0,
  inc: () => {
    console.log(this)
  },
}

counter.inc()