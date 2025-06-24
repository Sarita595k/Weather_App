import { useState, useEffect } from "react"

export const WindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleWidth = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleWidth)
    })
    return (<>
        <h1>{width}</h1>
    </>)
}