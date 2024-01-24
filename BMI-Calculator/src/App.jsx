import React, { useState } from 'react';
import './App.css'

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const calculateBMI = () => {
    if(height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const calculatedBMI = weight / (heightInMeters * heightInMeters);
      setBmi(calculatedBMI.toFixed(2));
    }
  };

  const getBMIDescription = () => {
    if(bmi < 18.5) {
      return 'Underweight';
    } else if(bmi >= 18.5 && bmi < 24.9) {
      return 'Normal weight';
    } else if(bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obesity';
    }
  };

  return (
    <div className='bgFloat'>
      <h2>BMI Calculator</h2>
      <label>Height (in cm): </label>
      <input type="number" value={height} onChange={e => setHeight(e.target.value)} />
      <br/>
      <label>Weight (in kg): </label>
      <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      <br/>
      <button onClick={calculateBMI}>Calculate</button>
      {bmi > 0 && <p>Your BMI is {bmi}, which is considered {getBMIDescription()}</p>}
    </div>
  );
}

export default App;
