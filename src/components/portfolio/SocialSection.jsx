import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const SocialSection = () => {
  return (
    <>
      <div className='bg-white'>
        <div className="body-font px-7 md:px-14 pt-10 pb-14">
          <div className='mb-10 text-left text-2xl font-oswald font-bold tracking-wider'>Social Network</div>
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
            <a className="group flex items-center mb-5 md:mb-0" href="https://www.linkedin.com/in/gaurav-bhalerao-252a41205/">
              <div className="cursor-pointer border border-black h-9 w-9 flex items-center justify-center rounded-full group-hover:bg-[#0d324d] group-hover:text-white">
                <FontAwesomeIcon icon={faLinkedinIn} className='' />
              </div>
              <div className="cursor-pointer pl-2 -mt-1 group-hover:underline underline-offset-5">
                Gaurav Bhalerao
              </div>
            </a>

            <a className="group flex items-center mb-5 md:mb-0" href="https://github.com/gaurav-bhalerao-107">
              <div className="cursor-pointer border border-black h-9 w-9 flex items-center justify-center rounded-full group-hover:bg-[#0d324d] group-hover:text-white">
                <FontAwesomeIcon icon={faGithub} className='' />
              </div>
              <div className="cursor-pointer pl-2 -mt-1 group-hover:underline underline-offset-5">
                gaurav-bhalerao
              </div>
            </a>

            <a className="group flex items-center mb-5 md:mb-0" href="mailto:bhaleraogaurav10@gmail.com">
              <div className="cursor-pointer border border-black h-9 w-9 flex items-center justify-center rounded-full group-hover:bg-[#0d324d] group-hover:text-white">
                <FontAwesomeIcon icon={faEnvelope} className='' />
              </div>
              <div className="cursor-pointer pl-2 -mt-1 group-hover:underline underline-offset-5">
                bhaleraogaurav10@gmail.com
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SocialSection