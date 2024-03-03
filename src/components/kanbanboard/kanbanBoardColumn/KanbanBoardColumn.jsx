import React from 'react';
import KanbanCard from '../kanbancard/KanbanCard';
import KanbanCardCreate from '../kanbancard/KanbanCardCreate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import './KanbanBoardColumn.css'

const KanbanBoardColumn = ({ columnName, cards, addCards }) => {

    function handleClick() {
        addCards(columnName); 
    }
    function isDefaultColumn(columnName){
        if (columnName.columnName === 'To Do') {
            return true;
        }
        return false;
    }

    return (
        <div className='kanban-board-column'>
            <div className='kanban-board-header'>
                <div className='kanban-column-name'>{columnName}</div>
                <button onClick={handleClick} className='kanban-column-plus-button'>
                    <FontAwesomeIcon className='kanban-column-plus-icon' icon={faEllipsis} />
                </button>
            </div>
            {cards.map(card => (
                <KanbanCard
                    key={card.id}
                    name={card.name}
                    description={card.description}
                    priority={card.priority}
                />
            ))}
            <KanbanCardCreate defaultColumn={isDefaultColumn({ columnName })} addCards={addCards} />
        </div>
    );
};

export default KanbanBoardColumn;
