import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export function RatingCount() {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)

    // other logic
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value, index) => console.log(value, index)

  return (
    <div className='App flex flex-row'>
      <Rating
        
        /* Available Props */
      />
    </div>
  )
}