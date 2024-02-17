import React from 'react'
import './Weather.css'

export const Weathers = () => {
  return (
    <div className='weather'>
      <h1 className='weather__headings'>Weather Reports!</h1>
      <p className='weather__smalltxt'><div className='weather__TYPEtxt'><input type="text" placeholder="Type"/></div> to search..</p>
    </div>
  )
}
