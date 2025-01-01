import React from 'react'
import WeatherImage from './../../assets/weatherapp.png';
import BlobberImage from './../../assets/blobber.png';
import LoginAuthImage from './../../assets/login_system.png';
import AcquirestroImage from "./../../assets/acquirestro.png";
import ExpenseImage from "./../../assets/expense-tracker.png";
import TaskMinderImage from "./../../assets/taskminder.png";

const ProjectSection = () => {
  return (
    <>
      <div className='bg-white'>
        <div className="body-font px-7 md:px-14 pt-10 pb-14">
          <div className='mb-10 text-left text-2xl font-oswald font-bold tracking-wider'>Current Projects</div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10">
            <div className="mb-10 lg:mb-0">
              <a target='_blank' href="https://acquirestro.com/" className="">
                <img className="border border-gray-200  cursor-pointer rounded w-full lg:w-64 xl:w-80 h-42 aspect-video hover:-translate-y-0 transition-all duration-500" alt="hero" src={AcquirestroImage} />
              </a>
              <div className="text-left mt-2 w-full lg:w-64 xl:w-80 font-montserrat tracking-wide">
                <a className='text-xl font-bold' target='_blank' href="https://acquirestro.com/">Acquirestro</a>
                <p className='text-gray-600 font-medium'>2024 - Vue&nbsp;JS, Flask, AWS</p>
              </div>
            </div>

            <div className="mb-10 lg:mb-0">
              <a target='_blank' href="https://play.google.com/store/apps/details?id=org.xsonic.expensetracker.app" className="">
                <img className="border border-gray-200  cursor-pointer rounded w-full lg:w-64 xl:w-80 h-42 aspect-video hover:-translate-y-0 transition-all duration-500" alt="hero" src={ExpenseImage} />
              </a>
              <div className="text-left mt-2 w-full lg:w-64 xl:w-80 font-montserrat tracking-wide">
                <a className='text-xl font-bold' target='_blank' href="https://play.google.com/store/apps/details?id=org.xsonic.expensetracker.app">Expense Tracker</a>
                <p className='text-gray-600 font-medium'>2024 - Vue&nbsp;JS, Quasar, Capacitor</p>
              </div>
            </div>

            <div className="mb-10 lg:mb-0">
              <a target='_blank' href="https://taskminderr.netlify.app/" className="">
                <img className="border border-gray-200 cursor-pointer rounded w-full lg:w-64 xl:w-80 h-42 aspect-video hover:-translate-y-0 transition-all duration-500" alt="hero" src={TaskMinderImage} />
              </a>
              <div className="text-left mt-2 w-full lg:w-64 xl:w-80 font-montserrat tracking-wide">
                <a className='text-xl font-bold' target='_blank' href="https://taskminderr.netlify.app/">Task Minder</a>
                <p className='text-gray-600 font-medium'>2024 - React&nbsp;JS</p>
              </div>
            </div>

            <div className="mb-10 lg:mb-0">
              <a target='_blank' href="https://blobber-gen.netlify.app/" className="">
                <img className="border border-gray-200  cursor-pointer rounded w-full lg:w-64 xl:w-80 h-42 aspect-video hover:-translate-y-0 transition-all duration-500 object-contain" alt="hero" src={BlobberImage} />
              </a>
              <div className="text-left mt-2 w-full lg:w-64 xl:w-80 font-montserrat tracking-wide">
                <a className='text-xl font-bold' target='_blank' href="https://blobber-gen.netlify.app/">Blobber</a>
                <p className='text-gray-600 font-medium'>2023 - Vue&nbsp;JS, Quasar</p>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectSection
