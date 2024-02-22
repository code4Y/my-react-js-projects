import './App.css'

function App() {
  return (
    <div className="container">
      <nav>
        <img src="" className="logo" alt="imaged" />
        <ul>
          <li>
            <a href="">Traval Guide</a>
          </li>
          <li>
            <a href="">Famous Places</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
        <button className="btn">
          <img src="" alt="icon" /> Bookings
        </button>
      </nav>
      <div className="content">
        <h1>
          Beautiful
          <br />
          Places to explore
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
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
