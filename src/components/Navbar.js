import React from 'react'
import hydra from '../assets/Vector (3).svg'
import hydra_word from '../assets/Frame (1).svg'
import '../styles/Navbar.css'
import button from '../assets/Hamburger-Button.svg'
import { useState } from 'react'
const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <div className='navbar-div'>
      <header className='header'>
        <div className='logo'>
            <img className="img-1" src={hydra} alt="hydra" />
            <img className="img-2" src={hydra_word} alt="also hydra" />
        </div>
        <div className='nav-icon' onClick={() => setClick(!click)}>
          <img src={button} alt="nav-icon" />
        </div>
        <nav className={click ? "navigation active" : "navigation"}>
            <ul className='navigation-ul'>
                <li><a href="#about">about</a></li>
                <li><a href="#services">services</a></li>
                <li><a href="#tech">technologies</a></li>
                <li><a href="#how">how to</a></li>
            </ul>
                <button type='button' className='btn-1'>contact us</button>
                <button type='button' className='btn-2'>join hydra</button>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
