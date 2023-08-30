import React from 'react'
import WeatherImage from './../../assets/weatherapp.png';
import BlobberImage from './../../assets/blobber.png';
import LoginAuthImage from './../../assets/login_system.png';

const ProjectSection = () => {
  return (
    <>
      <div className='bg-white'>
        <div className="body-font px-7 md:px-14 pt-10 pb-14">
          <div className='mb-10 text-left text-2xl font-oswald font-bold tracking-wider'>Current Projects</div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="mb-10 lg:mb-0">
              <div className="">
                <img className="border border-gray-200 cursor-pointer rounded w-full lg:w-64 xl:w-80 h-full hover:-translate-y-0 transition-all duration-500" alt="hero" src={WeatherImage} />
              </div>
              <div className="text-left mt-2 w-full lg:w-64 xl:w-80 font-montserrat tracking-wide">
                <a className='text-xl font-bold' href="https://true-weather-search.netlify.app/">Weather App</a>
                <p className='text-gray-600 font-medium'>2019 - React&nbsp;JS</p>
              </div>
            </div>

            <div className="mb-10 lg:mb-0">
              <div className="">
                <img className="border border-gray-200  cursor-pointer rounded w-full lg:w-64 xl:w-80 h-full hover:-translate-y-0 transition-all duration-500" alt="hero" src={BlobberImage} />
              </div>
              <div className="text-left mt-2 w-full lg:w-64 xl:w-80 font-montserrat tracking-wide">
                <a className='text-xl font-bold' href="https://blobber-gen.netlify.app/">Blobber</a>
                <p className='text-gray-600 font-medium'>2023 - Vue&nbsp;JS, Quasar</p>
              </div>
            </div>

            <div className="mb-10 lg:mb-0">
              <div className="">
                <img className="border border-gray-200  cursor-pointer rounded w-full lg:w-64 xl:w-80 h-full hover:-translate-y-0 transition-all duration-500" alt="hero" src={LoginAuthImage} />
              </div>
              <div className="text-left mt-2 w-full lg:w-64 xl:w-80 font-montserrat tracking-wide">
                <a className='text-xl font-bold' href="https://github.com/gaurav-bhalerao-107/login-authentication">Authentication System</a>
                <p className='text-gray-600 font-medium'>2022 - Vue&nbsp;JS, Flask, AWS SES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectSection