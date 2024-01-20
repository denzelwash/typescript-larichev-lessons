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
