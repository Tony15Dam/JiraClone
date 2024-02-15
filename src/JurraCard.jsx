import React, {useState} from 'react';
import "./JurraCard.css";

function getPriority(priority)
{
    priority = priority.toLowerCase();
    switch(priority)
    {
        case "major":
            console.log("major");
            return "/Major.png";
        case "minor":
            return "/Minor.png";
        default: 
            return null;
    }
}

function cardExpansion(props)
{
    return(
        <>
            <div>
                {props.description}
            </div>
            <div className>
                {props.priority}
                <img src = {getPriority(props.priority)} alt = ""></img>
            </div>
        </>
    );
}

function handleExpansion(isButtonPressed, cardInstance)
{
    if (isButtonPressed)
    {
        return cardExpansion(cardInstance);
    }
    else
    {
        return(<div></div>) 
    }
}

function JurraCard(props) 
{
    const [isCardClicked, setIsCardClicked] = useState(false);

    const handleDragStart = (e) => 
    {
        e.dataTransfer.setData('text/plain', JSON.stringify(props));
        console.log("Started dragging");
    };

    const handleClick = () =>
    {
        setIsCardClicked(!isCardClicked);
    }

    return(
        <button draggable onDragStart={handleDragStart} className = "card" onClick={handleClick}>
            <div className = "card-header">
                {props.name} 
            </div>
            <div className = "card-details">
            {handleExpansion(isCardClicked, props)}
            </div>
        </button>
    );
}

export default JurraCard;