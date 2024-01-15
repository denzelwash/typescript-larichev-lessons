enum StatusCode {
	SUCCESS = 1,
	IN_PROCESS,
	FAILED
}

const res = {
	message: 'Платеж успешен',
	statusCode: StatusCode.SUCCESS
}

if (res.statusCode === 1) {
	console.log('Успех')
}

function action(status: StatusCode) {}

action(StatusCode.SUCCESS)
