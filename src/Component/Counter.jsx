
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
        <div className='bg-neutral-700 px-25 py-14 flex flex-col items-center gap-2'>
            <p className="">Number:<span className="">{number}</span></p>
           <div className="flex bg-red-400 flex gap-6">
           <button className="bg-sky-300" onClick={()=>Increasement()}>Increase</button>
           <button className="bg-sky-300" onClick={()=>Decreasement()}>Decrease</button>  
           </div>
        </div>
    )
}

 export default Counter; 
