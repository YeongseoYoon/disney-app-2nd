import { HttpClient } from "@/apis";

export class CharacterService {
  constructor(private httpClient: HttpClient) {}

  public fetchCharacterData: () => Promise<Character[]> = async () => {
    return await this.httpClient.get("/characters");
  };
}
