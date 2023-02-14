import React from 'react'
import data2 from './data2'
import {useState} from 'react';
import SliderBtn2 from './SliderBtn2';
import '../styles/Slider2.css'
const Slider2 = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    const nextSlide = () => {
        if(slideIndex !== data2.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === data2.length){
            setSlideIndex(1)
        }
    };
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(data2.length)
        }
    }

  return (
    <div className='content-2'>
        {data2.map((obj, index) => {
                return (
                    <div key={obj.id} 
                         className={slideIndex === index + 1 ? "slider-2 active-anim" : "slider-2"}>
                        <img src={process.env.PUBLIC_URL + `/imgs2/img${index + 1}.png`} alt="" />
                        <h5 className='bottom-border'>{obj.title}</h5>
                        <p>{obj.subtitle}</p>
                        <button className='btn-2'>{obj.button}</button>
                    </div>
                )
            })}
            <SliderBtn2 moveSlide={nextSlide} direction={"next-1"} />
            <SliderBtn2 moveSlide={prevSlide} direction={"prev-1"} />
    </div>
  )
}

export default Slider2
