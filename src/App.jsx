import { Routes, Route } from "react-router-dom"
import { Weather } from "./Components/Weather"
import { WeatherMap } from "./Components/WeatherMap"
import { Navbar } from "./Components/Navbar"
import { WeatherDetails } from "./Components/WeatherDetails"
const App = () => {
  return (
    <div>
      {/* <Weather /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<WeatherMap />} />
        <Route path="/weather" element={<WeatherDetails />} />
      </Routes>
      {/* <WeatherMap /> */}
    </div>
  )
}
export default App