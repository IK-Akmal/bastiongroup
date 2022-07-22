import classNames from 'classnames';
import TagProps from './Tag.props';
import styles from './Tag.module.scss';

function Tag({ type }: TagProps) {
  let title: string = '';
  switch (type) {
    case 'discount':
      title = 'скидка';
      break;
    case 'hit':
      title = 'хит';
      break;
    case 'stock':
      title = 'акция';
      break;

    default:
      title = '';
      break;
  }
  return (
    <div
      className={classNames(styles.tag, {
        [styles.hit]: type === 'hit',
        [styles.stock]: type === 'stock',
        [styles.discount]: type === 'discount',
      })}
    >
      {title}
    </div>
  );
}

export default Tag;
