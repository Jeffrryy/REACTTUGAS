import React from 'react'
import './Main.css'
import Arrow from '../Assets/right-arrow-blue.svg'
// import Diagonal from '../Assets/diagonal-arrow.svg'
import iPhone14 from '../Assets/iphone14pro.jpg'
import Apple from '../Assets/apple.svg'
import Chip from '../Assets/promo_m2_chip__enw2kz91lsuq_small.png'
import Studio from '../Assets/promo_mac_studio_announce__do7xnc8z5mgm_medium_2x.jpg'
import Pro from '../Assets/promo_mac_pro_announce__dd118zq1ap6q_medium_2x.jpg'
import Fitness from '../Assets/promo_logo_fitness_plus_iphone__dpayetemakq6_small_2x.png'
import 'react-slideshow-image/dist/styles.css'
import { Slide,Zoom } from 'react-slideshow-image'
import Image1 from '../Assets/Screenshot1.png'
import Image2 from '../Assets/Screenshot2.png'
import Image3 from '../Assets/Screenshot3.png'
import Image4 from '../Assets/Screenshot4.png'
import Image5 from '../Assets/Screenshot5.png'
const Main = () => {
    const Image =[  {Image1},
                    {Image2},       
                    {Image3},       
                    {Image4},       
                    {Image5}
                ];
                   
  return (
    <main className='ultraMain'>
        <div className='containerMain'>
        <div className='main'>
                <div className='background background1'>
                
                </div>
        <div className='topTitle topTitleiPhone14'>
            <h1>iPhone 14 pro</h1>
            <p className='titleH3'> Semakin Pro</p>
            <div className='topTitle--links'>
                <a href="" className='Link'> Selengkapnya <img src={Arrow}/> </a>
                <a href=""  className='Link'> Beli  <img src={Arrow}/> </a>
            </div>
        </div>
        </div>    
           <div className='main'>
                <div className='background background2'>
                </div>
        <div className='topTitle '>
            <p className='black titleH1'>iPhone 14 </p>
            <p className='black titleH3'>Penuh Keajaiban</p>
            <div className='topTitle--links'>
                <a href=""  className='Link'> Selengkapnya <img src={Arrow}/> </a>
                <a href=""  className='Link'> Beli  <img src={Arrow}/> </a>
            </div>
        </div>
        </div>
        <div className='main'>
                <div className='background background3'>
                </div>
        <div className='topTitle'>
            <h1 className='black'>MacBook air 15" </h1>
            <p className='black titleH3'>Besar mengagumkan. Tipisnya menakjubkan</p>

            <div className='topTitle--links'>
                <a href=""  className='Link'> Selengkapnya <img src={Arrow}/> </a>
                <a href=""  className='Link'> Beli  <img src={Arrow}/> </a>
            </div>
        </div>
        </div>     
        <div className='main4'>
            <div className='row'>
                <div className='main4Item'>
                <div className='background background4' >
                </div>

        <div className='topTitle'>
            <p className='TextApple'><img src={Apple} alt='aple'/> WATCH </p >
            <p className='series' >SERIES 8</p>
            <h3 >Lompatan besar untuk kesehatan anda</h3>
            <div className='topTitle--links'>
                <a href=""> Selengkapnya <img src={Arrow}/> </a>
                <a href=""> Beli  <img src={Arrow}/> </a>
            </div>
            </div>
                </div>
                <div className='main4Item'>
                <div className='background background5' >
                </div>

        <div className='topTitle'>
            <p className='TextIpad' > iPad Pro </p>
            <p className='Chip'>Bertenaga super berkat  <img src={Chip} alt='aple'/>  </p>
            <div className='topTitle--links'>
                <a href=""> Selengkapnya <img src={Arrow}/> </a>
                <a href=""> Beli  <img src={Arrow}/> </a>
            </div>
            </div>
                </div>
             
            </div>
            <div className='row'>
                <div className='main4Item'>
                <div className='background background6' >
                </div>

        <div className='topTitle'>
            <p className='black TextStudioMac'>  Mac Studio </p>
            
            <h3 className='black'>Bertenaga super berkat M2 Max dan M2 Ultra.</h3>
            <h5>Cek</h5>
            <div className='topTitle--links'>
                <a href=""> Selengkapnya <img src={Arrow}/> </a>
                <a href=""> Beli  <img src={Arrow}/> </a>
            </div>
            </div>
                </div>
                <div className='main4Item'>
                <div className='background background7' >
                </div>

        <div className='topTitle'>
            <p className='black TextMacPro'> Mac Pro </p>
            <h3 className='black'>Ditransformasi oleh apple silicon  </h3>
            <h4 className='grey'>Cek kembali untuk informasi ketersediaan</h4>
            <div className='topTitle--links'>
                <a href=""> Selengkapnya <img src={Arrow}/> </a>    
            </div>
            </div>
                </div>
            </div>
            <div className='row'>
                <div className='main4Item'>
                <div className='background background8' >
                </div>

        <div className='topTitle'>
            <h1 className='black fitness'>  <img src={Fitness} alt="fitness" /></h1>
            
            <h3 className='black'></h3>
            <p className='black TextHit'>Dari HIIT hingga  Yoga,</p>
            <p className='black TextHit'>selalu ada pilihan untuk anda.</p>
            <div className='topTitle--links'>
                <a href=""> Selengkapnya <img src={Arrow}/> </a>
                <a href=""> Coba gratis*  <img src={Arrow}/> </a>
            </div>
            </div>
                </div>
                <div className='main4Item'>
                <div className='background background9' >
                </div>

        <div className='topTitle'>
            <p  className='TextAirPods'> AirPods Pro </p>
            <h3>Dibuat ulang dengan kemampuan baru.  </h3>
            <div className='topTitle--links'>
                <a href=""> Selengkapnya <img src={Arrow}/> </a>    
                <a href=""> Beli <img src={Arrow}/> </a>    
            </div>
            </div>
                </div>
            </div>
        </div>     
        <Slide    indicators={ <div className="indicator">{}</div>} scale={1.4}>
      
            <div className='each-slide-effect'>
                <div > <img src={Image1} alt="slideshow" srcset="" /></div>
             
            </div>
            <div className='each-slide-effect'>
                <div> <img src={Image2} alt="slideshow" srcset="" /></div>
              
            </div>
            <div className='each-slide-effect'>
                <div> <img src={Image3} alt="slideshow" srcset="" /></div>
             
            </div>
            <div className='each-slide-effect'>
                <div> <img src={Image4} alt="slideshow" srcset="" /></div>

            </div>
            <div className='each-slide-effect'>
                <div> <img src={Image5} alt="slideshow" srcset="" /></div>
                
            </div>

        </Slide>
        </div>
        
    </main>

    
  )
}

export default Main