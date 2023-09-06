import Chart from "./components/Chart/Chart"
import Header from "./components/Header/Header"
import Table from "./components/Table/Table"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      
      <h1 className="text-3xl text-black font-bold mt-10">DATA</h1>
      <p className="font-base my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="flex flex-row justify-around w-full">
        <Table />

        <Chart />
      </div>
    </main>
  )
}
