interface IUser {
  name: string
  age: number
}

type KeyOfUserType = keyof IUser

const key: KeyOfUserType = 'name'

function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

const user: IUser = {
  name: 'Den',
  age: 34
}

const userName = getValue(user, 'name')
