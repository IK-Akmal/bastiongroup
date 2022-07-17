import { ReactNode, ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonTypeProps extends
  Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'type'> {
  type?: 'primary' | 'ghost';
  htmlType?: 'submit' | 'button' | 'reset';
  icon?: ReactNode;
}

export default ButtonTypeProps;
