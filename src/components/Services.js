import React from 'react'
import '../styles/Services.css'
import longArrow from '../assets/Component 1.svg'
import Slider2 from './Slider2'
import NonSlider2 from './NonSlider2'
const Services = () => {
  return (
    <div id="services">
      <div className='why'>
        <div className='title'>
            <h2><span>WHY BUILD</span><br/> WITH HYDRA?</h2>
            <img src={longArrow} alt="arrow" />
        </div>
        <div className='none-text'>
            <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat<br/> 
            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo<br/> 
            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare<br/> 
            lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
        </div>
      </div>
      <Slider2 />
      <NonSlider2 />
    </div>
  )
}

export default Services
