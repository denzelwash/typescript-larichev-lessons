// // Пример запроса
// {
// 	"topicId": 5,
// 	"status": "published" // "published", "draft", "deleted" - optional
// }

// // Пример ответа
// [
// 	{
// 		"question": "Как осуществляется доставка?",
// 		"answer": "быстро!",
// 		"tags": [
// 			"popular",
// 			"new"
// 		],
// 		"likes": 3,
// 		"status": "published"
// 	}
// ]

enum Status {
	Published = 'published',
	Draft = 'draft',
	Deleted = 'deleted'
}

async function getFaqs(req: { topicId: number; status?: Status }): Promise<
	{
		question: string
		answer: string
		tags: string[]
		likes: number
		status: Status
	}[]
> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	})
	const data = await res.json()
	return data
}
