import React from 'react';
import '../App.css';
import RoomNumber from './roomnumber';

function FloorAndRoomNumber(props){


    return (

     <>
         <RoomNumber hostelName={props.hostelNum} roomnumber={props.roomNumber}></RoomNumber>
     
     </>


    );

    


}

export default FloorAndRoomNumber;