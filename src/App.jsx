import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import useCurrencyExchanger from "./Hooks/useExchanger";
function App() {
  const [fromCurrency,setFromCurrency] = useState("USD");
  const [toCurrency,setToCurrency] = useState("MMK");
  const [amount,setAmount] = useState(3);
  const {data,error,isLoading,exchangedMoney} = useCurrencyExchanger(fromCurrency,toCurrency,amount);
  /* For Input and Button */
  const [fromInput,setFromInput] = useState("USD");
  const [toInput,setToInput] = useState("MMK");
  const [amountInput,setAmountInput] = useState(1);

  const FromHandler = (event)=>{
    setFromInput(event.target.value)
  }
  const ToHandler = (event)=>{
    setToInput(event.target.value)
  }
  const amountHandler = (event)=>{
    setAmountInput(event.target.value)
  }

  const ChangeBtnHandler = ()=>{
    setFromCurrency(fromInput);
    setToCurrency(toInput)
    setAmount(amountInput);
    setFromInput("")
    setToInput("")
  }
    return (
     <div>
      <h2>Currency Exchanger</h2>
      <div>
        <input onChange={FromHandler} type="text" placeholder='From' value={fromInput} />
        <input onChange={ToHandler} type="text" placeholder='To' value={toInput} />
        <input onChange={amountHandler} type="text" placeholder='Amount'/>
        <button onClick={ChangeBtnHandler}>Change</button>
      </div>
      <p>{exchangedMoney}</p>
     </div>
    )
}

export default App;

