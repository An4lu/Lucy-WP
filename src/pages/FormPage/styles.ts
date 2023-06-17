import { styled } from '../../styles'

export const Container = styled('div', {
  maxWidth: '1000px',
  width: '100%',
  margin: '0 auto',
  marginTop: '40px',
})

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})

export const FormContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Errordiv = styled('div', {
  fontSize: '12px',
  padding: '3px',
  color: 'red',
})

export const LineFormItem = styled('div', {
  display: 'flex',
  gap: '70px',
  marginTop: '30px',
})

export const SpaceContainer = styled('div', {
  marginTop: '35px',
})

export const ItemFormContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  width: '100%',
})

export const CheckboxContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
})

export const CheckText = styled('label', {
  color: '$gray500',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '13px',
  fontSize: 14,
})

export const CheckboxItem = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '1px',
})

export const ItemAreaContainer = styled('div', {
  width: '100%',
})

export const FormLabelText = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '2px',
})

export const ContainerButton = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
})
