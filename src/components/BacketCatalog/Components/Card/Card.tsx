/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useForm, Controller } from 'react-hook-form';
import { memo } from 'react';
import IBasket from '../../../../Model/IBasket';
import { priceRu } from '../../../../utils/util';
import Counter from '../../../Counter/Counter';
import styles from './Card.module.scss';

import { ReactComponent as TrashIcon } from '../trash.svg';
import Space from '../../../Space/Space';
import { useAppDispatch } from '../../../../hooks/redux';
import { removeProduct, setCount } from '../../../../Store/Slices/Basket';
import Button from '../../../Button/Button';

function Card({ count, product }: IBasket) {
  const dispatch = useAppDispatch();

  const { control } = useForm({
    defaultValues: {
      count,
    },
  });

  const handleRemoveAll = () => {
    dispatch(removeProduct(product.id));
  };

  const handleSetCount = (value: number) => {
    dispatch(setCount({ id: product.id, count: value }));
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt="" />
      <Space direction="column" align="baseline" gap={6}>
        <span className={styles.gost}>{product.gost}</span>
        <span className={styles.name}>{product.name}</span>
        <span className={styles.price}>{priceRu(Number(product.price.toFixed(1)))}</span>
      </Space>

      <Controller
        name="count"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Counter
            value={value}
            onChange={(event) => {
              onChange(event);
              handleSetCount(event);
            }}
            className={styles.counter}
          />
        )}
      />
      <span className={styles.totalPrice}>
        {priceRu(Number((product.price * count).toFixed(1)))}
      </span>
      <Button className={styles.trash} onClick={handleRemoveAll}>
        <TrashIcon />
      </Button>
    </div>
  );
}

export default memo(Card);
