import React, {useState} from 'react'; 
import BoyHostelName from './Boyshostelname'; 

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
            {/* <BoyHostelName type={typeValue}></BoyHostelName> */}
         
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
               <img src="./male.png" alt="pic of a boy"/>
               <h3>Boys Hostel</h3>
           </div>
           <div className="girlClass"  onClick={selectHostelGirls}>
           <img src="./female.png" alt="pic of a girl"/>
               <h3>Girls Hostel</h3>
           </div>
       </div>
     </>
 ) ;
        }
    }



  }

  export default FrontPage;