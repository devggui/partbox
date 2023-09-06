import FormButton from "../Button/Button"
import Input from "../Input/Input"

export default function Header() {
  return (
    <div className="bg-[var(--bg-header)] flex flex-row items-center justify-center w-full h-40">
      <Input type="text" placeholder="First name" />
      <Input type="text" placeholder="Last name" />
      <Input type="number" placeholder="Participation" />
      <FormButton title="SEND" />
    </div>
  )
}