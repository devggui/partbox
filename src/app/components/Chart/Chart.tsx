'use client'

import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ParticipantData } from "../Table/Table";
import axios from "axios";

export default function Chart() {
  const [participants, setParticipants] = useState<ParticipantData[]>([])            

  const getData = async () => {
    const response = await axios.get('/data.json')            
    
    setParticipants(response.data)
  }      

  useEffect(() => {
    getData()
  }, [])

  ChartJS.register(ArcElement, Tooltip, Legend, Title);    

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    legend: {
      position: 'right'
    },
    datasets: [
      {
        label: 'Participation',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)',
        ],
        borderColor: ['white'],
        borderWidth: 3,        
      },
    ],
  }

  return <Doughnut data={data} className="max-h-80" />;
}
