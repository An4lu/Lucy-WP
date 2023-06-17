import ReactSelect from 'react-select/creatable'
import { colorStyles } from './styles'

interface SelectProps {
  onValueChange: (value: string) => void
  value: string
  id: string
  options: { value: string; label: string }[]
}

export const Select = ({
  value,
  onValueChange,
  options,
  ...props
}: SelectProps) => {
  const selectedOption =
    options.find((option) => option.value === value) || null

  return (
    <ReactSelect
      {...props}
      isSearchable={false}
      value={selectedOption}
      onChange={(option: any) => onValueChange(option.value)}
      options={options}
      styles={colorStyles}
      placeholder="Selecione uma opção"
    />
  )
}
