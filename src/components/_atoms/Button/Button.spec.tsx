import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders Button', () => {
    render(<Button />);

    expect(screen.getByRole('button')).toBeTruthy();
  });

  it('renders children', () => {
    render(<Button>test!</Button>);

    expect(screen.getByText('test!')).toBeTruthy();
  });

  it('calls onClick when clicked', () => {
    const mockedOnClick = jest.fn();

    render(<Button onClick={mockedOnClick}>test!</Button>);

    const button = screen.getByText('test!');

    fireEvent.click(button);

    expect(mockedOnClick).toHaveBeenCalledTimes(1);
  });
});
