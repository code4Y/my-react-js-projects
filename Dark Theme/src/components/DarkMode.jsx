import { useEffect, useState } from "react"
import Sun from "./sun.png";
import Moon from "./moon.png";
import './DarkMode.css'

const DarkMode = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('selectedTheme', newTheme);
  }

  useEffect(() => {
    const selectedTheme = localStorage.getItem('selectedTheme')
    if(selectedTheme)
    {
      setTheme(selectedTheme)
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme]);

  return (
    <div className="dark_mode">
      <input 
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme} 
        defaultChecked={theme === 'dark'}
      />

    <label className="dark_mode_label" htmlFor="darkmode-toggle">
      {theme === 'light' ? 
        <img src={Sun} alt="Sun" className="sun" /> : 
        <img src={Moon} alt="Moon" className="moon" />
      }
    </label>
    </div>
  )
}

export default DarkMode