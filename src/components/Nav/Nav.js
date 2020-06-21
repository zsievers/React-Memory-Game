import React from "react";
import "./Nav.css"

const Nav = props => {
    const messageClass = () => {
        if (props.message === "You Guessed Correctly!") {
            return "correct";
        } else if (props.message === "You Guess Incorrectly!") {
            return "incorrect";
        }
    }

    return (
        <nav className="navbar">
            
                <h4 className="title">
                    Clicky Game
                </h4>

                <h2 id="message" className={messageClass()}>
                    {props.message}
                </h2>

                <h4>
                    <span className="score">Score: {props.score}</span> <span className="scoreSph3t">|</span> <span className="score">Top Score: {props.topScore}</span>
                </h4>
        
        </nav>
    )
}

export default Nav;