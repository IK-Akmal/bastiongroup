import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

interface SearchTypeProps extends
  Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'prefix'> {
  prefix?: ReactNode;
  suffix?:ReactNode;
}

export default SearchTypeProps;
