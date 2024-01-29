interface IUSerService {
  users: number
  getUsersInDatabase(): number
}

class UserService implements IUSerService {
  users: number = 1000

  @Log
  @LogFactory()
  getUsersInDatabase(): number {
    throw new Error('Ошибка')
  }
}

function Log(
  target: Object,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
): TypedPropertyDescriptor<(...args: any[]) => any> | void {
  console.log('target', target)
  console.log('propertyKey', propertyKey)
  console.log('descriptor', descriptor)
  descriptor.value = () => {
    console.log('no error')
  }
}

function LogFactory() {
  return (
    target: Object,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    descriptor.value = () => {
      console.log('no error')
    }
  }
}

console.log(new UserService())
