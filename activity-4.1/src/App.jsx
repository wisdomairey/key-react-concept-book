import Add from "./components/Add"
import Divide from "./components/Divide"
import Multiply from "./components/Multiply"
import Subtract from "./components/Subtract"

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-700">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold">Simple Calculator</h1>
        <Add />
        <Subtract />
        <Multiply />
        <Divide />
      </div>
    </div>
  )
}

export default App