import './App.css';
import React, {useState} from 'react';
import JurraCard from './JurraCard'
import CommandBar from './CommandBar'
import CreateCardPopup from './CreateCardPopup';
import CardColumn from './CardColumn';
import CardHolder from './CardHolder';

// Make an array containing the existing JurraCards and update the array when new cards are created

function App() {

  const [jurraCards, setJurraCards] = useState([]);
  const [cardCreationPopup, setCardCreationPopup] = useState([]);

  const addCard = (name, description, priority) =>
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
    // Get information about cards and create new one on click
    // Handle freeing memory or something
    setCardCreationPopup(<CreateCardPopup key = {1} onSubmit={handleSubmit} onClose={handleClose}/>)
 }


 /*Workload needs to be a separate column where cards are stored upon creation and then transfered over to other columns */
  return (
    <>
    <CommandBar CreatePopup={handleCardCreation}>
    </CommandBar>
    <div className = "popup-container">
      {cardCreationPopup}
    </div>
    <CardHolder name = "CardContainer" cards = {jurraCards}></CardHolder>
    <CardColumn name = "MONDAY" ></CardColumn>
    <CardColumn name = "TUESDAY"></CardColumn>
    </>
  );
}

export default App;