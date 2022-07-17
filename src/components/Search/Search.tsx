import classNames from 'classnames';
import styles from './Search.module.scss';
import SearchTypeProps from './Search.props';

function Search({
  className, prefix, suffix, ...props
}: SearchTypeProps) {
  return (
    <div className={classNames(className, styles.wrapper)}>
      {prefix}
      <input type="search" className={styles.input} {...props} />
      {suffix}
    </div>
  );
}

export default Search;
