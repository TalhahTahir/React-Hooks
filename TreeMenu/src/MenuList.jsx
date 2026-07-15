import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({list}) => {

  return (
    <ul className="menu-list">
        {
            list && list.length
            ? list.map((item) => <MenuItem item = {item}/>)
            : null
        }

    </ul>
  )
}

export default MenuList