import { Routes, Route } from "react-router-dom"
import { Weather } from "./Components/Weather"
import WeatherMap from "./Components/WeatherMap"
const App = () => {
  return (
    <div>
      {/* <Weather /> */}
      {/* <Routes>
        <Route path="/" element={<Weather />} />
      </Routes> */}
      <WeatherMap />
    </div>
  )
}
export default App