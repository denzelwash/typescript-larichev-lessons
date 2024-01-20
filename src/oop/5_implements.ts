interface ILogger {
	log(...args: string[]): void
	error(...args: string[]): void
}

class Logger implements ILogger {
	log(...args: string[]): void {
		console.log(...args)
	}
	async error(...args: string[]): Promise<void> {
		console.log(...args)
	}
}

interface IPayable {
	pay(paymentId: number): void
	price?: number
}

interface IDeletable {
	delete(): void
}

class User implements IPayable, IDeletable {
	pay(paymentId: number): void {
		//
	}
	delete(): void {
		throw new Error('Method not implemented.')
	}
}
