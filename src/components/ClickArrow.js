import React, { useState } from 'react'
import click1 from '../assets/click.svg'
import '../styles/ClicKArrow.css'
const ClickArrow = () => {
    const [click, handleClick] = useState(true);
  return (
    <button onClick={() => handleClick(!click)} className='click-arrow'>
        <img src={click1} alt="arrow" />
    </button>
  )
}

export default ClickArrow
