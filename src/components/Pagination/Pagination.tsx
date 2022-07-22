import styles from './Pagination.module.scss';
import { ReactComponent as ArrowLeftIcon } from './icon/arrow-left.svg';
import { ReactComponent as ArrowRigthIcon } from './icon/arrow-rigth.svg';

function Pagination() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.output}>
        <p>Выводить по</p>
        <span role="button" className={styles.active}>9</span>
        <span role="button">15</span>
        <span role="button">21</span>
      </div>
      <div className={styles.pagination}>
        <div className={styles.prePage}>
          <ArrowLeftIcon />
        </div>
        <div role="button" className={styles.currentPage}>1</div>
        <div role="button">2</div>
        <div role="button">3</div>
        <div role="button">4</div>
        <div role="button">5</div>
        <div className={styles.nextPage}>
          <ArrowRigthIcon />
        </div>
      </div>
      <span>Показать все товары</span>
    </div>
  );
}

export default Pagination;
