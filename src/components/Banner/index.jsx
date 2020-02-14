import React from 'react'

const Banner = ({...props}) => {
  return (
    <div
      className={'text-center h-5 bg-gray-500 p-2 text-base font-sans font-normal antialiased'}
    >
      {props.text}
    </div> 
  )
}

export default Banner