import React from "react";
import './KanbanCard.css';

const KanbanCard = ({ id, name, description, priority, moveCard })  =>{

    const handleChangeColumn = (e) => {
        const targetColumn = e.target.value;
        moveCard(id, targetColumn);
    };

    return (
        <div className="kanban-card-continer">
            <div className="kanban-card-header">
                {name}
            </div>
            <div>
                <div className="kanban-card-body">{description}</div>
                <div className="kanban-card-priority">{priority}</div>
            </div>
        </div>
    );
};
export default KanbanCard;