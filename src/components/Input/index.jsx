import React from 'react'
import marked from 'marked'
import Banner from '../Banner'

const Input = ({...props}) => {
  return (
    <div
      id={'input-wrapper'}
      className={'flex flex-col bg-gray-400 w-full md:w-3/6 h-screen'}
    >
      <Banner 
        text={'↓ markdown goes here ↓'}
      />
      <textarea
        style={{'resize': 'none'}}
        className={'flex bg-gray-200 h-full rounded text-base font-sans font-normal antialiased border-solid border-4 border-gray-600 my-4 w-10/12 xl:w-11/12 mx-auto p-4 overflow-auto outline-none'}
        onChange={(event) => props.setMarkdown(marked(event.target.value))}
      />
    </div>
  )
}

export default Input