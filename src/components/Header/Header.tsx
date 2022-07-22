import classNames from 'classnames';
import HeaderTypeProps from './Header.props';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import Controls from '../Controls/Controls';

function Header({ className, ...props }: HeaderTypeProps) {
  return (
    <header className={classNames(className, styles.header)} {...props}>
      <Navigation />
      <Controls />
    </header>
  );
}

export default Header;
