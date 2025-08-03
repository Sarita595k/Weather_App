import "./Styles/Weather.css"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { WindowWidth } from "./WindowWidth"
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
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity},IN&appid=ffcb8213a4dc48de3ea875da61f207a5&units=metric`)
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
                <input type="text" name="cityName" id="city" value={cityName} onChange={handleChange} autoComplete="false" />
                <br />
                <button>submit</button>
            </form>
            {temp && temp.main && (
                <div className="weatherDetails">
                    <div className="nameDetails">
                        {/* <h2>{temp.name}</h2> */}
                        <h3>{temp.main.temp}°</h3>
                    </div>
                    <div className="details">
                        {/* <p>Feels like: {temp.main.feels_like} celsius</p>
                        <p>Min. temp: {temp.main.temp_min} celsius</p>
                        <p>Max. temp: {temp.main.temp_max} celsius</p>
                        <p>sunrise: {new Date(temp.sys.sunrise * 1000).toLocaleTimeString()}</p>
                        <p>sunset: {new Date(temp.sys.sunset * 1000).toLocaleTimeString()}</p>
                        <p>Wind speed: {temp.wind.speed}</p> */}
                    </div>
                </div>
            )}
        </Container >
    )
}