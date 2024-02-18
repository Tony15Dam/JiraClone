import React, {useState} from 'react';
import './KanbanBoard.css';
import KanbanBoardColumn from './kanbanBoardColumn/KanbanBoardColumn.jsx';

const KanbanBoard = ({ availableColumns, cards }) => {

    function filterCardsByColumn(columnName) {
        return cards.filter(card => card.column === columnName);
    }

    return (
        <div className='kanban-board-container'>
            {availableColumns.map(columnName => (
                <KanbanBoardColumn
                    key={columnName}
                    columnName={columnName}
                    cards={filterCardsByColumn(columnName)}
                />
            ))}
        </div>
    );
};

export default KanbanBoard;