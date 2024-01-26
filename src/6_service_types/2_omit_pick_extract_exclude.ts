interface IPaymentPersistent {
  id: number
  sum: number
  from: string
  to: string
}

type PaymentType = Omit<IPaymentPersistent, 'id'>
type PaymentRequisitesType = Pick<IPaymentPersistent, 'from' | 'to'>

type ExtractExampleType = Extract<'from' | 'to' | PaymentType, string>
type ExcludeExampleType = Exclude<'from' | 'to' | PaymentType, string>
