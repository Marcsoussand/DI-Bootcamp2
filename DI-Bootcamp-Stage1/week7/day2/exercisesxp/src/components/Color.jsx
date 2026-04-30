import { useState, useEffect } from "react";

export default function Color() {
    const [favoriteColor, setFavoriteColor] = useState("red");
    useEffect(() => {
        alert("useEffect reached") 
        setFavoriteColor("yellow")
    },[])

    const changeFavoriteColor = () => {
        setFavoriteColor("blue");
    }

    return (
        <>
        <h3>My Favorite Color is  {favoriteColor}</h3>
        <button onClick={() => {changeFavoriteColor()}}>Change Favorite Color</button>
        </>
    )
}