const arr: (string | number)[] = ['string', 5]

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
