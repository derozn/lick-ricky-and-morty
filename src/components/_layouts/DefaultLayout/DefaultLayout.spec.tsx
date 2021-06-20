import { render, screen } from '@testing-library/react';
import { DefaultLayout } from './DefaultLayout';

describe('DefaultLayout', () => {
  it('renders <main />', () => {
    render(<DefaultLayout />);

    expect(screen.getByRole('main')).toBeTruthy();
  });

  it('renders children', () => {
    render(<DefaultLayout>test!</DefaultLayout>);

    expect(screen.getByText('test!')).toBeTruthy();
  });
});
