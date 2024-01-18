class Payment {
	private date: Date = new Date()

	getDate(this: Payment) {
		return this.date
	}

	getDateArrow = () => {
		return this.date
	}
}

const payment = new Payment()

const user = {
	id: 1,
	paymentDate: payment.getDate.bind(payment),
	paymentDateArrow: payment.getDateArrow
}

console.log(payment.getDate())
console.log(user.paymentDate())
console.log(user.paymentDateArrow())

class PaymentPersistent extends Payment {
	save() {
		return super.getDate()
	}

	saveArrow() {
		return this.getDateArrow()
	}
}

console.log(new PaymentPersistent().save())
