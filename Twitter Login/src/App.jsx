import './App.css'

function App() {
  return (
    <div className='App'>
      <div className="logo-box">
        <img src="./twitter.png" alt="logo" className='logo' />
        <h2>Sign In To Twitter</h2>
        <button>
          <img src="./google.png" alt="logo" />
          Sign in with Google
        </button>
        <button>
          <img src="./apple.png" alt="logo" />
          Sign in with Apple
        </button>
      </div>
    </div>
  )
}

export default App
