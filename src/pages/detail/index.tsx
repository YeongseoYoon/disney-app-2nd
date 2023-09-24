import { QueryClient } from "@tanstack/react-query";
import { LoaderFunctionArgs, useParams } from "react-router-dom";
import styled from "styled-components";

import { characterQuery, useCharacterQuery } from "@/hooks";
import { characterService } from "@/services";

const Detail = () => {
  const { id } = useParams() as { id: string };
  const { character, isLoading } = useCharacterQuery(characterService, id);

  return (
    <Container>
      <Image src={character?.imageUrl} />
      <Title>{character?.name}'s Films'</Title>
      <Wrapper>
        {character?.films?.map((film) => (
          <Film key={`${character.id}-${film}`}>{film}</Film>
        ))}
      </Wrapper>
    </Container>
  );
};

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    const query = characterQuery({
      service: characterService,
      id: params.id as string,
    });
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  flex-wrap: wrap;
`;

const Film = styled.div`
  display: inline-block;
  background-color: white;
  color: black;
  border-radius: 5px;
  padding: 3px;
  margin: 10px;
`;

const Title = styled.h1`
  font-size: 30px;
  margin: 20px 0px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 10px;
`;

export default Detail;
