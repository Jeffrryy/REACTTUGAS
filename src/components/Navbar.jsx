import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Assets/apple.svg'
import SearchIcon from '../Assets/search.svg'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='container'>
        <div className='navbar'>
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
    </nav>
  )
}

export default Navbar