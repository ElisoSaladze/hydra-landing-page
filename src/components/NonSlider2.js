import React from 'react'
import data2 from './data2'
import '../styles/NonSlider.css'
const NonSlider2 = () => {
  return (
    <div className='non-slider'>
        {data2.map((obj, index) => {
            return (
                <div className='card'>
                    <img src={process.env.PUBLIC_URL + `/imgs2/img${index + 1}.png`} alt="" />
                    <h5 className='bottom-border'>{obj.title}</h5>
                    <p>Vitae sapien pellentesque habitant<br/> morbi
                    nunc. Viverra aliquet  porttitor<br/> rhoncus 
                    libero justo laoreet sit amet<br/> vitae.</p>
                    <button className='btn-2'>{obj.button}</button>
                </div>
            )
        })}
    </div>
  )
}

export default NonSlider2
