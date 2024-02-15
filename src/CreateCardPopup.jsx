import React, {useState} from 'react';
import './CreateCardPopup.css';
// Created upon clicking the CREATE button, should take inputs and upon clicking this component's create button 
// Create the JurraCard component in the card-container div

const CreateCardPopup = ({ onSubmit, onClose }) => {
    const [formData, setFormData] = useState({
      name: '',
      description: '',
      priority: '',
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
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <br />
  
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </label>
            <br />
  
            <label>
              Priority:
              <input
                type="text"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              />
            </label>
            <br />
  
            <button type="submit">Create JurraCard</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default CreateCardPopup;