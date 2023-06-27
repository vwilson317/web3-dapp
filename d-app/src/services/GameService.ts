import { IGame } from "../components/Game/IGame";
import ApiService from "./ApiService";

export default class GameService extends ApiService {

    async getAsync(userId: number): Promise<IGame[]> {
        return this.get<IGame[]>(`/games/users/${userId}`);
    }

    async createAsync(userId: number, title: string): Promise<IGame> {
        const game: IGame = {
            title,
        } as IGame;
        return this.post<IGame>(`/games/users/${userId}`, game);
    }
}