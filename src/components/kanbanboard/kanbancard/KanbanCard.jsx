import React from "react";
import './KanbanCard.css';

const KanbanCard = ({ id, name, description, priority }) => {

    return (
        <div className="kanban-card-continer">
            <div className="kanban-card-header">
                {name}
            </div>
            <div>
                <div className="kanban-card-body">{description}</div>
                <div className="kanban-card-priority">
                    <img src={priority} alt=''/>
                </div>
            </div>
        </div>
    );
};
export default KanbanCard;