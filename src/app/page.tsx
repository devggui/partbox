'use client'

import { useEffect, useState } from "react"
import Chart from "./components/Chart/Chart"
import Header from "./components/Header/Header"
import Table from "./components/Table/Table"
import axios from "axios"

export type ParticipantData = {
  firstName: string
  lastName: string
  participation: number
}

export default function Home() {  
  const [participants, setParticipants] = useState<ParticipantData[]>([])            

  const getData = async () => {
    const response = await axios.get('/data.json')            
    
    setParticipants(response.data)
  }      
  
  useEffect(() => {
    () => getData()
  }, [])

  console.log(participants);  

  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      
      <h1 className="text-3xl text-black font-bold mt-10">DATA</h1>
      <p className="font-base my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="flex flex-row w-full items-center justify-center">
        <Table />

        <Chart />
      </div>
    </main>
  )
}
