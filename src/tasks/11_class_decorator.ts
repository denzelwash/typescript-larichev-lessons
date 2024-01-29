// Декоратор, который добавляет свойство
// createdAt в класс, фиксируя дату создания

interface IUSerService {
  users: number
  getUsersInDatabase(): number
}

@CreatedAt
class UserService implements IUSerService {
  users: number = 1000
  getUsersInDatabase(): number {
    return this.users
  }
}

function CreatedAt<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdAt = new Date()
  }
}

type CreatedAtType = {
  createdAt: Date
}

console.log((new UserService() as IUSerService & CreatedAtType).createdAt)
