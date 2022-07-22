import classNames from 'classnames';
import BasketTypeProps from './Basket.props';
import styles from './Basket.module.scss';
import { ReactComponent as StarIcon } from './basket-icon.svg';

function Basket({ className }: BasketTypeProps) {
  return (
    <div className={classNames(className, styles.wrapper)}>
      <StarIcon />
      <span>Избранное</span>
    </div>
  );
}

export default Basket;
