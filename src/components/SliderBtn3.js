import React from 'react'
import btn from '../assets/chevron-small-down.svg'
import '../styles/SliderBtn3.css'
const SliderBtn3 = ({direction, moveSlide}) => {
  return (
    <div>
      <button onClick={moveSlide} className={direction === "next-2" ? "btn-slide-2 next-2" : "btn-slide-1 prev-2"}>
        <img src={btn} alt="arrow"/>
    </button>
    </div>
  )
}

export default SliderBtn3
