import fastify from 'fastify'

const server = fastify()

server.get('/newGame',async (request, reply) => {
	return 'new game'
})

server.listen({ port: 8080}, (error, address) => {
	if (error) {
		console.error(error)
		process.exit(1)
	}
	console.log(`Server listening at ${address}`)
})