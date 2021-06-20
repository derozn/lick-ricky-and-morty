import { render, screen } from '@testing-library/react';
import { ProfileImage } from './ProfileImage';

describe('ProfileImage', () => {
  it('renders image', () => {
    render(<ProfileImage src="/fake" alt="some alt" />);

    expect(screen.getByAltText('some alt')).toBeTruthy();
  });
});
