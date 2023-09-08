'use client'

import axios from "axios"
import FormButton from "../Button/Button"
import Input from "../Input/Input"
import { useState } from "react"

export default function Header() {  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [participation, setParticipation] = useState('')

  const handleSendForm = async () => {
    try {
      const formData = {
        firstName: firstName,
        lastName: lastName,
        participation: parseFloat(participation)
      }
  
      await axios.post('http://localhost:3333/participants', formData)
      console.log("Success!");      
    } catch (error) {
      console.log(error);                  
    }
  }

  return (
    <form className="bg-[var(--bg-header)] flex flex-row items-center justify-center w-full h-40" onSubmit={handleSendForm}>
      <Input 
        type="text" 
        id="firstName"
        name="firstName"
        placeholder="First name" 
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required 
      />

      <Input 
        type="text" 
        id="lastName"
        name="lastName"
        placeholder="Last name" 
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required 
      />

      <Input 
        type="number" 
        id="participation"
        name="participation"
        placeholder="Participation" 
        value={participation}
        onChange={(e) => setParticipation(e.target.value)}
        required 
      />

      <FormButton type="submit" title="SEND" className="bg-transparent" />
    </form>
  )
}