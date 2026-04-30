import { useState } from "react";

export default function Events() {
    const [isToggleOn, setIsToggleOn] = useState(true)
    const clickMe = () => {
        alert("I was clicked");
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
        alert("The Enter key was pressed, your input is "+ e.target.value)
        }
    }

    

    return(
        <>
        <button onClick={()  => {clickMe()}} >Click Here</button>
        <input onKeyDown={(e) => {handleKeyDown(e)}} placeholder="press the Enter Key !"/>
        <p>Exercise 2 Part III Or Exercise 9 in the picture</p>
        <button onClick={() => setIsToggleOn(prev => !prev)}>{isToggleOn ? "ON" : "OFF"} </button>
        </>
    )

}