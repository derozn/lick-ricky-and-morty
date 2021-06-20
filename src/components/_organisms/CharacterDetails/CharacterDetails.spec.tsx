import { render, screen } from '@testing-library/react';
import { CharacterDetails } from './CharacterDetails';

const mockedCharacterDetailsData = {
  id: 0,
  name: 'rick',
  status: 'alive',
  species: 'human',
  gender: 'test',
  avatar: '/fake-url',
  location: {
    id: 0,
    name: 'loc',
    type: 'test',
    noOfResidents: 1,
    dimension: 'world',
  },
  episodes: [
    {
      id: 0,
      name: 'episode',
      airDate: 'june',
      noOfCharacters: 1,
      episode: 'cool',
    },
    {
      id: 1,
      name: 'fun',
      airDate: 'july',
      noOfCharacters: 2,
      episode: 'yey',
    },
  ],
  origin: 'origin',
  totalEpisodeCount: 1,
};

describe('CharacterDetails', () => {
  it('renders bio', () => {
    render(<CharacterDetails character={mockedCharacterDetailsData} />);

    expect(screen.getByAltText('rick')).toBeTruthy();
    expect(screen.getByText('rick')).toBeTruthy();
    expect(screen.getByText('Status: alive')).toBeTruthy();
    expect(screen.getByText('Origin: origin')).toBeTruthy();
  });

  it('render location', () => {
    render(<CharacterDetails character={mockedCharacterDetailsData} />);

    expect(screen.getByText('Location Details:')).toBeTruthy();
    expect(screen.getByText('Name: loc')).toBeTruthy();
    expect(screen.getByText('Type: test')).toBeTruthy();
    expect(screen.getByText('Dimension: world')).toBeTruthy();
    expect(screen.getByText('No. of residents: 1')).toBeTruthy();
  });

  it('render Episodes', () => {
    render(<CharacterDetails character={mockedCharacterDetailsData} />);

    expect(screen.getByText('Episodes (1)')).toBeTruthy();
    expect(screen.getByText('First appearance: episode')).toBeTruthy();
    expect(screen.getByText('First appearance air date: june')).toBeTruthy();
    expect(screen.getByText('First appearance character count: 1')).toBeTruthy();

    expect(screen.getByText('Last appearance: fun')).toBeTruthy();
    expect(screen.getByText('Last appearance air date: july')).toBeTruthy();
    expect(screen.getByText('Last appearance character count: 2')).toBeTruthy();
  });
});
