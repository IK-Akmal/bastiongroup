import { ForwardedRef, forwardRef } from 'react';
import FilterToggleProps from './FilterToggle.props';
import styles from './FilterToggle.module.scss';

function FilterToggle({ value, ...props }: FilterToggleProps, ref:ForwardedRef<HTMLInputElement>) {
  return (
    <label className={styles.container}>
      <input ref={ref} value={value} type="checkbox" {...props} />
      <span>{value}</span>
    </label>
  );
}

export default forwardRef<HTMLInputElement, FilterToggleProps>(FilterToggle);
