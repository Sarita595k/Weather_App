import "./Styles/Weather.css"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { WindowWidth } from "./WindowWidth"
import { WeatherDetails } from "./WeatherDetails"
const Container = styled.div`
    height: max-content;
    width: 100%;
    text-align: center;
    border: 1px solid violet;
    padding-bottom: 10%;
`

// const Heading = styled.h1`
//    margin-top: 7%;
//     text-transform: uppercase;
//     color: yellow;`
// url = "https://api.openweathermap.org/data/2.5/weather?q=`${cityName}`,`${state}`,IN&appid=ffcb8213a4dc48de3ea875da61f207a5"
export const Weather = () => {
    const cityDefaultValue = "Delhi"
    const [cityName, setCityName] = useState(cityDefaultValue)
    const [searchCity, setSearchCity] = useState(cityDefaultValue)
    const [temp, setTemp] = useState(null)


    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=ffcb8213a4dc48de3ea875da61f207a5&units=metric`)
            const data = await response.json()
            if (data.cod === 200) {
                console.log(data)
                setTemp(data)
            }
            else {
                setTemp(null)
                alert("city not found!")
            }
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        if (searchCity) {
            fetchData()
        }
    }, [searchCity])

    const handleChange = (event) => {
        setCityName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchCity(cityName)
    }

    return (
        <Container>
            {/* <WindowWidth /> */}
            {/* <h2 className="cityName">{cityName}</h2> */}

            <form className="weatherForm" onSubmit={handleSubmit}>
                <input type="text" name="cityName" id="city" value={cityName} onChange={handleChange} autoComplete="false" placeholder="Search Location" />
                <br />
                <button style={{ cursor: "pointer" }}>submit</button>
            </form>

            {/* fetchingthe weather data  */}
            {temp && temp.main && (
                <div className="weatherDetails">
                    <div className="nameDetails">
                        {/* <h2>{temp.name}</h2> */}
                        <h3>{temp.main.temp}°</h3>
                    </div>

                    {/* passing data to weatherDetails components */}
                    <WeatherDetails
                        feelsLike={temp.main.feels_like}
                        minTemp={temp.main.temp_min}
                        maxTemp={temp.main.temp_max}
                        sunrise={new Date(temp.sys.sunrise * 1000).toLocaleTimeString()}
                        sunset={new Date(temp.sys.sunset * 1000).toLocaleTimeString()}
                        windSpeed={temp.wind.speed}
                        humidity={temp.main.humidity}
                        visibility={temp.visibility}
                        weatherDescription={temp.weather[0].description}
                        icon={temp.weather[0].icon}
                    />
                </div>
            )}
        </Container >
    )
}