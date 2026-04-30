import { useState } from "react";

export default function Phone() {
    const [phone, setPhone] = useState({
        brand:"Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020
    })
    const changeColor = () => {
        setPhone({...phone, color: "blue"})
    }
    return (
        <>
        <h2> My phone is a {phone.brand}</h2>
        <h3> It is a {phone.color} {phone.model}  from {phone.year}</h3>
        <button onClick={()=> {changeColor()}}>Change Color</button>
        </>
    )
}