/* eslint-disable react/require-default-props */
import classNames from 'classnames';
import { memo } from 'react';
import Button from '../../../Button/Button';
import styles from './ControlPanel.module.scss';

import { ReactComponent as TrashIcon } from '../trash.svg';

interface ControlPanelProps {
  className?: string;
  onClick?: () => void
}

function ControlPanel({ className, onClick }: ControlPanelProps) {
  return (
    <div className={classNames(className, styles.controlpanel)}>
      <Button className={styles.btn} onClick={onClick} icon={<TrashIcon />}>
        Очистить корзину
      </Button>
    </div>
  );
}

export default memo(ControlPanel);
