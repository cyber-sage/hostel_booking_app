import React, { useState } from 'react';
import '../App.css';
import FloorAndRoomNumber from'./floorAndroomnumber';

function HostelNumber(props){
    let [roomClick,setRoomClick] = useState(false);
    // let [roomNum,setRoomNum] = useState(0);
    let [hostelName,setHostelName]= useState("");

   const floorandRoom= (e) =>{
       
          setRoomClick(true);

          if(e.target.classList[1]==="One"){
            setHostelName("B1");
          }
          else if(e.target.classList[1]==="Two"){
            setHostelName("B2");
        }
        else if(e.target.classList[1]==="Three"){
            setHostelName("B3");
        }
        else if(e.target.classList[1]==="Four"){
            setHostelName("B4");
        }
        else if(e.target.classList[1]==="Five"){
            setHostelName("B5");
        }
        else if(e.target.classList[1]==="Six"){
            setHostelName("B6");
        }

        // console.log(e.target.classList);
        // console.log(e.target.classList[1]==="One");

   }
     if(roomClick){
         return (
         <>
               <FloorAndRoomNumber hostelNum={hostelName} roomNumber="1"></FloorAndRoomNumber>
               <FloorAndRoomNumber hostelNum={hostelName} roomNumber="2"></FloorAndRoomNumber>
               <FloorAndRoomNumber hostelNum={hostelName} roomNumber="3"></FloorAndRoomNumber>
               <FloorAndRoomNumber hostelNum={hostelName} roomNumber="4"></FloorAndRoomNumber>
               <FloorAndRoomNumber hostelNum={hostelName} roomNumber="5"></FloorAndRoomNumber>
               <FloorAndRoomNumber hostelNum={hostelName} roomNumber="6"></FloorAndRoomNumber>
               <FloorAndRoomNumber hostelNum={hostelName} roomNumber="7"></FloorAndRoomNumber>
               <FloorAndRoomNumber hostelNum={hostelName} roomNumber="8"></FloorAndRoomNumber>
               <FloorAndRoomNumber hostelNum={hostelName} roomNumber="9"></FloorAndRoomNumber>
               <FloorAndRoomNumber hostelNum={hostelName} roomNumber="10"></FloorAndRoomNumber>

               
               
          </> 
           );   
     }
     else {
    return (

      <>
      <div  className="hostel-cell One" onClick={floorandRoom}>{props.num}1</div>
      <div  className="hostel-cell Two" onClick={floorandRoom}>{props.num}2</div>
      <div  className="hostel-cell Three" onClick={floorandRoom}>{props.num}3</div>
      <div  className="hostel-cell Four" onClick={floorandRoom}>{props.num}4</div>
      <div  className="hostel-cell Five" onClick={floorandRoom}>{props.num}5</div>
      <div  className="hostel-cell Six" onClick={floorandRoom}>{props.num}6</div>
      
             
      
      </>


    );
     }
 

    


}

export default HostelNumber;