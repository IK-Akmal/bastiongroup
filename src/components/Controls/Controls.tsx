import Basket from '../Basket/Basket';
import Button from '../Button/Button';
import Container from '../Container/Container';
import Favourites from '../Favourites/Favourites';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import styles from './Controls.module.scss';
import { ReactComponent as ApplicationIcon } from './svg/all-application.svg';
import { ReactComponent as EnterIcon } from './svg/enter-icon.svg';
import { ReactComponent as SearchIcon } from './svg/search-icon.svg';

function Controls() {
  return (
    <section className={styles.controls}>
      <Container className={styles.container}>
        <Logo />
        <Button type="primary" htmlType="button" icon={<ApplicationIcon />}>Каталог</Button>
        <Search className={styles.search} prefix={<SearchIcon />} suffix={<EnterIcon />} placeholder="Поиск по названию..." />
        <div className={styles.wrapper}>
          <Favourites />
          <Basket />
        </div>
      </Container>
    </section>
  );
}

export default Controls;
