import { ComponentProps } from "react"

export type ButtonProps = ComponentProps<'button'> & {
  title?: string 
  onClick?: () => void  
}

export default function FormButton({ ...props }: ButtonProps) {
  return (
    <button
      type={props.type}    
      id={props.id}
      className="w-36 h-14 mx-3 border-2 border-solid border-white bg-transparent text-white text-lg font-bold rounded-sm"
      disabled={props.disabled}      
      onClick={props.onClick}
    >      
      {props.title}
    </button>
  )
}