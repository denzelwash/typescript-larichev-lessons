class User {
  constructor(public id: number, public name: string) {}
}

function getData(id: number): User {
  return new User(id, 'Вася')
}

type RType = ReturnType<typeof getData>
type RType2 = ReturnType<() => void>
type RType3 = ReturnType<<T>() => T>

type PType = Parameters<typeof getData>
type first = PType[0]

type CType = ConstructorParameters<typeof User>
