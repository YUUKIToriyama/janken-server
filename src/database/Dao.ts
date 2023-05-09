import { Database } from 'sqlite3'

export class Dao {
	connection: Database

	constructor(dbName: string) {
		this.connection = new Database(dbName)
	}

	public async createTables(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.connection.run('CREATE TABLE IF NOT EXISTS games (id INTEGER PRIMARY KEY AUTOINCREMENT, hash TEXT)', error => {
				reject(error)
			})
			resolve()
		})
	}

	public async createNewGame(gameId: string) : Promise<void> {
		const statement = this.connection.prepare('INSERT INTO games VALUES(NULL, ?)')
		return new Promise((resolve, reject) => {
			statement.run(gameId, error => {
				reject(error)
			})
			resolve()
		})
	}
}