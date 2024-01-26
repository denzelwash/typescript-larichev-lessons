// // Пример запроса
// {
// 	"sum": 10000,
// 	"from": 2,
// 	"to": 4
// }

// // Пример ответа успех
// {
// 	"status": "success",
// 	"data": {
// 		"databaseId": 567,
// 		"sum": 10000,
// 		"from": 2,
// 		"to": 4
// 	}
// }

// // Пример ответа ошибка
// {
// 	"status": "failed",
// 	"data": {
// 		"errorMessage": "Недостаточно средств",
// 		"errorCode": 4
// 	}
// }

enum StatusCode {
	Success = 'success',
	Failed = 'failed'
}

interface IRequest {
	sum: number
	from: number
	to: number
}

interface IResponseDataSuccess extends IRequest {
	databaseId: number
}

interface IResponseDataFailed {
	errorMessage: string
	errorCode: number
}

interface IResponseSuccess {
	status: StatusCode.Success
	data: IResponseDataSuccess
}

interface IResponseFailed {
	status: StatusCode.Failed
	data: IResponseDataFailed
}

// function fetchInfo(): IResponseSuccess | IResponseFailed {}

type Res = IResponseSuccess | IResponseFailed

function getIdFromData(res: Res): number {
	if (isSuccess(res)) {
		return res.data.databaseId
	} else {
		throw new Error(res.data.errorMessage)
	}
}

function isSuccess(res: Res): res is IResponseSuccess {
	return res.status === StatusCode.Success
}
