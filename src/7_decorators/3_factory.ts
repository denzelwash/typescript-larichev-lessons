interface IUSerService {
  users: number
  getUsersInDatabase(): number
}

@setUsers(1)
@log()
@setUserAdvanced(3)
class UserService implements IUSerService {
  users: number = 1000
  getUsersInDatabase(): number {
    return this.users
  }
}

function log() {
  return (target: Function) => {
    console.log('log')
  }
}

function setUsers(users: number) {
  return (target: Function) => {
    target.prototype.users = users
  }
}

function setUserAdvanced(users: number) {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      users = users
    }
  }
}

console.log(new UserService().getUsersInDatabase())
