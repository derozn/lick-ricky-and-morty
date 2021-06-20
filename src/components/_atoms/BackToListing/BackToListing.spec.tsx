import { render, screen } from '@testing-library/react';
import { BackToListing } from './BackToListing';

describe('BackToListing', () => {
  it('renders link', () => {
    render(<BackToListing />);

    expect(screen.getByText('< Back to listing')).toBeTruthy();
  });
});
