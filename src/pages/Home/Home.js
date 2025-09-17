import React from 'react'
// import Fade from 'react-reveal/Fade';
import Typewriter from 'typewriter-effect';
import './home.css'
import Resume from '../../assests/docs/resume.pdf'

function Home() {
   
  return (
    <>
    <div className='container-fluid home-container' id="home">
       
        <div className='container home-content'>
            <h2>Hi 🙋‍♂️ I am  a</h2>
            <h1>
                <Typewriter
                options={{
                    strings:["FullStack Devloper !",
                        "Mern Stack Devloper !",
                        "React Devloper !"],
                    autoStart:true,
                    loop:true,
                }}
                />
            </h1>
            <div className='home-buttons'>
                <a className='btn btn-hire' 
                href='https://api.whatsapp.com/send?phone=7668442587'
                rel='noreferrer'
                target='_blank'
                >
                    Hire Me
                    </a>
                 <a className=' btn btn-cv' href={Resume} download="aman.pdf"> My Resume</a>
            </div>
        </div>
    </div>
       
    </>
  )
}

export default Home