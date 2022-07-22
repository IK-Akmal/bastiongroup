import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  icon?: ReactNode;
  label?: string;
  errorMessage?: string;
}

export default InputProps;
