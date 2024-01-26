interface User {
  name: string
  age?: number
  email: string
}

type PartialType = Partial<User>
type RequiredType = Required<User>
type ReadonlyType = Readonly<User>

type RequiredAndReadonlyType = Readonly<Required<User>>
