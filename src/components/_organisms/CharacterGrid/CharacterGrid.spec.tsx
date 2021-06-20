import { render, screen } from '@testing-library/react';
import { CharacterGrid } from './CharacterGrid';

const mockedCharactersData = [
  {
    id: 0,
    name: 'rick',
    status: 'alive',
    species: 'human',
    gender: 'rick',
    avatar: '/fake-url',
  },
  {
    id: 1,
    name: 'morty',
    status: 'alive',
    species: 'human',
    gender: 'morty',
    avatar: '/fake-url-morty',
  },
];

describe('CharacterGrid', () => {
  it('renders a grid of CharacterCards', () => {
    render(<CharacterGrid characters={mockedCharactersData} />);

    expect(screen.getByText('Name: rick')).toBeTruthy();
    expect(screen.getByText('Name: morty')).toBeTruthy();
  });
});
