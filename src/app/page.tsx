'use client'

import { useEffect, useState } from "react"
import Chart from "./components/Chart/Chart"
import Header from "./components/Header/Header"
import Table from "./components/Table/Table"
import axios from "axios"
import Loading from "./components/Loading/Loading"

export type ParticipantData = {
  id: string
  firstName: string
  lastName: string
  participation: number
}

export default function Home() {  
  const [participants, setParticipants] = useState<ParticipantData[]>([])            
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3333/participants')            
          
      setParticipants(response.data)
    } catch (error) {
      console.log(error);      
      
      setIsError(true)
    }

    setIsLoading(false)
  }      
  
  useEffect(() => {
    getData()
  }, [])  

  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      
      <h1 className="text-3xl text-black font-bold mt-10">DATA PARTICIPATION</h1>
      <p className="font-base my-5">Participation data by person.</p>

      {isLoading && <Loading />}

      {isError && <h1 className="text-red-500">Ops, something went wrong!</h1>}

      {!isLoading && !isError && participants.length === 0 && <h1 className="text-gray-500">No participants!</h1>}

      {!isLoading && !isError && participants.length > 0 && (
        <div className="flex flex-row w-full items-center justify-center">
          <Table participants={participants} />

          <Chart participants={participants} />        
        </div>
      )}      
    </main>
  )
}
