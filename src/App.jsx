import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <div className='min-h-screen'>
      <Navbar />
      <main className="p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Welcome to Internship-Sim</h1>
        <p className="mt-2 text-gray-600">Practicing React + Tailwind like a real intern 🚀</p>
      </main>
    </div>
  )
}

export default App
