import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import './Mac.css'
import Arrow from './AssetsPage/right-arrow-blue.svg'
import Mac1 from './AssetsPage/compare_mba_13_15__beo01ewpngky_small_2x.png'
import Mac2 from './AssetsPage/compare_mba_m1__9d4o64w6wv6m_small_2x.png'
import Mac3 from './AssetsPage/compare_mbp_14_16__gmrk71zzfoq6_large.png'
import Mac4 from './AssetsPage/compare_mbp_13__b9nj45t4tcya_small_2x.png'
import { Link } from 'react-router-dom'
import Icon from './AssetsPage/apple_black.svg'
import SearchIcon from './AssetsPage/magnifying-glass-solid.svg'
import NavbarWhite from '../NavbarWhite'

 const Mac = () => {
  return (
    <div>
      {/* <div className='navbar navbarRoute1'>
        <ul>
            <li>
                <Link to="/"><img src={Icon} alt='apel'/></Link>
            </li>
            <li>
                <Link to="/mac">Mac</Link>
            </li>
            <li>
                <Link to="/ipad">iPad</Link>
            </li>
            <li>
                <Link to="/iphone">iPhone</Link>
            </li>
            <li>
                <Link to="/watch">Watch</Link>
            </li>
            <li>
                <Link to="/airpods">Airpods</Link>
            </li>
            <li>
                <Link to="/tvdanrumah">Tv & Rumah</Link>
            </li>
            <li>
                <Link to="/hiburan">Hiburan</Link>
            </li>
            <li>
                <Link to="/dukungan">Dukungan</Link>
            </li>
            <li>
                <Link to="/tempatmembeli">Tempat Membeli</Link>
            </li>
            <li>
                <img src={SearchIcon} alt='Search'/>
            </li>
        
        </ul>
        </div> */}
        <NavbarWhite/>
     <div>
     <div className='main'>
                <div className='backgroundroute1 backgroundMac1'>
                
                </div>
        <div className='topTitle '>
          <p className='baru'>Baru</p>
            <p className='black textmac'>MacBook Air 15"</p>
            <p className='black  textsmallmac'> Besarnya mengangumkan. Tipisnya menakjubkan.</p>
            <div className='topTitle--links'>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
        </div>
        </div>    
        <div className='main'>
                <div className=' backgroundroute1 backgroundMac2'>
                
                </div>
        <div className='topTitle '>
          <p className='baru'>Baru</p>
            <p className='black textmac'>Mac Studio</p>
            <p className='black  textsmallmac'>Bertenaga super berkat M2 Max dan M2 Ultra.</p>
            <div className='topTitle--links'>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
        </div>
        </div>   
        <div className='main'>
                <div className=' backgroundroute1 backgroundMac3'>
                
                </div>
        <div className='topTitle '>
          <p className='baru'>Baru</p>
            <p className='black textmac'>Mac Pro</p>
            <p className='black  textsmallmac'>Ditransformasi oleh Apple silicon.</p>
            <div className='topTitle--links'>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
                <h4 className='textStock'>Cek kembali untuk informasi ketersediaan</h4>
            </div>
        </div>
        </div>   
        {/* <div className='main mainCompare'>
          <div className='topTitle'>
            <h1 className='black'>Laptop mana yang tepat untuk Anda?</h1>
            <div className='macflex'> 
               <ul>
              <li>
                <img src={Mac2} alt="Mac" srcset="" />
                
              <li className='black texttitle'>
             <p>MacBook Air 13” </p> 
             <p className='Chip'>Chip M1</p>
             <p className='desc'>Laptop andal dan ringan untuk</p>
             <p className='desc'>menyelesaikan pekerjaan di</p>
             <p className='desc'>mana saja.</p>
             <li>
             </li>
      
              </li>
                </li>                
                <li>
                <img src={Mac1} alt="Mac" srcset="" className='MacImg'/>
                <li className='black texttitle'>
                <p className='title'>MacBook Air 13”</p>
                <p className='title'>Dan 15"</p>
                <p className='Chip2'>Chip M2 </p>
                <p className='desc1'>Luar biasa tipis dan cepat,</p>
                <p className='desc1'>sehingga Anda dapat bekerja,</p>
                <p className='desc1'>bermain, dan berkarya di</p>
                <p className='desc1'>mana saja.</p>
              </li>
            
                </li>
                <li>
                <img src={Mac4} alt="Mac" srcset="" className='Mac3'/>
                <li className='black texttitle'>
               <p className='textmac14'>MacBook Pro 13"</p> 
               <p className='Chip'>Chip M2</p>
               <p className='desc2'>Kemampuan mumpuni laptop pro</p>
                <p className='desc2'>kami yang paling portabel.</p>
              </li>
            
              </li>
              <li>
                <img src={Mac3} alt="Mac" srcset="" />
                <li className='black texttitle'>
                <p className='textmac16'>MacBook pro 14”</p>
                <p>Dan 16"</p>
                     <p className='Chip'>M2 Pro atau M2 Max chip</p>
                     <p className='desc3'>Laptop Mac paling canggih untuk</p>
                     <p className='desc3'>pekerjaan berat dengan file besar.</p>
              </li>
              </li>
              
            </ul>           
            </div>
          </div> 
          </div>   */}
          <div className='main compareflex'>
            <div className=' topTitle titleMac'>
              <h1 className='black'>Laptop mana yang tepat untuk Anda?</h1>
            </div>
            <div className='containerflex1'>
              <div className='backgroundcompare '>
              </div>
              <div className='titleMacBook'>
                <p>
                MacBook Air 13”
                </p>
               <div className='titleMacChip'>
                Chip M1
               </div>
               <div className='titleMacDesc'> 
               Laptop andal dan ringan untuk menyelesaikan pekerjaan di mana saja.
               </div>
               <div className='topTitle--links topTitleCompare1'>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
              </div>
            </div>
            <div className='containerflex2'>
              <div className='backgroundcompare '>
             
              </div>
              <div className='titleMacBook'>
                <p>
                MacBook Air  13” dan 15”
                </p>
                <div className='titleMacChip'>
                Chip M2
               </div>
               <div className='titleMacDesc'> 
               Luar biasa tipis dan cepat, sehingga Anda dapat bekerja, bermain, dan berkarya di mana saja.
               </div>
               <div className='topTitle--links topTitleCompare2'>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
              </div>
            </div>
            <div className='containerflex3'>
              <div className='backgroundcompare '>
              
              </div>
              <div className='titleMacBook'>
                <p>
                MacBook Air 13”
                </p>
                <div className='titleMacChip'>
                Chip M2
               </div>
               <div className='titleMacDesc'> 
               Kemampuan mumpuni laptop pro kami yang paling portabel.
               </div>
               <div className='topTitle--links topTitleCompare3'>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
              </div>
            </div>
            <div className='containerflex4'>
              <div className='backgroundcompare '>
             
              </div>
              <div className='titleMacBook'>
                <p>
                 MacBook Pro 14” dan 16”
                </p>
                <div className='titleMacChip'>
                M2 Pro atau M2 Max chip
               </div>
               <div className='titleMacDesc'> 
               Laptop Mac paling canggih untuk pekerjaan berat dengan file besar.
               </div>
              </div>
              <div className='topTitle--links topTitleCompare4'>
                <p href="" className='button'> Beli </p>
                <a href=""> Selengkapnya  <img src={Arrow}/> </a>
            </div>
            </div>
            
          </div>
         </div>
         <Footer/>
    </div>
  )
}

export default Mac