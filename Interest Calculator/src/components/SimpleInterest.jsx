import React, { useState } from 'react';

function SimpleInterest() {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [interest, setInterest] = useState(0);

  const calculateInterest = () => {
    if(principal > 0 && rate > 0 && time > 0) {
      const calculatedInterest = (principal * rate * time) / 100;
      setInterest(calculatedInterest.toFixed(2));
    }
  };

  return (
    <div className="bgFloat">
      <h2>Simple Interest Calculator</h2>
      <label id="interest">
        Calculated Simple Interest is 
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
      <button onClick={calculateInterest}>Calculate</button>
    </div>
  );
}

export default SimpleInterest;
