import React from 'react'

const CustomInput = ({label,placeholder,style,handleChange,value}) => {
    const handleChangeInternal = (event) => {
        handleChange(event.target.value);
      };
  return (
    <div className='flex-col'>
         <p>{label}<span className='text-[#D86161]'>*</span></p>
         <input type="text" name="" id="" placeholder={placeholder} className={`${style}`} handleChange={handleChangeInternal} value={value}/>
    </div>
  )
}

export default CustomInput