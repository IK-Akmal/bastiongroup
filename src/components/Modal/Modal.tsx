/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { MouseEvent, PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Modal.module.scss';
import ModalProps from './Modal.props';

import { ReactComponent as CloseIcon } from './close-icon.svg';

function Modal({
  onClose, title, visible, children,
}: PropsWithChildren<ModalProps>) {
  const handleCloseModal = (event:MouseEvent<SVGSVGElement, globalThis.MouseEvent>) => {
    event.stopPropagation();
    onClose();
  };

  return (
    <div
      className={classNames(styles.blackDrop, {
        [styles.show]: visible,
      })}
      onClick={onClose}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.head}>
          <h2 className={styles.title}>{title}</h2>
          <CloseIcon className={styles.icon} onClick={handleCloseModal} />
        </div>
        <div className={styles.body}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
