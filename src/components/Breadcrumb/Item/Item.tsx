import { PropsWithChildren } from 'react';
import styles from './Item.module.scss';

function Item({ children }: PropsWithChildren) {
  return (
    <span className={styles.item}>{children}</span>
  );
}

export default Item;
