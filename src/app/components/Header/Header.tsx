'use client'

import FormButton from "../Button/Button"
import Input from "../Input/Input"

export default function Header() {
  const handleSendForm = () => {
    console.log('Enviar');  
  }

  return (
    <form className="bg-[var(--bg-header)] flex flex-row items-center justify-center w-full h-40" onSubmit={handleSendForm}>
      <Input type="text" placeholder="First name" required />
      <Input type="text" placeholder="Last name" required />
      <Input type="number" placeholder="Participation" required />
      <FormButton type="submit" title="SEND" />
    </form>
  )
}