import React from 'react'
import AboutImage from './../../assets/about-image.jpeg';

const AboutSection = () => {
  return (
    <>
      <div className='bg-white'>
        <div className="body-font px-7 md:px-14 pt-10 pb-14">
          <div className='mb-10 text-left text-2xl font-bold font-oswald tracking-wide'>About Me</div>
          <div className="container mx-auto flex lg:flex-row flex-col justify-center items-center mb-5">
            <div className="overflow-hidden h-full">
              <img className="object-cover object-center rounded hover:scale-110 transition-all duration-500 cursor-pointer" alt="hero" src={AboutImage} width="800" height="500" />
            </div>
            <div className="lg:flex-grow mt-5 lg:mt-0 lg:pl-5 flex flex-col lg:items-start lg:text-left items-center text-center font-montserrat tracking-wide">
              <div className="text-left">
                <span className='text-xl' style={{ 'color': 'rgb(1, 192, 196)' }}>
                  “You will never know, If you never try.”
                </span>

                <div className='mt-3'>
                  I enjoy learning fascinating technological concepts. I utilise this knowledge to solve issues that arise in the software development process. As they say, ‘There's always a way’. I strongly believe this line.
                </div>
                
                <div className="mt-3">
                  One of my major skills is my ability to think creatively. Let it be any problem related to programming, I will find the solution. NO MATTER WHAT !
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection