interface IUSerService {
  users: number
  getUsersInDatabase(): number
}

class UserService implements IUSerService {
  users: number = 1000
  getUsersInDatabase(): number {
    return this.users
  }
}

function nullUser(obj: IUSerService): IUSerService {
  obj.users = 0
  return obj
}

function logUser(obj: IUSerService): IUSerService {
  console.log(`Users: ${obj.users}`)
  return obj
}

console.log(new UserService().getUsersInDatabase())
console.log(nullUser(logUser(new UserService())).getUsersInDatabase())
console.log(nullUser(new UserService()).getUsersInDatabase())
