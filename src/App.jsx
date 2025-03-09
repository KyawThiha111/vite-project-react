import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import React from 'react';
import { createContext } from 'react';
import  {Developer} from './Component/Developer';

export const myContext = createContext(undefined);
function App() {
   const [developer,setDeveloper] = useState({
    name:"Kyaw Thiha",
    age:21,
    skills:["Mern Stack","Python","mySQL"]
   })
   const handleSetDeveloperskills = (newData)=>{
     setDeveloper({...developer,skills:[...developer.skills,newData]})
   }
   return(
     <div>
       <myContext.Provider value={{developer,handleSetDeveloperskills}}>
       <Developer/>
       </myContext.Provider>
     </div>
   )
}

export default App;

