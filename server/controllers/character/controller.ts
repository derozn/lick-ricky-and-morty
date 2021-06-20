import { NextApiRequest, NextApiResponse } from 'next';
import { request } from '@/lib/request';
import { config } from '@/config';
import { getFirstAndLastItem } from '@/lib/getFirstAndLastItem';

const { RICK_AND_MORTY_CHARACTER_ENDPOINT } = config;

export const formatResponse = (
  character: RMApi.Character.IResponse,
  location: RMApi.Location.IResponse,
  episodes: RMApi.Episode.IResponse[],
): LickApi.ICharacter => ({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
  avatar: character.image,
  origin: character.origin.name,
  location: {
    id: location.id,
    name: location.name,
    type: location.type,
    noOfResidents: location.residents.length,
    dimension: location.dimension,
  },
  totalEpisodeCount: character.episode.length,
  episodes: episodes.map((episode) => ({
    id: episode.id,
    name: episode.name,
    airDate: episode.air_date,
    noOfCharacters: episode.characters.length,
    episode: episode.episode,
  })),
});

export const characterController = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  try {
    const characterResponse = await request<RMApi.Character.IResponse>(
      `${RICK_AND_MORTY_CHARACTER_ENDPOINT}/${id}`,
    );

    const { location, episode } = characterResponse;

    const episodesToFetch = getFirstAndLastItem<string>(episode);

    const episodesResponse = await Promise.all(
      episodesToFetch.map((url: string) => request<RMApi.Episode.IResponse>(url)),
    );

    const locationResponse = await request<RMApi.Location.IResponse>(location.url);

    const formattedResponse = formatResponse(characterResponse, locationResponse, episodesResponse);

    res.status(200).json({
      status: 'ok',
      data: formattedResponse,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      errors: [
        {
          message: `Failed to retrieve character ${id}. Make sure you're requesting a real character.`,
        },
      ],
    });
  }
};
