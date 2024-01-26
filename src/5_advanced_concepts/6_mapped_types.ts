type Modifier = 'read' | 'update' | 'create'

type UserRoles = {
  customers?: Modifier
  projects?: Modifier
  adminPanel?: Modifier
}

type ModifierToAccess<T> = {
  [Key in keyof T]: boolean
}

type ModifierToAccess2<T> = {
  +readonly [Key in keyof T as `canAccess${string & Key}`]-?: boolean
}

type UserAccess = ModifierToAccess<UserRoles>
type UserAccess2 = ModifierToAccess2<UserRoles>

type UserAccess3 = {
  customers?: boolean
  projects?: boolean
  adminPanel?: boolean
}
