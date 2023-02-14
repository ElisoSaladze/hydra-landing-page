import React from 'react'
import btn from '../assets/chevron-small-down.svg'
import '../styles/SliderBtn4.css'

const SliderBtn4 = ({direction, moveSlide}) => {
  return (
    <div>
      <button onClick={moveSlide} className={direction === "next-3" ? "btn-slide-3 next-3" : "btn-slide-3 prev-3"}>
        <img src={btn} alt="arrow"/>
    </button>
    </div>
  )
}

export default SliderBtn4
