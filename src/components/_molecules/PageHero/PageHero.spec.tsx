import { render, screen } from '@testing-library/react';
import { PageHero } from './PageHero';

describe('PageHero', () => {
  it('renders the page hero with text', () => {
    render(<PageHero text="test" />);

    expect(screen.getByText('test')).toBeTruthy();
  });

  it('renders the page hero with back component', () => {
    render(<PageHero text="test" back="hello!" />);

    expect(screen.getByText('hello!')).toBeTruthy();
  });
});
