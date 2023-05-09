import fastify from 'fastify'
import { createHash } from 'crypto'

const server = fastify()

server.get('/newGame',async (request, reply) => {
	const hash = createHash('sha1').update(Date.now().toString()).digest('hex')
	reply.status(200).send({
		gameId: hash
	})
})

server.listen({ port: 8080}, (error, address) => {
	if (error) {
		console.error(error)
		process.exit(1)
	}
	console.log(`Server listening at ${address}`)
})