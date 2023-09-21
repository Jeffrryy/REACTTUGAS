import React from 'react'
import NavbarWhite from '../NavbarWhite'
import Footer from '../Footer'
import Arrow from './AssetsPage/right-arrow-blue.svg'
import './Watch.css'
const Watch = () => {
  return (
    <div>
      <NavbarWhite/>
      <div>
      <div>
         <div className='main'>
                <div className='background '>
                </div>
        <div className='topTitle'>
            <h1 className='black'>iPhone 14 </h1>
            <h3 className='black'>Penuh Keajaiban</h3>
            <div className='topTitle--links'>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
        </div>
        </div>
        <div className='main'>
                <div className='background '>
                
                </div>
        <div className='topTitle topTitleiPhone14'>
            <h1>iPhone 14 pro</h1>
            <h3> Semakin Pro</h3>
            <div className='topTitle--links'>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
        </div>
        </div>    
        <div className='main'>
                <div className='background backgroundIphone1'>
                
                </div>
        <div className=' topTitleIphoneSE'>
            <h1 className='black'>iPhone SE</h1>
            <p className=' blue'> Kemampuan hebat </p>
            <p className=' blue'> yang bersahabat. </p>
            <div className='topTitle--links'>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
        </div>
        </div>    
        <div className='main compareflex'>
            <div className=' topTitle titleMac titleIphone'>
              <h1 className='black '>iPhone mana yang tepat untuk Anda?</h1>
            </div>
            <div className='containerflex containerImage1'>
              <div className='backgroundcompare  '>
                
              </div>

            </div>
            <div className='containerflex containerImage2'>
              <div className='backgroundcompare1 '>
             
              </div>

            </div>
            <div className='containerflex containerImage3'>
              <div className='backgroundcompare '>
              
              </div>
             
            </div>
            <div className='containerflex containerImage4'>
              <div className='backgroundcompare '>
             
              </div>
              <div className='titleMacBook titleIphoneCiputat'>
            
           

              </div>
            </div>
            
          </div>
         </div>
         </div>
         <Footer/>
    </div>
  )
}

export default Watch