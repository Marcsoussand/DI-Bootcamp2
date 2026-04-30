import { useState } from 'react'


export default function Car({carInfo, children}) {
    const [color, setColor] = useState("red")
    return (
        <>
        <h1>This car is {color} {carInfo.model}</h1>
        {children}
        </>
    )
}