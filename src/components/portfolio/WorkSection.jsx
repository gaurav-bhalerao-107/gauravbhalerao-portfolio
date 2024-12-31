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
                <p className='text-gray-800 font-medium'>2021 - Present</p>
                <div className='text-xl mt-1 font-bold tracking-wide'>Full Stack Developer - <span className='' style={{ 'color': 'rgb(1, 192, 196)' }}>Incentius</span></div>

                <div className='text-md mt-3 text-gray-800 font-medium'>
                  <p className='mb-5'>
                    I love building full-stack solutions that solve real problems. From housekeeping management systems to creator platforms and pharma dashboards, I’ve worked on a variety of projects that make a real impact. Leading a team of 5–6 developers, I focus on delivering high-quality solutions on time while keeping the user experience front and center.
                  </p>
                  <p className='mb-5'>
                    I enjoy creating seamless systems that connect user-friendly front-ends with powerful back-end APIs. Whether it’s integrating payment gateways like Razorpay and Paytm or designing dashboards for real-time insights, I aim to make everything intuitive and efficient. I also use AWS and S3 to ensure the solutions I build are scalable, reliable, and ready for anything.
                  </p>
                  {/* <p className=''>
                    Our hosting was done through Amazon Web Services <span style={{ 'color': 'rgb(1, 192, 196)' }}>(AWS)</span>.
                  </p> */}
                </div>
              </div>
            </div>

            <div className="text-left mt-10">
              <div className="">
                <p className='text-gray-800 font-medium'>2019 - 2021</p>
                <div className='text-xl mt-1 font-bold tracking-wide'>Freelancer</div>

                <p className='text-md mt-3 text-gray-800 font-medium'>
                  I picked up skills like client management, communication, and problem-solving while working as a freelance developer. It was a great experience, and I enjoyed exploring new technologies and finding creative solutions to challenges—it was a fun way to grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkSection