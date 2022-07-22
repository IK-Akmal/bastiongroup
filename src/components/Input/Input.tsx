import { ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';
import InputProps from './Input.props';
import styles from './Input.module.scss';

function Input({
  className, icon, errorMessage, label, ...props
}: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  const isIcon = icon !== undefined;
  return (
    <>
      <div className={classNames(styles.wrapper, {
        [styles.InputWithoutIcon]: !isIcon,
      })}
      >
        <input ref={ref} className={classNames(className, styles.input)} required {...props} />
        <span className={styles.icon}>{icon}</span>
        <span className={styles.label}>{label}</span>
      </div>
      {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
    </>
  );
}

export default forwardRef(Input);
