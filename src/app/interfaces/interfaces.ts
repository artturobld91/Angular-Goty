export interface Game {
    id: string;
    name: string;
    url: string;
    votes: number;
}

export interface GetGamesResponse {
    ok: boolean;
    games: Game[];
}