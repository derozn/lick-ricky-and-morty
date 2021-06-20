import { NextApiRequest, NextApiResponse } from 'next';
import { request } from '@/lib/request';
import { config } from '@/config';

const { RICK_AND_MORTY_CHARACTER_ENDPOINT } = config;

export const formatResponse = (response: RMApi.Characters.IResponse): LickApi.ICharacterCore[] => {
  const { results } = response;

  return results.map((character) => ({
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    gender: character.gender,
    avatar: character.image,
  }));
};

export const charactersController = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name = 'rick', status = 'alive' } = req.query;

  try {
    const response = await request<RMApi.Characters.IResponse>(RICK_AND_MORTY_CHARACTER_ENDPOINT, {
      query: { name, status },
    });

    const formattedResponse = formatResponse(response);

    res.status(200).json({
      status: 'ok',
      data: formattedResponse,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      errors: [
        {
          message: `Failed to retrieve character ${name}. Make sure you're requesting a real character.`,
        },
      ],
    });
  }
};
