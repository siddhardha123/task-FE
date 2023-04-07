import React from 'react'
import netflix from './netflix.png'
// import CustomButton from './CustomButton';
const JobCard = ({ id,title, company, industry, location, remoteType, expMin, expMax, salaryMin,
salaryMax,
totalEmployees,
applyType }) => {

    return (
        <>
           <div className='flex rounded-md md:w-[100%] bg-white' id={id}>
               <div className='w-12'>
                     <img src={netflix} alt="temp" />
               </div>
               <div className='ml-4'>
                   <div className='text-justify '>
                    <p className='text-xl'>{title}</p>
                    <p>{company}-{industry}</p>
                    <p className='text-gray-400'>{location}({remoteType})</p>
                    <p>Partime (9:00AM to 5:00PM IST)</p>
                    <p>Expericence ({expMin}-{expMax}years)</p>
                    <p>INR(₹) {salaryMin}-{salaryMax} / month</p>
                    <p>{totalEmployees} employees</p>
                    </div>
                    <div>
                       {/* <CustomButton />
                       <CustomButton/> */}
                    </div>

               </div>


           </div>
        </>
    )
}

export default JobCard