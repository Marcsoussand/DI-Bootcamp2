import { Component } from "react";
import reactLogo from './assets/react.svg';
import './Exercise.css';

class Exercise extends Component {
    render() {
        //Part 2
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
        // Part 1 : const h1 = <h1 style={{ color: 'red', backgroundColor: 'lightblue' }}>I Love JSX!</h1>;
        const h1 = <h1 style={style_header}>I Love JSX!</h1>;
        const paragraph = <p className="para">This is a paragraph</p>;
        const link = <a href="https://react.dev/">Click Here</a>;
        const form = <form>
            <input type="text" placeholder="Enter your name" />
            <button type="submit">Submit</button>
        </form>;
        const image = <img src={reactLogo} alt="React Logo" width="100" />;
        const list = <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>;
        return (
            <div>
                {h1}
                {paragraph}
                {link}
                {form}
                {image}
                {list}
            </div>
        );
    }
}


export default Exercise;