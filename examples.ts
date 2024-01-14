// Base types
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

// Union types
const unionArr: (string | number)[] = ['string', 5]

function logId(id: string | number | boolean) {
	if (typeof id === 'string') {
		console.log(id.toUpperCase())
	} else if (typeof id === 'number') {
		console.log(id.toString())
	} else {
		console.log(id)
	}
}

function logError(err: string | string[]) {
	if (Array.isArray(err)) {
		console.log(err)
	} else {
		console.log(err)
	}
}

function logObj(obj: { a: 1 } | { b: 1 }) {
	if ('a' in obj) {
		console.log(obj.a)
	} else {
		console.log(obj.b)
	}
}

// Literal types
function fetchWithAuth(url: string, method: 'get' | 'post'): 1 | -1 {
	return 1
}

fetchWithAuth('/url', 'get')
fetchWithAuth('/url', 'post')

let e: 'literal' = 'literal'

// Alias types
type httpMethod = 'get' | 'post'

function fetchWithAuthAliases(url: string, method: httpMethod) {}

type userAlias = {
	name: string
	age: number
	skills: string[]
}

type roleAlias = {
	id: number
}

const userObj: userAlias & roleAlias = {
	id: 1,
	name: 'name',
	age: 30,
	skills: ['dev', 'devops']
}

// Interface
interface userInterface {
	name: string
	age: number
	skills: string[]
}

interface userWithIdInterface extends userInterface {
	id: number
}

interface userWithRoleInterfaceSecond extends userInterface, userWithIdInterface {
	createdAt: Date
	log: (id: number) => number
}

const userObjInterface: userWithIdInterface = {
	id: 1,
	name: 'name',
	age: 30,
	skills: ['dev', 'devops']
}

const userObjInterfaceSecond: userWithRoleInterfaceSecond = {
	id: 1,
	name: 'name',
	age: 30,
	skills: ['dev', 'devops'],
	createdAt: new Date(),
	log: (id) => id
}

interface userDic {
	[index: number]: userInterface
}

// Optional
interface UserOptional {
	login: string
	password?: string
}

const userOptional: UserOptional = {
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

interface UserOptionalSecond {
	login: string
	password?: {
		type: 'primary' | 'secondary'
	}
}

function testPass(user: UserOptionalSecond) {
	console.log(user.password?.type)
}

// Void
function logIdVoid(id: string | number): void {
	console.log(id)
}

type voidFunc = () => void

const f1: voidFunc = () => {}

const f2: voidFunc = () => {
	return true
}

const f3 = f2()

const skillsVoid = ['dev', 'devops']

const userVoid: { s: string[] } = {
	s: []
}

skillsVoid.forEach((s) => userVoid.s.push(s))

// Unknown
let varUnknown: unknown
varUnknown = 5

function funcUnknown(a: unknown) {
	if (typeof a === 'number') {
		a++
	} else {
		console.log(a)
	}
}

funcUnknown(varUnknown)

async function fethDataUnknown() {
	try {
		await fetch('')
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message)
		}
	}
}

// Never
function generateError(message: string): never {
	throw new Error(message)
}

function dumpError(): never {
	while (true) {}
}

type paymentAction = 'refund' | 'checkout' | 'reject'

function processAction(action: paymentAction) {
	switch (action) {
		case 'refund':
			// ...
			break
		case 'checkout':
			// ...
			break
		case 'reject':
			// ...
			break
		default:
			const _: never = action
			throw new Error('Нет такого action')
	}
}

// Null
const n1: null = null
const n2: any = null

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

// Приведение типов
let a1 = 5
let a2: string = a1.toString()
let a3: string = new String(a1).valueOf()
let a4: boolean = new Boolean(a1).valueOf()

let a5 = 'string'
let a6: number = parseInt(a5)

interface IUserConversion {
	name: string
	email: string
	login: string
}

const userConversion: IUserConversion = {
	name: 'Vasia',
	email: 'vasia@mail.ru',
	login: 'vasia'
}

const userConversionSecond = {
	name: 'Vasia',
	email: 'vasia@mail.ru',
	login: 'vasia'
} as IUserConversion

interface IAdmin {
	name: string
	role: number
}

const adminConversion: IAdmin = {
	...userConversion,
	role: 1
}

function userToAdmin(user: IUserConversion): IAdmin {
	return {
		name: user.name,
		role: 1
	}
}

// Type guard
function logIdGuard(id: string | number): void {
	if (typeof id === 'string') {
		console.log(id)
	} else {
		console.log(id)
	}
}

function logIdGuardSecond(id: string | number): void {
	if (isString(id)) {
		console.log(id)
	} else {
		console.log(id)
	}
}

function isString(x: string | number): x is string {
	return typeof x === 'string'
}

interface IUserGuard {
	name: string
	email: string
	login: string
}

interface IAdminGuard {
	name: string
	role: number
}

function isAdminGuard(user: IUserGuard | IAdminGuard): user is IAdminGuard {
	return 'role' in user
}

function isAdminGuardAlternative(user: IUserGuard | IAdminGuard): user is IAdminGuard {
	return (user as IAdminGuard).role !== undefined
}

function setRoleZero(user: IUserGuard | IAdminGuard): void {
	if (isAdminGuard(user)) {
		user.role = 0
	} else {
		throw new Error('Пользователь не админ')
	}
}
