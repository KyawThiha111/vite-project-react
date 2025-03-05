
import { useState } from "react";
function Counter(props){
 const {number,bgColor,countSize,setNumber} = props;

 const Increasement =()=>{
    setNumber(number+1);
    console.log(number)
 }
 const Decreasement =()=>{
    number>0?setNumber(number-1):setNumber(number)
    console.log(number)
 }
    return(
        <div className={`w-full bg-black h-screen flex items-center justify-center`}>
         <div className={`${bgColor} py-10 flex flex-col items-center gap-6 justify-center sm:w-3/4 md:w-1/4`}>
         <p className="text-xl font-bold">Number:<span className={`${countSize} ml-3`}>{number}</span></p>
           <div className="flex justify-between gap-6">
           <button className="bg-white rounded-4xl w-25 py-2 hover:w-30 hover:py-3 transition-all duration-100" onClick={()=>Increasement()}>Increase</button>
           <button className="bg-white rounded-4xl w-25 py-2 hover:w-30 hover:py-3 transition-all duration-100" onClick={()=>Decreasement()}>Decrease</button>  
           </div>
         </div>
        </div>
    )
}

 export default Counter; 
