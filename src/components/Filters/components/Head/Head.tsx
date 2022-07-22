import styles from './Head.module.scss';
import { ReactComponent as SettingIcon } from '../../icon/setting-icon.svg';

function Head() {
  return (
    <div className={styles.head}>
      <SettingIcon />
      <h2>Фильтры</h2>
    </div>
  );
}

export default Head;
