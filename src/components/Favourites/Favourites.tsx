import classNames from 'classnames';
import FavouritesTypeProps from './Favourites.props';
import styles from './Favourites.module.scss';
import { ReactComponent as StarIcon } from './star-icon.svg';

function Favourites({ className }: FavouritesTypeProps) {
  return (
    <div className={classNames(className, styles.wrapper)}>
      <StarIcon />
      <span>Избранное</span>
    </div>
  );
}

export default Favourites;
