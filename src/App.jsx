import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TailwindTest from './components/TailwindTest'
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold">Hello Tailwind!</h1>
        <p className="mt-4 text-gray-600">If the navbar is styled, Tailwind is working ✅</p>
      </div>
    </div>
    </>
  )
}

export default App
