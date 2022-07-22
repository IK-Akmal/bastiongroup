import { ReactNode, ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonTypeProps extends
  Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'type'> {
  type?: 'primary' | 'ghost' | 'standard' | 'outline-primary';
  htmlType?: 'submit' | 'button' | 'reset';
  icon?: ReactNode;
}

export default ButtonTypeProps;
