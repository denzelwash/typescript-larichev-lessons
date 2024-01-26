type ReadOrWriteType = 'read' | 'write'
type Bulk = 'bulk' | ''

type Access = `can${Capitalize<ReadOrWriteType>}${Capitalize<Bulk>}`

type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never

type T = ReadOrWriteBulk<Access>

type ErrorOrSuccessType = 'error' | 'success'

type ResponseType = {
  result: `http${Capitalize<ErrorOrSuccessType>}`
}

const res: ResponseType = {
  result: 'httpError'
}
