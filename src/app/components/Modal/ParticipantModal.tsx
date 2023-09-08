import { useEffect, useState } from "react";
import axios from "axios";
import IconButton from "../Button/IconButton";
import Input from "../Input/Input";
import Button from "../Button/Button";

interface EditParticipantProps {  
  onClick: () => void;
  participantId: string
}

export default function ParticipantModal({ onClick, participantId }: EditParticipantProps) {  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [participation, setParticipation] = useState('')    

  async function getParticipantById() {
    try {      
      const participant = await axios.get(`http://localhost:3333/participants/${participantId}`)

      setFirstName(participant.data.firstName)
      setLastName(participant.data.lastName)
      setParticipation(participant.data.participation)
    } catch (error) {
      console.log(error);            
    }    
  }
  
  async function handleParticipantUpdated() {
    try {
      const formData = {
        firstName: firstName,
        lastName: lastName,
        participation: parseFloat(participation)
      }
          
      await axios.put(`http://localhost:3333/participants/${participantId}`, formData) 
    } catch (error) {
      console.log(error);    
    }
  }

  useEffect(() => {
    getParticipantById()
  }, [])

  return (    
    <form className="flex flex-col items-center w-full bg-white rounded-md shadow-2xl" onSubmit={handleParticipantUpdated}>
      <header className="flex items-center justify-center bg-[var(--bg-header)] w-full text-white font-bold text-2xl text-center h-12 rounded-t-md">
        Editar participante

        <IconButton 
          onClick={onClick} 
          src={"/icons/x.svg"} 
          alt={"Fechar"} 
          width={35} 
          height={35}
          className="absolute right-5 hover:scale-110"
        />
      </header>

      <main className="flex flex-row items-start justify-start w-full p-5">
        <div className="flex flex-col w-full mx-5">
          <label className="pt-5 text-2xl font-bold text-[var(--bg-header)]" htmlFor="firstName">First Name</label>
          <Input 
            type="text" 
            className="border-b border-b-solid border-b-[var(--bg-header)]"
            id="firstName"
            name="firstName"
            placeholder="First name" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required 
          />

          <label className="pt-5 text-2xl font-bold text-[var(--bg-header)]" htmlFor="lastName">Last Name</label>
          <Input 
            type="text" 
            className="border-b border-b-solid border-b-[var(--bg-header)]"
            id="lastName"
            name="lastName"
            placeholder="Last name" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required 
          />

          <label className="pt-5 text-2xl font-bold text-[var(--bg-header)]" htmlFor="participation">Participation</label>
          <Input 
            type="number" 
            className="border-b border-b-solid border-b-[var(--bg-header)]"
            id="participation"
            name="participation"
            placeholder="Participation" 
            value={participation}
            onChange={(e) => setParticipation(e.target.value)}
            required 
          />
          
        </div>
      </main>
      
      <div className="flex flex-col w-full items-center justify-between p-5">
        <Button type="submit" title="Alterar" className="bg-[var(--bg-header)]" />        
      </div>
    </form>
  )
}