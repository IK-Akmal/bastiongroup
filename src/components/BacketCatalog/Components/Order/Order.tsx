import classNames from 'classnames';
import { useCallback, memo, useReducer } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../Button/Button';
import Input from '../../../Input/Input';
import styles from './Order.module.scss';
import OrderProps from './Order.props';

import { ReactComponent as UserIcon } from './icon/user-icon.svg';
import { ReactComponent as PhoneIcon } from './icon/phone-icon.svg';
import { ReactComponent as EmailIcon } from './icon/email-icon.svg';
import { ReactComponent as BriefcaseIcon } from './icon/briefcase-icon.svg';
import { ReactComponent as FileIcon } from './icon/file-text-icon.svg';
import { ReactComponent as BasketIcon } from './icon/basket-icon.svg';

import Space from '../../../Space/Space';
import { isValidEmail, priceRu } from '../../../../utils/util';
import { useAppSelector } from '../../../../hooks/redux';
import Modal from '../../../Modal/Modal';

function Order({ className }: OrderProps) {
  const { products } = useAppSelector((select) => select.BasketReducer);
  const [modal, setModal] = useReducer((value) => !value, false);
  const totalPrice = Object
    .values(products)
    .reduce((sum, item) => (sum + item.product.price * item.count), 0);

  const {
    register, handleSubmit, formState: { errors }, setError,
  } = useForm({
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      inn: '',
    },
  });

  const handleEmailValidation = useCallback((email: string) => {
    const isValid = isValidEmail(email);
    if (!isValid) {
      setError('email', { message: 'неправильный адрес электронной почты', type: 'validate' });
    }
    return isValid;
  }, []);

  const onSubmit = handleSubmit((values) => {
    if (totalPrice > 0) {
      console.log(values);
      console.log(products);
      setModal();
    }
  });

  return (
    <aside className={classNames(styles.order, className)}>
      <div className={styles.head}>
        <h3 className={styles.title}>Заказ</h3>
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
        <h4 className={styles.formTitle}>Контактная информация</h4>
        <Input {...register('fullName', { required: true })} label="ФИО" icon={<UserIcon />} errorMessage={errors.fullName?.message} />
        <Input {...register('phoneNumber', { required: true })} label="Контактный телефон" type="tel" icon={<PhoneIcon />} errorMessage={errors.phoneNumber?.message} />
        <Input {...register('email', { validate: handleEmailValidation })} label="Email" icon={<EmailIcon />} errorMessage={errors.email?.message} />
        <Input {...register('inn', { required: true })} label="Организация / ИНН" type="number" icon={<BriefcaseIcon />} errorMessage={errors.inn?.message} />

        <p className={styles.totalPrice}>
          <span>Итог</span>
          <span>{priceRu(Number(totalPrice.toFixed(1)))}</span>
        </p>
        <Space direction="column" gap={15}>
          <Button type="primary" htmlType="submit" icon={<BasketIcon />}>Оформить заказ</Button>
          <Button type="outline-primary" htmlType="button" icon={<FileIcon />}>Коммерческое предложение</Button>
        </Space>
      </form>
      <Modal visible={modal} onClose={setModal} title="Спасибо за ваш заказ">
        <Space direction="column" align="center" justifyContent="center">
          <p>
            В ближайшее время менеджеры свяжутся с вами для уточнения деталей
          </p>
          <Space justifyContent="center" gap={15}>
            <Button onClick={setModal} type="primary">Продолжить покупки</Button>
            <Button type="outline-primary">Добавить сайт в избранное</Button>
          </Space>
        </Space>

      </Modal>
    </aside>
  );
}

export default memo(Order);
