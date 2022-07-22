import classNames from 'classnames';
import Button from '../Button/Button';
import Container from '../Container/Container';
import Input from '../Input/Input';
import Space from '../Space/Space';
import styles from './Footer.module.scss';
import FooterTypeProps from './Footer.props';

import { ReactComponent as FooterLogo } from './footer-logo.svg';

function Footer({ className, ...props }: FooterTypeProps) {
  return (
    <footer className={classNames(className, styles.footer)} {...props}>

      <Container className={styles.feedbackWrapper}>
        <div className={styles.feedback}>
          <Input label="Ваше имя" />
          <Input label="Ваш телефон" />
          <Space direction="column" gap={10}>
            <Button type="primary" htmlType="button">Заказать звонок</Button>
            <span className={styles.privacyPolicy}>
              Нажимая на кнопку вы соглашаетесь с политикой конфиденциальности
            </span>
          </Space>
        </div>
      </Container>
      <Container>
        <div className={styles.footerAbout}>
          <FooterLogo />
          <p>
            Металлаконструции
            <br />
            Порошковая покраска
          </p>
          <p>
            Фасадные конструкции
            <br />
            Светопрозрачные конструкции
          </p>
          <div className={styles.contact}>
            <a className={styles.phone} href="tel:+74993807890">+7 (499) 380-78-90</a>
            <a className={styles.mail} href="mailto:info@bastion.pro">info@bastion.pro</a>
          </div>
        </div>
        <div />

        <div className={styles.copyright}>
          <p>&copy; 2022 Все права защищены | Политика конфиденциальности</p>
        </div>
      </Container>

    </footer>
  );
}

export default Footer;
