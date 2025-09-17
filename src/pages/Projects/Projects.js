import React from 'react'
import './Projects.css'

const Projetcs = () => {
  return (
    <>
    <div className='container projects' id='projects'>
       <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
   Top recent projects
    </h2>
<hr/>
<p className='pb-3 text-center  '>👉 here are my top recent projects with live links and source code-
    
</p>
{/* card design */}
<div className='row' id='ads'>
  <div className='col-md-4'>
    <div className='card rounded'>
      <div className='card-image'>
        <span className='card-notify-badge'>Mern stack</span>
    <img src='/E-png.png' alt='project1'/>
      </div>
      <div className=' card-image-overly m-auto mt-3'>
      <span className='card-details-badge'>Node</span>
       <span className='card-details-badge'>Express</span>
        <span className='card-details-badge'>Mongodb</span>
         <span className='card-details-badge'>react</span>
      </div>
      <div className='card-body text-center'>
        <div className='ad-title m-auto'>
          <h5 className='text-uppercase'> E-Commerce_Dashboard</h5>
        </div>

        <button
  className="ad-btn link-button"
  onClick={() => window.open('https://github.com/amanrajput0099/E-dashboard.git', '_blank')}
>
  View
</button>

        {/* < a className='ad-btn' href="#">
        View
        </a> */}
        
      </div>
    </div>
  </div>
  <div className='col-md-4'>
    <div className='card rounded'>
      <div className='card-image'>
        <span className='card-notify-badge'>React</span>
    <img src='/react.png' alt='project2'/>
      </div>
      <div className=' card-image-overly m-auto mt-3'>
      <span className='card-details-badge'>HTML</span>
       <span className='card-details-badge'>CSS</span>
        <span className='card-details-badge'>JAVASCRIPT</span>
         <span className='card-details-badge'>Reactjs</span>
      </div>
      <div className='card-body text-center'>
        <div className='ad-title m-auto'>
          <h5 className='text-uppercase'> Mini Chatgpt</h5>
        </div>

        <button
  className="ad-btn link-button"
  onClick={() => window.open('http://ai-app-pied-mu.vercel.app/', '_blank')}
>
  View
</button>

        {/* < a className='ad-btn' href="#">
        View
        </a> */}
        
      </div>
    </div>
  </div>
  <div className='col-md-4'>
    <div className='card rounded'>
      <div className='card-image'>
        <span className='card-notify-badge'>Shifra</span>
    <img src='/assistant.png' alt='project1'/>
      </div>
      <div className=' card-image-overly m-auto mt-3'>
      <span className='card-details-badge'>HTML</span>
       <span className='card-details-badge'>CSS</span>
        <span className='card-details-badge'>JAVASCRIPT</span>
         {/* <span className='card-details-badge'>react</span> */}
      </div>
      <div className='card-body text-center'>
        <div className='ad-title m-auto'>
          <h5 className='text-uppercase'> Virtual Assistance</h5>
        </div>
        <button
  className="ad-btn link-button"
  onClick={() => window.open('https://amanrajput0099.github.io/Virtual-Assistance/', '_blank')}
>
  View
</button>

        {/* < a className='ad-btn' href="https://github.com/amanrajput0099/Virtual-Assistance" >*/}
        {/* View */}
        {/* </a> */}
        
      </div>
    </div>
  </div>
  

</div>
    </div>
</>
  )
}

export default Projetcs