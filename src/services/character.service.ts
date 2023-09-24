import { HttpClient, httpclient } from "@/apis";
export class CharacterService {
  constructor(private httpClient: HttpClient) {}

  public async fetchCharacters(): Promise<Character[]> {
    return await this.httpClient.get("/characters");
  }

  public async fetchCharacter(id: string): Promise<CharacterDetail> {
    return await this.httpClient.get(`/characters/${id}`);
  }
}

export const characterService = new CharacterService(httpclient);
