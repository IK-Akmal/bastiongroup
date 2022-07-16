import React from 'react';
import styles from './Contact.module.scss';

import { ReactComponent as PhoneIcon } from './icons/phone-icon.svg';
import { ReactComponent as LocalIcon } from './icons/local-icon.svg';
import { ReactComponent as MailIcon } from './icons/mail-icon.svg';
import { ReactComponent as DownIcon } from './icons/down-icon.svg';

function Contact() {
  return (
    <div className={styles.contact}>
      <a href="tel:+74993807890">
        <PhoneIcon />
        {' '}
        +7 (499) 380-78-90
      </a>
      <span>
        <LocalIcon />
        {' '}
        Москва
        {' '}
        <DownIcon />
        {' '}
      </span>

      <a href="mailto:info@bastion.pro">
        <MailIcon />
        {' '}
        info@bastion.pro
      </a>

    </div>
  );
}

export default Contact;
