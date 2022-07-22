import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import styles from './Grid.module.scss';

interface GridProps {
  // eslint-disable-next-line react/require-default-props
  className?: string;
}

function Grid({ className, children }: PropsWithChildren<GridProps>) {
  return (
    <div className={classNames(className, styles.grid)}>
      {children}
    </div>
  );
}

export default Grid;
