import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './crud/Header'
import Form from './crud/Form'
import Main from './crud/Main'

function App() {
 

  return (
    <>
     <Header/>
    <div className='p-4 border-2 border-cyan-800 bg-gray-300 m-8 flex flex-col justify-center items-center'>
    

  <Main/>
</div>
    </>
  )
}

export default App
