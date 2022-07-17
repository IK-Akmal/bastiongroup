import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import styles from './Controls.module.scss';

function Controls() {
  return (
    <div className={styles.controls}>
      <Container className={styles.container}>
        <Logo />
      </Container>
    </div>
  );
}

export default Controls;
