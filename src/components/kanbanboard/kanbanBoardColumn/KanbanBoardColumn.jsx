import React from 'react';
import KanbanCard from '../kanbancard/KanbanCard';
import './KanbanBoardColumn.css'

const KanbanBoardColumn = ({ columnName, cards }) => {
    return (
        <div className='kanban-board-column'>
            <div className='kanban-board-header'>{columnName}</div>
            {cards.map(card => (
                <KanbanCard
                    key={card.id}
                    name={card.name}
                    description={card.description}
                    priority={card.priority}
                />
            ))}

        </div>
    );
};

export default KanbanBoardColumn;
