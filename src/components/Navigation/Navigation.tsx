import Container from '../Container/Container';
import Contact from './components/Contact/Contact';
import NavigationList from './components/NavigationList/NavigationList';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <Container>
      <nav className={styles.nav}>
        <NavigationList />
        <Contact />
      </nav>
    </Container>
  );
}

export default Navigation;
