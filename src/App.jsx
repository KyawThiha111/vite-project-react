import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import Counter from './Component/Counter';
function App() {
  const [number,setNumber] = useState(0);
  const [bgColor,setBgColor] = useState("bg-blue-200");
  const [countSize,setCountSize] = useState("text-2xl")
     useEffect(()=>{
       bgColor==="bg-blue-200"?setBgColor("bg-pink-400"):setBgColor("bg-blue-200");
       setCountSize("text-6xl");
       const timeOutid = setTimeout(()=>{
        setCountSize("text-2xl")
       },1000)
       return ()=> clearTimeout(timeOutid)
     },[number])
    return (
      <div>
       <Counter number={number} bgColor={bgColor} countSize={countSize} setNumber={setNumber}/>
      </div>
    )
}

export default App;

