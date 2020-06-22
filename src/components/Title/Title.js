import React from "react";
import "./Title.css";


const styles = {
    title: {
        backgroundSize: "100% auto",
        color: "rgb(255,255,255",
        marginTop: "70px",
        textAlign: "center",
    }
}

const Title = props => (
    <div className="title" style={styles.title}>
        <h1 >{props.children}</h1>
        <p className="subtitle">{props.subtitle}</p>
    </div>
);

export default Title;