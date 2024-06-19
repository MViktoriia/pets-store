import {FormProps} from '../../../lib/types/index'

const Form = ({children, ...props}: FormProps) => {
  return (
    <form {...props}>
    {children}
    </form>
  )
}

export default Form