import { ComponentProps } from 'react'
import Image from "next/image";

export type ButtonProps = ComponentProps<'button'> & {
  src: string; 
  alt: string;
  width: number;
  height: number;
  imgClassName?: string;   
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function IconButton( { ...props }: ButtonProps) {
  return (
    <button
      id={props.id}
      type={props.type}    
      onClick={props.onClick}
      className={props.className}      
    >
      <Image
        src={props.src} 
        alt={props.alt}
        width={props.width}
        height={props.height}
        className={props.imgClassName}
      />
    </button>
  )
}