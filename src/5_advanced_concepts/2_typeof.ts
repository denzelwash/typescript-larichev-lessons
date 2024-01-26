let strOrNum: string | number

if (Math.random() > 0.5) {
  strOrNum = 5
} else {
  strOrNum = 'str'
}

if (typeof strOrNum === 'number') {
  console.log(strOrNum)
} else {
  console.log(strOrNum)
}

let strOrNum2: typeof strOrNum

const user = {
  name: 'Den',
  age: 34
}

type KeyOfUserType = keyof typeof user

enum Direction {
  Up,
  Down
}

type DirectionType = keyof typeof Direction
