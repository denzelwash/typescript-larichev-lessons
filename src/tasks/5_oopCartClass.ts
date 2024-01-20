// Необходимо сделать корзину (Cart) на сайте,
// которая имееет список продуктов (Product), добавленных в корзину
// и переметры доставки (Delivery). Для Cart реализовать методы:
// - Добавить продукт в корзину
// - Удалить продукт из корзины по ID
// - Посчитать стоимость товаров в корзине
// - Задать доставку
// - Checkout - вернуть что всё ок, если есть продукты и параметры доставки
// Product: id, название и цена
// Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)

class Product {
	// public id: number
	// public name: string
	// public price: number

	// constructor(id: number, name: string, price: number) {
	// 	this.id = id
	// 	this.name = name
	// 	this.price = price
	// }

	// // Короткий вариант записи
	constructor(public id: number, public name: string, public price: number) {}
}

type DeliveryOptions = HomeDelivery | PickupDelivery

class Delivery {
	constructor(date: Date) {}
}

class HomeDelivery extends Delivery {
	constructor(date: Date, public address: string) {
		super(date)
	}
}

class PickupDelivery extends Delivery {
	constructor(public shopId: number) {
		super(new Date())
	}
}

class Cart {
	private products: Product[] = []
	private delivery: DeliveryOptions

	public addProduct(p: Product): void {
		this.products.push(p)
	}

	public removeProduct(productId: number): void {
		this.products = this.products.filter((p: Product) => p.id !== productId)
	}

	public getSum(): number {
		return this.products.reduce((a: number, b: Product) => a + b.price, 0)
	}

	public setDelivery(delivery: DeliveryOptions): void {
		this.delivery = delivery
	}

	public checkout(): object | void {
		if (this.products.length === 0) {
			throw new Error('Нет товаров в корзине')
		} else if (!this.delivery) {
			throw new Error('Не выбраны параметры доставки')
		} else {
			return { success: true }
		}
	}
}

const cart = new Cart()

cart.addProduct(new Product(1, 'Товар 1', 1000))
cart.addProduct(new Product(2, 'Товар 2', 2000))
cart.addProduct(new Product(3, 'Товар 3', 3000))
cart.removeProduct(2)
cart.setDelivery(new HomeDelivery(new Date(), 'адрес...'))
// cart.setDelivery(new PickupDelivery(5))
console.log(cart.getSum())
console.log(cart.checkout())
console.log(cart)
