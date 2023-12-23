import React from 'react'

function About() {
    return (
        <div className=" flex justify-center items-center w-screen h-[50vh]">
            <div className='flex justify-center items-center gap-[90px]'>
                <div className="text-8xl font-black">
                    <h2>About <br /> Me</h2>
                </div>
                <div className="w-[50%]">
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere adipisci obcaecati cumque aspernatur ducimus ullam a vitae aliquam explicabo? Alias aspernatur pariatur tempora magnam eveniet blanditiis ad inventore reprehenderit earum! Aut labore minima ullam quo veniam architecto modi praesentium veritatis perferendis excepturi, atque id rem, asperiores tempora dolores delectus fuga!</p>
                    <div className="mt-6">
                        <span className='bg-black text-white font-bold px-4 py-2 mr-4 rounded-lg'>Hire Me</span>
                        <span className='border-4 font-bold px-4 py-2 rounded-lg'>View CV</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About