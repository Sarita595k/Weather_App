import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { WeatherMap } from "./WeatherMap"

const NavbarDiv = styled.div`
background-color:black;
height:7rem;
position:relative;
`
export const Navbar = () => {
    return (<NavbarDiv>
        <NavLink to="/" element={<WeatherMap />}>Home</NavLink>
        <NavLink to="/hourly">Hourly</NavLink>
        <NavLink to="/"></NavLink>
    </NavbarDiv>
    )
}
