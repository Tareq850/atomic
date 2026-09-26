import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'
import Imgs from './assets/react.svg'
import NavBar from './components/NavBar'
import Button from './components/Button'
export default function App() {
  return (
    <>
      <NavBar img={Imgs}>
        <Button size='small' variant='danger'>Contact</Button>
        <Button size='small' variant='success'>Pricing</Button>
      </NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}