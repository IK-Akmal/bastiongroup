import { ChangeEventHandler, ForwardedRef, forwardRef } from 'react';
import { Checkbox as CheckBoxField } from 'pretty-checkbox-react';
import classNames from 'classnames';
import styles from './CheckBox.module.scss';

import '@djthoms/pretty-checkbox';

type CheckBoxProps = {
  label: string
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
};

function CheckBox({ label, checked, onChange }:
CheckBoxProps, ref: ForwardedRef<HTMLInputElement>) {
  return (
    <div className={styles.checkbox}>
      <CheckBoxField ref={ref} color="danger" shape="curve" checked={checked} onChange={onChange} />
      <span className={classNames(styles.label, { [styles.active]: checked })}>
        {label}
      </span>
    </div>
  );
}

export default forwardRef(CheckBox);
