import React from 'react'

const Wrapper = ({...props}) => {
  return (
    <div
      className={'flex sm:flex-wrap md:flex-no-wrap bg-gray-200'}
    >
      {props.children}
    </div>
  )
}

export default Wrapper