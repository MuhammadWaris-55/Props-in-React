import React from "react";
import "./Card.css"

const Card = ({ heading, title }) => {
    return (
        <div className="card">
            <h2 className="cardheading">{heading}</h2>
            <hr />
            <div className="cardtitle">{title}</div>
        </div>
    );
}

export default Card;