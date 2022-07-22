import ReactSelect, { StylesConfig } from 'react-select';

export type SelectValue = {
  label: string;
  value: string;
};

interface SelectProps {
  options: SelectValue[];
  onChange: (e: unknown) => void;
  value: SelectValue | unknown;
  name: string;
  placeholder: string;
}

// function DropdownIndicator(props: DropdownIndicatorProps) {
//   return (
//     <components.DropdownIndicator {...props}>
//       {/* <FiChevronDown /> */}
//     </components.DropdownIndicator>
//   );
// }

function Select({
  name, options, value, onChange, placeholder,
}: SelectProps) {
  const selectStyle: StylesConfig = {
    option: (provided, state) => ({
      ...provided,
      padding: '10px 15px',
      '&:active': { backgroundColor: 'rgba(0,0,0, 0.1)' },
      backgroundColor: state.isSelected ? 'var(--primary-color) !important;' : '#f2f2f2',
      color: state.isSelected ? '#fff' : '#000',
      fontWeight: state.isSelected ? 400 : 400,
      width: '100%',
    }),
    dropdownIndicator: (base) => ({
      ...base,
      fontSize: 20,
      color: 'var(--primary-color)',
    }),
    control: (base) => ({
      ...base,
      fontSize: 15,
      height: 44,
      lineHeight: '20px',
      fontWeight: 400,
      color: '#000',
      paddingLeft: 7,
      paddingRight: 7,
      '&:hover': { borderColor: 'rgba(0,0,0, 0.4)' },
      border: '1px solid lightgray',
      boxShadow: 'none',
    }),
  };

  return (
    <ReactSelect
      name={name}
      menuPlacement="auto"
      instanceId="select"
      options={options}
      styles={selectStyle}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
}

export default Select;
