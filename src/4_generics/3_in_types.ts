type SplittedHalfType = <T>(arr: Array<T>) => Array<T>

const getSplittedHalf: SplittedHalfType = function (arr) {
  return arr.slice(0, Math.floor(arr.length / 2))
}

const halfArray = getSplittedHalf([1, 2, 3, 4, 5, 6])
console.log(halfArray)

interface IlogLine<T> {
  timeStamp: Date
  data: T
}

type LogLineType<T> = {
  timeStamp: Date
  data: T
}

const logLineInterface: IlogLine<{ a: number; b: string }> = {
  timeStamp: new Date(),
  data: {
    a: 1,
    b: 'text'
  }
}

const logLineType: LogLineType<{ a: number; b: string }> = {
  timeStamp: new Date(),
  data: {
    a: 1,
    b: 'text'
  }
}
