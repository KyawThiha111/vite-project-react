import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import Counter from './Component/Counter';
function App() {
  const [number,setNumber] = useState(0)
 
    return (
      <div>
       <Counter number={number} setNumber={setNumber}/>
      </div>
    )
}

export default App;

