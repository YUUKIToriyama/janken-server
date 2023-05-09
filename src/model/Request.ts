import { Janken } from './Janken'

export interface PlayRequest {
	gameId: string;
	player: Janken;
}

export interface PlayResponse {
	gameId: string;
	player: Janken;
	opponent: Janken;
}
