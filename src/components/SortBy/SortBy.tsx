import styles from './SortBy.module.scss';
import { ReactComponent as SortIcon } from './sort-one-icon.svg';

function SortBy() {
  return (
    <div className={styles.sortBy}>
      <span>Сначала популярные</span>
      <SortIcon />
    </div>
  );
}

export default SortBy;
