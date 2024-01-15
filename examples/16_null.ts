const a: null = null
const b: any = null

interface IUser {
	name: string
}

function getUserNull() {
	if (Math.random() > 0.5) {
		return null
	} else {
		return {
			name: 'Name'
		} as IUser
	}
}

const userNull = getUserNull()
if (userNull) {
	console.log(userNull.name)
}
