import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import CurrencyConverter from './Components/CurrencyConverter';
function App() {
    return (
     <div>
      <h2>Currency Exchanger</h2>
      <CurrencyConverter/>
     </div>
    )
}

export default App;

