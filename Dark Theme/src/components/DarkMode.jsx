import { useState } from "react"
import Sun from "./sun.png";
import Moon from "./moon.png";
import './DarkMode.css'

const DarkMode = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className="dark_mode">
      <input 
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme} 
        checked={theme === 'dark'}
      />

    <label className="dark_mode_label" htmlFor="darkmode-toggle">
    {theme === 'light' ? <img src={Sun} alt="Sun" /> : <img src={Moon} alt="Moon" />}
    </label>
    </div>
  )
}

export default DarkMode