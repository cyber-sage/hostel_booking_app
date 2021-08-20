import React,{useState} from 'react';
import '../App.css';
import BookingSuccesful from "./success";
// import RoomNumber from './roomnumber';

function FloorAndRoomNumber(props){

    const [displayValue,setDisplayValue]=useState("none");

    const [roomNumberValue, setRoomNumberValue] =useState(0);

    const [buttonClick,setbuttonClick] = useState(false);
    // let dataValue={hostelName:props.hostelNum,
    //     roomNumber:roomNumberValue};

    const bookme = () =>{
       setbuttonClick(true);
    //    localStorage.setItem('data',JSON.stringify(dataValue));

    }

    

   const selectRoom = (e) =>{

        e.target.classList.add("room");
        setDisplayValue("block");
        setRoomNumberValue(e.target.id);
    }
     if(buttonClick){
            
        return <>
        <BookingSuccesful hostelName={props.hostelNum} roomNumber={roomNumberValue}></BookingSuccesful>
        </>



     }
    
    else { return (

     <>
         {/* <RoomNumber hostelName={props.hostelNum} roomnumber={props.roomNumber}></RoomNumber> */}

         <div className="hostel-cell" id="1" onClick={selectRoom}>1</div>
         <div className="hostel-cell" id="2" onClick={selectRoom}>2</div>
         <div className="hostel-cell" id="3" onClick={selectRoom}>3</div>
         <div className="hostel-cell" id="4" onClick={selectRoom}>4</div>
         <div className="hostel-cell" id="5" onClick={selectRoom}>5</div>
         <div className="hostel-cell" id="6" onClick={selectRoom}>6</div>
         <div className="hostel-cell" id="7" onClick={selectRoom}>7</div>
         <div className="hostel-cell" id="8" onClick={selectRoom}>8</div>
         <div className="hostel-cell" id="9" onClick={selectRoom}>9</div>
         <div className="hostel-cell"id="10" onClick={selectRoom}>10</div>

         <div><button type="button" style={{display:displayValue}}
         onClick={bookme}>BookRoom</button></div>
     
     </>


    );
    }

    


}

export default FloorAndRoomNumber;