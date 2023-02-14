import React from 'react'
import btn from '../assets/chevron-small-down.svg'
import '../styles/SliderBtn2.css'
const SliderBtn2 = ({direction, moveSlide}) => {
  return (
    <button onClick={moveSlide} className={direction === "next-1" ? "btn-slide-1 next-1" : "btn-slide-1 prev-1"}>
        <img src={btn} alt="arrow"/>
    </button>
  )
}

export default SliderBtn2;
