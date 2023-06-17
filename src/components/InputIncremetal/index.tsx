import { useState } from 'react'
import { Container, DecrementButton, IncrementButton, Input } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'

interface InputIncrementalProps {
  onValueChange: (value: number) => void
}

export function InputIncremental({ onValueChange }: InputIncrementalProps) {
  const [value, setValue] = useState<number>(0)

  const handleIncrement = () => {
    setValue(value + 1)
    onValueChange(value + 1)
  }

  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - 1)
      onValueChange(value - 1)
    }
  }
  function handleSetValue(value: string | number) {
    if (typeof value === 'string') {
      setValue(Number(value))
      onValueChange(Number(value))
    } else {
      setValue(value)
      onValueChange(value)
    }
  }
  const inputValue = value === 0 ? '' : value

  return (
    <Container>
      <DecrementButton type="button" onClick={handleDecrement}>
        <Minus size={16} color="#9F9999" weight="bold" />
      </DecrementButton>
      <Input
        placeholder="0"
        type="number"
        value={inputValue}
        onChange={(e) => handleSetValue(e.target.value)}
      />
      <IncrementButton type="button" onClick={handleIncrement}>
        <Plus size={16} color="#9F9999" weight="bold" />
      </IncrementButton>
    </Container>
  )
}
