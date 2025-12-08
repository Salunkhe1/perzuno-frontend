import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarComponent from './Pages/Navbar'
import { ExportiseComponent } from './Pages/Expertise'
import { FooterComponent } from './Pages/Footer'
import Contact from './Pages/Contact'

import HomeComponent from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavbarComponent></NavbarComponent>
    
    <HomeComponent></HomeComponent>
    <ExportiseComponent></ExportiseComponent>
          <Contact />

    <FooterComponent></FooterComponent>
    
    </>
  )
}

export default App
