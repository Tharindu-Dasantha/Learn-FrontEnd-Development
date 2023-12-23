import React from 'react'
import profilepic from '../../assets/PersonPlaceholder.png'

function Hero() {
    return (
        <div className='w-screen h-[97vh] bg-[#DEE2E6] flex justify-center items-end'>
            <div className="flex justify-center items-center gap-[300px]">
                <div className="">
                    <h1 className='font-black text-8xl mb-2'>Hello <br /> I'm DeveloperName</h1>
                    <p className='text-2xl mb-4'>Frontend Web Developer.</p>
                    <span className='bg-black text-white px-8 py-3 relative top-4 font-bold rounded-xl'>Hire Me</span>
                </div>
                <div className="">
                    <div className=""></div>
                    <img width={600} height={600} src={profilepic} alt="Profile Picture of the Developer " />
                </div>
            </div>
        </div>
    )
}

export default Hero