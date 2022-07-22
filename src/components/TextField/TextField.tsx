import { ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './TextField.module.scss';
import TextFieldProps from './TextField.props';

function TextField({
  className, value, error = false, errorMessage, label, prefix, onChange, ...props
}: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) {
  return (
    <label className={classNames(styles.label, className)}>
      {label && <span className={styles.caption}>{label}</span>}
      <div className={styles.wrapper}>
        <span className={styles.prefix}>{prefix}</span>
        <input
          data-testid="input"
          prefix="от"
          ref={ref}
          className={classNames(
            styles.textField,
            {
              [styles.error]: error === true,
            },
          )}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
      {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
    </label>
  );
}

TextField.displayName = 'TextField';

export default forwardRef<HTMLInputElement, TextFieldProps>(TextField);
