interface IUSerService {
  users: number
  getUsersInDatabase(): number
}

@NullUser
@ThreeUserAdvanced
class UserService implements IUSerService {
  users: number = 1000
  getUsersInDatabase(): number {
    return this.users
  }
}

function NullUser(target: Function) {
  target.prototype.users = 0
}

function ThreeUserAdvanced<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    users = 3
  }
}

console.log(new UserService().getUsersInDatabase())
