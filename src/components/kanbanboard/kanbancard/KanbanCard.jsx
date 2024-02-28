import React, { useState } from "react";
import './KanbanCard.css';

const KanbanCard = ({ id, name, description, priority }) => {
    const [showContent, setShowContent] = useState(false);

    const handleClick = () => {
        setShowContent(!showContent); // Toggle the state
    };

    return (
        <div className="kanban-card-container">
            <button onClick={handleClick}>
                <div className="kanban-card-header">
                    {name}
                </div>
                <div style={{ display: showContent ? 'block' : 'none' }}>
                    <div className="kanban-card-body">{description}</div>
                    <div className="kanban-card-priority">
                        <img src={priority} alt='' />
                    </div>
                </div>
            </button>
        </div>
    );
};

export default KanbanCard;
