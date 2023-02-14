import React from 'react'
import '../styles/Tech.css'
import {v4 as uuidv4} from 'uuid';
import one from '../assets/img1.svg'
import two from '../assets/img2.svg'
import three from '../assets/img3.svg'
import four from '../assets/img4.svg'
import SliderBtn3  from './SliderBtn3';
import click1 from '../assets/click.svg'
import '../styles/ClicKArrow.css'
import { useState } from 'react';
const Tech = () => {
  const imgCollection = [
    {
      id: uuidv4(),
      image: one
    }, 
    {
      id: uuidv4(),
      image: two
    }, 
    {
      id: uuidv4(),
      image: three
    }, 
    {
      id: uuidv4(),
      image: four
    }
  ];
  const [slideIndex, setSlideIndex] = useState(1);
  const [click, handleClick] = useState(false);
    const nextSlide = () => {
        if(slideIndex !== imgCollection.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === imgCollection.length){
            setSlideIndex(1)
        }
    };
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(imgCollection.length)
        }
    }
  return (
    <div id="tech">
        <div className='background'>
            <h4><span>TECHNOLOGIES & HARDWARE</span><br/>
             USED BY HYDRA VR.</h4>
             <button onClick={() => handleClick(!click)} className={click ? "click-arrow" : "click-arrow rotate"}>
             <img src={click1} alt="arrow" />
             </button>   
        </div>
        
        <div className='four-logos'>
          {imgCollection.map((obj, index) => {
            return (
              <div key={obj.id} 
              className={slideIndex === index + 1 ? "slider-3 active-anim" : "slider-3"}>
                <img src={obj.image} alt="logo" />
              </div>
            )
          })}
          <SliderBtn3 moveSlide={nextSlide} direction={"next-2"}/>
          <SliderBtn3 moveSlide={prevSlide} direction={"prev-2"} />
        </div>
        {!click && <div className='click'>
          {imgCollection.map((obj) => {
            return (
              <div className='nonSlider-3'>
                <img src={obj.image} alt="logo" />
              </div>
            )
          })}
        </div>}
    </div>
  )
}

export default Tech
