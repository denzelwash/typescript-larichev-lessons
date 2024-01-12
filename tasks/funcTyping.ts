enum Status {
	Published = 'published',
	Draft = 'draft',
	Deleted = 'deleted'
}

/* Запрос */
const req = {
	topicId: 5,
	status: Status.Published // "published", "draft", "deleted" - optional
}

/* Ответ */
const res = [
	{
		question: 'Как осуществляется доставка?',
		answer: 'быстро!',
		tags: ['popular', 'new'],
		likes: 3,
		status: 'published'
	}
]

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

getFaqs(req)
