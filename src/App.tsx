
import './App.css'
import { AuthProvider } from './AuthContext'
import { MobileProvider } from './MobileContext'
import FloatingNavVertical from './components/FloatingNavVertical'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MobileProvider>
      <AuthProvider>
        <div className='flex flex-col'>
          <Navbar />
          <Home />
          <div className='fixed bottom-0 right-0 sm:m-10'> <FloatingNavVertical /></div>
        </div>
      </AuthProvider>
    </MobileProvider>
  )
}

export default App
