import CategoryTypeProps from './Category.props';
import styles from './Category.module.scss';

function Category({ count, description, series }: CategoryTypeProps) {
  return (
    <div className={styles.category}>
      <p className={styles.series}>{series}</p>
      <p className={styles.description}>
        {description}
        <span>{count}</span>
      </p>
    </div>
  );
}

export default Category;
