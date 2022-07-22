import classNames from 'classnames';
import { Link } from 'react-router-dom';
import BasketTypeProps from './Basket.props';
import styles from './Basket.module.scss';
import { ReactComponent as StarIcon } from './basket-icon.svg';
import { useAppSelector } from '../../hooks/redux';

function Basket({ className }: BasketTypeProps) {
  const { products } = useAppSelector((select) => select.BasketReducer);
  const count = Object.values(products).reduce((sum, b) => sum + b.count, 0);
  return (
    <Link to="/basket">
      <div className={classNames(className, styles.wrapper)}>
        <StarIcon />
        <span>Избранное</span>
        <span className={styles.count}>{count}</span>
      </div>
    </Link>
  );
}

export default Basket;
