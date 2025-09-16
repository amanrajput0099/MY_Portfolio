import React from 'react'
import './About.css'

const About = () => {
    return (
        <>
       
            <div className='about ' id='about'>
                <div className='row'>
                    <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12  about-img'>
                        <img src='/picture.jpg' alt='profile_pic' />
                    </div>
                    <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
                        <h1>About me</h1>
                        <p>
                            My name is Aman, and I am actively
                             seeking an opportunity to begin 
                             my professional journey in the 
                             field of web development and 
                             backend engineering. I have a 
                             strong foundational knowledge 
                             in Html,Css,React.js,Node.js, 
                             JavaScript,MongoDB, Express.js, 
                             and tools such as  Postman,along 
                             with experience in API integration
                              through personal and academic 
                              projects. I am passionate about 
                              learning, eager to contribute, 
                              and committed to growing my skills
                               in a real-world environment. 
                               If there are any opportunities 
                               aligned with my skill set, I 
                               would be grateful for
                        </p>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default About