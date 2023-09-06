export default function Table() {    
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th className="w-48 text-left">First name</th>
          <th className="w-48 text-left">Last name</th>
          <th className="w-max text-center">Participation</th>
        </tr>
      </thead>  
      <tbody>
        {/* {participants.map((participant, key) => (
          <tr key={key}>
            <td className="text-center ">{key}</td>
            <td className="text-left">{participant.firstName}</td>
            <td className="text-left">{participant.lastName}</td>
            <td className="text-center ">{participant.participation}{'%'}</td>
          </tr>
        ))} */}
      </tbody>
    </table>
  )
}