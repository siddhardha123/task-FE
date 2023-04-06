import React from 'react'
import CustomInput from './shared/CustomInput'
const StepOne = ({ jobData, handleInputChange, handleNext,errors}) => {


    return (
        <div className="flex flex-col space-y-6 text-left max-w-576 min-w-200 p-6 text-sm">
            <div className='flex justify-between'>
                <p className='text-xl'>Create a job</p>
                <p className='text-base'>step 1</p>
            </div>
            <div className='flex-col justify-left space-y-1 '>
                <p>Job title<span className='text-red-500'>*</span></p>
                <input
                    className="border border-gray-400 rounded w-[100%] px-2 py-2"
                    placeholder='ex. UX UI Designer'
                    type="text"
                    name="title"
                    value={jobData.title}
                    onChange={handleInputChange}
                />
                {errors.title && (
    <span className="text-red-500">{errors.title}</span>
    )}
            </div>
            <div className='flex-col justify-left space-y-1 '>
                <p>Company name<span className='text-red-500'>*</span></p>
                <input
                    className="border border-gray-400 rounded w-[100%] px-2 py-2"
                    placeholder='ex. Google'
                    type="text"
                    name="company"
                    value={jobData.company}
                    onChange={handleInputChange}
                />
                {errors.company && (
    <span className="text-red-500">{errors.company}</span>
    )}
            </div>
            <div className='flex-col justify-left space-y-1  '>
                <p>Industry<span className='text-red-500'>*</span></p>
                <input
                    className="border border-gray-400 rounded w-[100%] px-2 py-2"
                    placeholder='ex. Information Technology '
                    type="text"
                    name="industry"
                    value={jobData.industry}
                    onChange={handleInputChange}
                />
                {errors.industry && (
    <span className="text-red-500">{errors.industry}</span>
    )}
            </div>
            <div className='md:flex md:space-x-6'>
                <div className='md:w-[50%] space-y-1 '>
                    <p>Location</p>
                    <input
                        className="border border-gray-400 rounded w-[100%]  px-2 py-2"
                        placeholder='ex. Chennai'
                        type="text"
                        name="location"
                        value={jobData.location}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='md:w-[50%] space-y-1 '>
                    <p>Remote type</p>
                    <input
                        className="border border-gray-400 rounded w-[100%]  px-2 py-2"
                        placeholder='ex. In-office'
                        type="text"
                        name="remoteType"
                        value={jobData.remoteType}
                        onChange={handleInputChange}
                    />
                </div>
            </div>


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
                    onClick={handleNext}
                >
                    Next
                </button>
                
            </div>

        </div>
    )
}

export default StepOne