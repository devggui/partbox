'use client'

import { useEffect, useState } from "react"
import axios from "axios"

export type ParticipantData = {
  firstName: string
  lastName: string
  participation: number
}

export default function Table() {
  const [participants, setParticipants] = useState<ParticipantData[]>([])            

  const getData = async () => {
    const response = await axios.get('/data.json')            
    
    setParticipants(response.data)
  }      

  useEffect(() => {
    getData()
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th className="w-52 text-left">First name</th>
          <th className="w-52 text-left">Last name</th>
          <th className="w-max text-center">Participation</th>
        </tr>
      </thead>  
      <tbody>
        {participants.map((participant, key) => (
          <tr key={key}>
            <td className="text-center ">{key}</td>
            <td className="text-left">{participant.firstName}</td>
            <td className="text-left">{participant.lastName}</td>
            <td className="text-center ">{participant.participation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}