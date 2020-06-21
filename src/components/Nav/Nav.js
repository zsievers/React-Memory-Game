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
            <ul>
                <li className="title">
                    {props.title}
                </li>

                <li id="message" className={messageClass()}>
                    {props.message}
                </li>

                <li>
                    <span className="score">Score: {props.score}</span> <span className="scoreSplit">|</span> <span className="score">Top Score: {props.topScore}</span>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;