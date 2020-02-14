import React from 'react'

const Wrapper = ({...props}) => {
  return (
    <div
      className={'flex flex-wrap md:flex-no-wrap bg-gray-200'}
    >
      {props.children}
    </div>
  )
}

export default Wrapper