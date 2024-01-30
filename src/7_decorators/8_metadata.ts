import 'reflect-metadata'

const POSITIVE_META_DATA_KEY = Symbol('POSITIVE_META_DATA_KEY')

interface IUSerService {
  getUsersInDatabase(): number
}

class UserService implements IUSerService {
  private _users: number

  getUsersInDatabase(): number {
    return this._users
  }

  @Validate()
  setUsersInDatabase(@Positive() num: number): void {
    this._users = num
  }
}

function Positive() {
  return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
    console.log(Reflect.getOwnMetadata('design:type', target, propertyKey))
    console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey))
    console.log(Reflect.getOwnMetadata('design:returntype', target, propertyKey))
    let existParams: number[] = Reflect.getOwnMetadata(POSITIVE_META_DATA_KEY, target, propertyKey) || []
    existParams.push(parameterIndex)
    Reflect.defineMetadata(POSITIVE_META_DATA_KEY, existParams, target, propertyKey)
  }
}

function Validate() {
  return (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>) => {
    let method = descriptor.value
    descriptor.value = function (...args: any) {
      let positiveParams: number[] = Reflect.getOwnMetadata(POSITIVE_META_DATA_KEY, target, propertyKey)
      if (positiveParams) {
        for (let index in positiveParams) {
          if (arguments[index] < 0) {
            throw new Error('Число должно быть больше нуля')
          }
        }
      }
      return method?.apply(this, args)
    }
  }
}

const userService = new UserService()
console.log(userService.setUsersInDatabase(10))
console.log(userService.setUsersInDatabase(-1))
