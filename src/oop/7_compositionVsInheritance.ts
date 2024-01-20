// Не лучший вариант через наследование(лишние методы)
class User {
	name: string

	constructor(name: string) {
		this.name = name
	}
}

class Users extends Array<User> {
	searchByName(name: string) {
		return this.filter((u) => u.name === name)
	}

	override toString(): string {
		return this.map((u) => u.name).join(', ')
	}
}

const users = new Users()
users.push(new User('Den'))
users.push(new User('Alex'))
console.log(users.toString())

// Лучше через композицию
class UserList {
	users: User[]

	searchByName(name: string) {
		return this.users.filter((u) => u.name === name)
	}

	toString(): string {
		return this.users.map((u) => u.name).join(', ')
	}

	push(u: User) {
		this.users.push(u)
	}
}

const users2 = new Users()
users2.push(new User('Den'))
users2.push(new User('Alex'))
console.log(users2.toString())
