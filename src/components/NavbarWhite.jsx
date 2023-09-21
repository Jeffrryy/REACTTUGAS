import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarWhite.css'
import Icon from '../Assets/apple_black.svg'
import SearchIcon from '../Assets/magnifying-glass-solid.svg'
const NavbarWhite = () => {
  return (
    <div>
        <div className=' navbarRoute1'>
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
        </div>
    </div>
  )
}

export default NavbarWhite