import { render, screen } from '@testing-library/react';
import { PageHero } from './PageHero';

describe('PageHero', () => {
  it('renders the page hero with text', () => {
    render(<PageHero text="test" />);

    expect(screen.getByText('test')).toBeTruthy();
  });
});
