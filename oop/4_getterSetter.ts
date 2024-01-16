class User {
	_login: string
	password: string
	createdAt: Date

	set login(l: string | number) {
		this._login = 'prefix-' + l
		this.createdAt = new Date()
	}

	get login(): string {
		return this._login
	}
}

const user = new User()
user.login = 'aaa'
console.log(user)
