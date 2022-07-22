import classNames from 'classnames';
import { PropsWithChildren, useReducer } from 'react';
import styles from './Accordion.module.scss';
import AccordionTypeProps from './Accordion.props';
import { ReactComponent as ArrowUpIcon } from './Up.svg';

function Accordion({
  name, prefix, suffix, defaultState = 'open', children,
}: PropsWithChildren<AccordionTypeProps>) {
  const [open, setOpen] = useReducer((value) => !value, defaultState === 'open');

  return (
    <div className={classNames(styles.accordion, { [styles.accordionActive]: open })}>
      <button
        type="button"
        className={styles.accordionControl}
        onClick={setOpen}
      >
        <div className={styles.title}>
          {prefix}
          <span>{name}</span>
          {suffix}
        </div>
        <ArrowUpIcon className={styles.icon} />
      </button>
      <div className={styles.accordionContent}>
        {children}
      </div>
    </div>
  );
}

export default Accordion;
