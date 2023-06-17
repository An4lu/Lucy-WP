import { styled } from '../../styles'

export const StyledButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '36px',
  fontWeight: '500',
  fontSize: '14px',
  padding: '6px 14px',
  marginTop: '40px',
  marginBottom: '20px',
  backgroundColor: '$blue100',
  color: '$white',
  border: 'none',
  borderRadius: '4px',
  gap: '10px',
  cursor: 'pointer',
  boxShadow: '8px 1px 8px $grey100, rgba(17,17,26, 0.1) 0px 0px 0px',
  transition: 'background-color 0.3s, color 0.3s',
  '&:hover': {
    backgroundColor: '$blue500',
    '&[disabled]': {
      backgroundColor: '$yellow100',
    },
  },
  '&[disabled]': {
    opacity: 0.5,
    cursor: 'auto',
    transition: 'none',
  },
})
