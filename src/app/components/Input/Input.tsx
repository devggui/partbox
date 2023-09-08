import { ComponentProps } from "react"

export type InputProps = ComponentProps<'input'> & {
  title?: string   
}

export default function FormInput({ className, ...props }: InputProps) {
  return (
    <input 
      type={props.type} 
      className={`w-72 h-14 px-4 py-2 mx-3 outline-none rounded-sm ` + className}
      id={props.id} 
      name={props.name} 
      placeholder={props.placeholder}
      value={props?.value}     
      required={props?.required}
      disabled={props?.disabled}      
      pattern={props?.pattern}
      title={props.title}      
      onInput={props?.onInput}
      onChange={props?.onChange}
      onBlur={props?.onBlur} 
    />
  )
}