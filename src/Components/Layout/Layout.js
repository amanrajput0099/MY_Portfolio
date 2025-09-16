import React,{useState} from 'react'
import Home from '../../pages/Home/Home'
import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from 'react-icons/ai'
import './Layout.css'
import Menus from '../Menus/Menus'

function Layout() {
    const [toogle,setToogle]=useState(true)

    const handletoogle=()=>{
        setToogle(!toogle);
    };
  return (
    <>
        <div className='slidebar-section'>
           <div className={ toogle?"sidebar-toogle sidebar":'sidebar' }>
            <div className='sidebar-toogle-icons'>
              
            <p onClick={handletoogle}>
                {
                    toogle?(
                    <AiOutlineDoubleLeft size={30}/>

                    ):(
                    <AiOutlineDoubleRight size={30}/>
                )
                }    
            </p>

            </div>
              <Menus toogle={toogle}/>
            </div>
            <div className='container'>
                <Home/>

            
           </div>
        </div>
    </>
  )
}

export default Layout