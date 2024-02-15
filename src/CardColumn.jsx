import React, {useState} from 'react';
import JurraCard from './JurraCard';
import "./CardColumn.css";

function CardColumn(props)
{
    const [cards, setCards] = useState([]);

    const handleDragOver = (e) =>
    {
        e.preventDefault();
    };
    
    const handleDrop = (e) =>
    {
        e.preventDefault();
        const draggedDataString = e.dataTransfer.getData('text/plain');
        const draggedData = JSON.parse(draggedDataString);
        console.log(draggedData.name);
        setCards([...cards, <JurraCard key={cards.length} name = {draggedData.name} description = {draggedData.description} priority = {draggedData.priority}/>]);
    };

    return(
        <>
        <div className = "card-container" onDragOver={handleDragOver} onDrop={handleDrop}>
            <h3>{props.name}</h3>
            {cards}
        </div>
        </>
    )
}

export default CardColumn;