import { CheckboxIndicator, CheckboxRoot } from './styles'
import { Check } from '@phosphor-icons/react'

interface LabelProps {
  id: string
  onValueChange: (value: boolean) => void
  checked?: boolean
}

export const CheckBox = ({ id, onValueChange, checked }: LabelProps) => {
  return (
    <CheckboxRoot id={id} checked={checked} onCheckedChange={onValueChange}>
      <CheckboxIndicator>
        <Check size={12} color="#ffffff" />
      </CheckboxIndicator>
    </CheckboxRoot>
  )
}
