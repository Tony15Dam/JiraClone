import React, { useState } from "react";
import "./CardHolder.css";

function CardHolder(props)
{
    const[cards, setCards] = useState([props.cards]);

    return(
        <div className="user-created-cards">
            {props.name}
            <div className="card-row-container">
            {props.cards}
            </div>
        </div>
    );
}

export default CardHolder;