import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import { setFilterPrice, setFilterProductType } from '../../Store/Slices/filters';
import Accordion from '../Accordion/Accordion';
import Select from '../Select/Select';
import Slider from '../Slider/Slider';
import CheckBox from './components/CheckBox/CheckBox';
import Head from './components/Head/Head';
import ResetBtn from './components/ResetBtn/ResetBtn';
import { ReactComponent as HelpIcon } from './icon/help-icon.svg';

function Filters() {
  const { products } = useAppSelector((select) => select.ProductReducer);
  const { productType } = useAppSelector((select) => select.ProductTypeReducer);

  const productTypeValues = Object.values(productType)
    .map((type) => ({ label: type.name, value: type.id }));
  productTypeValues.unshift({ label: 'Все типы', value: '' });

  const Produtsvalues = Object.values(products);

  let maxPrice: number = 10;
  if (Produtsvalues.length > 0) {
    maxPrice = Produtsvalues.reduce((a, b) => (a.price > b.price ? a : b)).price;
  }
  const {
    control, reset,
  } = useForm({
    defaultValues: {
      price: [0, maxPrice],
      productType: productTypeValues[0],
      buyerschoice: false,
      bestprice: true,
    },
  });

  const dispatch = useDispatch();

  const onChangePrice = (values: number[]) => {
    dispatch(setFilterPrice(values));
  };

  const onChangeSelect = (option: any) => {
    dispatch(setFilterProductType(option.value));
  };

  const handleReset = () => {
    reset();
    dispatch(setFilterProductType(''));
    dispatch(setFilterPrice([0, maxPrice]));
  };

  return (
    <form
      action=""
      onReset={handleReset}
    >
      <Head />
      <Accordion name="Цена, руб.">
        <Controller
          name="price"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Slider
              min={0}
              max={maxPrice}
              values={value}
              onChange={onChange}
              onFinalChange={onChangePrice}
            />
          )}
        />
      </Accordion>
      <Accordion
        name="Тип продукта"
        defaultState="close"
        suffix={<HelpIcon />}
      >
        <Controller
          name="productType"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Select
              value={value}
              placeholder="Все типы"
              onChange={(event) => {
                onChange(event);
                onChangeSelect(event);
              }}
              name="productType"
              options={productTypeValues}
            />

          )}
        />
      </Accordion>
      <Accordion
        name="Бренд "
        defaultState="close"
        suffix={<HelpIcon />}
      />
      <Controller
        name="buyerschoice"
        control={control}
        render={({ field: { value, onChange } }) => (
          <CheckBox
            label="Выбор покупателей"
            checked={value}
            onChange={onChange}
          />

        )}
      />
      <Controller
        name="bestprice"
        control={control}
        render={({ field: { value, onChange } }) => (
          <CheckBox
            label="Лучшая цена"
            checked={value}
            onChange={onChange}
          />

        )}
      />
      <ResetBtn onClick={handleReset} htmlType="reset">Сбросить фильтры</ResetBtn>
    </form>
  );
}

export default Filters;
