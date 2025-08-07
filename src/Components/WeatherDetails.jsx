export const WeatherDetails = (props) => {
    const iconUrl = `http://openweathermap.org/img/wn/${props.icon}@2x.png
`
    return (
        <div>
            <h1>weather details</h1>
            <h1>Feels like: {props.feelsLike}</h1>
            <img src={iconUrl} alt="image" />
            <p>Weather description: {props.weatherDescription}</p>
        </div>
    )
}