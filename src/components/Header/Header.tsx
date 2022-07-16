import React from 'react';
import classNames from 'classnames';
import HeaderTypeProps from './Header.props';
import styles from './Header.module.scss';

function Header({ className, ...props }: HeaderTypeProps) {
  return (
    <header className={classNames(className, styles.header)} {...props}>
      Header
    </header>
  );
}

export default Header;
