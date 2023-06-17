import { styled } from '../../styles'
import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckboxRoot = styled(Checkbox.Root, {
  all: 'unset',
  backgroundColor: '$white',
  width: 20,
  height: 20,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 2,
  border: '1px solid #979797',
  display: 'flex',
  outline: 'none',
  cursor: 'pointer',
  '&[data-state="checked"]': {
    backgroundColor: '$yellow600',
    border: '1px solid $yellow600',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
})
export const Flex = styled('div', { display: 'flex', marginRight: '70px' })
