// Необходимо написать функцию сортировки любых
// объектов, которые имеют id по убыванию и по возрастанию

const data = [
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
  { id: 3, name: 'Надя' },
  { id: 4, name: 'Вова' },
  { id: 5, name: 'Никита' }
]

interface IID {
  id: number
}

type DirectionType = 'asc' | 'desc'

function sortById<T extends IID>(data: T[], direction: DirectionType = 'asc'): T[] {
  const newData = [...data]
  if (direction === 'asc') {
    return newData.sort((a, b) => a.id - b.id)
  } else {
    return newData.sort((a, b) => b.id - a.id)
  }
}

const res = sortById(data)
const res2 = sortById(data, 'asc')
const res3 = sortById(data, 'desc')

console.log(res)
console.log(res2)
console.log(res3)
console.log(data)
