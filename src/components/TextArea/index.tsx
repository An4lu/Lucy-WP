import { HTMLAttributes } from 'react'
import { TextArea } from './styles'

interface MyTextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  onValueChange: (value: string) => void
}

const MyTextarea = (props: MyTextareaProps) => {
  function handleChange(value: string) {
    props.onValueChange(value)
  }

  return <TextArea rows={7} onChange={(e) => handleChange(e.target.value)} />
}

export default MyTextarea
