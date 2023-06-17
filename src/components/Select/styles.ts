import { StylesConfig } from 'react-select'

interface Option {
  label: string
  value: string
}

export const colorStyles: StylesConfig<Option> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#F1F2F6',
    height: '46px',
    borderRadius: '5px',
    borderStyle: 'none',
    cursor: 'pointer',
    zIndex: '99.9',
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: 'white',
    fontFamily: 'Inter',
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#D3AB3C',
      color: 'white',
    },
    color: isSelected ? '#111827' : '#111827',
  }),
}
