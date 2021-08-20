import '../App.css';
import HostelNumber from'./hostelNumber';
   
   function BoyHostelName(props){


   return (
    <>
     <h1 style={{textAlign:"center"}}>Choose a Hostel</h1>
    <div className="conatiner">
   
        <div className="hostel-grid">
           <HostelNumber num={props.type}></HostelNumber>
           {/* <HostelNumber num={props.type+2}></HostelNumber>
           <HostelNumber num={props.type+3}></HostelNumber>
           <HostelNumber num={props.type+4}></HostelNumber>
           <HostelNumber num={props.type+5}></HostelNumber>
           <HostelNumber num={props.type+6}></HostelNumber> */}
       
             {/* <div  className="hostel-cell" >{props.type}1</div>
             <div  className="hostel-cell">{props.type}2</div>
             <div className="hostel-cell" >{props.type}3</div>
             <div className="hostel-cell">{props.type}4</div>
             <div className="hostel-cell">{props.type}5</div>
             <div className="hostel-cell">{props.type}6</div> */}
        </div>
        </div>
        
    
    
    
    </>



   );




   }


   export default BoyHostelName;