import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [exchangeRates, setExchangeRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    axios.get(apiUrl)
      .then(
        response => {
          setExchangeRates(response.data.rates);
        }
      )
      .catch(error => {
        console.log('Error fetching exchange rates', error);
      });

  }, [fromCurrency]);

  useEffect(() => {
    const conversionRate = exchangeRates[toCurrency];
    if(conversionRate) {
      const converted = amount * conversionRate;
      setConvertedAmount(converted.toFixed(2));
    }
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

  const handleChange = (e) => {
    const {name, value} = e.target;

    switch(name) {
      case 'amount': 
        setAmount(value);
        break; 
      case 'fromCurrency': 
        setFromCurrency(value);
        break; 
      case 'toCurrency': 
        setToCurrency(value);
        break; 
    }
  }

  return (
    <div className="card">
      <img src="./exchange.gif" width="60" alt="logo_img" />
      <h1 className="text">Currency Converter</h1>
      <div className="currency_exchange">
        <div className="input_container">
          <label className="input_label">Amount:</label>
          <input type="number" name="amount" className="input_field" value={amount} onChange={handleChange} />
        </div>

        <div className="input_container">
          <label className="input_label">From Currency:</label>
          <select name="fromCurrency" className="input_field" value={fromCurrency} onChange={handleChange} >
            {
              Object.keys(exchangeRates).map(currency => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))
            }
          </select>
        </div>

        <div className="input_container">
          <label className="input_label">To Currency:</label>
          <select name="toCurrency" className="input_field" value={toCurrency} onChange={handleChange} >
            {
              Object.keys(exchangeRates).map(currency => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))
            }
          </select>
        </div>
      </div>

      <div className="output">
        <h2>Converted Amount: {convertedAmount}</h2>
      </div>
    </div>
  )
}

export default App
