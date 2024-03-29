class Vehicle {
	public brand: string
	private damages: string[]
	private _model: string
	protected run: number
	#price: number

	set model(model: string) {
		this._model = model
	}

	get model() {
		return this._model
	}

	addDamage(damage: string) {
		this.damages.push(damage)
	}
}

class EuroTruck extends Vehicle {
	setRun(km: number) {
		this.run = km / 0.62
		// this.damages - error
	}
}
