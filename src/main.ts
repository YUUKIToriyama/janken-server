import fastify from 'fastify'
import { createHash } from 'crypto'
import { Dao } from './database/Dao'

(async () => {
	const database = new Dao('./janken-db.sqlite')
	await database.createTables()
	const server = fastify()

	server.get('/newGame',async (request, reply) => {
		const hash = createHash('sha1').update(Date.now().toString()).digest('hex')
		try {
			await database.createNewGame(hash)
			reply.status(200).send({
				gameId: hash,
				message: 'Let\'s start a new game'
			})
		} catch(error) {
			console.error(error)
			reply.status(500).send({
				gameId: null,
				message: 'Cannot start a new game'
			})
		}
	})

	server.listen({ port: 8080}, (error, address) => {
		if (error) {
			console.error(error)
			process.exit(1)
		}
		console.log(`Server listening at ${address}`)
	})
})()