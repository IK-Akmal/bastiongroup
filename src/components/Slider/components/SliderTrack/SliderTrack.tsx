import { PropsWithChildren, useMemo } from 'react';
import { getTrackBackground } from 'react-range';
import { ITrackProps } from 'react-range/lib/types';
import styles from './SliderTrack.module.scss';

interface SliderTrackProps {
  props: ITrackProps;
  min: number;
  max: number;
  values: number[]
}

function SliderTrack({
  children, values, props, min, max,
}: PropsWithChildren<SliderTrackProps>) {
  const backgroundStyle = useMemo(
    () => getTrackBackground({
      values,
      colors: ['rgba(0,0,0,.2)', '#C93E33', 'rgba(0,0,0,.2)'],
      min,
      max,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [values],
  );

  return (
    <div
      // eslint-disable-next-line react/prop-types
      ref={props.ref}
      className={styles.track}
      style={{ background: backgroundStyle }}
    >
      {children}
    </div>
  );
}

export default SliderTrack;
