import { useMemo } from 'react';
import { IThumbProps } from 'react-range/lib/types';
import classNames from 'classnames';
import styles from './SliderThumb.module.scss';

interface SliderThumbProps {
  value: number;
  initialValue: number | undefined;
  props: IThumbProps;
}

function SliderThumb({
  value,
  initialValue,
  props,
}: SliderThumbProps) {
  const isChanged = useMemo(() => initialValue !== value, [initialValue, value]);

  return (
    <div
      {...props}
      className={classNames(
        styles.thumb,
        isChanged && styles.changed,
      )}
    />
  );
}

export default SliderThumb;
