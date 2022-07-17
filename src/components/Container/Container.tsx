import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Container.module.scss';
import ContainerTypeProps from './Container.props';

function Container({ children, className, ...props }: PropsWithChildren<ContainerTypeProps>) {
  return (
    <div className={classNames(className, styles.container)} {...props}>{children}</div>
  );
}

export default Container;
