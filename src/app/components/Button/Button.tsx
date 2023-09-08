import { ComponentProps } from "react"

export type ButtonProps = ComponentProps<'button'> & {
  title?: string
  onClick?: () => void  
}

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      type={props.type}    
      id={props.id}
      className={`w-36 h-14 mx-3 border-2 border-solid border-white text-white text-lg font-bold rounded-sm hover:opacity-70 ` + className}
      disabled={props.disabled}      
      onClick={props.onClick}
    >      
      {props.title}
    </button>
  )
}