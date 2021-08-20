import React, {useState} from 'react'; 
import BoyHostelName from './Boyshostelname'; 
import male from './male.png';
import female from'./female.png';

import '../App.css';
  
  
  function FrontPage(){

    const data=localStorage.getItem('data');
     

     const [clickValue, setClickValue] = useState(false);
     const [typeValue, setTypeValue] = useState("B");

    let selectHostelGirls= ()=>{

        setClickValue(true);
        setTypeValue("G");

     };

    let selectHostelBoys= () => {
        setClickValue(true);
        setTypeValue("B");
     };

     

    if(data){
         return (
         <>
            <div>
                <p>you already have booked room </p>
                <p>Your details are:</p>
                <p>Hostel Name</p>
                <p>Room Number</p>
            </div>
         
         </>


         );
    }
    else {

        if(clickValue){

            return(
                <>
                   <BoyHostelName type={typeValue}></BoyHostelName>
                </>
            );
        }

        else {
 return (
     <>
     <h1>Choose your Hostel</h1>
       <div className="BoyGirlClass">
           
           <div className="boyClass" onClick={selectHostelBoys}>
               <img src={male} alt="pic of a boy" height="50px" width="50px"/>
               <h3>Boys Hostel</h3>
           </div>
           <div className="girlClass"  onClick={selectHostelGirls}>
           <img src={female} alt="pic of a girl" height="50px" width="50px"/>
               <h3>Girls Hostel</h3>
           </div>
       </div>
     </>
 ) ;
        }
    }



  }

  export default FrontPage;