import React, {useState} from 'react';
import './KanbanBoard.css';
import KanbanBoardColumn from './kanbanBoardColumn/KanbanBoardColumn.jsx';
import CreateCardPopup from '../../CreateCardPopup';

const KanbanBoard = ({ availableColumns, availablePriorities, cards }) => {

    
    const [cardCreationPopup, setCardCreationPopup] = useState([]);

    function filterCardsByColumn(columnName) {
        return cards.filter(card => card.column === columnName);
    }

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

    const handleSubmit = (formData) =>{
        const lastCard = cards[cards.length - 1]
        const newCard = {
            id: lastCard.id + 1,
            name: formData.name,
            description: formData.description,
            priority: getPriority(formData.priority),
            column: formData.column,
        }
        cards.push(newCard);
        setCardCreationPopup(null);
    }

    const handleClose = () => {
        // Close the cardCreationPopup
        setCardCreationPopup(null);
    }

    function addCards(columnName) {
        setCardCreationPopup(<CreateCardPopup key={1}
            onSubmit={handleSubmit}
            onClose={handleClose}
            availableCards={availableColumns} 
            currentCard={columnName}
            availablePriorities={availablePriorities}/>)
        console.log('Adding card to column:', columnName);
    }

    return (
        <div className='kanban-board-container'>
            <div className='popup-container'>
                {cardCreationPopup}
            </div>
            {availableColumns.map(columnName => (
                <KanbanBoardColumn
                    key={columnName}
                    columnName={columnName}
                    cards={filterCardsByColumn(columnName)}
                    addCards={addCards}
                />
            ))}
        </div>        
    );
};

export default KanbanBoard;