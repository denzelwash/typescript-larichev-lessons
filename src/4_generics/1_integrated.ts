const num: Array<number> = [1, 2, 3]

async function test() {
  const a = await new Promise<number>((res, rej) => res(1))
}

const check: Record<string, boolean> = {
  drive: true,
  kpp: false
}
