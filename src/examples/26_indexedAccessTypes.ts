interface IRole {
  name: string
}

interface IPermission {
  endDate: Date
}

interface IUser {
  name: string
  roles: IRole[]
  permission: IPermission
}

const user: IUser = {
  name: 'Den',
  roles: [],
  permission: {
    endDate: new Date()
  }
}

const userName = user['name']
const roleNames = 'roles'

type rolesUserType = IUser['roles']
type rolesUserType2 = IUser[typeof roleNames]

type RoleType = IUser['roles'][number]
type DateType = IUser['permission']['endDate']

const roles = ['admin', 'user', 'super-user'] as const

type RolesTypes = (typeof roles)[number]
