import React, {useState} from 'react';
import './CreateCardPopup.css';
// Created upon clicking the CREATE button, should take inputs and upon clicking this component's create button 
// Create the JurraCard component in the card-container div

const CreateCardPopup = ({ onSubmit, onClose, availableCards}) => {
    const [formData, setFormData] = useState({
      name: '',
      description: '',
      priority: '',
      column:'',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Pass the entered data to the onSubmit function
      onSubmit(formData);
      // Close the popup after submitting
      onClose();
    };
  
    return (
      <div className="popup">
        <div className="popup-content">
          <form onSubmit={handleSubmit}>
            <div className='create-card-form-row'>
              <label>Name: </label><input type="text" name="name" value={formData.name} onChange={handleChange}/>
            </div>
            <div className='create-card-form-row'>
              <label>Description: </label><input type="Text" name="description" value={formData.description} onChange={handleChange}/>
            </div>
            <div className='create-card-form-row'>
              <label>Priority: </label><input type="text" name="priority" value={formData.priority} onChange={handleChange}/>
            </div>
            <div className='create-card-form-row'>
              <label>Column: </label>
              <select name="column" value={formData.column} onChange={handleChange}>
                {availableCards.map((option,index) =>(
                  <option key={index} value={option.toUpperCase()}>{option.toUpperCase()}</option>
                ))}
              </select>
            </div>
            
            
            <div className='create-card-popup-footer'>
            <button className='create-card-popup-footer-button' type="submit">Create</button>
            <button className='create-card-popup-footer-button' type="button" onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default CreateCardPopup;