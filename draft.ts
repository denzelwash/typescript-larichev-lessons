// Base type
const a: string = 'string'
const b: number = 3
const c: number = 5
const d: boolean = true

let calc: number = b + c

// Function
function getFullName(firstname: string, surname: string): string {
	return `${firstname} ${surname}`
}

const getFullNameArrow = (firstname: string, surname: string): string => {
	return `${firstname} ${surname}`
}

console.log(getFullName('Name', 'Surname'))

// Object
const info: {
	officeId: number
	isOpened: boolean
	contacts: {
		phone: string
		email: string
		address: {
			city: string
		}
	}
} = {
	officeId: 45,
	isOpened: false,
	contacts: {
		phone: '+79100000000',
		email: 'my@email.ru',
		address: {
			city: 'Москва'
		}
	}
}

// Array
const skills: string[] = ['dev', 'devops']
const skillsAny: any[] = ['dev', 'devops', 555]
const skillsGeneric: Array<string> = ['dev', 'devops']

// Tuple
const skillsTuple: [number, string] = [1, 'devops']
const skillsTupleRest: [number, string, ...boolean[]] = [1, 'devops', true, false]

// Readonly
const skillsReadonly: readonly string[] = ['dev', 'devops']
const skillsReadonlyTuple: readonly [number, string] = [1, 'devops']
const skillsReadonlyGeneric: ReadonlyArray<string> = ['dev', 'devops']

// Enum
enum StatusCode {
	SUCCESS = 1,
	IN_PROCESS,
	FAILED
}

const res = {
	message: 'Платеж успешен',
	statusCode: StatusCode.SUCCESS
}

if (res.statusCode === 1) {
	console.log('Успех')
}

function action(status: StatusCode) {}

action(StatusCode.SUCCESS)
