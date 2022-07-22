import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import Button from '../../../Button/Button';
import styles from './ResetBtn.module.scss';
import ResetBtnProps from './ResetBtn.props';

function ResetBtn({
  children, className, type, ...props
}: PropsWithChildren<ResetBtnProps>) {
  return (
    <div className={styles.wrapper}>
      <Button className={classNames(styles.btnReset, className)} {...props}>
        {children}
      </Button>
    </div>
  );
}

export default ResetBtn;
