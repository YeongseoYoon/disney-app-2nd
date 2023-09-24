import { useQuery } from "@tanstack/react-query";
import { CharacterService } from "@/services";

interface CharacterQueryProps {
  service: CharacterService;
  id: string;
}

export const characterQuery = ({ service, id }: CharacterQueryProps) => ({
  queryKey: ["character", id],
  queryFn: () => service.fetchCharacter(id),
  refetchOnWindowFocus: false,
});

const useCharacterQuery = (service: CharacterService, id: string) => {
  const { data: character, isLoading } = useQuery<CharacterDetail>(
    characterQuery({ service, id })
  );

  return { character, isLoading };
};

export default useCharacterQuery;
