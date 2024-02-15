import "./CommandBar.css";

/* This component will host the CREATE button which will be used to create 
new JurraCard instances within the card-container div added to the App.jsx file*/

function CommandBar({CreatePopup})
{
    return(
        <div className = "commandBar">
            <button className = "createButton" onClick = {CreatePopup}>CREATE</button>
        </div>
    );
}

export default CommandBar;