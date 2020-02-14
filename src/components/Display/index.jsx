import React from 'react'
import DOMPurify from 'dompurify'
import parse from 'html-react-parser'
import Banner from '../Banner'

const Display = ({...props}) => {
  return (
    <div
      id={'display-wrapper'}
      className={'flex flex-col bg-gray-400 w-full md:w-3/6 h-screen'}
    >
      <Banner 
        text={'↓ html comes out here ↓'}
      />
      <div 
        className={'h-full flex-col bg-gray-200 rounded text-base font-sans font-normal antialiased border-solid border-4 border-gray-600 my-4 w-10/12 xl:w-11/12 mx-auto p-4 overflow-auto'}
      >
        {parse(DOMPurify.sanitize(props.markdown))}
      </div>
    </div>
  )
}

export default Display