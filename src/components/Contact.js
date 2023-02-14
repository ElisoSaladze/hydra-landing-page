import React from 'react'
import { useState } from 'react'
import '../styles/Contact.css'
import data from './data'
import SliderBtn from './SliderBtn'


const Contact = () => {
    const [slideIndex, setSlideIndex] = useState(1)
    const nextSlide = () => {
        if(slideIndex !== data.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === data.length){
            setSlideIndex(1)
        }
    };
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(data.length)
        }
    }
  return (
    <div className='container'>
        {data.map((obj, index) => {
            return (
                <div 
                key={obj.id} 
                className={slideIndex === index + 1 ? "slider active-anim" : "slider"}> 
                    <SliderBtn moveSlide={nextSlide} direction={"next"} />
                    <div className='content'>    
                        <img src={process.env.PUBLIC_URL + `/imgs/img${index + 1}.svg`} alt="logo" />
                        <div className='content-text'>
                            <p>{obj.subtitle}</p>  
                        </div>
                    </div>
                    <SliderBtn moveSlide={prevSlide} direction={"prev"} />
                </div>
            )
        })}
        <div className='no-slider'>
            {data.map((obj, index) => {
                return (
                    <div className='content'>
                        <img src={process.env.PUBLIC_URL + `/imgs/img${index + 1}.svg`} alt="logo" />
                        <div className='content-text'>
                            <h4>{obj.title}</h4>
                            <p>{obj.subtitle}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Contact
