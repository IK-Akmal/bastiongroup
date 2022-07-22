import styles from './Contact.module.scss';

import { ReactComponent as PhoneIcon } from './icons/phone-icon.svg';
import { ReactComponent as LocalIcon } from './icons/local-icon.svg';
import { ReactComponent as MailIcon } from './icons/mail-icon.svg';

function Contact() {
  return (
    <div className={styles.contact}>
      <a className={styles.phoneNumber} href="tel:+74993807890">
        <PhoneIcon />
        <span>+7 (499) 380-78-90</span>
      </a>
      <span className={styles.local}>
        <LocalIcon />
        <select className={styles.select} name="cities" id="cities">
          <option defaultValue="Москва" value="Москва">Москва</option>
          <option value="Санкт-Петербург">Санкт-Петербург</option>
          <option value="Екатеринбург">Екатеринбург</option>
        </select>
      </span>
      <a className={styles.mail} href="mailto:info@bastion.pro">
        <MailIcon />
        <span>info@bastion.pro</span>
      </a>

    </div>
  );
}

export default Contact;
