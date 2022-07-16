import classNames from 'classnames';
import HeaderTypeProps from './Header.props';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';

function Header({ className, ...props }: HeaderTypeProps) {
  return (
    <header className={classNames(className, styles.header)} {...props}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
}

export default Header;
