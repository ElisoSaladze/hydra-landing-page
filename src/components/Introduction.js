import React from 'react'
import '../styles/Introduction.css'
import longArrow from '../assets/Component 1.svg'
import man from '../assets/Mask group (2).png'

const Introduction = () => {
  return (
    <div className='about-parent' id='about'>
        <div className='title'>
            <h2><span>INTRODUCTION</span><br/> TO HYDRA VR</h2>
            <img src={longArrow} alt="arrow" />
        </div>
        <div className='text-div-1'>
            <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat<br/> 
            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo<br/> 
            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare<br/> 
            lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
        </div>
        <div className='img-div'>
            <img src={man} alt="man" />
        </div>
        <div className='text-div-2'>
            <h3><span>ABOUT</span><br/> HYDRA VR</h3>
            <p>Eget mi proin sed libero enim sed faucibus turpis. Nisl<br/>
            rhoncus mattis rhoncus urna neque viverra justo. Vivamus<br/>
            at augue eget arcu dictum. Ultrices gravida dictum fusce<br/>
            ut placerat orci. Aenean et tortor at risus viverra adipiscing<br/>
            at in. Mattis aliquam faucibus purus in massa. Est<br/>
            placerat in egestas erat imperdiet sed. Consequat sem<br/>
            per viverra nam libero justo laoreet sit amet. Aliquam<br/> 
            etiam erat velit scelerisque in dictum non consectetur<br/>
            a. Laoreet sit amet cursus sit amet. Vel eros donec ac<br/>
            odio tempor orci dapibus. Sem nulla pha retra diam sit<br/>
            amet nisl suscipit adipiscing bibendum. Leo a diam<br/>
            sollicitudi n tempor.</p>
            <button className='btn-2'>LET’S GET IN TOUCH</button>
        </div>
    </div>
  )
}

export default Introduction
