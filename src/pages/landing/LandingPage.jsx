import React from 'react'
import './Landing.css'
import AboutSection from '../../components/portfolio/AboutSection'
import ProjectSection from '../../components/portfolio/ProjectSection'
import WorkSection from '../../components/portfolio/WorkSection'
import LanguageSection from '../../components/portfolio/LanguageSection'
import SwiperSection from '../../components/portfolio/SwiperSection'
import SocialSection from '../../components/portfolio/SocialSection'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const LandingPage = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto p-5 mt-10'>
        <div className="text-center mt-10 text-white">
          <h1 className='text-6xl font-semibold tracking-wide font-oswald'>I am Gaurav Bhalerao</h1>
          <p className='mt-5 font-medium tracking-wider font-oswald'>Full Stack Developer</p>
          
          <p className='text-xl mt-7'>
            <a className="mx-3 text-2xl" href="https://www.linkedin.com/in/gaurav-bhalerao-252a41205/" title="">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a className="mx-3 text-2xl" href="https://github.com/gaurav-bhalerao-107" title="">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="mx-3 text-2xl" href="mailto:bhaleraogaurav10@gmail.com" title="">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </p>
        </div>

        <section className='about-section-main mt-10'>
          <AboutSection />
        </section>

        <section className='about-section-main mt-10'>
          <ProjectSection />
        </section>

        <section className='about-section-main mt-10'>
          <WorkSection />
        </section>

        <section className='about-section-main mt-10'>
          <LanguageSection />
        </section>

        <section className='about-section-main mt-10'>
          <SwiperSection />
        </section>

        <section className='about-section-main mt-10'>
          <SocialSection />
        </section>
      </div>
    </>
  )
}

export default LandingPage