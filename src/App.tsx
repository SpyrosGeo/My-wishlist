import { useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import pb from './utils'
import { logout } from './services/auth'
import Wishlist from './components/Wishlist'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(pb.authStore.isValid)
  const handleLogOut = () => {

    logout()
    setIsLoggedIn(false)  
  }

  return (
    <>
  {isLoggedIn ? (<div>
    <button onClick={handleLogOut}>Log Out</button>
    <Wishlist/>
    </div>):
  <Login/>}
    </>
  )
}

export default App
