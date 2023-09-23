import { QueryClient } from "@tanstack/react-query";
import styled from "styled-components";

import { CharacterItem } from "@/components";
import { useCharactersQuery, charactersQuery } from "@/hooks";
import { characterService } from "@/services";

const Home = () => {
  const { characters, isLoading } = useCharactersQuery(characterService);

  return (
    <Container>
      {characters?.slice(0, 100).map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </Container>
  );
};

export const loader = (queryClient: QueryClient) => async () => {
  const query = charactersQuery({ service: characterService });
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

export default Home;
