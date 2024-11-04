import React from 'react'
import Icon from '../iconmoon'

const CursorStyle = ({bigCursor,cursor}) => {
  return (
      <button className={`w-full h-full p-5 border-[1px] border-[#000] hover:bg-black hover:text-white transition-[background-color, color] duration-300 ${cursor ? "bg-black text-white" : ""}`} onClick={bigCursor}>
         
          Big Cursor

          <span className='ml-3'>
              <Icon icon="mouse-pointer" size={20} />
          </span>
      </button>
  )
}

export default CursorStyle