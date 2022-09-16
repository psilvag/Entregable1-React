import React from 'react'

export const QuoteBox = ({randomQuote,randomColor}) => {

   const colorObj={
    color:randomColor
   }
 

  return (
    <article style={colorObj} className='card'>
        <div className='card_info_quote'>
        <span>&#8220;</span>
        </div>
        <div className='card_info_Author'>
        <p  className='card_Quote'>{randomQuote.quote}</p>
        <h2 className='card_Author'>{randomQuote.author}</h2>
        </div>
       
       
    </article>
  )
}
