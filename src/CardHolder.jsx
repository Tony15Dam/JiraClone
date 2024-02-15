import React, { useState } from "react";


function CardHolder(props)
{
    const[cards, setCards] = useState([props.cards]);

    return(
        <div>
            {props.name}
            {props.cards}
        </div>
    );
}

export default CardHolder;