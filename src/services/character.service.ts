import { HttpClient, httpclient } from "@/apis";
export class CharacterService {
  constructor(private httpClient: HttpClient) {}

  public async fetchCharacters(): Promise<Character[]> {
    return await this.httpClient.get("/characters");
  }
}

export const characterService = new CharacterService(httpclient);
