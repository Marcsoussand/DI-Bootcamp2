import React from "react";

export default function QuoteButton(props) {

    return (
        <button onClick={props.onClick} style={{ backgroundColor: props.color, color: 'white', padding: '0.5rem 1.5rem', border: 'none', cursor: 'pointer' }}>
            New Quote
        </button>
    )
}