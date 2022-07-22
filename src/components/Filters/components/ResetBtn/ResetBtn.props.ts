import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ResetBtnProps extends
  Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'type'> {
  type?: 'primary' | 'ghost' | 'standard';
  htmlType?: 'submit' | 'button' | 'reset';
}

export default ResetBtnProps;
