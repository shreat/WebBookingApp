import React from "react";
import CreateBooking from "./createbooking";
import "../styles/login.css"

function Calender() {
    return(
        <div className="calender-container">
            <h4>Content</h4>
            <div className="booking-form">
               {<CreateBooking />}
            </div>
            
        </div>
        
    );

}

export default Calender;