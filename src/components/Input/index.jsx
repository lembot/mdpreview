import React from 'react'
import marked from 'marked'

const Input = ({...props}) => {
  return (
    <div
      id={'input-wrapper'}
      className={'flex bg-gray-400 sm:w-full md:w-3/6 h-screen'}
    >
      <textarea
        style={{'resize': 'none'}}
        className={'flex bg-gray-200 rounded text-base font-sans font-normal antialiased border-solid border-4 border-gray-600 my-4 sm:w-11/12 mx-auto p-4 overflow-auto outline-none'}
        onChange={(event) => props.setMarkdown(marked(event.target.value))}
      />
    </div>
  )
}

export default Input