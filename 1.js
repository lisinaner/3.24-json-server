var faker = require('faker/locale/zh_CN');
module.exports = () => {
	const data = {
		posts: [],
		comments: { "id": 1, "body": "some comment", "postId": 1 },
		"profile": { "name": "typicode" }
	}
	// Create 1000 users

	for (let i = 0; i < 1000; i++) {

		data.posts.push({
			id: i,
			title: `${faker.fake("{{name.title}}")}`,
			author: `${faker.fake("{{name.findName}}")}`
		}
		)
	}
	data.posts.push({
		id: 1000,
		title: "json-server",
		author: "typicode"
	})
	return data
}