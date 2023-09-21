import React from 'react'
import NavbarWhite from '../NavbarWhite'
import Footer from '../Footer'
import Arrow from './AssetsPage/right-arrow-blue.svg'
import Ipad1 from './AssetsPage/ipad_hero__d0tgmaq6shm6_large.jpg'
import './Ipad.css'
const Ipad = () => {
  return (
    <div>
         <NavbarWhite/>
         <div>
     <div className='main'>
                <div className='backgroundroute1 backgroundIpad'>
                
                </div>
        <div className='topTitle '>
          <p className=' baru2'>Baru</p>
            <p className='black textmac'>Ipad</p>
            <p className='black  textsmallmac'> Disukai semua.
Siap berkarya.
Luar biasa.</p>
            <div className='topTitle--links'>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
        </div>
        </div>    
        <div className='main'>
                <div className=' backgroundroute1 backgroundIpad2'>
                
                </div>
        <div className=' newtopTitle '>
          <p className=' baru1'>Baru</p>
            <p className=' textMacNew'>iPad Pro</p>
            <p className=' textMacNew '>Bertenaga super berkat</p>
            <div className='topTitle--links'>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
        </div>
        </div>  
        {/* Bagian Compare iPAd */}
          <div className='main compareflex'>
            <div className=' topTitle titleMac'>
              <h1 className='black'>iPad mana yang tepat untuk Anda?</h1>
            </div>
            <div className='containerflex1  newContainerFlex1'>
              <div className='backgroundcompare'>
              </div>
              <div className='titleMacBook newTitleIpad1'>
                <p>
                ipad Pro
                </p>
                <p className='iPadDesc'>
                Pengalaman iPad terbaik dengan teknologi paling canggih.
                </p>
               <div className='topTitle--links topTitleCompare1 iPadLinks'>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
              </div>
            </div>
            <div className='containerflex2 newContainerFlex2'>
              <div className='backgroundcompare '>
             
              </div>
              <div className='titleMacBook newTitleIpad2 '>
                <p>
                iPad Air
                </p>
                <p className='iPadDesc'>
                Performa tidak main-main dalam desain tipis dan ringan.
                </p>
               <div className='topTitle--links topTitleCompare4 '>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
              </div>
            </div>
            <div className='containerflex3 newContainerFlex3'>
              <div className='backgroundcompare '>
              
              </div>
              <div className='titleMacBook newTitleIpad3 '>
                <p>
                iPad
                </p>
               <p className='iPadGen'>
                Generasi ke-10
               </p>
               <p className='iPadDesc'>
               iPad kaya warna yang sepenuhnya baru untuk semua hal yang Anda lakukan tiap hari.
               </p>
               <div className='topTitle--links topTitleCompare4 '>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
              </div>
            </div>
            <div className='containerflex4 newContainerFlex4 '>
              <div className='backgroundcompare '>
             
              </div>
              <div className='titleMacBook newTitleIpad4'>
                <p>
                 iPad
                </p>
                <p className='iPadGen'>
                  generasi ke-9
                </p>
                <p className='iPadDesc'>
                Semua yang esensial dalam iPad yang paling terjangkau.
                </p>
              </div>
              <div className='topTitle--links topTitleCompare4 '>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
            </div>
            <div className='containerflex5 newContainerFlex5'>
              <div className='backgroundcompare '>
             
              </div>
              <div className='titleMacBook newTitleIpad5 '>
                <p>
                 iPad Mini
                </p>
                <p className='iPadDesc'>
                Pengalaman iPad sepenuhnya dengan desain pas dalam genggaman.
                </p>
              </div>
              <div className='topTitle--links topTitleCompare4 '>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
            </div>
            
          </div>
          {/* <div className='containerLinks'>
          <div className='buylinks'>
          <div className='topTitle--links topTitleCompare4 iPadLinks'>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
          </div>
          <div className='buylinks'>
          <div className='topTitle--links topTitleCompare4 iPadLinks'>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
          </div>
          <div className='buylinks'>
          <div className='topTitle--links topTitleCompare4 iPadLinks'>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
          </div>
          <div className='buylinks'>
          <div className='topTitle--links topTitleCompare4 iPadLinks'>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
          </div>

          <div className='buylinks'>
          <div className='topTitle--links topTitleCompare4 iPadLinks'>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
          </div>
          <div className='buylinks'>
          <div className='topTitle--links topTitleCompare4 iPadLinks'>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
          </div>
         
          </div> */}
         </div>
         <Footer/>
    </div>
  )
}

export default Ipad