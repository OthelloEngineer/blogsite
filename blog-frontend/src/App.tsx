import { useState } from 'react'
import { Button } from './components/ui/button'
import "./index.css"
import { NavBar } from './navbar'
import { RightCol } from './templates/RightCol'
import { LeftCol } from './templates/LeftCol'
function App() {
  return (
    <div className='bg-theme-1000 h-screen'>
      <NavBar />
      <div className='flex flex-row px-8 justify-between gap-16'>
        <div className='w-1/4'>
        <LeftCol />
        </div>
        <div className="flex flex-row items-center bg-gradient-to-r from from-accent-semi to-transparent rounded-lg w-1/2 gap-2 h-fit ">
          <div className='flex flex-col items-center justify-center w-96 border-theme-1000 bg-accent-border border-3 rounded-lg'>
            <img src={"https://i.imgur.com/JfndmbS.jpeg"} className='rounded-sm bg-amber-300' alt="picture of me" />
          </div>
          <div className='flex flex-col gap-6 w-max'>
            <p className='text-2xl font-bold text-theme-300 justify-self-start font-theme'>Welcome to my blog site!</p>
            <p className="text-theme-300 justify-self-end text-lg border-b-1 w-4/5 border-theme-600 font-theme">This is a blog site where I write about things that interest me, like programming, technology, and other stuff. Thank you for coming here!</p>
          </div>
        </div>
        <div className='w-1/4'>
          <RightCol />
        </div>
      </div>
    </div>
  )
}

export default App
