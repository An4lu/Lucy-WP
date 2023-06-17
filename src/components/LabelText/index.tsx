import { ReactNode } from 'react'
import { StyledLabelText } from './styles'
import { CSS } from '@stitches/react'

interface LabelProps {
  htmlFor: string
  children: ReactNode
  css?: CSS
}

export const LabelText = ({ htmlFor, children, css }: LabelProps) => {
  return (
    <StyledLabelText htmlFor={htmlFor} css={css}>
      {children}
    </StyledLabelText>
  )
}
