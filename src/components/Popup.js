import React from 'react'
import './Popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-bttn" onClick={() => props.setTrigger(false)}>&times;</button>
                { props.children }
            </div>
          </div>
    ) : "";
}

export default Popup