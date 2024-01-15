type httpMethod = 'get' | 'post'

function fetchWithAuth(url: string, method: httpMethod) {}

type user = {
	name: string
	age: number
	skills: string[]
}

type role = {
	id: number
}

const user: user & role = {
	id: 1,
	name: 'name',
	age: 30,
	skills: ['dev', 'devops']
}
