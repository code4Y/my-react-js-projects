import React from "react";
import "./DarkMode.css";
import { ReactComponent as Sun } from "./sun.png";
import { ReactComponent as Moon } from "./moon.png";

 
const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme','dark');
        localStorage.setItem("selectedTheme","dark")
    }
 
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme','light');
        localStorage.setItem("selectedTheme","light")
    }
 
    const selectedTheme = localStorage.getItem("selectedTheme");
    if(selectedTheme === 'dark')
    {
        setDarkMode();
    }
 
    const toggleTheme = (e) =>{
        if(e.target.checked) setDarkMode();
        else setLightMode();
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme === 'dark'}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <img src="./sun.png" alt="" />
                <img src="./moon.png" alt="" />
                {/* <Sun /> */}
                {/* <Moon /> */}
            </label>
        </div>
    );
};
 
export default DarkMode;