import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import styles from './Space.module.scss';
import SpacePropsType from './Space.props';

function Space({
  align, direction = 'row', gap, children,
}: PropsWithChildren<SpacePropsType>) {
  return (
    <div
      className={classNames(styles.space)}
      style={
        {
          alignItems: align,
          flexDirection: direction,
          gap,
        }
    }
    >
      {children}
    </div>
  );
}

export default Space;
