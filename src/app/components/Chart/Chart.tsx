import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ParticipantData } from "@/app/page";

interface ChartProps {
  participants: ParticipantData[]
}

export default function Chart({ participants }: ChartProps) {  
  ChartJS.register(ArcElement, Tooltip, Legend);      

  function label() {
    return participants.map(participant => `${participant.firstName} ${participant.lastName}`)            
  }  

  function participation() {
    return participants.map(participant => participant.participation)    
  }

  function backgrounds() {
    return [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 206, 86)',
      'rgb(75, 192, 192)',
      'rgb(153, 102, 255)',
      'rgb(255, 159, 64)',
    ]
  }

  const data = {
    labels: label(),    
    datasets: [
      {
        label: 'Participation',
        data: participation(),
        backgroundColor: backgrounds(),
        borderColor: ['white'],
        borderWidth: 3               
      },
    ],
  }    

  const options = {
		responsive: true,
		plugins: {
			legend: {
        display: true,
        position: "right" as const,
        labels: {
          boxWidth: 30,
          boxHeight: 30,         
        }
      }	
		},
	}

  return <Doughnut data={data} options={options} className="max-h-96 max-w-sm mx-32" />;
}
