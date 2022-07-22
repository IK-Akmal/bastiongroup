import { PropsWithChildren, useCallback } from 'react';
import Card from './Components/Card/Card';
import styles from './BacketCatalog.module.scss';
import ErrorMessagePanel from './Components/ErrorMessagePanel/ErrorMessagePanel';
import Grid from './Components/Grid/Grid';
import Order from './Components/Order/Order';
import ControlPanel from './Components/ControlPanel/ControlPanel';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { removeAll } from '../../Store/Slices/Basket';

function BacketCatalog({ children }: PropsWithChildren) {
  return (
    <section className={styles.backetCatalog}>{children}</section>
  );
}

module BacketCatalog {
  export function Body() {
    const { products } = useAppSelector((select) => select.BasketReducer);

    const values = Object.values(products);
    const dispatch = useAppDispatch();
    const handleRemoveAll = useCallback(() => {
      dispatch(removeAll());
    }, []);
    return (
      <div className={styles.body}>
        <ErrorMessagePanel />
        <Grid>
          {
            values.map((value) => (
              <Card key={value.product.id} {...value} />
            ))
          }
        </Grid>
        <ControlPanel onClick={handleRemoveAll} />
        <Order className={styles.order} />
      </div>
    );
  }
}

export default BacketCatalog;
