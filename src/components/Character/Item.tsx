import { Link } from "react-router-dom";
import styled from "styled-components";

interface CharacterItemProps {
  character: Character;
}

const CharacterItem = ({ character }: CharacterItemProps) => {
  return (
    <Wrapper>
      <Link to={`character/${character.id}`}>
        <Image src={character.imageUrl} />
        <div>{character.name}</div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  &:hover {
    cursor: pointer;
    border-radius: 10px;
    background-color: white;
    color: black;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px;
`;

export default CharacterItem;
