import React from 'react'

const StepTwo = ({jobData,handleRadioChange,handleSubmit,handleInputChange }) => {
    return (

        <div className="flex flex-col space-y-6 text-left max-w-576 min-w-200 p-6 text-sm">
            <div className='flex justify-between'>
                <p className='text-xl'>Create a job</p>
                <p className='text-base'>step 2</p>
            </div>
           
            <div className='md:flex md:space-x-6'>
                <div className='md:w-[50%] space-y-1 '>
                    <p>Experience</p>
                    <input
                        className="border border-gray-400 rounded w-[100%]  px-2 py-2"
                        placeholder='Minimum'
                        type="text"
                        name="expMin"
                        value={jobData.expMin}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='md:w-[50%] space-y-1 md:mt-6'>
                  
                    <input
                        className="border  border-gray-400 rounded w-[100%]  px-2 py-2"
                        placeholder='Maximum'
                        type="text"
                        name="expMax"
                        value={jobData.expMax}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className='md:flex md:space-x-6'>
                <div className='md:w-[50%] space-y-1 '>
                    <p>Salary</p>
                    <input
                        className="border border-gray-400 rounded w-[100%]  px-2 py-2"
                        placeholder='Minimum'
                        type="text"
                        name="salaryMin"
                        value={jobData.salaryMin}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='md:w-[50%] space-y-1 md:mt-6'>
                    
                    <input
                        className="border border-gray-400 rounded w-[100%]  px-2 py-2"
                        placeholder='Maximum'
                        type="text"
                        name="salaryMax"
                        value={jobData.salaryMax}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className='flex-col justify-left space-y-1 '>
                <p>Total Employees</p>
                <input
                    className="border border-gray-400 rounded w-[100%] px-2 py-2"
                    placeholder='ex. 100'
                    type="text"
                    name="totalEmployees"
                    value={jobData.totalEmployees}
                    onChange={handleInputChange}
                />
            </div>
            <div className=''>
                 <p>Apply Type</p>
                <div className='flex text-gray-400 space-x-4 text-sm mt-2'>

                <div className='flex space-x-2 space-y-1 '>
                
                 <input
                    type="radio"
                    name="applyType"
                    value="quickApply"
                    onChange={handleRadioChange}
                    className='w-4'
                    required
                />
                <p>Quick Apply</p>

                </div>
                 <div className='flex space-x-2 space-y-1'>
                 
                <input
                    type="radio"
                    name="applyType"
                    value="externalApply"
                    onChange={handleRadioChange}
                    className='w-4'
                    required
                />
                <p> External Apply</p>
               </div>

                </div>
                
                
                
            </div>
            {/* <label className="font-bold"></label>
             <label className="flex items-center space-x-2">
                 
            </label>
            <label className="flex items-center space-x-2">
               
               
            </label> */}


            {/* <label className="font-bold" htmlFor="description">
      Description:
      <textarea
        className="border border-gray-400 rounded px-3 py-2"
        name="description"
        value={jobData.description}
        onChange={handleInputChange}
        required
      />
    </label>
    <label className="font-bold" htmlFor="location">
      Location:
      <input
        className="border border-gray-400 rounded px-3 py-2"
        type="text"
        name="location"
        value={jobData.location}
        onChange={handleInputChange}
        required
      />
    </label> */}
            <div className='md:flex md:justify-end'>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded md:mt-24 w-[100%] md:w-auto"
                    onClick={handleSubmit}
                >
                    Save
                </button>
                
            </div>

        </div>

    )
}

export default StepTwo