class UserService {
	static db: any

	static getUser(id: number) {
		return UserService.db.findById(id)
	}

	create() {}

	static {
		UserService.db = 'string'
	}
}

console.log(UserService.db)
