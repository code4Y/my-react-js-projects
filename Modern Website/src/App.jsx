import './App.css'

function App() {
  return (
    <div className="container">
      <nav>
        <img src="https://cdn-icons-png.flaticon.com/512/471/471012.png" className="logo" alt="imaged" />
        <ul>
          <li>
            <a href="#">Traval Guide</a>
          </li>
          <li>
            <a href="#">Famous Places</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <button className="btn">
          <img src="https://cdn-icons-png.flaticon.com/512/11510/11510915.png" alt="icon" /> Bookings
        </button>
      </nav>
      <div className="content">
        <h1>
          Beautiful
          <br />
          Places to explore
        </h1>
        <p>
          Welcome to our travel guide, your gateway to the world's most breathtaking locations. 
          We're committed to making your journey unforgettable, filled with awe-inspiring 
          landscapes and thrilling adventures. Let's explore the wonders of our planet together. 
          Happy travels!
        </p>
        <form>
          <input type="text" placeholder="Country Name" />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
