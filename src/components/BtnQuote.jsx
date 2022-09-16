import React from 'react'

export const BtnQuote = ({randomColor,getRandom}) => {
        const backgroundObj={
        backgroundColor:randomColor
        }

  return (
    <div>
      <button  onClick={getRandom} className='card_btn'  style={backgroundObj}>&#62;</button>
    </div>
  )
}
