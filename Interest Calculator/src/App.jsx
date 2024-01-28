import React, { useState } from 'react';
import './App.css';
import SimpleInterest from './components/SimpleInterest';
import CompoundInterest from './components/CompoundInterest';

function App() {
  const [showSimpleInterest, setShowSimpleInterest] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShowSimpleInterest(!showSimpleInterest)}>
        Switch to {showSimpleInterest ? 'Compound Interest' : 'Simple Interest'}
      </button>
      {showSimpleInterest ? <SimpleInterest /> : <CompoundInterest />}
    </div>
  );
}

export default App
