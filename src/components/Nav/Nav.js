import React from "react";
import "./Nav.css"

const Nav = props => {
    const messageClass = () => {
        if (props.message === "You Guessed Correctly!") {
            return "correct";
        } else if (props.message === "You Guessed Incorrectly!") {
            return "incorrect";
        }
    }

    return (
        <nav className="navbar">
            
                <h2 id="message" className={messageClass()}>
                    {props.message}
                </h2>

                <h4>
                    <span className="score">Score: {props.score}</span> <span className="scoreSplit">|</span> <span className="score">High Score: {props.highScore}</span>
                </h4>
        
        </nav>
    )
}

export default Nav;