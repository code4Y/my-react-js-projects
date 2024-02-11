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


      <div className="content">
        <div className="hero-text">
          <p className="content-para">Trusted by over 570+ companies</p>
          <h1>Find Your <span className="content-span">Remote Job</span> </h1>
          <h1>Easy And Fast.</h1>
          <p className="content-alice">A Platform where you can get desired job without any hassel</p>
        </div>
      </div>

    </div>
  )
}

export default App
