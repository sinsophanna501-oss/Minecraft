import './App.css'
import HeaderTop from './components/headerTop.jsx'
import Home from './Home/home.jsx'
import Inventory from './components/inventory.jsx'
import Charactors from './Charactors/main_charactors.jsx'
import { Routes, Route } from 'react-router'
const App = () => {
  return (
    <div>
          <HeaderTop/>
          <Routes>
            <Route path = "/" element={<Home/>} />
            <Route path = "/inventory/*" element={<Inventory/>}/>
            <Route path = "/charactors" element={<Charactors/>}/>
          </Routes>




    </div>
  )
}

export default App