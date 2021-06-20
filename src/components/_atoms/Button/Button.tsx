import { FC } from 'react';
import { StyledButton } from './Button.styles';

interface IButton {
  onClick?: () => void;
}
export const Button: FC<IButton> = ({ children, onClick, ...rest }) => (
  <StyledButton onClick={onClick} {...rest}>
    {children}
  </StyledButton>
);
