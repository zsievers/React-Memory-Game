import React from "react";
import "./Players.css";

const PlayerCard = props => (
    <div className="card" onClick={() => props.handleClick(props.id)}>

        <div className="img-container">
            <img alt={props.name} src={props.image}/>
            <div className="content">
                <strong></strong> {props.name}
            </div>
        </div>
    </div>
);

export default PlayerCard;