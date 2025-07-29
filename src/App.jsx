import { Routes, Route } from "react-router-dom"
import { Weather } from "./Components/Weather"
const App = () => {
  return (
    <div>
      {/* <Weather /> */}
      <Routes>
        <Route path="/" element={<Weather />} />
      </Routes>
    </div>
  )
}
export default App