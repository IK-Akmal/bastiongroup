interface SliderProps {
  min: number;
  max: number;
  values: number[];
  step?: number;
  onChange: (values: number[]) => void;
  onFinalChange:(values: number[]) => void;
}

export default SliderProps;
