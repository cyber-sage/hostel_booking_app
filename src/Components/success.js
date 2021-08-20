import React from "react";
import "../App.css";

function BookingSuccesful(props){

  return (

   <>
       <div className="Success">
           
           <p>Your Room has been booked Succecfully</p>
           <p>Your Details are:</p>
           <p>HostelName:{props.hostelName}</p>
           <p>Room Number:{props.roomNumber}</p>
           </div>
   
   </>


  );

}

export default BookingSuccesful;