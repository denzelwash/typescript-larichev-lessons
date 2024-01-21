function logMiddleware<T>(arg: T): T {
  console.log(arg)
  return arg
}

const res = logMiddleware(10)
const res2 = logMiddleware<number>(10)
const res3 = logMiddleware<string>('str')

function getSplittedHalf<T>(arr: Array<T>): Array<T> {
  return arr.slice(0, Math.floor(arr.length / 2))
}

const halfArray = getSplittedHalf([1, 2, 3, 4, 5, 6])
const halfArray2 = getSplittedHalf<number>([1, 2, 3, 4, 5, 6])
console.log(halfArray)
console.log(halfArray2)
