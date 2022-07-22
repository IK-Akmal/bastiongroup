import { PropsWithChildren } from 'react';
import { useAppSelector } from '../../hooks/redux';
import Aside from '../Aside/Aside';
import BackButton from '../BackButton/BackButton';
import Card from '../Card/Card';
import FiltesToggle from '../FiltesToggle/FiltersToggle';
import Pagination from '../Pagination/Pagination';
import SortBy from '../SortBy/SortBy';
import Space from '../Space/Space';
import Switch from '../Switch/Switch';
import Title from '../Title/Title';
import styles from './Catalog.module.scss';

function Catalog({ children }: PropsWithChildren) {
  return <section className={styles.catalog}>{children}</section>;
}

module Catalog {
  export function Head() {
    return (
      <div className={styles.head}>
        <Space align="center" gap={20}>
          <BackButton />
          <Title variant="h2">Опоры трубопроводов</Title>
        </Space>
        <Space align="center" justifyContent="end" gap={30}>
          <SortBy />
          <Switch />
        </Space>
      </div>
    );
  }
  export function Body() {
    return (
      <>
        <div className={styles.body}>
          <Aside />
          <Catalog.Contnet />
          <Pagination />
        </div>
        <Catalog.Description />
      </>
    );
  }

  export function Grid() {
    const { products } = useAppSelector((select) => select.ProductReducer);
    const { filterGOST, filtrePrice, filterProductType } = useAppSelector(
      (select) => select.FiltersReducer,
    );
    // const { productType } = useAppSelector((select) => select.ProductTypeReducer);

    const haveFilterGost = filterGOST.some((value) => typeof value === 'string');

    const filtredProducts = Object.values(products)
      .filter((product) => (
        filtrePrice[0] <= product.price && product.price <= filtrePrice[1]
      ))
      .filter((product) => (
        filterGOST.length > 0 && haveFilterGost ? filterGOST.includes(product.gost) : true
      ))
      .filter((product) => (filterProductType !== '' ? product.productTypeId === filterProductType : true));

    return (
      <div className={styles.grid}>
        {
          filtredProducts.map((product) => (<Card key={product.id} {...product} />))
        }
      </div>
    );
  }

  export function Contnet() {
    return (
      <div className={styles.content}>
        <FiltesToggle />
        <Catalog.Grid />
      </div>
    );
  }

  export function Description() {
    return (
      <div className={styles.description}>
        <Title variant="h2" className={styles.title}>
          Опоры трубопроводов от Бастион Груп - производитель металлических изделий №1
        </Title>

        <p>
          Надежность работы трубопровода в значительной мере зависит от
          правильности и прочности его крепления.
          Основные средства крепления трубопроводов — это опора, подвеска, кронштейны,
          скобы и другие части опорных конструкций.
          Мы изготавливаем типовые опоры трубопроводов по нижеперечисленным
          существующим нормативным документам,
          а также изготовим любые нестандартные опоры трубопроводов по чертежам заказчика.
        </p>

        <p>
          Жесткие и пружинные подвески рассчитаны на вертикальную
          нагрузку горизонтальных и вертикальных участков трубопровода.
          Основным материалом деталей является сталь 17гс-12,
          17г1с-12, 14г2-12, 09г2с-14, 20, 20к и пр.
        </p>
        <p>
          Марка стали выбирается исходя от параметров окружающей среды,
          опоры могут использоваться при температуре от -60°C.
          Конструкции опор, представленные на сайте, отличаются между
          собой методом крепления с трубопроводом и несущей способностью.
        </p>

        <p>
          Подвески являются сборными устройствами, соединяются при помощи сварки.
          Сварные швы отвечают требованиям СНиП III-18-75, СНиП II-23-81.
          Резьбовые части опор обрабатываются антикоррозионной смазкой
          ПВК по ГОСТ 19537-83 или ее аналогом.
        </p>
        <span>Скрыть описание</span>
      </div>
    );
  }
}

export default Catalog;
