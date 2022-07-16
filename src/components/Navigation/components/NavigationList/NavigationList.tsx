import { Link } from 'react-router-dom';
import styles from './NavigationList.module.scss';

function NavigationList() {
  return (
    <ul className={styles.navList}>
      <li className={styles.navLink}>
        <Link to="/">Типы продуктов</Link>
      </li>
      <li className={styles.navLink}>
        <Link to="/">Продукты</Link>
      </li>
    </ul>
  );
}

export default NavigationList;
