import React from 'react'
import DOMPurify from 'dompurify'
import parse from 'html-react-parser'

const Display = ({...props}) => {
  return (
    <div
      id={'display-wrapper'}
      className={'flex bg-gray-400 sm:w-full md:w-3/6 h-screen'}
    >
      <div
        className={'flex-col bg-gray-200 rounded text-base font-sans font-normal antialiased border-solid border-4 border-gray-600 my-4 sm:w-11/12 mx-auto p-4 overflow-auto'}
      >
        {parse(DOMPurify.sanitize(props.markdown))}
      </div>
    </div>
  )
}

export default Display