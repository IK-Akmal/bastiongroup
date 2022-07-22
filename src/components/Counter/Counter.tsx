import classNames from 'classnames';
import { KeyboardEvent, useState } from 'react';
import CounterProps from './Counter.props';
import styles from './Counter.module.scss';

function Counter({ className, onChange, value = 1 }: CounterProps) {
  const [state, setState] = useState<number>(value);

  const increment = () => {
    setState(state + 1);
    onChange?.(state);
  };
  const decrement = () => {
    if (state > 1) {
      setState(state - 1);
      onChange(state);
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
      setState(1);
      onChange(1);
    } else {
      setState(count);
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
        value={state}
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
