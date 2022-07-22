import Categories from '../Categories/Categories';
import Filters from '../Filters/Filters';
import styles from './Aside.module.scss';

function Aside() {
  return (
    <aside className={styles.aside}>
      <Categories />
      <Filters />
    </aside>
  );
}

export default Aside;
