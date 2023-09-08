import { useState } from "react"
import { ParticipantData } from "@/app/page"
import Modal from "react-modal"
import axios from "axios"
import IconButton from "../Button/IconButton"
import ParticipantModal from "../Modal/ParticipantModal"
import ConfirmDeletion from "../Modal/ConfirmDeletion"

interface TableProps {
  participants: ParticipantData[]
}

export default function Table({ participants }: TableProps) {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false)   
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false)   
  const [participantId, setParticipantId] = useState('')    

  function openEditModal(id: string) {    
    setParticipantId(id)
    setEditModalIsOpen(true)
  }

  function closeEditModal() {
    setEditModalIsOpen(false)
  }
  
  function openConfirmModal(id: string) {    
    setParticipantId(id)
    setConfirmModalIsOpen(true)
  }

  function closeConfirmModal() {
    setConfirmModalIsOpen(false)
  }  

  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            <th className="w-48 text-left">First name</th>
            <th className="w-48 text-left">Last name</th>
            <th className="w-max text-center">Participation</th>
            <th></th>
            <th></th>
          </tr>
        </thead>  
        <tbody>        
          {participants.map((participant, key) => (
            <tr key={key}>
              <td className="text-center ">{key+1}</td>
              <td className="text-left">{participant.firstName}</td>
              <td className="text-left">{participant.lastName}</td>
              <td className="text-center ">{participant.participation}{'%'}</td>
              <td>
                <IconButton 
                  src={"/icons/edit-2.svg"} 
                  alt={"Update"} 
                  width={20} 
                  height={20} 
                  onClick={() => openEditModal(participant.id)} />
              </td>
              <td>
                <IconButton 
                  src={"/icons/trash-2.svg"} 
                  alt={"Delete"} 
                  width={20} 
                  height={20} 
                  onClick={() => openConfirmModal(participant.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update */}
      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeEditModal}    
        appElement={document.getElementById('root') as HTMLElement}
        ariaHideApp={false}        
        className="flex items-center justify-center w-max absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <ParticipantModal onClick={closeEditModal} participantId={participantId} />
      </Modal>

      {/* Delete */}
      <Modal
        isOpen={confirmModalIsOpen}
        onRequestClose={closeConfirmModal}    
        appElement={document.getElementById('root') as HTMLElement}
        ariaHideApp={false}        
        className="flex items-center justify-center w-max absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <ConfirmDeletion onClick={closeConfirmModal} participantId={participantId} />
      </Modal>
    </>    
  )
}