
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './Components/Pages/Home'
import { CartProvider } from './Context/CartContext'
import { Cart } from './Components/Pages/Cart'
import { Wish } from './Components/Pages/Wish'
import { WishProvider } from './Context/WishContext'
import { AuthLogin } from './Components/Pages/AuthLogin'
import { LoginProvider } from './Context/LoginContext'
import './App.css'
import { Signup } from './Components/Pages/Signup'

function App() {
  

  return (
    <>
    <LoginProvider>
  <CartProvider>
    <WishProvider>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wish' element={<Wish/>}/>
      <Route path='/login' element={<AuthLogin/>}/>
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
     </BrowserRouter>
     </WishProvider>
     </CartProvider>
     </LoginProvider>
    </>
  )
}

export default App
