import { useReducer } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import IProduct from '../../Model/IProduct';
import { addProductToBasket } from '../../Store/Slices/Basket';
import { priceRu } from '../../utils/util';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';
import Modal from '../Modal/Modal';
import Space from '../Space/Space';
import Tag from '../Tag/Tag';

import styles from './Card.module.scss';

import { ReactComponent as ShoppingIcon } from './icon/shopping-card-icon.svg';
import { ReactComponent as StarIcon } from './icon/star-icon.svg';

function Card({
  id, productTypeId, name, price, gost, image,
}: IProduct) {
  const includeSymbolO = name.toLowerCase().includes('о'); // хит
  const includeSymbolC = name.toLowerCase().includes('с'); // скидка
  const includeSymbolA = name.toLowerCase().includes('а'); // акция

  const [modal, setModal] = useReducer((value) => !value, false);

  const dispath = useAppDispatch();

  const { handleSubmit, control } = useForm({
    defaultValues: {
      count: 1,
    },
  });

  const onSubmit = handleSubmit((value) => {
    dispath(addProductToBasket({
      product: {
        id,
        name,
        price,
        productTypeId,
        gost,
        image,
      },
      count: value.count,
    }));
    setModal();
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.tags}>
          {includeSymbolO && <Tag type="hit" />}
          {includeSymbolC && <Tag type="discount" />}
          {includeSymbolA && <Tag type="stock" />}
        </div>
        <div role="button" className={styles.favourities}>
          <StarIcon />
          <span>В избранное</span>
        </div>
        <img src={image} alt="" />
        <div className={styles.gost}>
          <span>{gost}</span>
        </div>
        <h3 className={styles.name}>{name}</h3>
        <form className={styles.form} onSubmit={onSubmit}>
          <Space justifyContent="space-between" align="center">
            <span className={styles.price}>
              {priceRu(Number(price.toFixed(1)))}
            </span>
            <Controller
              name="count"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Counter value={value} onChange={onChange} className={styles.counter} />
              )}
            />
          </Space>
          <Space direction="column" gap={15}>
            <Button htmlType="submit" icon={<ShoppingIcon />} type="primary">В корзину</Button>
            <Button type="ghost">Подробнее</Button>
          </Space>
        </form>
      </div>
      <Modal title="Товар добавлен в корзину" visible={modal} onClose={setModal}>
        <div className={styles.modalContent}>
          <img src={image} alt="" />
          <div className={styles.details}>
            <span className={styles.gost}>{gost}</span>
            <Space direction="column" gap={30}>
              <Space direction="row" gap={10}>
                <h3 className={styles.name}>{name}</h3>
                <span className={styles.price}>
                  {priceRu(Number(price.toFixed(1)))}
                </span>
              </Space>
              <Space direction="row" gap={15}>
                <Link to="/basket">
                  <Button type="primary">
                    Оформить заказ
                  </Button>
                </Link>
                <Button type="outline-primary">Коммерческое предложение</Button>
              </Space>
            </Space>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Card;
