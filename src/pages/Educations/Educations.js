 import React from 'react'
//  import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import {MdSchool} from 'react-icons/md'

import './Educations.css'

const Educations = () => {
  return (
    <>
<div className=' education' id='education'>

       <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
 Educations
    </h2>
<hr/>
</div>
        <div className='box'>
<div className='education1'>
  <img  src='/tmu.jpg' alt='college' />
<h3 className='name'>Tmu Moradabad </h3>
<hr/>
<h6>Course:BCA</h6>
<h6>Graduation Year:2025</h6>
<h6>percentage:78%</h6>
</div>

<div className='education1'>
  <img  src='/Rps.avif' alt='school' />
<h5 className='name'>R.P.S Inter College  </h5>
<hr/>
<h6>Class:12th</h6>
<h6>Passing Year:2022</h6>
<h6>percentage:65%</h6>
</div>

<div className='education1'>
  <img  src='/Rps.avif' alt='school' />
<h5 className='name'>R.P.S Inter College </h5>
<hr/>
<h6>Class:10th</h6>
<h6>Passing Year:2020</h6>
<h6>percentage:71%</h6>
</div>

        </div>





{/* <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
</VerticalTimeline> */}

    </>
  )
};

export default Educations;



