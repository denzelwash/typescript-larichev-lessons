function Uni(name: string): any {
  console.log(`Инициализация: ${name}`)
  return function () {
    console.log(`Вызов: ${name}`)
  }
}

@Uni('класс')
class MyClass {
  @Uni('свойство')
  prop?: any

  @Uni('статичное свойство')
  static propStatic?: any

  @Uni('метод')
  method(@Uni('параметр метода') _: any) {}

  @Uni('статичный метод')
  methodStatic(@Uni('статичный параметр метода') _: any) {}

  constructor(@Uni('параметр конструктора') _: any) {}
}

new MyClass('str')
