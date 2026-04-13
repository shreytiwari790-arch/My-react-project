
import { Route,Routes,Link } from 'react-router-dom'
import './App.css'
import Home from './Componenets/Pages/Home'
import About from './Componenets/Pages/About'
import Menu from './Componenets/Pages/Menu'
import Login from './Componenets/Pages/Login'
import Admin from './Componenets/Pages/Admin'
import ViewData from './Componenets/Pages/ViewData'
import 'bootstrap-icons/font/bootstrap-icons.css';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/viewdata" element={<ViewData/>} />
      </Routes>
    </>
  )
}

export default App





