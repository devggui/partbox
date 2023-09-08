import axios from "axios";
import Button from "../Button/Button";
import IconButton from "../Button/IconButton";

interface ConfirmDeletionProps {
  participantId: string  
  onClick: () => void
}

export default function ConfirmDeletion({ onClick, participantId }: ConfirmDeletionProps) {
  async function handleParticipantDelete() {
    try {      
      await axios.delete(`http://localhost:3333/participants/${participantId}`)
    } catch (error) {
      console.log(error);      
    }    
  }

  return (
    <form className="flex flex-col items-center w-full bg-white rounded-md shadow-2xl" onSubmit={handleParticipantDelete}>
      <header className="flex items-center justify-center bg-[var(--bg-header)] w-full text-white font-bold text-2xl text-center h-12 rounded-t-md px-20">
        Delete participant

        <IconButton 
          onClick={onClick} 
          src={"/icons/x.svg"} 
          alt={"Fechar"} 
          width={35} 
          height={35}
          className="absolute right-5 hover:scale-110"
        />
      </header>

      <main className="flex flex-col items-center justify-center w-full p-5">
        <h1 className="text-2xl font-bold text-[var(--bg-header)]">Are you sure?</h1>
      </main>

      <Button type="submit" title="Delete" className="bg-[var(--bg-header)] mb-4" />        
      <Button type="button" title="Cancel" className="bg-red-500 mb-4" onClick={onClick} />        
    </form>
  )
}