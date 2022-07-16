import React from 'react';
import classNames from 'classnames';
import styles from './Footer.module.scss';
import FooterTypeProps from './Footer.props';

function Footer({ className, ...props }: FooterTypeProps) {
  return (
    <footer className={classNames(className, styles.footer)} {...props}>
      Footer
    </footer>
  );
}

export default Footer;
