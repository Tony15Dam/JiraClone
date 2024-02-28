import React from "react";
import './KanbanCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const KanbanCardCreate = ({ defaultColumn, addCards }) => {

    const showCardStyle = {
        display: defaultColumn ? 'block' : 'none'
    };
    // TODO:
    // Doraditi da se prikazuje samo za default column
    // A kad se hovera column koji nije default da se prikaze create card
    return (
        <div className="kanban-card-container" style={showCardStyle}>
            <button className="create-card-button" onClick={addCards}>
                <span>Create taks </span>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )

}
export default KanbanCardCreate;