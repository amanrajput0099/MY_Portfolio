import React, { useRef } from 'react';
 import emailjs from '@emailjs/browser';
 import './Contacts.css'
//  import { toast } from 'react-toastify';
//  import axios from 'axios'
 import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

export const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_npgv07h', 'template_m4d5b7l', form.current, {
        publicKey: '7qJZGj-Zsa93I2iL7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

//    const [name, setName] = useState("");
//    const [email, setEmail] = useState("");
//   const [msg, setMsg] = useState("");

//    //handle sumbit button

//    const handleSumbit = async (e) => {
//     e.preventDefault()
//     try {
// if (!name || !email || !msg) {
// toast.error("Please provide all fields")
//       }


//    } catch (error) {
//       console.log(error)
//     }


   // };

  return (
    
    <>
      <form ref={form} onSubmit={sendEmail}>
       <div className=' contact' id='contact'>
         <div className='card card0 border-0'>
           <div className='row'>
             <div className='colo-md-6 col-lg-6 col-xl-6 col-sm-12'>
               <div className='card1'>
                 <div className='row border-line'>
                   <img src='/contact.jpg' alt='ocontact' className='image' />
                 </div>
               </div>
             </div>
             <div className='col-lg-6 col-md-6'>



               <div className='card2 d-flex card border-0 px-4 py-5'>
                 <div className='row'>
                   <div className='row'>
                     <h6>Contact WITH
                       <a href='https://www.linkedin.com/in/aman-chauhan-1597b0347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                         <BsLinkedin color='blue' size={30} className='ms-2' />
                       </a>

                           <a href="https://github.com/amanrajput0099">
                       <BsGithub color='black' size={30} className='ms-2' />
                          </a>

                       <a href='https://www.facebook.com/share/16we5W7mmU/'>
                       <BsFacebook color='blue' size={30} className='ms-2' />
 </a>
 <a href='https://www.instagram.com/thakur_amann818?igsh=MTh5OGFrYmk3N3czZw=='>
                       <BsInstagram color='blue' size={30} className='ms-2' />
                       </a>

                     </h6>
                   </div>



                   <div className='row px-3 mb-4'>
                     <div className='line' />
                     <small className='or text-center'>OR</small>
                     <div className='line' />
                   </div>
                  
                   <div className='row px-3'>
                     
                     <input type='text'
                       name='name'
                       placeholder='Enter your name'
                       className='mb-3'
                    //    value={name}
                    //    onChange={(e) => setName(e.target.value)}
                     />
                   </div>
                   <div className='row px-3'>
                     <input type='email'
                       name='email'
                       placeholder='Enter your Email Adderss'
                       className='mb-3'
                    //    value={email}
                    //    onChange={(e) => setEmail(e.target.value)}
                     />
                   </div>
                   <div className='row px-3'>
                     <textarea
                       type='text'
                       name='message'
                       placeholder='Write your message...'
                       className='mb-3'
                    //    value={msg}
                    //    onChange={(e) => setMsg(e.target.value)}
                     />

                        {/* <form ref={form} onSubmit={sendEmail}> */}

  
      {/* <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
 

                   </div>
                
                   <div className='row px-3'>
                     <button className='button'>
                         
                       SEND MESSAGE</button>

                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>

    
    </form>
    </>
  
                          


 );
};
                 

  
 
