import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface SwitchTypeProps extends
  Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {

}

export default SwitchTypeProps;
