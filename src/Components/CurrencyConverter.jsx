import { useState } from "react";
import useCurrencyExchanger from "../Hooks/useExchanger";
const CurrencyConverter = ()=>{
    const [fromCurrency,setFromCurrency] = useState("USD");
    const [toCurrency,setToCurrency] = useState("MMK");
    const [amount,setAmount] = useState(1);
    const {data,error,isLoading,exchangedMoney,fromKeyArray,toKeyArray} = useCurrencyExchanger(fromCurrency,toCurrency,amount);
    /* For Input and Button */
    const [fromOption,setFromOption] = useState("USD");
    const [toOption,setToOption] = useState("MMK");
    const [amountInput,setAmountInput] = useState(1);
     const fromSelectHandler = (event)=>{
        setFromOption(event.target.value);
     }
     const toSelectHandler = (event)=>{
        setToOption(event.target.value);
     }
      const amountHandler = (event)=>{
        setAmountInput(event.target.value)
      }

      const ChangeBtnHandler = ()=>{
        setFromCurrency(fromOption);
        setToCurrency(toOption)
        setAmount(amountInput);
      }
    return(
        <div>
            <div>
            <select onChange={fromSelectHandler} value={fromOption} id="fromCurrencySelector">
                   {fromKeyArray.map((fromKey,index)=>{
                    return (
                        <option key={index} value={fromKey}>{fromKey}</option>
                    )
                   })}
            </select>
            <select onChange={toSelectHandler} value={toOption} id="toKeySelector">
                {toKeyArray.map((toKey,index)=>{
                   return (
                    <option key={index} value={toKey}>{toKey}</option>
                   )
                })}
            </select>
            Amount: <input onChange={amountHandler} type="text" placeholder="1"/>
            <button onClick={ChangeBtnHandler}>Change</button>
            </div>
            <p>{exchangedMoney}</p>
        </div>
    )
}

export default CurrencyConverter;