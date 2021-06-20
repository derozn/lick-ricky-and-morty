import { render, screen } from '@testing-library/react';
import { HeroAndContent } from './HeroAndContent';

describe('HeroAndContent', () => {
  it('renders hero and content', () => {
    render(<HeroAndContent hero="hero" content="content" />);

    expect(screen.getByText('hero')).toBeTruthy();
    expect(screen.getByText('content')).toBeTruthy();
  });
});
