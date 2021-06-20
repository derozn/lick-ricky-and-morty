import { FC, forwardRef } from 'react';
import { StyledButton } from './Button.styles';

interface IButton {
  onClick?: () => void;
}
export const Button: FC<IButton> = forwardRef(({ children, onClick, ...rest }, ref) => (
  <StyledButton ref={ref as any} onClick={onClick} {...rest}>
    {children}
  </StyledButton>
));
