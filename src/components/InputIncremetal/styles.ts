import { styled } from '../../styles'

export const sharedButtonStyles = {
  display: 'block',
  position: 'relative',
  width: 'auto',
  height: '2.875rem',
  backgroundColor: '#F1F2F6',
  padding: '12px',
  margin: 0,
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#DADDE2',
  },
}

export const Input = styled('input', {
  height: '2.875rem',
  textAlign: 'center',
  margin: '0',
  border: 'none',
  backgroundColor: '#F1F2F6',
  color: '$gray200',
  '&:focus': {
    outline: 'none',
  },
  '&::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  width: '100%',
})

export const DecrementButton = styled('button', {
  ...sharedButtonStyles,
  borderTopLeftRadius: '5px',
  borderBottomLeftRadius: '5px',
  borderRight: 'none',
})

export const IncrementButton = styled('button', {
  ...sharedButtonStyles,
  borderTopRightRadius: '5px',
  borderBottomRightRadius: '5px',
  borderLeft: 'none',
})

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
})
