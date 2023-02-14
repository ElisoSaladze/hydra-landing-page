import React from 'react'
import left from '../assets/shape.svg'
import '../styles/SliderBtn.css'
const SliderBtn = ({ direction, moveSlide }) => {
  return (
    <button
    onClick={moveSlide}
    className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
        <img src={left} alt="left" />
    </button>
  )
}

export default SliderBtn
