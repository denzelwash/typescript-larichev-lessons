// Приведение типов
let a = 5
let b: string = a.toString()
let c: string = new String(a).valueOf()
let d: boolean = new Boolean(a).valueOf()

let e = 'string'
let f: number = parseInt(e)

interface IUser {
	name: string
	email: string
	login: string
}

const user: IUser = {
	name: 'Vasia',
	email: 'vasia@mail.ru',
	login: 'vasia'
}

const userSecond = {
	name: 'Vasia',
	email: 'vasia@mail.ru',
	login: 'vasia'
} as IUser

interface IAdmin {
	name: string
	role: number
}

const admin: IAdmin = {
	...user,
	role: 1
}

function userToAdmin(user: IUser): IAdmin {
	return {
		name: user.name,
		role: 1
	}
}
