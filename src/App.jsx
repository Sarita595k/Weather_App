import { Routes, Route } from "react-router-dom"
import { Weather } from "./Components/Weather"
import { WeatherMap } from "./Components/WeatherMap"
import { Navbar } from "./Components/Navbar"
const App = () => {
  return (
    <div>
      {/* <Weather /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<WeatherMap />} />
      </Routes>
      {/* <WeatherMap /> */}
    </div>
  )
}
export default App