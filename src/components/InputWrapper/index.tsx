import React from 'react'
import { InputWrapper } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'date'
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'date', ...rest }, ref) => {
    return <InputWrapper ref={ref} type={type} {...rest} />
  },
)

Input.displayName = 'Input'

export default Input
