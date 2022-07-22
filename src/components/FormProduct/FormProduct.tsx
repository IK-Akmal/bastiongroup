import { Controller, useForm } from 'react-hook-form';
import { Store } from 'react-notifications-component';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Select from '../Select/Select';
import Space from '../Space/Space';
import styles from './FormProduct.module.scss';

import { ReactComponent as ProductIcon } from './icon/product-icon.svg';
import { ReactComponent as BarcodeIcon } from './icon/barcode-icon.svg';
import { ReactComponent as MoneyIcon } from './icon/money-icon.svg';
import { ReactComponent as DiplomIcon } from './icon/diplom-icon.svg';
import { addProduct } from '../../Store/Slices/Product';
import { addGOST } from '../../Store/Slices/GOST';

function FormProduct() {
  const {
    register, control, reset, setError, handleSubmit, formState: { errors },
  } = useForm({
    defaultValues: {
      id: '',
      name: '',
      productType: { value: '', label: 'Выберите тип продукта' },
      price: '',
      gost: '',
      image: {},
    },
  });

  const dispatch = useDispatch();
  const { products } = useAppSelector((select) => select.ProductReducer);
  const { productType } = useAppSelector((select) => select.ProductTypeReducer);

  const handleReset = () => {
    reset();
  };

  // const convertBase64 = (file:Blob) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);

  // };

  const handleSubmitForm = handleSubmit((values) => {
    if (!products[values.id] && (values.image as FileList).length !== 0) {
      dispatch(addProduct({
        id: values.id,
        name: values.name,
        productTypeId: values.productType.value,
        gost: values.gost,
        price: Number(values.price),
        image: URL.createObjectURL((values.image as FileList).item(0) as Blob),
      }));
      dispatch(addGOST(values.gost));
      Store.addNotification({
        title: 'Успешно',
        message: 'Продукт успешно добавлен',
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
      className={styles.form}
      onSubmit={handleSubmitForm}
      onReset={handleReset}
    >
      <Input {...register('id', { required: true })} label="идентификатор" errorMessage={errors.id?.message} icon={<BarcodeIcon />} />
      <Input {...register('name', { required: true })} label="название " errorMessage={errors.name?.message} icon={<ProductIcon />} />
      <Input {...register('image', { required: true })} type="file" accept="image/png, image/gif, image/jpeg" errorMessage={errors.image?.message} />
      <Controller
        name="productType"
        control={control}
        rules={{
          required: true,
        }}
        render={({
          field: {
            name, value, onChange,
          },
        }) => (
          <Select
            name={name}
            value={value}
            placeholder="Все типы"
            onChange={onChange}
            options={Object.values(productType)
              .map((item) => ({ label: item.name, value: item.id }))}
          />
        )}
      />
      <Input {...register('price', { required: true })} step="0.1" type="number" label="Цена" errorMessage={errors.name?.message} icon={<MoneyIcon />} />
      <Input {...register('gost', { required: true })} label="Государственный стандарт" errorMessage={errors.name?.message} icon={<DiplomIcon />} />
      <Space gap={10}>
        <Button type="primary" htmlType="submit">Добавить</Button>
        <Button type="ghost" htmlType="reset">Очистить</Button>
      </Space>
    </form>
  );
}

export default FormProduct;
