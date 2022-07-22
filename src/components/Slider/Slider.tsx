import { ChangeEvent, FC, useRef } from 'react';
import { IRenderThumbParams, IRenderTrackParams } from 'react-range/lib/types';
import { Range } from 'react-range';
import SliderThumb from './components/SliderThumb/SliderThumb';
import TextField from '../TextField/TextField';
import SliderTrack from './components/SliderTrack/SliderTrack';
import styles from './Slider.module.scss';
import SliderProps from './Slider.props';

function Slider({
  values, onChange, onFinalChange, step, min, max,
}: SliderProps) {
  const initialValueRef = useRef<number[]>(values);

  const sanitizeValues = (value: number) => {
    if (value > max) {
      return max;
    }
    if (Number.isNaN(value) || value < 0) {
      return 0;
    }

    return value;
  };

  const handleRenderTrack: FC<IRenderTrackParams> = ({ props, children }) => (
    <SliderTrack
      min={min}
      max={max}
      values={values}
      props={props}
    >
      {children}
    </SliderTrack>
  );

  const handleRenderThumb: FC<IRenderThumbParams> = ({ props, value, index }) => (
    <SliderThumb
      key={index}
      props={props}
      value={value}
      initialValue={initialValueRef.current?.[index]}
    />
  );

  return (
    <div data-testid="slider" className={styles.container}>
      <div className={styles.inputs}>
        <TextField
          className={styles.input}
          value={values[0]}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const sanitizedValue = sanitizeValues(Number(e?.target.value || String(min)));
            onChange([sanitizedValue, values[1]]);
          }}
          prefix="от"
        />
        <TextField
          className={styles.input}
          value={values[1]}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const sanitizedValue = sanitizeValues(Number(e?.target.value || String(max)));
            onChange([values[0], sanitizedValue]);
          }}
          prefix="до"
        />
      </div>
      <Range
        step={step}
        min={min}
        max={max}
        values={values}
        onFinalChange={onFinalChange}
        onChange={onChange}
        renderThumb={handleRenderThumb}
        renderTrack={handleRenderTrack}
      />
    </div>
  );
}

export default Slider;
