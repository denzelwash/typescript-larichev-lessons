let a: unknown
a = 5

function func(a: unknown) {
	if (typeof a === 'number') {
		a++
	} else {
		console.log(a)
	}
}

func(a)

async function fethData() {
	try {
		await fetch('')
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message)
		}
	}
}
