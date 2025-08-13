import styled from "styled-components"

const DetailsContainer = styled.div`
text-align:left;
padding-left:5%;
`
export const WeatherDetails = (props) => {
    const iconUrl = `http://openweathermap.org/img/wn/${props.icon}@2x.png
`
    return (
        <DetailsContainer>
            {/* <h1>weather details</h1> */}
            <h1>Feels like: {props.feelsLike}</h1>
            <h3>minimum temperature:{props.minTemp}</h3>
            <h3>maximum temperature: {props.maxTempc}</h3>
            <p>sunrise: {props.sunrise}</p>
            <p>sunset:{props.sunset}</p>
            <p>humidity: {props.humidity}</p>
            {/* <p>visibility: {props.visibility}</p> */}
            <p>Weather description: {props.weatherDescription}</p>
            <img src={iconUrl} alt="image" />
        </DetailsContainer>
    )
}