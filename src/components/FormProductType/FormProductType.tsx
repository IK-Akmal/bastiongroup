import { useForm } from 'react-hook-form';
import { Store } from 'react-notifications-component';
import Button from '../Button/Button';
import Input from '../Input/Input';

import { ReactComponent as ProductIcon } from './icon/product-icon.svg';
import { ReactComponent as BarcodeIcon } from './icon/barcode-icon.svg';

import styles from './FormProductType.module.scss';
import Space from '../Space/Space';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addProductType } from '../../Store/Slices/ProductType';

function FormProductType() {
  const {
    register, reset, handleSubmit, setError, formState: { errors },
  } = useForm({
    defaultValues: {
      id: '',
      name: '',
    },
  });

  const dispatch = useAppDispatch();
  const { productType } = useAppSelector((select) => select.ProductTypeReducer);
  const handleReset = () => {
    reset();
  };

  const handleSubmitForm = handleSubmit((values) => {
    if (!productType[values.id]) {
      dispatch(addProductType(values));
      Store.addNotification({
        title: 'Успешно',
        message: 'Тип продукта успешно добавлен',
        type: 'success',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 1500,
          onScreen: true,
        },
      });
      handleReset();
    } else {
      setError(
        'id',
        {
          type: 'validate',
          message: 'такой идентификатор существует',
        },
      );
    }
  });

  return (
    <form
      onSubmit={handleSubmitForm}
      onReset={handleReset}
      className={styles.form}
    >
      <Input {...register('id', { required: true })} errorMessage={errors.id?.message} label="идентификатор тип продукта" icon={<BarcodeIcon />} />
      <Input {...register('name', { required: true })} errorMessage={errors.name?.message} label="название тип продукта" icon={<ProductIcon />} />
      <Space gap={10}>
        <Button type="primary" htmlType="submit">Добавить</Button>
        <Button type="ghost" htmlType="reset">Очистить</Button>
      </Space>
    </form>
  );
}

export default FormProductType;
