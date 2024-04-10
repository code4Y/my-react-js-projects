import { useRef, useState } from 'react';
import './App.css'
import FormInput from './components/FormInput';

function App() {
  // const [username, setUsername] = useState("");

  console.log("re-rendered");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <FormInput name="username" placeholder="Username" />
        <FormInput name="email" placeholder="Email" />
        <FormInput name="fullname" placeholder="Full Name" />
        <FormInput name="something" placeholder="Something Else" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
