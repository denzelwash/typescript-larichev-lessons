class User {
	name: string
	constructor(name: string) {
		this.name = name
	}
}

const user = new User('Den')

class Admin {
	role: number // tsconfig.json "strictPropertyInitialization": false
	// role!: number
}

const admin = new Admin()
