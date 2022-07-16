import React from 'react';
import HeaderTypeProps from './Header.props';

function Header({ className, ...props }: HeaderTypeProps) {
  return (
    <header className='' {...props}>
      Header
    </header>
  );
}

export default Header;
