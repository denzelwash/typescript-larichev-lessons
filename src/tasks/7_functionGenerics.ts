function toString<T>(arg: T): string | undefined {
  if (
    Array.isArray(arg) ||
    typeof arg === 'number' ||
    typeof arg === 'string' ||
    typeof arg === 'boolean' ||
    typeof arg === 'bigint' ||
    typeof arg === 'function' ||
    typeof arg === 'symbol'
  ) {
    return arg.toString()
  } else if (typeof arg === 'object') {
    return JSON.stringify(arg)
  } else {
    return undefined
  }
}

console.log(toString([1, 2, 3]))
console.log(toString(1))
console.log(toString('1'))
console.log(toString(true))
console.log(toString(() => {}))
console.log(toString({ a: 1 }))
