import React from 'react'
import '../styles/Slider4.css'
import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';
import SliderBtn4 from './SliderBtn4';
import small from '../assets/small.svg'
const Slider4 = () => {
    const myCollection = [
        {
            id: uuidv4(),
            number: "01",
            title: "3D Conception & Design"
        },
        {
            id: uuidv4(),
            number: "02",
            title: "Interaction Design"
        },
        {   
            id: uuidv4(),
            number: "03",
            title: "VR World User Testing"
        },
        {
            id: uuidv4(),
            number: "04",
            title: "Hydra VR Deploy"
        }
    ]
    const [slideIndex, setSlideIndex] = useState(1);
    const nextSlide = () => {
        if(slideIndex !== myCollection.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === myCollection.length){
            setSlideIndex(1)
        }
    };
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(myCollection.length)
        }
    }
  return (
    <div className='whole'>
        {myCollection.map((obj, index) => {
            return (
                <div key={obj.id} 
                className={slideIndex === index + 1 ? "slider-4 active-anim" : "slider-4"}>
                    <div className='border'><div className='circle'><p>{obj.number}</p></div></div>
                    <div className='white'>
                        <p>{obj.title}</p>
                    </div>
                </div>
            )
        })}
        <SliderBtn4 moveSlide={nextSlide} direction={"next-3"} />
        <SliderBtn4 moveSlide={prevSlide} direction={"prev-3"}/>
        <div className='nonSlider-4'>
        {myCollection.map((obj, index) => {
            return (
                <div className='parent-circle'>
                    <div className='border'>
                        <div className='circle'><p>{obj.number}</p></div>
                    </div>
                    <div className='white'>
                        <img className='arrow-small' src={small} alt="arrow" />
                        <p>{obj.title}</p>
                    </div>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Slider4
