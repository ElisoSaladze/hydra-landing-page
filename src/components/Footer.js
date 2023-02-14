import React from 'react'
import '../styles/Footer.css'
import hydra from '../assets/Frame (2).svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import youtube from '../assets/youtube.svg'
import instagram from '../assets/instagram.svg'
import pinterest from '../assets/pinterest.svg'
import line from '../assets/Vector 25.svg'
import vertical from '../assets/Vector 20.svg'
import bigLine from '../assets/Vector 17.svg'

const imgCollection = [
  {
    link: 'https://www.facebook.com',
    img: facebook,
    alt: 'facebook-logo'
  },
  {
    link: 'https://twitter.com',
    img: twitter,
    alt: 'twitter-logo'
  }, 
  {
    link: 'https://www.linkedin.com',
    img: linkedin,
    alt: 'linkedin-logo'
  }, 
  {
    link: 'https://www.youtube.com',
    img: youtube,
    alt: 'youtube-logo'
  }, 
  {
    link: 'https://www.instagram.com',
    img: instagram,
    alt: 'instagram-logo'
  }, 
  {
    link: 'https://www.pinterest.com',
    img: pinterest,
    alt: 'pinterest-logo'
  }];
const Footer = () => {
  return (
    <div className='footer-div'>
    <footer>
      <div className='bor'>
          <img src={hydra} alt="hydra" />
          <img className="vertical" src={vertical} alt="vertical" />
      </div>
      <div className='bor-1'>    
        <ul>
          <li><a href="#about">about</a></li>
          <li><a href="#services">services</a></li>
          <li><a href="#tech">technologies</a></li>
          <li><a href="#how">how to</a></li>
          <li><a href="#join">join hydra</a></li>         
        </ul>
        <img className="vertical" src={vertical} alt="vertical" />
        </div>
        <div className='bor-1'> 
        <ul>
          <li><a href="_#">F.A.Q</a></li>
          <li><a href="_#">sitemap</a></li>
          <li><a href="_#">conditions</a></li>
          <li><a href="_#">licenses</a></li>
        </ul>
        <img className="vertical" src={vertical} alt="vertical" />
        </div>
        <div className='pls'>
          <p>SOCIALIZE WITH HYDRA</p>
          <div className='social-media'>
            {imgCollection.map((item) => {
              return (
              <a href={item.link}><img src={item.img} alt={item.alt}/></a>
            )
          })}
        </div>
        <button className='btn-2'>BUILD YOUR WORLD</button>
        </div>
        <img className="bigLine" src={bigLine} alt="line" />
        <img className="smallLine" src={line} alt="line" />
        <div className='credit'>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED</div>
    </footer>
    </div>
  )
}

export default Footer


