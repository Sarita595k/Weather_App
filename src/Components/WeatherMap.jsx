import { useEffect } from "react"
import styled from "styled-components";
import { Weather } from "./Weather";

const WeatherContainer = styled.div`
position:relative;
width:100%;
height:100vh;
`
const WeatherDiv = styled.div`
position:absolute;
width:100%;
height:100vh;
margin-top:-7%;
top:0;
left:0;
z-index:1;
`

const SearchContainer = styled.div`
width:100%;
position:absolute;
z-index:1000;
top:10%;
background-color:transparent;
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
                    // console.log("Windy map initialized", map);
                }
            );
        } else {
            console.log("error in fetching windy map key")
        }
    }, [])
    return (
        <WeatherContainer>
            <WeatherDiv id="windy" />
            <SearchContainer>
                <Weather />
            </SearchContainer>
        </WeatherContainer>
    )
}