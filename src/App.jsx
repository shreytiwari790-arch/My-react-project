
import { Route,Routes,Link } from 'react-router-dom'
import './App.css'
import Home from './Componenets/Pages/Home'
import About from './Componenets/Pages/About'
import Menu from './Componenets/Pages/Menu'
import Header from './Componenets/Layouts/Header'
function App() {
  

  return (
    <>
    
    
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        
        <Route path="/about" element={<About />} />

        <Route path="/menu" element={<Menu/>} />
      </Routes>
    </>
  )
}

export default App





