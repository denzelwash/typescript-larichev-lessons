interface User {
	login: string
	password?: string
}

const user: User = {
	login: 'name',
	password: 'password'
}

function multiply(firstNum: number, secondNum?: number): number {
	if (!secondNum) {
		return firstNum * firstNum
	} else {
		return firstNum * secondNum
	}
}

interface UserSecond {
	login: string
	password?: {
		type: 'primary' | 'secondary'
	}
}

function testPass(user: UserSecond) {
	console.log(user.password?.type)
}
