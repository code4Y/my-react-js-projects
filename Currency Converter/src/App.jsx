import './App.css';

function App() {
  return (
    <div className="card">
      <img src="./exchange.gif" width="60" alt="logo_img" />
      <h1 className="text">Currency Converter</h1>
      <div className="currency_exchange">
        <div className="input_container">
          <label className="input_label">Amount:</label>
          <input type="number" name="amount" className="input_field" value="" />
        </div>

        <div className="input_container">
          <label className="input_label">From Currency:</label>
          <select name="fromCurrency" className="input_field">
            <option value="inr">INR</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
          </select>
        </div>

        <div className="input_container">
          <label className="input_label">To Currency:</label>
          <select name="toCurrency" className="input_field">
            <option value="inr">INR</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
          </select>
        </div>
      </div>

      <div className="output">
        <h2>Converted Amount: <b>6743</b></h2>
      </div>
    </div>
  )
}

export default App
