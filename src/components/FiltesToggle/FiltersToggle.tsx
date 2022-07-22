import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setFilterGOST } from '../../Store/Slices/filters';
import FilterToggle from './components/FilterToggle/FilterToggle';
import styles from './FiltersToggle.module.scss';

function FiltersToggle() {
  const { gosts } = useAppSelector((select) => select.GOSTReducer);

  const { register, watch } = useForm({});
  const dispatch = useAppDispatch();
  useEffect(() => {
    const subscription = watch((value) => dispatch(setFilterGOST(value.gostsFilter)));
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className={styles.wrapper}>
      {
        gosts.map((gost, index) => (<FilterToggle {...register(`gostsFilter[${index}]`)} key={gost} value={gost} />))
      }
    </div>
  );
}

export default FiltersToggle;
