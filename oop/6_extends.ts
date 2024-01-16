enum PaymentStatus {
	New = 'new',
	Paid = 'paid'
}

class Payment {
	id: number
	status: PaymentStatus = PaymentStatus.New

	constructor(id: number) {
		this.id = id
	}

	pay() {
		this.status = PaymentStatus.Paid
	}
}

class PersistedPayment extends Payment {
	databaseId: number
	paidAt: Date

	constructor(id: number) {
		super(id)
	}

	save() {
		// Сохраняет в базу
	}

	override pay(date?: Date) {
		super.pay()
		if (date) {
			this.paidAt = date
		}
	}
}

new PersistedPayment(1)
