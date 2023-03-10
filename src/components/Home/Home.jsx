import React from 'react';
import './home.css';
import Me from '../../assets/me/me-1.png';
import HeaderSocials from './HeaderSocials';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className=' home container' id='home'>
      <div className='intro'>
        <img src={Me} alt='me' />
        <h1 className='home-name'>Naveen Kumar </h1>
        <span className='home-education'>I'm a React-Js developer</span>
        <HeaderSocials/>

        <a href='#contact' className='btn'>Hire Me</a>
        <Shapes/>

      </div>
    </section>
  )
}

export default Home
