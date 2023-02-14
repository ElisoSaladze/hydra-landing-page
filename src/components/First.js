import React from 'react'
import mask from '../assets/Mask group (1).png'
import arrow from '../assets/arrow-small-right.svg'
import '../styles/First.css'
const First = () => {
  return (
    <div className='first'>
      <div className='img-div'>
        <img className="background" src={mask} alt='mask'/>
      </div>
      <div className='text-div'>
        <h1><span>Dive</span> Into The Depths <br/>
        Of <span>Virtual Reality</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> 
            sed do eiusmod tempor incididunt ut labore et dolore <br />
            nisl tincidunt eget. Lectus mauris eros in vitae .</p>
        <div className='btn-div'>
            <button className="btn-2" type='button'>BUILD YOUR WORLD</button>
            <a  href="#other" className="arrow-btn">
                <img src={arrow} alt="arrow"/>
            </a>
        </div>
      </div>
    </div>
  )
}

export default First
