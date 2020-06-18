import React from "react";
import "./Cards.css";

function VolCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Position</strong> {props.position}
                    </li>
                </ul>
            </div>
            <span onClick={() => props.removeVol(props.id)} className="remove">x</span>
        </div>
    );
}

export default VolCard;