// Написать декоратор перехвата ошибок

interface IUSerService {
  users: number
  getUsersInDatabase(): number
}

class UserService implements IUSerService {
  users: number = 1000

  @Catch(true)
  getUsersInDatabase(): number {
    throw new Error('Ошибка')
  }
}

function Catch(rethrow: boolean = false) {
  return (
    target: Object,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    const method = descriptor.value
    descriptor.value = (...args: any[]) => {
      try {
        return method?.apply(target, args)
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message)
          if (rethrow) {
            throw error
          }
        }
      }
    }
  }
}

console.log(new UserService().getUsersInDatabase())
