import { useState } from 'react'
import React  from 'react'
import MenuList from './MenuList'
import { FaPlus, FaMinus } from 'react-icons/fa'

const MenuItem = ({ item }) => {

    const [displayChildren, setDisplayChildren] = React.useState({})

    function handleToggle(label){
        setDisplayChildren((prev) => {
            return {
                ...prev,
                [label] : !prev[label]
            }
        });
    }

  return (
    <li>
        <div className="menu-item">
            <p>{item.label}</p>
            {
                item.children && item.children.length
                ? (
                    <span onClick={() => handleToggle(item.label)}>
                        {
                            displayChildren[item.label] ? <FaMinus color="#fff" size={25} /> : <FaPlus color="#fff" size={25} />
                        }
                    </span>
                )
                : null
            }
        </div>

        {
            item && item.children && item.children.length > 0 && displayChildren[item.label]
            ? <MenuList list = {item.children}/>
            : null
        }
    </li>
  )
}

export default MenuItem