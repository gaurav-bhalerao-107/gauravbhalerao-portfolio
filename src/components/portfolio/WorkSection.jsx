import React from 'react'

const WorkSection = () => {
  return (
    <>
      <div className='bg-white'>
        <div className="body-font px-7 md:px-14 pt-10 pb-14">
          <div className='text-left text-2xl font-oswald font-bold tracking-wider'>Experiance</div>
          <div className="font-montserrat">
            <div className="text-left mt-10">
              <div className="">
                <p className='text-gray-800 font-medium'>2019 - 2021</p>
                <div className='text-xl mt-1 font-bold tracking-wide'>Freelancer</div>

                <p className='text-md mt-3 text-gray-800 font-medium'>
                  I gained knowledge in abilities like client management, communication, problem-solving when working on a project, etc. as a freelance developer. It was fun being a freelancer. One of the clients needed customer management system. I learned about push notifications, relational database administration, and other things while working on that project.
                </p>
              </div>
            </div>

            <div className="text-left mt-10">
              <div className="">
                <p className='text-gray-800 font-medium'>2021 - 2023</p>
                <div className='text-xl mt-1 font-bold tracking-wide'>Full Stack Developer - <span className='' style={{ 'color': 'rgb(1, 192, 196)' }}>Incentius</span></div>

                <div className='text-md mt-3 text-gray-800 font-medium'>
                  <p className='mb-5'>
                    I've developed a lot since coming here. I've worked with various awesome frameworks, including Cordova, Flask, Capacitor, Quasar, and Vue. I have participated in numerous projects. I've worked in teams of up to seven people. (2 seniors operating as advisors, 2 seniors working, 2 other coworkers, and I, of course). We worked on projects for a variety of platforms, including web, iOS, Android, etc.
                  </p>
                  <p className='mb-5'>
                    I worked with a variety of software solutions, including Django for data modelling, Node, NodeJS, MongoDB, and Firebase cloud messaging. For backend processing, we used Flask, a <span style={{ 'color': 'rgb(1, 192, 196)' }}>Python</span> framework.
                  </p>
                  <p className=''>
                    Our hosting was done through Amazon Web Services <span style={{ 'color': 'rgb(1, 192, 196)' }}>(AWS)</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkSection