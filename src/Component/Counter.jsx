
import { useState } from "react";
function Counter(props){
 const {number,setNumber} = props;

 const Increasement =()=>{
    setNumber(number+1);
    console.log(number)
 }
 const Decreasement =()=>{
    number>0?setNumber(number-1):setNumber(number)
    console.log(number)
 }
    return(
        <div className='counter-wrapper'>
            <p className="numbertext">Number:<span className="number">{number}</span></p>
           <div className="button_container">
           <button className="button" onClick={()=>Increasement()}>Increase</button>
           <button className="button" onClick={()=>Decreasement()}>Decrease</button>  
           </div>
        </div>
    )
}

 export default Counter; 
