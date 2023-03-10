import React from 'react'
import './about.css'
import img from '..//../assets/me/me-2.png';
import resume from '../../Cv/Resume_Naveen.pdf'

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section-title'>About Me</h2>

      <div className='about-container grid'>
        <img src={img} alt='no img' className='about-img'/>

        <div className='about-data grid'>
          <div className='about-info'>
            <p className='about-description'>
              I am Naveen Kumar, react developer from Coimbatore, Tamilnadu. I have good experience in website design and building and customization, also I am good at Java Script.
            </p>
            <a href={resume} download className='btn'>Download CV</a>
          </div>

          {/* <div className='about-skills grid'>
            <div className='skills-data'>
              <div className='skills-titles'>
                <h3 className='skills-name'>Development</h3>
                <span className='skills-number'  >90%</span>
              </div>

              <div className='skills-bar'>
                <span className='skills-percentage development' ></span>
              </div>
            </div>


            <div className='skills-data'>
              <div className='skills-titles'>
                <h3 className='skills-name'>UI/UX design</h3>
                <span className='skills-number'>80%</span>
              </div>

              <div className='skills-bar'>
                <span className='skills-percentage design' ></span>
              </div>
            </div>

            
            <div className='skills-data'>
              <div className='skills-titles'>
                <h3 className='skills-name'>Photography</h3>
                <span className='skills-number'>60%</span>
              </div>

              <div className='skills-bar'>
                <span className='skills-percentage photography'  ></span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      
    </section>
  )
}

export default About
