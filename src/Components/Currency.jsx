import React, { useState } from 'react'
import '../CSS/currency.css';
import axios from 'axios';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const Currency = () => {
  const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
  const API_KEY = 'fca_live_mCaM2FegbtyW7x3ArOXKSRGwbC5XfT7Ioq3xLZI2';

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);
  
  const exchange = async () => {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
    const result =  (response.data.data[toCurrency]) * amount;
    setResult(Math.trunc(result)); 
    // Math.trunc(returns the integer part of double or float numbers)
  }
  //   const getData = async () => {
  //     const response = await axios.get(`${BASE_URL}`);
  //     console.log(response.data.data);
  //   }

  //   useEffect(() => {
  //     getData();
  //   }, [])

  return (
    <div className='currency-div'>
      <div className='text-currency'>
        <h3>DÖVİZ KURU UYGULAMASI</h3>
      </div>
      <div className='currency-main'>
      <input 
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        className='amount'
      />

        <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>

        <FaRegArrowAltCircleRight style={{fontSize: '20px', 
        color: 'lightsteelblue'}} />

        <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
          <option>TRY</option>
          <option>EUR</option>
          <option>USD</option>
        </select>

        <input
          value={result}
          onChange={(e) => setResult(e.target.value)}
          type="number" 
          className='result'
         />
      </div>
      <div>
        <button 
        onClick={exchange}
        className='exchange-currency'
        >
          Exchange
        </button>
      </div>
    </div>
  )
}

export default Currency