import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface BackButtonTypeProps extends
  Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'type'> {
}

export default BackButtonTypeProps;
