import React, { useState } from 'react';

function CompoundInterest() {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [compoundings, setCompoundings] = useState(1);
  const [interest, setInterest] = useState(0);

  const calculateInterest = () => {
    if(principal > 0 && rate > 0 && time > 0) {
      const calculatedInterest = principal * Math.pow((1 + (rate / (compoundings * 100))), (compoundings * time)) - principal;
      setInterest(calculatedInterest.toFixed(2));
    }
  };

  return (
    <div className="bgFloat">
      <h2>Compound Interest</h2>
      <label id="interest">
        Calculated Compound Interest is 
        <h2>Rs. {interest}</h2>
      </label>
      <label>Principal Amount (in Rs): </label>
      <input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} />
      <br/>
      <label>Rate of Interest (in %): </label>
      <input type="number" value={rate} onChange={e => setRate(e.target.value)} />
      <br/>
      <label>Time (in years): </label>
      <input type="number" value={time} onChange={e => setTime(e.target.value)} />
      <br/>
      <label>Number of Compoundings per Year: </label>
      <input type="number" value={compoundings} onChange={e => setCompoundings(e.target.value)} />
      <br/>
      <button onClick={calculateInterest}>Calculate</button>
    </div>
  );
}

export default CompoundInterest;