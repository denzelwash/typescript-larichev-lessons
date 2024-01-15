function logId(id: string | number): void {
	console.log(id)
}

type func = () => void

const a: func = () => {}

const b: func = () => {
	return true
}

const c = b()

const skills = ['dev', 'devops']

const user: { s: string[] } = {
	s: []
}

skills.forEach((s) => user.s.push(s))
