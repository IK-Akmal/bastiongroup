import { PropsWithChildren } from 'react';
import styles from './Body.module.scss';

function Body({ children }: PropsWithChildren) {
  return (
    <div className={styles.body}>
      {children}
    </div>
  );
}

export default Body;
