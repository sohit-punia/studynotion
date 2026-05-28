import React from 'react'

const Highlighted = ({text}) => {
  return (
    <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]'>
      {text}
    </span>
  )
}


export default Highlighted