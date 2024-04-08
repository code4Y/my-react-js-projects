import { useRef, useState } from 'react';
import './App.css'
import FormInput from './components/FormInput';

function App() {
  // const [username, setUsername] = useState("");

  console.log("re-rendered");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameRef = useRef();
  }

  console.log(usernameRef);
  return (
    <div className="App">
      <form className={handleSubmit}>
        <FormInput refer={usernameRef} placeholder="Username" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="Something Else" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
