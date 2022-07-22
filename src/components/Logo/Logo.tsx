import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
import LogoSmall from './img/Logo-1x.png';
import LogoMedium from './img/Logo-2x.png';

function Logo() {
  return (
    <Link to="/">
      <div className={styles.logo}>
        <img
          className={styles.img}
          src={LogoSmall}
          alt="logo"
          srcSet={`${LogoSmall} 1x, ${LogoMedium} 2x`}
        />
        <h1 className={styles.text}>
          Производитель металлических изделий №1
        </h1>
      </div>
    </Link>
  );
}

export default Logo;
