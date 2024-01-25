// Необходимо сделать тип для результата валидации
// формы, основываясь на типе формы

interface IForm {
  name: string
  password: string
  age: number
}

const form: IForm = {
  name: 'Den',
  password: '123',
  age: 34
}

type ValidationType<T> = {
  [Key in keyof T]:
    | {
        isValid: true
      }
    | {
        isValid: false
        errorMessage: string
      }
}

const formValidation: ValidationType<IForm> = {
  name: { isValid: true },
  password: { isValid: false, errorMessage: 'Пароль должен быть длиннее 5 символов' },
  age: { isValid: true }
}
