 import React from 'react'
 import './index.css'
 import {Route,Routes,BrowserRouter} from 'react-router-dom'
 import Mac from './components/Page/Mac'
 import Ipad from './components/Page/Ipad'
 import Watch from './components/Page/Watch'
 import Iphone from './components/Page/Iphone'
 import Airpods from './components/Page/Airpods'
 import TvdanRumah from './components/Page/TvdanRumah'
 import Hiburan from './components/Page/Hiburan'
 import Dukungan from './components/Page/Dukungan'
 import TempatMembeli from './components/Page/TempatMembeli'
import Home from './components/Page/Home'
 const App = () => {
   return (
    <BrowserRouter>
    <Routes>
      <Route path='/' >
        <Route index element={<Home/>}/>
        <Route path='mac' element={<Mac/>}/>
        <Route path='ipad' element={<Ipad/>}/>
        <Route path='iphone' element={<Iphone/>}/>
        <Route path='watch' element={<Watch/>}/>
        <Route path='airpods' element={<Airpods/>}/>
        <Route path='tvdanrumah' element={<TvdanRumah/>}/>
        <Route path='hiburan' element={<Hiburan/>}/>
        <Route path='dukungan' element={<Dukungan/>}/>
        <Route path='tempatmembeli' element={<TempatMembeli/>}/>

      </Route>
    </Routes>
    </BrowserRouter>

   )
 }
 
 export default App