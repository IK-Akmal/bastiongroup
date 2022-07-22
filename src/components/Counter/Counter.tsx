import classNames from 'classnames';
import { KeyboardEvent } from 'react';
import CounterProps from './Counter.props';
import styles from './Counter.module.scss';

function Counter({ className, onChange, value }: CounterProps) {
  const increment = () => {
    onChange(value + 1);
  };
  const decrement = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  const handleKeyDownIncrement = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'Enter') {
      increment();
    }
  };
  const handleKeyDownDecrement = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'Enter') {
      decrement();
    }
  };

  const handleChange = (arg: string) => {
    const count = Number(arg);

    if (count < 1) {
      onChange(1);
    } else {
      onChange(count);
    }
  };

  return (
    <div className={classNames(styles.wrapper, className)}>
      <span
        tabIndex={0}
        role="button"
        onClick={increment}
        className={styles.plus}
        onKeyDown={handleKeyDownIncrement}
      >
        +
      </span>

      <input
        min="1"
        step="1"
        type="number"
        value={value}
        className={styles.input}
        onChange={(e) => handleChange(e.target.value)}
      />

      <span
        tabIndex={0}
        role="button"
        onClick={decrement}
        className={styles.minus}
        onKeyDown={handleKeyDownDecrement}
      >
        -
      </span>
    </div>
  );
}

export default Counter;
