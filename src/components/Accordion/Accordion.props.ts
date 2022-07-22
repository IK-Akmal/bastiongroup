import { ReactNode } from 'react';

interface AccordionTypeProps {
  name: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  defaultState?: 'close' | 'open';
}

export default AccordionTypeProps;
