import classNames from 'classnames';
import { memo } from 'react';
import styles from './ErrorMessagePanel.module.scss';

import { ReactComponent as AlertIcon } from './alert-icon.svg';

interface ErrorMessagePanelRrops {
  // eslint-disable-next-line react/require-default-props
  className?: string
}

function ErrorMessagePanel({ className }: ErrorMessagePanelRrops) {
  return (
    <div className={classNames(className, styles.error)}>
      <AlertIcon />
      <p>
        Извините, но указанное  ранее количество товара недоступно.
        Установлено ближайшее доступное значение.
      </p>
    </div>
  );
}

export default memo(ErrorMessagePanel);
