import { useState } from 'react'
import Navbar from './layouts/navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen bg-black'>
      <Navbar></Navbar>
    </div>
  )
}

export default App
