import { useState,useEffect } from "react";
const APIURL = "https://v6.exchangerate-api.com/v6/cfa60b580e8556d3b63c6123/latest/";

const useCurrencyExchanger = (baseCode,toCurrency,Amount)=>{
 const [data,setData] = useState(null);
 const [error,setError] = useState(null);
 const [isLoading,setIsLoading] = useState(true);
 const [exchangedMoney,setExchangedMoney] = useState(1);
 const [fromKeyArray,setFromKeyArray] = useState([]);
 const [toKeyArray,setToKeyArray] = useState([])
  useEffect(()=>{
    
   const FetchAPI = async()=>{
    try {
   const response = await fetch(`${APIURL}${baseCode}`);
    if(!response.ok){
        throw new Error("Basecode doesn't exist!");
    }
    const dataFetched = await response.json();
    setData(dataFetched);
    const conversion_rates =dataFetched.conversion_rates[toCurrency];
    console.log(conversion_rates);
    setExchangedMoney(Number(conversion_rates)*Number(Amount));
    setFromKeyArray(Object.keys(dataFetched.conversion_rates));
    setToKeyArray(Object.keys(dataFetched.conversion_rates));
    } catch (error) {
       setError(error) 
    }finally{
        setIsLoading(false)
    }
   }
   FetchAPI();
  },[baseCode,toCurrency,Amount])
  
   return {data,error,isLoading,exchangedMoney,fromKeyArray,toKeyArray}
}

export default useCurrencyExchanger;