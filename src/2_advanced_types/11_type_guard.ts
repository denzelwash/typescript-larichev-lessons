function logId(id: string | number): void {
	if (typeof id === 'string') {
		console.log(id)
	} else {
		console.log(id)
	}
}

function logIdSecond(id: string | number): void {
	if (isString(id)) {
		console.log(id)
	} else {
		console.log(id)
	}
}

function isString(x: string | number): x is string {
	return typeof x === 'string'
}

interface IUser {
	name: string
	email: string
	login: string
}

interface IAdmin {
	name: string
	role: number
}

function isAdmin(user: IUser | IAdmin): user is IAdmin {
	return 'role' in user
}

function isAdminAlternative(user: IUser | IAdmin): user is IAdmin {
	return (user as IAdmin).role !== undefined
}

function setRoleZero(user: IUser | IAdmin): void {
	if (isAdmin(user)) {
		user.role = 0
	} else {
		throw new Error('Пользователь не админ')
	}
}
