function runTransaction(transaction: { fromTo: [string, string] }) {
  console.log(transaction)
}

const transaction = {
  fromTo: ['1', '2'] as [string, string]
}

runTransaction(transaction)

type GetFirstArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never

const transaction2: GetFirstArg<typeof runTransaction> = {
  fromTo: ['1', '2']
}

runTransaction(transaction2)
