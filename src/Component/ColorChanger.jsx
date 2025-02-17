
import { useEffect, useState } from "react";
import CurrentColor from "./CurrentColor";
const colors = ["bg-sky-500","bg-pink-500","bg-black"]
function ColorChanger(){
 const [backgroundColor, setBackGroundColor] = useState("bg-black");
 
 const ChangeBackGround = (color)=>{
    setBackGroundColor(color)
 }

 useEffect(()=>{
    setBackGroundColor("bg-red-900")
 },[backgroundColor])
 return(
    <section>
        <div className={`${backgroundColor} w-full h-[100vh] flex justify-center items-center`}>
            <div className="w-[80%] md:w-[40%] h-[200px] bg-amber-800 text-white flex flex-col justify-center items-center gap-5">
               <div className="text-center">
               <p>Change background Color!</p>
               <p>Click on the buttons!</p>
               </div>
               <div className="flex justify-evenly w-[50%]">
                {colors.map((color,index)=>{
                    return (
                      <div key={index} onClick={()=>setBackGroundColor(color)} className={`${color} w-5 h-5 rounded-4xl cursor-pointer hover:border border-white`}></div>
                    )
                })}
               </div>
               <CurrentColor color={backgroundColor} ChangeBackGround={ChangeBackGround}/>
            </div>
        </div>
    </section>
 )
}

 export default ColorChanger; 
