import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import WeatherImage from './../../assets/weatherapp.png';
import BlobberImage from './../../assets/blobber.png';
import LoginAuthImage from './../../assets/login_system.png';
import FileSorterImage from './../../assets/file_sorter.png';
import LoadersCollectionImage from './../../assets/loader_collections.png';
import CovidTrackerImage from './../../assets/covid_tracker.png';
import AcquirestroImage from "./../../assets/acquirestro.png";
import ExpenseImage from "./../../assets/expense-tracker.png";

import './portfolio.css'

const SwiperSection = () => {
  return (
    <>
      <div className='bg-white projects-swiper'>
        <div className="body-font px-7 md:px-14 pt-10 pb-14">
          <div className='mb-10 text-left text-2xl font-oswald font-bold tracking-wider'>All Projects</div>
          <div className="">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: '.swiper-custom-pagination',
              }}
              modules={[Autoplay, Pagination]}
              className='w-full'
            >
              <SwiperSlide className=''>
                <div className="">
                  <div className="">
                    <img src={AcquirestroImage} width="100%" className='h-full lg:h-[500px]' alt="" />
                  </div>
                  <div className="">
                    <div className="text-xl font-font-bold font-montserrat font-bold tracking-wide mt-2">Acquirestro</div>
                    <div className="text-gray-600 font-medium font-montserrat tracking-wide">2024 - Vue&nbsp;JS, Flask, AWS</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className=''>
                <div className="">
                  <div className="">
                    <img src={ExpenseImage} width="100%" className='h-full lg:h-[500px]' alt="" />
                  </div>
                  <div className="">
                    <div className="text-xl font-font-bold font-montserrat font-bold tracking-wide mt-2">Acquirestro</div>
                    <div className="text-gray-600 font-medium font-montserrat tracking-wide">2024 - Vue&nbsp;JS, Quasar, Capacitor</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className=''>
                <div className="">
                  <div className="">
                    <img src={BlobberImage} width="100%" className='h-full lg:h-[500px]' alt="" />
                  </div>
                  <div className="">
                    <div className="text-xl font-font-bold font-montserrat font-bold tracking-wide mt-2">Blob Generator</div>
                    <div className="text-gray-600 font-medium font-montserrat tracking-wide">2023 - Vue&nbsp;JS, Quasar</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className=''>
                <div className="">
                  <div className="">
                    <img src={WeatherImage} width="100%" className='h-full lg:h-[500px]' alt="" />
                  </div>
                  <div className="">
                    <div className="text-xl font-font-bold font-montserrat font-bold tracking-wide mt-2">Weather App</div>
                    <div className="text-gray-600 font-medium font-montserrat tracking-wide">2019 - React&nbsp;JS</div>
                  </div>
                </div>
              </SwiperSlide>
              
              {/* <SwiperSlide className=''>
                <div className="">
                  <div className="">
                    <img src={LoginAuthImage} width="100%" className='h-full lg:h-[500px]' alt="" />
                  </div>
                  <div className="">
                    <div className="text-xl font-font-bold font-montserrat font-bold tracking-wide mt-2">Authentication System</div>
                    <div className="text-gray-600 font-medium font-montserrat tracking-wide">2022 - Vue&nbsp;JS, Quasar, Flask, AWS SES</div>
                  </div>
                </div>
              </SwiperSlide> */}

              <SwiperSlide className=''>
                <div className="">
                  <div className="">
                    <img src={FileSorterImage} width="100%" className='h-full lg:h-[500px]' alt="" />
                  </div>
                  <div className="">
                    <div className="text-xl font-font-bold font-montserrat font-bold tracking-wide mt-2">File Sorting Script</div>
                    <div className="text-gray-600 font-medium font-montserrat tracking-wide">2021 - Python</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className=''>
                <div className="">
                  <div className="">
                    <img src={LoadersCollectionImage} width="100%" className='h-full lg:h-[500px]' alt="" />
                  </div>
                  <div className="">
                    <div className="text-xl font-font-bold font-montserrat font-bold tracking-wide mt-2">Loaders Collection</div>
                    <div className="text-gray-600 font-medium font-montserrat tracking-wide">2022 - HTML/CSS & Javascript</div>
                  </div>
                </div>
              </SwiperSlide>

              {/* <SwiperSlide className=''>
                <div className="">
                  <div className="">
                    <img src={CovidTrackerImage} width="100%" className='h-full lg:h-[500px]' alt="" />
                  </div>
                  <div className="">
                    <div className="text-xl font-font-bold font-montserrat font-bold tracking-wide mt-2">Covid Tracker</div>
                    <div className="text-gray-600 font-medium font-montserrat tracking-wide">2020 - React&nbsp;JS</div>
                  </div>
                </div>
              </SwiperSlide> */}
            </Swiper>
            <div className="swiper-custom-pagination text-center mt-2 sm:mt-0"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default SwiperSection