// Декоратор, который добавляет свойство
// createdAt в класс, фиксируя дату создания

interface IUSerService {
  users: number
  getUsersInDatabase(): number
}

@createdAt
class UserService implements IUSerService {
  users: number = 1000
  getUsersInDatabase(): number {
    return this.users
  }
}

function createdAt<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdAt = new Date()
  }
}

type CreatedAt = {
  createdAt: Date
}

console.log((new UserService() as IUSerService & CreatedAt).createdAt)
