import React from 'react'
import netflix from './netflix.png'
// import CustomButton from './CustomButton';
const JobCard = ({ id,title, company, industry, location, remoteType, expMin, expMax, salaryMin,
salaryMax,
totalEmployees,
applyType }) => {

    return (
        <>
           <div className='flex rounded-md md:w-[100%] bg-white p-6 mt-4 md:mt-0' id={id}>
               <div className='w-12'>
                     <img src={netflix} alt="temp" />
               </div>
               <div className='ml-4'>
                   <div className='text-justify text-base'>
                    <p className='text-2xl'>{title}</p>
                    <p>{company}-{industry}</p>
                    <p className='text-[#4D4D4D]'>{location}({remoteType})</p>
                    <p className='mt-6'>Partime (9:00AM to 5:00PM IST)</p>
                    <p className='mt-2'>Expericence ({expMin}-{expMax}years)</p>
                    <p className='mt-2'>INR(₹) {salaryMin}-{salaryMax} / month</p>
                    <p className='mt-2'>{totalEmployees} employees</p>
                    </div>
                    <div className='justidy-left flex mt-6'>
                       <button className={`py-2 px-4 rounded ${applyType != "External Apply" ? 'bg-[#1597E4] text-white' : 'bg-white text-[#1597E4] border border-[#1597E4] '}`}>{applyType}</button>
                    </div>

               </div>


           </div>
        </>
    )
}

export default JobCard