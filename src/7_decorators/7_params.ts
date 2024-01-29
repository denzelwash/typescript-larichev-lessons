interface IUSerService {
  getUsersInDatabase(): number
}

class UserService implements IUSerService {
  private _users: number

  getUsersInDatabase(): number {
    return this._users
  }

  setUsersInDatabase(@Positive() num: number): void {
    this._users = num
  }
}

function Positive() {
  return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
    console.log(target)
    console.log(propertyKey)
    console.log(parameterIndex)
  }
}

const userService = new UserService()
console.log(userService)
