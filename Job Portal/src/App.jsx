import './App.css'

function App() {

  return (
    <div className='container'>
      <nav>
        <div className='logo-container'>
          <img src="./logo.png" alt="" />
        </div>

        <div className='menu-container'>
          <ul>
            <li>
              <a href="#" className='active'>Products</a>
            </li>
            <li>
              <a href="#">Solution</a>
            </li>
            <li>
              <a href="#">Price</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className='btn-container'>
          <button className='btn'>
            Log In
          </button>
        </div>
      </nav>
      
    </div>
  )
}

export default App
