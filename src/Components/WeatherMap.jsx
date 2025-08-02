import { useEffect } from "react"
import styled from "styled-components";

const WeatherDiv = styled.div`
position:absolute;
width:100%;
height:100vh;
margin-top
`
export const WeatherMap = () => {
    useEffect(() => {
        if (window.windyInit) {
            window.windyInit(
                {
                    key: "8gQny0PtgYbuOWH7DIc7vpw70DfvqePX", // your API key
                    lat: 28.61,
                    lon: 77.20,
                    zoom: 5,
                    layer: 'temp', // initial weather layer (e.g., 'wind', 'temp', 'rain')
                },
                function (windyAPI) {
                    // This callback gives you access to Windy map controls and APIs
                    const { map } = windyAPI;
                    console.log("Windy map initialized", map);
                }
            );
        } else {
            console.log("error in fetching windy map key")
        }
    }, [])
    return (
        <WeatherDiv id="windy">
        </WeatherDiv>
    )
}