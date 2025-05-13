import { useState } from 'react'
import { Button } from './components/ui/button'
import "./index.css"
import { NavBar } from './navbar'
function App() {
  return (
    <div className='bg-theme-1000 h-screen'>
      <NavBar />
      <div className='flex flex-col px-8 gap-8'>
        <div className="flex flex-row items-center bg-gradient-to-r from from-accent-semi to-transparent border-3 rounded-lg border-accent-border">
          <div className='flex flex-col items-center justify-center w-56 border-theme-1000 bg-accent-border border-3 rounded-lg'>
            <img src={"https://i.imgur.com/JfndmbS.jpeg"} className='rounded-lg bg-amber-300' alt="picture of me" />
          </div>
          <p className='text-2xl font-bold text-theme-300'>Joakim Leed but without much beard, btw this is blog site</p>
        </div>
      </div>
    </div>
  )
}

export default App
