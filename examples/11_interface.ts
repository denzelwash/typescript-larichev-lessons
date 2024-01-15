interface user {
	name: string
	age: number
	skills: string[]
}

interface userWithId extends user {
	id: number
}

interface userWithRole extends user, userWithId {
	createdAt: Date
	log: (id: number) => number
}

const userObj: userWithId = {
	id: 1,
	name: 'name',
	age: 30,
	skills: ['dev', 'devops']
}

const userObjSecond: userWithRole = {
	id: 1,
	name: 'name',
	age: 30,
	skills: ['dev', 'devops'],
	createdAt: new Date(),
	log: (id) => id
}

interface userDic {
	[index: number]: user
}
