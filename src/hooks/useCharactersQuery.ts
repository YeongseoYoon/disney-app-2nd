import { useQuery } from "@tanstack/react-query";
import { CharacterService } from "@/services";

interface CharacterQueryProps {
  service: CharacterService;
}

export const charactersQuery = ({ service }: CharacterQueryProps) => ({
  queryKey: ["characters"],
  queryFn: () => service.fetchCharacters(),
  refetchOnWindowFocus: false,
});

const useCharactersQuery = (service: CharacterService) => {
  const { data: characters, isLoading } = useQuery<Character[]>(
    charactersQuery({ service })
  );

  return { characters, isLoading };
};

export default useCharactersQuery;
