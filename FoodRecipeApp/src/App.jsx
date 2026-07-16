import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Details from './pages/details'
import Favorites from './pages/favorites'

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
    <div className="min-h-screen bg-stone-200 text-stone-800 text-lg selection:bg-amber-200 selection:text-stone-900 font-sans">
        <Navbar />
        <main className="p-4 sm:p-6 lg:p-8">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/item/:id' element={<Details />} />
                <Route path='/recipe/:id' element={<Details />} />
            </Routes>
        </main>
    </div>
</div>
  )
}

export default App
