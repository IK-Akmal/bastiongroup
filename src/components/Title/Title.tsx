import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import styles from './Title.module.scss';
import TitleTypeProps from './Title.props';

function Title({ variant = 'h1', className, children }: PropsWithChildren<TitleTypeProps>) {
  const Tag = `${variant}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={classNames(className, styles.title)}>{children}</Tag>
  );
}

export default Title;
