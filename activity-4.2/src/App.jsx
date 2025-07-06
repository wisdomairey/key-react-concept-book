import Operation from "./components/Operation"

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-700">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold">Simple Calculator Modified</h1>
        <Operation />
      </div>
    </div>
  )
}

export default App