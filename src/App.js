import './App.css';
import React, {useState} from 'react';
import JurraCard from './JurraCard'
import CommandBar from './CommandBar'
import CreateCardPopup from './CreateCardPopup';
import CardColumn from './CardColumn';
import CardHolder from './CardHolder';

import KanbanBoard from './components/kanbanboard/KanbanBoard';

// Make an array containing the existing JurraCards and update the array when new cards are created

function App() {

  const [jurraCards, setJurraCards] = useState([]);
  const [cardCreationPopup, setCardCreationPopup] = useState([]);

  const addCard = (name, description, priority,) =>
  {
    // Clone the current array of jurraCards and add a new one
    setJurraCards([...jurraCards, <JurraCard key={jurraCards.length} name = {name} description = {description} priority = {priority}/>])

    // Unmount CreateCardPopup upon card creation
    setCardCreationPopup(null);
  }

  const handleSubmit = (formData) =>
  {
    addCard(formData.name, formData.description, formData.priority);
  }

  const handleClose = () =>
  {
    // Close the cardCreationPopup
    setCardCreationPopup(null);
  }

// Create popup window which will take in information about a card and 
// pass that information to the new JurraCard instance it will create
 const handleCardCreation = () =>
 {
    setCardCreationPopup(<CreateCardPopup key = {1} onSubmit={handleSubmit} onClose={handleClose} availableCards={CardBoardColumnName()} availablePriorities={availablePriority}/>)
 }

 function CardBoardColumnName(){
  // Don't add more it breaks we need to found some css to add horizotal scrollbar 
  return ['MONDAY',"TUESDAY","Wednesday","Thursday"]
 }
 
 const availablePriority = ['Major', 'Minor']
 const availableColumns = ['To Do', 'In Progress', 'Done'];
 const cards = [
     { id: 1, name: 'Task 1', description: 'Description of Task 1', priority: '/Major.png', column: 'To Do' },
     { id: 2, name: 'Task 2', description: 'Description of Task 2', priority: '/Major.png', column: 'In Progress' },
     { id: 3, name: 'Task 3', description: 'Description of Task 3', priority: '/Minor.png', column: 'Done' },
     { id: 4, name: 'Task 1', description: 'Description of Task 5', priority: '/Minor.png', column: 'To Do' },

     // Add more cards as needed
 ];


 /*Workload needs to be a separate column where cards are stored upon creation and then transfered over to other columns */
  return (
    <>
    <CommandBar CreatePopup={handleCardCreation}>
    </CommandBar>
    <div className = "popup-container">
      {cardCreationPopup}
    </div>
    <CardHolder name = "CardContainer" cards = {jurraCards}></CardHolder>
      <div className='temp-placeHolder'>
        {CardBoardColumnName().map((columnName) => (<CardColumn name={columnName.toUpperCase()} />))}
      </div>
      <div className='vinko-test'>
        <KanbanBoard availableColumns={availableColumns} availablePriorities={availablePriority} cards={cards} />
      </div>
    </>
  );
}

export default App;
