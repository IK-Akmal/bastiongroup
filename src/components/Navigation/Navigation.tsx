import Contact from './components/Contact/Contact';
import NavigationList from './components/NavigationList/NavigationList';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavigationList />
      <Contact />
    </nav>
  );
}

export default Navigation;
