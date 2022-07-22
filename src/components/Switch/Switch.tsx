import classNames from 'classnames';
import styles from './Switch.module.scss';
import { ReactComponent as ListIcon } from './icon/list-top-icon.svg';
import { ReactComponent as ApplicationIcon } from './icon/all-application-icon.svg';
import SwitchTypeProps from './Switch.props';

function Switch({ className, ...props }: SwitchTypeProps) {
  return (
    <div className={classNames(className, styles.switch)}>
      <input type="checkbox" {...props} />
      <ApplicationIcon className={styles.aplicationIcon} />
      <div className={styles.block} />
      <ListIcon className={styles.listIcon} />
    </div>
  );
}

export default Switch;
