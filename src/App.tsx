import './index.css'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          {/* <Route path='/about' element={<About />} />
        <Route path='/outline' element={<Outline />} />
        <Route path='/policy' element={<Policy />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
