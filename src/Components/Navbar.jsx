import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { WeatherMap } from "./WeatherMap"

const NavbarDiv = styled.div`
position:relative;
// background-color:transparent;
// background: #4A8899;
background: linear-gradient(to right, rgba(74, 136, 153, 1) 0%, rgba(87, 155, 60, 1) 25%,rgb(62, 104, 163) 45%,rgb(57, 160, 57)65%,rgb(162, 117, 76) 85%,rgb(147, 83, 85) 100%);
height:7rem;
z-index:200;
`
export const Navbar = () => {
    return (<NavbarDiv>
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="/hourly">Hourly</NavLink> */}
        <NavLink to="weather">Weather</NavLink>
    </NavbarDiv>
    )
}
