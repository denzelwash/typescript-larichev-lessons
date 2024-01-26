// Необходимо написать функцию группировки, которая принимает массив объектов
// и его ключ, производит группировку по указанному ключу и возращает
// сгруппированный объект.

// При группироке по 'group' ---->
// {
// 	'1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
// 	'2': [ { group: 2, name: 'c' } ]
// }

interface IData {
  group: number
  name: string
}

const data: IData[] = [
  { group: 1, name: 'a' },
  { group: 1, name: 'b' },
  { group: 2, name: 'c' }
]

// My version
function group<T>(data: T[], key: keyof T): Record<string, T[]> {
  const resultObj: Record<string, T[]> = {}
  data.forEach((obj) => {
    const k = obj[key] as string
    if (!(k in resultObj)) {
      resultObj[k] = []
    }
    resultObj[k].push(obj)
  })
  return resultObj
}

const res = group(data, 'group')
console.log(res)

// Teacher version
interface IGroup<T> {
  [key: string]: T[]
}

type key = string | number | symbol

function group2<T extends Record<key, any>>(array: T[], key: keyof T): IGroup<T> {
  return array.reduce<IGroup<T>>((map: IGroup<T>, item) => {
    const itemKey = item[key]
    let curEl = map[itemKey]
    if (Array.isArray(curEl)) {
      curEl.push(item)
    } else {
      curEl = [item]
    }
    map[itemKey] = curEl
    return map
  }, {})
}

const res2 = group2(data, 'group')
console.log(res2)
