import { Outlet } from 'react-router-dom';
import { ReactNotifications } from 'react-notifications-component';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import styles from './Layout.module.scss';
import 'react-notifications-component/dist/theme.css';

function Layout() {
  return (
    <>
      <ReactNotifications />
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
