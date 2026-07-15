import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

function App({noOfStars = 5}) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  function handleClick(index){
    setRating(index)
    console.log(`Clicked: ${index} stars = rating ${rating}`)
  }

  function handleMouseMove(index){
    setHover(index)
    console.log(`Hovering: ${index} stars = rating ${rating}`)
  }
  
  function handleMouseLeave(){
    setHover(rating)
    console.log(`Mouse left: ${rating}`)
  }

  return (
    <>
    <br />
    <div className="stars">
      {
        [...Array(noOfStars)].map((_, index) => {
          index += 1

          return<FaStar 
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={()=> handleClick(index)}
            onMouseMove={()=> handleMouseMove(index)}
            onMouseLeave={()=> handleMouseLeave(index)}
            size={50}
          />
        })
      }
    </div>
    <br />
    <br />
    <br />
By: Talha
    </>
  )
}

export default App
