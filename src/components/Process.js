import React from 'react'
import '../styles/Process.css'
import longArrow from '../assets/Component 1.svg'
import Slider4 from './Slider4'
const Process = ({myCollection}) => {
  return (
    <div id="process">
        <div className='why'>
            <div className='title'>
                <h2><span>HOW WE BUILD</span><br/> WITH HYDRA VR?</h2>
                <img src={longArrow} alt="arrow" />
            </div>
            <div className='none-text'>
                <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat<br/> 
                nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo<br/> 
                quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare<br/> 
                lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
            </div>
        </div>
        <Slider4 />
    </div>
  )
}

export default Process
