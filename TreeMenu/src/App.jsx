import { useState } from 'react'
import MenuList from './MenuList'
import menus from './Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="menu">
      <MenuList list = {menus}/>
      </div>
    </>
  )
}

export default App
