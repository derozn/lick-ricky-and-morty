import { render, screen } from '@testing-library/react';
import { CharacterCard } from './CharacterCard';

const mockedCharacterData = {
  id: 0,
  name: 'rick',
  status: 'alive',
  species: 'human',
  gender: 'test',
  avatar: '/fake-url',
};

describe('CharacterCard', () => {
  it('renders image', () => {
    render(<CharacterCard {...mockedCharacterData} />);

    expect(screen.getByAltText('rick')).toBeTruthy();
  });

  it('renders attributes', () => {
    render(<CharacterCard {...mockedCharacterData} />);

    expect(screen.getByText('Name: rick')).toBeTruthy();
    expect(screen.getByText('Gender: test')).toBeTruthy();
    expect(screen.getByText('Species: human')).toBeTruthy();
  });

  it('renders button', () => {
    render(<CharacterCard {...mockedCharacterData} />);

    expect(screen.getByText('View Profile')).toBeTruthy();
  });
});
