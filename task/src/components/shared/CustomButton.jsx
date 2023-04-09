import React from 'react'

const CustomButton = ({props}) => {
  return (
        <button onClick={props.action} className={`bg-[#1597E4] px-5 py-2 rounded-lg`}>
              {props.text}    
        </button> 
  )
}

export default CustomButton